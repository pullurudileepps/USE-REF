import { useCallback } from "react";

function useCurrencyConverter(baseCurrency, targetCurrency) {
  // Use the following predefined exchange rates for conversion:
  //  - USD to EUR: 0.93
  //  - EUR to USD: 1.07
  //  - GBP to USD: 1.21
  const convert = useCallback(
    (amount) => {
      // Conversion logic will be placed here.
    },
    [baseCurrency, targetCurrency]
  );

  return convert;
}

export default useCurrencyConverter;
