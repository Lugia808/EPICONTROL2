import React from "react";
import "./Rodape.css";
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
const Rodape = () => {
  return (
    <>
    
      <div id="Rodape" className="containerRodape">
        <div className="containerItensRodape">
          <div className="RodapeTitle">
            <a href="#" className="h1Rodape"><img src="src/assets/7.png" width="270" alt="" /></a>
            <p>O futuro da segurança industrial</p>
          </div>
          <div className="margin">
            <p>Nossos Clientes</p>
            <div className="containerImg">
              <img width="30px" src="src/assets/image 8.png" alt="" />
              <img width="30px" src="src/assets/image 9.png" alt="" />
            </div>
          </div>
          <div className="margin">
            <p>Redes Sociais</p>
            <div className="containerIcons">
              <a href="#"> <FaInstagram size={20} color="#bc2a8d" /></a>
              <a href="#"><FaFacebook size={20} color="#3b5998" /></a>
              <a href="#"><FaLinkedin size={20} color="#0077b5" /></a>
              <a href="#"><FaTwitter size={20} color="#1da1f2" /></a>
            </div>
          </div>
          <div className="marginCont">
            <p>Contatos</p>
            <div className="containerCont">
              <a href="#"><MdEmail size={15} color="#e74c3c" /> epiControl.sst@gmail.com  </a>
              <a href="#"><FaPhone size={15} color="#007bff" /> 55+ 81 98302-5697 </a>
              <a href="#"><FaWhatsapp size={15} color="#25d366"/> 55+ 81 98302-5697 </a>
            </div>
          </div>
        </div>
        <div>
          <div className="final">
            <p>©Copyright 2023 EpiControl Brasil/Pe</p>
            <a href="#">Termos e Condições</a>
            <a href="#">Política de Privacidade</a>
            </div>
        </div>
      </div>
    </>
  );
};

export default Rodape;
