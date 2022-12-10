import { Link } from "react-router-dom";
import styled from "styled-components";

export default function CheckOut({
  selected,
  name,
  cpf,
  selectedMovie,
  selectedSuccess,
}) {
  return (
    <Container>
      <Title color="#247A6B">
        Pedido feito
        <br/>
        com sucesso!
      </Title>
      <ContainerSuccess>
        <SubTitle color="#293845" data-test="movie-info">
          Filme e sessão
          <h2>{selectedMovie}</h2>
          <h2>{selectedSuccess}</h2>
        </SubTitle>
        <SubTitle color="#293845" data-test="seats-info">
          Ingressos
          {selected.map((s) => (
            <h2 key={s}>Assento {s}</h2>
          ))}
        </SubTitle>
        <SubTitle color="#293845" data-test="client-info">
          Comprador
          <h2>Nome: {name}</h2>
          <h2>CPF: {cpf}</h2>
        </SubTitle>
      </ContainerSuccess>
      <Link to={`/`}>
        <Button data-test="go-home-btn">Voltar pra Home</Button>
      </Link>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  margin-top: 80px;
  height: 120px;
  font-size: 24px;
  font-weight: 700;
  color: ${(props) => props.color};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  letter-spacing: 1px;
`;

const SubTitle = styled.div`
  margin-top: 0;
  margin-bottom: 7%;
  font-size: 24px;
  font-weight: 700;
  color: ${(props) => props.color};
  letter-spacing: 1px;
  h2 {
    margin-top: 2%;
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;
    display: flex;
    align-items: center;
    letter-spacing: 0.04em;
  }
`;

const ContainerSuccess = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: end;
`;

const Button = styled.button`
  width: 225px;
  height: 42px;
  background: #e8833a;
  border-radius: 3px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  letter-spacing: 0.04em;
  color: white;
  border: none;
  margin-top: 40%;
`;