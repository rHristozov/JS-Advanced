function addItem() {
    const select = document.getElementById('menu')
    let newText = document.getElementById('newItemText');
    let newValue = document.getElementById('newItemValue');

    let option = document.createElement('option');
    option.textContent = newText.value;
    option.value = newValue.value;

    select.appendChild(option)

    newText.value = '';
    newValue.value = '';
}