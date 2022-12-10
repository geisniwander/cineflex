import CheckOut from "./components/CheckOut";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movies from "./components/Movies";
import NavBar from "./components/NavBar";
import Seats from "./components/Seats";
import Section from "./components/Section";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [selected, setSelected] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(undefined);
  const [selectedSession, setSelectedSession] = useState(undefined);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Movies setSelectedMovie={setSelectedMovie} />} />
        <Route path="/sessoes/:idFilme" element={<Section setSelectedSession={setSelectedSession} />} />
        <Route
          path="/assentos/:idSessao"
          element={
            <Seats name={name} setName={setName} cpf={cpf} setCpf={setCpf} selected={selected} setSelected={setSelected}/>
          }
        />
        <Route path="/checkout" element={<CheckOut name={name} cpf={cpf} selected={selected} selectedMovie={selectedMovie} selectedSession={selectedSession} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
