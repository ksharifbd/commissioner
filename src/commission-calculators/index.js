const getCashInCommission = require('./get-cashin-commission');
const getCashOutJuridicalCommission = require('./get-cashout-juridical-commission.js');
const getCashOutNaturalCommission = require('./cashout-natural-commission/get-cashout-natural-commission');

module.exports = {
  getCashInCommission,
  getCashOutJuridicalCommission,
  getCashOutNaturalCommission,
};
