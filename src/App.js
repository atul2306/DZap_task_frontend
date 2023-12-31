import React from 'react';
import CryptoConverter from './components/CryptoConverter/CryptoConverter';
import "./App.css"

/**
 * Functional component representing the main application.
 *
 * @component
 * @returns {JSX.Element} The rendered component.
 */

const App = () => {

  return (
    <div className="App">
      {/* Render the CryptoConverter component */}
        <CryptoConverter/>
    </div>
  );
}

export default App;
