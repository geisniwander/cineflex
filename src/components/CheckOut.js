import styled from "styled-components";

export default function CheckOut(){
    return(
        <Title><h1>Pedido feito</h1><h1>com sucesso</h1></Title>
    );
}

const Title = styled.div`
margin-top: 67px;
height: 120px;
font-family: 'Roboto', sans-serif;
font-size: 24px;
font-weight: 700;
color: #247A6B;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
letter-spacing: 1px;
h1{
    margin-top: 2%;
}
`