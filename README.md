# Shubhajit Mandal — Portfolio Website

A personal portfolio website built with React, Three.js, and GSAP, featuring 3D animations, smooth scroll interactions, and a custom cursor.

## Tech Stack

- **React 18** + **TypeScript** — UI and component logic
- **Three.js** / **@react-three/fiber** / **@react-three/drei** — 3D character and scene rendering
- **GSAP** + **ScrollTrigger** — scroll-driven animations and pinned sections
- **Vite** — build tool and dev server
- **Vercel Analytics** — usage analytics

## Features

- 3D animated character on the landing section
- Horizontal scroll work section showcasing 4 projects
- Animated tech stack marquee
- Scroll-triggered section transitions
- Custom cursor
- Responsive navbar with smooth anchor navigation
- Contact section with social links

## Projects Showcased

1. **RAG Based Image Search** — Python, Ollama, Chainlit, LLaVA
2. **Agentic SWAMP** — ReactJS, Python, CrewAI, OpenAI GPT-4
3. **RAG Based Document Search** — Ollama, Chainlit, Python, Qwen
4. **Portfolio Website** — JavaScript, TypeScript, React, Three.js

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Install dependencies

```bash
npm install
```

### Run dev server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Deploying to GitHub Pages

This project is deployed via the `gh-pages` package, which builds the site and pushes the `dist/` folder to the `gh-pages` branch. The live site is served from there.

Whenever you make changes and want to publish them:

```bash
git add .
git commit -m "your commit message"
git push origin main

npm run deploy
```

`npm run deploy` runs `gh-pages -d dist`, which pushes the current `dist/` folder to the `gh-pages` branch — but it does **not** rebuild first, so make sure you run `npm run build` beforehand (or add it as a `predeploy` step, see below):

```bash
npm run build
npm run deploy
```

Notes:

- The site is published from `homepage` in [package.json](package.json): `https://Mshubhajit.github.io/Portfolio-Website`.
- Changes can take a minute or two to appear live after deploying.
- Pushing to `main` alone does **not** update the live site — you must also run `npm run build && npm run deploy`.

### Optional: auto-build before deploy

To avoid forgetting to build first, add a `predeploy` script to [package.json](package.json) so it runs automatically before every deploy:

```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

With this in place, `npm run deploy` alone will build and publish in one step.

