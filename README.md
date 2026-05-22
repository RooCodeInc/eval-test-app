# eval-test-app

Minimal Next.js 15 app used as a target for Roomote onboarding eval runs.

## Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Runtime**: Node.js
- **Dev server**: `pnpm dev` → runs on http://localhost:3000

## Setup

```bash
pnpm install
pnpm dev
```

Fill in `DOTENV_PRIVATE_KEY_DEVELOPMENT` before starting the app. The preflight script checks for it automatically.

The dev server starts on port 3000. Visit http://localhost:3000 to see the home page.

## Endpoints

- `/` — Home page displaying environment variables
- `/api/health` — JSON health check endpoint

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `DOTENV_PRIVATE_KEY_DEVELOPMENT` | Yes | Required by the preflight check before `dev` or `build` |

Copy `.env.example` to `.env.keys` and provide the dotenvx private key there.
