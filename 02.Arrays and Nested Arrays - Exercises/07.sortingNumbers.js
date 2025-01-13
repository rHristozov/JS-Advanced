function sortingNumbers(arr) {
    arr.sort((a, b) => a - b);
  
    let result = [];
  
    for (let i = 0, j = arr.length - 1; i <= j; i++, j--) {
      if (i === j) {
        result.push(arr[i]);
        break;
      }
      result.push(arr[i]);
      result.push(arr[j]);
    }
    return result
  }

// sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])
sortingNumbers([22, 9, 63, 3, 2, 19, 54, 11, 21])