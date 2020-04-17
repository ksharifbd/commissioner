const {operationTypes} = require('../constants');
const {
  getCashInCommission,
  getCashOutJuridicalCommission,
  getCashOutNaturalCommission,
  attachCommissionToGroups,
} = require('../commission-calculators');
const {groupTransactionsByWeekIds} = require('../input-processors');

class CommissionBroker {
  constructor(transactions, configs) {
    this.transactions = transactions;
    this.configs = configs;

    this.groupedTransactions = null;
    this.commissionedGroups = null;
  }

  setAndGetConfigForOperationType(type) {
    if (!this[type]) {
      this[type] = this.configs.find(config => config.operationType === type).config;
    }

    return this[type];
  }

  // eslint-disable-next-line
  getCommission(transaction) {
    const {transaction_id: trxId} = transaction;

    if (trxId.includes(operationTypes.CASH_IN)) {
      const config = this.setAndGetConfigForOperationType(operationTypes.CASH_IN);

      return getCashInCommission(transaction, config);
    }

    if (trxId.includes(operationTypes.CASH_OUT_JURIDICAL)) {
      const config = this.setAndGetConfigForOperationType(operationTypes.CASH_OUT_JURIDICAL);

      return getCashOutJuridicalCommission(transaction, config);
    }

    if (trxId.includes(operationTypes.CASH_OUT_NATURAL)) {
      if (!this.groupedTransactions) {
        this.groupedTransactions = groupTransactionsByWeekIds(this.transactions);
      }

      if (!this.commissionedGroups) {
        const config = this.setAndGetConfigForOperationType(operationTypes.CASH_OUT_NATURAL);

        this.commissionedGroups = attachCommissionToGroups(this.groupedTransactions, config);
      }

      return getCashOutNaturalCommission(transaction, this.commissionedGroups);
    }
  }
}

module.exports = CommissionBroker;
