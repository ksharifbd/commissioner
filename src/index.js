// const configFetcher = require('./config-fetcher');

// const configUrls = {
//   cashIn: {
//     natural: 'http://private-38e18c-uzduotis.apiary-mock.com/config/cash-in',
//   },
//   cashOut: {
//     natural: 'http://private-38e18c-uzduotis.apiary-mock.com/config/cash-out/natural',
//     juridical: 'http://private-38e18c-uzduotis.apiary-mock.com/config/cash-out/juridical',
//   },
// };

// Promise.all([
//   configFetcher(configUrls.cashIn.natural, 'cashIn-natural'),
//   configFetcher(configUrls.cashOut.natural, 'cashOut-natural'),
//   configFetcher(configUrls.cashOut.juridical, 'cashOut-juridical'),
// ])
//   .then(configs => console.log(JSON.stringify(configs, null, 2)))
//   .catch(error => console.error(error));
const {readFile} = require('fs');
const {promisify} = require('util');
const {markTransactionByIds} = require('./input-processor');

const args = process.argv.slice(2);
const fileName = args[0];

const readFilePromise = promisify(readFile);

readFilePromise(fileName, {encoding: 'utf8'})
  .then(data => {
    const parsedData = JSON.parse(data);
    const markedDataByIds = markTransactionByIds(parsedData);

    console.log(markedDataByIds);
  })
  .catch(error => console.error(error));
