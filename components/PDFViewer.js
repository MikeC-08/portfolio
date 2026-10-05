'use client';

import dynamic from 'next/dynamic';

const PDFViewerClient = dynamic(() => import('./PDFViewerClient'), {
  ssr: false,
  loading: () => <p>Loading viewer…</p>,
});

export default function PDFViewer() {
  return <PDFViewerClient />;
}