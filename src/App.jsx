import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header.jsx";
import Home from "./Components/Home/Home.jsx";
import ConteudoUniverso from "./Components/ConteudoUniverso/ConteudoUniverso.jsx";
import Vantagens from "./Components/Vantagens/Vantagens.jsx";
import Conteudo from "./Components/Conteudo/Conteudo.jsx";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={Header}/>
<<<<<<< HEAD
        <Route Component={Home} path="/Crianca-Inteligente" exact/>
=======
        <Route Component={Home} path="/Crianca-Inteligente" exact />
        <Route Component={ConteudoUniverso}/>
        <Route Component={Conteudo}/>
>>>>>>> f9157f89cf5870665d117940b6f091a60974577e
        <Route Component={Vantagens}/>
        <Route Component={ConteudoUniverso}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
