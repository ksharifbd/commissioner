const CommissionBroker = require('..');
const {markedTransactionsByIds, configs} = require('../../mock-data');
const {operationTypes} = require('../../constants');

const fetchedConfigs = [
  {
    operationType: operationTypes.CASH_IN,
    config: configs.cashIn,
  },
  {
    operationType: operationTypes.CASH_OUT_JURIDICAL,
    config: configs.cashOutJuridical,
  },
  {
    operationType: operationTypes.CASH_OUT_NATURAL,
    config: configs.cashOutNatural,
  },
];

const cashInTransaction = markedTransactionsByIds[0];
const cashOutJuridicalTransaction = markedTransactionsByIds[2];
const cashOutNaturalTransaction = markedTransactionsByIds[3];

const data = [
  {
    input: cashInTransaction,
    output: 0.06,
  },
  {
    input: cashOutJuridicalTransaction,
    output: 0.9,
  },
  {
    input: cashOutNaturalTransaction,
    output: 87,
  },
];

describe('Commission Broker', () => {
  const commissionBroker = new CommissionBroker(markedTransactionsByIds, fetchedConfigs);

  data.forEach(datum => {
    it('should return correct commission fee for the transaction', () => {
      expect(commissionBroker.getCommission(datum.input)).toBe(datum.output);
    });
  });
});
