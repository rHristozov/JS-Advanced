function solution(number) {
  return function add(d) {
    return d + number;
  };
}

let add5 = solution(5);
console.log(add5(7));
console.log(add5(12));
