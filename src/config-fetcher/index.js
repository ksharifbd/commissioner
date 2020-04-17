const fetch = require('node-fetch');

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
