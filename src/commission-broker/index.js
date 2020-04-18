const {operationTypes} = require('../constants');
const {
  getCashInCommission,
  getCashOutJuridicalCommission,
  getCashOutNaturalCommission,
  attachCommissionToGroups,
} = require('../commission-calculators');
const {groupTransactionsByWeekIds} = require('../input-processors');

class CommissionBroker {
  /**
   * Dispatches transactions to the calculators depending on type
   * and return calculated commissions.
   * it also caches the results of grouping to reuse in later transactions.
   *
   * @param {Array.<Object>} transactions - transactions marked by transaction ids
   * and week ids
   * @param {Array.<Object>} configs - configuration for each transaction types
   */
  constructor(transactions, configs) {
    this.transactions = transactions;
    this.configs = configs;

    this.groupedTransactions = null;
    this.commissionedGroups = null;
  }

  // private method
  setAndGetConfigForOperationType(type) {
    if (!this[type]) {
      this[type] = this.configs.find(config => config.operationType === type).config;
    }

    return this[type];
  }

  // private method
  setAndGetgroupedTransactions(transactions) {
    if (!this.groupedTransactions) {
      this.groupedTransactions = groupTransactionsByWeekIds(transactions);
    }

    return this.groupedTransactions;
  }

  // private method
  setAndGetCommissionedGroups(transactions, config) {
    if (!this.commissionedGroups) {
      this.commissionedGroups = attachCommissionToGroups(transactions, config);
    }

    return this.commissionedGroups;
  }

  /**
   * Dispatches transactions to the calculators depending on type
   * and return calculated commissions.
   *
   * @method getCommission
   * @param {Object} transaction - an individual transaction
   * @returns {number} - calculated commission
   */
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
      const groupedTransactions = this.setAndGetgroupedTransactions(this.transactions);
      const config = this.setAndGetConfigForOperationType(operationTypes.CASH_OUT_NATURAL);
      const commissionedGroups = this.setAndGetCommissionedGroups(groupedTransactions, config);

      return getCashOutNaturalCommission(transaction, commissionedGroups);
    }
  }
}

module.exports = CommissionBroker;
