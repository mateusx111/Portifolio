import { Link } from "react-router-dom";
import { projects } from "../constants";
import { arrow } from "../assets/icons";
import { CTA } from "../components/CTA";
export const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Meus{" "}
        <span className="blue-gradient_text font-bold drop-shadow">
          Projetos
        </span>
        😜
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Embarquei em vários projetos ao longo dos anos, mas estes são os que
          tenho mais em meu coração. Muitos deles são de código aberto,
          portanto, se você encontrar algo que desperte seu interesse, sinta-se
          à vontade para explorar a base de código e contribuir com suas ideias
          para melhorias adicionais. Sua colaboração é altamente valorizada!
        </p>
      </div>

      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={project.iconUrl}
                  alt="Project Url"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>

            <div className="mt-5 flex flex-col">
              <h4 className="subhead-text">{project.name}</h4>
              <p className="mt-2 text-slate-500">{project.description}</p>
              <div>
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600"
                >
                  Live Link
                </Link>
                <img
                  src={arrow}
                  alt="arrow"
                  className=" w-4 h-4 object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};
1;
