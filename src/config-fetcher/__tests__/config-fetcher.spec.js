// eslint-disable-next-line node/no-unpublished-require
const nock = require('nock');
const configFetcher = require('..');
const {configs} = require('../../mock-data');
const {operationTypes} = require('../../constants');

describe('Config Fetcher', () => {
  const mockEndpoint = 'http://mock-config.com/cash-in';

  nock('http://mock-config.com')
    .get('/cash-in')
    .reply(200, {
      ...configs.cashIn,
    });

  const output = {
    operationType: operationTypes.CASH_IN,
    config: configs.cashIn,
  };

  it('should return correct output shape for the input url and operation type', async () => {
    const fetchedConfig = await configFetcher(mockEndpoint, operationTypes.CASH_IN);

    expect(fetchedConfig.operationType).toBe(output.operationType);
    expect(fetchedConfig.config.percents).toBe(output.config.percents);
    expect(fetchedConfig.config.max.amount).toBe(output.config.max.amount);
  });
});
