import { useState } from "react";
import { Title, FirstComponentMain, Dados, StyleButton } from "./styled";


function Main() {
  const [primeiroValor, setPrimeiroValor] = useState();
  const [segundoValor, setSegundoValor] = useState();
  const [resultado, setResultado] = useState();

  const CapturarPrimeiroValor = (item) => {
    setPrimeiroValor(Number(item.target.value));
  };

  const CapturarSegundoValor = (item) => {
    setSegundoValor(Number(item.target.value));
  };

  const Soma = () => {
    setResultado(primeiroValor + segundoValor);
  };

  const Subtrair = () => {
    setResultado(primeiroValor - segundoValor);
  };

  return (
    <>
      <FirstComponentMain>
        <Title>Calculadora</Title>
      </FirstComponentMain>

      <FirstComponentMain>
        <Dados
          type="number"
          placeholder="Digite o Primeiro Valor"
          onChange={CapturarPrimeiroValor}
        />
        <Dados
          type="number"
          placeholder="Digite o Segundo Valor"
          onChange={CapturarSegundoValor}
        />
        <StyleButton onClick={Soma}>+</StyleButton>
        <StyleButton onClick={Subtrair}>-</StyleButton>
        <StyleButton>X</StyleButton>
        <StyleButton>/</StyleButton>
      </FirstComponentMain>
      <FirstComponentMain>
       <h1>{resultado}</h1>
      </FirstComponentMain>
    </>
  );
}

export default Main;
