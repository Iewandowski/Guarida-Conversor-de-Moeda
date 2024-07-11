import React from 'react';
import { IHomePageProps } from './interfaces/IHomePage';
import ConverterForm from '../components/ConverterForm';

const HomePage: React.FC<IHomePageProps> = () => {
  return (
    <div className="home">
      <img src={require('../assets/guarida-logo.png')} alt="" />
      <h1>Conversor de Moedas:</h1>
      <ConverterForm />
    </div>
  );
};

export default HomePage;
