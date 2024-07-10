import React, { useEffect } from 'react';
import { useCurrency } from '../hooks/useCurrency';
import '../styles/global.css';

const ConverterForm: React.FC = () => {
  const {
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
  } = useCurrency();

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '') {
      setAmount(0);
    } else {
      const numberValue = Number(value);
      if (numberValue >= 0) {
        setAmount(numberValue);
      }
    }
  };

  useEffect(() => {
    handleConvert();
  }, [amount, fromCurrency, toCurrency]);

  return (
    <div className="converter-form">
      <input
        type="number"
        value={amount === 0 ? '' : amount}
        onChange={handleAmountChange}
        placeholder="Valor para conversão"
        className="amount-input"
      />

      <div className="button-group">
        <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)} className="currency-select">
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
        <button onClick={handleInvertCurrencies} className="invert-button">⇆</button> {}
        <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)} className="currency-select">
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
      <p className="converted-amount">Valor Convertido: <span className="converted-value">{convertedAmount.toFixed(2)}</span> {toCurrency}</p>
    </div>
  );
};

export default ConverterForm;