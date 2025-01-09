function previousDay(year, month, day) {
  month--;
  day -= 1;
  let date = new Date(year, month, day);
  let nDay = date.getDate();
  let nMonth = date.getMonth() + 1;
  let nYear = date.getFullYear();

  console.log(`${nYear}-${nMonth}-${nDay}`);
}

previousDay(2016, 9, 30);
previousDay(2015, 5, 10);
