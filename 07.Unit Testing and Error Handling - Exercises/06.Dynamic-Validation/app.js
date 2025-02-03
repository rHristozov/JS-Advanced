function validate() {
    const input = document.getElementById('email');
    const emailPattern = /[a-z]+@[a-z]+.[a-z]+/

    input.addEventListener('change', () => {
        if(!emailPattern.test(input.value)) {
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    })
}