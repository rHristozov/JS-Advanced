function sortArray(arr, order) {
  let resultArr = arr;

  if (order === 'asc') {
    ascending();
  } else {
    descending();
  }
  return resultArr;

  function ascending() {
    resultArr.sort((a, b) => a - b);
  }
  function descending() {
    resultArr.sort((a, b) => b - a);
  }
}

sortArray([14, 7, 17, 6, 8], 'asc');
sortArray([14, 7, 17, 6, 8], 'desc');
