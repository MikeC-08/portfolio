const fs = require('node:fs');
const path = require('node:path');

const reactPdfDirectory = path.dirname(require.resolve('react-pdf'));
const pdfjsDirectory = path.dirname(
  require.resolve('pdfjs-dist/package.json', {
    paths: [reactPdfDirectory],
  }),
);

fs.mkdirSync('public/pdfjs', { recursive: true });
fs.copyFileSync(
  path.join(pdfjsDirectory, 'build/pdf.worker.min.mjs'),
  'public/pdfjs/pdf.worker.min.mjs',
);
for (const directory of ['cmaps', 'standard_fonts', 'wasm']) {
  fs.cpSync(
    path.join(pdfjsDirectory, directory),
    path.join('public/pdfjs', directory),
    { recursive: true },
  );
}