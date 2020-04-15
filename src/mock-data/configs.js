const configs = {
  cashIn: {
    percents: 0.03,
    max: {
      amount: 5,
    },
  },
  cashOutNatural: {
    percents: 0.3,
    week_limit: {
      amount: 1000,
      currency: 'EUR',
    },
  },
  cashOutJuridical: {
    percents: 0.3,
    min: {
      amount: 0.5,
    },
  },
};

module.exports = configs;
