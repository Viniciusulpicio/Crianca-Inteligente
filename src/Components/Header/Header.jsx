import React from "react";
import Logo from "../../img/logo.png";
import "../../Style.css";

const Header = () => {
  return (
    <div className="header">
      <img src={Logo} alt="logo" />

      <div className="dropdown">
        <button class="dropBotao">Mais sobre nós</button>
        <div className="conteudoDropdown">
          <a href="">Quem somos</a>
          <a href="">O que é este projeto</a>
        </div>
      </div>

      <div className="dropdown">
        <button class="dropBotao">Explore</button>
        <div className="conteudoDropdown">
          <a href="">Módulos</a>
          <a href="">Blog</a>
        </div>
      </div>

      <div className="dropdown">
        <button class="dropBotao">Atendimento</button>
        <div className="conteudoDropdown">
          <a href="">Nosso contato</a>
        </div>
      </div>


      <a href="" id="tituloHeader">Escolas sabidas</a>

      <div className="botoesHeader">
        <button className="botaoHeaderUsuario" id="botaoCadastro"><a href="">ASSINE JÁ</a></button>
        <button className="botaoHeaderUsuario" id="botaoLogin"><a href="">ENTRAR</a></button>
      </div>
    </div>
  );
};

export default Header;
