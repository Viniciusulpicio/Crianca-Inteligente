import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header.jsx";
import Home from "./Components/Home/Home.jsx";
import ConteudoUniverso from "./Components/ConteudoUniverso/ConteudoUniverso.jsx";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={Header}/>
        <Route Component={Home} path="/" exact />
        <Route Component={ConteudoUniverso}/>
        
      </Routes>
    </BrowserRouter>

  );
}

export default App;
