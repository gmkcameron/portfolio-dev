import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import './Hero.css'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-greeting">Olá, sou</p>
          <h1 className="hero-name">Guilherme Cameron</h1>
          <h2 className="hero-title">Desenvolvedor Fullstack</h2>
          <p className="hero-description">
            Apaixonado por tecnologia e por criar soluções web completas, 
            do backend ao frontend, com foco em Node.js e React.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">Ver Projetos</a>
            <a href="#contact" className="btn btn-secondary">Contato</a>
          </div>
          <div className="hero-social">
            <a href="https://github.com/gmkcameron" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/guilherme-cameron/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="mailto:gmkcameron84@gmail.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-photo">
            <img
              src="/hero-photo.png"
              alt="Foto de Guilherme Cameron"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
