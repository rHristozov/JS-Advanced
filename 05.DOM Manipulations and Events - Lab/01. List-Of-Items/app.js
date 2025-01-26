function addItem() {
  const input = document.getElementById('newItemText');
  console.log(input.value);

  let newLi = document.createElement('li');
  newLi.textContent = input.value;
  const ul = document.getElementById('items');
  ul.appendChild(newLi);
}
