import { MockExtractionProvider, runExtraction } from '@pdf/extraction';
import { exportOverlayPdf } from '@pdf/rendering';

async function main() {
  const provider = new MockExtractionProvider();
  const extracted = await runExtraction(provider, {
    documentId: 'doc_worker_demo',
    filePath: '/tmp/demo.pdf'
  });

  const result = await exportOverlayPdf({
    document: extracted,
    basePdfPath: '/tmp/demo.pdf',
    outputPath: '/tmp/demo-export.pdf'
  });

  console.log(`Worker completed export plan with ${result.operations.length} operations.`);
}

main().catch((error) => {
  console.error('Worker failed', error);
  process.exit(1);
});
