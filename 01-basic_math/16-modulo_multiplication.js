function moduloMul(a, b) {
  let M = Math.pow(10, 9) + 7;
  return ((a % M) * (b % M)) % M;
}

console.log(moduloMul(9223372036854775807, 9223372036854775807));
console.log(moduloMul(1000000007, 1000000007));
