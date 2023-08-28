function moduloAddition(a, b) {
  let M = Math.pow(10, 9) + 7;

  return ((a % M) + (b % M)) % M;
}

console.log(moduloAddition(9223372036854775807, 9223372036854775807));
console.log(moduloAddition(1000000007, 1000000007));
