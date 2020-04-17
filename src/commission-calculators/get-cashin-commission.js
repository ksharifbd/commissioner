const {applyMaxCap} = require('../commission-modifiers');

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
