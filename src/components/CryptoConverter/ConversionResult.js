import React from 'react';
import "./ConversionResult.css"

const ConversionResult = ({ convertedAmount, targetCurrency }) => {
  return (
    <>
      {convertedAmount !== null && (
        <p>
          Converted Amount: {convertedAmount} {targetCurrency.toUpperCase()}
        </p>
      )}
    </>
  );
}

export default ConversionResult;