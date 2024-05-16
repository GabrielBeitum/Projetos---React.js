import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./home";
import Counter from "./Atividades/ATV3";

export default function MinhasRotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="./ATV3" element={<Counter />} />
        {/* Add more routes here */}
      </Routes>
    </BrowserRouter>
  );
}