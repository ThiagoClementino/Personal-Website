import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// 1. Importe o seu Provider (ajuste o caminho conforme seu projeto)
import { ThemeProvider } from "./context/ThemeContext";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Gestor from "./components/Gestor";

function App() {
  return (
    // 2. O Provider deve ser o "pai" de todos que usam o contexto
    <ThemeProvider>
      <Router>
        <Navbar /> {/* Agora o Navbar está DENTRO do Provider */}
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projeto/gestor" element={<Gestor />} />
          </Routes>
        </main>
      </Router>
    </ThemeProvider>
  );
}

export default App;
