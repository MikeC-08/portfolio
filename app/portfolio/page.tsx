import ProjectGallery from '@/components/ProjectGallery';
import Rag_1_Img from '@/assets/images/portfolio/Rag_1.png';
import Rag_2_Img from '@/assets/images/portfolio/Rag_2.png';
import BIT_1_Img from '@/assets/images/portfolio/BIT_1.png';
import BIT_2_Img from '@/assets/images/portfolio/BIT_2.png';
import WF_1_Img from '@/assets/images/portfolio/WF_1.png';
import WF_2_Img from '@/assets/images/portfolio/WF_2.png';
import GS_1_Img from '@/assets/images/portfolio/GS_1.png';
import GS_2_Img from '@/assets/images/portfolio/GS_2.png';
import GS_3_Img from '@/assets/images/portfolio/GS_3.png';
import GS_4_Img from '@/assets/images/portfolio/GS_4.png';
import GS_5_Img from '@/assets/images/portfolio/GS_5.png';



export default function Page() {
  return (
    <main style={{ zIndex: 2 }}>
      <ProjectGallery title="BIT - Decentralized Trading" description="This is a decentralized game item trading platform. It utilizes smart contracts to ensure asset security and integrates IPFS technology to achieve permanent storage of metadata." 
                      points={["• Custom NFT Contract (ERC-721)","• Integrate MetaMask wallet connection"]} 
                      images={[BIT_1_Img.src, BIT_2_Img.src]} 
                      tags={["Solidity", "Block Chain", "NFT-721", "IPFS"]}
                      github=''/>
      <ProjectGallery title="RAG System" description="This is a Test in Retrieval-Augmented Generation (RAG) vector database technique to assist the LLM model in responding." 
                      points={["• Retrieval-Augmented Generation (RAG) vector database technique",
                               "• FAISS Embedded Model (maidalun1020/bce-embedding-base_v1)", 
                               "• Use LangChain to segment raw text data"]} 
                      images={[Rag_1_Img.src, Rag_2_Img.src]} 
                      tags={["Python", "RAG", "Vector Database", "AI", "LLM"]}
                      github=''/>
      <ProjectGallery title="WF-TRADEABLE-ITEMS-PRICE-CHECKER" description="Implement borderless, transparent tool components using PySide6 (Qt). Monitor progress in real time and use an OCR model to scan text on the program screen, connecting to public data APIs. Automate repetitive queries to the greatest extent possible." 
                      points={["• In-Game UI tools by monitoring progress in real time", 
                               "• Using PaddleOCR to scan text",
                               "• Requests data from a market site"
                      ]} 
                      images={[WF_1_Img.src, WF_2_Img.src]} 
                      tags={["Python", "PySide6", "GUI", "OCR"]}
                      github=''/>
      <ProjectGallery title="Gangster Survivor" description="3D survivor-like game project. I was responsible for the development of upgrades, weapons, and the interface." 
                      points={["• Primarily responsible for UI design, weapon system, and shop system."]} 
                      images={[GS_1_Img.src,GS_2_Img.src,GS_3_Img.src,GS_4_Img.src,GS_5_Img.src]} 
                      tags={["Unreal Engine", "Game Development"]}
                      github=''/>
    </main>
  );
}