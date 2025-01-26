function deleteByEmail() {
  let columns = document.querySelectorAll(
    '#customers tbody tr td:nth-child(2)'
  );
  let email = document.querySelector('input[name="email"]').value;
  let resultDiv = document.getElementById('result');

  for (const column of columns) {
    if (column.textContent === email) {
      let row = column.parentNode;
      row.parentNode.removeChild(row);
      resultDiv.textContent = 'Deleted.';
      return;
    }
    resultDiv.textContent = 'Not found.';
  }
}
