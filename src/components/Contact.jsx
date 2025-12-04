import React, { useRef, useState } from "react";
import { Mail, MapPin, Send, Phone } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(""); // valores: "", "sending", "success", "error"

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    // CORRETO (Use aspas simples ou duplas)
    const serviceID = "service_62kn8mg";
    const templateID = "template_49adqlu";
    const publicKey = "Mb2ELxsB8WEb2SF_m";

    // NOTA: A ordem correta dos parâmetros é: ServiceID, TemplateID, Elemento do Form, PublicKey
    emailjs.sendForm(serviceID, templateID, form.current, publicKey).then(
      (result) => {
        setStatus("success");
        form.current.reset(); // Limpa os campos

        // Remove a mensagem de sucesso após 5 segundos
        setTimeout(() => setStatus(""), 5000);
      },
      (error) => {
        console.error("Erro ao enviar:", error.text);
        setStatus("error");
      }
    );
  };

  return (
    <section id="contact" className="section-padding bg-alt">
      <div className="container">
        <div className="contact-wrapper">
          {/* Informações de Contato (Lado Esquerdo/Topo) */}
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
                  <p className="contact-value">thidf57@gmail.com</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="contact-label">Localização</p>
                  <p className="contact-value">Brasília, Brasil</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="contact-label">WhatsApp</p>
                  <p className="contact-value">(61) 9 8495-7385</p>
                </div>
              </div>
            </div>
          </div>

          {/* O Formulário (Lado Direito/Baixo) */}
          <form className="contact-form" ref={form} onSubmit={sendEmail}>
            <div className="form-group">
              <label>Nome</label>
              <input
                type="text"
                name="user_name" // OBRIGATÓRIO: Deve bater com o template do EmailJS
                placeholder="Seu nome"
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="user_email" // OBRIGATÓRIO
                placeholder="seu@email.com"
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label>Mensagem</label>
              <textarea
                name="message" // OBRIGATÓRIO
                rows="4"
                placeholder="Como posso ajudar?"
                className="form-input textarea"
                required
              ></textarea>
            </div>

            <button
              className="btn btn-primary btn-block"
              disabled={status === "sending"}
              style={{ opacity: status === "sending" ? 0.7 : 1 }}
            >
              {status === "sending" ? "Enviando..." : "Enviar Mensagem"}
              <Send
                size={18}
                style={{ marginLeft: "8px", display: "inline" }}
              />
            </button>

            {/* Mensagens de Feedback */}
            {status === "success" && (
              <p
                style={{
                  color: "green",
                  marginTop: "10px",
                  fontWeight: "bold",
                }}
              >
                Mensagem enviada com sucesso!
              </p>
            )}
            {status === "error" && (
              <p
                style={{ color: "red", marginTop: "10px", fontWeight: "bold" }}
              >
                Erro ao enviar. Tente novamente mais tarde.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
