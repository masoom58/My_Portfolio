import React from 'react';
import { RESUME_DATA } from '../data/resumeData.ts';
import { Award, Trophy, CheckCircle, Sparkles, ShieldCheck, Flag, Star } from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <section id="achievements" className="relative py-24 bg-gray-950 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/30 px-3.5 py-1 text-xs font-mono text-cyan-300 uppercase tracking-widest mb-3">
            <Trophy className="h-3.5 w-3.5 text-cyan-400" />
            <span>Honors & Certifications</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Certifications & <span className="text-gradient-cyan">Achievements</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-400 max-w-2xl font-sans">
            Recognized by global technology corporations and national competitive engineering bodies.
          </p>
        </div>

        {/* 2 Grids: Official Certifications & Competitive Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {RESUME_DATA.certificationsAndAchievements.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-gray-800/80 bg-gradient-to-b from-gray-900/40 to-gray-950/70 p-6 backdrop-blur-xl hover:border-cyan-500/40 hover:bg-gray-900/60 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-gray-950 border border-gray-800 text-cyan-400 group-hover:border-cyan-500/30 transition-colors">
                    {item.type === 'Certification' ? (
                      <Award className="h-5 w-5 text-cyan-400" />
                    ) : item.type === 'Competitive' ? (
                      <Trophy className="h-5 w-5 text-amber-400" />
                    ) : (
                      <Flag className="h-5 w-5 text-emerald-400" />
                    )}
                  </div>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-[10px] font-mono ${
                      item.type === 'Certification'
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                        : item.type === 'Competitive'
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                        : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                    }`}
                  >
                    {item.type}
                  </span>
                </div>

                <h3 className="font-display font-bold text-white text-base group-hover:text-cyan-300 transition-colors">
                  {item.name}
                </h3>
                <p className="text-xs font-mono text-gray-400 mt-1">{item.issuer}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-800/80 flex items-center justify-between">
                <span className="text-[11px] font-mono text-gray-500">Documented Status:</span>
                <span className="text-xs font-mono font-semibold text-cyan-300">
                  {item.badgeNote || 'Verified'}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Documented Engineering Tenets */}
        <div className="mt-12 max-w-4xl mx-auto rounded-2xl border border-cyan-500/20 bg-gray-900/30 p-6 sm:p-8 backdrop-blur-xl">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="h-5 w-5 text-cyan-400" />
            <h4 className="font-display font-bold text-white text-base sm:text-lg">
              Demonstrated Engineering Milestones
            </h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {RESUME_DATA.coreCompetencies.map((comp, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border border-gray-800/80 bg-gray-950/70 text-xs sm:text-sm text-gray-300 leading-relaxed font-sans flex items-start gap-2.5"
              >
                <span className="text-cyan-400 mt-0.5 font-mono">0{idx + 1}.</span>
                <span>{comp}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
