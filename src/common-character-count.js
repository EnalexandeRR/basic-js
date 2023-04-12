const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(line1, line2) {
  let commonCount = 0;
  let maxLength = line1.length >= line2.length ? line1.length : line2.length;
  const line1Obj = {};
  const line2Obj = {};
  for (let i = 0; i < maxLength; i++) {
    if (line1Obj[line1[i]] == null) {
      line1Obj[line1[i]] = 1;
    } else {
      line1Obj[line1[i]] += 1;
    }
    if (line2Obj[line2[i]] == null) {
      line2Obj[line2[i]] = 1;
    } else {
      line2Obj[line2[i]] += 1;
    }
  }
  for (char in line1Obj) {
    console.log(char);
    if (Object.keys(line2Obj).includes(char)) {
      commonCount = commonCount + Math.min(line1Obj[char], line2Obj[char]);
    }
  }
  return commonCount;
}

module.exports = {
  getCommonCharacterCount,
};
