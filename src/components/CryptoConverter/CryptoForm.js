import React, { useEffect } from 'react';
import "./CryptoForm.css";

/**
 * Functional component representing a form for cryptocurrency conversion.
 *
 * @component
 * @param {Object} props - The component's properties.
 * @param {Array} props.cryptocurrencies - List of cryptocurrencies for the source dropdown.
 * @param {string} props.sourceCrypto - Selected source cryptocurrency.
 * @param {Function} props.setSourceCrypto - Function to set the source cryptocurrency.
 * @param {number} props.amount - Amount to convert.
 * @param {Function} props.setAmount - Function to set the conversion amount.
 * @param {Array} props.supportedcurrencies - List of supported target currencies.
 * @param {string} props.targetCurrency - Selected target currency.
 * @param {Function} props.setTargetCurrency - Function to set the target currency.
 * @param {Function} props.handleSubmit - Function to handle form submission.
 * @returns {JSX.Element} The rendered component.
 */


const CryptoForm = ({
  cryptocurrencies,
  sourceCrypto,
  setSourceCrypto,
  amount,
  setAmount,
  supportedcurrencies,
  targetCurrency,
  setTargetCurrency,
  handleSubmit,
}) => {
  
  useEffect(()=>{},[amount])

  return (
    <form>
        <label>
          Source Cryptocurrency:
          <select value={sourceCrypto} onChange={(e) => setSourceCrypto(e.target.value)}>
            {cryptocurrencies.map((crypto) => (
              <option key={crypto.id} value={crypto.id}>
                {crypto.name}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Amount:
          <input type="number" value={amount} placeholder='Enter Amount' onChange={(e) => setAmount(e.target.value)} />
        </label>
        <br />
        <label>
          Target Currency:
          <select value={targetCurrency} onChange={(e) => setTargetCurrency(e.target.value)}>
          {supportedcurrencies.map((currencies) => (
              <option key={currencies} value={currencies}>
                {currencies}
              </option>
            ))}
          </select>
        </label>
        <br />
        <button type="button" onClick={handleSubmit}>
          Convert
        </button>
      </form>
  );
}

export default CryptoForm;
