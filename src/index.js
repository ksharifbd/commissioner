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
const fs = require('fs');

const args = process.argv.slice(2);
const fileName = args[0];

const inputStream = fs.createReadStream(fileName, 'utf8');

inputStream.on('data', chunk => {
  console.log('new chunk receieved');

  console.log(chunk);
});
