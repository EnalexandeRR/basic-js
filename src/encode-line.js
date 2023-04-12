const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(line) {
  let finalLine = "";
  let matrix = [];
  for (let i = 0; i < line.length; i++) {
    if (i === 0 || matrix[matrix.length - 1][0] !== line[i]) {
      matrix.push([line[i], 1]);
    } else if (matrix[matrix.length - 1][0] === line[i]) {
      matrix[matrix.length - 1][1] += 1;
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    finalLine = finalLine + matrix[i][1] + matrix[i][0];
  }
  finalLine = finalLine.replaceAll("1", "");
  return finalLine;
}

encodeLine("aaaatttt");

module.exports = {
  encodeLine,
};
