import React, { useState, useEffect } from "react";
import { Github, ExternalLink, Code } from "lucide-react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const simulateFetch = async () => {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const mockProjects = [
        {
          id: 1,
          name: "Gestão de Membros",
          description:
            "Saas para gestão de participantes de igrejas e controle financeiro.",
          homepage: "https://gerenciamento-de-membros.vercel.app/",
          html_url:
            "https://github.com/ThiagoClementino/Gerenciamento-de-membros.git",
          topics: ["Reactjs", "JavaScript", "NodeJs", "Tailwind CSS"],
        },
        {
          id: 2,
          name: "API - Gestão de usuários",
          description: "ApiRest para gestão de acessos e criação de usuários",
          homepage: "https://usuarios-saas-g-membros.vercel.app/",
          html_url:
            "https://github.com/ThiagoClementino/usuarios-saas-gMembros.git",
          topics: ["nodejs", "mongodb", "Express.js", "JWT", "Mongoose"],
        },
        {
          id: 3,
          name: "Formulário Externo :: Gestão de Membros.",
          description:
            "Formulário socioeconomico para captar informações de possíveis membros em comunidades religiosas",
          homepage:
            "https://formulario-externo-gereciamento-de-membros.vercel.app/",
          html_url: "https://github.com/demo/finance",
          topics: ["Reactjs", "JavaScript", "Tailwind CSS"],
        },
        {
          id: 4,
          name: "Api Gestão de Membros e Financeiro",
          description:
            "Criação, atualização e exclusão de cadastros de possíveis membros e lançamentos financeiros.",
          homepage: "https://api-gestao-igreja-jcod.vercel.app/",
          html_url: "https://github.com/ThiagoClementino/API_GESTAO_IGREJA.git",
          topics: ["nodejs", "mongodb", "Express.js", "Mongoose"],
        },
      ];

      setProjects(mockProjects);
      setLoading(false);
    };

    simulateFetch();
  }, []);

  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <SectionTitle
          title="Projetos Recentes"
          subtitle="Integração via API simulada para exibir repositórios e deploys."
        />

        {loading ? (
          <div className="grid-projects">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="card skeleton-card">
                <div className="skeleton-line lg"></div>
                <div className="skeleton-line sm"></div>
                <div className="skeleton-line md"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid-projects">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -5 }}
                className="card project-card"
              >
                <div className="project-header">
                  <div className="icon-box">
                    <Code size={24} />
                  </div>
                  <div className="project-links">
                    <a
                      href={project.html_url}
                      target="_blank"
                      rel="noreferrer"
                      title="Código"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.homepage}
                      target="_blank"
                      rel="noreferrer"
                      title="Deploy"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                <h3 className="project-title">{project.name}</h3>
                <p className="project-desc">{project.description}</p>

                <div className="project-topics">
                  {project.topics.map((topic) => (
                    <span key={topic} className="topic-tag">
                      #{topic}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
