#!/usr/bin/env bash
set -euo pipefail

if [ $# -lt 1 ]; then
  echo "Uso: $0 <novo-nome-do-projeto>"
  exit 1
fi

NEW_NAME="$1"

# Diretório do template (onde o script está)
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
TEMPLATE_ROOT="$SCRIPT_DIR"

# Checagem de estrutura mínima
for req in "apps/backend" "apps/frontend" "packages/core"; do
  if [ ! -d "$TEMPLATE_ROOT/$req" ]; then
    echo "❌ Estrutura inválida: não encontrei '$req' em $TEMPLATE_ROOT"
    exit 1
  fi
done

DEST_DIR="$(cd "$TEMPLATE_ROOT/.." && pwd)/$NEW_NAME"
if [ -e "$DEST_DIR" ]; then
  echo "❌ Destino já existe: $DEST_DIR"
  exit 1
fi

echo "📦 Criando cópia do template em: $DEST_DIR"

# Copiar tudo exceto node_modules/dist/.git/.turbo
mkdir -p "$DEST_DIR"
tar -C "$TEMPLATE_ROOT" -cf - .   --exclude='./node_modules'   --exclude='./**/node_modules'   --exclude='./**/dist'   --exclude='./.git'   --exclude='./.turbo'   --exclude='./create-app.sh'   | tar -C "$DEST_DIR" -xf -

cd "$DEST_DIR"

# Zera histórico git
rm -rf .git || true
git init -q
git add .
git commit -q -m "chore: inicia projeto '$NEW_NAME' a partir do template"

# Atualiza package.json da raiz
node -e "const fs=require('fs'); const p='./package.json'; const j=JSON.parse(fs.readFileSync(p,'utf8')); j.name='${NEW_NAME}'; fs.writeFileSync(p, JSON.stringify(j,null,2)+'\n'); console.log('✅ package.json (root) atualizado');"

# Cria .env a partir dos .env.example (se existirem)
cp -n ./.env.example ./.env 2>/dev/null || true
[ -f apps/backend/.env.example ] && cp -n apps/backend/.env.example apps/backend/.env || true
[ -f apps/frontend/.env.example ] && cp -n apps/frontend/.env.example apps/frontend/.env || true

echo "📥 Instalando dependências... (npm install)"
npm install

# Auto-remover o script após execução
rm -f "$0" || true
echo "🧹 Script de criação removido para evitar commit acidental."
echo "✅ Projeto '${NEW_NAME}' pronto!"
echo "👉 Entre na pasta e rode: npm run dev"
