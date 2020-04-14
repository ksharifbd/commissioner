function groupTransactionByWeekids(data, type = 'cash_out_natural') {
  return data.reduce((acc, curr) => {
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

module.exports = groupTransactionByWeekids;
