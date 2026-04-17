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

The dev server starts on port 3000. Visit http://localhost:3000 to see the home page.

## Endpoints

- `/` — Home page displaying environment variables
- `/api/health` — JSON health check endpoint

## Environment Variables (optional)

| Variable | Default | Description |
|----------|---------|-------------|
| `APP_NAME` | `eval-test-app` | Displayed on the home page |
| `APP_ENV` | `development` | Displayed on the home page |
| `GREETING` | `Hello from the eval test app!` | Displayed on the home page |

Copy `.env.example` to `.env.local` to customize.
