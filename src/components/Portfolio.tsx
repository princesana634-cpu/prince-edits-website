import { useState } from 'react';
import { Play, Eye, Search, Sparkles, Filter } from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '../data/portfolioData';
import { filterProjects, type CategoryFilter, type Project } from '../utils/portfolioLogic';
import { CinemaModal } from './CinemaModal';
import { cinematicAudio } from '../utils/audioHelper';

interface PortfolioProps {
  onOrderProject: (title: string) => void;
}

export function Portfolio({ onOrderProject }: PortfolioProps) {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filteredProjects = filterProjects(PORTFOLIO_PROJECTS, selectedCategory, searchQuery);

  const categories: { id: CategoryFilter; label: string }[] = [
    { id: 'all', label: 'All Projects' },
    { id: 'youtube', label: 'YouTube' },
    { id: 'reels', label: 'Reels' },
    { id: 'shorts', label: 'Shorts' },
    { id: 'cinematic', label: 'Cinematic Edits' },
  ];

  return (
    <section id="portfolio" className="py-24 relative border-t border-slate-900 bg-[#02050e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-cyan-400 uppercase">
              <span>03</span>
              <span aria-hidden="true">·</span>
              <span>Selected Works & Case Studies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight text-balance">
              Engineered to Command Attention & Drive Retention
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Explore high-impact video edits produced for international YouTubers, fashion brands, and commercial filmmakers.
            </p>
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search by tool, style, client..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs rounded-lg bg-slate-900/90 border border-slate-800 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
            />
          </div>
        </div>

        {/* Category Filter Buttons (Functional Tabs per Section 1.A DO) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 border-b border-slate-800/80 no-scrollbar">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  cinematicAudio.playClick();
                  setSelectedCategory(cat.id);
                }}
                className={`px-4 py-2 text-xs font-medium rounded-lg whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? 'bg-cyan-400 text-slate-950 font-semibold shadow-[0_0_15px_rgba(0,240,255,0.3)]'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900 border border-transparent hover:border-slate-800'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="p-12 text-center rounded-2xl bg-slate-900/40 border border-slate-800 max-w-md mx-auto my-8">
            <Filter className="w-8 h-8 text-slate-500 mx-auto mb-3" />
            <h3 className="text-sm font-semibold text-white mb-1">No matching projects found</h3>
            <p className="text-xs text-slate-400 mb-4">
              Try adjusting your search query or switching to another category.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Projects Grid: Bento Masonry Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const isVertical = project.aspectRatio === '9:16';
            return (
              <div
                key={project.id}
                className="group relative rounded-2xl overflow-hidden bg-slate-900/50 border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between shadow-xl hover:shadow-[0_0_35px_-10px_rgba(0,240,255,0.2)]"
              >
                {/* Media Container with Thumbnail & Play Button */}
                <div
                  className={`relative w-full overflow-hidden bg-black ${
                    isVertical ? 'aspect-[9/12]' : 'aspect-video'
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/40" />

                  {/* Top Meta Tag without pill box */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-slate-950/80 text-cyan-300 border border-cyan-500/30 backdrop-blur-md">
                      {project.category.toUpperCase()}
                    </span>
                    <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-slate-950/80 text-slate-300 border border-slate-800 backdrop-blur-md">
                      {project.duration}
                    </span>
                  </div>

                  {/* Center Play Button for Demo */}
                  <button
                    type="button"
                    onClick={() => {
                      cinematicAudio.playCinematicWhoosh();
                      setActiveModalProject(project);
                    }}
                    className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-slate-900/80 hover:bg-cyan-400 text-white hover:text-slate-950 border border-cyan-400/40 flex items-center justify-center backdrop-blur-md shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all group-hover:scale-110 active:scale-95"
                    aria-label={`Play demonstration for ${project.title}`}
                  >
                    <Play className="w-5 h-5 ml-0.5 fill-current" />
                  </button>
                </div>

                {/* Card Content & Details */}
                <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Unboxed Metadata with Typographic Separators */}
                    <div className="flex items-center gap-2 text-xs text-slate-400 font-mono mb-1.5">
                      <span>{project.client}</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-cyan-300 font-medium">{project.views}</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-emerald-400">{project.retention} Ret.</span>
                    </div>

                    <h3 className="text-lg font-bold text-white font-display group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs text-slate-400 line-clamp-2 mt-1 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tools & Details Trigger */}
                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                      <span>{project.toolsUsed[0]}</span>
                      {project.toolsUsed.length > 1 && (
                        <span>+{project.toolsUsed.length - 1} more</span>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        cinematicAudio.playClick();
                        setActiveModalProject(project);
                      }}
                      className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Details & Breakdown</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Cinema Modal Lightbox */}
      {activeModalProject && (
        <CinemaModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
          onBookSimilarProject={(title) => {
            setActiveModalProject(null);
            onOrderProject(title);
          }}
        />
      )}
    </section>
  );
}
