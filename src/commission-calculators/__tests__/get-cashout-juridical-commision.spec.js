const getCashOutJuridicalCommission = require('../get-cashout-juridical-commission.js');
const {configs} = require('../../mock-data');

describe('Cash Out Juridical Commission', () => {
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
    it(`should return ${datum.output.correct} for the input ${datum.input} when the commission fee is ${configs.cashOutJuridical.percents}`, () => {
      expect(getCashOutJuridicalCommission(configs.cashOutJuridical, datum.input)).toBe(
        datum.output.correct
      );
      expect(getCashOutJuridicalCommission(configs.cashOutJuridical, datum.input)).not.toBe(
        datum.output.incorrect
      );
    });

    it(`should return the minimum commission fee ${configs.cashOutJuridical.min.amount} if the commission fee is below the miniimum amount threshold`, () => {
      expect(getCashOutJuridicalCommission(configs.cashOutJuridical, datum.input)).toBe(
        datum.output.correct
      );
      expect(getCashOutJuridicalCommission(configs.cashOutJuridical, datum.input)).not.toBe(
        datum.output.incorrect
      );
    });
  });
});
