window.addEventListener('load', solve);

function solve() {
  // selecting elements
  const colorEl = document.getElementById('colors');
  const motorcycleEl = document.getElementById('motorcycles');
  const dateEl = document.getElementById('datetime');
  const nameEl = document.getElementById('full-name');
  const emailEl = document.getElementById('email');
  const testRideBtn = document.getElementById('test-ride-btn');
  const previewUl = document.getElementById('preview-list');
  const completeUl = document.getElementById('complete-list');
  const divData = document.querySelector('.data-view');

  testRideBtn.addEventListener('click', () => {
    if (
      colorEl.value === '' ||
      motorcycleEl.value === '' ||
      dateEl.value === '' ||
      nameEl.value === '' ||
      emailEl.value === ''
    ) {
      return;
    }
    // creating elements
    const pColor = document.createElement('p');
    pColor.textContent = `Color: ${colorEl.value}`;

    const pMotorcycle = document.createElement('p');
    pMotorcycle.textContent = `Model: ${motorcycleEl.value}`;

    const pDate = document.createElement('p');
    pDate.textContent = `Test Ride On: ${dateEl.value}`;

    const pName = document.createElement('p');
    pName.textContent = `For: ${nameEl.value}`;

    const pEmail = document.createElement('p');
    pEmail.textContent = `Contact: ${emailEl.value}`;

    const article = document.createElement('article');
    article.appendChild(pColor);
    article.appendChild(pMotorcycle);
    article.appendChild(pName);
    article.appendChild(pEmail);
    article.appendChild(pDate);

    const editBtn = document.createElement('button');
    editBtn.setAttribute('class', 'edit-btn');
    editBtn.textContent = 'Edit';

    const nextBtn = document.createElement('button');
    nextBtn.setAttribute('class', 'next-btn');
    nextBtn.textContent = 'Next';

    const divBtns = document.createElement('div');
    divBtns.setAttribute('class', 'btn-container');
    divBtns.appendChild(editBtn);
    divBtns.appendChild(nextBtn);

    const previewLi = document.createElement('li');
    previewLi.appendChild(article);
    previewLi.appendChild(divBtns);
    previewUl.appendChild(previewLi);

    testRideBtn.disabled = true;
    const color = colorEl.value;
    const model = motorcycleEl.value;
    const date = dateEl.value;
    const name = nameEl.value;
    const email = emailEl.value;

    colorEl.value = '';
    motorcycleEl.value = '';
    dateEl.value = '';
    nameEl.value = '';
    emailEl.value = '';

    editBtn.addEventListener('click', () => {
      colorEl.value = color;
      motorcycleEl.value = model;
      dateEl.value = date;
      nameEl.value = name;
      emailEl.value = email;

      testRideBtn.disabled = false;
      previewLi.remove();
    });

    nextBtn.addEventListener('click', () => {
      previewLi.remove();

      let completeArticle = article;

      const completeBtn = document.createElement('button');
      completeBtn.setAttribute('class', 'complete-btn');
      completeBtn.textContent = 'Complete';

      article.appendChild(completeBtn);

      const completeLi = document.createElement('li');
      completeLi.appendChild(completeArticle);
      completeUl.appendChild(completeLi);

      completeBtn.addEventListener('click', () => {
        completeLi.remove();
        const confirmBtn = document.createElement('button');
        confirmBtn.setAttribute('class', 'confirm-btn');
        confirmBtn.textContent = 'Test Ride is Confirmed';
        divData.appendChild(confirmBtn);

        confirmBtn.addEventListener('click', () => {
          window.location.reload();
        });
      });
    });
  });
}
