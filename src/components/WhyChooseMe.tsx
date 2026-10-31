import { HeartHandshake, Eye, MessageSquare, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { CLIENT_TESTIMONIALS } from '../data/portfolioData';

interface WhyChooseMeProps {
  onWorkTogetherClick: () => void;
}

export function WhyChooseMe({ onWorkTogetherClick }: WhyChooseMeProps) {
  const pillars = [
    {
      title: 'Creative Storytelling',
      icon: Sparkles,
      desc: 'Visuals without emotion are just moving pixels. I structure pacing, tension, and release so your narrative captivates from the opening hook to the closing CTA.',
    },
    {
      title: 'Attention to Detail',
      icon: Eye,
      desc: 'Frame-by-frame scrutiny. Flawless audio leveling, zero dead air, surgically clean mask tracks, and calibrated color balance across varied cameras.',
    },
    {
      title: 'Smooth Transitions',
      icon: Sparkles,
      desc: 'Never generic presets. Dynamic whip pans, match cuts, speed ramps, and seamless invisible transitions that keep viewers in a state of continuous visual flow.',
    },
    {
      title: 'Professional Communication',
      icon: MessageSquare,
      desc: 'Direct, clear updates through Discord, WhatsApp, or Email. Responsive across international timezones with scheduled progress milestones.',
    },
    {
      title: 'Client Satisfaction',
      icon: HeartHandshake,
      desc: 'Revisions until you are 100% proud of the final cut. Fast turnaround times, secure cloud storage previews, and uncompressed delivery files.',
    },
  ];

  const workflowSteps = [
    {
      step: '01',
      title: 'Footage Intake & Creative Brief',
      desc: 'Share your raw files, reference videos, and target audience goals. We define the pacing rhythm, tone, and delivery deadline.',
    },
    {
      step: '02',
      title: 'Story Assembly & Rough Cut',
      desc: 'Removing filler, tightening the narrative arc, assembling the core storyline, and crafting the retention-critical 3-second hook.',
    },
    {
      step: '03',
      title: 'Sound Design & Motion FX',
      desc: 'Layering immersive multitrack sound effects, kinetic subtitle animations, custom graphics, and dynamic visual pattern interrupts.',
    },
    {
      step: '04',
      title: 'Color Grading & 4K Master',
      desc: 'Applying scene-matched cinematic LUTs, balancing skin tones, final audio master mastering, and lossless export for your platforms.',
    },
  ];

  return (
    <section id="why-me" className="py-24 relative border-t border-slate-900 bg-[#02050f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-mono tracking-widest text-cyan-400 uppercase">
            <span>05</span>
            <span aria-hidden="true">·</span>
            <span>Why Top Creators Choose Prince Edits</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight text-balance">
            The Difference Between Good Edits and Viral Results
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Content creators and brands trust PRINCE EDITS for consistency, speed, and creative edge that reflects directly in their view duration and subscriber growth.
          </p>
        </div>

        {/* 5 Core Pillars from User Prompt */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 space-y-3 group hover:shadow-[0_0_30px_-5px_rgba(0,240,255,0.15)]"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white font-display group-hover:text-cyan-300 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}

          {/* 6th Tile: Quick Call to Action card */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-950/50 to-slate-900 border border-cyan-500/30 flex flex-col justify-between space-y-4">
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-2">
                READY TO ELEVATE YOUR CONTENT?
              </span>
              <h3 className="text-lg font-bold text-white font-display">
                Let’s create your next breakthrough video.
              </h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Send your footage and let’s craft a cut that out-performs your channel average.
              </p>
            </div>

            <button
              type="button"
              onClick={onWorkTogetherClick}
              className="py-2.5 px-4 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold text-xs tracking-wide shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all flex items-center justify-center gap-2 active:scale-95"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 4-Step Production Workflow */}
        <div className="mb-20 space-y-8">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-slate-400 uppercase">
            <span>Seamless 4-Step Production Pipeline</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflowSteps.map((ws) => (
              <div
                key={ws.step}
                className="relative p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2"
              >
                <div className="text-2xl font-mono font-extrabold text-cyan-400/80">
                  {ws.step}
                </div>
                <h4 className="text-sm font-bold text-white font-display">
                  {ws.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {ws.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials from International Creators */}
        <div className="space-y-8">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-slate-400 uppercase">
            <span>What International Creators Say</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CLIENT_TESTIMONIALS.map((test) => (
              <div
                key={test.id}
                className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-cyan-400 font-bold">
                      {test.stat}
                    </span>
                    <span className="text-[11px] text-slate-500 font-mono">
                      {test.country}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
                    "{test.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-slate-800">
                  <div className="w-9 h-9 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-300 font-mono font-bold text-xs flex items-center justify-center">
                    {test.avatar}
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white font-display">
                      {test.name}
                    </h5>
                    <p className="text-[11px] text-slate-400">
                      {test.channel}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
