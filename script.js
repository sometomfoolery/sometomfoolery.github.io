document.addEventListener('DOMContentLoaded', () => {

    const title = document.getElementById('title');

    // Wrap each letter in its own <span> tag
    console.log(title.innerHTML);
    const sentence = title.innerHTML.trim();
    let new_sentence = "";
    for (let i = 0; i < sentence.length; i++)
    {
        new_sentence += `<span id=\"span${i}\" style="inline;">`;
        new_sentence += sentence[i];
        new_sentence += "</span>";
    }
    title.innerHTML = new_sentence;
    console.log(title.innerHTML);

    // -- Give each letter a different color
    // Genereate a list of colors
    const colors = ['#FF0000', '#FFFF00', '#00FF00', '#00FFFF', '#0000FF', '#FF00FF'];

    // Loop thru each letter, giving it a color from the list
    for (let i = 0; i < new_sentence.length; i++)
    {

    }

    // Test: change 5th letter to red
    const testspan = title.querySelector('span#span5');
    testspan.style.color = 'red';

});