const cashInCommission = require('../cashin-commission');
const {configs} = require('../../mock-data');

describe('Cash In Commission', () => {
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
    it(`should return ${datum.output.correct} for the input ${datum.input} when the commission fee is ${configs.cashIn.percents}`, () => {
      expect(cashInCommission(configs.cashIn, datum.input)).toBe(datum.output.correct);
      expect(cashInCommission(configs.cashIn, datum.input)).not.toBe(datum.output.incorrect);
    });

    it(`should not return the commission fee more than ${configs.cashIn.max.amount} if the commission fee exceeds the maximum amount threshold`, () => {
      expect(cashInCommission(configs.cashIn, datum.input)).toBe(datum.output.correct);
      expect(cashInCommission(configs.cashIn, datum.input)).not.toBe(datum.output.incorrect);
    });
  });
});
