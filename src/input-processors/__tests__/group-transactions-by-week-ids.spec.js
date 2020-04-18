const markTransactionsByIds = require('../mark-transactions-by-ids');
const groupTransactionsByWeekIds = require('../group-transactions-by-week-ids');
const {input, groupedTransactionsByWeek: output} = require('../../mock-data');
const {operationTypes} = require('../../constants');

describe('Group Transactions By Week Ids', () => {
  const markedTransactionsByIds = markTransactionsByIds(input);
  const groupedTransactionsByWeekIds = groupTransactionsByWeekIds(
    markedTransactionsByIds,
    operationTypes.CASH_OUT_NATURAL
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
