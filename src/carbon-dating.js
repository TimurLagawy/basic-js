const { NotImplementedError } = require("../extensions/index.js");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */

function dateSample(sampleActivity) {
  if (typeof sampleActivity == "number" || typeof sampleActivity == "object") {
    return false;
  }
  let res = Math.ceil(
    (Math.log(MODERN_ACTIVITY / dateSample()) * HALF_LIFE_PERIOD) / 0.693
  );
  if (typeof res == "number" && !isNaN(res) && !(res == Infinity) && res >= 0)
    return res;
}
return false;

module.exports = {
  dateSample,
};
