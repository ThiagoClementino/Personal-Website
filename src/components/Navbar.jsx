import React, { useState, useEffect, useContext } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext";

// Importação dos componentes
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";

const Navbar = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Nova section ativa
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Agora cada link aponta diretamente para um componente
  const navLinks = [
    { name: "Início", component: "home" },
    { name: "Sobre", component: "about" },
    { name: "Experiência", component: "experience" },
    { name: "Projetos", component: "projects" },
    { name: "Contato", component: "contact" },
  ];

  // Renderização da seção selecionada
  const renderSection = () => {
    switch (activeSection) {
      case "about":
        return <About />;
      case "experience":
        return <Experience />;
      case "projects":
        return <Projects />;
      case "contact":
        return <Contact />;
      default:
        return (
          <div className="home-default">
            <h1>Bem-vindo ao meu portfólio</h1>
            <p>Selecione uma seção no menu.</p>
          </div>
        );
    }
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="container navbar-content">
          <a href="#" className="logo" onClick={() => setActiveSection("home")}>
            DEV<span className="accent-text">.PORTFOLIO</span>
          </a>

          {/* Desktop Menu */}
          <div className="desktop-menu">
            {navLinks.map((link) => (
              <button
                key={link.name}
                className="nav-link"
                onClick={() => setActiveSection(link.component)}
              >
                {link.name}
              </button>
            ))}

            <button onClick={toggleTheme} className="theme-toggle-btn">
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="mobile-toggle">
            <button onClick={toggleTheme} className="theme-toggle-btn">
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="menu-btn">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mobile-menu"
            >
              <div className="mobile-menu-links">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => {
                      setActiveSection(link.component);
                      setIsOpen(false);
                    }}
                    className="mobile-nav-link"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Renderização da seção escolhida */}
      <div className="section-container">{renderSection()}</div>
    </>
  );
};

export default Navbar;
