function solve() {
  const addTaskFormEl = document.querySelector('form');

  addTaskFormEl.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = e.target.querySelector('#task').value;
    const description = e.target.querySelector('#description').value;
    const date = e.target.querySelector('#date').value;

    taskCreate(title, description, date);
    e.target.reset();
  });

  function taskCreate(title, description, date) {
    const areaOpen = document.querySelector(
      '.wrapper section:nth-child(2) > div:nth-child(2)'
    );

    const taskEl = document.createElement('article');
    const h3 = document.createElement('h3');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');

    h3.textContent = title;
    p1.textContent = `Description: ${description}`;
    p2.textContent = `Due Date: ${date}`;

    const actionsEl = document.createElement('div');
    const btnProgress = document.createElement('button');
    const btnDelete = document.createElement('button');

    actionsEl.className = 'flex';

    btnProgress.textContent = 'Start';
    btnProgress.className = 'green';

    btnProgress.addEventListener('click', (e) => {
      const taskEl = e.target.closest('article');
      const nextSectionEl = e.target
        .closest('section')
        .nextElementSibling.querySelector('div:last-child');

      const currentActionsEl = e.target.closest('div');

      if (e.target.textContent == 'Start') {
        e.target.textContent = 'Finish';
        e.target.className = 'orange';
        e.target.remove();
        currentActionsEl.append(e.target);
      } else {
        currentActionsEl.remove();
      }

      taskEl.remove();
      nextSectionEl.append(taskEl);
    });

    btnDelete.textContent = 'Delete';
    btnDelete.className = 'red';

    btnDelete.addEventListener('click', () => taskDelete(taskEl));

    actionsEl.append(btnProgress, btnDelete);
    taskEl.append(h3, p1, p2, actionsEl);

    areaOpen.append(taskEl);
  }

  function taskDelete(taskEl) {
    taskEl.remove();
  }
}
