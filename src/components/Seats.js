import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Form from "./Form";

export default function Seats() {
  const { idSessao } = useParams();
  const [seats, setSeats] = useState(undefined);
  const [selected, setSelected] = useState([]);

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
      let index = selected.indexOf(seat.id);
      selected.splice(index, 1);
      console.log(selected);
    } else if (seat.isAvailable) {
      setSelected([...selected, seat.id]);
    } else if (!seat.isAvailable) {
      alert("O assento não está disponível");
    }
  }

  function color(seat) {
    if (seat.isAvailable) {
      return "#C3CFD9";
    } else if (!seat.isAvailable) {
      return "#FBE192";
    }
  }
  console.log(selected);
  return (
    <Container>
      <Title>Selecione o(s) assento(s)</Title>
      <ContainerSeats>
        {seats.seats.map((seat) => (
          <ButtonSeat
            onClick={() => select(seat)}
            color={() => (selected.includes(seat.id) ? "#1AAE9E" : color(seat))}
            border={seat.isAvailable ? "#7B8B99" : "#F7C52B"}
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
      <Form selected={selected}/>
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
  font-family: "Roboto", sans-serif;
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
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  color: #4e5a65;
  h1 {
    margin-top: 6%;
  }
`;
