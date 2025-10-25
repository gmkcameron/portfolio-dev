import React from 'react'
import './About.css'

function About() {
  return (
    <section id="about" className="about">
      <div className="section-header">
        <h2 className="section-title">Sobre Mim</h2>
        <div className="title-underline"></div>
      </div>

      <div className="about-content">
        <div className="about-text">
          <p>
            Sou um desenvolvedor fullstack júnior apaixonado por tecnologia e
            sempre em busca de novos desafios. Minha jornada na programação começou
            com curiosidade e se transformou em uma dedicação constante ao aprendizado.
          </p>
          <p>
            Tenho experiência em desenvolvimento web completo, desde a criação de
            interfaces responsivas e intuitivas com <strong>HTML, CSS e React</strong>,
            até a construção de APIs robustas e escaláveis com <strong>Node.js e Express</strong>.
          </p>
          <p>
            Atualmente, estou focado em aprimorar minhas habilidades em <strong>backend</strong>,
            trabalhando com bancos de dados, autenticação e arquitetura de APIs RESTful.
            Busco minha primeira oportunidade profissional para contribuir com projetos reais
            e continuar evoluindo como desenvolvedor.
          </p>
          <div className="about-highlights">
            <div className="highlight-item">
              <span className="highlight-icon">🎯</span>
              <div>
                <h4>Foco em Backend</h4>
                <p>Especialização em Node.js e Express</p>
              </div>
            </div>
            <div className="highlight-item">
              <span className="highlight-icon">📚</span>
              <div>
                <h4>Aprendizado Contínuo</h4>
                <p>Sempre estudando novas tecnologias</p>
              </div>
            </div>
            <div className="highlight-item">
              <span className="highlight-icon">💡</span>
              <div>
                <h4>Resolução de Problemas</h4>
                <p>Pensamento lógico e criativo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
