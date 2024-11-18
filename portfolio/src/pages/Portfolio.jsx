import React from "react";
import "./Portfolio.css"; 
import minhaFoto from "../img/imagem1.jpg"; 


function Portfolio() {
  return (
    <div className="portfolio-container">
      <div className="portfolio-content">
        <div className="portfolio-photo">
        <img src={minhaFoto} alt="Minha Foto" className="portfolio-img" />
        </div>
        <h1 className="portfolio-name">Seu Nome Aqui</h1>
        <p className="portfolio-text">
          Olá, sou [Seu Nome], um desenvolvedor apaixonado por tecnologia e aprendizado contínuo. 
          Tenho experiência em várias linguagens de programação e adoro resolver problemas de forma criativa.
        </p>
      </div>
    </div>
  );
}

export default Portfolio;
