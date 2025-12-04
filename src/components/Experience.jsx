import React, { useState } from "react";
import { Code, Download, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "./SectionTitle";

const experienceData = [
  {
    id: 1,
    role: "Analista de suporte ",
    company: "Workalove Editech",
    period: "Dez de 2024 - até o momento",
    summary: "",
    details: {
      // stack:
      //   "MERN Stack (MongoDB, Express, React.js, Node.js), API RESTful, Git/GitHub, Figma.",
      deliverables: [
        "Gestão de Suporte e Customer Success: Atuação consultiva no suporte técnico a instituições e empresas (B2B/B2C), garantindo o cumprimento de SLAs e a otimização contínua dos fluxos de trabalho.",
        "Análise de Dados e Inteligência: Monitoramento estratégico de KPIs e interpretação de cenários complexos, identificando padrões de uso para propor soluções proativas que elevam a eficiência operacional.",
        "Relatórios Gerenciais e Melhoria Contínua: Desenvolvimento de dashboards executivos para mapeamento de pain points (dificuldades) dos usuários, implementando ações preventivas que impactam diretamente na retenção e na experiência do cliente.",
      ],
      results: [
        "Transformação digital dos processos internos, eliminando controles manuais.",
        "Aumento da transparência financeira e assertividade na tomada de decisões orçamentárias.",
        "Melhoria significativa no engajamento da comunidade através de um acompanhamento personalizado dos membros.",
      ],
    },
  },
  {
    id: 2,
    role: "Desenvolvedor Web Freelancer",
    company: "Autônomo",
    period: "2023 - Presente",
    summary:
      "Desenvolvimento e arquitetura de uma plataforma web completa (ERP) para gestão de membros e controle financeiro de uma organização sem fins lucrativos.",
    details: {
      stack:
        "MERN Stack (MongoDB, Express, React.js, Node.js), API RESTful, Git/GitHub, Figma.",
      deliverables: [
        "Front-end: Criação de interface responsiva e intuitiva (SPA) com React.js, focada na Experiência do Usuário (UX/UI) e visualização de dados.",
        "Back-end: Desenvolvimento de API RESTful escalável com Node.js e Express, implementando regras de negócio complexas e autenticação segura de usuários.",
        "Banco de Dados: Modelagem de dados NoSQL com MongoDB, garantindo flexibilidade e performance para o cadastro socioeconômico e financeiro.",
        "Features: Implementação de Dashboards de performance, controle de fluxo de caixa (receitas/despesas) e gestão de perfis.",
      ],
      results: [
        "Transformação digital dos processos internos, eliminando controles manuais.",
        "Aumento da transparência financeira e assertividade na tomada de decisões orçamentárias.",
        "Melhoria significativa no engajamento da comunidade através de um acompanhamento personalizado dos membros.",
      ],
    },
  },
  {
    id: 2,
    role: "Analista de implantação Júnior",
    company: "CRM Educacional",
    period: "2021 - 2023",
    summary:
      "Analista de Implantação e Integração de Sistemas Foco: Microsoft Power Platform.",
    details: {
      // stack:
      //   "MERN Stack (MongoDB, Express, React.js, Node.js), API RESTful, Git/GitHub, Figma.",
      deliverables: [
        "Desenvolvimento Low-Code e Automação: Criação de fluxos de trabalho complexos e regras de negócio automatizadas utilizando Power Automate, otimizando a comunicação e a mudança de status nos funis de captação.",
        "Integração de Sistemas (APIs): Atuação técnica na integração entre o software proprietário e sistemas externos via consumo de APIs REST, garantindo a interoperabilidade dos dados.",
        "Front-end e Customização: Desenvolvimento de formulários e interfaces personalizadas via Power Apps, adaptando a solução às diretrizes visuais e processuais de cada cliente.",
        "Análise de Requisitos Técnicos: Mapeamento detalhado das necessidades de instituições de ensino para tradução em requisitos de sistema e configurações de banco de dados (entidades).",
        "Análise de Requisitos Técnicos: Mapeamento detalhado das necessidades de instituições de ensino para tradução em requisitos de sistema e configurações de banco de dados (entidades).",
      ],
      results: [
        "Transformação digital dos processos internos, eliminando controles manuais.",
        "Aumento da transparência financeira e assertividade na tomada de decisões orçamentárias.",
        "Melhoria significativa no engajamento da comunidade através de um acompanhamento personalizado dos membros.",
      ],
    },
  },
  {
    id: 2,
    role: "Assistente administrativo de marketing",
    company: "UNIvs",
    period: "2018 - 2020",
    summary: "Web Design",
    details: {
      // stack:
      //   "MERN Stack (MongoDB, Express, React.js, Node.js), API RESTful, Git/GitHub, Figma.",
      deliverables: [
        " Desenvolvimento de Interfaces Web: Criação e implementação de Landing Pages e Hotsites responsivos (via RD Station), focados em UX/UI para maximizar a taxa de conversão (CRO).",
        " Gestão de CMS (Blog): Estruturação e manutenção de blog corporativo para estratégias de Inbound Marketing e atração de tráfego orgânico.",
        "Automação e CRM: Operação estratégica da plataforma CRM Educacional, garantindo a integridade dos dados e a gestão eficiente do funil de vendas.",
        "Performance Digital: Planejamento e execução de campanhas de tráfego pago e orgânico, alinhado à gestão de mídias sociais para fortalecimento da marca.",
      ],
    },
  },
];

const educationData = [
  {
    id: 1,
    degree: "Análise e Desenvolvimento de Sistemas",
    school: "UNIBF",
    year: "2026",
  },
  {
    id: 2,
    degree: "Design Thinking",
    school: "TreinaWeb",
    year: "2020",
  },
  {
    id: 3,
    degree: "HTML E CSS",
    school: "TreinaWeb",
    year: "2020",
  },
  {
    id: 4,
    degree: "Curso de React - Fundamentos",
    school: "TreinaWeb",
    year: "2023",
  },
  {
    id: 5,
    degree: "Bootstrap 4 - Fundamentos",
    school: "TreinaWeb",
    year: "2020",
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

                  <p
                    className="timeline-desc"
                    style={{ fontSize: "0.9rem", marginBottom: "1rem" }}
                  >
                    {exp.details.stack}
                  </p>

                  {/* Entregas */}
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
                        style={{ fontSize: "0.9rem", marginBottom: "0.25rem" }}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Resultados */}
                  <h5
                    className="timeline-role"
                    style={{ fontSize: "0.95rem", marginBottom: "0.5rem" }}
                  >
                    Resultados:
                  </h5>
                  <ul style={{ listStyleType: "disc", paddingLeft: "1.2rem" }}>
                    {exp.details.results.map((item, i) => (
                      <li
                        key={i}
                        className="timeline-desc"
                        style={{ fontSize: "0.9rem", marginBottom: "0.25rem" }}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
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
                    "ReactJs",
                    "Node.js",
                    "Javascript",
                    "TypeScript",
                    "CSS3",
                    "Git",
                    "MySQL",
                    "Figma",
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
