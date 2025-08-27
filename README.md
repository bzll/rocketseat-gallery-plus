# Gallery Plus

Uma galeria de imagens moderna construída com React, Vite e Fastify.

## Estrutura do Projeto

```
.
├── data/                # Base de dados local (db.json)
├── public/              # Arquivos públicos (imagens, favicon)
├── server/              # Backend Fastify (main.ts, models.ts, etc)
├── src/                 # Frontend React (componentes, estilos)
├── index.html           # HTML principal
├── package.json         # Dependências e scripts
└── ...
```

## Tecnologias Utilizadas

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Fastify](https://fastify.dev/)
- [SWC](https://swc.rs/) (compilação rápida)
- [ESLint](https://eslint.org/) + [TypeScript ESLint](https://typescript-eslint.io/)

## Instalação

1. Instale as dependências:

   ```
   pnpm install
   ```

2. Inicie o servidor backend:

   ```
   pnpm dev-server
   ```

3. Em outro terminal, inicie o frontend:

   ```
   pnpm dev
   ```

4. Acesse em [http://localhost:5173](http://localhost:5173)

5. (Opcional) Para testar o backend, importe a collection do Postman que está na raiz deste repositório.

## Scripts Disponíveis

- `pnpm dev` — Inicia o frontend em modo desenvolvimento
- `pnpm dev-server` — Inicia o backend Fastify
- `pnpm build` — Gera build de produção do frontend

## Observações

- O backend utiliza o diretório `data/` para armazenar dados.
- As imagens públicas ficam em `public/images/`.
- O projeto utiliza ESLint e Tailwind CSS para padronização e estilos.
- Certifique-se de ter o [pnpm](https://pnpm.io/) instalado para gerenciar as dependências.