import React, { useState } from 'react';
import { RESUME_DATA } from '../data/resumeData.ts';
import { ThreeHeroCanvas } from './ThreeHeroCanvas.tsx';
import {
  FileText,
  Download,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  ArrowRight,
  Cpu,
  Brain,
  Terminal,
  CheckCircle,
  Copy
} from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(RESUME_DATA.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section className="relative min-h-screen pt-24 pb-16 flex items-center justify-center overflow-hidden bg-cyber-grid bg-radial-vignette">
      {/* Background ambient glow points */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px]" />
      <div className="pointer-events-none absolute bottom-1/3 right-10 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[130px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Hero Narrative & Verified Profile */}
          <div className="lg:col-span-7 flex flex-col justify-center z-10">
            {/* Status & Verification Chip */}
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-gray-900/80 px-3.5 py-1.5 backdrop-blur-md mb-6 w-fit shadow-lg shadow-cyan-950/40">
              <span className="flex h-2 w-2 rounded-full bg-cyan-400" />
              <span className="text-xs font-mono text-cyan-300 tracking-wider uppercase">
                AI/ML Engineer & Researcher • Available for Opportunities
              </span>
            </div>

            {/* Candidate Name */}
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white uppercase leading-[1.08]">
              {RESUME_DATA.personal.name}
            </h1>

            {/* Professional Titles */}
            <div className="mt-4 flex flex-wrap items-center gap-2 font-mono text-sm sm:text-base text-gray-300">
              <span className="text-cyan-400 font-semibold">NLP Engineer</span>
              <span className="text-gray-600">|</span>
              <span className="text-blue-400 font-semibold">AI/ML Engineer</span>
              <span className="text-gray-600">|</span>
              <span className="text-sky-300 font-semibold">LLM & Generative AI Developer</span>
            </div>

            {/* Academic Status */}
            <div className="mt-3 flex flex-wrap items-center gap-2 text-xs font-mono text-gray-400">
              <span className="rounded bg-cyan-950/60 border border-cyan-800/60 px-2 py-0.5 text-cyan-300 font-medium">
                M.Tech IT @ SGSITS (Current)
              </span>
              <span>•</span>
              <span className="rounded bg-gray-900 border border-gray-800 px-2 py-0.5 text-gray-300">
                B.Tech CSE (Completed)
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-gray-400">
                <MapPin className="h-3 w-3 text-cyan-400" />
                Madhya Pradesh, India
              </span>
            </div>

            {/* Concise Compelling Bio derived purely from Resume */}
            <p className="mt-6 text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl">
              Specializing in <span className="text-white font-medium">Natural Language Processing</span>,{' '}
              <span className="text-white font-medium">Large Language Models</span>,{' '}
              <span className="text-white font-medium">Generative AI</span>, and{' '}
              <span className="text-white font-medium">Deep Learning</span>. Proven experience building
              intelligent automation systems, conversational AI, and scalable machine learning workflows using{' '}
              <span className="text-cyan-300 font-mono text-sm">PyTorch</span>,{' '}
              <span className="text-cyan-300 font-mono text-sm">TensorFlow</span>, and{' '}
              <span className="text-cyan-300 font-mono text-sm">Hugging Face Transformers</span>.
            </p>

            {/* CTA Button Group */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href={RESUME_DATA.personal.resumePdfUrl}
                download="Masoom_Choudhary_Resume.pdf"
                className="flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 px-6 py-3.5 text-sm font-mono font-semibold text-white shadow-xl shadow-cyan-500/25 hover:from-cyan-400 hover:to-blue-500 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Download className="h-4 w-4" />
                <span>Download Resume (PDF)</span>
              </a>

              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 rounded-xl border border-cyan-500/30 bg-gray-900/80 px-5 py-3.5 text-sm font-mono font-medium text-cyan-300 hover:border-cyan-400 hover:bg-gray-800/80 transition-all backdrop-blur-md"
              >
                <FileText className="h-4 w-4 text-cyan-400" />
                <span>Inspect Verified Resume</span>
              </button>

              <a
                href="#projects"
                className="flex items-center gap-1.5 px-4 py-3.5 text-sm font-mono text-gray-400 hover:text-white transition-colors group"
              >
                <span>View Projects</span>
                <ArrowRight className="h-4 w-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Quick Contact & Verification Row */}
            <div className="mt-10 pt-6 border-t border-gray-800/80 flex flex-wrap items-center gap-4 text-xs font-mono text-gray-400">
              {/* LinkedIn */}
              <a
                href={RESUME_DATA.personal.linkedin.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-gray-300 hover:text-cyan-400 transition-colors p-1"
                title="LinkedIn Profile"
              >
                <Linkedin className="h-4 w-4 text-cyan-400" />
                <span>{RESUME_DATA.personal.linkedin.display}</span>
              </a>

              {/* Email Copy */}
              <button
                onClick={copyEmail}
                className="flex items-center gap-1.5 text-gray-300 hover:text-cyan-400 transition-colors p-1"
                title="Copy Email"
              >
                <Mail className="h-4 w-4 text-cyan-400" />
                <span>{copiedEmail ? 'Copied to Clipboard!' : RESUME_DATA.personal.email}</span>
                {copiedEmail ? (
                  <CheckCircle className="h-3.5 w-3.5 text-emerald-400" />
                ) : (
                  <Copy className="h-3 w-3 text-gray-500" />
                )}
              </button>

              {/* Phone */}
              <a
                href={`tel:${RESUME_DATA.personal.phone}`}
                className="flex items-center gap-1.5 text-gray-300 hover:text-cyan-400 transition-colors p-1"
              >
                <Phone className="h-4 w-4 text-cyan-400" />
                <span>{RESUME_DATA.personal.phone}</span>
              </a>
            </div>

            {/* Verified Achievements Micro-Pills */}
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-mono text-gray-500 uppercase tracking-wider">
                Documented Metrics:
              </span>
              <span className="rounded-md border border-cyan-500/20 bg-cyan-950/40 px-2.5 py-1 text-xs font-mono text-cyan-300">
                Naukri Young Turks: 95.41 %tile
              </span>
              <span className="rounded-md border border-blue-500/20 bg-blue-950/40 px-2.5 py-1 text-xs font-mono text-blue-300">
                TCS CodeVita: Rank 5,530
              </span>
              <span className="rounded-md border border-emerald-500/20 bg-emerald-950/40 px-2.5 py-1 text-xs font-mono text-emerald-300">
                Smart India Hackathon (SIH)
              </span>
              <span className="rounded-md border border-purple-500/20 bg-purple-950/40 px-2.5 py-1 text-xs font-mono text-purple-300">
                IBM SkillsBuild 3x Certified
              </span>
            </div>
          </div>

          {/* Right Column: 3D Interactive Three.js Scene */}
          <div className="lg:col-span-5 h-[480px] sm:h-[540px] lg:h-[620px] relative rounded-3xl border border-cyan-500/20 bg-gradient-to-b from-gray-900/40 via-gray-950/60 to-black/80 shadow-2xl overflow-hidden backdrop-blur-xl">
            {/* Header pill overlay inside 3D viewport */}
            <div className="pointer-events-none absolute top-4 left-4 right-4 z-10 flex items-center justify-between">
              <div className="flex items-center gap-2 rounded-full border border-cyan-500/30 bg-gray-950/80 px-3 py-1 backdrop-blur-md">
                <Brain className="h-3.5 w-3.5 text-cyan-400 animate-pulse" />
                <span className="text-[11px] font-mono text-cyan-300 uppercase tracking-wider">
                  Neural Synapse Core
                </span>
              </div>
              <span className="rounded-full border border-gray-800 bg-gray-950/80 px-2.5 py-1 text-[10px] font-mono text-gray-400">
                Real-Time 3D WebGL
              </span>
            </div>

            {/* Real Three.js Canvas */}
            <ThreeHeroCanvas interactive={true} />

            {/* Subtle bottom gradient shadow to ground the viewport */}
            <div className="pointer-events-none absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-gray-950 to-transparent" />
          </div>

        </div>
      </div>
    </section>
  );
};
