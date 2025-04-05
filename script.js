document.addEventListener('DOMContentLoaded', () => {

    const title = document.getElementById('title');

    // Wrap each letter in its own <p> tag
    const sentence = title.innerHTML;
    let new_sentence = "";
    for (let i = 0; i < sentence.length; i++)
    {
        new_sentence += "<p>"
        new_sentence += sentence[i];
        new_sentence += "</p>"
    }

});