function solve() {
  const sections = document.querySelectorAll('section');
  const resultUl = document.getElementById('results');
  const resultEl = document.querySelector('.results-inner h1');
  let count = 0;
  let correctAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'
    ];
    let correctAnswersCount = 0;
  document.body.addEventListener('click', (e) => {
    if (e.target.tagName == 'P') {
      const answer = e.target.textContent;
      if(correctAnswers.includes(answer)) {
        correctAnswersCount++;
      }
      
      if(count !== 2) {
        sections[count].style.display = 'none';
        sections[count + 1].style.display = 'block';
        count++;
      } else {
        sections[count].style.display = 'none';
        resultUl.style.display = 'block';
        if(correctAnswersCount === 3) {
          resultEl.textContent = 'You are recognized as top JavaScript fan!';
        } else {
          resultEl.textContent = `You have ${correctAnswersCount} right answers`
        }
      }
    }
  });
}
