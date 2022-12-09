import styled from "styled-components";

export default function Movies(){
    return(
        <Title>Selecione o filme</Title>
    );
}

const Title = styled.div`
margin-top: 67px;
height: 120px;
font-family: 'Roboto', sans-serif;
font-size: 24px;
font-weight: 400;
color: #293845;
letter-spacing: 1px;
display: flex;
align-items: center;
justify-content: center;
`