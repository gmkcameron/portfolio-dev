import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import './Hero.css'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-greeting">Olá, eu sou</p>
          <h1 className="hero-name">Desenvolvedor Fullstack</h1>
          <h2 className="hero-title">JavaScript</h2>
          <p className="hero-description">
            Desenvolvedor júnior apaixonado por criar soluções web completas, 
            do backend ao frontend, com foco em Node.js e React.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">Ver Projetos</a>
            <a href="#contact" className="btn btn-secondary">Contato</a>
          </div>
          <div className="hero-social">
            <a href="https://github.com/seu-usuario" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/seu-perfil" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="mailto:seu-email@example.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-photo">
            <img
              src="https://via.placeholder.com/320x320.png?text=Sua+Foto"
              alt="Foto de Seu Nome"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
