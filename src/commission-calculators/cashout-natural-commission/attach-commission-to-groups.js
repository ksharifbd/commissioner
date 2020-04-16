const calculateWeeklyCommission = require('./calculate-weekly-commission');

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
