const {operationTypes} = require('../constants');

/**
 * groups transactions by week ids
 *
 * @function groupTransactionsByWeekids
 * @param {Array.<Object>} transactions - transactions marked by transaction ids
 * and week ids
 * @param {string} [type] - transaction operation type
 * @returns {Object}
 */
function groupTransactionsByWeekids(transactions, type = operationTypes.CASH_OUT_NATURAL) {
  return transactions.reduce((acc, curr) => {
    if (!Object.prototype.hasOwnProperty.call(acc, curr.week_id)) {
      acc[curr.week_id] = [];
    }

    if (curr.transaction_id.includes(type)) {
      acc[curr.week_id].push({
        transaction_id: curr.transaction_id,
        amount: curr.operation.amount,
      });
    }
    return acc;
  }, {});
}

module.exports = groupTransactionsByWeekids;
