const { NotImplementedError } = require("../extensions/index.js");

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(value) {
  const rule = /[0-9A-Fa-f]{2}/g;
  let parts = value.split("-");
  console.log(parts);
  for (let i = 0; i < parts.length; i++) {
    if (!!!parts[i].match(rule) || parts[i].length > 2) {
      return false;
    }
  }
  return true;
}
module.exports = {
  isMAC48Address,
};
