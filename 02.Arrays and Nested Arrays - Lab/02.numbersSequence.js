function lastKNumbersSequance(n, k) {
    let result = [1];
    for (let i = 1; i < n; i++) {
      let current = result.slice(-k);
  
      let sum = 0;
  
      for (const num of current) {
        sum += num;
      }
      result.push(sum);
    }
    return result;
  }
  
  lastKNumbersSequance(6, 3);
  lastKNumbersSequance(8, 2);