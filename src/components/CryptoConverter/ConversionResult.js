import React from 'react';
import "./ConversionResult.css"

/**
 * Functional component representing the result of a currency conversion.
 *
 * @component
 * @param {Object} props - The component's properties.
 * @param {number} props.convertedAmount - The converted amount to be displayed.
 * @param {string} props.targetCurrency - The target currency for the conversion result.
 * @returns {JSX.Element} The rendered component.
 */

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