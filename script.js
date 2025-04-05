document.addEventListener('DOMContentLoaded', () => {

    const title = document.getElementById('title');

    // Wrap each letter in its own <span> tag
    const sentence = title.innerHTML;
    let new_sentence = "";
    for (let i = 0; i < sentence.length; i++)
    {
        new_sentence += `<span id=\"span${i}\" style="inline">`;
        new_sentence += sentence[i];
        new_sentence += "</span>";
    }
    title.innerHTML = new_sentence;

    const span5 = title.querySelector('span#span5');
    span5.style += 'color: red;';

});