const {readFile} = require('fs');
const {promisify} = require('util');
const dotenv = require('dotenv');
const {markTransactionsByIds} = require('./input-processors');
const configFetcher = require('./config-fetcher');
const {operationTypes} = require('./constants');
const CommissionBroker = require('./commission-broker');
const centCeil = require('./ouput-modifier');

dotenv.config();

const configUrls = {
  cashIn: process.env.CASH_IN_CONFIG_URL,
  cashOut: {
    natural: process.env.CASH_OUT_NATURAL_CONFIG_URL,
    juridical: process.env.CASH_OUT_JURIDICAL_CONFIG_URL,
  },
};

const readFilePromise = promisify(readFile);

const args = process.argv.slice(2);
const fileName = args[0];

Promise.all([
  readFilePromise(fileName, {encoding: 'utf8'}),
  configFetcher(configUrls.cashIn, operationTypes.CASH_IN),
  configFetcher(configUrls.cashOut.natural, operationTypes.CASH_OUT_NATURAL),
  configFetcher(configUrls.cashOut.juridical, operationTypes.CASH_OUT_JURIDICAL),
])
  .then(([transactions, ...configs]) => {
    const parsedTransactions = JSON.parse(transactions);

    const markedTransactionsByIds = markTransactionsByIds(parsedTransactions);

    const commissionBroker = new CommissionBroker(markedTransactionsByIds, configs);

    markedTransactionsByIds.forEach(trx => {
      const commission = commissionBroker.getCommission(trx);

      // eslint-disable-next-line no-console
      console.log(centCeil(commission));
    });
  })
  // eslint-disable-next-line no-console
  .catch(error => console.error(error));
