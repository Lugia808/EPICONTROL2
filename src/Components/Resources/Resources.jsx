import React from "react";
import { useState, useEffect } from "react";
import "./Resources.css";
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
            </div>
            <div className="col">
              <div className="bolinha">
                <p><strong>2</strong></p>
              </div>
            </div>
            <div className="col">
              <div className="bolinha">
                <p><strong>3</strong></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sobre;
