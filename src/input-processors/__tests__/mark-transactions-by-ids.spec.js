const markTransactionsByIds = require('../mark-transactions-by-ids');

describe('Mark Transaction By Ids', () => {
  const data = [
    {
      input: [
        {
          date: '2020-01-21',
          user_id: 1,
          user_type: 'natural',
          type: 'cash_in',
          operation: {
            amount: 100.0,
            currency: 'EUR',
          },
        },
      ],
      output: [
        {
          date: '2020-01-21',
          user_id: 1,
          user_type: 'natural',
          type: 'cash_in',
          operation: {
            amount: 100.0,
            currency: 'EUR',
          },
          week_id: '1_2020_4',
          transaction_id: 'cash_in_natural_1',
        },
      ],
    },
  ];

  data.forEach(datum => {
    const markedTransactions = markTransactionsByIds(datum.input);

    it('should mark the transaction with correct transaction id', () => {
      expect(markedTransactions[0].transaction_id).toBe(datum.output[0].transaction_id);
    });

    it('should mark the transaction with correct week id', () => {
      expect(markedTransactions[0].week_id).toBe(datum.output[0].week_id);
    });

    it('should not modify other properties from the input object', () => {
      expect(markedTransactions[0].date).toBe(datum.input[0].date);
      expect(markedTransactions[0].user_id).toBe(datum.input[0].user_id);
      expect(markedTransactions[0].user_type).toBe(datum.input[0].user_type);
      expect(markedTransactions[0].operation.amount).toBe(datum.input[0].operation.amount);
      expect(markedTransactions[0].operation.currency).toBe(datum.input[0].operation.currency);
    });
  });
});
