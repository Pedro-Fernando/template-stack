// eslint.config.js (flat config – ESLint v9)
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import prettier from "eslint-config-prettier";

export default tseslint.config(
  // Ignorar build/dep
  {
    ignores: [
      "**/dist/**",
      "**/node_modules/**",
      "**/coverage/**",
      "**/*.spec.ts", // ignora specs em geral
      "apps/backend/src/**/*.spec.ts",
    ],
  },
  // Recomendados JS + TS
  js.configs.recommended,
  ...tseslint.configs.recommended,

  // Regras gerais para TS/TSX
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        tsconfigRootDir: import.meta.dirname,
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
    },
    settings: {
      react: { version: "detect" },
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    },
  },

  // Ajustes por app/pasta (opcional)
  {
    files: ["apps/backend/**/*"],
    rules: {
      "no-console": "off",
    },
  },

  // Desliga conflitos com Prettier
  prettier,
);
