import React, { useState } from 'react';
import { RESUME_DATA } from '../data/resumeData.ts';
import {
  Cpu,
  Brain,
  Code,
  Layers,
  Wrench,
  Search,
  Sparkles,
  CheckCircle,
  Terminal,
  ShieldCheck
} from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categoryIcons: Record<string, React.ReactNode> = {
    'AI/ML Technologies': <Brain className="h-4 w-4 text-cyan-400" />,
    'AI/ML Frameworks': <Cpu className="h-4 w-4 text-blue-400" />,
    'Programming Languages': <Code className="h-4 w-4 text-emerald-400" />,
    'Specialisations': <Sparkles className="h-4 w-4 text-purple-400" />,
    'Tools & Platforms': <Wrench className="h-4 w-4 text-amber-400" />,
  };

  const categories = ['All', ...RESUME_DATA.skillCategories.map((c) => c.category)];

  // Filter skills based on category and query
  const filteredCategories = RESUME_DATA.skillCategories
    .map((cat) => {
      const matchesCategory = activeCategory === 'All' || cat.category === activeCategory;
      const filteredSkills = cat.skills.filter((skill) =>
        skill.toLowerCase().includes(searchQuery.toLowerCase())
      );
      return {
        ...cat,
        skills: filteredSkills,
        shouldShow: matchesCategory && (searchQuery === '' ? true : filteredSkills.length > 0),
      };
    })
    .filter((cat) => cat.shouldShow);

  // Total verified skills count
  const totalVerifiedCount = RESUME_DATA.skillCategories.reduce(
    (acc, cat) => acc + cat.skills.length,
    0
  );

  return (
    <section id="skills" className="relative py-24 bg-gray-950 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/30 px-3.5 py-1 text-xs font-mono text-cyan-300 uppercase tracking-widest mb-3">
            <Cpu className="h-3.5 w-3.5 text-cyan-400" />
            <span>Verified Technical Inventory</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Technical <span className="text-gradient-cyan">Skill Architecture</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-400 max-w-2xl font-sans">
            Every technical skill below is extracted verbatim from the resume. No fabricated proficiency percentages or unverified claims.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 rounded-lg bg-gray-900/60 border border-gray-800 px-3 py-1 text-xs font-mono text-gray-400">
            <ShieldCheck className="h-3.5 w-3.5 text-cyan-400" />
            <span>{totalVerifiedCount} Verified Resume Skills Documented</span>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-gray-800">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-xl px-3.5 py-1.5 text-xs font-mono transition-all ${
                  activeCategory === cat
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-lg shadow-cyan-950/50 font-semibold'
                    : 'text-gray-400 hover:text-gray-200 hover:bg-gray-900 border border-transparent'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-gray-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill (e.g. PyTorch)..."
              className="w-full rounded-xl border border-gray-800 bg-gray-900/70 pl-9 pr-3 py-1.5 text-xs font-mono text-gray-200 placeholder-gray-500 focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/30 transition-all"
            />
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl border border-gray-800/90 bg-gray-900/30 p-6 backdrop-blur-xl hover:border-cyan-500/40 hover:bg-gray-900/50 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-gray-950 border border-gray-800 group-hover:border-cyan-500/30 transition-colors">
                      {categoryIcons[group.category] || <Cpu className="h-4 w-4 text-cyan-400" />}
                    </div>
                    <h3 className="font-display font-bold text-white text-base">
                      {group.category}
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono text-cyan-400/80 bg-cyan-950/40 border border-cyan-800/40 px-2 py-0.5 rounded-full">
                    {group.skills.length} skills
                  </span>
                </div>

                <p className="text-xs text-gray-400 mb-5 font-sans leading-relaxed">
                  {group.description}
                </p>

                {/* Skills Chips */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center gap-1.5 rounded-lg border border-gray-800/80 bg-gray-950/80 px-2.5 py-1.5 text-xs font-mono text-gray-200 group-hover:border-gray-700 hover:border-cyan-400/50 hover:bg-cyan-950/30 transition-all"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400/80" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Source Indicator */}
              <div className="mt-6 pt-4 border-t border-gray-800/60 flex items-center justify-between text-[11px] font-mono text-gray-500">
                <span className="flex items-center gap-1">
                  <CheckCircle className="h-3 w-3 text-cyan-400" />
                  <span>Resume Source Verified</span>
                </span>
                <span className="text-[10px] text-gray-600 uppercase">Section 2</span>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state if search returns nothing */}
        {filteredCategories.length === 0 && (
          <div className="py-12 text-center text-gray-400">
            <p className="text-sm font-mono">No verified skills match "{searchQuery}"</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('All');
              }}
              className="mt-3 text-xs font-mono text-cyan-400 underline hover:text-cyan-300"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
