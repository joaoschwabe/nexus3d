import React from 'react';
import { motion } from 'framer-motion';

export const WireframeMesh: React.FC = () => {
  return (
    <div className="w-full h-80 glass-panel rounded-2xl wireframe-grid relative overflow-hidden flex items-center justify-center border border-white/10 shadow-inner">
      {/* Viewport UI overlays (camera specs, coordinate axis) */}
      <div className="absolute top-4 left-4 font-mono text-[9px] text-[#00f0ff] uppercase tracking-wider select-none flex flex-col gap-1">
        <span>CAM: PERSPECTIVE_3D</span>
        <span>GRID: 20x20m [SYNC_ACTIVE]</span>
      </div>
      
      <div className="absolute top-4 right-4 font-mono text-[9px] text-white/30 select-none">
        FPS: 60.0
      </div>

      {/* Axis Indicator in bottom corner */}
      <div className="absolute bottom-4 left-4 flex gap-3 font-mono text-[8px] select-none text-white/50">
        <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 bg-red-500 rounded-full" /> X</span>
        <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 bg-green-500 rounded-full" /> Y</span>
        <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> Z</span>
      </div>

      {/* 3D Scene Viewport */}
      <div 
        style={{ perspective: 1000, transformStyle: 'preserve-3d' }} 
        className="w-48 h-48 flex items-center justify-center"
      >
        <motion.div
          style={{ transformStyle: 'preserve-3d' }}
          animate={{
            rotateX: [0, 360],
            rotateY: [360, 0],
            rotateZ: [0, 360],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="relative w-32 h-32 flex items-center justify-center"
        >
          {/* Concentric Wireframe Ring 1 */}
          <div 
            className="absolute inset-0 border border-[#00f0ff]/50 rounded-lg"
            style={{ transform: 'rotateX(45deg) rotateY(45deg)' }}
          />

          {/* Concentric Wireframe Ring 2 */}
          <div 
            className="absolute inset-2 border border-[#bd00ff]/50 rounded-lg"
            style={{ transform: 'rotateX(-45deg) rotateY(45deg)' }}
          />

          {/* Concentric Wireframe Ring 3 */}
          <div 
            className="absolute inset-4 border border-[#faf3ff]/30 rounded-full border-dashed"
            style={{ transform: 'rotateZ(90deg)' }}
          />

          {/* Center Point Node */}
          <motion.div 
            animate={{ scale: [0.8, 1.2, 0.8] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="w-3 h-3 bg-[#00f0ff] rounded-full shadow-[0_0_12px_#00f0ff]" 
          />

          {/* 3D Diagonal lines mimicking vertices */}
          <div className="absolute w-full h-[1px] bg-white/10" style={{ transform: 'rotateX(90deg)' }} />
          <div className="absolute h-full w-[1px] bg-white/10" style={{ transform: 'rotateY(90deg)' }} />
        </motion.div>
      </div>
    </div>
  );
};
