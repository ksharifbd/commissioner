const {convertToCents} = require('../utils');

/**
 * applies minimum threshold to the commission
 *
 * @function applyMinCap
 * @param {number} commission - commission
 * @param {number} threshold - threshold
 * @returns {number}
 */
function applyMinCap(commission, threshold) {
  const convertedThreshold = convertToCents(threshold);

  const result = commission < convertedThreshold ? convertedThreshold : commission;

  return Math.ceil(result);
}

module.exports = applyMinCap;
