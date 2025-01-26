function generateReport() {
  const headers = document.querySelectorAll('input[type="checkbox"]');
  const rows = document.querySelectorAll('tbody tr');
  const output = document.getElementById('output');

  const selected = Array.from(headers) // Превръщаме NodeList от чекбоксове в масив
    .map((checkbox, index) => [checkbox, index]) // Създаваме масив от двойки [чекбокс, индекс]
    .filter(([checkbox]) => checkbox.checked) // Филтрираме само чекнатите чекбоксове
    .map(([checkbox, index]) => [checkbox.name, index]); // Създаваме масив от двойки [име на колоната, индекс]

  // Създаваме масив 'rowData', който ще съдържа данните от таблицата:
  const rowData = Array.from(rows) // Превръщаме HTMLCollection от редове в масив
    .map((row) => Array.from(row.children).map((cell) => cell.textContent)); // Вземаме текстовото съдържание на всяка клетка

  // Генерираме JSON резултат и го поставяме в текстовото поле 'output':
  output.value = JSON.stringify(
    rowData.map(
      (
        row // Обхождаме всеки ред от данните
      ) =>
        selected.reduce((acc, [colName, colIndex]) => {
          // За всяка избрана колона
          acc[colName] = row[colIndex]; // Добавяме свойство към обекта с име на колоната и стойност от съответната клетка
          return acc; // Връщаме натрупания обект
        }, {}) // Започваме с празен обект
    ),
    null,
    2 // Форматираме JSON с отстъп за по-добра четимост
  );
}
