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
    const num_cols = colors.length;

    // Loop thru each letter, giving it a color from the list
    for (let i = 0, j = 0; i < span_title.length; i++)
    {
        const letterSpan = title.querySelector(`span#span${i}`);

        //Early return in case of space
        if (letterSpan.innerHTML == ' ') continue;

        // Color letter if not a space
        letterSpan.style.color = colors[j];

        // Increment color index variable (j)
        j++;
        j %= num_cols;
    }

    /*
    *
    * Helper Functions
    * 
    */

    // TODO: This color list has values that ALWAYS add up to FF
    // Instead, one should be at FF, while the other counts up to FF,
    // Then when the second reached FF, the first should count down
    // to 00, then the third should count up to FF, etc.
    function generate_color_list()
    {
        /*
        *
        *   FF 00 00 - FF 40 00 - FF 80 00 - FF C0 00
        *   FF FF 00 - C0 FF 00 - 80 FF 00 - 40 FF 00
        *   00 FF 00 - 00 FF 40 - 00 FF 80 - 00 FF C0
        *   00 FF FF - 00 C0 FF - 00 80 FF - 00 40 FF
        *   00 00 FF - 40 00 FF - 80 00 FF - C0 00 FF
        *   FF 00 FF - FF 00 C0 - FF 00 80 - FF 00 40
        * 
        */

        const Color = {
            RED: 0,
            GREEN: 1,
            BLUE: 2
        };

        let deltaColor = Color.GREEN;
        let goingUp = true;
        let color = [0xFF, 0x00, 0x00];
        let colors = [];
        
        const delta = 0xFF;

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
                    deltaColor %= 3;
                }
            }
            else
            {
                color[deltaColor] = Math.max(color[deltaColor] - delta, 0x00);

                if (color[deltaColor] == 0x00)
                {
                    goingUp = true;
                    deltaColor += 2;
                    deltaColor %= 3;
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

});