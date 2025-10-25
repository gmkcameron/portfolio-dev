import React, { useState, useEffect } from 'react'
import './Header.css'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleNavClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <span className="logo-bracket">{'<'}</span>
          <span className="logo-text">DevJS</span>
          <span className="logo-bracket">{'/>'}</span>
        </div>
        <button
          className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={`nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <a href="#home" onClick={handleNavClick}>Início</a>
          <a href="#about" onClick={handleNavClick}>Sobre</a>
          <a href="#skills" onClick={handleNavClick}>Skills</a>
          <a href="#projects" onClick={handleNavClick}>Projetos</a>
          <a href="#contact" onClick={handleNavClick}>Contato</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
