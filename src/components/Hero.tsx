import { useState, useEffect } from 'react';
import { Play, Pause, Film, Sparkles, ArrowRight, Layers, Sliders, Scissors } from 'lucide-react';
import { HERO_IMAGE } from '../data/portfolioData';
import { cinematicAudio } from '../utils/audioHelper';

interface HeroProps {
  onViewWorkClick: () => void;
  onHireMeClick: () => void;
}

export function Hero({ onViewWorkClick, onHireMeClick }: HeroProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [playheadPos, setPlayheadPos] = useState(38); // percentage along the timeline
  const [timecode, setTimecode] = useState('00:02:14:18');

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setPlayheadPos((prev) => {
        const next = prev >= 95 ? 5 : prev + 0.6;
        const totalFrames = Math.floor(next * 12);
        const secs = Math.floor(totalFrames / 24);
        const frames = totalFrames % 24;
        setTimecode(`00:02:${secs.toString().padStart(2, '0')}:${frames.toString().padStart(2, '0')}`);
        return next;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Background atmospheric electric blue gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyan-600/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[350px] bg-blue-600/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-6 space-y-6">
            {/* Subtle editorial kicker without pill enclosure */}
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-cyan-400 uppercase">
              <span className="w-2 h-[2px] bg-cyan-400" />
              <span>International Creative Portfolio</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-400">PRINCE EDITS</span>
            </div>

            {/* Main Brand Title & Large Heading */}
            <div className="space-y-3">
              <div className="text-sm font-semibold tracking-widest text-cyan-400/90 uppercase font-display">
                PRINCE EDITS
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] font-display text-balance">
                TURNING IDEAS INTO{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
                  VISUAL STORIES.
                </span>
              </h1>
            </div>

            {/* Requested Subtitle */}
            <p className="text-lg sm:text-xl text-slate-300 font-medium">
              Creative Video Editor <span className="text-cyan-400">|</span> YouTube{' '}
              <span className="text-cyan-400">|</span> TikTok <span className="text-cyan-400">|</span> Instagram
            </p>

            {/* Supporting description */}
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl">
              Specialized in high-retention pacing, 4K cinematic color grading, punchy sound design, and viral social hooks that convert viewers into loyal subscribers and customers.
            </p>

            {/* Buttons: "View My Work" and "Hire Me" */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => {
                  cinematicAudio.playCinematicWhoosh();
                  onViewWorkClick();
                }}
                className="px-7 py-3.5 text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg shadow-[0_0_25px_rgba(0,240,255,0.4)] hover:shadow-[0_0_35px_rgba(0,240,255,0.6)] transition-all flex items-center gap-2 group active:scale-95"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                type="button"
                onClick={() => {
                  cinematicAudio.playClick();
                  onHireMeClick();
                }}
                className="px-7 py-3.5 text-sm font-semibold text-white bg-slate-900/90 hover:bg-slate-800/90 border border-slate-700/80 hover:border-cyan-400/50 rounded-lg transition-all active:scale-95 flex items-center gap-2"
              >
                <span>Hire Me</span>
                <Sparkles className="w-4 h-4 text-cyan-400" />
              </button>
            </div>

            {/* Trust tags */}
            <div className="pt-4 flex items-center gap-4 text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1.5 text-slate-300">
                <Scissors className="w-3.5 h-3.5 text-cyan-400" /> Frame-Accurate Cuts
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <Film className="w-3.5 h-3.5 text-cyan-400" /> 4K 60FPS Masters
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <Sliders className="w-3.5 h-3.5 text-cyan-400" /> Custom Sound SFX
              </span>
            </div>
          </div>

          {/* Right Column: Cinematic Video Editing Suite Interactive Console */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-cyan-500/25 bg-slate-950/80 shadow-[0_0_50px_-10px_rgba(0,240,255,0.2)]">
              {/* Top Bar of Studio Console */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/90 border-b border-slate-800 text-xs font-mono text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  <span className="ml-2 text-slate-400 text-[11px]">PRINCE_STUDIO_TIMELINE.prproj</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-cyan-400 font-semibold">{timecode}</span>
                  <span className="text-slate-500">24.00 fps</span>
                </div>
              </div>

              {/* Video Monitor / Preview Window */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-black group">
                <img
                  src={HERO_IMAGE}
                  alt="Cinematic video editing console with multi-track timeline and color grading"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Cinematic Overlays: Grid lines & anamorphic scope */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/30 pointer-events-none" />
                
                {/* Safe zone overlay lines */}
                <div className="absolute inset-6 border border-cyan-400/20 pointer-events-none rounded" />

                {/* Floating Quick Action overlay */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-2.5 py-1 text-[11px] font-mono font-medium rounded bg-black/70 text-cyan-300 border border-cyan-500/30 backdrop-blur-md">
                    REC.709 MASTER
                  </span>
                  <span className="px-2.5 py-1 text-[11px] font-mono font-medium rounded bg-black/70 text-slate-300 border border-slate-700/60 backdrop-blur-md">
                    LUT: PRINCE_CYAN_NOIR
                  </span>
                </div>

                {/* Play / Pause Interactive Center Overlay */}
                <button
                  type="button"
                  onClick={() => {
                    cinematicAudio.playClick();
                    setIsPlaying(!isPlaying);
                  }}
                  className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-slate-900/80 hover:bg-cyan-500 text-white hover:text-slate-950 border border-cyan-400/50 flex items-center justify-center backdrop-blur-md transition-all shadow-[0_0_30px_rgba(0,240,255,0.4)] group-hover:scale-110 active:scale-95"
                  aria-label={isPlaying ? 'Pause timeline playback' : 'Play timeline preview'}
                >
                  {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-0.5" />}
                </button>
              </div>

              {/* Multi-Track Timeline Scrubber & Audio Waveforms */}
              <div className="p-4 bg-slate-950/90 border-t border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <Layers className="w-3.5 h-3.5 text-cyan-400" />
                    <span>TIMELINE TRACKS (V1-V3 · A1-A4)</span>
                  </div>
                  <span className="text-cyan-400 text-[11px]">ACTIVE SYNC</span>
                </div>

                {/* Timeline Tracks Box */}
                <div className="relative h-20 bg-slate-900/90 rounded-lg border border-slate-800 p-2 overflow-hidden flex flex-col justify-between">
                  {/* Video Track V1 (Visual blocks) */}
                  <div className="relative h-4 rounded bg-slate-800/80 flex items-center gap-1 px-1">
                    <span className="text-[9px] font-mono text-slate-400 absolute left-1">V1</span>
                    <div className="ml-5 h-3 w-24 bg-cyan-600/40 border border-cyan-500/50 rounded-sm" />
                    <div className="h-3 w-16 bg-blue-600/40 border border-blue-500/50 rounded-sm" />
                    <div className="h-3 w-32 bg-sky-600/40 border border-sky-500/50 rounded-sm" />
                    <div className="h-3 flex-1 bg-cyan-700/40 border border-cyan-500/40 rounded-sm" />
                  </div>

                  {/* Video Track V2 (Text/Overlay blocks) */}
                  <div className="relative h-4 rounded bg-slate-800/60 flex items-center gap-1 px-1">
                    <span className="text-[9px] font-mono text-slate-400 absolute left-1">V2</span>
                    <div className="ml-16 h-3 w-28 bg-purple-600/40 border border-purple-500/50 rounded-sm" />
                    <div className="ml-6 h-3 w-20 bg-indigo-600/40 border border-indigo-500/50 rounded-sm" />
                  </div>

                  {/* Audio Track A1 (Simulated Waveform) */}
                  <div className="relative h-4 rounded bg-slate-950 flex items-center px-1 overflow-hidden">
                    <span className="text-[9px] font-mono text-slate-400 absolute left-1 z-10">A1</span>
                    <div className="ml-5 flex-1 flex items-center gap-[2px] h-3">
                      {Array.from({ length: 48 }).map((_, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-cyan-400/50 rounded-full"
                          style={{
                            height: `${Math.sin(i * 0.4) * 40 + 50}%`,
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Red/Electric Blue Playhead Scrub Line */}
                  <div
                    className="absolute top-0 bottom-0 w-[2px] bg-cyan-400 shadow-[0_0_10px_#00f0ff] z-20 pointer-events-none transition-all duration-75"
                    style={{ left: `${playheadPos}%` }}
                  >
                    <div className="w-2.5 h-2.5 bg-cyan-300 rounded-sm -translate-x-[4px] -translate-y-0.5 shadow-[0_0_8px_#00f0ff]" />
                  </div>
                </div>

                {/* Scrubber control */}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={playheadPos}
                  onChange={(e) => {
                    setIsPlaying(false);
                    setPlayheadPos(Number(e.target.value));
                  }}
                  className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                  aria-label="Timeline scrubber position"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Full-width Metrics Row below Hero Split (Adhering to Section 2.B of Portfolio Guide) */}
        <div className="mt-16 pt-10 border-t border-slate-800/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-display tabular-nums tracking-tight">
                50M<span className="text-cyan-400">+</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 font-medium mt-1">Total Organic Views</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-display tabular-nums tracking-tight">
                180<span className="text-cyan-400">+</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 font-medium mt-1">Completed Projects</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-display tabular-nums tracking-tight">
                99.4<span className="text-cyan-400">%</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 font-medium mt-1">Client Satisfaction</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-display tabular-nums tracking-tight">
                40<span className="text-cyan-400">+</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 font-medium mt-1">Global Creators Served</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
