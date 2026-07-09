import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { BriefingForm } from '../types';

const projectTypes = [
  { id: 'prod', label: 'Product Viz', value: 'Product Viz' },
  { id: 'arch', label: 'Arch Viz', value: 'Arch Viz' },
  { id: 'motion', label: 'Motion Design', value: 'Motion Design' },
  { id: 'char', label: 'Character / Avatar', value: 'Character / Avatar' },
  { id: 'vfx', label: 'VFX & Dynamics', value: 'VFX & Dynamics' }
];

const budgetValues: Record<number, string> = {
  1: "< $5k",
  2: "$5k - $10k",
  3: "$10k - $25k",
  4: "$25k - $50k",
  5: "$50k+"
};

const timelineValues: Record<number, string> = {
  1: "< 2 Weeks",
  2: "4-8 Weeks",
  3: "8-12 Weeks",
  4: "12+ Weeks"
};

export const Budget: React.FC = () => {
  const [formData, setFormData] = useState<BriefingForm>({
    fname: '',
    email: '',
    company: '',
    type: '',
    brief: '',
    budget: 3, // Defaults to $10k - $25k
    timeline: 2 // Defaults to 4-8 Weeks
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeStep, setActiveStep] = useState(1);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleTypeSelect = (value: string) => {
    setFormData(prev => ({ ...prev, type: value }));
  };

  const handleSliderChange = (field: 'budget' | 'timeline', value: number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fname || !formData.email || !formData.type) {
      alert('Please fill out all mandatory identity parameters and project classification.');
      return;
    }
    setFormSubmitted(true);
  };

  // Check if step forms are valid to highlight steps
  const isStep1Valid = formData.fname.trim() !== '' && formData.email.trim() !== '';
  const isStep2Valid = formData.type !== '';

  return (
    <div className="w-full relative px-6 md:px-12 max-w-7xl mx-auto pb-24 overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-12 min-h-[80vh]">
        
        {/* Left Column: Form & Header */}
        <div className="w-full lg:w-2/3 flex flex-col gap-12 relative z-10 text-left">
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 90, damping: 20 }}
          >
            <span className="font-mono text-xs text-[#bd00ff] tracking-[0.25em] uppercase mb-4 pl-4 relative block">
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#bd00ff]" />
              Start Pipeline
            </span>
            <h1 className="font-sora text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#00f0ff] mb-6">
              Initialize <span className="text-[#e5e1e4]">Sequence</span>.
            </h1>
            <p className="font-geist text-base text-[#b9cacb] max-w-xl leading-relaxed">
              Configure your project parameters. Our system will analyze your requirements and prepare a custom rendering pipeline tailored to your vision.
            </p>
          </motion.header>

          <AnimatePresence mode="wait">
            {!formSubmitted ? (
              <motion.form
                onSubmit={handleSubmit}
                className="flex flex-col gap-8 w-full"
              >
                {/* Step 1: Identity Parameters */}
                <motion.section 
                  className={`glass-panel rounded-2xl p-6 md:p-8 transition-all duration-300 border ${
                    activeStep === 1 ? 'border-[#00f0ff]/30 shadow-[0_0_20px_rgba(0,240,255,0.05)]' : 'border-white/5 opacity-70'
                  }`}
                  onClick={() => setActiveStep(1)}
                >
                  <div className="flex items-center gap-4 mb-8 border-b border-white/5 pb-4">
                    <span className={`font-mono text-xs px-3 py-1 rounded-full border flex items-center gap-2 ${
                      isStep1Valid ? 'text-[#00f0ff] border-[#00f0ff]/30 bg-[#00f0ff]/5' : 'text-white/30 border-white/10'
                    }`}>
                      {isStep1Valid && <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] animate-ping" />}
                      01
                    </span>
                    <h2 className="font-sora text-lg font-bold text-[#e5e1e4]">Identity Parameters</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Full Name */}
                    <div className="relative group">
                      <input
                        type="text"
                        id="fname"
                        required
                        value={formData.fname}
                        onChange={handleInputChange}
                        className="input-glass w-full py-3 text-sm text-[#e5e1e4] placeholder-transparent peer"
                        placeholder="Full Name"
                      />
                      <label 
                        htmlFor="fname"
                        className="absolute left-0 top-3 text-[#b9cacb]/80 font-geist text-xs transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#00f0ff] peer-valid:-top-4 peer-valid:text-xs peer-valid:text-[#00f0ff]"
                      >
                        Entity Designation (Name) *
                      </label>
                    </div>

                    {/* Email */}
                    <div className="relative group">
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="input-glass w-full py-3 text-sm text-[#e5e1e4] placeholder-transparent peer"
                        placeholder="Comms Channel"
                      />
                      <label 
                        htmlFor="email"
                        className="absolute left-0 top-3 text-[#b9cacb]/80 font-geist text-xs transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#00f0ff] peer-valid:-top-4 peer-valid:text-xs peer-valid:text-[#00f0ff]"
                      >
                        Comms Channel (Email) *
                      </label>
                    </div>

                    {/* Company */}
                    <div className="relative group md:col-span-2">
                      <input
                        type="text"
                        id="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="input-glass w-full py-3 text-sm text-[#e5e1e4] placeholder-transparent peer"
                        placeholder="Organization"
                      />
                      <label 
                        htmlFor="company"
                        className="absolute left-0 top-3 text-[#b9cacb]/80 font-geist text-xs transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#00f0ff] peer-valid:-top-4 peer-valid:text-xs peer-valid:text-[#00f0ff]"
                      >
                        Organization (Optional)
                      </label>
                    </div>
                  </div>
                </motion.section>

                {/* Step 2: Output Classification */}
                <motion.section 
                  className={`glass-panel rounded-2xl p-6 md:p-8 transition-all duration-300 border ${
                    activeStep === 2 ? 'border-[#bd00ff]/30 shadow-[0_0_20px_rgba(189,0,255,0.05)]' : 'border-white/5 opacity-70'
                  }`}
                  onClick={() => setActiveStep(2)}
                >
                  <div className="flex items-center gap-4 mb-8 border-b border-white/5 pb-4">
                    <span className={`font-mono text-xs px-3 py-1 rounded-full border flex items-center gap-2 ${
                      isStep2Valid ? 'text-[#bd00ff] border-[#bd00ff]/30 bg-[#bd00ff]/5' : 'text-white/30 border-white/10'
                    }`}>
                      02
                    </span>
                    <h2 className="font-sora text-lg font-bold text-[#e5e1e4]">Output Classification</h2>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {projectTypes.map((type) => {
                      const isSelected = formData.type === type.value;
                      return (
                        <button
                          key={type.id}
                          type="button"
                          onClick={() => handleTypeSelect(type.value)}
                          className={`px-5 py-2.5 rounded-full border font-mono text-[11px] uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                            isSelected
                              ? 'text-[#00f0ff] border-[#00f0ff] bg-[#00f0ff]/10 shadow-[0_0_15px_rgba(0,240,255,0.2)] font-bold'
                              : 'text-[#b9cacb] border-white/10 hover:border-[#00f0ff]/50'
                          }`}
                        >
                          {type.label}
                        </button>
                      );
                    })}
                  </div>
                </motion.section>

                {/* Step 3: Scope Definition */}
                <motion.section 
                  className={`glass-panel rounded-2xl p-6 md:p-8 transition-all duration-300 border ${
                    activeStep === 3 ? 'border-[#00f0ff]/30 shadow-[0_0_20px_rgba(0,240,255,0.05)]' : 'border-white/5 opacity-70'
                  }`}
                  onClick={() => setActiveStep(3)}
                >
                  <div className="flex items-center gap-4 mb-8 border-b border-white/5 pb-4">
                    <span className="font-mono text-xs text-white/30 border border-white/10 px-3 py-1 rounded-full">
                      03
                    </span>
                    <h2 className="font-sora text-lg font-bold text-[#e5e1e4]">Scope Definition</h2>
                  </div>

                  {/* Mission Brief Textarea */}
                  <div className="relative group mb-12">
                    <textarea
                      id="brief"
                      value={formData.brief}
                      onChange={handleInputChange}
                      rows={4}
                      className="input-glass w-full py-3 text-sm text-[#e5e1e4] placeholder-transparent peer resize-none"
                      placeholder="Mission Brief"
                    />
                    <label 
                      htmlFor="brief"
                      className="absolute left-0 top-3 text-[#b9cacb]/80 font-geist text-xs transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#00f0ff] peer-valid:-top-4 peer-valid:text-xs peer-valid:text-[#00f0ff]"
                    >
                      Mission Brief (Describe your project vision)
                    </label>
                  </div>

                  <div className="flex flex-col gap-10">
                    {/* Budget Slider */}
                    <div className="flex flex-col gap-3">
                      <div className="flex justify-between items-baseline">
                        <label className="font-mono text-[11px] text-[#b9cacb] uppercase tracking-wide">
                          Resource Allocation (Budget)
                        </label>
                        <span className="font-mono text-xs text-[#00f0ff] font-bold">
                          {budgetValues[formData.budget]}
                        </span>
                      </div>
                      <input
                        type="range"
                        min={1}
                        max={5}
                        value={formData.budget}
                        onChange={(e) => handleSliderChange('budget', parseInt(e.target.value))}
                        className="w-full h-1 bg-[#201f22] rounded-lg appearance-none cursor-pointer accent-[#00f0ff]"
                      />
                      <div className="flex justify-between font-mono text-[9px] text-[#849495] mt-1">
                        <span>&lt;$5k</span>
                        <span>&gt;$50k</span>
                      </div>
                    </div>

                    {/* Timeline Slider */}
                    <div className="flex flex-col gap-3">
                      <div className="flex justify-between items-baseline">
                        <label className="font-mono text-[11px] text-[#b9cacb] uppercase tracking-wide">
                          Temporal Constraint (Timeline)
                        </label>
                        <span className="font-mono text-xs text-[#bd00ff] font-bold">
                          {timelineValues[formData.timeline]}
                        </span>
                      </div>
                      <input
                        type="range"
                        min={1}
                        max={4}
                        value={formData.timeline}
                        onChange={(e) => handleSliderChange('timeline', parseInt(e.target.value))}
                        className="w-full h-1 bg-[#201f22] rounded-lg appearance-none cursor-pointer accent-[#bd00ff]"
                      />
                      <div className="flex justify-between font-mono text-[9px] text-[#849495] mt-1">
                        <span>&lt;2 Weeks</span>
                        <span>&gt;12 Weeks</span>
                      </div>
                    </div>
                  </div>
                </motion.section>

                {/* Form Submit Button */}
                <div className="flex justify-end mt-4">
                  <button
                    type="submit"
                    className="relative group px-8 py-4 bg-gradient-to-r from-[#00f0ff] to-[#bd00ff] text-[#131315] font-mono text-xs uppercase tracking-widest font-extrabold rounded-full hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] active:scale-95 transition-all duration-300 overflow-hidden cursor-pointer"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Transmit Request 
                      <span className="material-symbols-outlined text-[16px] select-none">rocket_launch</span>
                    </span>
                    <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
                  </button>
                </div>
              </motion.form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-panel rounded-2xl p-12 text-center flex flex-col items-center justify-center gap-6"
              >
                <div className="w-16 h-16 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/30 flex items-center justify-center text-[#00f0ff] mb-4">
                  <span className="material-symbols-outlined text-3xl select-none animate-pulse">cloud_done</span>
                </div>
                <h2 className="font-sora text-3xl font-bold text-[#e5e1e4]">Transmission Complete</h2>
                <p className="font-geist text-sm text-[#b9cacb] max-w-md leading-relaxed">
                  Your project blueprint coordinates have been transmitted into our database. The rendering engine is allocating computational nodes for analysis.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setFormSubmitted(false);
                    setActiveStep(1);
                  }}
                  className="font-mono text-xs text-[#00f0ff] hover:underline cursor-pointer mt-4"
                >
                  Configure New Sequence
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right Column: Live Render Ticket */}
        <div className="w-full lg:w-1/3 relative">
          <aside className="lg:sticky lg:top-40 glass-panel rounded-2xl p-6 md:p-8 flex flex-col gap-6 border-t-2 border-t-[#00f0ff] shadow-[0_8px_32px_rgba(0,240,255,0.08)]">
            <div className="flex justify-between items-start border-b border-white/10 pb-4">
              <div className="text-left">
                <h3 className="font-mono text-[10px] text-[#00f0ff] tracking-widest font-extrabold uppercase mb-1">
                  SYSTEM TICKET
                </h3>
                <div className="font-sora text-2xl font-extrabold tracking-tight text-[#e5e1e4]">
                  NX-3D-REQ
                </div>
              </div>
              <span className="material-symbols-outlined text-4xl text-white/15 select-none">
                qr_code_2
              </span>
            </div>

            <div className="space-y-4">
              {/* Entity Name */}
              <div className="flex justify-between items-baseline border-b border-white/5 pb-2">
                <span className="font-mono text-[9px] text-[#b9cacb]/50 tracking-wider">ENTITY</span>
                <span className="font-geist text-sm text-[#e5e1e4] font-semibold truncate max-w-[200px]">
                  {formData.fname || 'Awaiting Input...'}
                </span>
              </div>

              {/* Classification */}
              <div className="flex justify-between items-baseline border-b border-white/5 pb-2">
                <span className="font-mono text-[9px] text-[#b9cacb]/50 tracking-wider">CLASSIFICATION</span>
                <span className={`font-mono text-xs font-bold ${formData.type ? 'text-[#bd00ff]' : 'text-white/30'}`}>
                  {formData.type || 'Unassigned'}
                </span>
              </div>

              {/* Budget Allocation */}
              <div className="flex justify-between items-baseline border-b border-white/5 pb-2">
                <span className="font-mono text-[9px] text-[#b9cacb]/50 tracking-wider">ALLOCATION</span>
                <span className="font-mono text-xs text-[#e5e1e4] font-semibold">
                  {budgetValues[formData.budget]}
                </span>
              </div>

              {/* Timeline ETA */}
              <div className="flex justify-between items-baseline border-b border-white/5 pb-2">
                <span className="font-mono text-[9px] text-[#b9cacb]/50 tracking-wider">ETA</span>
                <span className="font-mono text-xs text-[#e5e1e4] font-semibold">
                  {timelineValues[formData.timeline]}
                </span>
              </div>
            </div>

            {/* System Status pulsing chip */}
            <div className="mt-6 p-4 bg-[#1c1b1d] rounded-xl border border-white/5 relative overflow-hidden text-left">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#00f0ff] animate-pulse" />
              <p className="font-mono text-[9px] text-[#b9cacb]/60 uppercase mb-2.5">
                SYSTEM STATUS
              </p>
              <p className="font-geist text-xs text-[#00f0ff] flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] select-none animate-spin" style={{ animationDuration: '3s' }}>
                  memory
                </span>
                {formData.fname ? 'Ready for Node Execution' : 'Awaiting Input Parameters'}
              </p>
            </div>
          </aside>
        </div>

      </div>
    </div>
  );
};
