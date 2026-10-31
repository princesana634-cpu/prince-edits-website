import { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X } from 'lucide-react';
import { cinematicAudio } from '../utils/audioHelper';

interface NavbarProps {
  onHireMeClick: () => void;
}

export function Navbar({ onHireMeClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [soundActive, setSoundActive] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const nextState = cinematicAudio.toggleSound();
    setSoundActive(nextState);
  };

  const navLinks = [
    { label: 'Work', href: '#portfolio' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Why Me', href: '#why-me' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#030712]/90 backdrop-blur-md border-b border-cyan-500/15 py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="flex items-center gap-2 text-xl font-bold tracking-tight text-white whitespace-nowrap shrink-0 group focus:outline-none"
          >
            <span className="font-display tracking-wider">PRINCE</span>
            <span className="text-cyan-400 font-display tracking-widest text-sm px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30 group-hover:border-cyan-400 group-hover:shadow-[0_0_12px_rgba(0,240,255,0.4)] transition-all">
              EDITS
            </span>
          </a>

          {/* Zone 2: 4-5 single-line clean text links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => cinematicAudio.playClick()}
                className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-cyan-400 hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 primary action + subtle sound toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={toggleSound}
              type="button"
              className="p-2 text-slate-400 hover:text-cyan-400 rounded-lg hover:bg-slate-900/60 border border-transparent hover:border-slate-800 transition-colors"
              title={soundActive ? 'Mute cinematic SFX' : 'Enable cinematic SFX'}
              aria-label={soundActive ? 'Mute sound effects' : 'Enable sound effects'}
            >
              {soundActive ? <Volume2 className="w-4 h-4 text-cyan-400" /> : <VolumeX className="w-4 h-4" />}
            </button>

            <button
              onClick={() => {
                cinematicAudio.playCinematicWhoosh();
                onHireMeClick();
              }}
              type="button"
              className="px-5 py-2 text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg shadow-[0_0_20px_rgba(0,240,255,0.35)] hover:shadow-[0_0_30px_rgba(0,240,255,0.55)] transition-all whitespace-nowrap shrink-0 active:scale-95"
            >
              Hire Me
            </button>

            {/* Mobile menu hamburger button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-400 hover:text-white"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 rounded-xl bg-slate-900/95 border border-cyan-500/20 backdrop-blur-xl">
            <nav className="flex flex-col gap-3 text-sm">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => {
                    cinematicAudio.playClick();
                    setMobileMenuOpen(false);
                  }}
                  className="py-2 px-3 rounded-lg text-slate-200 hover:text-cyan-400 hover:bg-slate-800/60 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
