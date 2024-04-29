  import React from "react";
  import "../../Style.css";



  const ConteudoUniverso = () => {
    return (
      <>
        <div className="conteudoUniversoFundoAzul">
          <div className="tituloConteudoUniverso">
            <h1>
              <span className="laranja"> FIQUE POR DENTRO DO NOSSO</span> UNIVERSO
            </h1>
          </div>
          <div className="fundoConteudoUniversoCarrosel">
            <h2>Vídeos, músicas, brincadeiras E MUITO CONTEÚDO INTERATIVO</h2>
            <div className="carrosselItens"></div>
          </div>
        </div>
      </>
    );
  };

  export default ConteudoUniverso;