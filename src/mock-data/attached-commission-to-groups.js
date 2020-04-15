const commissionAttachedGroups = {
  '1_2016_1': [
    {
      transaction_id: 'cash_out_natural_4',
      amount: 30000,
      weeklyGross: 30000,
      commissionableAmount: 29000,
      commission: 87,
      applyNextCommissionOn: 'amount',
    },
    {
      transaction_id: 'cash_out_natural_5',
      amount: 30000,
      weeklyGross: 60000,
      commissionableAmount: 30000,
      commission: 90,
      applyNextCommissionOn: 'amount',
    },
  ],
  '2_2016_1': [
    {
      transaction_id: 'cash_out_natural_6',
      amount: 1000,
      weeklyGross: 1000,
      commissionableAmount: 0,
      commission: 0,
      applyNextCommissionOn: 'amount',
    },
  ],
  '3_2016_1': [
    {
      transaction_id: 'cash_out_natural_7',
      amount: 100,
      weeklyGross: 100,
      commissionableAmount: 0,
      commission: 0,
      applyNextCommissionOn: 'gross',
    },
    {
      transaction_id: 'cash_out_natural_8',
      amount: 100,
      weeklyGross: 200,
      commissionableAmount: 0,
      commission: 0,
      applyNextCommissionOn: 'gross',
    },
    {
      transaction_id: 'cash_out_natural_9',
      amount: 100,
      weeklyGross: 300,
      commissionableAmount: 0,
      commission: 0,
      applyNextCommissionOn: 'gross',
    },
    {
      transaction_id: 'cash_out_natural_10',
      amount: 900,
      weeklyGross: 1200,
      commissionableAmount: 200,
      commission: 0.6,
      applyNextCommissionOn: 'amount',
    },
    {
      transaction_id: 'cash_out_natural_11',
      amount: 900,
      weeklyGross: 2100,
      commissionableAmount: 900,
      commission: 2.7,
      applyNextCommissionOn: 'amount',
    },
  ],
};

module.exports = commissionAttachedGroups;
