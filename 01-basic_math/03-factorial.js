function factorial_iterative(num) {
  let result = 1;

  for (let i = 2; i <= num; i++) {
    result = result * i;
  }

  return result;
}

console.log(factorial_iterative(4));
console.log(factorial_iterative(5));
console.log(factorial_iterative(6));
console.log(factorial_iterative(7));

// O(n)
// O(1)

function factorial_recursive(num) {
  if (num === 1) return 1;
  return num * factorial_recursive(num - 1);
}

console.log(factorial_recursive(4));
console.log(factorial_recursive(5));
console.log(factorial_recursive(6));
console.log(factorial_recursive(7));

// O(n)
// O(n)
