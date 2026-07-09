import React, { useState } from 'react';
import type { Page } from '../types';
import { motion } from 'framer-motion';

interface NavigationShellProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  children: React.ReactNode;
}

export const NavigationShell: React.FC<NavigationShellProps> = ({
  currentPage,
  setCurrentPage,
  children,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [renderStatus, setRenderStatus] = useState<'idle' | 'rendering' | 'completed'>('rendering');
  const [renderNodeCount, setRenderNodeCount] = useState(4);

  // Magnetic button helpers
  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>, intensity = 0.2) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * intensity}px, ${y * intensity}px)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    e.currentTarget.style.transform = 'translate(0px, 0px)';
  };

  const navLinks: { label: string; page: Page }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Portfolio', page: 'portfolio' },
    { label: 'Studio', page: 'process' },
    { label: 'Contact', page: 'budget' },
  ];

  return (
    <div className="void-bg relative min-h-screen flex flex-col antialiased bg-[#131315] text-[#e5e1e4] selection:bg-[#00f0ff]/30 selection:text-[#00f0ff]">
      {/* Background Decorative Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] aspect-square rounded-full bg-gradient-to-br from-[#00f0ff]/10 to-transparent blur-[120px] pointer-events-none -z-10 animate-pulse duration-[10s]" />
      <div className="absolute bottom-[10%] right-[-10%] w-[50%] aspect-square rounded-full bg-gradient-to-tl from-[#bd00ff]/10 to-transparent blur-[120px] pointer-events-none -z-10" />

      {/* Floating Dock / Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 mt-4 md:mt-8 mx-auto w-[92%] max-w-7xl">
        <motion.nav 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 90, damping: 20 }}
          className="flex justify-between items-center px-6 md:px-8 py-4 bg-[#131315]/30 backdrop-blur-xl border border-white/10 rounded-full shadow-[0_8px_32px_rgba(0,240,255,0.05)]"
        >
          {/* Logo */}
          <button 
            onClick={() => { setCurrentPage('home'); setIsMobileMenuOpen(false); }}
            className="font-sora text-xl md:text-2xl font-extrabold tracking-tighter text-[#00f0ff] hover:brightness-110 transition-all cursor-pointer"
          >
            Nexus <span className="text-[#bd00ff]">3D</span>
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex space-x-1 items-center relative">
            {navLinks.map((link) => {
              const isActive = currentPage === link.page;
              return (
                <button
                  key={link.page}
                  onClick={() => setCurrentPage(link.page)}
                  onMouseMove={(e) => handleMouseMove(e, 0.15)}
                  onMouseLeave={handleMouseLeave}
                  className={`relative font-geist text-sm px-4 py-2 rounded-full cursor-pointer transition-colors duration-300 ${
                    isActive ? 'text-[#00f0ff] font-semibold' : 'text-[#b9cacb] hover:text-[#e5e1e4]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabUnderline"
                      className="absolute inset-0 bg-white/5 border border-white/10 rounded-full -z-10"
                      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
                    />
                  )}
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* Action Button */}
          <div className="hidden md:block">
            <button
              onClick={() => setCurrentPage('budget')}
              onMouseMove={(e) => handleMouseMove(e, 0.2)}
              onMouseLeave={handleMouseLeave}
              className="bg-[#00f0ff] hover:bg-[#00dbe9] text-[#00363a] font-mono text-xs uppercase tracking-wider font-extrabold px-6 py-2.5 rounded-full shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] active:scale-95 transition-all duration-300 cursor-pointer"
            >
              Start Project
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[#00f0ff] flex items-center justify-center p-1 rounded-full border border-[#00f0ff]/20 bg-[#131315]/50 active:scale-95 transition-all cursor-pointer"
          >
            <span className="material-symbols-outlined text-2xl">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </motion.nav>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-2 p-6 bg-[#131315]/90 backdrop-blur-2xl border border-white/10 rounded-2xl flex flex-col space-y-4 shadow-2xl"
          >
            {navLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => {
                  setCurrentPage(link.page);
                  setIsMobileMenuOpen(false);
                }}
                className={`font-geist text-left text-lg py-2 border-b border-white/5 cursor-pointer ${
                  currentPage === link.page ? 'text-[#00f0ff] font-bold' : 'text-[#b9cacb]'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => {
                setCurrentPage('budget');
                setIsMobileMenuOpen(false);
              }}
              className="w-full text-center bg-[#00f0ff] text-[#00363a] font-mono font-bold py-3 rounded-full shadow-[0_0_15px_rgba(0,240,255,0.3)] cursor-pointer"
            >
              Start Project
            </button>
          </motion.div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="flex-grow pt-28 md:pt-36 relative z-10 w-full">
        {children}
      </main>

      {/* Global Footer */}
      <footer className="relative mt-auto border-t border-white/5 bg-[#131315]/50 backdrop-blur-md z-20">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="font-sora text-lg font-bold tracking-tight text-[#e5e1e4]">
              Nexus <span className="text-[#00f0ff]">3D</span>
            </span>
            <span className="text-xs text-[#b9cacb] font-geist mt-1">
              © 2026 Nexus 3D Studio. All rights weightless.
            </span>
          </div>

          {/* Socials */}
          <div className="flex space-x-6 font-mono text-xs">
            {['Instagram', 'ArtStation', 'Behance', 'LinkedIn'].map((platform) => (
              <a
                key={platform}
                href={`#${platform.toLowerCase()}`}
                className="text-[#b9cacb] hover:text-[#bd00ff] hover:drop-shadow-[0_0_8px_rgba(236,178,255,0.8)] transition-all duration-300"
              >
                {platform}
              </a>
            ))}
          </div>

          {/* Spinning interactive status chip */}
          <button
            onClick={() => {
              // Click cycles status for interactive fun!
              if (renderStatus === 'rendering') {
                setRenderStatus('completed');
              } else if (renderStatus === 'completed') {
                setRenderStatus('idle');
              } else {
                setRenderStatus('rendering');
                setRenderNodeCount(Math.floor(Math.random() * 8) + 1);
              }
            }}
            className="group flex items-center gap-3 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#00f0ff]/30 rounded-full transition-all duration-300"
          >
            {/* Spinning/pulsing glyph */}
            <div className="relative flex items-center justify-center">
              <span 
                className={`material-symbols-outlined text-[16px] select-none ${
                  renderStatus === 'rendering' ? 'animate-spin text-[#bd00ff]' :
                  renderStatus === 'completed' ? 'text-[#00f0ff]' : 'text-[#849495]'
                }`}
                style={{ animationDuration: '3s' }}
              >
                {renderStatus === 'rendering' ? 'progress_activity' :
                 renderStatus === 'completed' ? 'check_circle' : 'motion_photos_off'}
              </span>
            </div>
            
            <div className="flex flex-col text-left font-mono text-[10px]">
              <span className="text-white/50 leading-none">STATUS</span>
              <span className={`font-bold leading-tight ${
                renderStatus === 'rendering' ? 'text-[#bd00ff]' :
                renderStatus === 'completed' ? 'text-[#00f0ff]' : 'text-[#849495]'
              }`}>
                {renderStatus === 'rendering' ? `RENDER NODE ACTIVE [x${renderNodeCount}]` :
                 renderStatus === 'completed' ? 'NODE SYNC COMPLETE' : 'NODES IDLE'}
              </span>
            </div>
          </button>
        </div>
      </footer>
    </div>
  );
};
