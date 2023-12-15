import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { skills, experiences } from "../constants";
import { CTA } from "../components/CTA";
export const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Olá, meu nome é{" "}
        <span className="blue-gradient_text font-bold drop-shadow">Mateus</span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Estou na jornada no desenvolvimento web Frontend, sempre fui
          apaixonado por Tecnologia e pelas inovações que elas possibilitam,
          poder trabalhar com tecnologia foi a melhor escolha da minha vida!
          Atualmente estudando e absorvendo Clean Code e melhores práticas com
          os Frameworks ReactJS e Nextjs. Também estou estudando testes para
          aplicar na criação de projetos para aprimorar meus conhecimentos e
          também criando soluções que facilite a nossa vida. Tenho estudado para
          aprimorar minhas habilidades com as melhores tecnologias web do
          mercado para crescer cada vez mais no meu objetivo como desenvolvedor
          frontend!
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">Minhas Habilidades</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20">
              <div className="btn-back rounded-xl" />
              <div className="btn-front flex justify-center items-center rounded-xl">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3>Experiencia de Trabalho</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            Trabalhei nos meus projetos pessoais, aumentando minha habilidades.
            Aqui está uma visão dos meus projetos
          </p>
        </div>

        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experiences) => (
              <VerticalTimelineElement
                key={experiences.company_name}
                date={experiences.date}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experiences.icon}
                      alt={experiences.company_name}
                      className="w-[60%] h-[60%] object-contain "
                    />
                  </div>
                }
                iconStyle={{ background: experiences.iconBg }}
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experiences.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className="text-blue-950 text-xl font-poppins font-semibold">
                    {experiences.title}
                  </h3>
                  <p
                    className="text-slate-500 font-medium font-base"
                    style={{ margin: 0 }}
                  >
                    {experiences.company_name}
                  </p>
                </div>
                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experiences.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className="text-slate-500 font-normal pl-1 text-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className="border-slate-200" />
      <CTA />
    </section>
  );
};
