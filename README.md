# 💼 Portfólio Fullstack JavaScript

Portfólio pessoal desenvolvido com React, demonstrando minhas habilidades como desenvolvedor fullstack júnior com foco em JavaScript.

## 🚀 Tecnologias Utilizadas

### Frontend
- **React** - Biblioteca JavaScript para construção de interfaces
- **Vite** - Build tool moderna e rápida
- **CSS3** - Estilização responsiva e moderna
- **React Icons** - Biblioteca de ícones

### Backend (Projetos demonstrados)
- **Node.js** - Runtime JavaScript
- **Express** - Framework web para Node.js
- **MongoDB** - Banco de dados NoSQL
- **PostgreSQL** - Banco de dados relacional
- **JWT** - Autenticação e autorização

## 📋 Pré-requisitos

Antes de começar, você precisa ter instalado:
- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

## 🔧 Instalação

1. Clone este repositório (ou baixe os arquivos):
```bash
git clone https://github.com/seu-usuario/portfolio-fullstack.git
cd portfolio-fullstack
```

2. Instale as dependências:
```bash
npm install
```

## 🎮 Como Usar

### Modo Desenvolvimento
Para rodar o projeto em modo de desenvolvimento:
```bash
npm run dev
```
O site estará disponível em `http://localhost:5173`

### Build para Produção
Para criar uma versão otimizada para produção:
```bash
npm run build
```

### Preview da Build
Para visualizar a build de produção localmente:
```bash
npm run preview
```

## 📝 Personalização

### 1. Informações Pessoais
Edite os seguintes arquivos para adicionar suas informações:

**`src/components/Hero.jsx`**
- Altere o nome, título e descrição
- Atualize os links das redes sociais (GitHub, LinkedIn, Email)

**`src/components/About.jsx`**
- Personalize a seção "Sobre Mim" com sua história

**`src/components/Contact.jsx`**
- Atualize email, LinkedIn, GitHub e WhatsApp

**`src/components/Footer.jsx`**
- Altere "Seu Nome" para seu nome real

### 2. Projetos
No arquivo **`src/components/Projects.jsx`**, substitua os projetos de exemplo pelos seus projetos reais:
- Adicione links reais do GitHub
- Adicione links de demonstração (se disponível)
- Atualize títulos, descrições e tags
- Substitua as imagens (use suas próprias ou do Unsplash)

### 3. Cores e Estilos
Para personalizar as cores, edite as variáveis CSS em **`src/index.css`**:
```css
:root {
  --primary-color: #3b82f6;
  --secondary-color: #1e40af;
  --text-primary: #1f2937;
  --text-secondary: #6b7280;
  /* ... outras cores */
}
```

## 📁 Estrutura do Projeto

```
portfolio-fullstack/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   ├── Hero.jsx
│   │   ├── Hero.css
│   │   ├── About.jsx
│   │   ├── About.css
│   │   ├── Skills.jsx
│   │   ├── Skills.css
│   │   ├── Projects.jsx
│   │   ├── Projects.css
│   │   ├── Contact.jsx
│   │   ├── Contact.css
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🌟 Funcionalidades

- ✅ Design responsivo (mobile-first)
- ✅ Menu de navegação com scroll suave
- ✅ Seções: Home, Sobre, Skills, Projetos, Contato
- ✅ Filtro de projetos por categoria
- ✅ Animações e transições suaves
- ✅ Ícones de tecnologias
- ✅ Links para redes sociais
- ✅ Formulário de contato

## 🚀 Deploy

### Netlify
1. Crie uma conta no [Netlify](https://www.netlify.com/)
2. Conecte seu repositório GitHub
3. Configure:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy!

### Vercel
1. Crie uma conta no [Vercel](https://vercel.com/)
2. Importe seu repositório
3. O Vercel detectará automaticamente as configurações do Vite
4. Deploy!

## 📚 Próximos Passos

- [ ] Adicionar seus projetos reais
- [ ] Integrar formulário de contato com EmailJS ou backend próprio
- [ ] Adicionar seção de blog (opcional)
- [ ] Implementar modo escuro
- [ ] Adicionar animações mais elaboradas
- [ ] Integrar Google Analytics

## 🤝 Contribuindo

Este é um projeto pessoal, mas sugestões são sempre bem-vindas!

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar como base para seu próprio portfólio!

## 👨‍💻 Autor

**Seu Nome**
- GitHub: [@seu-usuario](https://github.com/seu-usuario)
- LinkedIn: [seu-perfil](https://linkedin.com/in/seu-perfil)
- Email: seu-email@example.com

---

⭐ Se este projeto te ajudou, considere dar uma estrela no GitHub!
