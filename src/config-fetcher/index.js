const fetch = require('node-fetch');

/**
 * fetches config from the given URL and attaches operation types
 *
 * @async
 * @function configFetcher
 * @param {string} url - configuration URL to fetch from
 * @param {string} [operationType] - transaction operation type
 * @returns {Promise}
 */
async function configFetcher(url, operationType) {
  try {
    const response = await fetch(url);
    const config = await response.json();

    return {
      operationType,
      config,
    };
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = configFetcher;
