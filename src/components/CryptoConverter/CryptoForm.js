import React from 'react';
import "./CryptoForm.css";

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
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
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
