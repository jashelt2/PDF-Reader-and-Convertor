import { describe, expect, it } from 'vitest';
import { MockExtractionProvider, runExtraction } from '../src/index';

describe('MockExtractionProvider', () => {
  it('returns validated fixture data for a document', async () => {
    const provider = new MockExtractionProvider();
    const result = await runExtraction(provider, {
      documentId: 'doc_abc123',
      filePath: '/tmp/sample.pdf'
    });

    expect(result.documentId).toBe('doc_abc123');
    expect(result.pages[0]?.fields.length).toBeGreaterThan(0);
    expect(result.pages[0]?.fields[0]?.label).toBe('Patient Name');
  });
});
