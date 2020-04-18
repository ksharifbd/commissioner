/**
 * applies minimum threshold to the commission
 *
 * @function applyMinCap
 * @param {number} commission - commission
 * @param {number} threshold - threshold
 * @returns {number}
 */
function applyMinCap(commission, threshold) {
  return commission < threshold ? threshold : commission;
}

module.exports = applyMinCap;
