  import React from "react";
  import "../../Style.css";
  import { Swiper, SwiperSlide } from 'swiper/react';

  const ConteudoUniverso = () => {

    const data = [
      {id: "1", image: "../../img/44a0e3f674d2d9f928ed00d18d5e8666.png"}, 
      {id: "2", image: "../../img/35f6e088ec0e7b8099f2075e2cd1a22b-1.png"}
    ]
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
            <div className="carrosselItens">
              <Swiper
              slidesPerView={9}
              pagination={{clickable: true}}
              navigation
              >
                {data.map((item) => (
                   <SwiperSlide key={item.id}>
                    <img
                    src={item.image}
                    alt="Slider"
                    className="slideItem"
                    />
                   </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </>
    );
  };

  export default ConteudoUniverso;