import React, { useState } from 'react'
import { FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Funcionalidade de envio será implementada! Por enquanto, entre em contato pelos links abaixo.')
    console.log('Form data:', formData)
  }

  return (
    <section id="contact" className="contact">
      <div className="section-header">
        <h2 className="section-title">Entre em Contato</h2>
        <div className="title-underline"></div>
        <p className="section-subtitle">
          Estou disponível para oportunidades de trabalho e projetos freelance
        </p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <h3>Vamos conversar!</h3>
          <p>
            Estou em busca da minha primeira oportunidade como desenvolvedor fullstack.
            Se você tem uma vaga ou projeto em mente, ficarei feliz em conversar!
          </p>

          <div className="contact-methods">
            <a href="mailto:seu-email@example.com" className="contact-method">
              <div className="method-icon">
                <FaEnvelope />
              </div>
              <div className="method-info">
                <h4>Email</h4>
                <p>seu-email@example.com</p>
              </div>
            </a>

            <a href="https://linkedin.com/in/seu-perfil" target="_blank" rel="noopener noreferrer" className="contact-method">
              <div className="method-icon">
                <FaLinkedin />
              </div>
              <div className="method-info">
                <h4>LinkedIn</h4>
                <p>/in/seu-perfil</p>
              </div>
            </a>

            <a href="https://github.com/seu-usuario" target="_blank" rel="noopener noreferrer" className="contact-method">
              <div className="method-icon">
                <FaGithub />
              </div>
              <div className="method-info">
                <h4>GitHub</h4>
                <p>@seu-usuario</p>
              </div>
            </a>

            <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="contact-method">
              <div className="method-icon">
                <FaWhatsapp />
              </div>
              <div className="method-info">
                <h4>WhatsApp</h4>
                <p>(11) 99999-9999</p>
              </div>
            </a>
          </div>
        </div>

        {/* <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Seu nome"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="seu-email@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Mensagem</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              placeholder="Sua mensagem..."
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Enviar Mensagem
          </button>
        </form> */}
      </div>
    </section>
  )
}

export default Contact
