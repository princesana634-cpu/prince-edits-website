import { useState } from 'react';
import {
  Youtube,
  Smartphone,
  Flame,
  Film,
  Image as ImageIcon,
  Share2,
  Check,
  Calculator,
  ArrowRight,
  Clock,
  Sparkles,
} from 'lucide-react';
import { calculateProjectEstimate, type ServiceEstimateInput } from '../utils/portfolioLogic';
import { cinematicAudio } from '../utils/audioHelper';

interface ServicesProps {
  onSelectServiceForHire: (serviceName: string) => void;
}

export function Services({ onSelectServiceForHire }: ServicesProps) {
  const [estimateInput, setEstimateInput] = useState<ServiceEstimateInput>({
    serviceTypes: ['youtube'],
    videoQuantity: 1,
    deliverySpeed: 'standard',
    includeThumbnailPack: true,
  });

  const [calculatorOpen, setCalculatorOpen] = useState(false);

  const estimate = calculateProjectEstimate(estimateInput);

  const servicesList = [
    {
      id: 'youtube',
      icon: Youtube,
      title: 'YouTube Video Editing',
      description: 'Retention-engineered long-form storytelling. Dynamic visual pattern interrupts, pacing restructuring, customized lower thirds, and crystal clear voice mastering.',
      deliverables: ['Pacing & story restructuring', 'Sound design & background ducking', 'Dynamic zooms & graphic callouts', 'Up to 4K 60FPS export'],
      turnaround: '48–72 Hours',
      rate: 'From $140/video',
    },
    {
      id: 'reels',
      icon: Smartphone,
      title: 'TikTok & Instagram Reels',
      description: 'High-speed vertical edits tailored to bypass the 3-second scroll trap. Synchronized to trending audio, kinetic animated typography, and eye-catching visual transitions.',
      deliverables: ['First 0.3s hook design', 'Dynamic spring-animated captions', 'Punchy sound effects (swooshes, pops)', '9:16 mobile optimization'],
      turnaround: '24–48 Hours',
      rate: 'From $75/reel',
    },
    {
      id: 'shorts',
      icon: Flame,
      title: 'Shorts Editing',
      description: 'High-velocity YouTube Shorts built for maximum algorithm loop counts. Seamless end-to-beginning audio loops, snappy transitions, and captivating visual storytelling.',
      deliverables: ['Infinite loop cut technique', 'Custom colored subtitles', 'Soundtrack velocity ramping', 'Fast-paced graphic overlays'],
      turnaround: '24 Hours',
      rate: 'From $65/short',
    },
    {
      id: 'cinematic',
      icon: Film,
      title: 'Cinematic Video Editing',
      description: 'Film-grade post-production for automotive, travel, music videos, and commercial brand documentaries. 4K color grading, LUT creation, and cinematic audio foley.',
      deliverables: ['Log to Rec.709 color transformation', '2.39:1 anamorphic crop & letterbox', 'Multitrack binaural sound design', 'Speed ramps & motion tracking'],
      turnaround: '3–5 Days',
      rate: 'From $220/project',
    },
    {
      id: 'thumbnail',
      icon: ImageIcon,
      title: 'Professional Thumbnails',
      description: 'Click-Through-Rate (CTR) powerhouse thumbnails crafted in Adobe Photoshop. Facial expression cutouts, high-contrast glow edges, 3D text styling, and mobile readability.',
      deliverables: ['14%+ CTR visual hierarchy', 'Hair & edge precision cutout', 'Vibrant color grading & rims', 'Multi-variant A/B test options'],
      turnaround: '24 Hours',
      rate: 'From $40/thumbnail',
    },
    {
      id: 'social',
      icon: Share2,
      title: 'Social Media Content Editing',
      description: 'Comprehensive cross-platform repurposing. Transforming long-form podcasts, webinars, or streams into 10–20 viral micro-content clips with unified brand identity.',
      deliverables: ['Long-to-short form repurposing', 'Multi-platform aspect ratios', 'Consistent channel brand guide', 'Bulk batch delivery discounts'],
      turnaround: '3–4 Days',
      rate: 'Custom package',
    },
  ];

  const toggleServiceType = (type: 'youtube' | 'reels' | 'shorts' | 'cinematic' | 'thumbnail') => {
    cinematicAudio.playClick();
    setEstimateInput((prev) => {
      const exists = prev.serviceTypes.includes(type);
      if (exists && prev.serviceTypes.length === 1) return prev; // keep at least 1
      return {
        ...prev,
        serviceTypes: exists
          ? prev.serviceTypes.filter((t) => t !== type)
          : [...prev.serviceTypes, type],
      };
    });
  };

  return (
    <section id="services" className="py-24 relative border-t border-slate-900 bg-[#030712]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-cyan-400 uppercase">
              <span>02</span>
              <span aria-hidden="true">·</span>
              <span>Services & Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight text-balance">
              Tailored Post-Production for Modern Creators & Brands
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Every package is precision-engineered to boost your retention metrics, grow your subscriber base, and elevate your visual authority.
            </p>
          </div>

          <button
            type="button"
            onClick={() => {
              cinematicAudio.playClick();
              setCalculatorOpen(!calculatorOpen);
            }}
            className="self-start md:self-auto px-4 py-2.5 rounded-lg bg-slate-900 border border-cyan-500/30 hover:border-cyan-400 text-cyan-300 text-xs font-mono flex items-center gap-2 transition-all hover:shadow-[0_0_15px_rgba(0,240,255,0.2)]"
          >
            <Calculator className="w-4 h-4 text-cyan-400" />
            <span>{calculatorOpen ? 'Hide Cost Calculator' : 'Interactive Cost Estimator'}</span>
          </button>
        </div>

        {/* Interactive Estimator Drawer (Expandable) */}
        {calculatorOpen && (
          <div className="mb-14 p-6 sm:p-8 rounded-2xl bg-slate-950/90 border border-cyan-500/40 shadow-[0_0_35px_rgba(0,240,255,0.15)] space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h3 className="text-lg font-bold text-white font-display flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-cyan-400" />
                  Instant Project Cost & Turnaround Calculator
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Select your required services and turnaround speed for an instant estimate.
                </p>
              </div>
              <span className="text-xs font-mono text-cyan-400 px-2.5 py-1 rounded bg-cyan-950/60 border border-cyan-500/30">
                Transparent Pricing
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Step 1: Select services */}
              <div className="space-y-3">
                <span className="text-xs font-mono text-slate-400">1. SELECT REQUIRED SERVICES</span>
                <div className="flex flex-col gap-2">
                  {(['youtube', 'reels', 'shorts', 'cinematic'] as const).map((type) => {
                    const active = estimateInput.serviceTypes.includes(type);
                    return (
                      <button
                        key={type}
                        type="button"
                        onClick={() => toggleServiceType(type)}
                        className={`px-3 py-2 rounded-lg text-xs font-medium text-left flex items-center justify-between border transition-all ${
                          active
                            ? 'bg-cyan-950/50 border-cyan-400 text-cyan-200'
                            : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        <span className="capitalize">{type} Editing</span>
                        {active && <Check className="w-3.5 h-3.5 text-cyan-400" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Quantity & Speed */}
              <div className="space-y-4">
                <span className="text-xs font-mono text-slate-400">2. QUANTITY & TURNAROUND</span>
                <div>
                  <label className="text-xs text-slate-300 block mb-1">
                    Videos to edit: <span className="text-cyan-400 font-semibold">{estimateInput.videoQuantity}</span>
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={estimateInput.videoQuantity}
                    onChange={(e) =>
                      setEstimateInput({ ...estimateInput, videoQuantity: Number(e.target.value) })
                    }
                    className="w-full accent-cyan-400 cursor-pointer"
                  />
                </div>

                <div>
                  <label className="text-xs text-slate-300 block mb-1.5">Delivery Speed</label>
                  <div className="grid grid-cols-3 gap-1.5">
                    {[
                      { id: 'standard', label: 'Standard' },
                      { id: 'express_48h', label: '48h Express' },
                      { id: 'rush_24h', label: '24h Rush' },
                    ].map((sp) => (
                      <button
                        key={sp.id}
                        type="button"
                        onClick={() =>
                          setEstimateInput({
                            ...estimateInput,
                            deliverySpeed: sp.id as ServiceEstimateInput['deliverySpeed'],
                          })
                        }
                        className={`py-1.5 px-2 rounded text-[11px] font-mono text-center border transition-all ${
                          estimateInput.deliverySpeed === sp.id
                            ? 'bg-cyan-500 text-slate-950 font-bold border-cyan-400'
                            : 'bg-slate-900 text-slate-400 border-slate-800'
                        }`}
                      >
                        {sp.label}
                      </button>
                    ))}
                  </div>
                </div>

                <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer pt-1">
                  <input
                    type="checkbox"
                    checked={estimateInput.includeThumbnailPack}
                    onChange={(e) =>
                      setEstimateInput({ ...estimateInput, includeThumbnailPack: e.target.checked })
                    }
                    className="accent-cyan-400 rounded"
                  />
                  <span>Include High-CTR Thumbnail Design</span>
                </label>
              </div>

              {/* Step 3: Estimated Calculation Display */}
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono text-slate-400">ESTIMATED INVESTMENT</span>
                  <div className="mt-2 text-3xl font-extrabold text-white font-display tabular-nums">
                    ${estimate.totalPrice}
                    <span className="text-xs font-normal text-slate-400 ml-2">USD</span>
                  </div>

                  <div className="mt-3 space-y-1 text-xs text-slate-400 border-t border-slate-800 pt-2 font-mono">
                    <div className="flex justify-between">
                      <span>Delivery Time:</span>
                      <span className="text-cyan-300 font-medium">~{estimate.estimatedDays} Days</span>
                    </div>
                    {estimate.rushFee > 0 && (
                      <div className="flex justify-between text-amber-300">
                        <span>Speed Priority Fee:</span>
                        <span>+${estimate.rushFee}</span>
                      </div>
                    )}
                  </div>

                  <p className="mt-3 text-[11px] text-slate-400 leading-tight">
                    {estimate.recommendedWorkflow}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    cinematicAudio.playCinematicWhoosh();
                    onSelectServiceForHire(
                      `Estimated Package: ${estimateInput.serviceTypes.join(', ')} (${estimateInput.videoQuantity} videos, $${estimate.totalPrice})`
                    );
                  }}
                  className="mt-4 w-full py-2.5 px-4 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold text-xs tracking-wide transition-all shadow-[0_0_15px_rgba(0,240,255,0.3)] flex items-center justify-center gap-1.5"
                >
                  <span>Book This Estimate</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-900/90 transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-[0_0_30px_-5px_rgba(0,240,255,0.15)]"
              >
                <div>
                  {/* Icon & Rate */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 group-hover:border-cyan-400 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-cyan-300 font-semibold px-2.5 py-1 rounded bg-slate-950 border border-slate-800">
                      {service.rate}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white font-display mb-2 group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Deliverables List */}
                  <div className="space-y-2 border-t border-slate-800/80 pt-4 mb-6">
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer with Turnaround and Book CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-800 text-xs">
                  <div className="flex items-center gap-1.5 text-slate-400 font-mono">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{service.turnaround}</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      cinematicAudio.playClick();
                      onSelectServiceForHire(service.title);
                    }}
                    className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-1 group/btn transition-colors"
                  >
                    <span>Request Edit</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
