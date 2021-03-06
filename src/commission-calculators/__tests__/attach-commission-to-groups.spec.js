const attachCommissionToGroups = require('../cashout-natural-commission/attach-commission-to-groups');
const {
  configs,
  groupedTransactionsByWeek: input,
  commissionAttachedGroups: output,
} = require('../../mock-data');
const {convertToCents} = require('../../utils');

describe('Attach Commission To Groups', () => {
  const commissionedGroups = attachCommissionToGroups(input, configs.cashOutNatural);
  const weeksFromGroupedTransaction = Object.keys(input);
  const weeksFromCommissionedGroups = Object.keys(commissionedGroups);
  const properties = ['weeklyGross', 'commissionableAmount', 'commission', 'applyNextCommissionOn'];
  const sampleGroupedTransactions = input[weeksFromGroupedTransaction[3]];
  const sampleCommissionedTransactions = commissionedGroups[weeksFromCommissionedGroups[2]];

  const weeklyThreshold = convertToCents(configs.cashOutNatural.week_limit.amount);

  it('should properly attach commissions to groups', () => {
    expect(commissionedGroups).toEqual(output);
  });

  it('should not contain commissions for weeks which have no transactions', () => {
    expect(weeksFromCommissionedGroups).not.toContain(weeksFromGroupedTransaction[0]);
  });

  properties.forEach(property => {
    it(`should contain ${property} in the transactions for a given week`, () => {
      expect(sampleCommissionedTransactions[0]).toHaveProperty(property);
    });
  });

  it(`should not apply weekly waived amount ${weeklyThreshold} for the transaction if it does not exceed the limit`, () => {
    expect(sampleCommissionedTransactions[0].commissionableAmount).toBe(0);
  });

  it(`should apply weekly waived amount ${weeklyThreshold} if the transaction amount is equal or greater than that`, () => {
    expect(sampleCommissionedTransactions[3].commissionableAmount).toBe(
      sampleCommissionedTransactions[3].weeklyGross - weeklyThreshold
    );
  });

  it(`should not apply weekly waived amount ${weeklyThreshold} for the transaction if it is already applied in a given week`, () => {
    expect(sampleCommissionedTransactions[4].commissionableAmount).toBe(
      sampleGroupedTransactions[4].amount
    );
  });
});
