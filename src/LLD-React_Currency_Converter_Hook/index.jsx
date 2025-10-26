import React, { useState } from "react";
import "../App.css";
import useCurrencyConverter from "./useCurrencyConverter";

function Header() {
  // States for USD to EUR conversion
  const [usdAmount, setUsdAmount] = useState("");
  const [convertedEur, setConvertedEur] = useState("");

  // States for EUR to USD conversion
  const [eurAmount, setEurAmount] = useState("");
  const [convertedUsdFromEur, setConvertedUsdFromEur] = useState("");

  // States for GBP to USD conversion
  const [gbpAmount, setGbpAmount] = useState("");
  const [convertedUsdFromGbp, setConvertedUsdFromGbp] = useState("");

  // Create hook instances
  // Ex :- const convertUsdToEur = useCurrencyConverter("USD", "EUR");

  // Create event handlers

  const handleUsdAmountChange = (event) => {
    // Implement the function here
  };

  const handleEurAmountChange = (event) => {
    // Implement the function here
  };

  const handleGbpAmountChange = (event) => {
    // Implement the function here
  };

  // do not edit the return statement

  return (
    <div className="App">
      <h1>Currency Converter</h1>
      <div>
        <label>USD to EUR:</label>
        <input
          type="number"
          value={usdAmount}
          onChange={handleUsdAmountChange}
          placeholder="Enter USD amount"
        />
        <p>Converted to EUR: {convertedEur}</p>
      </div>
      <div>
        <label>EUR to USD:</label>
        <input
          type="number"
          value={eurAmount}
          onChange={handleEurAmountChange}
          placeholder="Enter EUR amount"
        />
        <p>Converted to USD: {convertedUsdFromEur}</p>
      </div>
      <div>
        <label>GBP to USD:</label>
        <input
          type="number"
          value={gbpAmount}
          onChange={handleGbpAmountChange}
          placeholder="Enter GBP amount"
        />
        <p>Converted to USD: {convertedUsdFromGbp}</p>
      </div>
    </div>
  );
}

export default Header;
