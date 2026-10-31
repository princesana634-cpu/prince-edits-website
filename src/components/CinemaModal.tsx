import { useState, useEffect } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Maximize2, RotateCcw, Sparkles, CheckCircle2, Film } from 'lucide-react';
import { type Project } from '../utils/portfolioLogic';
import { cinematicAudio } from '../utils/audioHelper';

interface CinemaModalProps {
  project: Project | null;
  onClose: () => void;
  onBookSimilarProject: (projectTitle: string) => void;
}

export function CinemaModal({ project, onClose, onBookSimilarProject }: CinemaModalProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(25);
  const [playbackSpeed, setPlaybackSpeed] = useState<1 | 1.5 | 2>(1);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === ' ') {
        e.preventDefault();
        setIsPlaying((p) => !p);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 98 ? 0 : prev + 0.8 * playbackSpeed));
    }, 100);
    return () => clearInterval(interval);
  }, [isPlaying, playbackSpeed]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Project showcase: ${project.title}`}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200"
    >
      {/* Modal Container */}
      <div className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto bg-slate-950 border border-cyan-500/30 rounded-2xl shadow-[0_0_60px_rgba(0,240,255,0.2)] flex flex-col">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/80">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
              CINEMA MASTER DEMO // {project.category.toUpperCase()}
            </span>
          </div>

          <button
            type="button"
            onClick={() => {
              cinematicAudio.playClick();
              onClose();
            }}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Display Container */}
        <div className="relative bg-black flex items-center justify-center overflow-hidden border-b border-slate-800">
          <div
            className={`relative ${
              project.aspectRatio === '9:16'
                ? 'w-full max-w-xs aspect-[9/16] my-4 rounded-xl border border-cyan-500/30 shadow-2xl overflow-hidden'
                : 'w-full aspect-video'
            }`}
          >
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className={`w-full h-full object-cover ${isPlaying ? 'brightness-105' : 'brightness-90'}`}
            />

            {/* Cinematic Gradient Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

            {/* Live Visual Indicators */}
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-red-600/90 text-white font-bold">
                PRINCE CUT
              </span>
              <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-black/70 text-cyan-300 border border-cyan-500/30">
                {project.duration}
              </span>
            </div>

            {/* Big center play/pause button */}
            <button
              type="button"
              onClick={() => {
                cinematicAudio.playClick();
                setIsPlaying(!isPlaying);
              }}
              className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-slate-900/80 hover:bg-cyan-500 text-white hover:text-slate-950 border border-cyan-400/50 flex items-center justify-center backdrop-blur-md transition-all shadow-[0_0_30px_rgba(0,240,255,0.4)] active:scale-95"
              aria-label={isPlaying ? 'Pause video demo' : 'Play video demo'}
            >
              {isPlaying ? <Pause className="w-7 h-7" /> : <Play className="w-7 h-7 ml-0.5" />}
            </button>

            {/* Bottom Scrubber & Player Controls Bar */}
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-slate-950/90 backdrop-blur-md border-t border-slate-800/80 flex flex-col gap-2">
              {/* Progress bar */}
              <div
                className="w-full h-1.5 bg-slate-800 rounded cursor-pointer relative"
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const clickX = e.clientX - rect.left;
                  setProgress((clickX / rect.width) * 100);
                }}
              >
                <div
                  className="h-full bg-cyan-400 rounded relative"
                  style={{ width: `${progress}%` }}
                >
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_8px_#00f0ff]" />
                </div>
              </div>

              {/* Controls strip */}
              <div className="flex items-center justify-between text-xs font-mono text-slate-300">
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="hover:text-cyan-400 transition-colors"
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </button>

                  <button
                    type="button"
                    onClick={() => setProgress(0)}
                    className="hover:text-cyan-400 transition-colors"
                    title="Restart demo"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setIsMuted(!isMuted);
                      cinematicAudio.playClick();
                    }}
                    className="hover:text-cyan-400 transition-colors"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>

                  <span className="text-[11px] text-slate-400">
                    {Math.floor((progress / 100) * 165)}s / 165s
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  {/* Speed toggle */}
                  <div className="flex items-center gap-1 bg-slate-900 rounded p-0.5 border border-slate-800 text-[10px]">
                    {([1, 1.5, 2] as const).map((spd) => (
                      <button
                        key={spd}
                        type="button"
                        onClick={() => setPlaybackSpeed(spd)}
                        className={`px-1.5 py-0.5 rounded ${
                          playbackSpeed === spd ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400'
                        }`}
                      >
                        {spd}x
                      </button>
                    ))}
                  </div>

                  <span className="text-[11px] text-cyan-400 font-semibold">
                    {project.aspectRatio === '9:16' ? '9:16 Vertical Reel' : '16:9 Widescreen'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Info & Technical Breakdown */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
            <div>
              <div className="flex items-center gap-2 text-xs text-slate-400 font-mono mb-1">
                <span>Client: {project.client}</span>
                <span aria-hidden="true">·</span>
                <span className="text-cyan-400 font-semibold">{project.views} Views</span>
                <span aria-hidden="true">·</span>
                <span className="text-emerald-400 font-semibold">{project.retention} Retention</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
                {project.title}
              </h2>
            </div>

            <button
              type="button"
              onClick={() => {
                cinematicAudio.playCinematicWhoosh();
                onBookSimilarProject(project.title);
              }}
              className="px-5 py-2.5 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold text-xs tracking-wide shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all shrink-0 active:scale-95"
            >
              Order Similar Edit
            </button>
          </div>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {project.description}
          </p>

          {/* Technical Specifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="text-xs font-mono text-slate-400 block mb-1">COLOR GRADING</span>
              <p className="text-xs text-cyan-300 font-medium">{project.colorGrade}</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="text-xs font-mono text-slate-400 block mb-1">SOUND DESIGN & SFX</span>
              <p className="text-xs text-cyan-300 font-medium">{project.soundDesign}</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="text-xs font-mono text-slate-400 block mb-1">TOOLS EMPLOYED</span>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {project.toolsUsed.map((tool) => (
                  <span
                    key={tool}
                    className="px-2 py-0.5 text-[10px] font-mono rounded bg-slate-950 text-slate-300 border border-slate-800"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Key Editing Highlights */}
          <div className="space-y-2 pt-2">
            <span className="text-xs font-mono text-slate-400">EDITING BREAKDOWN & VALUE DELIVERED</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.keyHighlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
