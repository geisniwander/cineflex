import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Form from "./Form";

export default function Seats({
  name,
  setName,
  cpf,
  setCpf,
  selected,
  setSelected,
  selectedMovie,
  selectedSession,
  imageMovie,
}) {
  const { idSessao } = useParams();
  const [seats, setSeats] = useState(undefined);

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`
    );

    promise.then((res) => {
      setSeats(res.data);
    });
    promise.catch((err) => console.log(err));
  }, []);

  if (seats === undefined) {
    return <h1>Carregando...</h1>;
  }

  function select(seat) {
    if (selected.includes(seat.id)) {
      const array = selected;
      const index = array.indexOf(seat.id);
      array.splice(index, 1);
      setSelected([...array]);
    } else if (seat.isAvailable) {
      setSelected([...selected, seat.id]);
    } else if (!seat.isAvailable) {
      alert("O assento não está disponível");
    }
  }

  function color(seat) {
    if (selected.includes(seat.id)) {
      return "#1AAE9E";
    } else if (seat.isAvailable) {
      return "#C3CFD9";
    } else if (!seat.isAvailable) {
      return "#FBE192";
    }
  }

  return (
    <Container>
      <Title>Selecione o(s) assento(s)</Title>
      <ContainerSeats>
        {seats.seats.map((seat) => (
          <ButtonSeat
            key={seat.id}
            color={() => color(seat)}
            onClick={() => select(seat)}
            border={seat.isAvailable ? "#7B8B99" : "#F7C52B"}
            data-test="seat"
          >
            {seat.name}
          </ButtonSeat>
        ))}
      </ContainerSeats>
      <ContainerInfo>
        <Info>
          <ButtonSeat color="#1AAE9E" border="#0E7D71"></ButtonSeat>
          <h1>Selecionado</h1>
        </Info>
        <Info>
          <ButtonSeat color="#C3CFD9" border="#7B8B99"></ButtonSeat>
          <h1>Disponível</h1>
        </Info>
        <Info>
          <ButtonSeat color="#FBE192" border="#F7C52B"></ButtonSeat>
          <h1>Indisponível</h1>
        </Info>
      </ContainerInfo>
      <Form
        selected={selected}
        name={name}
        setName={setName}
        cpf={cpf}
        setCpf={setCpf}
      />
      <Footer data-test="footer">
        <MovieImage>
          <img alt={selectedMovie} src={imageMovie} />
        </MovieImage>
        <Infos>
          <h1>{selectedMovie}</h1>
          <h1>{selectedSession}</h1>
        </Infos>
      </Footer>
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
  margin-top: 67px;
  height: 120px;
  font-size: 24px;
  font-weight: 400;
  color: #293845;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContainerSeats = styled.div`
  width: 95%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const ButtonSeat = styled.button`
  width: 26px;
  height: 26px;
  border-radius: 12px;
  background-color: ${(props) => props.color};
  margin: 1.5%;
  border: 1px solid ${(props) => props.border};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContainerInfo = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  margin-top: 2%;
`;

const Info = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  color: #4e5a65;
  h1 {
    margin-top: 6%;
  }
`;

const Infos = styled.div`
  width: 80%;
`;

const Footer = styled.div`
  width: 100%;
  height: 117px;
  position: fixed;
  left: 0px;
  bottom: 0px;
  background: #dfe6ed;
  border: 1px solid #9eadba;
  display: flex;
  justify-content: start;
  align-items: center;
  h1 {
    margin-left: 4%;
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 30px;
    color: #293845;
  }
`;

const MovieImage = styled.div`
  width: 64px;
  height: 89px;
  left: 10px;
  bottom: 14px;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 2%;
  img {
    width: 48px;
    height: 72px;
  }
`;
