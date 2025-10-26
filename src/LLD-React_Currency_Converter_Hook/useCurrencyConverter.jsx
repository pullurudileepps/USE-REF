import { useCallback } from "react";

export const exchangeRates = {
  USD_EUR: 0.93,
  EUR_USD: 1.07,
  GBP_USD: 1.21
}

function useCurrencyConverter(baseCurrency, targetCurrency) {
  // Use the following predefined exchange rates for conversion:
  //  - USD to EUR: 0.93
  //  - EUR to USD: 1.07
  //  - GBP to USD: 1.21
  const convert = useCallback(
    (amount) => {
      if (isNaN(amount)) return null;
      // Conversion logic will be placed here.
      let rate = exchangeRates[`${baseCurrency}_${targetCurrency}`];
      if (!rate) return null;
      return amount * rate;
    },
    [baseCurrency, targetCurrency]
  );

  return convert;
}

export default useCurrencyConverter;
