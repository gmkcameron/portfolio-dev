import React from 'react'
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'
import './Contact.css'

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="section-header">
        <h2 className="section-title">Contato</h2>
        <div className="title-underline"></div>
      </div>

      <div className="contact-icons">
        <a
          href="https://github.com/gmkcameron"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/guilherme-cameron/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:gmkcameron84@gmail.com"
          className="contact-icon"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>
      </div>
    </section>
  )
}

export default Contact
