import { useState } from 'react';
import { Eye, Sliders, Film, Volume2, Award, Zap } from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '../data/portfolioData';

export function AboutMe() {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  // We use the cinematic travel image as the base for the Before/After comparison
  const sampleImage = PORTFOLIO_PROJECTS[0].image;

  const handleSliderMove = (clientX: number, rect: DOMRect) => {
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  };

  return (
    <section id="about" className="py-24 bg-[#050b18]/60 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-mono tracking-widest text-cyan-400 uppercase">
            <span>01</span>
            <span aria-hidden="true">·</span>
            <span>The Creative Vision</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight text-balance">
            Obsessed with Pacing, Storytelling & Visual Rhythm
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            I don’t just cut clips together; I sculpt raw ideas into immersive visual journeys that keep viewers hooked from the first second to the final frame.
          </p>
        </div>

        {/* 2-Column Split: Story & Capabilities + Interactive Before/After Color Grade Slider */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Creative Story & Core Philosophy */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl font-bold text-white font-display">
              Behind the Edits: Crafting Content That Demands Attention
            </h3>
            
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              Hi, I’m the creative force behind <strong className="text-cyan-400 font-semibold">PRINCE EDITS</strong>. In a digital world where attention spans are measured in milliseconds, standard editing is no longer enough. Your audience decides whether to stay or scroll within the first 3 seconds.
            </p>

            <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
              My approach blends the discipline of cinematic film pacing with modern viral retention engineering. Every cut is intentional. Every sound effect heightens emotion. Every frame is graded to transform dull camera raw files into punchy, vibrant, high-production cinema.
            </p>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
              <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80">
                <div className="flex items-center gap-2.5 text-cyan-400 font-semibold text-sm mb-1">
                  <Zap className="w-4 h-4" />
                  <span>Retention First</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Strategic pattern interrupts, micro-zooms, and visual hooks that maintain watch-time above 60%.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80">
                <div className="flex items-center gap-2.5 text-cyan-400 font-semibold text-sm mb-1">
                  <Film className="w-4 h-4" />
                  <span>4K Color Grading</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Transforming flat Log profiles into lush, rich cinematic color palettes with skin tone accuracy.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80">
                <div className="flex items-center gap-2.5 text-cyan-400 font-semibold text-sm mb-1">
                  <Volume2 className="w-4 h-4" />
                  <span>Layered Sound Design</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Multitrack foley, bass risers, swooshes, and atmospheric textures that make visuals feel tangible.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80">
                <div className="flex items-center gap-2.5 text-cyan-400 font-semibold text-sm mb-1">
                  <Award className="w-4 h-4" />
                  <span>International Reach</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Collaborating seamlessly across US, Europe, and Asia timezones with reliable milestone delivery.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Before / After Color Grade & Post-Production Slider */}
          <div className="lg:col-span-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <div className="flex items-center gap-1.5">
                  <Sliders className="w-3.5 h-3.5 text-cyan-400" />
                  <span>INTERACTIVE COLOR GRADE & POST COMPARISON</span>
                </div>
                <span className="text-cyan-400 font-semibold">DRAG SLIDER</span>
              </div>

              {/* Split container */}
              <div
                className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-cyan-500/30 select-none cursor-ew-resize shadow-2xl bg-black"
                onMouseDown={() => setIsDragging(true)}
                onMouseUp={() => setIsDragging(false)}
                onMouseLeave={() => setIsDragging(false)}
                onTouchStart={() => setIsDragging(true)}
                onTouchEnd={() => setIsDragging(false)}
                onMouseMove={(e) => {
                  if (!isDragging) return;
                  handleSliderMove(e.clientX, e.currentTarget.getBoundingClientRect());
                }}
                onTouchMove={(e) => {
                  if (!isDragging) return;
                  handleSliderMove(e.touches[0].clientX, e.currentTarget.getBoundingClientRect());
                }}
                onClick={(e) => handleSliderMove(e.clientX, e.currentTarget.getBoundingClientRect())}
              >
                {/* AFTER: Full color graded image */}
                <img
                  src={sampleImage}
                  alt="After: Color graded cinematic frame with rich saturation and anamorphic tone"
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* BEFORE: Desaturated flat LOG camera simulation */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${sliderPos}%` }}
                >
                  <img
                    src={sampleImage}
                    alt="Before: Flat Log raw sensor footage"
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover max-w-none grayscale-[60%] brightness-90 contrast-75 sepia-[15%]"
                    style={{ width: '100%', height: '100%' }}
                  />
                  {/* Subtle flat LOG indicator badge */}
                  <div className="absolute top-4 left-4 px-2.5 py-1 text-[11px] font-mono rounded bg-black/80 text-amber-300 border border-amber-500/40 backdrop-blur-md">
                    RAW FLAT LOG (UNGRADED)
                  </div>
                </div>

                {/* Graded indicator badge on right */}
                <div className="absolute top-4 right-4 px-2.5 py-1 text-[11px] font-mono rounded bg-black/80 text-cyan-300 border border-cyan-500/40 backdrop-blur-md">
                  PRINCE EDITS 4K GRADE
                </div>

                {/* Drag Handle Bar */}
                <div
                  className="absolute top-0 bottom-0 w-[2px] bg-cyan-400 shadow-[0_0_12px_#00f0ff] pointer-events-none"
                  style={{ left: `${sliderPos}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-950 border-2 border-cyan-400 text-cyan-300 flex items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.6)]">
                    <Sliders className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              {/* Instructions */}
              <div className="flex items-center justify-between text-xs text-slate-500 font-mono pt-1">
                <span>◀ RAW Sensor Capture</span>
                <span className="flex items-center gap-1 text-cyan-400">
                  <Eye className="w-3 h-3" /> Drag to inspect color contrast & sharpness
                </span>
                <span>Graded Film Master ▶</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
