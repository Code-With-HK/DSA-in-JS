function gcd(a, b) {
  let result = Math.min(a, b);

  while (result > 1) {
    if (a % result === 0 && b % result === 0) {
      return result;
    }
    result--;
  }

  return result;
}

// console.log(gcd(4, 6));
// console.log(gcd(200, 400));
// console.log(gcd(9, 10));

function gcd_euc(a, b) {
  if (b === 0) return a;
  return gcd_euc(b, a % b);
}

// console.log(gcd_euc(4, 6));
// console.log(gcd_euc(200, 400));
// console.log(gcd_euc(9, 10));

function gcd_euc_itr(a, b) {
  while (b !== 0) {
    a = a % b;
    [a, b] = [b, a];
  }

  return a;
}

console.log(gcd_euc_itr(4, 6));
console.log(gcd_euc_itr(200, 400));
console.log(gcd_euc_itr(9, 10));
