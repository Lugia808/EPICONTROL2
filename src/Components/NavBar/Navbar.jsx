import React from "react";
import "./Navbar.css"; // Substitua 'Navbar.css' pelo nome do seu arquivo CSS

const Navbar = () => {
  return (
    <>
      <div>
        <nav className="my-navbar" id="my-navbar">
          <ul className="my-navbar-list">
            <a className="LogoNav" href="">
              Logo
            </a>
            <li>
              <a href="#" className="my-navbar-link">
                Inicial
              </a>
            </li>
            <li>
              <a href="#sobre" className="my-navbar-link">
                Sobre
              </a>
            </li>
            <li>
              <a href="#servicos" className="my-navbar-link">
                Serviços
              </a>
            </li>
            <li>
              <a href="#contato" className="my-navbar-link">
                Contato
              </a>
            </li>
            <div className="boxConect">
              <a className="conectNav" href="">
                Conecte-se
              </a>
            </div>
          </ul>
        </nav>
        <hr className="hrNav" />
      </div>
    </>
  );
};

export default Navbar;
