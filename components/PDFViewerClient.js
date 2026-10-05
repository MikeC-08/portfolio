'use client';

import { useEffect, useRef, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = '/pdfjs/pdf.worker.min.mjs';

const options = {
  cMapUrl: '/pdfjs/cmaps/',
  standardFontDataUrl: '/pdfjs/standard_fonts/',
  wasmUrl: '/pdfjs/wasm/',
};

export default function PDFViewerClient() {
  const containerRef = useRef(null);
  const [width, setWidth] = useState(0);
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const observer = new ResizeObserver(([entry]) => {
      setWidth(Math.floor(entry.contentRect.width));
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section aria-label="PDF viewer">
      <nav aria-label="PDF page navigation" className='text-center'>
            <a 
              href="/docs/Resume.pdf" 
              download="Resume-Chan_Man_Kit_.pdf" 
              className="bottom-1 w-full justify-center z-50 px-6 py-2 bg-black/40 hover:bg-zinc-700/80 backdrop-blur-xl text-white rounded-lg transition-all flex items-center gap-2 text-md xl:text-xl xl:py-3"
            >
            <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span className="leading-none hidden sm:block">Download</span>
            </a>

      </nav>
      <div className='text-center' ref={containerRef} >
        
        <Document
          file="/docs/Resume.pdf"
          options={options}
          suspense={false}
          onLoadSuccess={({ numPages }) => {
            setNumPages(numPages);
            setPageNumber(1);
            setFailed(false);
          }}
          onLoadError={() => {
            setNumPages(0);
            setFailed(true);
          }}
          loading={<p>Loading document…</p>}
          error={<p role="alert">Could not load the PDF. Check its URL and permissions.</p>}
          onItemClick={({ pageNumber }) => {
            if (pageNumber) setPageNumber(pageNumber);
          }}
        >
          {width > 0 && (
            <Page
              pageNumber={pageNumber}
              width={width}
              renderTextLayer
              renderAnnotationLayer
              loading={<p>Loading page…</p>}
              error={<p role="alert">Could not render this page.</p>}
            />
          )}
          
        </Document>
        <span>
            {/* <button
                type="button"
                disabled={!numPages || pageNumber <= 1}
                onClick={() => setPageNumber((page) => Math.max(1, page - 1))}
                >
                Previous
            </button> */}

            {numPages
            ? 'Page ' + pageNumber + ' of ' + numPages
            : failed ? 'PDF unavailable.' : 'Loading PDF…'}


            {/* <button
                type="button"
                disabled={!numPages || pageNumber >= numPages}
                onClick={() =>
                    setPageNumber((page) => Math.min(numPages, page + 1))
                }
                >
                Next
            </button> */}
        </span>
      </div>
    </section>
  );
}