/**
 * converts cents to Euro after ceiling
 *
 * @function ceil
 * @param {number} number - calculated commission
 * @returns {string}
 */
function ceil(number) {
  return (Math.ceil(number) / 100).toFixed(2);
}

module.exports = ceil;
