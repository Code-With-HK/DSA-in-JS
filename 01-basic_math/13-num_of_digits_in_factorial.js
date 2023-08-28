function numOfDigitsInFactorial(num) {
  let numOfDigits = 0;

  for (let i = 1; i <= num; i++) {
    numOfDigits += Math.log10(i);
  }

  return 1 + Math.floor(numOfDigits);
}

console.log(numOfDigitsInFactorial(5));
console.log(numOfDigitsInFactorial(120));
