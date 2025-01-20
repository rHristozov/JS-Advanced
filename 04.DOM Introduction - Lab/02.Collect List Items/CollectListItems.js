function extractText() {
    let liItems = document.querySelectorAll('#items li');
    let textArea = document.querySelector('#result');

    for(let li of liItems) {
        textArea.value += li.textContent + '\n'
    }
}