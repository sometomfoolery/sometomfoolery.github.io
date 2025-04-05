document.addEventListener('DOMContentLoaded', () => {

    const title = document.getElementById('title');

    // Wrap each letter in its own <span> tag
    const sentence = title.innerHTML.trim();
    let new_sentence = "";
    for (let i = 0; i < sentence.length; i++)
    {
        new_sentence += `<span id=\"span${i}\">`;
        new_sentence += sentence[i];
        new_sentence += "</span>";
    }
    title.innerHTML = new_sentence;

    // -- Give each letter a different color
    // Genereate a list of colors
    const colors = ['#FF0000', '#FFFF00', '#00FF00', '#00FFFF', '#0000FF', '#FF00FF'];
    const num_cols = colors.length;

    // Loop thru each letter, giving it a color from the list
    for (let i = 0, j = 0; i < new_sentence.length; i++)
    {
        console.log(`Starting loop with i: ${i}, j: ${j}`);

        const letterSpan = title.querySelector(`span#span${i}`);
        console.log(letterSpan.innerHTML);

        //Early return in case of space
        if (letterSpan.innerHTML == ' ') continue;

        // Color letter if not a space
        letterSpan.style.color = colors[j];

        // Increment color index variable (j)
        j++;
        j %= num_cols;
        console.log(`Incremented j to ${j}`);
    }

});