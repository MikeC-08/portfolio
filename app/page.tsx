import Image from "next/image";
import { Metadata } from 'next';
import avatar from '@/assets/images/Avatar.png'
import real_avatar from '@/assets/images/Avatar_real.png'
import Link from 'next/link';
import clientPromise from "@/lib/mongodb";
import ProjectGallery from '@/components/ProjectGallery';
import Rag_1_Img from '@/assets/images/portfolio/Rag_1.png';
import Rag_2_Img from '@/assets/images/portfolio/Rag_2.png';
import BIT_1_Img from '@/assets/images/portfolio/BIT_1.png';
import BIT_2_Img from '@/assets/images/portfolio/BIT_2.png';
import BIT_3_Img from '@/assets/images/portfolio/BIT_3.png';
import WF_1_Img from '@/assets/images/portfolio/WF_1.png';
import WF_2_Img from '@/assets/images/portfolio/WF_2.png';
import GS_1_Img from '@/assets/images/portfolio/GS_1.png';
import GS_2_Img from '@/assets/images/portfolio/GS_2.png';
import GS_3_Img from '@/assets/images/portfolio/GS_3.png';
import GS_4_Img from '@/assets/images/portfolio/GS_4.png';
import GS_5_Img from '@/assets/images/portfolio/GS_5.png';


export const metadata: Metadata = {
  title: 'HOME | CHANMAN.',
};

async function getProjects() {
  const client = await clientPromise;
// 1. 指定 Database 名稱為 "Career"
  const db = client.db("Career"); 
  
  // 2. 指定 Collection 名稱為 "Projects" (注意首字母大寫)
  // 3. 使用 .find({}).toArray() 抓取所有資料
  const data = await db.collection("Projects").find({}).toArray();
  // console.log(data)
  
// 4. 格式化資料，將 MongoDB 的 _id (ObjectId) 轉為字串
  return data.map(item => ({
    ...item,
    _id: item._id.toString(),
  })) as any[];
}

export default async function Home({searchParams}: {searchParams: { view?: string } }) {

  return (
    
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
      <main className="flex flex-1 w-full max-w-4xl flex-col items-center justify-center gap-4" style={{ zIndex: 2 }}>
        <div className="flex min-h-screen flex-col items-center justify-center" id="home">
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-semibold tracking-tight text-zinc-50 text-center">
            CHANMAN.
          </h1>
          <div className="flex flex-col gap-4 text-base font-medium md:flex-row">
            <Link
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#ccc] md:w-[158px]"
              href="#aboutme"
              target=""
              rel="noopener noreferrer"
            >
              <Image
                className="dark:invert"
                src="/vercel.svg"
                alt="Vercel logomark"
                width={16}
                height={16}
              />
              About Me
            </Link>
            <Link
              className="flex h-12 w-full items-center justify-center rounded-full border border-solid px-5 transition-colors hover:border-transparent border-white/[.145] hover:bg-[#1a1a1a] md:w-[158px]"
              href="/#portfolio"
              rel="noopener noreferrer"
            >
              Portfolio
            </Link>
          </div>
        </div>
        
        {/* About Me */}
        <div className="flex flex-col flex-1 items-center justify-center  font-sans min-h-screen sm:flex-row" id="aboutme">
          <div className="flex flex-col items-center gap-6 py-20">
            {/* 1. 頭像容器 - 保持原本的 Hover 切換邏輯 */}
            <div className="group relative w-48 h-48 rounded-full border-4 border-white/30 overflow-hidden shadow-2xl">
              {/* 底層：真人照片 */}
              <img 
                src={real_avatar.src} 
                className="absolute inset-0 w-full h-full object-cover" 
                alt="Real Me"
              />

              {/* 上層：插畫頭像 */}
              <img 
                src={avatar.src} 
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out group-hover:opacity-0" 
                alt="Avatar"
              />
            </div>

            {/* 2. Tag 標籤組 - 放在頭像正下方 */}
            <div className="flex flex-wrap justify-center gap-2 text-sm font-medium text-zinc-300 ">
              <span className="px-2 py-1 bg-zinc-800 rounded transition-colors hover:bg-zinc-700">
                CS Graduate
              </span>
              <span className="px-2 py-1 bg-zinc-800 rounded transition-colors hover:bg-zinc-700">
                Python & Automation
              </span>
              <span className="px-2 py-1 bg-zinc-800 rounded transition-colors hover:bg-zinc-700">
                AI-Driven Builder
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            {/* 上半部：標題與頭銜 */}
            <div className="flex flex-col items-center gap-4 text-center sm:items-start sm:text-left">
              <h1 className="text-2xl font-bold tracking-tight text-zinc-200 sm:text-5xl">
                About Me
              </h1>
            </div>

            {/* 下半部：自我介紹本文 */}
            <div className="max-w-prose space-y-5 text-base leading-relaxed text-zinc-300  sm:text-lg sm:leading-8 px-6 sm:px-0 text-left">
              <p>Hi, I'm <span className="font-bold">Chan Man Kit</span>—better known as <span className="font-bold">Chanman.</span></p>
              <p>A <span className="font-bold">Computer Science</span> graduate with a solid foundation in programming. </p>
              <p>
                I am passionate about using <span className="font-bold">Python</span>-driven automation which focused on building functional tools that solve real-world problems.
              </p>
              <p>
                Currently actively exploring the <span className="font-bold">React/Next.js</span> ecosystem, with the goal of becoming a <span className="font-bold">full-stack</span> developer capable of connecting AI models with modern front-end interfaces.
              </p>
            </div>
          </div>
      </div>
      {/* Portfolio */}

      <div className="pt-30" id="portfolio">
              <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-zinc-50 text-center">
                Portfolio
              </h1>
      <ProjectGallery title="Gangster Survivor"
                      description="3D Survivor-like Game Project" 
                      points={["• Programmed core gameplay loops, weapon progression trees, and shop subsystems entirely through scalable Unreal Blueprints.", 
                               "• Managed feature branches and resolved complex binary asset conflicts utilizing Git version control."]} 
                      images={[GS_1_Img.src,GS_2_Img.src,GS_3_Img.src,GS_4_Img.src,GS_5_Img.src]} 
                      tags={["Unreal Engine", "Game Development"]}
                      github='https://github.com/MikeC-08/RAG'/>
      <ProjectGallery title="BIT"
                      description="Decentralized Game Asset & NFT Trading Platform (Graduation Project)" 
                      points={["• Architected a Web3 marketplace facilitating direct peer-to-peer (P2P) on-chain interactions via client-side JavaScript, ensuring trustless execution without server mediation.",
                               "• Deployed custom smart contracts (ERC-721/1155) using IPFS for immutable metadata storage, securing user asset ownership independently of game server lifecycles.", "• Built a Python Flask prototype server to demonstrate cross-platform game utility and sync asset validation."]} 
                      images={[BIT_1_Img.src, BIT_2_Img.src, BIT_3_Img.src]} 
                      tags={["Solidity", "Block Chain", "NFT-721", "IPFS"]}
                      github='https://github.com/MikeC-08/BIT'/>
      <ProjectGallery title="RAG"
                      description="Dynamic Document AI Engine" 
                      points={["• Retrieval-Augmented Generation (RAG) vector database technique",
                               "• Engineered a flexible RAG prototype enabling arbitrary raw document injection and dynamic text segmentation using LangChain pipelines over a local FAISS vector database.", 
                               "• Integrated the bce-embedding-base_v1 model for semantic search indexing, streaming contextual data into Large Language Models (LLMs) to enhance query accuracy."]} 
                      images={[Rag_1_Img.src, Rag_2_Img.src]} 
                      tags={["Python", "RAG", "Vector Database", "AI", "LLM"]}
                      github='https://github.com/MikeC-08/WF-Tradeable-items-Price-Checker'/>
      <ProjectGallery title="WF-TRADEABLE-ITEMS-PRICE-CHECKER"
                      description="Real-time In-Game Utility & OCR Data Aggregator" 
                      points={["• Developed a non-blocking asynchronous Windows desktop utility integrating Win32 API for active process monitoring, UI window injection, and event-driven automation.", 
                               "• Implemented local OCR text extraction using PaddleOCR to scan game-screen regions dynamically without freezing or blocking the host process thread."
                      ]} 
                      images={[WF_1_Img.src, WF_2_Img.src]} 
                      tags={["Python", "PySide6", "GUI", "OCR"]}
                      github='https://github.com/MikeC-08/GangsterSurvivor'/>


      </div>
      <a 
        href="/resume" 
        // download="Resume-Chan_Man_Kit_.pdf" // 這裡設定下載後的檔案名稱
        className="inline-flex items-end mb-10 px-6 py-3 bg-zinc-600 hover:bg-zinc-700 text-white rounded-lg transition-all flex items-center gap-2 w-fit"
      >

        <span className="leading-none">Check out my Resume</span>
      </a>

      </main>
      
    </div>
  );
}
