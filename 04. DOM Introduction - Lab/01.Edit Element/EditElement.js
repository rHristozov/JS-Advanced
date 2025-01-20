function editElement(item, text, replaceText) {
    const content = item.textContent;
    const matcher = new RegExp(text, 'g');
    const edited = content.replace(matcher, replaceText);
    item.textContent = edited;
}