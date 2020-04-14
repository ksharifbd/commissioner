const commissionedGroups = require('./attach-commission-to-groups');

// eslint-disable-next-line
function getCashOutNatualCommission(transaction) {
  if (Object.prototype.hasOwnProperty.call(commissionedGroups, transaction.week_id)) {
    return commissionedGroups[transaction.week_id].find(
      groupTransaction => groupTransaction.transaction_id === transaction.transaction_id
    ).commission;
  }
}

module.exports = getCashOutNatualCommission;
