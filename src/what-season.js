const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (date == null) return "Unable to determine the time of year!";

  try {
    date.getTime();
    if (date.getMonth() < 2 || date.getMonth() === 11) return "winter";
    else if (date.getMonth() < 5) return "spring";
    else if (date.getMonth() < 8) return "summer";
    else return "fall";
  } catch (error) {
    throw new Error("Invalid date!");
  }
}

console.log(getSeason(new Date(260, 8, 22, 14, 39, 46, 366)));

module.exports = {
  getSeason,
};
