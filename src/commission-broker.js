/* eslint-disable */

const {
  getCashInCommission,
  getCashOutJuridicalCommission,
  getCashOutNaturalCommission,
} = require('./commission-calculators');

class CommissionBroker {
  constructor(transactions) {
    this.transactions = transactions;

    this.groupedTransactions = null;
    this.commissionedGroups = null;
  }

  getCommission(transaction) {}
}
