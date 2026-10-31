import { ArrowUp, Instagram, Linkedin, Mail, Film, Sparkles } from 'lucide-react';
import { cinematicAudio } from '../utils/audioHelper';

export function Footer() {
  const scrollToTop = () => {
    cinematicAudio.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#01040a] border-t border-slate-900 overflow-hidden">
      {/* Subtle top electric glow bar */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent shadow-[0_0_15px_#00f0ff]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        {/* Main Dramatic Brand Display */}
        <div className="text-center space-y-6 max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-cyan-400 uppercase">
            <Film className="w-3.5 h-3.5" />
            <span>CINEMATIC POST-PRODUCTION</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white font-display tracking-tight uppercase">
            PRINCE <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">EDITS</span>
          </h2>

          {/* Requested Slogan */}
          <p className="text-xl sm:text-2xl lg:text-3xl font-bold font-display tracking-widest uppercase text-cyan-300/90 drop-shadow-[0_0_20px_rgba(0,240,255,0.35)]">
            “BORN TO CREATE A HISTORY.”
          </p>

          <p className="text-slate-400 text-sm max-w-xl mx-auto leading-relaxed">
            Partnering with visionary YouTubers, international creators, and forward-thinking brands to produce timeless visual stories.
          </p>

          {/* Social Quick Links */}
          <div className="flex items-center justify-center gap-4 pt-4">
            <a
              href="mailto:Prince.Sana634@gmail.com"
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all"
              aria-label="Email Prince Edits"
            >
              <Mail className="w-5 h-5" />
            </a>

            <a
              href="https://instagram.com/prince.edits63"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all"
              aria-label="Instagram Profile"
            >
              <Instagram className="w-5 h-5" />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Quick Site Links & Jump to Top */}
        <div className="pt-8 border-t border-slate-900/90 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-6">
            <a href="#portfolio" className="hover:text-cyan-400 transition-colors">Work</a>
            <a href="#services" className="hover:text-cyan-400 transition-colors">Services</a>
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-500">© {new Date().getFullYear()} PRINCE EDITS. All Rights Reserved.</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 transition-colors"
              aria-label="Back to top of page"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
