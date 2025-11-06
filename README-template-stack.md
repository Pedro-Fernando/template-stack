# 🚀 Guia de Inicialização — Template Stack

Este documento explica **passo a passo** como subir o monorepo `template-stack`, contendo:
- **Backend (NestJS)**
- **Frontend (Vite + React + Tailwind)**
- **Core (TypeScript puro)**

---

## 🧱 Estrutura

```
template-stack/
├── apps/
│   ├── backend/      ← API NestJS
│   └── frontend/     ← App React + Vite
├── packages/
│   └── core/         ← Domínio compartilhado (TS puro + uuid)
└── package.json      ← scripts e workspaces globais
```

---

## 🧰 Pré-requisitos

| Requisito | Versão mínima |
|------------|----------------|
| Node.js    | 20.x |
| npm        | 10.x |
| Git        | qualquer |

Verifique se estão instalados:
```bash
node -v
npm -v
git --version
```

---

## ⚙️ 1️⃣ Instalar dependências

Na **raiz do projeto**, execute:
```bash
npm install
```

Isso instalará todas as dependências de **backend**, **frontend** e **core**.

---

## ⚙️ 2️⃣ Criar arquivos `.env`

Os `.env` não são versionados. Crie-os a partir dos modelos `.env.example`:

```bash
cp .env.example .env
cp apps/backend/.env.example apps/backend/.env
cp apps/frontend/.env.example apps/frontend/.env
```

Exemplo de `.env` do **frontend**:
```bash
VITE_APP_NAME="Template Stack"
VITE_API_URL=http://localhost:3000
VITE_PORT=5173
```

Exemplo de `.env` do **backend**:
```bash
PORT=3000
ALLOW_ORIGIN=http://localhost:5173
```

---

## ⚙️ 3️⃣ Rodar o ambiente de desenvolvimento

Na raiz do projeto:
```bash
npm run dev
```

Isso executa **todos os apps em paralelo**:
- 🧠 **Core:** em modo watch (TypeScript puro)
- ⚙️ **Backend:** NestJS em `http://localhost:3000`
- 💻 **Frontend:** Vite + React em `http://localhost:5173`

---

## ⚙️ 4️⃣ Build de produção

Para compilar todos os projetos:
```bash
npm run build
```

Os resultados ficam em:
```
apps/backend/dist/
apps/frontend/dist/
packages/core/dist/
```

---

## 🧹 5️⃣ Limpar builds

Para limpar os diretórios `dist/` de todos os workspaces:
```bash
npm run clean
```

---

## 🧪 6️⃣ Testar lint e formatação

Executa ESLint e Prettier em todo o monorepo:
```bash
npm run lint
npm run format
```

---

## ✅ Resumo rápido dos comandos principais

| Comando | Descrição |
|----------|------------|
| `npm run dev` | Roda backend, frontend e core em modo dev |
| `npm run build` | Compila todos os projetos |
| `npm run clean` | Remove os diretórios `dist/` |
| `npm run lint` | Executa ESLint em todos os workspaces |
| `npm run format` | Formata o código com Prettier |

---

## 📚 Informações adicionais

- O nome da aplicação vem de `VITE_APP_NAME` no `.env` do frontend.
- O frontend usa `import.meta.env` para acessar variáveis.
- O backend lê variáveis com `@nestjs/config` (via `.env`).

---

🧠 **Autor:** Pedro Fernando  
📦 **Licença:** MIT  
📅 **Última atualização:** 2025-11-06
