const moment = require('moment');

function markTransactionsByIds(data) {
  return data.map((datum, index) => {
    const {date, user_id: userId, user_type: userType, type: operationType} = datum;

    const week = moment(date, 'YYYY-MM-DD').isoWeek();
    const weekYear = moment(date, 'YYYY-MM-DD').isoWeekYear();

    const weekId = `${userId}_${weekYear}_${week}`;

    const transactionId = `${operationType}_${userType}_${index + 1}`;

    return {
      ...datum,
      week_id: weekId,
      transaction_id: transactionId,
    };
  });
}

module.exports = markTransactionsByIds;
