import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-content">
        <p>
          &copy; {currentYear} Thiago Clementino. Todos os direitos reservados.
        </p>
        <div className="footer-links">
          <a href="https://github.com/ThiagoClementino">GitHub</a>
          <a href="https://www.linkedin.com/in/thiago-clementino/">LinkedIn</a>
          <a href="https://www.instagram.com/soul_thiago">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
