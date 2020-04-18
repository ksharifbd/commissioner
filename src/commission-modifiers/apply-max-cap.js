const {convertToCents} = require('../utils');

/**
 * applies maximum threshold to the commission
 *
 * @function applyMaxCap
 * @param {number} commission - commission
 * @param {number} threshold - threshold
 * @returns {number}
 */
function applyMaxCap(commission, threshold) {
  const convertedThreshold = convertToCents(threshold);

  const result = commission > convertedThreshold ? convertedThreshold : commission;

  return Math.ceil(result);
}

module.exports = applyMaxCap;
