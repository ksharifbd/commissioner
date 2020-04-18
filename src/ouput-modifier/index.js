/**
 * Outputs the number to 2 decimal places after ceiling
 *
 * @function centCeil
 * @param {number} number - calculated commission
 * @returns {string}
 */

// original source:
// https://dirask.com/q/javascript-math-ceil-method-example-OpBeqD
function centCeil(number) {
  return (Math.ceil(number * 100) / 100).toFixed(2);
}

module.exports = centCeil;
