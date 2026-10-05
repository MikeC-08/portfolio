import { Metadata } from 'next';
import PDFViewer from '@/components/PDFViewer';

export const metadata: Metadata = {
  title: 'RESUME',
};

export default function portfolio() {

    return (
        
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">


        <section style={{ zIndex: 2 }} className="w-full max-w-4xl mx-auto mt-20 p-8 bg-zinc-900 shadow-xl rounded-lg border border-zinc-800">

            <PDFViewer />
        </section>

    </div>
    
    );
}