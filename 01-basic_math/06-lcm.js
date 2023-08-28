function lcm(a, b) {
  let result = Math.max(a, b);

  while (true) {
    if (result % a === 0 && result % b === 0) return result;
    result++;
  }
}

// console.log(lcm(4, 6));
// console.log(lcm(2, 8));
// console.log(lcm(3, 7));

// O(a*b - Max)
// O (1)

function gcd(a, b) {
  while (b !== 0) {
    a = a % b;
    [a, b] = [b, a];
  }

  return a;
}

function lcm_better(a, b) {
  return (a * b) / gcd(a, b);
}

console.log(lcm_better(4, 6));
console.log(lcm_better(2, 8));
console.log(lcm_better(3, 7));
