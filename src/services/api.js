import axios from 'axios';

// Retrieve the API URL from environment variables
const apiUrl = process.env.REACT_APP_API;

/**
 * Object representing API calls for cryptocurrency conversion.
 *
 * @namespace
 * @property {Function} getCryptocurrencies - Fetches a list of top cryptocurrencies based on market cap in USD.
 * @property {Function} getSupportedCurrencies - Fetches a list of supported vs_currencies from the CoinGecko API.
 * @property {Function} convertCurrency - Converts a specified amount from a source cryptocurrency to a target currency.
 */


const api = {

  /**
   * Fetches a list of top cryptocurrencies based on market cap in USD.
   * @function
   * @returns {Promise} A Promise that resolves to the response data.
   */


  getCryptocurrencies: () => axios.get(`${apiUrl}/cryptocurrencies`),

  /**
   * Fetches a list of supported vs_currencies from the CoinGecko API.
   * @function
   * @returns {Promise} A Promise that resolves to the response data.
   */

  getSupportedCurrencies: () => axios.get(`${apiUrl}/supportedcurrencies`),


  /**
   * Converts a specified amount from a source cryptocurrency to a target currency.
   * @function
   * @param {Object} data - Data object containing sourceCrypto, amount, and targetCurrency.
   * @returns {Promise} A Promise that resolves to the response data.
   */

  convertCurrency: (data) => axios.post(`${apiUrl}/convert`, data),
};

export default api;