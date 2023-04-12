const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const result = {};
  domains.forEach((domain) => {
    let subdiv = domain.split(".");
    if (subdiv[2]) {
      result[`.${subdiv[2]}`] = result[`.${subdiv[2]}`] == null ? 1 : result[`.${subdiv[2]}`] + 1;
      result[`.${subdiv[2]}.${subdiv[1]}`] =
        result[`.${subdiv[2]}.${subdiv[1]}`] == null ? 1 : result[`.${subdiv[2]}.${subdiv[1]}`] + 1;
      result[`.${subdiv[2]}.${subdiv[1]}.${subdiv[0]}`] =
        result[`.${subdiv[2]}.${subdiv[1]}.${subdiv[0]}`] == null
          ? 1
          : result[`.${subdiv[2]}.${subdiv[1]}.${subdiv[0]}`] + 1;
    } else if (subdiv[1]) {
      result[`.${subdiv[1]}`] = result[`.${subdiv[1]}`] == null ? 1 : result[`.${subdiv[1]}`] + 1;
      result[`.${subdiv[1]}.${subdiv[0]}`] =
        result[`.${subdiv[1]}.${subdiv[0]}`] == null ? 1 : result[`.${subdiv[1]}.${subdiv[0]}`] + 1;
    }
  });
  return result;
}

getDNSStats(["epam.com", "info.epam.com"]);

module.exports = {
  getDNSStats,
};
