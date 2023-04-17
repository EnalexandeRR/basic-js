const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
const defaultSeparator = "+";
const defaultAdditionalSeparator = "|";

function repeater(str, options) {
  let finalLine;
  let repeatCycles = options.repeatTimes ?? 1;
  let matrix = [];

  for (let index = 0; index < repeatCycles; index++) {
    let line = str;

    if (options.addition !== undefined) {
      let additions = [];
      let whatToAdd = "" + options.addition;
      let repeatTimes = options.additionRepeatTimes ?? 1;

      for (let j = 0; j < repeatTimes; j++) {
        additions.push(whatToAdd);
      }

      line += additions.join(options.additionSeparator ?? defaultAdditionalSeparator);
    }

    matrix.push(line);
    // console.log(matrix);
  }
  finalLine = matrix.join(options.separator ?? defaultSeparator);
  return finalLine;
}
repeater(null, {
  repeatTimes: 3,
  separator: "??? ",
  addition: null,
  additionRepeatTimes: 3,
  additionSeparator: "!!!",
});
// "nullnull!!!null!!!null??? nullnull!!!null!!!null??? nullnull!!!null!!!null"
module.exports = {
  repeater,
};
