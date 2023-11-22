import { skills } from "../constants";
export const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Olá, meu nome é{" "}
        <span className="blue-gradient_text font-bold drop-shadow">Mateus</span>
        😜
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
    </section>
  );
};
