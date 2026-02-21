# Project Structure — ReactWorkShop

This workspace contains three example React/Vite projects used for learning and experimentation.

Overview
- Root files: shared docs and workspace-level config.
- Projects: each folder is a standalone Vite app you can run independently.

Projects

- `funproject/` — JavaScript React + Vite starter
  - `package.json` : scripts and dependencies
  - `vite.config.js` : Vite configuration
  - `src/` : React source (`main.jsx`, `App.jsx`, `assets/`)
  - `public/` : static assets served at root

- `second test/` — TypeScript React + Vite
  - `package.json` : scripts (usually `dev`, `build`, `preview`)
  - `vite.config.ts` : Vite + TypeScript config
  - `tsconfig.app.json`, `tsconfig.json`, `tsconfig.node.json` : TypeScript setups
  - `src/` : `main.tsx`, `App.tsx`, styles and assets

- `xyz/` — another TypeScript React example (similar layout to `second test`)

How to run a project

1. Open a terminal and change to the project folder, e.g.:

```bash
cd "second test"
```

2. Install dependencies:

```bash
npm install
```

3. Start dev server (Vite):

```bash
npm run dev
```

4. Build for production:

```bash
npm run build
npm run preview
```

Notes
- Files named `vite.config.ts` or `vite.config.js` configure the dev server and build.
- `public/` contents are served as static files; `src/` contains the app code.
- `tsconfig.*.json` files are present only in TypeScript projects (`second test`, `xyz`).

If you want, I can also add a short README in each project with the exact `package.json` scripts and a minimal run guide.
