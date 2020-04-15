const getCashoutNaturalCommission = require('../cashout-natural-commission/get-cashout-natural-commission');
const {markedTransactionsByIds, commissionAttachedGroups} = require('../../mock-data');

describe('Get Cashout Natural Commission', () => {
  const transactions = markedTransactionsByIds.filter(trans => {
    return trans.transaction_id.startsWith('cash_out_natural');
  });

  transactions.forEach(trans => {
    const commission = getCashoutNaturalCommission(trans, commissionAttachedGroups);

    it(`should return ${commission} for the transaction id ${trans.transaction_id} and amount ${trans.operation.amount}`, () => {
      expect(commission).toBeDefined();
    });
  });
});
