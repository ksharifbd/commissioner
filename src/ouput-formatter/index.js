/**
 * converts cents to Euro after ceiling
 *
 * @function ceil
 * @param {number} number - calculated commission
 * @returns {string}
 */

// original source:
// https://dirask.com/q/javascript-math-ceil-method-example-OpBeqD
function ceil(number) {
  return (Math.ceil(number) / 100).toFixed(2);
}

module.exports = ceil;
