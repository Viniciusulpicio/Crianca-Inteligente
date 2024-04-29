import React from 'react'
import Globo from "../../img/planeta2.png"
import Lua from "../../img/lua.png"

const Vantagens = () => {
  return (
    <>
    <div className="planeta-tela">
      <img src={Globo} alt="Terra" className='globo'/>
    </div>

    <div className="container-vantagens">
      <div className="globo"></div>
    </div>  

    <div className="lua-tela">
      <img src={Lua} alt="Lua" className='lua'/>
    </div>
    </>
  )
}

export default Vantagens