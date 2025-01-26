function create(words) {
  const resultDiv = document.getElementById('content');

  for (const word of words) {
    let div = document.createElement('div');
    let p = document.createElement('p');
    p.textContent = word;
    p.style.display = 'none';

    div.addEventListener('click', function () {
      p.style.display = 'block';
    });

    div.appendChild(p);
    resultDiv.appendChild(div);
  }
}
