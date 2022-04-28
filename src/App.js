import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HistoriaPage from "./pages/historiaPage";
import ProdutosPage from "./pages/produtosPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HistoriaPage />} />
          <Route path="/produtos" element={<ProdutosPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
