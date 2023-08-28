// function trailingZeroes(num) {
//   let fact = factorial(num);
//   console.log(fact);

//   let result = 0;

//   while (fact % 10 === 0) {
//     result++;
//     fact = Math.floor(fact / 10);
//   }

//   return result;
// }

// function factorial(num) {
//   let result = 1;

//   for (let i = 2; i <= num; i++) {
//     result = result * i;
//   }

//   return result;
// }

function trailingZeroes(num) {
  let result = 0;

  for (let i = 5; i <= num; i = i * 5) {
    result += Math.floor(num / i);
  }

  return result;
}

// 5 ^ K <= n
// log5n

// O(logn)
// O(1)

console.log(trailingZeroes(4));
console.log(trailingZeroes(5));
console.log(trailingZeroes(10));
console.log(trailingZeroes(100));
