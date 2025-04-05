document.addEventListener('DOMContentLoaded', () => {

    const title = document.getElementById('title');

    // Wrap each letter in its own <p> tag
    const sentence = title.innerHTML;
    let new_sentence = "";
    for (let i = 0; i < sentence.length; i++)
    {
        new_sentence += `<p id=\"p${i}\">`
        new_sentence += sentence[i];
        new_sentence += "</p>"
    }
    title.innerHTML = new_sentence;

    const p5 = title.getElementById('p5');
    p5.style = 'color: red;';

});