function sieve(num) {
  let output = [];

  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      output.push(i);
    }
  }

  return output;
}

function sieve2(num) {
  let output = [];
  let isPrime = new Array(num + 1).fill(true);

  for (let i = 2; i * i <= num; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= num; j += i) {
        isPrime[j] = false;
      }
    }
  }

  for (let i = 2; i <= num; i++) {
    if (isPrime[i]) {
      output.push(i);
    }
  }

  return output;
}

function sieve3(num) {
  let output = [];
  let isPrime = new Array(num + 1).fill(true);

  for (let i = 2; i <= num; i++) {
    if (isPrime[i]) {
      output.push(i);
      for (let j = i * i; j <= num; j += i) {
        isPrime[j] = false;
      }
    }
  }

  return output;
}

console.log(sieve2(10));
console.log(sieve2(25));
console.log(sieve2(30));

function isPrime(num) {
  if (num === 1) return false;

  if (num === 2 || num === 3) return true;

  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i = i + 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
}
