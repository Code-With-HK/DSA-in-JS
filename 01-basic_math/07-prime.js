function isPrime(num) {
  if (num === 1) return false;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }

  return true;
}

function isPrime2(num) {
  if (num === 1) return false;

  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }

  return true;
}

function isPrime3(num) {
  if (num === 1) return false;

  if (num === 2 || num === 3) return true;

  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i = i + 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
}

console.log(isPrime3(1));
console.log(isPrime3(101));
console.log(isPrime3(2));
console.log(isPrime3(13));
console.log(isPrime3(50));
