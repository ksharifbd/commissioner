const calculateWeeklyCommission = require('./calculate-weekly-commission');

/**
 * attaches calculated commissions to the transactions of each week group
 *
 * @function attachCommissionToGroups
 * @param {Object} groupedTransactions - transactions grouped by weeks
 * @param {Object} config - config for the transaction type
 * @returns {Object} - transactions with commissions grouped by weeks
 */
function attachCommissionToGroups(groupedTransactions, config) {
  return Object.keys(groupedTransactions).reduce((acc, curr) => {
    const transactionsOfCurrentGroup = groupedTransactions[curr];

    if (transactionsOfCurrentGroup.length) {
      if (!Object.prototype.hasOwnProperty.call(acc, curr)) {
        acc[curr] = [...transactionsOfCurrentGroup];
      }

      acc[curr] = calculateWeeklyCommission(acc[curr], config);
    }

    return acc;
  }, {});
}

module.exports = attachCommissionToGroups;
