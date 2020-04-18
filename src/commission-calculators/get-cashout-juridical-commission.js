const {applyMinCap} = require('../commission-modifiers');

/**
 * calculates commission for cash out juridical transaction type
 *
 * @function getCashOutJuridicalCommission
 * @param {Object} transaction - an individual transaction
 * @param {Object} config - config for the cash out juridical type
 * @returns {number} - calculated commission
 */
function getCashOutJuridicalCommission(transaction, config) {
  const {
    operation: {amount},
  } = transaction;

  const {
    percents,
    min: {amount: minThreshold},
  } = config;

  const commission = amount * (percents / 100);

  return applyMinCap(commission, minThreshold);
}

module.exports = getCashOutJuridicalCommission;
