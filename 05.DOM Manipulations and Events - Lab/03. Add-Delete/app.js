function addItem() {
  let listItems = document.getElementById('items');
  let input = document.getElementById('newItemText');

  let list = document.createElement('li');
  list.textContent = input.value;

  let remove = document.createElement('a');
  remove.textContent = '[Delete]';
  remove.href = '#';

  remove.addEventListener('click', deleteItem);

  function deleteItem() {
    list.remove();
  }

  list.appendChild(remove);
  listItems.appendChild(list);

  input.value = '';
}
