import React from 'react';
import { RESUME_DATA } from '../data/resumeData.ts';
import {
  Brain,
  Cpu,
  Workflow,
  Sparkles,
  BookOpen,
  Compass,
  CheckCircle2,
  Code2,
  Layers,
  GraduationCap
} from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-24 bg-gray-950/60 border-t border-gray-900">
      {/* Decorative ambient gradient */}
      <div className="pointer-events-none absolute top-10 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/30 px-3.5 py-1 text-xs font-mono text-cyan-300 uppercase tracking-widest mb-3">
            <Compass className="h-3.5 w-3.5 text-cyan-400" />
            <span>Profile & Orientation</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            About <span className="text-gradient-cyan">Masoom Choudhary</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-400 max-w-2xl font-sans">
            AI/ML Engineer focused on generative models, scalable NLP architectures, and intelligent automation pipelines.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Official Professional Summary & Core Competencies */}
          <div className="lg:col-span-7 space-y-6">
            {/* Professional Summary Card */}
            <div className="rounded-2xl border border-cyan-500/20 bg-gray-900/40 p-6 sm:p-8 backdrop-blur-xl relative overflow-hidden group hover:border-cyan-500/40 transition-colors">
              <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all" />
              
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  <Brain className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-white">
                    Verified Professional Summary
                  </h3>
                  <p className="text-xs font-mono text-cyan-400/80">From Documented Resume</p>
                </div>
              </div>

              <blockquote className="text-sm sm:text-base text-gray-300 leading-relaxed font-sans border-l-2 border-cyan-500/40 pl-4 py-1 italic">
                "{RESUME_DATA.summary}"
              </blockquote>

              {/* Core documented competency cards */}
              <div className="mt-6 pt-6 border-t border-gray-800/80 space-y-3">
                <span className="text-xs font-mono uppercase text-gray-400 font-semibold tracking-wider block mb-2">
                  Key Technical Competencies:
                </span>
                {RESUME_DATA.coreCompetencies.map((comp, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-gray-300">
                    <CheckCircle2 className="h-4 w-4 text-cyan-400 mt-0.5 shrink-0" />
                    <span>{comp}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Journey Highlight */}
            <div className="rounded-2xl border border-gray-800 bg-gray-900/30 p-6 backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-white">
                    Educational Trajectory
                  </h3>
                  <p className="text-xs font-mono text-gray-400">Authentic Academic Milestones</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {RESUME_DATA.education.map((edu, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl border border-gray-800/80 bg-gray-950/60 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-display font-bold text-white text-sm">
                          {edu.degree}
                        </span>
                        <span
                          className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                            edu.status === 'In Progress'
                              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                              : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                          }`}
                        >
                          {edu.status}
                        </span>
                      </div>
                      <div className="text-xs text-gray-400">{edu.field}</div>
                      <div className="text-[11px] text-gray-500 mt-1 line-clamp-2">
                        {edu.institution}
                      </div>
                    </div>
                    <div className="mt-3 pt-2 border-t border-gray-800/60 flex items-center justify-between text-xs font-mono">
                      <span className="text-gray-400">{edu.period}</span>
                      {edu.score && <span className="text-cyan-400 font-bold">{edu.score}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Verified Areas of Interest & Architecture Pillars */}
          <div className="lg:col-span-5 space-y-6">
            {/* Areas of Interest Card */}
            <div className="rounded-2xl border border-cyan-500/20 bg-gray-900/40 p-6 sm:p-8 backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-white">
                    Documented Areas of Interest
                  </h3>
                  <p className="text-xs font-mono text-gray-400">Research & Focus Spheres</p>
                </div>
              </div>

              <p className="text-xs text-gray-400 mb-4 font-sans">
                Extracted directly from the resume's "Areas of Interest" section:
              </p>

              <div className="flex flex-wrap gap-2.5">
                {RESUME_DATA.areasOfInterest.map((interest, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-1.5 rounded-xl border border-gray-800 bg-gray-950/70 px-3.5 py-2 text-xs font-mono text-gray-200 hover:border-cyan-400/50 hover:bg-cyan-950/20 transition-all cursor-default"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                    <span>{interest}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Engineering Highlights Quick Stats */}
            <div className="rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900/60 to-gray-950/80 p-6 backdrop-blur-xl">
              <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                <Workflow className="h-4 w-4 text-cyan-400" />
                <span>Verified Accomplishment Ledger</span>
              </h4>

              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 rounded-xl bg-gray-950/60 border border-gray-800/80 flex items-center justify-between">
                  <span className="text-gray-400">Naukri Young Turks</span>
                  <span className="text-cyan-300 font-bold">95.41 Percentile</span>
                </div>
                <div className="p-3 rounded-xl bg-gray-950/60 border border-gray-800/80 flex items-center justify-between">
                  <span className="text-gray-400">TCS CodeVita Global</span>
                  <span className="text-blue-300 font-bold">Rank 5,530</span>
                </div>
                <div className="p-3 rounded-xl bg-gray-950/60 border border-gray-800/80 flex items-center justify-between">
                  <span className="text-gray-400">National Hackathon</span>
                  <span className="text-emerald-300 font-bold">Smart India Hackathon</span>
                </div>
                <div className="p-3 rounded-xl bg-gray-950/60 border border-gray-800/80 flex items-center justify-between">
                  <span className="text-gray-400">Industry Internship</span>
                  <span className="text-purple-300 font-bold">IBM (SkillsBuild)</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
