import styled from "styled-components";
import device from "../../../device";

export const FirstSection = styled.section`
  border: solid #007f00;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url(../src/assets/imgs/backgroud.avif);
  background-repeat: no-repeat;
  background-size: cover;

  @media ${device.mobileL} { 
    
  }
`;

export const FirstDiv = styled.div`
  border: solid #ff0000;
  display: flex;
  height: 350px;
  width: 350px;
  flex-direction: column;
  align-items: center;
  background-color: black;

  @media ${device.mobileL} {
   
  }
`;
export const SecondDiv = styled.div`
  border: solid #4169e1;
  display: flex;
  height: 350px;
  flex-direction: column;
  justify-content: space-between;

  @media ${device.mobileL} {
  flex-direction: row;
  height: 100px;
  }
`;
export const ResultBox = styled.div`
  height: 200px;
  display: flex;
  align-items: center;
`;

export const GridBox = styled.div`
  display: flex;

  @media ${device.mobileL} {
   flex-direction: column;
  }
`;

export const BorderStyledBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 600px;
  height: 600px;
  border-radius: 40px;
  border: solid;

  @media ${device.mobileL} {
    
    width: 300px;
  }
`;

export const StyleBoxInput = styled.div`
  /* border: solid gray; */
  display: flex;
  width: 250px;
  justify-content: center;
  justify-content: space-evenly;
`;

export const StyleInput = styled.input`
  width: 100px;
  height: 50px;
  border-radius: 20px;
  text-align: center;
  text-decoration: double;
  background-color: gray;
  color: whitesmoke;
  border-bottom: none;
`;

export const StyleButton = styled.button`
  height: 60px;
  width: 60px;
  border-radius: 40px;
  font-size: 30px;
  font-weight: 200;
  text-align: center;
  background-color: black;
  color: white;

  &:hover {
    cursor: pointer;
    background-color: orange;
    color: black;
  }
`;

export const Title = styled.h1`
  font-size: 42px;
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
  color: white;
  padding-bottom: 20px;
`;

export const SubTitle = styled.h1`
  font-size: 32px;
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  color: white;
`;
