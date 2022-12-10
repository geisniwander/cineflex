import CheckOut from "./components/CheckOut";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movies from "./components/Movies";
import NavBar from "./components/NavBar";
import Seats from "./components/Seats";
import Section from "./components/Section";
import { useState } from "react";

function App() {
  const [name, setName] = useState(undefined);
  const [cpf, setCpf] = useState(undefined);
  const [selected, setSelected] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(undefined);
  const [imageMovie, setImageMovie] = useState(undefined);
  const [selectedSession, setSelectedSession] = useState(undefined);
  const [selectedSuccess, setSelectedSuccess] = useState(undefined);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <Movies
              setSelectedMovie={setSelectedMovie}
              setImageMovie={setImageMovie}
            />
          }
        />
        <Route
          path="/sessoes/:idFilme"
          element={
            <Section
              setSelectedSession={setSelectedSession}
              setSelectedSuccess={setSelectedSuccess}
            />
          }
        />
        <Route
          path="/assentos/:idSessao"
          element={
            <Seats
              name={name}
              setName={setName}
              cpf={cpf}
              setCpf={setCpf}
              selected={selected}
              setSelected={setSelected}
              imageMovie={imageMovie}
              selectedMovie={selectedMovie}
              selectedSession={selectedSession}
            />
          }
        />
        <Route
          path="/sucesso"
          element={
            <CheckOut
              name={name}
              cpf={cpf}
              selected={selected}
              selectedMovie={selectedMovie}
              selectedSuccess={selectedSuccess}
              setCpf={setCpf}
              setName={setName}
              setSelected={setSelected}
              setSelectedSession={setSelectedSession}
              setSelectedSuccess={setSelectedSuccess}
              setSelectedMovie={setSelectedMovie}
              setImageMovie={setImageMovie}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
