import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

export default function Section({ setSelectedSession , setSelectedSuccess }) {
  const { idFilme } = useParams();
  const [sections, setSections] = useState(undefined);

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`
    );

    promise.then((res) => {
      setSections(res.data);
    });
    promise.catch(() => alert("Um erro inesperado aconteceu!"));
  }, []);

  if (sections === undefined) {
    return <h1>Carregando...</h1>;
  }

  return (
    <Container>
      <Title>Selecione o horário</Title>
      <ContainerSection>
        {sections.days.map((section) => (
          <li key={section.id} data-test="movie-day">
            <h1>
              {section.weekday} - {section.date}
            </h1>
            {section.showtimes.map((showtime) => (
              <Link
                key={showtime.id}
                onClick={() =>{
                  setSelectedSession(section.weekday + " - " + showtime.name);
                  setSelectedSuccess(section.date + " " + showtime.name)
                }}
                to={`/assentos/${showtime.id}`}
              >
                <Button data-test="showtime">{showtime.id}</Button>
              </Link>
            ))}
          </li>
        ))}
      </ContainerSection>
      <Footer data-test="footer">
        <MovieImage>
          <img alt={sections.title} src={sections.posterURL} />
        </MovieImage>
        <h1>{sections.title}</h1>
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

const ContainerSection = styled.ul`
  width: 100%;
  margin-left: 8%;
  margin-bottom: 120px;
  a {
    text-decoration: none;
  }

  h1 {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    color: #293845;
  }
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

const Button = styled.button`
  width: 83px;
  height: 43px;
  background: #e8833a;
  border: none;
  border-radius: 3px;
  margin: 8%;
  margin-right: 3%;
  margin-left: 0;
`;
