import { describe, expect, it } from 'vitest';
import { mockExtractedDocumentFixture } from '@pdf/extraction';
import { buildOverlayOperations, exportOverlayPdf } from '../src/index';

describe('rendering overlay', () => {
  it('builds operations from extracted fields', () => {
    const operations = buildOverlayOperations(mockExtractedDocumentFixture);
    expect(operations.length).toBe(2);
    expect(operations[0]?.text).toBe('Jane Doe');
  });

  it('returns an export plan for overlay pdf', async () => {
    const result = await exportOverlayPdf({
      document: mockExtractedDocumentFixture,
      basePdfPath: '/tmp/original.pdf',
      outputPath: '/tmp/exported.pdf'
    });

    expect(result.outputPath).toBe('/tmp/exported.pdf');
    expect(result.operations[1]?.pageNumber).toBe(1);
  });
});
