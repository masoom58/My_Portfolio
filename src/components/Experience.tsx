import React from 'react';
import { RESUME_DATA } from '../data/resumeData.ts';
import { Briefcase, Building, Cloud, Cpu, CheckCircle2, ShieldCheck, Terminal } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative py-24 bg-gray-950 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/30 px-3.5 py-1 text-xs font-mono text-cyan-300 uppercase tracking-widest mb-3">
            <Briefcase className="h-3.5 w-3.5 text-cyan-400" />
            <span>Documented Industry Engagement</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Professional <span className="text-gradient-cyan">Experience</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-400 max-w-2xl font-sans">
            Verified industry internship credentials with IBM SkillsBuild.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          {RESUME_DATA.experience.map((exp, index) => (
            <div
              key={index}
              className="relative rounded-2xl border border-cyan-500/30 bg-gradient-to-b from-gray-900/60 to-gray-950/90 p-6 sm:p-8 backdrop-blur-xl shadow-2xl overflow-hidden group hover:border-cyan-400/50 transition-all duration-300"
            >
              {/* Top ambient glow */}
              <div className="pointer-events-none absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/15 transition-all" />

              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-800">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0">
                    <Cloud className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                        {exp.role}
                      </h3>
                      <span className="rounded-full bg-cyan-500/20 border border-cyan-500/40 px-2.5 py-0.5 text-[11px] font-mono text-cyan-300">
                        {exp.program}
                      </span>
                    </div>
                    <div className="mt-1 flex items-center gap-2 text-sm font-mono text-gray-300">
                      <Building className="h-4 w-4 text-cyan-400" />
                      <span>{exp.organization}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-gray-400 self-start sm:self-center">
                  <ShieldCheck className="h-4 w-4 text-emerald-400" />
                  <span>IBM SkillsBuild</span>
                </div>
              </div>

              {/* Responsibilities & Achievements */}
              <div className="mt-6 space-y-4">
                <span className="text-xs font-mono uppercase tracking-wider text-gray-400 font-semibold block">
                  Executed Engineering Scope & Workflows:
                </span>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {exp.bullets.map((bullet, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl border border-gray-800/80 bg-gray-950/60 hover:border-cyan-500/30 hover:bg-gray-900/40 transition-all flex items-start gap-3"
                    >
                      <div className="p-1 rounded-md bg-cyan-500/10 text-cyan-400 shrink-0 mt-0.5">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                      </div>
                      <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans">
                        {bullet}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom technology tags */}
              <div className="mt-6 pt-5 border-t border-gray-800/80 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-gray-500 text-[11px]">Domain Stack:</span>
                  <span className="rounded bg-gray-900 border border-gray-800 px-2 py-0.5 text-cyan-300">
                    Artificial Intelligence
                  </span>
                  <span className="rounded bg-gray-900 border border-gray-800 px-2 py-0.5 text-cyan-300">
                    Machine Learning
                  </span>
                  <span className="rounded bg-gray-900 border border-gray-800 px-2 py-0.5 text-cyan-300">
                    Cloud Computing
                  </span>
                  <span className="rounded bg-gray-900 border border-gray-800 px-2 py-0.5 text-cyan-300">
                    Intelligent Automation
                  </span>
                </div>
                <span className="text-[10px] text-gray-500">Resume Section 3</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
