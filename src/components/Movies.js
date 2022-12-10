import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Movies({ setSelectedMovie, setImageMovie }) {
  const [movies, setMovies] = useState(undefined);

  useEffect(() => {
    const promise = axios.get(
      "https://mock-api.driven.com.br/api/v8/cineflex/movies"
    );

    promise.then((res) => {
      setMovies(res.data);
    });
    promise.catch(() => alert("Um erro inesperado aconteceu!"));
  }, []);

  if (movies === undefined) {
    return <h1>Carregando...</h1>;
  }

  return (
    <Container>
      <Title>Selecione o filme</Title>
      <ContainerMovie>
        {movies.map((movie) => (
          <Link
            key={movie.id}
            onClick={() => {
              setSelectedMovie(movie.title);
              setImageMovie(movie.posterURL);
            }}
            to={`/sessoes/${movie.id}`}
          >
            <li data-test="movie">
              <img alt={movie.title} src={movie.posterURL} />
            </li>
          </Link>
        ))}
      </ContainerMovie>
    </Container>
  );
}

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

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContainerMovie = styled.ul`
  width: 85%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  li {
    width: 129px;
    height: 193px;
    margin-bottom: 40px;
    overflow: hidden;
  }
  img {
    width: 100%;
  }
`;
