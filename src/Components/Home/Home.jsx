import React from 'react'
import Header from '../Header/Header'
import ConteudoUniverso from '../ConteudoUniverso/ConteudoUniverso'
import Conteudo from '../Conteudo/Conteudo'

import videoHome from "../../img/videoHome.png"
import planeta from "../../img/planeta.png"
import planeta2 from "../../img/planeta2.png"
import estrelaRosto from "../../img/estrelaRosto.png"
import Vantagens from '../Vantagens/Vantagens'

const Home = () => {
  return (
    <div className="pagina">
    <Header/>
    <div className='conteudo'>


      <div className="cardHome">
        <div className="titulo">
        <h1>Toda <span className="laranja">criança é inteligente!</span></h1>
        <p>Cada uma em seu ritmo e forma de ver o mundo.</p>
      </div>
      
      <div className="cardDepoimentos">
        <div>
        <h1 className='tituloDepoimentos'>"Minha bebê vai fazer dois anos ainda e <span className="laranja">já sabe as vogais que aprendeu com a musiquinha"</span></h1>
        <p className='nomeDepoimento'>Bianca Paz - Mamãe Inteligente</p>
        <div className='buttonDepoimento'><a href="" className='textDepoimentos'>Veja mais depoimentos </a><span className='homeSpan'></span> </div>
        </div>

        <img src={videoHome} alt="video" />
        </div>
      </div>

      <div className="homeImagens">
      <img className='estrela' src={estrelaRosto} alt="estrela" />
        <img className='planeta' src={planeta2} alt="planeta" />
        <img className='saturno' src={planeta} alt="saturno" />
      </div>
    </div>


    <ConteudoUniverso/>
    <Conteudo/>
    <Vantagens/>
    </div>
  )
}

export default Home

