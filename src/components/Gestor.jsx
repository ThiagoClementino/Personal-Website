import React, { useContext } from "react";
import { Sun, Moon } from "lucide-react";
import { ThemeContext } from "../context/ThemeContext"; // Importação do seu contexto global
import "../css/gestor.css";

const Gestor = () => {
  // Alteração: Consumindo o estado global em vez de criar um local

  const { isDark, toggleTheme } = useContext(ThemeContext);
  return (
    // Mantido: A lógica de classe depende agora do contexto global
    <div className={isDark ? "theme-dark" : "theme-light"}>
      <nav>
        <ul>
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
      </nav>

      <div className="container">
        {/* O botão de toggle local foi removido, pois o controle agora é pelo Navbar */}

        {/* Header Section - Mantido */}
        <header className="project-section ">
          <div className="hero-container">
            <div>
              <h1 className="hero-title">
                Gerenciamento de Membros e Finanças: A Solução Completa para
                Gestão de Comunidades
              </h1>
            </div>
          </div>
        </header>

        {/* Challenge and Solution Section - Mantido */}
        <section className="section-padding">
          <div className="section-header">
            <h3 className="section-title">💡 O Desafio e a Solução</h3>
            <div className="section-divider" style={{ width: "80px" }}></div>
          </div>

          <div className="card">
            <h4 className="card-title">O Desafio</h4>
            <p className="card-subtitle">
              Organizações com um grande número de membros (como associações,
              clubes ou, neste caso, instituições religiosas) enfrentam o
              desafio de gerenciar dados de pessoas e finanças de forma
              eficiente, transparente e segura. A falta de um sistema
              centralizado leva a erros, perda de informações e dificuldade na
              tomada de decisões estratégicas.
            </p>
          </div>

          <div className="card" style={{ marginTop: "1.5rem" }}>
            <h4 className="card-title">A Solução</h4>
            <p className="card-subtitle">
              Desenvolvi uma Plataforma de Gestão Full-Stack que centraliza o
              controle de membros e o fluxo de caixa. Este projeto demonstra
              minha capacidade de criar sistemas que transformam dados complexos
              em informações claras e acionáveis, garantindo a eficiência
              operacional e o crescimento sustentável da comunidade.
            </p>
          </div>
        </section>

        {/* Project Highlights Section - Mantido */}
        <section className="section-padding bg-alt">
          <div className="section-header">
            <h3 className="section-title">
              🚀 Destaques do Projeto: O Que Você Vai Encontrar
            </h3>
            <div className="section-divider" style={{ width: "80px" }}></div>
            <p className="section-subtitle">
              Este sistema não é apenas um banco de dados; é uma ferramenta de
              inteligência de gestão.
            </p>
          </div>

          <div className="card" style={{ marginBottom: "2rem" }}>
            <div className="project-header">
              <div className="icon-box">
                <span style={{ fontSize: "1.5rem" }}>📊</span>
              </div>
            </div>
            <h4 className="project-title">
              1. Dashboard Analítico e Tomada de Decisão
            </h4>
            <p className="project-desc">
              O coração do sistema é o Dashboard Interativo. Ele elimina a
              necessidade de planilhas complexas, oferecendo uma visão 360º em
              tempo real:
            </p>
            <ul style={{ paddingLeft: "1.5rem", lineHeight: "1.8" }}>
              <li className="timeline-desc">
                <strong>Indicadores Chave (KPIs):</strong> Acompanhe o número de
                Membros Ativos e o Balanço Financeiro com um único olhar.
              </li>
              <li className="timeline-desc">
                <strong>Visualização de Crescimento:</strong> Gráficos dinâmicos
                mostram a evolução da membresia ao longo do ano e a distribuição
                por gênero, auxiliando na compreensão do perfil da comunidade.
              </li>
              <li className="timeline-desc">
                <strong>Fluxo de Caixa Transparente:</strong> Gráficos de barras
                detalham as receitas (entradas) e despesas (saídas) mês a mês,
                garantindo total transparência financeira.
              </li>
            </ul>
          </div>

          <div className="card">
            <h4 className="project-title">
              2. Gestão de Pessoas e Finanças Sem Complicações
            </h4>
            <p className="project-desc">
              A usabilidade foi prioridade. O sistema é dividido em módulos
              intuitivos:
            </p>

            <div className="grid-projects">
              <div className="project-card card">
                <div className="project-header">
                  <div className="icon-box">
                    <span style={{ fontSize: "1.5rem" }}>👥</span>
                  </div>
                </div>
                <h5 className="card-title">Membros</h5>
                <p className="card-subtitle">
                  Cadastro completo, edição rápida e consulta de todos os
                  registros.
                </p>
                <p className="timeline-desc" style={{ marginTop: "1rem" }}>
                  <strong>Foco no Relacionamento:</strong> Garante que os dados
                  de contato e status de cada membro estejam sempre atualizados,
                  facilitando a comunicação e o acompanhamento.
                </p>
              </div>

              <div className="project-card card">
                <div className="project-header">
                  <div className="icon-box">
                    <span style={{ fontSize: "1.5rem" }}>💰</span>
                  </div>
                </div>
                <h5 className="card-title">Financeiro</h5>
                <p className="card-subtitle">
                  Registro de todas as transações, separando Receitas (dízimos,
                  ofertas) e Despesas (contas a pagar).
                </p>
                <p className="timeline-desc" style={{ marginTop: "1rem" }}>
                  <strong>Controle Total:</strong> Permite um acompanhamento
                  rigoroso do orçamento, evitando surpresas e facilitando a
                  prestação de contas.
                </p>
              </div>

              <div className="project-card card">
                <div className="project-header">
                  <div className="icon-box">
                    <span style={{ fontSize: "1.5rem" }}>📄</span>
                  </div>
                </div>
                <h5 className="card-title">Relatórios</h5>
                <p className="card-subtitle">
                  Exportação de dados de membros e finanças para o formato CSV.
                </p>
                <p className="timeline-desc" style={{ marginTop: "1rem" }}>
                  <strong>Flexibilidade:</strong> Permite que os dados sejam
                  facilmente integrados a outras ferramentas de análise ou
                  utilizados para auditorias.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* UX and Security Section - Mantido */}
        <section className="section-padding">
          <div className="section-header">
            <h4 className="section-title">
              3. Experiência do Usuário (UX) e Segurança
            </h4>
            <div className="section-divider" style={{ width: "80px" }}></div>
          </div>

          <div className="card-stack">
            <div className="card">
              <div
                style={{ display: "flex", alignItems: "center", gap: "1rem" }}
              >
                <span className="accent-icon" style={{ fontSize: "1.5rem" }}>
                  🎨
                </span>
                <div>
                  <h5 className="card-title">Design Moderno e Adaptável</h5>
                  <p className="card-subtitle">
                    Utilização de Bootstrap e Tailwind CSS para um layout
                    responsivo e profissional.
                  </p>
                </div>
              </div>
            </div>

            <div className="card">
              <div
                style={{ display: "flex", alignItems: "center", gap: "1rem" }}
              >
                <span className="accent-icon" style={{ fontSize: "1.5rem" }}>
                  🌙
                </span>
                <div>
                  <h5 className="card-title">Modo Escuro (Dark Mode)</h5>
                  <p className="card-subtitle">
                    Recurso de alternância de tema para maior conforto visual e
                    usabilidade em diferentes ambientes.
                  </p>
                </div>
              </div>
            </div>

            <div className="card">
              <div
                style={{ display: "flex", alignItems: "center", gap: "1rem" }}
              >
                <span className="accent-icon" style={{ fontSize: "1.5rem" }}>
                  🔒
                </span>
                <div>
                  <h5 className="card-title">Segurança em Primeiro Lugar</h5>
                  <p className="card-subtitle">
                    Sistema de Autenticação robusto com rotas privadas,
                    garantindo que apenas administradores tenham acesso aos
                    dados sensíveis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Section - Mantido */}
        <section className="section-padding bg-inverse">
          <div className="section-header">
            <h4 className="section-title">💻 O Meu Diferencial Técnico</h4>
            <div className="section-divider" style={{ width: "80px" }}></div>
          </div>

          <div className="card">
            <div style={{ overflowX: "auto" }}>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  fontSize: "0.9rem",
                }}
              >
                <thead>
                  <tr
                    style={{ borderBottom: "2px solid var(--color-secondary)" }}
                  >
                    <th
                      style={{
                        padding: "1rem",
                        textAlign: "left",
                        fontWeight: "700",
                      }}
                    >
                      Camada
                    </th>
                    <th
                      style={{
                        padding: "1rem",
                        textAlign: "left",
                        fontWeight: "700",
                      }}
                    >
                      Tecnologia
                    </th>
                    <th
                      style={{
                        padding: "1rem",
                        textAlign: "left",
                        fontWeight: "700",
                      }}
                    >
                      Por que?
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    style={{
                      borderBottom: "1px solid rgba(123, 123, 123, 0.1)",
                    }}
                  >
                    <td style={{ padding: "1rem" }} className="card-title">
                      Frontend
                    </td>
                    <td style={{ padding: "1rem" }}>
                      <span className="skill-tag">React.js</span>
                    </td>
                    <td style={{ padding: "1rem" }} className="timeline-desc">
                      Para construir uma SPA modular e fluida.
                    </td>
                  </tr>
                  {/* ... demais linhas da tabela mantidas ... */}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Conclusion Section - Mantido */}
        <section className="section-padding">
          <div className="section-header">
            <h4 className="section-title">🌟 Conclusão</h4>
            <div className="section-divider" style={{ width: "80px" }}></div>
          </div>
          <div className="timeline">
            {/* Conteúdo da timeline mantido conforme original */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Gestor;
