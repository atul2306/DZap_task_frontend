import axios from 'axios';

const apiUrl = 'http://localhost:3001/api';

const api = {
  getCryptocurrencies: () => axios.get(`${apiUrl}/cryptocurrencies`),
  getSupportedCurrencies: () => axios.get(`${apiUrl}/supportedcurrencies`),
  convertCurrency: (data) => axios.post(`${apiUrl}/convert`, data),
};

export default api;