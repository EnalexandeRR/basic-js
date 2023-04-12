const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(num) {
  let numString = num.toString();
  const numbersArray = [];
  for (let i = 0; i < numString.length; i++) {
    numbersArray.push(Number(numString.slice(0, i) + numString.slice(i + 1)));
  }
  return Math.max(...numbersArray);
}

module.exports = {
  deleteDigit,
};
