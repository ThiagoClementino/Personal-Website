import React from "react";
import { Github, Linkedin, Mail, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="about" className="hero-section">
      {/* Background Decorativo */}
      <div className="bg-blur bg-blur-right" />
      <div className="bg-blur bg-blur-left" />

      <div className="container hero-container">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="hero-greeting">OLÁ, EU SOU</span>
          <h1 className="hero-title">
            João <br />
            <span className="accent-text">Silva</span>
          </h1>
          <p className="hero-description">
            Desenvolvedor Full Stack apaixonado por criar experiências digitais
            únicas, interfaces limpas e código performático.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              Ver Projetos <ChevronRight size={18} />
            </a>
            <a href="#contact" className="btn btn-outline">
              Contato
            </a>
          </div>

          <div className="social-links">
            <a href="#">
              <Github size={24} />
            </a>
            <a href="#">
              <Linkedin size={24} />
            </a>
            <a href="#">
              <Mail size={24} />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-image-wrapper"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-image-frame">
            <img
              src="[https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&q=80](https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&q=80)"
              alt="Foto de Perfil"
              className="hero-image"
            />
          </div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="hero-image-ring"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
