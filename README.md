# Disciplina de Aco

Landing page criada com **Node.js**, **Express**, **EJS**, **CSS** e **JavaScript puro**.

O projeto apresenta o sistema **Disciplina de Aco**, voltado para estudantes que querem vencer distrações, criar rotina e estudar com mais constancia.

## Estrutura

```txt
disciplina_aco/
├── public/
├── src/
│   ├── script.js
│   └── style.css
├── views/
│   └── index.ejs
├── package.json
├── server.js
└── README.md
```

## Como rodar

Instale as dependencias:

```bash
npm install
```

Inicie o servidor:

```bash
npm start
```

Acesse no navegador:

```txt
http://localhost:3000
```

## Scripts

- `npm start`: roda o projeto com Node.js.
- `npm run dev`: roda com nodemon para desenvolvimento.

## Publicar no GitHub

```bash
git init
git add .
git commit -m "Cria landing page Disciplina de Aco"
git branch -M main
git remote add origin https://github.com/soso-info/disciplina_aco.git
git push -u origin main
```
