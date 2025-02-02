function subSum(arr, startIndex, endIndex) {
  if (Array.isArray(arr) == false) {
    return NaN;
  }
  if (startIndex < 0) {
    startIndex = 0;
  }
  if (endIndex > arr.length - 1) {
    endIndex = arr.length - 1;
  }
  return arr
    .slice(startIndex, endIndex + 1)
    .map(Number)
    .reduce((acc, x) => acc + x, 0);
}

console.log(subSum([10, 20, 30, 40, 50, 60], 3, 300));
