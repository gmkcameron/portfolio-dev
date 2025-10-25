import React from 'react'
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDatabase,
  FaNpm
} from 'react-icons/fa'
import { SiExpress, SiMongodb, SiPostgresql } from 'react-icons/si'
import './Skills.css'

function Skills() {
  const skills = [
    {
      category: 'Frontend',
      items: [
        { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },
        { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6' },
        { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
        { name: 'React', icon: <FaReact />, color: '#61DAFB' }
      ]
    },
    {
      category: 'Backend',
      items: [
        { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
        { name: 'Express', icon: <SiExpress />, color: '#000000' },
        { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
        { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#4169E1' }
      ]
    },
    {
      category: 'Ferramentas',
      items: [
        { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
        { name: 'NPM', icon: <FaNpm />, color: '#CB3837' },
        { name: 'REST API', icon: <FaDatabase />, color: '#0078D4' }
      ]
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="section-header">
        <h2 className="section-title">Minhas Skills</h2>
        <div className="title-underline"></div>
        <p className="section-subtitle">
          Tecnologias que utilizo no desenvolvimento de projetos fullstack
        </p>
      </div>

      <div className="skills-container">
        {skills.map((skillGroup, index) => (
          <div key={index} className="skill-group">
            <h3 className="skill-category">{skillGroup.category}</h3>
            <div className="skill-items">
              {skillGroup.items.map((skill, idx) => (
                <div key={idx} className="skill-card">
                  <div className="skill-icon" style={{ color: skill.color }}>
                    {skill.icon}
                  </div>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="learning-section">
        <h3>🚀 Atualmente estudando</h3>
        <p>TypeScript, Docker, Testes Automatizados e Arquitetura de Software</p>
      </div>
    </section>
  )
}

export default Skills
