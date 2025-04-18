document.addEventListener('DOMContentLoaded', () => {

    const title = document.getElementById('title');
    const span_title = new span_wrapped_content(title.innerHTML.trim());
    title.innerHTML = span_title.content;

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
                wrapped_content = `<span id=\"span${i}\">${content[i]}</span>`;
            }
            return content;
        }
    }

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
        let colors = [];
        let red = 0xFF, green = 0x00, blue = 0x00;

        const delta = 0x80;

        // Red to green
        while (red > 0)
        {
            colors.push(to_hex_string(red, green, blue));

            red -= delta;
            red = Math.max(red, 0);
            green = 0xFF - red;
        }

        // Green to blue
        while (green > 0)
        {
            colors.push(to_hex_string(red, green, blue));

            green -= delta;
            green = Math.max(green, 0);
            blue = 0xFF - green;
        }
        
        // Blue to red
        while (blue > 0)
        {
            colors.push(to_hex_string(red, green, blue));

            blue -= delta;
            blue = Math.max(blue, 0);
            red = 0xFF - blue; 
        }

        return colors;
    }

    function to_hex_string(red, green, blue)
    {
        let r = to_hex_value(red);
        let g = to_hex_value(green);
        let b = to_hex_value(blue);

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