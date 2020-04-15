function getCashInCommission(config, amount) {
  const {
    percents,
    max: {amount: maxLimit},
  } = config;

  const commission = amount * (percents / 100);

  if (commission > maxLimit) {
    return maxLimit;
  }

  return commission;
}

module.exports = getCashInCommission;