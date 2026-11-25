# tp-final — Node.js en Azure App Service con CI/CD

Trabajo práctico final: un servidor HTTP mínimo en **Node.js** que se construye y despliega automáticamente en **Azure App Service** cada vez que se hace push a `main`.

## ✨ Qué incluye
- **`index.js`** — servidor HTTP nativo de Node (sin dependencias) que escucha en `process.env.PORT` (3000 por defecto).
- **`Dockerfile`** — imagen basada en `node:20-alpine` lista para ejecutarse en cualquier entorno de contenedores.
- **GitHub Actions** (`.github/workflows/main_tp-node-final1.yml`)
  1. *build*: instala dependencias, compila y ejecuta tests si existen, y sube el artefacto.
  2. *deploy*: inicia sesión en Azure mediante **OIDC (federated credentials, sin contraseñas)** y despliega en la Web App `tp-node-final1`.
- **Azure Pipelines** (`azure-pipelines.yml`) — pipeline de verificación que se ejecuta en un **agente self-hosted**.

## 🏗️ Flujo
```
push a main ──► GitHub Actions ──► build ──► login OIDC en Azure ──► Azure App Service
          └──► Azure Pipelines (agente self-hosted)
```

## ▶️ Ejecutar en local
```bash
node index.js
# http://localhost:3000
```
Con Docker:
```bash
docker build -t tp-final .
docker run -p 3000:3000 tp-final
```

## 🛠️ Tecnologías
Node.js · Docker · GitHub Actions · Azure App Service · Azure DevOps Pipelines
