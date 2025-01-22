function search() {
   const listLi = document.querySelectorAll('#towns li');
   const input = document.getElementById('searchText').value;
   const result = document.getElementById('result');

   let count = 0;

   for (const li of listLi) {
      if(li.textContent.includes(input)) {
         li.style.fontWeight = 'bold';
         li.style.textDecoration = 'underline';
         count++;
      } else {
         li.style.fontWeight = '';
         li.style.textDecoration = '';
      }
   }
   result.textContent = `${count} matches found`
}