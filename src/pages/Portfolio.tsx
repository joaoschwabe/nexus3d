import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Project } from '../types';
import { TiltCard } from '../components/TiltCard';

const projectsData: Project[] = [
  {
    id: '1',
    title: 'Neon Genesis',
    category: '3D Animation',
    description: 'A complete visual overhaul for a sci-fi metropolis, utilizing real-time rendering pipelines to achieve unprecedented fluid dynamics.',
    tags: ['VFX', 'Animation'],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwuGr3VJkWXK9k4a35Pj2ncdJNtfaVv9N2UXR_-eaWfJ7H1IzxIxyo3ciFSLeIhWPJ1ysFUhLtGkR9SoBlER9xDfVuFKj6i8fpXjcGxofIckJo3PDWxKEs5P9dajegAfyph-kzMy84avJbyWabgQbWfQbQBm8Zbx-McV-bQGEL41nRZVKgXx1f2ozQWuBYqVgM6ssLMB8kK-Uumw5ohcgRJpaQAU-SpaAAEgaFJxjMwUyaEzY1vixsZA',
    altText: 'Sci-fi cityscape at dusk with neon blue and pink tones',
    software: ['Unreal Engine 5', 'Houdini', 'Blender']
  },
  {
    id: '2',
    title: 'Flora Construct',
    category: 'Character Rigging',
    description: 'Bioluminescent plant-based character assets built with high density mesh and structural joints.',
    tags: ['Modeling', 'Rigging'],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCANs-SWWbhTV75lAbJtgsQS0VWxacgPcdp0toZDmHJ6_UotHDMRzJOR0qFmHs6ZPtdykcmoQn__tj92rF21ZgDCd9ZJmkHl2xIg2-WArUOdgY5zFEFmSE4_DkSD_gkSSnef55O6UU9pfB6IgojHZBbtag9Rd5HPf-EVzU7DHaPWacHHwQ3pJ7NS9tiphojn0eX5XJQyVxFnH0ysP109VzHuN37bp8GURw0Pi5vPaLT0OptpQ-Ozlk5ug',
    altText: 'Alien vine organism glowing with cyan crystal structures',
    software: ['ZBrush', 'Substance Painter', 'Maya']
  },
  {
    id: '3',
    title: 'Void Architecture',
    category: '3D Animation',
    description: 'Zero gravity simulation and non-Euclidean spatial architectural studies utilizing reflective materials.',
    tags: ['Concept', 'Simulation'],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDE0KllmW9vtwgk_6rMgBS-mdi2Hhwl5-EYbxy6BzJATSUlr7AmZuljmeLzQQvL7g1daFkNUV_i66BE46WVkVPvJaHrpyqqhliLHYd6_iucleU9mJ3GWl2bpIdcu9yvpd_zpVIGf5HBUtQbRsO-verJWfKc4jBicxlqdQvz5ZvEYbUDEpfworRc0CeiOKuZYfn1oHbKCvP35N7yRX8cy3teM1oA2ZwrBP9peJq7vh-gp2QhycLi5KYFXg',
    altText: 'Chrome balls and glass panels suspended in deep space',
    software: ['Blender', 'Octane Render', 'After Effects']
  },
  {
    id: '4',
    title: 'Particle Symphony',
    category: 'VFX',
    description: 'Audio-reactive particle systems simulating deep space galaxy formations for live projections.',
    tags: ['VFX', 'Particles'],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAOklK7SEu7B9fmOdkkDfJMAD7ddyQP94RyighWnpB8Ua0E2KXnGkw1-igasmguqMMxTWlCFmbWvW1TCOBBCtT-_1n0GeSyatl4Q6ubeO3E-fuUOpHXLN4xRNSPGn3-LcNaFCROyeyf_Am9LgOvUQ5ftn0A0pQaUyFt2GGUXdX_tfuVnTLokx6rWddz2l4Ub6L_0i6b4SBWi-JTuEyvWXwVDPSIV5foQKtEro_y3GliqXB8TqcxKG9jgA',
    altText: 'Glowing spiral particle dust explosion',
    software: ['Cinema 4D', 'Redshift', 'X-Particles']
  }
];

const categories = ['All', '3D Animation', 'Character Rigging', 'VFX'];

export const Portfolio: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filteredProjects = selectedFilter === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === selectedFilter);

  return (
    <div className="w-full relative px-6 md:px-12 max-w-7xl mx-auto pb-24 overflow-hidden">
      {/* Page Header */}
      <motion.header
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 90, damping: 20 }}
        className="flex flex-col gap-6 mb-16"
      >
        <span className="font-mono text-xs text-[#bd00ff] tracking-[0.25em] uppercase pl-4 relative">
          <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#bd00ff]" />
          Exhibition Canvas
        </span>
        <h1 className="font-sora text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#00f0ff]">
          Selected Works
        </h1>
        <p className="font-geist text-base md:text-lg text-[#b9cacb] max-w-2xl leading-relaxed">
          A curated collection of our most ambitious explorations in three-dimensional space, blending high-end rendering with interactive physics.
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 mt-4 relative z-20">
          {categories.map((cat) => {
            const isActive = selectedFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`relative font-mono text-xs uppercase tracking-wider px-6 py-2.5 rounded-full border transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'text-[#00f0ff] border-[#00f0ff]/50 font-bold'
                    : 'text-[#b9cacb] border-white/10 hover:text-[#e5e1e4] hover:border-white/20'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeFilterBg"
                    className="absolute inset-0 bg-[#00f0ff]/10 rounded-full -z-10 shadow-[0_0_15px_rgba(0,240,255,0.15)]"
                    transition={{ type: 'spring', stiffness: 120, damping: 20 }}
                  />
                )}
                {cat}
              </button>
            );
          })}
        </div>
      </motion.header>

      {/* Dynamic Project Grid */}
      <motion.section 
        layout
        className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[350px] md:auto-rows-[450px]"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => {
            // Alternate sizing to create a beautiful asymmetrical layout
            const isLarge = index === 0 && selectedFilter === 'All';
            const colSpan = isLarge ? 'md:col-span-8' : 'md:col-span-4';
            const rowSpan = isLarge ? 'md:row-span-2' : 'md:row-span-1';

            return (
              <motion.article
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 90, damping: 22 }}
                key={project.id}
                className={`${colSpan} ${rowSpan} h-full`}
              >
                <TiltCard className="group w-full h-full relative">
                  {/* Background Image Container */}
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-75 group-hover:scale-[1.04] transition-all duration-700 -z-10 mix-blend-luminosity group-hover:mix-blend-normal"
                    style={{ backgroundImage: `url(${project.imageUrl})` }}
                  />
                  {/* Subtle Shading overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#131315]/95 via-[#131315]/50 to-transparent -z-10" />

                  {/* Foreground Content */}
                  <div className="z-10 transform translate-z-[30px] flex flex-col justify-end h-full w-full">
                    <span className="font-mono text-[10px] text-[#bd00ff] tracking-wider uppercase mb-1">
                      {project.category}
                    </span>
                    <h2 className="font-sora text-2xl md:text-3xl font-bold text-[#dbfcff] group-hover:text-[#00f0ff] transition-colors duration-300 drop-shadow-lg">
                      {project.title}
                    </h2>

                    {/* Metadata Section - Slide up on hover */}
                    <div className="max-h-0 opacity-0 group-hover:max-h-[220px] group-hover:opacity-100 transition-all duration-500 overflow-hidden group-hover:mt-4">
                      <p className="font-geist text-xs text-[#b9cacb] mb-4 leading-relaxed max-w-lg">
                        {project.description}
                      </p>

                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.software.map((sw) => (
                          <span
                            key={sw}
                            className="bg-[#201f22]/80 border border-white/5 px-2.5 py-0.5 rounded text-[10px] font-mono text-[#dbfcff]"
                          >
                            {sw}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </motion.section>
    </div>
  );
};
