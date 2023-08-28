function exactlyThreeDivisors(num) {
  let count = 0;

  for (let i = 2; i * i <= num; i++) {
    if (isPrime(i)) {
      count++;
    }
  }

  return count;
}

console.log(exactlyThreeDivisors(6));
console.log(exactlyThreeDivisors(10));
console.log(exactlyThreeDivisors(25));

function isPrime(num) {
  if (num === 1) return false;

  if (num === 2 || num === 3) return true;

  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i = i + 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
}
