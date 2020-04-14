function calculateWeeklyCommission(config, transactionsByWeek) {
  const {
    percents,
    week_limit: {amount: weeklyThreshold},
  } = config;

  return transactionsByWeek.reduce((acc, transaction, index) => {
    let weeklyGross = transaction.amount;
    let commissionableAmount = weeklyGross >= weeklyThreshold ? weeklyGross - weeklyThreshold : 0;
    let commission = commissionableAmount * (percents / 100);
    let applyNextCommissionOn = weeklyGross >= weeklyThreshold ? 'amount' : 'gross';

    if (index > 0) {
      const prevWeeklyGross = acc[index - 1].weeklyGross;
      const applyCommissionOn = acc[index - 1].applyNextCommissionOn;

      weeklyGross += prevWeeklyGross;

      if (applyCommissionOn === 'amount') {
        commissionableAmount = transaction.amount;
      }

      if (applyCommissionOn === 'gross') {
        commissionableAmount = weeklyGross >= weeklyThreshold ? weeklyGross - weeklyThreshold : 0;
      }

      commission = commissionableAmount * (percents / 100);

      applyNextCommissionOn = weeklyGross >= weeklyThreshold ? 'amount' : 'gross';
    }

    acc.push({
      ...transaction,
      weeklyGross,
      commissionableAmount,
      commission,
      applyNextCommissionOn,
    });

    return acc;
  }, []);
}

module.exports = calculateWeeklyCommission;
