import React from 'react'
import { FaHeart } from 'react-icons/fa'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          Desenvolvido com <FaHeart className="heart-icon" /> por Seu Nome
        </p>
        <p className="footer-year">© {currentYear} - Todos os direitos reservados</p>
        <p className="footer-tech">
          Feito com React, Node.js e muito café ☕
        </p>
      </div>
    </footer>
  )
}

export default Footer
