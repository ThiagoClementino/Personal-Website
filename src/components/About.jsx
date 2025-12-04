import React from "react";
import { motion } from "framer-motion";
import { Code, Layout, Palette, Trello } from "lucide-react"; // Ícones atualizados para o novo contexto
import SectionTitle from "./SectionTitle";
import "../css/about.css";

const About = () => {
  // Mapeamento das "Core Skills" do texto para os Cards
  const stats = [
    {
      icon: <Layout size={22} />,
      title: "SPAs Modernas",
      desc: "Desenvolvimento de Single Page Applications reativas e otimizadas.",
    },
    {
      icon: <Palette size={22} />,
      title: "UI Engineering",
      desc: "Transformação fiel de layouts (Figma/Adobe) em componentes React.",
    },
    {
      icon: <Code size={22} />,
      title: "Integração & APIs",
      desc: "Lógica de programação robusta e integração de sistemas via APIs.",
    },
    {
      icon: <Trello size={22} />,
      title: "Gestão & Processos",
      desc: "Visão analítica de projetos e metodologias de desenvolvimento.",
    },
  ];

  // Variantes para animação em cascata (stagger)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="section-padding">
      <div className="container">
        <SectionTitle
          title="Sobre Mim"
          subtitle="Front-End Developer & UI Engineer"
        />

        <div className="about-content-wrapper">
          {/* Header e Texto com Fade In simples */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="about-header-internal">
              <span className="about-subtitle">
                JavaScript • React • Node.js
              </span>
              <h3 className="about-title">
                Desenvolvedor Web com background híbrido entre Engenharia de
                Software e Design Gráfico.
              </h3>
            </div>

            <div className="about-text-block">
              <p className="about-description">
                Graduando em <strong>Análise de Sistemas</strong>, possuo
                experiência prática no ciclo completo de desenvolvimento de
                software (Full Stack), com ênfase na criação de interfaces
                responsivas e escaláveis. Ao longo da minha trajetória,
                desenvolvi a habilidade de atuar na interseção entre Design e
                Código, garantindo entregas técnicas que respeitam rigorosamente
                a experiência do usuário (UX).
              </p>
              <p className="about-description">
                Meus projetos recentes envolvem a arquitetura de sistemas de
                gestão utilizando <strong>React.js e TypeScript</strong>,
                integrados a back-ends em Node.js. Busco sempre unir a precisão
                técnica com a sensibilidade estética para entregar produtos de
                alto valor.
              </p>
            </div>
          </motion.div>

          {/* Grid de Core Skills */}
          <motion.div
            className="about-stats-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {stats.map((item, index) => (
              <motion.div
                key={index}
                className="stat-card"
                variants={itemVariants}
              >
                <div className="stat-icon">{item.icon}</div>
                <div className="stat-info">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
