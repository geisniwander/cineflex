import CheckOut from "./components/CheckOut";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movies from "./components/Movies";
import NavBar from "./components/NavBar";
import Seats from "./components/Seats";
import Section from "./components/Section";

function App() {
  return (
    <BrowserRouter>
          <NavBar />
      <Routes>
        <Route path="/" element={<Movies/>}/>
        <Route path="/sessoes/:idFilme" element={<Section/>}/>
        <Route path="/assentos/:idSessao" element={<Seats/>}/>
        <Route path="/checkout" element={<CheckOut/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
