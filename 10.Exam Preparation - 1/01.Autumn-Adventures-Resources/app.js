window.addEventListener('load', solve);

function solve() {
  //get elements
  const timeEl = document.getElementById('time');
  const dateEl = document.getElementById('date');
  const placeEl = document.getElementById('place');
  const eventEl = document.getElementById('event-name');
  const contactEl = document.getElementById('email');
  const lastCheckedUL = document.getElementById('check-list');
  const upcomingUL = document.getElementById('upcoming-list');

  //data storage
  let inputData = {};

  //li

  // buttons
  const addEventBtn = document.getElementById('add-btn');
  const editBtn = document.createElement('button');
  editBtn.textContent = 'Edit';
  editBtn.setAttribute('class', 'edit-btn');
  const continueBtn = document.createElement('button');
  continueBtn.textContent = 'Continue';
  continueBtn.setAttribute('class', 'continue-btn');

  //events
  addEventBtn.addEventListener('click', add);
  editBtn.addEventListener('click', edit);
  continueBtn.addEventListener('click', next);

  function add(e) {
    e.preventDefault();

    //taking values
    let time = timeEl.value;
    let date = dateEl.value;
    let place = placeEl.value;
    let event = eventEl.value;
    let contact = contactEl.value;

    //validation
    if (
      time === '' ||
      date === '' ||
      place === '' ||
      event === '' ||
      contact === ''
    ) {
      return;
    }

    //taking data
    inputData = { time, date, place, event, contact };

    //creating elements
    const lastCheckedLI = document.createElement('li');
    lastCheckedLI.setAttribute('class', 'event-content');

    const article = document.createElement('article');

    const pDate = document.createElement('p');
    pDate.textContent = `Begins: ${date} at: ${time}`;

    const pPlace = document.createElement('p');
    pPlace.textContent = `In: ${place}`;

    const pEvent = document.createElement('p');
    pEvent.textContent = `Event: ${event}`;

    const pContact = document.createElement('p');
    pContact.textContent = `Contact: ${contact}`;

    //appending
    article.appendChild(pDate);
    article.appendChild(pPlace);
    article.appendChild(pEvent);
    article.appendChild(pContact);

    lastCheckedLI.appendChild(article);
    lastCheckedLI.appendChild(editBtn);
    lastCheckedLI.appendChild(continueBtn);

    lastCheckedUL.appendChild(lastCheckedLI);

    //reset
    addEventBtn.disabled = true;
    timeEl.value = '';
    dateEl.value = '';
    placeEl.value = '';
    eventEl.value = '';
    contactEl.value = '';
  }

  function edit() {
    addEventBtn.disabled = false;
    timeEl.value = inputData.time;
    dateEl.value = inputData.date;
    placeEl.value = inputData.place;
    eventEl.value = inputData.event;
    contactEl.value = inputData.contact;

    lastCheckedUL.innerHTML = '';
  }

  function next() {
    const upcomingLI = document.createElement('li');
    upcomingLI.setAttribute('class', 'event-content');

    // upcomingUL.appendChild();
  }
}
