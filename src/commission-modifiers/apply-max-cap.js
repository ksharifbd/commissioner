/**
 * applies maximum threshold to the commission
 *
 * @function applyMaxCap
 * @param {number} commission - commission
 * @param {number} threshold - threshold
 * @returns {number}
 */
function applyMaxCap(commission, threshold) {
  return commission > threshold ? threshold : commission;
}

module.exports = applyMaxCap;
