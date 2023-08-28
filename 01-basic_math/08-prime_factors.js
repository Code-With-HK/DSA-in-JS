function primeFactors(num) {
  let output = [];
  if (num <= 1) return output;

  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      let x = i;
      while (num % x === 0) {
        output.push(i);
        x = x * i;
      }
    }
  }
  return output;
}

function primeFactors2(num) {
  let output = [];
  if (num <= 1) return output;

  for (let i = 2; i * i <= num; i++) {
    while (num % i === 0) {
      output.push(i);
      num = num / i;
    }
  }

  if (num > 1) {
    output.push(num);
  }

  return output;
}

function primeFactors3(num) {
  let output = [];
  if (num <= 1) return output;

  while (num % 2 === 0) {
    output.push(2);
    num = num / 2;
  }

  while (num % 3 === 0) {
    output.push(3);
    num = num / 3;
  }

  for (let i = 5; i * i <= num; i = i + 6) {
    while (num % i === 0) {
      output.push(i);
      num = num / i;
    }

    while (num % (i + 2) === 0) {
      output.push(i + 2);
      num = num / (i + 2);
    }
  }

  if (num > 3) {
    output.push(num);
  }

  return output;
}

console.log(primeFactors3(12));
console.log(primeFactors3(13));
console.log(primeFactors3(315));
console.log(primeFactors3(1));

function isPrime(num) {
  if (num === 1) return false;

  if (num === 2 || num === 3) return true;

  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i = i + 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
}
