import React from 'react';
import { render, fireEvent, screen  } from '@testing-library/react';
import ConverterForm from '../components/ConverterForm';
import { useCurrency } from '../hooks/useCurrency';

jest.mock('../hooks/useCurrency');

const mockedUseCurrency = useCurrency as jest.MockedFunction<typeof useCurrency>;

describe('ConverterForm', () => {
  beforeEach(() => {
    mockedUseCurrency.mockReturnValue({
      amount: 100,
      setAmount: jest.fn(),
      fromCurrency: 'USD',
      setFromCurrency: jest.fn(),
      toCurrency: 'EUR',
      setToCurrency: jest.fn(),
      convertedAmount: 85.00,
      handleConvert: jest.fn(),
      handleInvertCurrencies: jest.fn(),
      currencies: ['USD', 'EUR', 'BRL', 'JPY', 'RUB'],
    });
  });

  test('renderiza os elementos básicos do formulário', () => {
    const { getByPlaceholderText, getByText } = render(<ConverterForm />);

    expect(getByPlaceholderText('Valor para conversão')).toBeTruthy();
    expect(getByText('⇆')).toBeTruthy();
  });

  test('chama a função handleInvertCurrencies quando o botão de inverter é clicado', () => {
    const { getByText } = render(<ConverterForm />);
    const invertButton = getByText('⇆');

    fireEvent.click(invertButton);

    expect(mockedUseCurrency().handleInvertCurrencies).toHaveBeenCalled();
  });

  test('não permite valores negativos no input', () => {
    const { getByPlaceholderText } = render(<ConverterForm />);
    const amountInput = getByPlaceholderText('Valor para conversão');

    fireEvent.change(amountInput, { target: { value: '-50' } });

    expect(mockedUseCurrency().setAmount).not.toHaveBeenCalled();
  });
});
