import React from 'react'
import Globo from "../../img/planeta2.png"
import Lua from "../../img/lua.png"

import  Vaca from "../../img/imagem-8.png"
import Mochila from "../../img/imagem-7.png"
import Lapis from "../../img/imagem-9.png"
import Estrela from "../../img/imagem-6.png"
import Coracao from "../../img/imagem-11.png"
import Pc from "../../img/imagem-10.png"

const Vantagens = () => {
  return (
    <>
    <div className="planeta-tela">
      <img src={Globo} alt="Terra" className='globo'/>
    </div>

    <div className="container-vantagens">
      <div className="tituloVantagens">
        <h1>Só <span className='laranja'>Crianças Inteligentes</span> <br /> equilibra de verdade o <br /> brincar e o aprender!</h1>
        <p className='subtituloVantagens'>Conteúdo que acelera o aprendizado de forma lúdica e divertida, <br /> respeitando o ritmo de cada criança</p>

        <div className="conteudoVantagens">
        <div className="primeira">
          <div className='div-flex'>
            <img src={Vaca} alt="vaca" />
            <p>Desenvolvido por especialistas em metodologia de ensino e musicalização</p>
          </div>

          <div className='div-flex'>
            <img src={Mochila} alt="mochila" />
            <p>Plataforma 100% segura e sem propagandas</p>
          </div>

          <div className='div-flex'>
            <img src={Lapis} alt="lapis" />
            <p>Baseado na BNCC (Base Nacional Comum Curricular) e no PNA (Plano Nacional de Alfabetização)</p>
          </div>

          </div>
          <div className="secundaria">
          <div className='div-flex'>
            <img src={Estrela} alt="estrela" />
            <p>Curadoria que garante a qualidade pedagógica de todo o conteúdo</p>
          </div>

          <div className='div-flex'>
            <img src={Coracao} alt="coracao" />
            <p>Acompanha seu filho desde o INFANTIL e até os primeiros anos do FUNDAMENTAL</p>
          </div>

          <div className='div-flex'>
            <img src={Pc} alt="Computador" />
            <p>Conteúdos novos toda semana</p>
          </div>
          </div>
        </div>
      </div>
    </div>  

    <div className="lua-tela">
      <img src={Lua} alt="Lua" className='lua'/>
    </div>
    </>
  )
}

export default Vantagens