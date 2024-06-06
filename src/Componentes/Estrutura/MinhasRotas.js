import { BrowserRouter, Routes, Route } from "react-router-dom";


//Páginas
import Home from "./Home.js";
import DataAtual from "./Atividades/ATV1.js";
import Letreiro from "./Atividades/ATV2.js";
import Counter from "./Atividades/ATV3.js";
import Valores from "./Atividades/ATV4.js";



export function MinhasRotas() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ATV1" element={<DataAtual/>} />
          <Route path="/ATV2" element={<Letreiro/>} />
          <Route path="/ATV3" element={<Counter />} />
          <Route path="/ATV4" element={<Valores/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}