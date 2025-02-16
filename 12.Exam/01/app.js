window.addEventListener('load', solve);

function solve() {
  // selecting elements
  const typeEl = document.getElementById('scent-type');
  const budgetEl = document.getElementById('budget');
  const occasionEl = document.getElementById('occasion');
  const brandEl = document.getElementById('brand');
  const skinEl = document.getElementById('skin-type');
  const nextBtn = document.getElementById('next-btn');
  const preferenceUl = document.querySelector('.preference-list');
  const confirmUl = document.querySelector('.confirm-list');
  const pThanks = document.getElementById('thanks-text');

  nextBtn.addEventListener('click', (e) => {
    e.preventDefault();
    pThanks.textContent = '';
    if (
      typeEl.value === '' ||
      budgetEl.value === '' ||
      occasionEl.value === '' ||
      brandEl.value === '' ||
      skinEl.value === ''
    ) {
      return;
    }

    // creating elements
    const pType = document.createElement('p');
    pType.textContent = `Scent Type: ${typeEl.value}`;
    const pBudget = document.createElement('p');
    pBudget.textContent = `Budget: ${budgetEl.value} $`;
    const pOccasion = document.createElement('p');
    pOccasion.textContent = `Occasion: ${occasionEl.value}`;
    const pBrand = document.createElement('p');
    pBrand.textContent = `Brand: ${brandEl.value}`;
    const pSkin = document.createElement('p');
    pSkin.textContent = `Skin Type: ${skinEl.value}`;

    const preferenceArticle = document.createElement('article');

    const editBtn = document.createElement('button');
    editBtn.setAttribute('class', 'edit-btn');
    editBtn.textContent = 'Edit';
    const continueBtn = document.createElement('button');
    continueBtn.setAttribute('class', 'continue-btn');
    continueBtn.textContent = 'Continue';

    const preferenceLi = document.createElement('li');
    preferenceLi.setAttribute('class', 'content');

    // appending
    preferenceArticle.appendChild(pType);
    preferenceArticle.appendChild(pBudget);
    preferenceArticle.appendChild(pOccasion);
    preferenceArticle.appendChild(pBrand);
    preferenceArticle.appendChild(pSkin);

    preferenceLi.appendChild(preferenceArticle);
    preferenceLi.appendChild(editBtn);
    preferenceLi.appendChild(continueBtn);

    preferenceUl.appendChild(preferenceLi);

    // reset
    const type = typeEl.value;
    const budget = budgetEl.value;
    const occasion = occasionEl.value;
    const brand = brandEl.value;
    const skin = skinEl.value;

    typeEl.value = '';
    budgetEl.value = '';
    occasionEl.value = '';
    brandEl.value = '';
    skinEl.value = '';

    nextBtn.disabled = true;

    editBtn.addEventListener('click', () => {
      nextBtn.disabled = false;
      preferenceLi.remove();
      typeEl.value = type;
      budgetEl.value = budget;
      occasionEl.value = occasion;
      brandEl.value = brand;
      skinEl.value = skin;
    });

    continueBtn.addEventListener('click', () => {
      preferenceLi.remove();
      const confirmArticle = preferenceArticle;

      const confirmBtn = document.createElement('button');
      confirmBtn.setAttribute('class', 'confirm-btn');
      confirmBtn.textContent = 'Confirm';

      const cancelBtn = document.createElement('button');
      cancelBtn.setAttribute('class', 'cancel-btn');
      cancelBtn.textContent = 'Cancel';

      const confirmLi = document.createElement('li');
      confirmLi.setAttribute('class', 'content');

      confirmLi.appendChild(confirmArticle);
      confirmLi.appendChild(confirmBtn);
      confirmLi.appendChild(cancelBtn);

      confirmUl.append(confirmLi);

      confirmBtn.addEventListener('click', () => {
        confirmLi.remove();
        nextBtn.disabled = false;
        pThanks.textContent = `Thank you for sharing your preferences!`;
      });

      cancelBtn.addEventListener('click', () => {
        confirmLi.remove();
        nextBtn.disabled = false;
      });
    });
  });
}
