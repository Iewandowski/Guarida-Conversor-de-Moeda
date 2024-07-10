# Conversor de Moedas

Conversor de moedas desenvolvido em React/Typescript.

## Visão Geral

Este projeto é um conversor de moedas que permite aos usuários converter valores entre diferentes moedas selecionáveis. A conversão é feita em tempo real com base nas taxas de câmbio mais recentes disponíveis via uma API externa.

## Funcionalidades

- Conversão de valores entre diferentes moedas.
- Seleção das moedas de origem e destino.
- Atualização automática dos valores convertidos conforme as seleções são alteradas.
- Botão de inversão das moedas de origem e destino.
- Layout responsivo para dispositivos móveis e desktops.

## Instalação

Para rodar este projeto localmente, siga os passos abaixo:
1. Clone o repositório:

   ```bash
   git clone https://github.com/Iewandowski/Guarida-Conversor-de-Moeda.git
2. Navegue até o diretório do projeto:

   ```bash
   cd .\currency-converter\

3. Instale as dependências:
   ```bash
   npm install

4. Inicie o servidor de desenvolvimento local
   ```bash
   npm start
O aplicativo estará disponível em http://localhost:3000.

5. Para rodar os testes unitários:
   ```bash
   npm test

## Arquivos Principais
- **ConverterForm**: *Componente que contém o formulário de conversão de moedas. Ele inclui campos de entrada para o valor, seletores de moedas e um botão de inversão. Localizado em: "src/components/ConverterForm.tsx"*
- **useCurrency:** *Hook customizado que gerencia o estado e a lógica de conversão de moedas. Localizado em: "src/hooks/useCurrency.ts"*
- **exchangeRates:** *Contém as taxas de câmbio utilizadas para a conversão de moedas (atualize este objeto para alterar valores ou adicionar/excluir moedas). Localizado em: "src/data/exchangeRates.json"*
- **ConverterForm.test:** *Contém arquivos de testes para os componentes. Localizado em: "src/tests/ConverterForm.test.tsx"*

