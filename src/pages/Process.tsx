import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { WireframeMesh } from '../components/WireframeMesh';
import type { ProcessStep } from '../types';

const processSteps: ProcessStep[] = [
  {
    phase: '01',
    title: 'Briefing & Blueprint',
    subtitle: 'Deconstructing the vision',
    description: "We map out the conceptual geometry before a single polygon is rendered. It starts with deep immersion into the project's creative vacuum, sketching out wireframe boundaries and technical constraints.",
    icon: 'architecture',
    color: 'primary',
  },
  {
    phase: '02',
    title: 'Structural Modeling',
    subtitle: 'Building the digital skeleton',
    description: 'We construct high-fidelity polygonal meshes and establish clean topological flow. This ensures that every surface behaves naturally under lighting and maintains absolute deformation integrity.',
    icon: 'grid_view',
    color: 'secondary',
  },
  {
    phase: '03',
    title: 'Rigging & Kinetics',
    subtitle: 'Simulating physical inertia',
    description: 'Bones, custom kinematic controllers, and spring weight maps are integrated into the mesh, setting the stage for gravity-defying movement and complex character/product animation.',
    icon: 'accessibility_new',
    color: 'tertiary',
  },
  {
    phase: '04',
    title: 'Render & Refraction',
    subtitle: 'Synthesizing global illumination',
    description: 'Materials, micro-roughness, volumetric caustics, and cinematic lighting collide. The sequence is processed across our high-performance nodes to generate weightless, refractive final compositions.',
    icon: 'lightbulb',
    color: 'primary',
  },
];

const teamMembers = [
  {
    name: 'Elias Vance',
    role: 'Lead Modeler',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrqi_doauD45Bci9kgmd2IsKW4J6TkIyinPcOaiJjXHPalYty5u02xLWkA1qSgBnx8WK2vQbFFs1mGLidSHVD--oh29JZ8G-unlgnL7_hit4Bk1nBO9ZG91qra1qYxVwGcJWRBUsaHsCbv2cWwHpnST4JPCe-W2BYYSpmRtFtdNqqhXaQnDKCpPIg1q87YoE09GrkpNh4xynDiSc2YjVKqySj66UDOqLiUZuo-yPiSI7aqxsYvcx5Xsw',
    glowColor: 'hover:shadow-[0_0_30px_rgba(0,240,255,0.2)]',
    borderColor: 'group-hover:border-[#00f0ff]/30',
  },
  {
    name: 'Dr. Aris Thorne',
    role: 'Creative Director',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5JlbUHCPiKbJ8F6YmNB5lTm8EdtgAClG535ZvoCma3s5HGkxn9oVd8e3ak-EBw_Xfpmm8xNGCXoUSF2V1TG-XIHBQRJPe6-MP98T0rqmqqyhNc_MeqvC9SappUsyGFqMB8O1IEb6K0z9ls25cAnwl9IJO4OLOb-ALry809yPqXIgouvKhEqHu9SXy0XpDNGTF3e_5p6UamJJhTmRJOr89seoel81GzeSdRPwCD1iGd-vzNPe4BnwGig',
    glowColor: 'hover:shadow-[0_0_30px_rgba(189,0,255,0.2)]',
    borderColor: 'group-hover:border-[#bd00ff]/30',
  },
  {
    name: 'Kaelen Ren',
    role: 'Lighting Tech',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAz2O715fvxfUdhF6fB2gWjWDIxeH9bUrMOPvTzkFKEMB2ap5IQ2BjYV9MRVPj5xndEW2eb4HS_QhEddAm-6VEko4agWZ6o9rvE_TZ6AJ5yLzgzZ-Db2xswh6xnncIda9g8jQZalJsHUEarfTeLQzA5LA9WNlbcvqAKOLf_QBItZwS5zW9WcygMNgSvgrqUGXzk9CReNtpGiLKWyirTI0wt3MUX7dzpuIkzrfR7uzLxjmCrxEx_R9IO5Q',
    glowColor: 'hover:shadow-[0_0_30px_rgba(0,240,255,0.2)]',
    borderColor: 'group-hover:border-[#00f0ff]/30',
  },
];

export const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  // Mouse move parallax helper for team cards
  const handleParallaxMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Rotate card slightly based on cursor
    card.style.transform = `perspective(1000px) rotateX(${y * -0.06}deg) rotateY(${x * 0.06}deg) translateY(-8px)`;
  };

  const handleParallaxLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
  };

  return (
    <div className="w-full relative px-6 md:px-12 max-w-7xl mx-auto pb-24 overflow-hidden">
      {/* Page Header */}
      <motion.header
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 90, damping: 20 }}
        className="flex flex-col items-center text-center gap-6 mb-24 relative"
      >
        <span className="font-mono text-xs text-[#bd00ff] tracking-[0.25em] uppercase">
          The Laboratory
        </span>
        <h1 className="font-sora text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight max-w-4xl">
          Where Dimensions <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#bd00ff]">
            Take Shape
          </span>.
        </h1>
        <p className="font-geist text-base md:text-lg text-[#b9cacb] max-w-2xl leading-relaxed">
          A deep dive into our methodical chaos. We architect light, space, and motion to build realities that defy flat expectations.
        </p>
      </motion.header>

      {/* Viewport Simulation & Wireframe Section */}
      <section className="mb-32">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 flex flex-col items-start text-left">
            <span className="font-mono text-xs text-[#00f0ff] tracking-[0.2em] uppercase mb-3">
              Spatial Sandbox
            </span>
            <h2 className="font-sora text-3xl font-bold mb-6 text-[#e5e1e4]">
              Mesh Viewport Simulation
            </h2>
            <p className="font-geist text-sm text-[#b9cacb] leading-relaxed mb-6">
              Our creation pipeline works directly within zero-gravity grid matrices. This allows us to inspect material topology, coordinate vectors, and kinematic integrity in real-time before render execution.
            </p>
            <div className="flex gap-4">
              <span className="flex items-center gap-2 font-mono text-xs text-[#00f0ff]">
                <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-ping" />
                Viewport Online
              </span>
            </div>
          </div>
          <div className="flex-1 w-full">
            <WireframeMesh />
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-12 relative mb-32">
        <div className="text-center mb-20">
          <h2 className="font-sora text-3xl font-semibold text-[#e5e1e4]">
            The Production Pipeline
          </h2>
        </div>

        <div className="relative pl-8 md:pl-0">
          {/* Vertical central timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#00f0ff] via-[#bd00ff] to-transparent opacity-20 -translate-x-1/2 z-0" />

          {processSteps.map((step, index) => {
            const isEven = index % 2 === 0;
            const isHovered = activeStep === index;
            const glowBorder = step.color === 'primary' ? 'hover:border-[#00f0ff]/50' : 'hover:border-[#bd00ff]/50';

            return (
              <div
                key={step.phase}
                className={`relative z-10 flex flex-col md:flex-row items-center justify-between mb-24 last:mb-0`}
              >
                {/* Text Block */}
                <div className={`md:w-5/12 mb-6 md:mb-0 ${isEven ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12 md:order-2'}`}>
                  <span className="font-mono text-xs text-[#bd00ff] mb-1 block">Phase {step.phase}</span>
                  <h3 className="font-sora text-xl font-bold text-[#dbfcff] mb-3">{step.title}</h3>
                  <p className="font-geist text-xs text-[#b9cacb] leading-relaxed">{step.description}</p>
                </div>

                {/* Timeline node marker */}
                <div 
                  className={`absolute left-0 md:left-1/2 w-4 h-4 rounded-full -translate-x-1/2 border-2 bg-[#131315] z-20 transition-all duration-300 ${
                    isHovered 
                      ? 'scale-125 border-[#00f0ff] shadow-[0_0_15px_#00f0ff]' 
                      : 'border-white/20'
                  }`}
                />

                {/* Visual Preview Panel */}
                <div className={`md:w-5/12 ${isEven ? 'md:pl-12' : 'md:pr-12 md:order-1'} w-full`}>
                  <div
                    onMouseEnter={() => setActiveStep(index)}
                    onMouseLeave={() => setActiveStep(null)}
                    className={`glass-panel p-8 rounded-2xl h-56 flex flex-col items-center justify-center relative overflow-hidden group cursor-pointer transition-all duration-500 border border-white/5 ${glowBorder} ${
                      isHovered ? 'scale-[1.02] shadow-[0_10px_30px_rgba(0,0,0,0.4)]' : ''
                    }`}
                  >
                    {/* Glowing corner light leak */}
                    <div className={`absolute -top-16 -right-16 w-32 h-32 rounded-full blur-[40px] opacity-10 group-hover:opacity-30 transition-all duration-500 ${
                      step.color === 'primary' ? 'bg-[#00f0ff]' : 'bg-[#bd00ff]'
                    }`} />
                    
                    <span 
                      className={`material-symbols-outlined text-[64px] select-none transition-all duration-500 ${
                        isHovered 
                          ? 'text-[#00f0ff] scale-110 drop-shadow-[0_0_15px_rgba(0,240,255,0.4)]' 
                          : 'text-white/25'
                      }`}
                    >
                      {step.icon}
                    </span>
                    <span className="font-mono text-[10px] text-white/30 mt-4 tracking-widest uppercase">
                      {step.subtitle}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* The Architects (Team Grid with custom parallax) */}
      <section className="py-16 border-t border-white/5 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-sora text-3xl font-semibold text-[#e5e1e4] mb-3">The Architects</h2>
          <p className="font-geist text-sm text-[#b9cacb]">Masters of the digital vacuum.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              onMouseMove={handleParallaxMove}
              onMouseLeave={handleParallaxLeave}
              style={{ transformStyle: 'preserve-3d', transition: 'transform 0.1s ease-out' }}
              className="glass-panel rounded-3xl p-6 h-80 flex flex-col justify-end relative overflow-hidden group cursor-pointer border border-white/5 hover:border-white/10"
            >
              {/* Profile Image with filter */}
              <div className="absolute inset-0 z-0">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-full object-cover opacity-25 group-hover:opacity-60 transition-opacity duration-700 mix-blend-luminosity group-hover:mix-blend-normal"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#131315] via-[#131315]/80 to-transparent" />
              </div>

              {/* Parallax elements */}
              <div 
                style={{ transform: 'translateZ(40px)', transformStyle: 'preserve-3d' }}
                className="relative z-10"
              >
                <h4 className="font-sora text-xl font-bold text-[#e5e1e4] group-hover:text-[#00f0ff] transition-colors duration-300">
                  {member.name}
                </h4>
                <p className="font-mono text-xs text-[#b9cacb] uppercase tracking-wider mt-1">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
