import React, { useState } from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import './Projects.css'

function Projects() {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'API RESTful de Tarefas',
      description:
        'API completa para gerenciamento de tarefas com autenticação JWT, CRUD completo e validações. Desenvolvida com Node.js, Express e MongoDB.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop',
      tags: ['Node.js', 'Express', 'MongoDB', 'JWT'],
      category: 'backend',
      github: 'https://github.com/seu-usuario/api-tarefas',
      demo: ''
    },
    {
      id: 2,
      title: 'Sistema de Blog',
      description:
        'Blog fullstack com painel administrativo, sistema de posts, comentários e categorias. Frontend em React e backend em Node.js com PostgreSQL.',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=500&h=300&fit=crop',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Express'],
      category: 'fullstack',
      github: 'https://github.com/seu-usuario/blog-system',
      demo: 'https://seu-blog-demo.netlify.app'
    },
    {
      id: 3,
      title: 'API de E-commerce',
      description:
        'Backend de e-commerce com gestão de produtos, carrinho de compras, pedidos e integração com gateway de pagamento.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=500&h=300&fit=crop',
      tags: ['Node.js', 'Express', 'MongoDB', 'Stripe'],
      category: 'backend',
      github: 'https://github.com/seu-usuario/ecommerce-api',
      demo: ''
    },
    {
      id: 4,
      title: 'Dashboard Interativo',
      description:
        'Dashboard responsivo com gráficos e visualização de dados em tempo real. Consumo de API externa e interface moderna.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      tags: ['React', 'JavaScript', 'CSS', 'API'],
      category: 'frontend',
      github: 'https://github.com/seu-usuario/dashboard',
      demo: 'https://seu-dashboard.netlify.app'
    },
    {
      id: 5,
      title: 'API de Autenticação',
      description:
        'Sistema robusto de autenticação e autorização com refresh tokens, recuperação de senha por email e verificação de conta.',
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=500&h=300&fit=crop',
      tags: ['Node.js', 'Express', 'JWT', 'Nodemailer'],
      category: 'backend',
      github: 'https://github.com/seu-usuario/auth-api',
      demo: ''
    },
    {
      id: 6,
      title: 'Landing Page Moderna',
      description:
        'Landing page responsiva e animada com design moderno, otimizada para conversão e SEO. HTML, CSS e JavaScript puro.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop',
      tags: ['HTML', 'CSS', 'JavaScript'],
      category: 'frontend',
      github: 'https://github.com/seu-usuario/landing-page',
      demo: 'https://sua-landing.netlify.app'
    }
  ]

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter)

  return (
    <section id="projects" className="projects">
      <div className="section-header">
        <h2 className="section-title">Meus Projetos</h2>
        <div className="title-underline"></div>
        <p className="section-subtitle">
          Projetos pessoais desenvolvidos para praticar e demonstrar minhas habilidades
        </p>
      </div>

      <div className="filter-buttons">
        <button
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          Todos
        </button>
        <button
          className={`filter-btn ${filter === 'backend' ? 'active' : ''}`}
          onClick={() => setFilter('backend')}
        >
          Backend
        </button>
        <button
          className={`filter-btn ${filter === 'fullstack' ? 'active' : ''}`}
          onClick={() => setFilter('fullstack')}
        >
          Fullstack
        </button>
        <button
          className={`filter-btn ${filter === 'frontend' ? 'active' : ''}`}
          onClick={() => setFilter('frontend')}
        >
          Frontend
        </button>
      </div>

      <div className="projects-grid">
        {filteredProjects.map(project => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="project-overlay">
                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    aria-label="Ver código no GitHub"
                  >
                    <FaGithub />
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label="Ver demo ao vivo"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, index) => (
                  <span key={index} className="project-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="projects-note">
        <p>
          💡 <strong>Nota:</strong> Estes são projetos de estudo e prática.
          Substitua os links pelos seus repositórios reais no GitHub!
        </p>
      </div> */}
    </section>
  )
}

export default Projects
