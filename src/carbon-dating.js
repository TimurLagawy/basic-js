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
 *let dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
/*function dateSample(sampleActivity) {
  if (
    typeof sampleActivity == "string" ||
    typeof sampleActivity == "object" ||
    isNaN(sampleActivity) ||
    sampleActivity > MODERN_ACTIVITY ||
    sampleActivity <= 0
  ) {
    return false;
  }
  let res = Math.ceil(
    (Math.log(MODERN_ACTIVITY / dateSample()) * HALF_LIFE_PERIOD) / 0.693
  );
  if (typeof res == "number" && !isNaN(res) && !(res == Infinity) && res >= 0)
    return res;
} */

function dateSample(sampleActivity) {
  if (
    typeof sampleActivity !== "string" ||
    isNaN(parseFloat(sampleActivity)) ||
    parseFloat(sampleActivity) <= 0 ||
    parseFloat(sampleActivity) > MODERN_ACTIVITY
  ) {
    return false;
  }

  const k = 0.693 / HALF_LIFE_PERIOD;
  const years = Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / k;

  return Math.ceil(years);
}

module.exports = {
  dateSample,
};
