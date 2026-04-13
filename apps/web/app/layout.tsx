import type { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: '2rem' }}>
        <header style={{ marginBottom: '1.5rem' }}>
          <h1>PDF to Database Editor (MVP)</h1>
          <nav style={{ display: 'flex', gap: '1rem' }}>
            <a href="/upload">Upload</a>
            <a href="/dashboard">Dashboard</a>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
