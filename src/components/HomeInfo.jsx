import React from "react";
import { Link } from "react-router-dom";
import arrow from "../assets/icons/arrow.svg";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-bold sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Olá! eu sou <span className="font-bold">Mateus</span> 👋 <br />
      Sou desenvolvedor Frontend
    </h1>
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
