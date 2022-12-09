import CheckOut from "./components/CheckOut";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movies from "./components/Movies";
import NavBar from "./components/NavBar";
import Seats from "./components/Seats";
import Section from "./components/Section";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={Movies}></Route>
        <Route path="/sessoes/:idFilme" element={Seats}></Route>
        <Route path="/assentos/:idSessao" element={Section}></Route>
        <Route path="/checkout" element={CheckOut}></Route>
      </Routes>
      <NavBar />
      <Movies />
    </BrowserRouter>
  );
}

export default App;
