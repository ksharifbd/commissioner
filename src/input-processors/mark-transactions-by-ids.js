const moment = require('moment');

/**
 * Assigns a transaction id and a week id to each transaction
 *
 * @function markTransactionsByIds
 * @param {Array.<Object>} transactions - parsed JSON inputs read from the file
 * @returns {Array.<Object>}
 */
function markTransactionsByIds(transactions) {
  return transactions.map((trx, index) => {
    const {date, user_id: userId, user_type: userType, type: operationType} = trx;

    const week = moment(date, 'YYYY-MM-DD').isoWeek();
    const weekYear = moment(date, 'YYYY-MM-DD').isoWeekYear();

    const weekId = `${userId}_${weekYear}_${week}`;

    const transactionId = `${operationType}_${userType}_${index + 1}`;

    return {
      ...trx,
      week_id: weekId,
      transaction_id: transactionId,
    };
  });
}

module.exports = markTransactionsByIds;
