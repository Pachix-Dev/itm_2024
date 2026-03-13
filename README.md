# ITM 2024 Monorepo

Repositorio organizado como monorepo con npm workspaces.

## Estructura

- frontend: sitio Astro
- backend: API Node/Express

## Requisitos

- Node.js 18 o superior
- npm 9 o superior

## Instalacion

Desde la raiz del proyecto:

npm install

## Scripts desde la raiz

- npm run dev: levanta frontend y backend en paralelo
- npm run dev:frontend: solo frontend
- npm run dev:backend: solo backend
- npm run build: build del frontend
- npm run preview: preview del frontend
- npm run start: inicia backend en modo produccion

## Estructura de deploy

- build frontend: frontend/dist
- codigo backend: backend

## Documentacion por paquete

- ver frontend/README.md
- ver backend/README.md
