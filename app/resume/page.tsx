import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'RESUME',
};
const GitHubLink = ({ href }: { href: string }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="inline-block opacity-70 hover:opacity-100 hover:text-white transition-all transform hover:scale-110"
    title="View Source on GitHub"
  >
    <svg 
      height="18" 
      width="18" 
      viewBox="0 0 16 16" 
      fill="currentColor"
    >
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  </a>
);

export default function portfolio() {

    return (
        
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">


        <section style={{ zIndex: 2 }} className="w-full max-w-4xl mx-auto mt-20 p-8 bg-zinc-900 shadow-xl rounded-lg border border-zinc-800">
          <div className="flex flex-wrap items-baseline gap-4">
            <h1 className="text-4xl xl:text-6xl text-zinc-200">CHAN MAN KIT</h1>
            <a 
              href="/docs/Resume.pdf" 
              download="Resume-Chan_Man_Kit_.pdf" // 這裡設定下載後的檔案名稱
              className="relative inline-flex items-end bottom-1 xl:bottom-3 px-6 py-2 bg-zinc-600 hover:bg-zinc-700 text-white rounded-lg transition-all flex items-center gap-2 w-fit text-md xl:text-xl xl:py-3"
            >
            <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span className="leading-none hidden sm:block">Resume</span>
            </a>
          </div>
          <span><a href="https://github.com/MikeC-08" target="_blank">GitHub</a> | <a href="https://www.linkedin.com/in/man-kit-chan-b958a3331" target="_blank">LinkedIn</a></span>
          <div className="w-full h-px bg-white/50 text-center "/>
          <h3 className="text-2xl tracking-widest">EDUCATION</h3>
          <p className="text-zinc-300">HONG KONG METROPOLITAN UNIVERSITY</p>
          <p className="text-zinc-300">Computer Science Bachelor</p>
          <h3 className="text-2xl tracking-widest">SKILLS</h3>
          <div className="space-y-2">
            {/* 每行都是一個 Grid 容器 */}
            <div className="flex flex-col sm:grid sm:grid-cols-[180px_1fr] gap-x-4 px-4">
              <p className="text-zinc-100 font-medium">Programming Languages</p>
              <p className="text-zinc-400">Python, JavaScript, Solidity, Java</p>
            </div>
            <div className="flex flex-col sm:grid sm:grid-cols-[180px_1fr] gap-x-4 px-4">
              <p className="text-zinc-100 font-medium">Libraries/Frameworks</p>
              <p className="text-zinc-400">Gradio, FAISS, FastAPI, Flask, LangChain, PaddleOCR, Next.js</p>
            </div>

            <div className="flex flex-col sm:grid sm:grid-cols-[180px_1fr] gap-x-4 px-4">
              <p className="text-zinc-100 font-medium">Tools / Platforms</p>
              <p className="text-zinc-400">Git, VS Code, Android Studio, Docker, Unreal Engine</p>
            </div>

            <div className="flex flex-col sm:grid sm:grid-cols-[180px_1fr] gap-x-4 px-4">
              <p className="text-zinc-100 font-medium">Databases</p>
              <p className="text-zinc-400">SQL, MongoDB</p>
            </div>
          </div>

          {/* Projects */}
          <h3 className="text-2xl tracking-widest">PROJECTS</h3>
          {/* BIT */}
          <div className="flex justify-between items-center w-full px-4">
            <p className="text-zinc-100 flex items-center gap-2">BIT |<GitHubLink href="https://github.com/MikeC-08/BIT" />
            </p>
            <p className="text-[10px] px-2 py-0.5 rounded-full border border-zinc-700 text-zinc-200 uppercase">Solidity, JavaScript, Python (Flask)</p>

          </div>
          <p className="text-zinc-300 font-medium px-8 py-1">Decentralized Game Asset & NFT Trading Platform (Graduation Project)</p>
          <p className="text-zinc-300 font-medium px-8 py-1">• Architected a Web3 marketplace facilitating direct peer-to-peer (P2P) on-chain interactions via client-side JavaScript, ensuring trustless execution without server mediation.</p>
          <p className="text-zinc-300 font-medium px-8 py-1">• Deployed custom smart contracts (ERC-721/1155) using IPFS for immutable metadata storage, securing user asset ownership independently of game server lifecycles.</p>
          <p className="text-zinc-300 font-medium px-8 py-1">• Built a Python Flask prototype server to demonstrate cross-platform game utility and sync asset validation.</p>
          <br></br>
          {/* WF-TRADEABLE-ITEMS-PRICE-CHECKER  */}
          <div className="flex justify-between items-center w-full px-4">
            <p className="text-zinc-100 flex items-center gap-2">WF-TRADEABLE-ITEMS-PRICE-CHECKER |<GitHubLink href="https://github.com/MikeC-08/WF-Tradeable-items-Price-Checker" /></p>
            <p className="text-[10px] px-2 py-0.5 rounded-full border border-zinc-700 text-zinc-200 uppercase">Python, Win32 API, PaddleOCR</p>

          </div>
          <p className="text-zinc-300 font-medium px-8 py-1">Real-time In-Game Utility & OCR Data Aggregator</p>
          <p className="text-zinc-300 font-medium px-8 py-1">• Developed a non-blocking asynchronous Windows desktop utility integrating Win32 API for active process monitoring, UI window injection, and event-driven automation. </p>
          <p className="text-zinc-300 font-medium px-8 py-1">• Implemented local OCR text extraction using PaddleOCR to scan game-screen regions dynamically without freezing or blocking the host process thread.</p>
          <br></br>
          {/* GANGSTERSURVIVOR */}
          <div className="flex justify-between items-center w-full px-4">
            <p className="text-zinc-100 flex items-center gap-2">Gangster Survivor |<GitHubLink href="https://github.com/MikeC-08/GangsterSurvivor"></GitHubLink></p>
            <p className="text-[10px] px-2 py-0.5 rounded-full border border-zinc-700 text-zinc-200 uppercase">Unreal Engine (Visual Blueprint)</p>

          </div>
          <p className="text-zinc-300 font-medium px-8 py-1">3D Survivor-like Game Project</p>
          <p className="text-zinc-300 font-medium px-8 py-1">• Programmed core gameplay loops, weapon progression trees, and shop subsystems entirely through scalable Unreal Blueprints.</p>
          <p className="text-zinc-300 font-medium px-8 py-1">• Managed feature branches and resolved complex binary asset conflicts utilizing Git version control.</p>
          <br></br>
          {/* RAG */}
          <div className="flex justify-between items-center w-full px-4">
            <p className="text-zinc-100 flex items-center gap-2"> RAG |<GitHubLink href="https://github.com/MikeC-08/BIT"></GitHubLink></p>
            <p className="text-[10px] px-2 py-0.5 rounded-full border border-zinc-700 text-zinc-200 uppercase">Python, LangChain, FAISS</p>

          </div>
          <p className="text-zinc-300 font-medium px-8 py-1">Dynamic Document AI Engine</p>
          <p className="text-zinc-300 font-medium px-8 py-1">• Engineered a flexible RAG prototype enabling arbitrary raw document injection and dynamic text segmentation using LangChain pipelines over a local FAISS vector database.</p>
          <p className="text-zinc-300 font-medium px-8 py-1">• Integrated the bce-embedding-base_v1 model for semantic search indexing, streaming contextual data into Large Language Models (LLMs) to enhance query accuracy.</p>

        </section>

    </div>
    
    );
}