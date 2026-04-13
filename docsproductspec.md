\# Product Spec



\## Product

PDF-to-database editor for recurring forms and semi-structured scanned documents.



\## Core flow

1\. User uploads a PDF.

2\. System detects whether the PDF is text-native or scanned.

3\. System extracts layout, fields, tables, and bounding boxes.

4\. System stores normalized structured data in Postgres.

5\. User reviews and edits extracted values in the UI.

6\. System exports a PDF by overlaying updated values onto original pages.

7\. System stores a new document version.



\## MVP features

\- Upload PDF

\- Extract candidate fields

\- Confidence scoring

\- Review/edit UI

\- Save edits

\- Export edited PDF

\- Download export

\- Version history

\- Support text fields, checkboxes, dates, numbers, and textareas



\## Non-goals

\- Perfect support for arbitrary PDFs

\- Handwriting-first extraction

\- Signature replay

\- Complex reflow of all document layouts



\## Data model

\### documents

\- id

\- filename

\- mime\_type

\- status

\- template\_id nullable

\- created\_at

\- updated\_at



\### document\_versions

\- id

\- document\_id

\- version\_type

\- json\_snapshot

\- file\_url nullable

\- created\_at



\### pages

\- id

\- document\_id

\- page\_number

\- width

\- height

\- image\_url nullable



\### fields

\- id

\- document\_id

\- page\_id

\- label

\- raw\_value

\- normalized\_value

\- field\_type

\- confidence

\- bbox\_x

\- bbox\_y

\- bbox\_width

\- bbox\_height



\### tables

\- id

\- document\_id

\- page\_id

\- bbox\_x

\- bbox\_y

\- bbox\_width

\- bbox\_height



\### table\_cells

\- id

\- table\_id

\- row\_index

\- col\_index

\- raw\_value

\- normalized\_value

\- confidence

\- bbox\_x

\- bbox\_y

\- bbox\_width

\- bbox\_height



\### templates

\- id

\- name

\- version

\- description



\### extraction\_jobs

\- id

\- document\_id

\- status

\- provider

\- error nullable



\### render\_jobs

\- id

\- document\_id

\- status

\- error nullable



\## Architecture

\- apps/web: Next.js frontend + API routes

\- apps/worker: background processing jobs

\- packages/db: Prisma schema and DB client

\- packages/shared: zod schemas and shared types

\- packages/extraction: OCR/layout provider interface + normalization logic

\- packages/rendering: overlay PDF export



\## Acceptance criteria

\- User can upload a PDF

\- Extraction returns structured test data

\- User can edit extracted fields

\- Exported PDF contains updated values in the right positions

\- Build and tests pass

