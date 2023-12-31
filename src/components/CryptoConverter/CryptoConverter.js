import React, { useState, useEffect } from 'react';
import CryptoForm from './CryptoForm';
import ConversionResult from './ConversionResult';
import api from "../../services/api"
import "./CryptoConverter.css"

const CryptoConverter = () => {
  const [cryptocurrencies, setCryptocurrencies] = useState([]);
  const [supportedCurrencies, setSupportedCurrencies] = useState([]);
  const [sourceCrypto, setSourceCrypto] = useState('');
  const [amount, setAmount] = useState();
  const [targetCurrency, setTargetCurrency] = useState('');
  const [convertedAmount, setConvertedAmount] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [cryptoResponse, supportedCurrenciesResponse] = await Promise.all([
          api.getCryptocurrencies(),
          api.getSupportedCurrencies(),
        ]);

        setCryptocurrencies(cryptoResponse.data);
        setSourceCrypto(cryptoResponse.data[0]?.id || '');

        setSupportedCurrencies(supportedCurrenciesResponse.data);
        setTargetCurrency(supportedCurrenciesResponse.data[0] || '');
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [amount]);

  const handleSubmit = async () => {
    try {
      const response = await api.convertCurrency({
        sourceCrypto,
        amount,
        targetCurrency,
      });
      console.log({response});
      setAmount()
      setConvertedAmount(response.data.convertedAmount);
    } catch (error) {
      window.alert(error?.response?.data?.error)
      console.error('Error converting currency:', error);
    }
  };

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
