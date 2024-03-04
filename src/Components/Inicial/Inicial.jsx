import React from "react";
import "./Inicial.css";

const Inicial = () => {
  return (
    <>
      <div className="container">
        <div className="containerImgInit">

          <div className="box1">
            <img className="imgLogo" src="src\assets\Logo8.png" alt="" />
            <p>Na Epi Control, nossa missão é fornecer soluções de segurança robustas e inovadoras especificamente projetadas para atender às demandas exigentes do setor industrial.</p>
          </div>
          <div className="box2">
            <img className="img2" src="src\assets\Construction-hat-amico.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Inicial;
