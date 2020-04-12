const cashOutJuridicalCommission = require('../cashout-juridical-commission.js');

describe('Cash Out Juridical Commission', () => {
  const config = {
    percents: 0.3,
    min: {
      amount: 0.5,
    },
  };

  const testData = [
    {
      input: 300,
      output: {
        correct: 0.9,
        incorrect: 0.5,
      },
    },

    {
      input: 150,
      output: {
        correct: 0.5,
        incorrect: 0.45,
      },
    },
  ];

  testData.forEach(datum => {
    it(`should return ${datum.output.correct} for the input ${datum.input} when the commission fee is ${config.percents}`, () => {
      expect(cashOutJuridicalCommission(config, datum.input)).toBe(datum.output.correct);
      expect(cashOutJuridicalCommission(config, datum.input)).not.toBe(datum.output.incorrect);
    });

    it(`should return the minimum commission fee ${config.min.amount} if the commission fee is below the miniimum amount threshold`, () => {
      expect(cashOutJuridicalCommission(config, datum.input)).toBe(datum.output.correct);
      expect(cashOutJuridicalCommission(config, datum.input)).not.toBe(datum.output.incorrect);
    });
  });
});
