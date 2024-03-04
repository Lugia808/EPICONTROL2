import React from "react";
import { useState, useEffect } from "react";
import "./Solucao.css";
const Sobre = () => {
  return (
    <>
      <div className="cont">
        <div className="ContainerSobre1">
          <h1 id="Sobre">Solução</h1>
          <div className="container12">
            <div className="box11">
              <div className="ssbbx">
                <div className="subbox1">
                  <p>
                  Buscamos desenvolver soluções para lidar com o problema da falta de controle efetivo por parte das empresas sobre o uso e gestão de Equipamentos de Proteção Individual e a ausência de uma cultura de Segurança no ambiente laboral.                  </p>
                </div>
                <div className="subbox1">
                  <p>
                    12 profissionais de SST entrevistados por nós e destacamos a falta de conscientização dos funcionários e a dificuldade na implementação de novas práticas como os maiores desafios enfrentados. Além disso, uma pesquisa da IndexMed destacou que mais de 22% das empresas no Brasil não possuem práticas de Saúde e Segurança no trabalho.
                  </p>
                </div>
              </div>
              <div className="ssbbx">
                <div className="subbox2">
                  <p>
                  Para resolver esses problemas, buscamos implementar um sistema de reconhecimento e validação do uso correto dos EPIs pelos funcionários no ambiente de Trabalho, onde o gestor poderá ter o fácil controle e gestão das informações através do acesso da empresa. Além disso, um profissional de segurança estará envolvido para buscar fomentar uma cultura de segurança na empresa através de diversas ações.
                    </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Sobre;
