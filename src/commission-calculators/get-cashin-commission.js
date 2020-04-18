const {applyMaxCap} = require('../commission-modifiers');

/**
 * calculates commission for cash in transaction type
 *
 * @function getCashInCommission
 * @param {Object} transaction - an individual transaction
 * @param {Object} config - config for the cash in type
 * @returns {number} - calculated commission
 */
function getCashInCommission(transaction, config) {
  const {
    operation: {amount},
  } = transaction;

  const {
    percents,
    max: {amount: maxThreshold},
  } = config;

  const commission = amount * (percents / 100);

  return applyMaxCap(commission, maxThreshold);
}

module.exports = getCashInCommission;
