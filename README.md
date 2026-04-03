# Mercury Fleet API

NestJS API project created **for studying and practicing NestJS**.

> This repository is intended as a learning sandbox. Read the code, explore the modules, and use it as a reference for your own experiments.

## About

**Mercury Fleet API** is a REST API built with **NestJS (TypeScript)**. It demonstrates common backend patterns and integrations such as:

- Modular architecture with controllers, services, and providers
- Configuration management via `@nestjs/config`
- Authentication with JWT (`@nestjs/jwt`, `passport-jwt`)
- API documentation with Swagger (`@nestjs/swagger`)
- Rate limiting / throttling (`@nestjs/throttler`)
- Database access using Prisma (`@prisma/client`, `prisma`)

## Repository structure

- `backend/` — NestJS application source code
- `package.json` (root) — helper scripts to build/start the backend

## Getting started

### Requirements

- Node.js **18+**
- npm **9+**

### Install

```bash
cd backend
npm install
```

### Run (development)

```bash
cd backend
npm run start:dev
```

### Run (production)

```bash
npm run build
npm run start
```

## Notes

- Swagger is enabled in the project; check `backend/src/main.ts` to see where it is exposed.
- If you use a database locally, configure your environment variables (see any `.env` / config files under `backend/`).

## License

UNLICENSED (learning project)