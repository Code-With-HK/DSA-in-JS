function countDigits(number) {
  let numOfDigits = 0;

  while (number > 0) {
    number = Math.floor(number / 10);
    numOfDigits++;
  }

  return numOfDigits;
}

console.log(countDigits(9));
console.log(countDigits(99));
console.log(countDigits(999));
console.log(countDigits(9999));

// O(numOfDigits)
// O(1)
