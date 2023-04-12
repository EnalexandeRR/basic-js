const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  const editedMembers = [];
  let finalString = "";
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === "string") {
      editedMembers.push(members[i].replaceAll(" ", "").toUpperCase());
    }
  }
  editedMembers.sort();
  editedMembers.forEach((name) => {
    finalString = finalString + name[0];
  });
  return finalString;
}

createDreamTeam([
  "Peter",
  "Adam",
  "Gary",
  "Bobby",
  "Philip",
  "Andrea",
  "Evelyn",
  "Evelyn",
  "Kimberly",
  "Denise",
]);

module.exports = {
  createDreamTeam,
};
