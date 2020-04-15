const input = require('./input');
const configs = require('./configs');
const groupedTransactionsByWeek = require('./grouped-transactions-by-week');
const commissionAttachedGroups = require('./attached-commission-to-groups');

module.exports = {
  input,
  configs,
  groupedTransactionsByWeek,
  commissionAttachedGroups,
};
