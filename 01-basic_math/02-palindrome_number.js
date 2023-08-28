function isPalindrome(number) {
  let reverse = 0;
  let temp = number;

  while (temp !== 0) {
    const lastDigit = temp % 10;
    reverse = reverse * 10 + lastDigit;
    temp = Math.floor(temp / 10);
  }

  return reverse === number;
}

console.log(isPalindrome(363));
console.log(isPalindrome(763));
console.log(isPalindrome(4554));
console.log(isPalindrome(8));
