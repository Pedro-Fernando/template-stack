# 🧱 Template Stack — Monorepo Base (NestJS + React + Core TS)

Este repositório serve como **template base** para criação de novos projetos utilizando:
- 🧠 **Core:** TypeScript puro (domínio, entidades, casos de uso)
- ⚙️ **Backend:** NestJS (API REST)
- 💻 **Frontend:** React + Vite + TailwindCSS

---

## 🚀 Estrutura de Pastas

```
template-stack/
├── apps/
│   ├── backend/      ← API NestJS
│   └── frontend/     ← App React + Vite
├── packages/
│   └── core/         ← Domínio compartilhado (TS puro + uuid)
├── package.json      ← scripts globais (npm-run-all)
└── tsconfig.base.json
```

---

## ⚙️ Pré-requisitos

| Requisito | Versão mínima |
|------------|----------------|
| Node.js    | 20.x |
| npm        | 10.x |
| Git        | qualquer |

Verifique:
```bash
node -v
npm -v
git --version
```

---

## 🧰 Instalação do Template

### 1️⃣ Instalar dependências
```bash
npm install
```

### 2️⃣ Criar arquivos `.env`
Copie os arquivos de exemplo:
```bash
cp .env.example .env
cp apps/backend/.env.example apps/backend/.env
cp apps/frontend/.env.example apps/frontend/.env
```

### 3️⃣ Rodar ambiente de desenvolvimento
```bash
npm run dev
```
- ⚙️ Backend → http://localhost:3000  
- 💻 Frontend → http://localhost:5173  

---

## 🏗️ Criar novo projeto a partir do template

Use os scripts incluídos para gerar uma cópia limpa:

### ▶️ Terminal
```bash
./create-app.sh meu-novo-projeto
```

Esses scripts:
- copiam o template;
- removem `.git` e criam novo repositório;
- atualizam `package.json` com o novo nome;
- criam `.env` com base nos exemplos;
- instalam dependências automaticamente.

Após a execução:
```bash
cd ../meu-novo-projeto
npm run dev
```

---

## 🧩 Scripts Globais

| Comando | Descrição |
|----------|------------|
| `npm run dev` | Executa frontend + backend + core em paralelo |
| `npm run build` | Gera build de produção |
| `npm run clean` | Limpa diretórios `dist/` |
| `npm run lint` | Roda ESLint em todo o monorepo |
| `npm run format` | Formata o código com Prettier |

---

## 🧪 Lint e Formatação

```bash
npm run lint
npm run format
```

Caso precise ignorar arquivos de teste no backend:
```
eslint --ext .ts src --ignore-pattern 'src/**/*.spec.ts'
```

---

## 🧠 Dicas

- O **nome da aplicação** vem de `VITE_APP_NAME` no `.env` do frontend.
- O **backend** usa `@nestjs/config` para ler `.env`.
- O **core** é TypeScript puro, apenas com dependência `uuid`.

---
## 📦 Publicação e Deploy

1. Rode o build:
   ```bash
   npm run build
   ```
2. O resultado ficará em:
   - `apps/backend/dist`
   - `apps/frontend/dist`
3. O backend pode ser executado com:
   ```bash
   node dist/main.js
   ```

---

## 📜 Licença e Autor

- 🧠 Autor: **Pedro Fernando**  
- 📄 Licença: MIT  
- 📅 Atualizado em: 2025-11-06
