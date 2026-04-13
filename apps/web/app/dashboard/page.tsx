const mockDocuments = [
  { id: 'doc_001', filename: 'intake-form.pdf', status: 'EXTRACTED' },
  { id: 'doc_002', filename: 'claim-form.pdf', status: 'REVIEWED' }
];

export default function DashboardPage() {
  return (
    <main>
      <h2>Dashboard</h2>
      <p>Recent documents:</p>
      <ul>
        {mockDocuments.map((doc) => (
          <li key={doc.id}>
            <a href={`/documents/${doc.id}`}>{doc.filename}</a> - {doc.status}
          </li>
        ))}
      </ul>
    </main>
  );
}
