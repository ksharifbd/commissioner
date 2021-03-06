const getCashOutJuridicalCommission = require('../get-cashout-juridical-commission.js');
const {configs, markedTransactionsByIds} = require('../../mock-data');
const {operationTypes} = require('../../constants');

describe('Cash Out Juridical Commission', () => {
  const testData = [
    {
      input: markedTransactionsByIds.find(trx =>
        trx.transaction_id.includes(operationTypes.CASH_OUT_JURIDICAL)
      ),
      output: {
        correct: 90,
        incorrect: 50,
      },
    },

    {
      input: {
        ...markedTransactionsByIds.find(trx =>
          trx.transaction_id.includes(operationTypes.CASH_OUT_JURIDICAL)
        ),
        operation: {
          amount: 15000,
        },
      },
      output: {
        correct: 50,
        incorrect: 45,
      },
    },
  ];

  testData.forEach(datum => {
    it(`should return ${datum.output.correct} for the input ${datum.input} when the commission fee is ${configs.cashOutJuridical.percents}`, () => {
      expect(getCashOutJuridicalCommission(datum.input, configs.cashOutJuridical)).toBe(
        datum.output.correct
      );
      expect(getCashOutJuridicalCommission(datum.input, configs.cashOutJuridical)).not.toBe(
        datum.output.incorrect
      );
    });

    it(`should return the minimum commission fee ${configs.cashOutJuridical.min.amount} if the commission fee is below the miniimum amount threshold`, () => {
      expect(getCashOutJuridicalCommission(datum.input, configs.cashOutJuridical)).toBe(
        datum.output.correct
      );
      expect(getCashOutJuridicalCommission(datum.input, configs.cashOutJuridical)).not.toBe(
        datum.output.incorrect
      );
    });
  });
});
