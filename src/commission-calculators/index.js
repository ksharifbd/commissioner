const getCashInCommission = require('./get-cashin-commission');
const getCashOutJuridicalCommission = require('./get-cashout-juridical-commission.js');
const getCashOutNaturalCommission = require('./cashout-natural-commission/get-cashout-natural-commission');
const attachCommissionToGroups = require('./cashout-natural-commission/attach-commission-to-groups');

module.exports = {
  getCashInCommission,
  getCashOutJuridicalCommission,
  getCashOutNaturalCommission,
  attachCommissionToGroups,
};
