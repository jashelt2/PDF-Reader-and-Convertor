import type { ExtractedDocument } from '@pdf/shared';

export interface OverlayOperation {
  pageNumber: number;
  text: string;
  x: number;
  y: number;
}

export interface RenderResult {
  outputPath: string;
  operations: OverlayOperation[];
}

export function buildOverlayOperations(document: ExtractedDocument): OverlayOperation[] {
  return document.pages.flatMap((page) =>
    page.fields.map((field) => ({
      pageNumber: page.pageNumber,
      text: field.normalizedValue,
      x: field.bbox.x,
      y: field.bbox.y
    }))
  );
}

export async function exportOverlayPdf(input: {
  document: ExtractedDocument;
  basePdfPath: string;
  outputPath: string;
}): Promise<RenderResult> {
  const operations = buildOverlayOperations(input.document);
  // MVP stub: actual PDF writing is deferred; returning operation plan for worker execution.
  return { outputPath: input.outputPath, operations };
}
