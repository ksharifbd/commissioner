const {applyMinCap} = require('../commission-modifiers');

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
