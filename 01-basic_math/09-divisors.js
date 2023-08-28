function divisors(num) {
  let output = [];

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      output.push(i);
    }
  }

  return output;
}

function divisors2(num) {
  let output = [];

  for (let i = 1; i * i <= num; i++) {
    if (num % i === 0) {
      output.push(i);

      if (Math.floor(num / i) !== i) {
        output.push(Math.floor(num / i));
      }
    }
  }

  return output;
}

function divisors3(num) {
  let output = [];
  let i;

  for (i = 1; i * i < num; i++) {
    if (num % i === 0) {
      output.push(i);
    }
  }

  const temp = i - 1;

  for (; i >= 1; i--) {
    if (num % i === 0 && !(Math.floor(num / i) <= temp)) {
      output.push(Math.floor(num / i));
    }
  }

  return output;
}

console.log(divisors3(15));
console.log(divisors3(20));
console.log(divisors3(13));
console.log(divisors3(100));
