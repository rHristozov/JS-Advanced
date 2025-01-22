function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   const tableRows = document.querySelectorAll('.container tbody tr');

   function onClick() {
      const inputText = document.getElementById('searchField');

      for (const row of tableRows) {
         if(row.textContent.includes(inputText.value)) {
            row.classList.add('select');
         } else {
            row.classList.remove('select');
         }
      }      
      inputText.value = '';
   }
}