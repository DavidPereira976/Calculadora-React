import { useEffect, useState } from "react";

import {
  Title,
  SubTitle,
  FirstSection,
  FirstDiv,
  StyleBoxInput,
  SecondDiv,
  GridBox,
  ResultBox,
  StyleInput,
  StyleButton,
  BorderStyledBox
} from "./styled";

function Main() {

  const [primeiroValor, setPrimeiroValor] = useState();
  const [segundoValor, setSegundoValor] = useState();
  const [resultado, setResultado] = useState("=");

  const [cor, setCor] = useState("Tomato");

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

  const Multiplicar = () => {
    setResultado(primeiroValor * segundoValor);
  };

  const Divisao = () => {
    setResultado(primeiroValor / segundoValor);
  };

  useEffect(() => {
		setTimeout(() => {
			if (cor === "Tomato") {
				setCor("Blue");
			} else if (cor=== "Blue") {
				setCor("Pink");
			} else if (cor === "Pink") {
      setCor("Tomato")
      }
		}, 2000);
	});
  return (
    <>
      <FirstSection>
        <BorderStyledBox style={{ backgroundColor: cor, transition: "2s", }}>
        <Title>Calculadora - React</Title>
        <GridBox>
          <FirstDiv>
            <StyleBoxInput>
              <StyleInput type="number" onChange={CapturarPrimeiroValor} />
              <StyleInput type="number" onChange={CapturarSegundoValor} />
            </StyleBoxInput>
            <ResultBox>
              <SubTitle>{resultado}</SubTitle>
            </ResultBox>
          </FirstDiv>

          <SecondDiv>
            <StyleButton onClick={Soma}>+</StyleButton>
            <StyleButton onClick={Subtrair}>-</StyleButton>
            <StyleButton onClick={Multiplicar}>x</StyleButton>
            <StyleButton onClick={Divisao}>÷</StyleButton>
          </SecondDiv>
        </GridBox>
        </BorderStyledBox>
      </FirstSection>
    </>
  );
}

export default Main;
