function validate() {
  const pattern = /[a-z]+@[a-z]+.[a-z]+/;
  let email = document.getElementById('email');
  email.addEventListener('change', function () {
    if (!pattern.test(email.value)) {
      email.classList.add('error');
    } else {
      email.classList.remove('error');
    }
  });
}
