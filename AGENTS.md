\# AGENTS.md



\## Goal

Build an MVP web app that:

1\. accepts uploaded PDFs, including scanned PDFs,

2\. extracts structured data into an editable database,

3\. allows a user to review and edit extracted values,

4\. exports a new PDF that preserves the original layout as closely as possible.



\## MVP scope

\- Focus on recurring forms and semi-structured documents first.

\- Do not optimize for arbitrary complex PDFs yet.

\- Use overlay rendering onto original PDF pages for export.

\- Preserve document versions:

&#x20; - original upload

&#x20; - extracted state

&#x20; - edited state

&#x20; - exported PDF



\## Tech stack

\- Next.js

\- TypeScript

\- Prisma

\- Postgres

\- worker/background job layer

\- modular extraction package

\- modular rendering package



\## Rules

\- Keep modules small and typed.

\- Use zod for runtime validation.

\- No hidden magic constants.

\- No vendor lock-in inside core extraction logic.

\- Add tests for parser and renderer changes.

\- Update docs when architecture changes.

\- Favor clarity over cleverness.



\## Workflow

\- Read docs/product-spec.md before coding.

\- Work in small reviewable steps.

\- Run build/tests before finishing each task.

\- If blocked, document the blocker and the smallest next step.

## Environment Reliability
- Always assume a fresh environment
- Do not rely on cached dependencies
- Do not assume database state persists
- Prefer idempotent setup steps
