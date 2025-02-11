function solve() {
    const onScreenBtn = document.querySelector('#container button')
    const nameInputEl = document.querySelector('input[placeholder="Name"');
    const hallInputEl = document.querySelector('input[placeholder="Hall"');
    const ticketInputEl = document.querySelector('input[placeholder="Ticket Price"');
    const ulMovies = document.querySelector('#movies ul');
    const ulArchive = document.querySelector('#archive ul');
    
    onScreenBtn.addEventListener('click', onScreen);

    function onScreen(e) {
        e.preventDefault();
        const movieName = nameInputEl.value;
        const movieHall = hallInputEl.value;
        let moviePrice = ticketInputEl.value;
        moviePrice = Number(moviePrice);

        if(movieName === '' || movieHall === '' || moviePrice === '' || typeof moviePrice !== 'number' ) {
            return;
        }

        const liElMovies = document.createElement('li');

        const nameSpan = document.createElement('span');
        nameSpan.textContent = movieName;
        const strongHall = document.createElement('strong');
        strongHall.textContent = movieHall;

        const divEl = document.createElement('div');
        const strongPrice = document.createElement('strong');
        strongPrice.textContent = moviePrice.toFixed(2);
        let inputEl = document.createElement('input');
        inputEl.placeholder = 'Tickets Sold';
        const btnArchive = document.createElement('button');
        btnArchive.textContent = 'Archive';

        divEl.append(strongPrice, inputEl, btnArchive);
        liElMovies.append(nameSpan, strongHall, divEl);
        ulMovies.appendChild(liElMovies);

        nameInputEl.value = '';
        hallInputEl.value = '';
        ticketInputEl.value = '';

        btnArchive.addEventListener('click', archive)

        function archive() {
            console.log('here');
            
            const ticketPrice = Number(inputEl.value);
            if(ticketPrice <= 0 ) {
                return;
            }
            const liElArchive = document.createElement('li');

            const nameSpan = document.createElement('span');
            nameSpan.textContent = movieName;
            const strongTotal = document.createElement('strong')
            strongTotal.textContent = `Total amount: ${(ticketPrice * moviePrice).toFixed(2)}`
            const btnDelete = document.createElement('button');
            btnDelete.textContent =  'Delete';

            liElArchive.append(nameSpan, strongTotal, btnDelete);
            ulMovies.remove(liElMovies)
            ulArchive.append(liElArchive);

            btnDelete.addEventListener('click', remove)

            function remove() {
                ulArchive.remove(liElArchive)
            }
        }
    }
}