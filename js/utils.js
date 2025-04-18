export class span_wrapped_content
{
    constructor(element)
    {
        this.element = element;
        let trimmed_content = element.innerHTML.trim();
        this.length = trimmed_content.length;
        this.content = this.span_wrap(trimmed_content);
        element.innerHTML = this.content;
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