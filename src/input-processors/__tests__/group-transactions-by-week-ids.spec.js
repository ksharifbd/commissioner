const markTransactionByIds = require('../mark-transaction-by-ids');
const groupTransactionsByWeekIds = require('../group-transactions-by-week-ids');
const {input, groupedTransactionsByWeek: output} = require('../../mock-data');

describe('Group Transactions By Week Ids', () => {
  const markedTransactionsByIds = markTransactionByIds(input);
  const groupedTransactionsByWeekIds = groupTransactionsByWeekIds(
    markedTransactionsByIds,
    'cash_out_natural'
  );
  const weeks = Object.keys(groupedTransactionsByWeekIds);

  it('should properly group transactions by week ids', () => {
    expect(groupedTransactionsByWeekIds).toEqual(output);
  });

  it('should have the week_id as key', () => {
    expect(weeks).toContain(markedTransactionsByIds[0].week_id);
  });

  it('should contain an empty array for the week which have no transaction of the given operation type', () => {
    expect(groupedTransactionsByWeekIds[weeks[0]].length).toBeFalsy();
    expect(groupedTransactionsByWeekIds[weeks[0]].length).toBe(0);
  });

  it('should contain transactions in the array for the week which have transactions of the given operation type', () => {
    expect(groupedTransactionsByWeekIds[weeks[1]].length).toBeTruthy();
    expect(groupedTransactionsByWeekIds[weeks[1]].length).toBe(2);
  });
});
