function computingPower(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result = result * x;
  }

  return result;
}

function computingPower2(x, n) {
  if (n === 0) return 1;
  let temp = computingPower2(x, Math.floor(n / 2));
  temp = temp * temp;

  if (n % 2 === 0) {
    return temp;
  } else {
    return temp * x;
  }
}

function computingPower3(x, n) {
  let result = 1;

  while (n > 0) {
    if (n % 2 !== 0) {
      result = result * x;
    }
    x = x * x;
    n = Math.floor(n / 2);
  }

  return result;
}

console.log(computingPower3(2, 3));
console.log(computingPower3(5, 3));
console.log(computingPower3(3, 0));
