# PDF Reader and Convertor MVP

Monorepo scaffold for an MVP PDF-to-database editor.

## Structure

- `apps/web` - Next.js + TypeScript web app (upload/dashboard/document review pages)
- `apps/worker` - background worker service
- `packages/db` - Prisma + Postgres data layer
- `packages/shared` - shared zod schemas and inferred types
- `packages/extraction` - extraction provider interface + mock fixture provider
- `packages/rendering` - overlay rendering/export planning package
- `docs` - architecture/product docs

## Prerequisites

- Node.js 22+
- pnpm 10+
- Docker (for local Postgres)

## Setup

1. Install dependencies:
   ```bash
   pnpm install
   ```
2. Start Postgres:
   ```bash
   docker compose up -d
   ```
3. Create `.env` in `packages/db`:
   ```bash
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/pdf_editor"
   ```
4. Generate Prisma client:
   ```bash
   pnpm --filter @pdf/db prisma:generate
   ```
5. Run web app:
   ```bash
   pnpm --filter @pdf/web dev
   ```
6. Run worker:
   ```bash
   pnpm --filter @pdf/worker build && pnpm --filter @pdf/worker start
   ```

## Quality checks

```bash
pnpm build
pnpm test
```

## Notes

- OCR is intentionally mocked for MVP bootstrapping.
- Extraction uses fixture-based responses; no real OCR provider is integrated yet.
- Rendering currently returns overlay operations and output metadata; binary PDF writing is deferred.
