import React from "react";
import { Code, Download } from "lucide-react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

const experienceData = [
  {
    id: 1,
    role: "Senior Full Stack Developer",
    company: "Tech Solutions Inc.",
    period: "2021 - Presente",
    description:
      "Liderança de equipe no desenvolvimento de aplicações SaaS escaláveis utilizando React e Node.js.",
  },
  {
    id: 2,
    role: "Front-end Developer",
    company: "Creative Digital Agency",
    period: "2019 - 2021",
    description:
      "Desenvolvimento de interfaces pixel-perfect, design systems e integração com APIs RESTful.",
  },
  {
    id: 3,
    role: "Junior Web Developer",
    company: "StartUp Innovator",
    period: "2018 - 2019",
    description:
      "Manutenção de legados, criação de landing pages e suporte na arquitetura de banco de dados.",
  },
];

const educationData = [
  {
    id: 1,
    degree: "Pós-graduação em Engenharia de Software",
    school: "Universidade Tecnológica",
    year: "2020",
  },
  {
    id: 2,
    degree: "Bacharelado em Ciência da Computação",
    school: "Universidade Federal",
    year: "2018",
  },
];

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
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="timeline-item"
                >
                  <span className="timeline-dot" />
                  <span className="timeline-date">{exp.period}</span>
                  <h4 className="timeline-role">{exp.role}</h4>
                  <p className="timeline-company">{exp.company}</p>
                  <p className="timeline-desc">{exp.description}</p>
                </motion.div>
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
                    "React",
                    "Node.js",
                    "Javascript",
                    "CSS3",
                    "Git",
                    "SQL",
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
