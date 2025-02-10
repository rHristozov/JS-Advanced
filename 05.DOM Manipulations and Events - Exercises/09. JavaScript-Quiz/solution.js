function solve() {
  document.body.addEventListener('click', (e) => {
    let count = 0;
    if (e.target.tagName == 'P') {
      console.log(e.target.textContent);
      // e.target.tagName.textContent;
    }
  });
}
