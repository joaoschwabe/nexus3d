import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const TiltCard: React.FC<TiltCardProps> = ({ children, className = '', onClick }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Motion values for x/y mouse position relative to card dimensions (-0.5 to 0.5)
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  // Springs to smooth out mouse movements
  const springConfig = { stiffness: 120, damping: 20 };
  const rotateX = useSpring(useTransform(y, [0, 1], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(x, [0, 1], [-8, 8]), springConfig);
  
  // Glowing shine overlay gradient coordinates
  const shineX = useTransform(x, [0, 1], ['0%', '100%']);
  const shineY = useTransform(y, [0, 1], ['0%', '100%']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Standardize coordinates to [0, 1]
    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const handleMouseLeave = () => {
    // Reset to center
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{ perspective: 1000, transformStyle: 'preserve-3d' }}
      className={`relative cursor-pointer transition-all duration-300 ${className}`}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="w-full h-full glass-card rounded-2xl overflow-hidden relative flex flex-col justify-end p-6 md:p-8"
      >
        {/* Shine Overlay Effect */}
        <motion.div
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
          style={{
            background: useTransform(
              [shineX, shineY],
              ([sx, sy]) => `radial-gradient(circle at ${sx} ${sy}, rgba(255, 255, 255, 0.12) 0%, transparent 60%)`
            ),
          }}
        />
        {children}
      </motion.div>
    </div>
  );
};
