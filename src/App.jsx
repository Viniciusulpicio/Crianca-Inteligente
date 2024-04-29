import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header.jsx";
import Home from "./Components/Home/Home.jsx";
import ConteudoUniverso from "./Components/ConteudoUniverso/ConteudoUniverso.jsx";
import Vantagens from "./Components/Vantagens/Vantagens.jsx";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={Header}/>
        <Route Component={Home} path="/Crianca-Inteligente" exact/>
        <Route Component={Vantagens}/>
        <Route Component={ConteudoUniverso}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
