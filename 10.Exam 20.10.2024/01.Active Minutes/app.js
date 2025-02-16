window.addEventListener('load', solve);

function solve() {
  // getting elements
  const typeEl = document.getElementById('type');
  const intensityEl = document.getElementById('intensity');
  const caloriesEl = document.getElementById('calories');
  const durationEl = document.getElementById('duration');
  const dateEl = document.getElementById('date');
  const addBtn = document.getElementById('add-activity');
  const previewEl = document.getElementById('preview-activity');
  const tbody = document.getElementById('activities-table');

  addBtn.addEventListener('click', () => {
    if (
      typeEl.value === '' ||
      intensityEl.value === '' ||
      caloriesEl.value === '' ||
      durationEl.value === '' ||
      dateEl.value === ''
    ) {
      return;
    }

    //creating p, article and appending
    const pType = document.createElement('p');
    pType.textContent = `Activity: ${typeEl.value}`;

    const pIntensity = document.createElement('p');
    pIntensity.textContent = `Intensity: ${intensityEl.value}`;

    const pCalories = document.createElement('p');
    pCalories.textContent = `Calories: ${caloriesEl.value}`;

    const pDuration = document.createElement('p');
    pDuration.textContent = `Duration: ${durationEl.value} min.`;

    const pDate = document.createElement('p');
    pDate.textContent = `Date: ${dateEl.value}`;

    const article = document.createElement('article');
    article.appendChild(pType);
    article.appendChild(pIntensity);
    article.appendChild(pDuration);
    article.appendChild(pDate);
    article.appendChild(pCalories);

    // creating buttons, div and appending
    const editBtn = document.createElement('button');
    editBtn.setAttribute('class', 'edit-btn');
    editBtn.textContent = 'Edit';

    const nextBtn = document.createElement('button');
    nextBtn.setAttribute('class', 'next-btn');
    nextBtn.textContent = 'Next';

    const divBtn = document.createElement('div');
    divBtn.setAttribute('class', 'btn-container');
    divBtn.appendChild(editBtn);
    divBtn.appendChild(nextBtn);

    //creating li and final appending
    const liActivity = document.createElement('li');
    liActivity.appendChild(article);
    liActivity.appendChild(divBtn);
    previewEl.appendChild(liActivity);

    const type = typeEl.value;
    const intensity = intensityEl.value;
    const calories = caloriesEl.value;
    const duration = durationEl.value;
    const date = dateEl.value;

    typeEl.value = '';
    intensityEl.value = '';
    caloriesEl.value = '';
    durationEl.value = '';
    dateEl.value = '';

    addBtn.disabled = true;

    editBtn.addEventListener('click', () => {
      typeEl.value = type;
      intensityEl.value = intensity;
      caloriesEl.value = calories;
      durationEl.value = duration;
      dateEl.value = date;

      addBtn.disabled = false;
      liActivity.remove();
    });

    nextBtn.addEventListener('click', () => {
      //creating elements
      const tdType = createTD('type-cell', type);
      const tdDuration = createTD('duration-cell', duration);
      const tdCalories = createTD('calories-cell', calories);
      const tdDate = createTD('date-cell', date);
      const tdIntensity = createTD('intensity-cell', intensity);
      const tdButton = document.createElement('td');
      tdButton.setAttribute('class', 'btn-cell');
      const deleteBtn = document.createElement('button');
      deleteBtn.setAttribute('class', 'delete-btn');
      deleteBtn.textContent = 'Delete';
      tdButton.appendChild(deleteBtn);

      const tr = document.createElement('tr');
      tr.appendChild(tdType);
      tr.appendChild(tdDuration);
      tr.appendChild(tdCalories);
      tr.appendChild(tdDate);
      tr.appendChild(tdIntensity);
      tr.appendChild(tdButton);

      tbody.appendChild(tr);
      addBtn.disabled = false;

      liActivity.remove();

      deleteBtn.addEventListener('click', () => {
        tr.remove();
      });
    });
  });
  function createTD(className, content) {
    const element = document.createElement('td');
    element.setAttribute('class', `${className}`);
    element.textContent = content;
    return element;
  }
}
