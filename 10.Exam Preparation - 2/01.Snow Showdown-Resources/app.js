window.addEventListener('load', solve);

function solve() {
  // selecting elements
  const nameEl = document.getElementById('snowman-name');
  const heightEl = document.getElementById('snowman-height');
  const locationEl = document.getElementById('location');
  const creatorEl = document.getElementById('creator-name');
  const specialEl = document.getElementById('special-attribute');
  const snowmanPreview = document.querySelector('.snowman-preview');
  const snowList = document.querySelector('.snow-list');
  const addBtn = document.querySelector('.add-btn');
  const main = document.getElementById('hero');
  const img = document.getElementById('back-img');
  const body = document.querySelector('.body');

  addBtn.addEventListener('click', addEventHandler);

  function addEventHandler(e) {
    e.preventDefault();

    if (
      nameEl.value === '' ||
      heightEl.value === '' ||
      locationEl.value === '' ||
      creatorEl.value === '' ||
      specialEl.value === ''
    ) {
      return;
    }

    // creating elements
    const previewLi = document.createElement('li');
    previewLi.setAttribute('class', 'showman-info');

    const previewArticle = document.createElement('article');

    const pName = document.createElement('p');
    pName.textContent = `Name: ${nameEl.value}`;

    const pHeight = document.createElement('p');
    pHeight.textContent = `Height: ${heightEl.value}`;

    const pLocation = document.createElement('p');
    pLocation.textContent = `Location: ${locationEl.value}`;

    const pCreator = document.createElement('p');
    pCreator.textContent = `Creator: ${creatorEl.value}`;

    const pSpecial = document.createElement('p');
    pSpecial.textContent = `Attribute: ${specialEl.value}`;

    const divBtn = document.createElement('div');

    const editBtn = document.createElement('button');
    const nextBtn = document.createElement('button');

    editBtn.setAttribute('class', 'edit-btn');
    nextBtn.setAttribute('class', 'next-btn');

    editBtn.textContent = 'Edit';
    nextBtn.textContent = 'Next';

    //appending
    previewArticle.appendChild(pName);
    previewArticle.appendChild(pHeight);
    previewArticle.appendChild(pLocation);
    previewArticle.appendChild(pCreator);
    previewArticle.appendChild(pSpecial);

    divBtn.appendChild(editBtn);
    divBtn.appendChild(nextBtn);

    previewLi.appendChild(previewArticle);
    previewLi.appendChild(divBtn);

    snowmanPreview.appendChild(previewLi);

    const name = nameEl.value;
    const height = heightEl.value;
    const location = locationEl.value;
    const creator = creatorEl.value;
    const special = specialEl.value;

    nameEl.value = '';
    heightEl.value = '';
    locationEl.value = '';
    creatorEl.value = '';
    specialEl.value = '';
    addBtn.disabled = true;

    editBtn.addEventListener('click', () => {
      addBtn.disabled = false;
      nameEl.value = name;
      heightEl.value = height;
      locationEl.value = location;
      creatorEl.value = creator;
      specialEl.value = special;
      previewLi.remove();
    });

    nextBtn.addEventListener('click', () => {
      const showmanLi = document.createElement('li');
      showmanLi.setAttribute('class', 'showman-content');

      let showmanArticle = document.createElement('article');
      showmanArticle = previewArticle;

      const sendBtn = document.createElement('button');
      sendBtn.setAttribute('class', 'send-btn');
      sendBtn.textContent = 'Send';

      showmanArticle.appendChild(sendBtn);
      showmanLi.appendChild(showmanArticle);
      snowList.appendChild(showmanLi);

      previewLi.remove();

      sendBtn.addEventListener('click', () => {
        main.remove();
        img.removeAttribute('hidden');

        const backBtn = document.createElement('button');
        backBtn.setAttribute('class', 'back-btn');
        backBtn.textContent = 'Back';
        body.appendChild(backBtn);
        backBtn.addEventListener('click', () => {
          window.location.reload();
        });
      });
    });
  }
}
