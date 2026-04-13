export default function UploadPage() {
  return (
    <main>
      <h2>Upload PDF</h2>
      <p>MVP upload form (stubbed server handling).</p>
      <form>
        <input type="file" accept="application/pdf" />
        <button type="submit" style={{ marginLeft: '1rem' }}>
          Upload
        </button>
      </form>
    </main>
  );
}
