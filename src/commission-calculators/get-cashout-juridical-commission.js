function getCashOutJuridicalCommission(config, amount) {
  const {
    percents,
    min: {amount: minAmount},
  } = config;

  const commission = amount * (percents / 100);

  if (commission < minAmount) {
    return minAmount;
  }

  return commission;
}

module.exports = getCashOutJuridicalCommission;