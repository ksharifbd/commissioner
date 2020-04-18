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
        correct: 6,
        incorrect: 500,
      },
    },

    {
      input: {
        ...markedTransactionsByIds.find(trx => trx.transaction_id.includes(operationTypes.CASH_IN)),
        operation: {
          amount: 100000000,
        },
      },
      output: {
        correct: 500,
        incorrect: 30000,
      },
    },
  ];

  testData.forEach(datum => {
    const cashInCommission = getCashInCommission(datum.input, configs.cashIn);

    it(`should return ${datum.output.correct} for the input ${datum.input} when the commission fee is ${configs.cashIn.percents}`, () => {
      expect(cashInCommission).toBe(datum.output.correct);
      expect(cashInCommission).not.toBe(datum.output.incorrect);
    });

    it(`should not return the commission fee more than ${configs.cashIn.max.amount} if the commission fee exceeds the maximum amount threshold`, () => {
      expect(cashInCommission).toBe(datum.output.correct);
      expect(cashInCommission).not.toBe(datum.output.incorrect);
    });
  });
});
