const calculateWeeklyCommission = require('./calculate-weekly-commission');

function attachCommissionToGroups(config, groupedTransaction) {
  return Object.keys(groupedTransaction).reduce((acc, curr) => {
    const transactionsOfCurrentGroup = groupedTransaction[curr];

    if (transactionsOfCurrentGroup.length) {
      if (!Object.prototype.hasOwnProperty.call(acc, curr)) {
        acc[curr] = [...transactionsOfCurrentGroup];
      }

      acc[curr] = calculateWeeklyCommission(config, acc[curr]);
    }

    return acc;
  }, {});
}

module.exports = attachCommissionToGroups;
