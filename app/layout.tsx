import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import bg from '../assets/images/welcome-background.jpg'
import "./globals.css";
import Link from 'next/link';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: '%s | CHANMAN.',
    default: 'CHANMAN.', 
  },
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="preload" href={bg.src} as="image" />
      </head>
      <body className="min-h-full flex flex-col " >
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${bg.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          // 🌟 關鍵：只對這一層進行模糊
          filter: 'blur(10px)', 
          // 🌟 關鍵：模糊通常會導致邊緣出現白邊，需要稍微放大一點把白邊藏在 overflow:hidden 之外
          transform: 'scale(1.1)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      ></div>

        
        <nav className="fixed top-0 left-0 z-50 w-full border-b border-black/10 bg-black/20 backdrop-blur-md">
          <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-8">
            {/* 左側 Logo 或 名字 */}
            <div className="text-xl font-bold tracking-tighter text-white">
              CHANMAN.
            </div>

            {/* 右側 導航連結 */}
            <div className="flex gap-6 text-sm font-medium text-white/80 ">
              <Link href="./#home" className="cursor-pointer hover:text-white transition-colors ">Home</Link>
              <Link href="./#aboutme" className="cursor-pointer hover:text-white transition-colors hidden sm:block">About Me</Link>
              <Link href="./#portfolio" className="cursor-pointer hover:text-white transition-colors hidden sm:block">Portfolio</Link>
              <Link href="/resume" className="cursor-pointer hover:text-white transition-colors">Resume</Link>
            </div>
          </div>
        </nav>
        {children}
        <p className="fixed bottom-2 right-2 z-50 text-xs opacity-100 text-zinc-500" style={{ zIndex: 2 }}>
          Background Photo by <a href="https://unsplash.com/@naletu?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Natalya Letunova</a> on <a href="https://unsplash.com/photos/aerial-photography-of-concrete-city-buildings-lZXyGjsRnP0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
        </p>
      </body>
    </html>
  );
}
