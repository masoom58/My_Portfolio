import React from 'react';
import { RESUME_DATA } from '../data/resumeData.ts';
import { GraduationCap, Award, Calendar, MapPin, CheckCircle, Clock } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="relative py-24 bg-gray-950/70 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/30 px-3.5 py-1 text-xs font-mono text-cyan-300 uppercase tracking-widest mb-3">
            <GraduationCap className="h-3.5 w-3.5 text-cyan-400" />
            <span>Academic Qualifications</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Formal <span className="text-gradient-cyan">Education</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-400 max-w-2xl font-sans">
            Explicitly documented academic credentials, distinguishing ongoing university degree from completed technical certifications.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {RESUME_DATA.education.map((edu, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl border p-6 flex flex-col justify-between backdrop-blur-xl transition-all duration-300 group hover:-translate-y-1 ${
                edu.status === 'In Progress'
                  ? 'border-cyan-500/40 bg-gradient-to-b from-gray-900/80 to-gray-950/90 shadow-xl shadow-cyan-950/40'
                  : 'border-gray-800 bg-gray-900/40 hover:border-gray-700'
              }`}
            >
              <div>
                {/* Top Status Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-mono ${
                      edu.status === 'In Progress'
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                        : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                    }`}
                  >
                    {edu.status === 'In Progress' ? (
                      <Clock className="h-3 w-3 animate-spin" style={{ animationDuration: '4s' }} />
                    ) : (
                      <CheckCircle className="h-3 w-3" />
                    )}
                    <span>{edu.status === 'In Progress' ? 'Postgraduate (Current)' : 'Completed'}</span>
                  </span>

                  <span className="text-xs font-mono text-gray-400 flex items-center gap-1">
                    <Calendar className="h-3 w-3 text-gray-500" />
                    <span>{edu.period}</span>
                  </span>
                </div>

                {/* Degree & Field */}
                <h3 className="font-display text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {edu.degree}
                </h3>
                <p className="text-sm font-mono text-cyan-400/90 mt-1">{edu.field}</p>

                {/* Institution */}
                <p className="mt-4 text-xs sm:text-sm text-gray-300 font-sans leading-relaxed">
                  {edu.institution}
                </p>

                <div className="mt-2 flex items-center gap-1.5 text-xs font-mono text-gray-400">
                  <MapPin className="h-3 w-3 text-gray-500" />
                  <span>{edu.location}</span>
                </div>
              </div>

              {/* Bottom Score / Status Bar */}
              <div className="mt-6 pt-4 border-t border-gray-800/80 flex items-center justify-between text-xs font-mono">
                <span className="text-gray-400">Performance Metric:</span>
                {edu.score ? (
                  <span className="rounded-lg bg-emerald-950/60 border border-emerald-800/60 px-2 py-0.5 text-emerald-300 font-bold">
                    {edu.score}
                  </span>
                ) : (
                  <span className="text-cyan-300 font-medium">{edu.status === 'In Progress' ? 'In Progress' : 'Graduated'}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
