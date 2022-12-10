import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Form({ selected }) {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const navigate = useNavigate();

  function post(e) {
    e.preventDefault();
    const promise = axios.post(
      "https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many",
      { ids: selected, name, cpf }
    );
    promise.then(() => navigate("/checkout"));
    promise.catch((err) => console.log(err));
  }
  return (
    <Container>
      <FormS onSubmit={post}>
        <ContainerInput>
          <label htmlFor="name">Nome do comprador:</label>
          <Input
            id="name"
            type="text"
            placeholder="Digite seu nome..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          ></Input>
        </ContainerInput>
        <ContainerInput>
          <label htmlFor="cpf">CPF do comprador</label>
          <Input
            id="cpf"
            type="number"
            placeholder="Digite seu cpf"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            required
          ></Input>
        </ContainerInput>

        <Button type="submit">Reservar assento(s)</Button>
      </FormS>
    </Container>
  );
}
const Container = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 8%;
`;
const FormS = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ContainerInput = styled.div`
  width: 100%;
  margin: 4%;
  display: flex;
  flex-direction: column;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #293845;
  label {
    margin-bottom: 2%;
  }
`;

const Input = styled.input`
  height: 51px;
  background: #ffffff;
  border: 1px solid #d5d5d5;
  border-radius: 3px;
`;

const Button = styled.button`
  width: 225px;
  height: 42px;
  background: #e8833a;
  border-radius: 3px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  letter-spacing: 0.04em;
  color: white;
  border: none;
  margin-top: 5%;
`;
