const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  if (n < 10) {
    // If n is already a single-digit number, return it
    return n;
  }

  // Convert the number to a string to iterate over its digits
  const digits = n.toString().split("").map(Number);

  // Calculate the sum of digits
  const sum = digits.reduce((acc, digit) => acc + digit, 0);

  // Recursively call the function with the sum
  return getSumOfDigits(sum);
}
/* let str = "" + n;
  res = 0;
  for (let i = 0; i < str.length; i++) {
    res += str[i];
  }
  return res;
}*/

module.exports = {
  getSumOfDigits,
};
