import React from "react";
import { useState, useEffect } from "react";
import "./Recursos.css";
const Sobre = () => {
  return (
    <>
      <div className="cont">
        <div className="ContainerSobre">
          <h1 id="Sobre">Principais Recursos</h1>
          <div className="container1">
            <div className="col">
              <div className="bolinha">
                <p><strong>1</strong></p>
              </div>
              <div className="cardIn">
                <p>Tenha o uso de equipamentos de proteção validado e monitorado em tempo real por uma IA, assegurando a conformidade com as normas de segurança</p>
              </div>
            </div>
            <div className="col">
              <div className="bolinha">
                <p><strong>2</strong></p>
              </div>
              <div className="cardIn">
                <p>Registre e monitore o controle e uso correto de EPIs de forma intuitiva e eficiente</p>
              </div>
            </div>
            <div className="col">
              <div className="bolinha">
                <p><strong>3</strong></p>
              </div>
              <div className="cardIn">
                <p>Tenha um suporte personalizado de um profissional de Segurança do Trabalho para auxiliar na implementação de uma cultura de segurança na sua empresa</p>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  );
};

export default Sobre;
