import { z } from 'zod';

export const fieldTypeSchema = z.enum(['text', 'checkbox', 'date', 'number', 'textarea']);

export const boundingBoxSchema = z.object({
  x: z.number().nonnegative(),
  y: z.number().nonnegative(),
  width: z.number().positive(),
  height: z.number().positive()
});

export const extractedFieldSchema = z.object({
  id: z.string(),
  label: z.string(),
  rawValue: z.string(),
  normalizedValue: z.string(),
  fieldType: fieldTypeSchema,
  confidence: z.number().min(0).max(1),
  bbox: boundingBoxSchema
});

export const extractedDocumentSchema = z.object({
  documentId: z.string(),
  pages: z.array(
    z.object({
      pageNumber: z.number().int().min(1),
      width: z.number().positive(),
      height: z.number().positive(),
      fields: z.array(extractedFieldSchema)
    })
  )
});

export type ExtractedField = z.infer<typeof extractedFieldSchema>;
export type ExtractedDocument = z.infer<typeof extractedDocumentSchema>;
