function solve() {
  let text = document.getElementById('text').value;
  text = text.toLowerCase();
  let currentCase = document.getElementById('naming-convention').value;

  let result = document.getElementById('result');
  let newText = '';

  if (currentCase == 'Pascal Case') {
    for (let i = 0; i < text.length; i++) {
      if (i === 0) {
        newText += text[i].toUpperCase();
        continue;
      }
      if (text[i] === ' ') {
        newText += text[i + 1].toUpperCase();
        i++;
      } else {
        newText += text[i];
      }
    }
  } else if (currentCase === 'Camel Case') {
    for (let i = 0; i < text.length; i++) {
      if (text[i] === ' ') {
        newText += text[i + 1].toUpperCase();
        i++;
      } else {
        newText += text[i];
      }
    }
  } else {
    result.innerHTML += 'Error!';
  }
  result.innerHTML += `${newText}`;
}
