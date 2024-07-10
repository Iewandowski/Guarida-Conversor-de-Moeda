import exchangeRatesData from '../data/exchangeRates.json';
import { IExchangeRatesProps } from './interfaces/IExchangeRates';

export const exchangeRates: IExchangeRatesProps = exchangeRatesData;

export const convertCurrency = (
  amount: number,
  from: keyof IExchangeRatesProps,
  to: keyof IExchangeRatesProps
): number => {
  if (from === to) return amount;
  const rate = exchangeRates[from][to];
  return amount * rate;
};
