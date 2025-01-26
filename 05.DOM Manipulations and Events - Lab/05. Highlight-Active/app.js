function focused() {
  let inputs = document.querySelectorAll('input[type="text"]');

  inputs.forEach((input) =>
    input.addEventListener('focus', () => {
      let currentDiv = input.parentNode;
      currentDiv.setAttribute('class', 'focused');
    })
  );

  inputs.forEach((input) =>
    input.addEventListener('blur', () => {
      let currentDiv = input.parentNode;
      currentDiv.classList.remove('focused');
    })
  );
}
