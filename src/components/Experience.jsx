import React, { useState } from "react";
import { Code, Download, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "./SectionTitle";

const experienceData = [
  {
    id: 1,
    role: "Analista de Suporte",
    company: "Workalove Edtech",
    period: "Dez 2024 - Atual",
    summary:
      "Atuação consultiva no suporte técnico e Customer Success, com foco em análise de dados e otimização de fluxos.",
    details: {
      deliverables: [
        "Gestão de Suporte e Customer Success: Atuação consultiva no suporte técnico a instituições e empresas (B2B/B2C), garantindo o cumprimento de SLAs e a otimização contínua dos fluxos de trabalho.",
        "Análise de Dados e Inteligência: Monitoramento estratégico de KPIs e interpretação de cenários complexos, identificando padrões de uso para propor soluções proativas.",
        "Relatórios Gerenciais: Desenvolvimento de dashboards executivos para mapeamento de pain points dos usuários, implementando ações preventivas que impactam na retenção.",
      ],
    },
  },
  {
    id: 2,
    role: "Desenvolvedor Web Freelancer",
    company: "Autônomo",
    period: "Set 2023 - Atual",
    summary:
      "Desenvolvimento e arquitetura de uma plataforma web completa (ERP) para gestão de membros e controle financeiro.",
    details: {
      stack:
        "MERN Stack (MongoDB, Express, React.js, Node.js), API RESTful, Git/GitHub, Figma.",
      deliverables: [
        "Front-end: Criação de interface responsiva e intuitiva (SPA) com React.js, focada na Experiência do Usuário (UX/UI).",
        "Back-end: Desenvolvimento de API RESTful escalável com Node.js e Express, com autenticação segura.",
        "Banco de Dados: Modelagem de dados NoSQL com MongoDB para cadastro socioeconômico e financeiro.",
        "Features: Dashboards de performance, controle de fluxo de caixa e gestão de perfis.",
      ],
      results: [
        "Transformação digital dos processos internos, eliminando controles manuais.",
        "Aumento da transparência financeira e assertividade na tomada de decisões.",
        "Melhoria no engajamento da comunidade através de acompanhamento personalizado.",
      ],
    },
  },
  {
    id: 3,
    role: "Analista de Implantação e Integração",
    company: "CRM Educacional",
    period: "Jan 2021 - Dez 2023",
    summary:
      "Implantação de sistemas com foco em Microsoft Power Platform, automação Low-Code e integração via APIs.",
    details: {
      deliverables: [
        "Desenvolvimento Low-Code: Criação de fluxos complexos e regras de negócio com Power Automate, otimizando funis de captação.",
        "Integração de Sistemas (APIs): Integração técnica entre software proprietário e sistemas externos via APIs REST.",
        "Front-end e Customização: Desenvolvimento de interfaces personalizadas via Power Apps, adaptando às diretrizes visuais do cliente.",
        "Análise de Requisitos: Mapeamento de necessidades para configurações de banco de dados e tradução em requisitos técnicos.",
        "Dados e BI: Criação de dashboards e relatórios gerenciais para monitoramento de KPIs.",
      ],
    },
  },
  {
    id: 4,
    role: "Analista de Marketing Digital & Web Design",
    company: "Faculdade Vale do Salgado",
    period: "Abr 2018 - Jan 2020",
    summary:
      "Desenvolvimento de interfaces web, gestão de CMS e estratégias de Inbound Marketing.",
    details: {
      deliverables: [
        "Desenvolvimento de Interfaces Web: Criação de Landing Pages e Hotsites responsivos focados em UX/UI e conversão (CRO).",
        "Gestão de CMS: Estruturação e manutenção de blog corporativo para estratégias de tráfego orgânico.",
        "Automação e CRM: Operação estratégica da plataforma CRM Educacional e gestão do funil de vendas.",
        "Performance Digital: Planejamento de campanhas de tráfego pago/orgânico e gestão de mídias sociais.",
      ],
    },
  },
  {
    id: 5,
    role: "Instrutor de Tecnologia e Design",
    company: "LC INFORMÁTICA",
    period: "Nov 2016 - Abr 2018",
    summary:
      "Ministração de treinamentos em tecnologia, produtividade e software de design gráfico.",
    details: {
      deliverables: [
        "Capacitação Técnica: Treinamentos em alfabetização digital e ferramentas de produtividade (Pacote Office/Windows).",
        "Ensino de Software de Design: Formação em Adobe Creative Suite (Photoshop, Illustrator, InDesign) e Corel Draw.",
        "Metodologia: Desenvolvimento de planos de aula e exercícios práticos para fixação de conteúdo.",
      ],
    },
  },
];

const educationData = [
  {
    id: 1,
    degree: "Análise e Desenvolvimento de Sistemas",
    school: "Faculdade UniBF",
    year: "2025",
  },
  {
    id: 2,
    degree: "PowerApps: Formação Básica",
    school: "Linkedin",
    year: "Concluído",
  },
  {
    id: 3,
    degree: "HTML e CSS",
    school: "TreinaWeb",
    year: "Concluído",
  },
  {
    id: 4,
    degree: "Design Thinking",
    school: "TreinaWeb",
    year: "Concluído",
  },
];

// Sub-componente para gerenciar o estado de cada item individualmente
const ExperienceItem = ({ exp, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className="timeline-item"
    >
      <span className="timeline-dot" />
      <span className="timeline-date">{exp.period}</span>
      <h4 className="timeline-role">{exp.role}</h4>
      <p className="timeline-company">{exp.company}</p>

      <p className="timeline-desc" style={{ marginBottom: "0.5rem" }}>
        {exp.summary}
      </p>

      {exp.details && (
        <div style={{ marginTop: "0.5rem" }}>
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="btn-outline"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.5rem 1rem",
              fontSize: "0.85rem",
              borderRadius: "2rem",
              cursor: "pointer",
              border: "1px solid var(--color-secondary)",
              background: "transparent",
              color: "var(--text-body)",
              fontWeight: 600,
              marginTop: "0.5rem",
            }}
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(123, 123, 123, 0.1)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? "Ocultar detalhes" : "Ver detalhes"}
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown size={16} />
            </motion.div>
          </motion.button>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                style={{ overflow: "hidden" }}
              >
                <div
                  style={{
                    marginTop: "1rem",
                    paddingLeft: "0.5rem",
                    borderLeft: "2px solid rgba(123,123,123,0.1)",
                    paddingBottom: "0.5rem",
                  }}
                >
                  {/* Stack */}
                  {exp.details.stack && (
                    <p
                      className="timeline-desc"
                      style={{ fontSize: "0.9rem", marginBottom: "1rem" }}
                    >
                      <strong>Stack:</strong> {exp.details.stack}
                    </p>
                  )}

                  {/* Entregas */}
                  {exp.details.deliverables && (
                    <>
                      <h5
                        className="timeline-role"
                        style={{ fontSize: "0.95rem", marginBottom: "0.5rem" }}
                      >
                        Principais Entregas:
                      </h5>
                      <ul
                        style={{
                          listStyleType: "disc",
                          paddingLeft: "1.2rem",
                          marginBottom: "1rem",
                        }}
                      >
                        {exp.details.deliverables.map((item, i) => (
                          <li
                            key={i}
                            className="timeline-desc"
                            style={{
                              fontSize: "0.9rem",
                              marginBottom: "0.25rem",
                            }}
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}

                  {/* Resultados */}
                  {exp.details.results && (
                    <>
                      <h5
                        className="timeline-role"
                        style={{ fontSize: "0.95rem", marginBottom: "0.5rem" }}
                      >
                        Resultados:
                      </h5>
                      <ul
                        style={{ listStyleType: "disc", paddingLeft: "1.2rem" }}
                      >
                        {exp.details.results.map((item, i) => (
                          <li
                            key={i}
                            className="timeline-desc"
                            style={{
                              fontSize: "0.9rem",
                              marginBottom: "0.25rem",
                            }}
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-alt">
      <div className="container">
        <SectionTitle
          title="Jornada Profissional"
          subtitle="Um resumo da minha trajetória criando soluções de software."
        />

        <div className="grid-2-col">
          {/* Experiência */}
          <div className="experience-column">
            <h3 className="column-title">
              <Code className="accent-icon" /> Experiência
            </h3>
            <div className="timeline">
              {experienceData.map((exp, index) => (
                <ExperienceItem key={exp.id} exp={exp} index={index} />
              ))}
            </div>
          </div>

          {/* Educação */}
          <div className="education-column">
            <h3 className="column-title">
              <Download className="accent-icon" /> Formação Acadêmica
            </h3>
            <div className="card-stack">
              {educationData.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="card education-card"
                >
                  <h4 className="card-title">{edu.degree}</h4>
                  <p className="accent-text">{edu.school}</p>
                  <p className="card-subtitle">{edu.year}</p>
                </motion.div>
              ))}

              <div className="card skills-card">
                <h4 className="card-title">Skills Técnicas</h4>
                <div className="skills-container">
                  {[
                    "React.js",
                    "Node.js",
                    "TypeScript",
                    "JavaScript",
                    "MongoDB",
                    "Power Platform",
                    "UI/UX Design",
                    "Figma",
                    "Git/GitHub",
                  ].map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
