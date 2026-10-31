import { useState } from 'react';
import {
  Mail,
  Instagram,
  Linkedin,
  Copy,
  Check,
  Send,
  Sparkles,
  Link as LinkIcon,
  Clock,
  DollarSign,
  AlertCircle,
  CheckCircle2,
} from 'lucide-react';
import { validateContactForm, type ContactFormState } from '../utils/portfolioLogic';
import { cinematicAudio } from '../utils/audioHelper';

interface ContactProps {
  prefilledMessage?: string;
}

export function Contact({ prefilledMessage = '' }: ContactProps) {
  const [form, setForm] = useState<ContactFormState>({
    name: '',
    email: '',
    projectType: 'YouTube Video Editing',
    budgetRange: '$500 - $1,000',
    timeline: '3 - 5 Days',
    message: prefilledMessage || '',
    footageLink: '',
  });

  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const copyToClipboard = (text: string, fieldId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldId);
    cinematicAudio.playClick();
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    cinematicAudio.playClick();

    const validation = validateContactForm(form);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      cinematicAudio.playCinematicWhoosh();
    }, 700);
  };

  const mailtoUrl = `mailto:Prince.Sana634@gmail.com?subject=${encodeURIComponent(
    `Project Inquiry: ${form.projectType} from ${form.name || 'Creator'}`
  )}&body=${encodeURIComponent(
    `Hello Prince,\n\nI would like to hire you for video editing.\n\nProject Type: ${form.projectType}\nBudget Range: ${form.budgetRange}\nTimeline: ${form.timeline}\nFootage Link: ${form.footageLink || 'N/A'}\n\nProject Details:\n${form.message}\n\nBest regards,\n${form.name} (${form.email})`
  )}`;

  return (
    <section id="contact" className="py-24 relative border-t border-slate-900 bg-[#030713]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-mono tracking-widest text-cyan-400 uppercase">
            <span>06</span>
            <span aria-hidden="true">·</span>
            <span>Initiate Collaboration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight text-balance">
            Let’s Turn Your Vision Into a Visual Masterpiece
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Ready to scale your content, raise audience retention, and outshine competitors? Drop your project details below or reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white font-display">
                Direct Channels & Social Presence
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                I work with creators, brands, and agencies worldwide. Feel free to reach out directly via Email, Instagram, or LinkedIn.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {/* Email */}
              <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center justify-between group hover:border-cyan-500/40 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-cyan-950/70 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 uppercase">Email Me Directly</span>
                    <a
                      href="mailto:Prince.Sana634@gmail.com"
                      className="text-sm font-semibold text-white block hover:text-cyan-400 transition-colors font-mono"
                    >
                      Prince.Sana634@gmail.com
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => copyToClipboard('Prince.Sana634@gmail.com', 'email')}
                  className="p-2 text-slate-400 hover:text-cyan-400 hover:bg-slate-800 rounded-lg transition-colors"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copiedField === 'email' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Instagram */}
              <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center justify-between group hover:border-cyan-500/40 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-cyan-950/70 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 uppercase">Instagram DM</span>
                    <a
                      href="https://instagram.com/prince.edits63"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-white block hover:text-cyan-400 transition-colors font-mono"
                    >
                      @prince.edits63
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => copyToClipboard('@prince.edits63', 'instagram')}
                  className="p-2 text-slate-400 hover:text-cyan-400 hover:bg-slate-800 rounded-lg transition-colors"
                  title="Copy Instagram handle"
                  aria-label="Copy Instagram handle"
                >
                  {copiedField === 'instagram' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* LinkedIn */}
              <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center justify-between group hover:border-cyan-500/40 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-cyan-950/70 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 uppercase">Professional Network</span>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-white block hover:text-cyan-400 transition-colors"
                    >
                      Prince Edits
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => copyToClipboard('Prince Edits', 'linkedin')}
                  className="p-2 text-slate-400 hover:text-cyan-400 hover:bg-slate-800 rounded-lg transition-colors"
                  title="Copy LinkedIn profile"
                  aria-label="Copy LinkedIn profile"
                >
                  {copiedField === 'linkedin' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Quick Guarantees */}
            <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-3">
              <span className="text-xs font-mono text-cyan-400 uppercase">CLIENT COMMITTAL</span>
              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>24-Hour initial response guaranteed</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Clear milestone check-ins with Frame.io/Drive previews</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Strict NDA protection for unreleased creator footage</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Professional Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-cyan-500/30 shadow-2xl backdrop-blur-md">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-cyan-950 border border-cyan-400 text-cyan-300 mx-auto flex items-center justify-center shadow-[0_0_30px_rgba(0,240,255,0.4)]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-display">
                    Project Request Received!
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-cyan-400 font-semibold">{form.name}</span>. I have logged your request for <span className="text-cyan-400 font-semibold">{form.projectType}</span>. You can also send this inquiry directly to my inbox via your preferred mail client.
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={mailtoUrl}
                      className="px-6 py-2.5 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs tracking-wide shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all flex items-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Open in Email App</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setForm({
                          name: '',
                          email: '',
                          projectType: 'YouTube Video Editing',
                          budgetRange: '$500 - $1,000',
                          timeline: '3 - 5 Days',
                          message: '',
                          footageLink: '',
                        });
                      }}
                      className="px-6 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition-colors"
                    >
                      Submit Another Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="border-b border-slate-800 pb-3">
                    <h3 className="text-xl font-bold text-white font-display">
                      Project Details & Estimate Form
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Fill out this quick form and let’s start editing your next video.
                    </p>
                  </div>

                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-mono text-slate-300 mb-1.5">
                        Your Name / Channel Name <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="e.g. Alex (Wanderer Media)"
                        className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border text-xs text-slate-100 placeholder:text-slate-600 focus:outline-none transition-colors ${
                          errors.name
                            ? 'border-red-500 focus:border-red-400'
                            : 'border-slate-800 focus:border-cyan-400'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-mono text-slate-300 mb-1.5">
                        Email Address <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="alex@creators.co"
                        className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border text-xs text-slate-100 placeholder:text-slate-600 focus:outline-none transition-colors ${
                          errors.email
                            ? 'border-red-500 focus:border-red-400'
                            : 'border-slate-800 focus:border-cyan-400'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Service Type */}
                  <div>
                    <label htmlFor="contact-service" className="block text-xs font-mono text-slate-300 mb-1.5">
                      Service Required <span className="text-cyan-400">*</span>
                    </label>
                    <select
                      id="contact-service"
                      value={form.projectType}
                      onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-100 focus:outline-none focus:border-cyan-400 transition-colors"
                    >
                      <option value="YouTube Video Editing">YouTube Video Editing (Long-form)</option>
                      <option value="TikTok & Instagram Reels">TikTok & Instagram Reels (Vertical)</option>
                      <option value="Shorts Editing">YouTube Shorts Editing</option>
                      <option value="Cinematic Video Editing">Cinematic Video Editing (Color Grade + Master)</option>
                      <option value="Professional Thumbnails">Professional YouTube Thumbnails</option>
                      <option value="Social Media Content Editing">Full Social Media Content Repurposing</option>
                    </select>
                  </div>

                  {/* Budget & Timeline Split */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-budget" className="block text-xs font-mono text-slate-300 mb-1.5">
                        Estimated Budget
                      </label>
                      <div className="relative">
                        <DollarSign className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <select
                          id="contact-budget"
                          value={form.budgetRange}
                          onChange={(e) => setForm({ ...form, budgetRange: e.target.value })}
                          className="w-full pl-8 pr-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-100 focus:outline-none focus:border-cyan-400 transition-colors"
                        >
                          <option value="$150 - $300">$150 - $300 (Single video)</option>
                          <option value="$500 - $1,000">$500 - $1,000 (Multi-video pack)</option>
                          <option value="$1,000 - $2,500">$1,000 - $2,500 (Monthly retainer)</option>
                          <option value="$2,500+">$2,500+ (High-end commercial)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact-timeline" className="block text-xs font-mono text-slate-300 mb-1.5">
                        Desired Delivery Timeline
                      </label>
                      <div className="relative">
                        <Clock className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <select
                          id="contact-timeline"
                          value={form.timeline}
                          onChange={(e) => setForm({ ...form, timeline: e.target.value })}
                          className="w-full pl-8 pr-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-100 focus:outline-none focus:border-cyan-400 transition-colors"
                        >
                          <option value="24 Hours (Rush)">24 Hours (Rush priority)</option>
                          <option value="48 Hours (Express)">48 Hours (Express)</option>
                          <option value="3 - 5 Days">3 - 5 Days (Standard)</option>
                          <option value="Ongoing Retainer">Ongoing Channel Retainer</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Footage Link */}
                  <div>
                    <label htmlFor="contact-footage" className="block text-xs font-mono text-slate-300 mb-1.5">
                      Raw Footage / Reference Link (Google Drive, Dropbox, WeTransfer)
                    </label>
                    <div className="relative">
                      <LinkIcon className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        id="contact-footage"
                        type="url"
                        value={form.footageLink}
                        onChange={(e) => setForm({ ...form, footageLink: e.target.value })}
                        placeholder="https://drive.google.com/drive/folders/..."
                        className="w-full pl-8 pr-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Project Details Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-mono text-slate-300 mb-1.5">
                      Project Goals & Video Vision <span className="text-cyan-400">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell me about your channel, target audience, preferred editing style, music vibe, or references..."
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border text-xs text-slate-100 placeholder:text-slate-600 focus:outline-none transition-colors ${
                        errors.message
                          ? 'border-red-500 focus:border-red-400'
                          : 'border-slate-800 focus:border-cyan-400'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Requested Button: "Let's Work Together" */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-sm tracking-wide shadow-[0_0_25px_rgba(0,240,255,0.4)] hover:shadow-[0_0_35px_rgba(0,240,255,0.6)] transition-all flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending inquiry...</span>
                    ) : (
                      <>
                        <span>Let’s Work Together</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
