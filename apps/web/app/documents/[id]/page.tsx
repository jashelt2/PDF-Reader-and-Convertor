import { MockExtractionProvider, runExtraction } from '@pdf/extraction';

export default async function DocumentDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const extracted = await runExtraction(new MockExtractionProvider(), {
    documentId: id,
    filePath: `/tmp/${id}.pdf`
  });

  return (
    <main>
      <h2>Review Document: {id}</h2>
      <p>Editable extracted fields (MVP mock data):</p>
      {extracted.pages.map((page) => (
        <section key={page.pageNumber} style={{ marginBottom: '1rem' }}>
          <h3>Page {page.pageNumber}</h3>
          {page.fields.map((field) => (
            <label key={field.id} style={{ display: 'block', marginBottom: '0.75rem' }}>
              {field.label}
              <input defaultValue={field.normalizedValue} style={{ marginLeft: '0.75rem' }} />
            </label>
          ))}
        </section>
      ))}
    </main>
  );
}
