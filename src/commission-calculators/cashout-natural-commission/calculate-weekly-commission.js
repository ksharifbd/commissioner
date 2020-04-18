const {convertToCents} = require('../../utils');

/**
 * calculates commissions for the transactions in a specific week
 *
 * @function calculateWeeklyCommission
 * @param {Array} transactionsByWeek - transactions of a week
 * @param {Object} config - config for the transaction type
 * @returns {Array} - calculated commissions for transactions of a week
 */
function calculateWeeklyCommission(transactionsByWeek, config) {
  const {
    percents,
    week_limit: {amount},
  } = config;

  const weeklyThreshold = convertToCents(amount);

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
