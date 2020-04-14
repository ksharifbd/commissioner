const markTransactionByIds = require('../mark-transaction-by-ids');
const groupTransactionsByWeekIds = require('../group-transactions-by-week-ids');
const {input, output} = require('../mock-data/group-transactions-by-week-ids');

describe('Group Transactions By Week Ids', () => {
  const markedTransactionsByIds = markTransactionByIds(input);
  const groupedTransactionsByWeekIds = groupTransactionsByWeekIds(markedTransactionsByIds);

  it('should properly group transactions by week ids', () => {
    expect(groupedTransactionsByWeekIds).toEqual(output);
  });
});
