import React from 'react'
import AtividadesFisicas from "../../img/Atividade-Fisica.png"
import Animacoes from "../../img/animacoes.jpg"
import Programacao from "../../img/CODE-CRIANCAS.jpg"
import JogoMemoria from "../../img/Jogo-da-Memoria-3.png"

const Conteudo = () => {
  return (
    <div className="conteudoRico">
      <h1 className='tituloConteudo'>Conteúdo rico para seu filho !</h1>

      <div className="cardconteudo">
      <div className="card">
          <img src={AtividadesFisicas} alt="Atividades fisicas img" className='img_conteudo'/>
          <h2 className='h2conteudo'>ATIVIDADES FISICAS</h2>
      </div>

      <div className="card">
        <img src={Animacoes} alt="img_animações" className='img_conteudo'/>
        <h2 className='h2conteudo'>ANIMAÇÕES</h2>
      </div>

      <div className="card">
        <img src={Programacao} alt="img code crianças" className='img_conteudo'/>
        <h2 className='h2conteudo'>PROGRAMAÇÃO</h2>
      </div>

      <div className="card">
        <img src={JogoMemoria} alt="img jogo da memoria" className='img_conteudo'/>
        <h2 className='h2conteudo'>GAMES</h2>
      </div>
      </div>
    </div>
  )
}

export default Conteudo