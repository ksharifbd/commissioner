const getCashInCommission = require('../get-cashin-commission');
const {configs, markedTransactionsByIds} = require('../../mock-data');
const {operationTypes} = require('../../constants');

describe('Get Cash In Commission', () => {
  const testData = [
    {
      input: markedTransactionsByIds.find(trx =>
        trx.transaction_id.includes(operationTypes.CASH_IN)
      ),
      output: {
        correct: 0.06,
        incorrect: 5,
      },
    },

    {
      input: {
        ...markedTransactionsByIds.find(trx => trx.transaction_id.includes(operationTypes.CASH_IN)),
        operation: {
          amount: 1000000,
        },
      },
      output: {
        correct: 5,
        incorrect: 300,
      },
    },
  ];

  testData.forEach(datum => {
    it(`should return ${datum.output.correct} for the input ${datum.input} when the commission fee is ${configs.cashIn.percents}`, () => {
      expect(getCashInCommission(datum.input, configs.cashIn)).toBe(datum.output.correct);
      expect(getCashInCommission(datum.input, configs.cashIn)).not.toBe(datum.output.incorrect);
    });

    it(`should not return the commission fee more than ${configs.cashIn.max.amount} if the commission fee exceeds the maximum amount threshold`, () => {
      expect(getCashInCommission(datum.input, configs.cashIn)).toBe(datum.output.correct);
      expect(getCashInCommission(datum.input, configs.cashIn)).not.toBe(datum.output.incorrect);
    });
  });
});
