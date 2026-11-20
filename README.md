# Mirelly Alvarenga | Portfólio

Portfólio pessoal de **Mirelly Pego Cordeiro de Alvarenga**, graduanda em Engenharia de Software com foco em análise de dados, Business Intelligence e automação de processos.

O site reúne minha trajetória, experiências, formação e competências, além de canais diretos de contato e o download do meu currículo.

## Seções

- **Início**: apresentação e acesso rápido ao LinkedIn
- **Sobre mim**: quem sou e o que me motiva
- **Experiência**: minha trajetória profissional
- **Educação**: formação acadêmica
- **Competências**: Power BI, SQL, Pentaho, automação de processos (Pipefy) e análise de dados
- **Contato**: envio de email, download do currículo e LinkedIn

O site está disponível em **português e inglês**, com troca de idioma pelo menu.

## Tecnologias

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) para desenvolvimento e build
- [Tailwind CSS 4](https://tailwindcss.com/) para estilização
- [Motion](https://motion.dev/) para animações
- [Three.js](https://threejs.org/) com React Three Fiber para a cena 3D
- [Lucide](https://lucide.dev/) para ícones
- Deploy na [Vercel](https://vercel.com/)

## Como rodar localmente

Pré-requisito: [Node.js](https://nodejs.org/) 18 ou superior.

```bash
# clonar o repositório
git clone https://github.com/MirellyAlvarenga/meu-portfolio.git
cd meu-portfolio

# instalar as dependências
npm install

# iniciar o servidor de desenvolvimento
npm run dev
```

O site abre em `http://localhost:3000`.

### Outros comandos

| Comando           | O que faz                              |
| ----------------- | -------------------------------------- |
| `npm run build`   | Gera a versão de produção em `dist/`   |
| `npm run preview` | Abre localmente a versão de produção   |
| `npm run lint`    | Verifica os tipos do TypeScript        |

## Estrutura

```
meu-portfolio/
├── public/
│   └── Mirelly_Pego_CV.pdf   # currículo disponível para download
├── src/
│   ├── components/           # seções do site (Hero, About, Skills, ...)
│   ├── imagens/              # fotos e imagens
│   ├── App.tsx               # montagem da página
│   ├── main.tsx              # ponto de entrada
│   └── index.css             # estilos globais
├── index.html
├── vite.config.ts
└── vercel.json
```

Para atualizar o currículo, basta substituir `public/Mirelly_Pego_CV.pdf` por um arquivo novo com o mesmo nome.

## Contato

- **Email:** mirellypego@gmail.com
- **LinkedIn:** [mirelly-pego-cordeiro-de-alvarenga](https://www.linkedin.com/in/mirelly-pego-cordeiro-de-alvarenga/)
- **Localização:** Belo Horizonte, MG, Brasil
