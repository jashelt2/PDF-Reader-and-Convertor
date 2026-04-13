import { extractedDocumentSchema, type ExtractedDocument } from '@pdf/shared';
import { mockExtractedDocumentFixture } from './fixtures';

export interface ExtractionProvider {
  name: string;
  extract(input: { documentId: string; filePath: string }): Promise<ExtractedDocument>;
}

export class MockExtractionProvider implements ExtractionProvider {
  name = 'mock-provider';

  async extract(input: { documentId: string; filePath: string }): Promise<ExtractedDocument> {
    const candidate: ExtractedDocument = {
      ...mockExtractedDocumentFixture,
      documentId: input.documentId
    };

    return extractedDocumentSchema.parse(candidate);
  }
}

export async function runExtraction(provider: ExtractionProvider, input: { documentId: string; filePath: string }) {
  return provider.extract(input);
}

export { mockExtractedDocumentFixture } from './fixtures';
