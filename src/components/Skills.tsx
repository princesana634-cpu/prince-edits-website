import { useState } from 'react';
import { Cpu, CheckCircle, Zap, Sparkles, Layers, Sliders, Film } from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';
import { cinematicAudio } from '../utils/audioHelper';

export function Skills() {
  const [activeSkillId, setActiveSkillId] = useState(SKILLS_DATA[0].id);

  const activeSkill = SKILLS_DATA.find((s) => s.id === activeSkillId) || SKILLS_DATA[0];

  const technicalCompetencies = [
    { title: 'Frame-Accurate Keyframing', desc: 'Custom velocity bezier curves for elastic zoom-ins and whips.' },
    { title: 'Audio-Beat Synchronization', desc: 'Matching cuts, zooms, and SFX impacts to high-frequency transients.' },
    { title: 'Log to Rec.709 Color Science', desc: 'Technical CST transforms maintaining clean highlights and organic skin tones.' },
    { title: '3D Camera Motion & Parallax', desc: 'Layer isolation, camera tracking, and depth-of-field simulation.' },
    { title: 'Binaural Sound & Foley', desc: 'Spatial panning, stereo widening, sub-bass enhancement, and audio denoise.' },
    { title: 'High-CTR Typography & Thumbnails', desc: 'Photoshop 3D extrusion, rim-light painting, and visual hierarchy.' },
  ];

  return (
    <section id="skills" className="py-24 relative border-t border-slate-900 bg-[#030714]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-mono tracking-widest text-cyan-400 uppercase">
            <span>04</span>
            <span aria-hidden="true">·</span>
            <span>Software Mastery & Technical Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight text-balance">
            Precision Software Arsenal for High-End Production
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            From industry-standard non-linear editing suites to cutting-edge mobile motion graphic tools, every tool is leveraged for peak visual punch.
          </p>
        </div>

        {/* 5 Software Navigation Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
          {SKILLS_DATA.map((skill) => {
            const isSelected = skill.id === activeSkillId;
            return (
              <button
                key={skill.id}
                type="button"
                onClick={() => {
                  cinematicAudio.playClick();
                  setActiveSkillId(skill.id);
                }}
                className={`p-4 rounded-xl border text-left transition-all duration-200 ${
                  isSelected
                    ? 'bg-slate-900 border-cyan-400 shadow-[0_0_20px_rgba(0,240,255,0.25)]'
                    : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700 text-slate-400 hover:text-white'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400">
                    {skill.category.split(' ')[0]}
                  </span>
                  <span className="text-xs font-mono font-semibold text-slate-300 tabular-nums">
                    {skill.level}%
                  </span>
                </div>
                <div className="text-sm font-bold text-white font-display truncate">
                  {skill.name}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Software Deep Dive Panel */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-cyan-500/30 backdrop-blur-md mb-16 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 text-xs font-mono rounded bg-cyan-950/60 text-cyan-300 border border-cyan-500/40">
                  {activeSkill.category}
                </span>
                <span className="text-xs font-mono text-slate-400">Mastery Level: {activeSkill.level}%</span>
              </div>

              <h3 className="text-2xl font-bold text-white font-display">
                {activeSkill.name} Workflow & Pipeline
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {activeSkill.description}
              </p>

              {/* Skill meter */}
              <div className="space-y-1 pt-2">
                <div className="flex justify-between text-xs font-mono text-slate-400">
                  <span>Production Proficiency</span>
                  <span className="text-cyan-400 font-semibold">{activeSkill.level}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-500"
                    style={{ width: `${activeSkill.level}%` }}
                  />
                </div>
              </div>

              {/* Key Features Pill-free Grid */}
              <div className="grid grid-cols-2 gap-2 pt-2">
                {activeSkill.features.map((feat) => (
                  <div key={feat} className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Technical Badge Callout */}
            <div className="lg:col-span-5 p-6 rounded-xl bg-slate-950/90 border border-slate-800 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                <Cpu className="w-4 h-4" />
                <span>HARDWARE & TIMELINE SPECIFICATIONS</span>
              </div>

              <div className="space-y-3 text-xs font-mono text-slate-300 border-t border-slate-800 pt-3">
                <div className="flex justify-between">
                  <span className="text-slate-400">Export Codec:</span>
                  <span className="text-white">ProRes 422HQ / H.265 Master</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Color Pipeline:</span>
                  <span className="text-white">ACEScc / Rec.709 Scene-Referred</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Audio Sample Rate:</span>
                  <span className="text-white">48.000 kHz 24-bit Float</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Delivery Guarantee:</span>
                  <span className="text-cyan-300 font-semibold">Zero Quality Compression</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Competencies Grid */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-slate-400 uppercase">
            <span>Specialized Post-Production Disciplines</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalCompetencies.map((comp, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-cyan-500/30 transition-all group"
              >
                <div className="flex items-center gap-2.5 text-white font-bold text-sm mb-2 font-display group-hover:text-cyan-300 transition-colors">
                  <Zap className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{comp.title}</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {comp.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
