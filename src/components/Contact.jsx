import React from "react";
import { Mail, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-inverse">
      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-info">
            <h2 className="contact-title">Vamos trabalhar juntos?</h2>
            <p className="contact-desc">
              Estou sempre aberto a novos desafios e parcerias. Preencha o
              formulário e entrarei em contato em breve.
            </p>

            <div className="contact-items">
              <div className="contact-item">
                <div className="contact-icon">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="contact-label">Email</p>
                  <p className="contact-value">contato@joaosilva.dev</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="contact-label">Localização</p>
                  <p className="contact-value">São Paulo, Brasil</p>
                </div>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label>Nome</label>
              <input
                type="text"
                placeholder="Seu nome"
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="seu@email.com"
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label>Mensagem</label>
              <textarea
                rows="4"
                placeholder="Como posso ajudar?"
                className="form-input textarea"
              ></textarea>
            </div>
            <button className="btn btn-primary btn-block">
              Enviar Mensagem <Send size={18} style={{ marginLeft: "8px" }} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
