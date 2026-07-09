import React from 'react';
import { motion } from 'framer-motion';
import { Interactive3DMockup } from '../components/Interactive3DMockup';
import type { Page } from '../types';

interface HomeProps {
  setCurrentPage: (page: Page) => void;
}

export const Home: React.FC<HomeProps> = ({ setCurrentPage }) => {
  // Magnetic button helpers
  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>, intensity = 0.15) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * intensity}px, ${y * intensity}px)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.transform = 'translate(0px, 0px)';
  };

  return (
    <div className="w-full relative px-6 md:px-12 max-w-7xl mx-auto pb-24 overflow-hidden">
      {/* Hero Section */}
      <section className="min-h-[70vh] flex flex-col-reverse lg:flex-row items-center justify-between gap-12 py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', stiffness: 90, damping: 20 }}
          className="flex-1 text-left flex flex-col items-start"
        >
          <span className="font-mono text-xs text-[#bd00ff] tracking-[0.25em] uppercase mb-4 pl-4 relative">
            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#bd00ff] animate-ping" />
            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#bd00ff]" />
            Viewport Matrix
          </span>
          <h1 className="font-sora text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 drop-shadow-2xl">
            Design the <span className="text-[#00f0ff]">Invisible</span>.<br />
            Build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#bd00ff]">Impossible</span>.
          </h1>
          <p className="font-geist text-base md:text-lg text-[#b9cacb] max-w-xl mb-10 leading-relaxed">
            Nexus 3D is a premier spatial computing and 3D design studio crafting weightless, sophisticated digital experiences for forward-thinking enterprises.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button
              onClick={() => setCurrentPage('portfolio')}
              onMouseMove={(e) => handleMouseMove(e, 0.2)}
              onMouseLeave={handleMouseLeave}
              className="bg-[#00f0ff] hover:bg-[#00dbe9] text-[#00363a] font-mono text-xs uppercase tracking-wider font-extrabold px-8 py-4 rounded-full shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] transition-all duration-300 cursor-pointer"
            >
              Explore Exhibition
            </button>
            <button
              onClick={() => setCurrentPage('process')}
              onMouseMove={(e) => handleMouseMove(e, 0.15)}
              onMouseLeave={handleMouseLeave}
              className="glass-panel hover:bg-white/10 text-[#e5e1e4] font-mono text-xs uppercase tracking-wider font-bold px-8 py-4 rounded-full border border-white/15 hover:border-[#00f0ff]/30 transition-all duration-300 cursor-pointer"
            >
              Enter The Lab
            </button>
          </div>
        </motion.div>

        {/* 3D Mockup Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 90, damping: 20, delay: 0.2 }}
          className="flex-1 flex justify-center items-center"
        >
          <Interactive3DMockup />
        </motion.div>
      </section>

      {/* Bento Grid Showcase */}
      <section className="py-20 border-t border-white/5 relative">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
          <div>
            <span className="font-mono text-xs text-[#bd00ff] tracking-[0.2em] uppercase mb-2 block">
              Core Capabilities
            </span>
            <h2 className="font-sora text-3xl md:text-4xl font-semibold text-[#e5e1e4] tracking-tight">
              Spatial Expertise
            </h2>
          </div>
          <p className="font-geist text-sm text-[#b9cacb] max-w-sm">
            We operate at the intersection of high-fidelity real-time graphics, physical simulation, and weightless design.
          </p>
        </div>

        {/* Asymmetrical 4-Column Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
          {/* Card 1: Large (Spans 8 columns, 2 rows on desktop) */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            className="md:col-span-8 md:row-span-2 glass-card rounded-3xl p-8 flex flex-col justify-end relative overflow-hidden group"
          >
            {/* Volumetric background representation */}
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-50 transition-opacity duration-500 mix-blend-luminosity group-hover:mix-blend-normal"
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDjkZmdU6JuWWNhH88sQgcVgtjUn0svpz2IsGb_4qhGaT9fIcsoep4FYHb8bZLGDvNy7zcnN0lR0srBmC1nLm9cj1Sh5KGrPpeQR3MTmvNdOaiFB797juZ2kOF7gXSBB3H2mdKq0bAK5QieO-W0OGw6FBFvFzci1h8aS1d-sm-tckIrPACwvEZVA3RANLQYpUGBV68YzEKQrUUlBwiD9yFcVgrj4e08Nog1jmOJj8tVNtdNpyZ7wFP5MQ')`
              }}
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#131315]/90 via-[#131315]/40 to-transparent z-0 pointer-events-none" />
            
            <div className="relative z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <span className="material-symbols-outlined text-[#00f0ff] text-4xl mb-4 opacity-80 block select-none">
                view_in_ar
              </span>
              <h3 className="font-sora text-2xl md:text-3xl font-semibold text-[#e5e1e4] mb-3">
                Immersive Environments
              </h3>
              <p className="font-geist text-[#b9cacb] max-w-md text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 leading-relaxed">
                We architect fully interactive, physics-based 3D worlds that blur the line between digital and physical reality. Crafted for spatial compute systems.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Small (Spans 4 columns on desktop) */}
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            className="md:col-span-4 glass-card rounded-3xl p-8 flex flex-col justify-between group"
          >
            <div className="flex justify-between items-start">
              <span className="material-symbols-outlined text-[#bd00ff] text-4xl select-none">
                animation
              </span>
              <span className="font-mono text-[10px] text-white/40 border border-white/10 px-2 py-0.5 rounded">
                SIMULATION
              </span>
            </div>
            
            <div>
              <h3 className="font-sora text-xl font-semibold text-[#e5e1e4] mb-2">
                Motion Design
              </h3>
              <p className="font-geist text-xs text-[#b9cacb] leading-relaxed">
                Fluid, physics-defying animations that command visual attention and define cinematic depth.
              </p>
            </div>

            <div className="flex justify-end mt-4">
              <button 
                onClick={() => setCurrentPage('portfolio')}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 group-hover:text-[#bd00ff] group-hover:border-[#bd00ff]/30 transition-all cursor-pointer"
              >
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </motion.div>

          {/* Card 3: Small (Spans 4 columns on desktop) */}
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="md:col-span-4 glass-card rounded-3xl p-8 flex flex-col justify-end relative overflow-hidden group"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-30 transition-opacity duration-500 mix-blend-luminosity group-hover:mix-blend-normal"
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuD35NmDdgH1lGeV-EDoJkKHGltQc47gyiN7n4NLOKdR6L6D4PTA566HdSrBt_ZMPkPNVk-SxqSa24uWPouIyOrSOaNJcs5GEClpZHRREwdGKErZD5-p3rCnDfDVf_UnwrNBnNLXNKQtCfdabIH17wcX9hQDmAuhNMkn_9Dw2QqWH7qROrpi-ODTjMSFv5d006wWiz3zt3_Nff9WW-ECtP1i2tmTNkToa3Fo2HM95rckvIKUt5e-NcHkXA')`
              }}
            />
            <div className="absolute inset-0 bg-surface/70 backdrop-blur-sm group-hover:backdrop-blur-0 transition-all duration-500" />
            
            <div className="relative z-10">
              <span className="material-symbols-outlined text-[#00f0ff] text-3xl mb-4 block select-none">
                token
              </span>
              <h3 className="font-sora text-xl font-semibold text-[#e5e1e4] mb-2">
                Architectural Viz
              </h3>
              <p className="font-geist text-xs text-[#b9cacb] leading-relaxed">
                Turning blueprint matrices into breathtaking photorealistic spaces with dynamic illumination.
              </p>
            </div>
          </motion.div>

          {/* Card 4: Wide CTA (Spans 12 columns, 1 row on desktop) */}
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
            className="md:col-span-12 glass-card rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="max-w-xl text-center md:text-left">
              <h3 className="font-sora text-2xl font-bold text-[#e5e1e4] mb-2">
                Ready to shape the invisible?
              </h3>
              <p className="font-geist text-sm text-[#b9cacb]">
                Let's discuss how our spatial compute pipeline can elevate your product or creative assets.
              </p>
            </div>

            <button
              onClick={() => setCurrentPage('budget')}
              onMouseMove={(e) => handleMouseMove(e, 0.2)}
              onMouseLeave={handleMouseLeave}
              className="bg-transparent hover:bg-[#00f0ff]/10 text-[#00f0ff] border border-[#00f0ff]/50 px-8 py-4 rounded-full font-mono text-xs uppercase tracking-wider font-extrabold shadow-[0_0_15px_rgba(0,240,255,0.1)] hover:shadow-[0_0_25px_rgba(0,240,255,0.3)] transition-all duration-300 cursor-pointer active:scale-95 whitespace-nowrap"
            >
              Contact Studio
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
