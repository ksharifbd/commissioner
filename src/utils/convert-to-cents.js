/**
 * converts to cents by multiplying the amount by 100
 *
 * @function convertToCents
 * @param {number} amount
 * @returns {number}
 */
function convertToCents(amount) {
  return amount * 100;
}

module.exports = convertToCents;
