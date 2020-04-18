/**
 * calculates commission for cash out natural transaction type
 *
 * @function getCashOutNatualCommission
 * @param {Object} transaction - an individual transaction
 * @param {Object} config - config for the cash out natural type
 * @returns {number} - commission from the commisioned groups
 */
// eslint-disable-next-line
function getCashOutNatualCommission(transaction, commissionedGroups) {
  if (Object.prototype.hasOwnProperty.call(commissionedGroups, transaction.week_id)) {
    return commissionedGroups[transaction.week_id].find(
      groupTransaction => groupTransaction.transaction_id === transaction.transaction_id
    ).commission;
  }
}

module.exports = getCashOutNatualCommission;
