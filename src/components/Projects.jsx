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
          name: "e-commerce-dashboard",
          description:
            "Painel administrativo completo com gráficos em tempo real e gestão de estoque.",
          homepage:
            "[https://demo-ecommerce.vercel.app](https://demo-ecommerce.vercel.app)",
          html_url:
            "[https://github.com/demo/ecommerce](https://github.com/demo/ecommerce)",
          topics: ["react", "nextjs", "analytics"],
        },
        {
          id: 2,
          name: "social-media-api",
          description:
            "Backend robusto para rede social com WebSockets e banco não relacional.",
          homepage:
            "[https://api-docs.vercel.app](https://api-docs.vercel.app)",
          html_url:
            "[https://github.com/demo/api](https://github.com/demo/api)",
          topics: ["nodejs", "mongodb", "socket.io"],
        },
        {
          id: 3,
          name: "finance-tracker-app",
          description:
            "PWA para controle financeiro pessoal com modo offline e sincronização.",
          homepage: "[https://finance.vercel.app](https://finance.vercel.app)",
          html_url:
            "[https://github.com/demo/finance](https://github.com/demo/finance)",
          topics: ["pwa", "react", "firebase"],
        },
        {
          id: 4,
          name: "ai-image-generator",
          description:
            "Interface para geração de imagens usando integração com OpenAI DALL-E.",
          homepage: "[https://ai-gen.vercel.app](https://ai-gen.vercel.app)",
          html_url: "[https://github.com/demo/ai](https://github.com/demo/ai)",
          topics: ["ai", "integration", "css"],
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
