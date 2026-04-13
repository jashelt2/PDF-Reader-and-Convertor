import type { ExtractedDocument } from '@pdf/shared';

export const mockExtractedDocumentFixture: ExtractedDocument = {
  documentId: 'doc_fixture_001',
  pages: [
    {
      pageNumber: 1,
      width: 612,
      height: 792,
      fields: [
        {
          id: 'field_1',
          label: 'Patient Name',
          rawValue: 'Jane Doe',
          normalizedValue: 'Jane Doe',
          fieldType: 'text',
          confidence: 0.98,
          bbox: { x: 120, y: 150, width: 180, height: 16 }
        },
        {
          id: 'field_2',
          label: 'Date of Birth',
          rawValue: '03/11/1990',
          normalizedValue: '1990-03-11',
          fieldType: 'date',
          confidence: 0.93,
          bbox: { x: 120, y: 180, width: 120, height: 16 }
        }
      ]
    }
  ]
};
