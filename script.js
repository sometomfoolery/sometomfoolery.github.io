document.addEventListener('DOMContentLoaded', () => {
    
    class span_wrapped_content
    {
        constructor(unwrapped_content)
        {
            this.length = unwrapped_content.length;
            this.content = this.span_wrap(unwrapped_content);
        }

        span_wrap(content)
        {
            let wrapped_content = ""
            for (let i = 0; i < content.length; i++)
            {
                wrapped_content += `<span id=\"span${i}\">${content[i]}</span>`;
            }
            return wrapped_content;
        }
    }

    const title = document.getElementById('title');
    const span_title = new span_wrapped_content(title.innerHTML.trim());
    title.innerHTML = span_title.content;

    // Give each letter a different color
    // Genereate a list of colors
    const colors = generate_color_list();

    apply_colors(title, span_title.length, colors);
    
    function apply_colors(element, length, color_list, offset = 0)
    {
        for (let i = 0, j = offset; i < length; i++)
        {
            const characterSpan = element.querySelector(`span#span${i}`);

            if (characterSpan.innerHTML == ' ') continue;

            letterSpan.style.color = color_list[j];
            j++;
            j %= color_list;
        }
    }

    let color_offset = 0;
    setInterval(() => {
        apply_colors(title, span_title.length, colors, color_offset);
        color_offset++;
        color_offset %= colors.length;
    }, 1000);

    /*
    *
    * Helper Functions
    * 
    */

    function generate_color_list()
    {
        // 0 is red, 1 is green, 2 is blue
        let deltaColor = 1;
        let goingUp = true;
        let color = [0xFF, 0x00, 0x00];
        let colors = [];
        
        const delta = 0x10;

        do
        {
            colors.push(to_hex_string(color));

            if (goingUp)
            {
                color[deltaColor] = Math.min(color[deltaColor] + delta, 0xFF);

                if (color[deltaColor] == 0xFF)
                {
                    goingUp = false;
                    deltaColor -= 1;
                    deltaColor = modulo(deltaColor,  3);
                }
            }
            else
            {
                color[deltaColor] = Math.max(color[deltaColor] - delta, 0x00);

                if (color[deltaColor] == 0x00)
                {
                    goingUp = true;
                    deltaColor += 2;
                    deltaColor = modulo(deltaColor,  3);
                }
            }
        }
        while (to_hex_string(color) != colors[0])

        return colors;
    }

    function to_hex_string(color_array)
    {
        let r = to_hex_value(color_array[0]);
        let g = to_hex_value(color_array[1]);
        let b = to_hex_value(color_array[2]);

        return '#' + r + g + b;
    }

    function to_hex_value(number)
    {
        let num_string = number.toString(16);
        if (num_string.length == 1)
        {
            num_string = "0" + num_string;
        }
        return num_string;
    }

    // The remainder operator (%) does not work with negative numbers, this fixes that
    function modulo(value, base)
    {
        return ((value % base) + base) % base;
    }

});