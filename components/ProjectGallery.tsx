'use client'; // 🌟 告訴 Next.js 這是客戶端組件

import { useState } from 'react';
const GitHubLink = ({ href }: { href: string }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="inline-block opacity-70 hover:opacity-100 text-white hover:text-zinc-800 transition-all transform hover:scale-110"
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

// 定義這個組件可以接收哪些參數
interface ProjectGalleryProps {
  title: string;
  description: string;
  points: string[];
  images: string[];
  github: string;
  tags?: string[]; // 加個問號代表這是可選的（Optional）
}


export default function ProjectGallery({ title, description, points, images, github, tags}: ProjectGalleryProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };
  return (
    <section className="max-w-5xl mx-auto my-20 w-full px-4 relative z-[60]">
      {/* 左右佈局容器 */}
      <div className="flex flex-col lg:flex-row gap-10 items-center bg-black/40 backdrop-blur-xl rounded-2xl border border-zinc-800 overflow-hidden p-8 shadow-2xl">
        <GitHubLink href={github}></GitHubLink>
        {/* 左側文字區塊 */}
        <div className="flex-1 space-y-4">
          <h2 className="text-3xl font-bold text-white tracking-tight">{title}</h2>
          <div className="flex gap-2">
            {tags?.map((tag, index) => (
                <span className="px-2 py-1 bg-zinc-800 text-zinc-400 text-xs rounded">{tag}</span>
            ))}
          </div>
          <p className="text-zinc-300 leading-relaxed">
            {description}
          </p>
          <ul className="text-zinc-400 text-sm space-y-2">
            {points?.map((point, index) => (
                <li>{point}</li>
            ))}
          </ul>
        </div>

        {/* 右側圖片換頁區塊 */}
        <div className="flex-1 relative group w-full aspect-video rounded-xl overflow-hidden shadow-lg border border-zinc-700 bg-zinc-900">
            {/* 圖片 - 加入 pointer-events-none 防止拖曳干擾 */}
            <img 
                key={currentIndex} // 加上 key 可以讓切換時有重新渲染的感覺
                src={images[currentIndex]} 
                alt="Project Screenshot" 
                className="w-full h-full object-cover transition-opacity duration-500 pointer-events-none"
            />

            {/* 切換按鈕 - 加上 z-10 確保在最前面，type="button" 防止意外提交 */}
            <button 
                type="button"
                onClick={(e) => {
                e.stopPropagation(); // 防止事件冒泡
                prevSlide();
                }}
                className="absolute z-50 left-2 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-white text-white hover:text-black p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all cursor-pointer"
            >
                ←
            </button>
            
            <button 
                type="button"
                onClick={(e) => {
                e.stopPropagation();
                nextSlide();
                }}
                style={{ zIndex: 3 }}
                className="absolute z-50 right-2 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-white text-white hover:text-black p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all cursor-pointer"
            >
                →
            </button>

          {/* 頁碼指示器 */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, index) => (
              <div 
                key={index}
                className={`h-1.5 w-1.5 rounded-full transition-all ${index === currentIndex ? 'bg-white w-4' : 'bg-white/30'}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}