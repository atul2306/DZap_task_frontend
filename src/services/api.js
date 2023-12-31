import axios from 'axios';

const apiUrl = process.env.REACT_APP_API;

const api = {
  getCryptocurrencies: () => axios.get(`${apiUrl}/cryptocurrencies`),
  getSupportedCurrencies: () => axios.get(`${apiUrl}/supportedcurrencies`),
  convertCurrency: (data) => axios.post(`${apiUrl}/convert`, data),
};

export default api;