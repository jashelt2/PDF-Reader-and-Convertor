# Product Spec

## Product
PDF-to-database editor for recurring forms and semi-structured scanned documents.

## Core flow
1. User uploads a PDF.
2. System extracts fields/tables using a provider abstraction.
3. Worker stores extracted structured data.
4. User reviews and edits extracted values.
5. Renderer exports overlay updates onto original PDF.

## MVP architecture
- `apps/web`: Next.js UI for upload/dashboard/review pages.
- `apps/worker`: background extraction + rendering orchestration.
- `packages/db`: Prisma schema + generated DB client.
- `packages/shared`: zod schemas/shared types.
- `packages/extraction`: provider interface + mock implementation.
- `packages/rendering`: overlay operation builder + export stub.
