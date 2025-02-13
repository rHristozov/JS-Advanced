window.addEventListener('load', solve);

function solve() {
  //get elements
  const timeEl = document.getElementById('time');
  const dateEl = document.getElementById('date');
  const placeEl = document.getElementById('place');
  const eventEl = document.getElementById('event-name');
  const contactEl = document.getElementById('email');

  // ul
  const lastCheckedUL = document.getElementById('check-list');
  const upcomingUL = document.getElementById('upcoming-list');
  const finishUL = document.getElementById('finished-list');

  // buttons
  const addEventBtn = document.getElementById('add-btn');
  addEventBtn.addEventListener('click', add);
  const clearBtn = document.getElementById('clear');
 

  function add(e) {
    e.preventDefault();
 
    //validation
    if (
      timeEl.value === '' ||
      dateEl.value === '' ||
      placeEl.value === '' ||
      eventEl.value === '' ||
      contactEl.value === ''
    ) {
      return;
    }

    //creating elements
    const lastCheckedLI = document.createElement('li');
    lastCheckedLI.setAttribute('class', 'event-content');

    const article = document.createElement('article');

    const pDate = document.createElement('p');
    pDate.textContent = `Begins: ${dateEl.value} at: ${timeEl.value}`;

    const pPlace = document.createElement('p');
    pPlace.textContent = `In: ${placeEl.value}`;

    const pEvent = document.createElement('p');
    pEvent.textContent = `Event: ${eventEl.value}`;

    const pContact = document.createElement('p');
    pContact.textContent = `Contact: ${contactEl.value}`;

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.setAttribute('class', 'edit-btn');
    const continueBtn = document.createElement('button');
    continueBtn.textContent = 'Continue';
    continueBtn.setAttribute('class', 'continue-btn');

    //appending
    article.appendChild(pDate);
    article.appendChild(pPlace);
    article.appendChild(pEvent);
    article.appendChild(pContact);

    lastCheckedLI.appendChild(article);
    lastCheckedLI.appendChild(editBtn);
    lastCheckedLI.appendChild(continueBtn);

    lastCheckedUL.appendChild(lastCheckedLI);

    let time = timeEl.value;
    let date = dateEl.value;
    let place = placeEl.value;
    let event = eventEl.value;
    let contact = contactEl.value;
  
    //reset
    timeEl.value = '';
    dateEl.value = '';
    placeEl.value = '';
    eventEl.value = '';
    contactEl.value = '';
    addEventBtn.disabled = true;
    
    editBtn.addEventListener('click', edit);
    continueBtn.addEventListener('click', next);

    function edit() {
      addEventBtn.disabled = false;
      timeEl.value = time;
      dateEl.value = date;
      placeEl.value = place;
      eventEl.value = event;
      contactEl.value = contact;
  
      lastCheckedLI.remove()
    }

    function next() {
      const upcomingLI = document.createElement('li');
      upcomingLI.setAttribute('class', 'event-content');
  
      const newArticle = article.cloneNode(true);
      const finishBtn = document.createElement('button');
      finishBtn.textContent = 'Move to Finished';
      finishBtn.setAttribute('class', 'finished-btn');
  
      //append
      upcomingLI.appendChild(newArticle);
      upcomingLI.appendChild(finishBtn);
      upcomingUL.appendChild(upcomingLI);

      lastCheckedLI.remove()
      addEventBtn.disabled = false;

      finishBtn.addEventListener('click', finishEvent)

      function finishEvent() {
        const finishLI = document.createElement('li');
        finishLI.setAttribute('class', 'event-content');
  
        const newArticle = article.cloneNode(true);
        
        finishLI.appendChild(newArticle);
        finishLI.appendChild(clearBtn);

        finishUL.append(finishLI);
  
        upcomingLI.remove();

        clearBtn.addEventListener('click', () => {
          newArticle.remove();
        })
      }
    }
  }
}
