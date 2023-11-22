import React from "react";
import { Link } from "react-router-dom";
import arrow from "../assets/icons/arrow.svg";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-bold text-xl sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <InfoBox
      text="Olá! Eu sou o Mateus. Sou desenvolvedor front-end 💻"
      link="/about"
      btnText="Sobre mim"
    />
  ),
  2: (
    <InfoBox
      text="Estou procurando por um emprego. Aqui esta minha "
      link="/about"
      btnText="Saiba mais"
    />
  ),
  3: (
    <InfoBox
      text="Trabalhei em vários projetos ao longo dos meus estudos. Venha conferir!"
      link="/projects"
      btnText="Visite meu portifólio"
    />
  ),
  4: (
    <InfoBox
      text="Está precisando um projeto ou procurando por dum Dev?estou a apenas algumas teclas de distância"
      link="/contact"
      btnText="Vamos conversar"
    />
  ),
};

export const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};
