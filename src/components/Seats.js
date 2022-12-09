import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

export default function Seats() {
  const { idSessao } = useParams();
  const [seats, setSeats] = useState(undefined);
  console.log(idSessao);
  
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
  console.log(seats);
  return(
    <>
    <Title>Selecione o(s) assento(s)</Title>
    {seats.seats.map((seat)=>( 
        <h1>{seat.name}</h1>    
  ))}
  </>
  ) ;
}

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
