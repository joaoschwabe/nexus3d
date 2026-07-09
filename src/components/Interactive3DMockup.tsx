import React from 'react';
import { motion } from 'framer-motion';

export const Interactive3DMockup: React.FC = () => {
  return (
    <div className="relative w-full max-w-lg aspect-square flex items-center justify-center pointer-events-none md:pointer-events-auto">
      {/* Viewport Grid Ring Container (blueprint grid lines overlay) */}
      <div className="absolute inset-0 border border-white/5 rounded-full flex items-center justify-center overflow-hidden">
        <div className="absolute w-[80%] h-[80%] border border-dashed border-white/10 rounded-full animate-spin" style={{ animationDuration: '40s' }} />
        <div className="absolute w-[60%] h-[60%] border border-[#00f0ff]/10 rounded-full animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }} />
        <div className="absolute w-full h-[1px] bg-white/5" />
        <div className="absolute h-full w-[1px] bg-white/5" />
      </div>

      {/* Volumetric Sphere 1: Electric Blue (Primary) */}
      <motion.div
        className="absolute z-20 w-44 h-44 rounded-full"
        style={{
          background: 'radial-gradient(circle at 35% 35%, #dbfcff 0%, #00f0ff 40%, #00363a 90%)',
          boxShadow: '0 20px 50px rgba(0, 240, 255, 0.4), inset -10px -10px 30px rgba(0, 0, 0, 0.6), inset 10px 10px 20px rgba(255, 255, 255, 0.5)',
        }}
        animate={{
          y: [-25, 25, -25],
          rotate: [0, 360],
        }}
        transition={{
          y: {
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          },
          rotate: {
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          },
        }}
      />

      {/* Volumetric Ring/Donut 2: Vibrant Purple (Secondary) */}
      <motion.div
        className="absolute z-10 w-64 h-64 border-[32px] border-transparent rounded-full flex items-center justify-center"
        style={{
          boxShadow: '0 15px 40px rgba(189, 0, 255, 0.25)',
          background: 'linear-gradient(135deg, #ecb2ff, #bd00ff, #320047) padding-box, radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4), transparent) border-box',
          border: '32px solid transparent',
        }}
        animate={{
          y: [30, -30, 30],
          rotate: [0, -360],
          scale: [0.95, 1.05, 0.95],
        }}
        transition={{
          y: {
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          },
          rotate: {
            duration: 24,
            repeat: Infinity,
            ease: 'linear',
          },
          scale: {
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
      />

      {/* Volumetric Small Orb 3: Holographic Neon Teal */}
      <motion.div
        className="absolute z-30 w-16 h-16 rounded-full right-10 top-12"
        style={{
          background: 'radial-gradient(circle at 35% 35%, #ffffff 0%, #00dbe9 50%, #002022 100%)',
          boxShadow: '0 10px 25px rgba(0, 219, 233, 0.5), inset -5px -5px 12px rgba(0, 0, 0, 0.7)',
        }}
        animate={{
          y: [-40, 40, -40],
          x: [-20, 20, -20],
        }}
        transition={{
          y: {
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.5,
          },
          x: {
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
      />

      {/* Volumetric Floating Pill/Cylinder 4: Matte Silver */}
      <motion.div
        className="absolute z-0 w-12 h-36 rounded-full left-12 bottom-12"
        style={{
          background: 'linear-gradient(to bottom, #faf3ff 0%, #b9cacb 50%, #353437 100%)',
          boxShadow: '0 10px 30px rgba(0,0,0,0.4), inset -4px -4px 10px rgba(0,0,0,0.6)',
          transform: 'rotate(-45deg)',
        }}
        animate={{
          y: [20, -20, 20],
          rotate: [-35, -55, -35],
        }}
        transition={{
          y: {
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          },
          rotate: {
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
      />

      {/* Subtle Dust Particles in 3D Space */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-white/40"
          style={{
            top: `${15 + i * 14}%`,
            left: `${20 + (i % 3) * 25}%`,
            boxShadow: '0 0 8px #fff',
          }}
          animate={{
            y: [-15, 15, -15],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 4 + (i % 3),
            repeat: Infinity,
            delay: i * 0.4,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};
