const attachCommissionToGroups = require('../cashout-natural-commission/attach-commission-to-groups');
const {
  configs,
  groupedTransactionsByWeek: input,
  commissionAttachedGroups: output,
} = require('../../mock-data');

describe('Attach Commission To Groups', () => {
  const commissionedGroups = attachCommissionToGroups(configs.cashOutNatural, input);

  it('should properly attach commissions to groups', () => {
    expect(commissionedGroups).toEqual(output);
  });
});
