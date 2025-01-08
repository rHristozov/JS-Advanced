function daysInaMonth(month, year) {
    let count = new Date(year, month, 0).getDate();
    console.log(count) 
}

daysInaMonth(1, 2012)