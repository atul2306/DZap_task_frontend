import React, { useState, useEffect } from 'react';
import CryptoForm from './CryptoForm';
import ConversionResult from './ConversionResult';
import api from "../../services/api"
import "./CryptoConverter.css"


/**
 * Functional component representing a Crypto Converter application.
 *
 * @component
 * @returns {JSX.Element} The rendered component.
 */

const CryptoConverter = () => {
  // State variables for managing component's state
  const [cryptocurrencies, setCryptocurrencies] = useState([]);
  const [supportedCurrencies, setSupportedCurrencies] = useState([]);
  const [sourceCrypto, setSourceCrypto] = useState('');
  const [amount, setAmount] = useState();
  const [targetCurrency, setTargetCurrency] = useState('');
  const [convertedAmount, setConvertedAmount] = useState(null);


  /**
   * Fetches cryptocurrency and supported currency data from the API on component mount.
   */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [cryptoResponse, supportedCurrenciesResponse] = await Promise.all([
          api.getCryptocurrencies(),
          api.getSupportedCurrencies(),
        ]);
       // Set initial state based on API responses
        setCryptocurrencies(cryptoResponse.data);
        setSourceCrypto(cryptoResponse.data[0]?.id || '');

        setSupportedCurrencies(supportedCurrenciesResponse.data);
        setTargetCurrency(supportedCurrenciesResponse.data[0] || '');
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  /**
   * Handles form submission, converts currency, and updates the state with the result.
   */

  const handleSubmit = async () => {
    try {
      // Make API call to convert currency
      const response = await api.convertCurrency({
        sourceCrypto,
        amount,
        targetCurrency,
      });
      // Update state with the converted amount
      setAmount("")
      setConvertedAmount(response.data.convertedAmount);
    } catch (error) {
      // Display an alert with the error message
      window.alert(error?.response?.data?.error)
      console.error('Error converting currency:', error);
    }
  };

  // Rendered JSX
  return (
    <div className='cryptoconverter'>
      <h1>Crypto Converter</h1>
      <CryptoForm
        cryptocurrencies={cryptocurrencies}
        sourceCrypto={sourceCrypto}
        setSourceCrypto={setSourceCrypto}
        amount={amount}
        setAmount={setAmount}
        supportedcurrencies={supportedCurrencies}
        targetCurrency={targetCurrency}
        setTargetCurrency={setTargetCurrency}
        handleSubmit={handleSubmit}
      />
      <ConversionResult convertedAmount={convertedAmount} targetCurrency={targetCurrency} />
    </div>
  );
}

export default CryptoConverter;
