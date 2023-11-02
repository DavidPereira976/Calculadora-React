import styled from "styled-components";
import Main from "../Main/index";

export const FirstSection = styled.section`
border:solid #007F00;
display: flex;
height: 100vh;
justify-content: center;
align-items: center;
flex-direction: column;

`

export const FirstDiv = styled.div`
border: solid #FF0000;
display: flex;
height: 300px;
width: 300px;
flex-direction: column;
align-items: center;
background-color: purple;

`
export const SecondDiv = styled.div`
border: solid #4169E1;
background-color: purple;
display: flex;
height: 300px;
flex-direction: column;
justify-content: space-between;
`
export const ResultBox = styled.div`
height: 200px;
display: flex;
align-items: center;
`

export const GridBox = styled.div`
display: flex;
`

export const BorderStyledBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

width: 600px;
height: 600px;
border-radius: 40px;

`

export const StyleBoxInput = styled.div`
/* border: solid gray; */
display: flex;
width: 250px;
justify-content: center;
justify-content: space-evenly;
`

export const StyleInput = styled.input`

width: 100px;
height: 50px;
border-radius: 20px;
text-align: center;
text-decoration: double;
background-color: gray;
color: whitesmoke;
border-bottom: none;

`

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
`

export const Title = styled.h1`
font-size: 32px;
font-family: 'Open Sans', sans-serif;
font-weight: 300;
`

export const SubTitle = styled.h1`
font-size: 32px;
font-family: 'Open Sans', sans-serif;
font-weight: 700;
color: white;
`

