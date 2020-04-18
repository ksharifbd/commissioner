const commissionAttachedGroups = {
  '1_2016_1': [
    {
      transaction_id: 'cash_out_natural_4',
      amount: 3000000,
      weeklyGross: 3000000,
      commissionableAmount: 2900000,
      commission: 8700,
      applyNextCommissionOn: 'amount',
    },
    {
      transaction_id: 'cash_out_natural_5',
      amount: 3000000,
      weeklyGross: 6000000,
      commissionableAmount: 3000000,
      commission: 9000,
      applyNextCommissionOn: 'amount',
    },
  ],
  '2_2016_1': [
    {
      transaction_id: 'cash_out_natural_6',
      amount: 100000,
      weeklyGross: 100000,
      commissionableAmount: 0,
      commission: 0,
      applyNextCommissionOn: 'amount',
    },
  ],
  '3_2016_1': [
    {
      transaction_id: 'cash_out_natural_7',
      amount: 10000,
      weeklyGross: 10000,
      commissionableAmount: 0,
      commission: 0,
      applyNextCommissionOn: 'gross',
    },
    {
      transaction_id: 'cash_out_natural_8',
      amount: 10000,
      weeklyGross: 20000,
      commissionableAmount: 0,
      commission: 0,
      applyNextCommissionOn: 'gross',
    },
    {
      transaction_id: 'cash_out_natural_9',
      amount: 10000,
      weeklyGross: 30000,
      commissionableAmount: 0,
      commission: 0,
      applyNextCommissionOn: 'gross',
    },
    {
      transaction_id: 'cash_out_natural_10',
      amount: 90000,
      weeklyGross: 120000,
      commissionableAmount: 20000,
      commission: 60,
      applyNextCommissionOn: 'amount',
    },
    {
      transaction_id: 'cash_out_natural_11',
      amount: 90000,
      weeklyGross: 210000,
      commissionableAmount: 90000,
      commission: 270,
      applyNextCommissionOn: 'amount',
    },
  ],
};

module.exports = commissionAttachedGroups;
