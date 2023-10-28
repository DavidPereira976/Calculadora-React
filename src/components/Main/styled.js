import styled from "styled-components";


export const FirstSection = styled.section`
border:solid green;
display: flex;
height: 100vh;
justify-content: center;
align-items: center;
flex-direction: column;

`

export const FirstDiv = styled.div`
border: solid red;
display: flex;
height: 300px;
width: 300px;
flex-direction: column;
align-items: center;

`
export const SecondDiv = styled.div`
border: solid royalblue;
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

`

export const StyleButton = styled.button`
height: 60px;
width: 60px;
border-radius: 40px;
font-size: 30px;
font-weight: 200;
text-align: center;


&:hover {
cursor: pointer;
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
`

