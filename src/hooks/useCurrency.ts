import { useState } from 'react';
import exchangeRates from '../data/exchangeRates.json';
import { convertCurrency } from '../services/exchangeRates';

export const useCurrency = () => {
  const currencies = Object.keys(exchangeRates);

  const [amount, setAmount] = useState<number>(0);
  const [fromCurrency, setFromCurrency] = useState<string>(currencies[0]);
  const [toCurrency, setToCurrency] = useState<string>(currencies[1]);
  const [convertedAmount, setConvertedAmount] = useState<number>(0);

  const handleConvert = () => {
    const result = convertCurrency(amount, fromCurrency as keyof typeof exchangeRates, toCurrency as keyof typeof exchangeRates);
    setConvertedAmount(result);
  };

  const handleInvertCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return {
    amount,
    setAmount,
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    convertedAmount,
    handleConvert,
    handleInvertCurrencies,
    currencies
  };
};
