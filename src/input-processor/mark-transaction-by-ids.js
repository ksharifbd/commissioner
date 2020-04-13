const moment = require('moment');

function markTransactionByIds(data) {
  return data.map((datum, index) => {
    const week = moment(datum.date, 'YYYY-MM-DD').isoWeek();
    const weekYear = moment(datum.date, 'YYYY-MM-DD').isoWeekYear();

    const weekId = `${datum.user_id}_${weekYear}_${week}`;

    const transactionId = `${datum.type}_${datum.user_type}_${index + 1}`;

    return {
      ...datum,
      week_id: weekId,
      transaction_id: transactionId,
    };
  });
}

module.exports = markTransactionByIds;
