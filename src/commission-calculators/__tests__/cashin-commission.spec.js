const cashInCommission = require('../cashin-commission');

describe('Cash In Commission', () => {
  const config = {
    percents: 0.03,
    max: {
      amount: 5,
    },
  };

  const testData = [
    {
      input: 200,
      output: {
        correct: 0.06,
        incorrect: 5,
      },
    },

    {
      input: 1000000,
      output: {
        correct: 5,
        incorrect: 300,
      },
    },
  ];

  testData.forEach(datum => {
    it(`should return ${datum.output.correct} for the input ${datum.input} when the commission fee is ${config.percents}`, () => {
      expect(cashInCommission(config, datum.input)).toBe(datum.output.correct);
      expect(cashInCommission(config, datum.input)).not.toBe(datum.output.incorrect);
    });

    it(`should not return the commission fee more than ${config.max.amount} if the commission fee exceeds the maximum amount threshold`, () => {
      expect(cashInCommission(config, datum.input)).toBe(datum.output.correct);
      expect(cashInCommission(config, datum.input)).not.toBe(datum.output.incorrect);
    });
  });
});
