import React, { useState, useEffect, useContext } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext";
import "../Navbar.css";

const Navbar = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fechar menu ao redimensionar a janela para desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Fechar menu ao clicar em um link
  const handleNavClick = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { name: "Sobre", href: "#about" },
    { name: "Experiência", href: "#experience" },
    { name: "Projetos", href: "#projects" },
    { name: "Contato", href: "#contact" },
  ];

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <nav className="navbar-container">
        <div className="navbar-content">
          <a href="#" className="navbar-logo">
            THIAGO<span className="accent-text">.CLEMENTINO</span>
          </a>

          {/* Desktop Menu */}
          <ul className="navbar-menu">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="navbar-link">
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <button
                onClick={toggleTheme}
                className="navbar-theme-btn"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </li>
          </ul>

          {/* Mobile Menu Toggle */}
          <div className="navbar-mobile-controls">
            <button
              onClick={toggleTheme}
              className="navbar-theme-btn"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              className={`navbar-toggle ${isOpen ? "active" : ""}`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle mobile menu"
            >
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
              transition={{ duration: 0.3 }}
              className="navbar-mobile-menu"
            >
              <ul className="navbar-mobile-links">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="navbar-mobile-link"
                      onClick={handleNavClick}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
