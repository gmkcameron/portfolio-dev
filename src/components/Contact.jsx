import React from 'react'
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'
import './Contact.css'

function Contact() {
  const contactLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/gmkcameron',
      icon: <FaGithub />, 
      ariaLabel: 'GitHub'
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/guilherme-cameron/',
      icon: <FaLinkedin />, 
      ariaLabel: 'LinkedIn'
    },
    {
      name: 'Email',
      href: 'mailto:gmkcameron84@gmail.com',
      icon: <FaEnvelope />, 
      ariaLabel: 'Email'
    }
  ]

  return (
    <section id="contact" className="contact">
      <div className="section-header">
        <h2 className="section-title">Contato</h2>
        <div className="title-underline"></div>
        {/* <p className="contact-description">
          Vamos conversar! Escolha a melhor forma de me chamar nos canais abaixo.
        </p> */}
      </div>

      <div className="contact-icons">
        {contactLinks.map(link => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon"
            aria-label={link.ariaLabel}
          >
            <span className="contact-icon-figure">{link.icon}</span>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Contact
