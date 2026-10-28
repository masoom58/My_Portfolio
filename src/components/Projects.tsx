import React, { useState } from 'react';
import { RESUME_DATA, ResumeProject } from '../data/resumeData.ts';
import {
  Sparkles,
  Bot,
  Sprout,
  AlertTriangle,
  Layers,
  ArrowUpRight,
  Code2,
  Workflow,
  CheckCircle2,
  ShieldCheck,
  ChevronRight,
  X
} from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ResumeProject | null>(null);
  const [filter, setFilter] = useState<string>('All');

  const projectIcons: Record<string, React.ReactNode> = {
    'voice-assistant': <Bot className="h-6 w-6 text-cyan-400" />,
    'ecokrishi': <Sprout className="h-6 w-6 text-emerald-400" />,
    'emergency-alert': <AlertTriangle className="h-6 w-6 text-amber-400" />,
  };

  const projectGradients: Record<string, string> = {
    'voice-assistant': 'from-cyan-500/20 via-blue-500/10 to-transparent',
    'ecokrishi': 'from-emerald-500/20 via-teal-500/10 to-transparent',
    'emergency-alert': 'from-amber-500/20 via-orange-500/10 to-transparent',
  };

  const categories = ['All', 'NLP & AI', 'Machine Learning & Full Stack', 'Intelligent Systems'];

  const filteredProjects = RESUME_DATA.projects.filter(
    (p) => filter === 'All' || p.category === filter
  );

  return (
    <section id="projects" className="relative py-24 bg-gray-950/70 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/30 px-3.5 py-1 text-xs font-mono text-cyan-300 uppercase tracking-widest mb-3">
            <Workflow className="h-3.5 w-3.5 text-cyan-400" />
            <span>Documented Implementations</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Key <span className="text-gradient-cyan">AI & Engineering Projects</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-400 max-w-2xl font-sans">
            Every project, architecture bullet, and technology stack listed below is extracted directly from the verified resume.
          </p>

          {/* Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`rounded-xl px-4 py-1.5 text-xs font-mono transition-all ${
                  filter === cat
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-lg shadow-cyan-950/50 font-semibold'
                    : 'text-gray-400 hover:text-gray-200 hover:bg-gray-900 border border-transparent'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 3D Tilt Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              icon={projectIcons[project.id]}
              gradient={projectGradients[project.id]}
              onInspect={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {/* Architecture & Workflow Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
            <div className="relative w-full max-w-2xl rounded-2xl border border-cyan-500/30 bg-gray-950 p-6 sm:p-8 shadow-2xl overflow-hidden">
              <div className="flex items-start justify-between gap-4 border-b border-gray-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-gray-900 border border-gray-800">
                    {projectIcons[selectedProject.id]}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white text-lg sm:text-xl">
                      {selectedProject.title}
                    </h3>
                    <p className="text-xs font-mono text-cyan-400">{selectedProject.subtitle}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-gray-900"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Technologies */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {selectedProject.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-cyan-950/60 border border-cyan-800/50 px-2.5 py-1 text-xs font-mono text-cyan-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* System Architecture Overview */}
              <div className="mt-5 rounded-xl border border-cyan-500/20 bg-gray-900/60 p-4">
                <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-semibold block mb-1">
                  Architecture Pipeline Flow:
                </span>
                <p className="font-mono text-xs text-gray-200 leading-relaxed">
                  {selectedProject.architectureOverview}
                </p>
              </div>

              {/* Detailed Verified Contributions */}
              <div className="mt-5 space-y-2.5">
                <span className="text-xs font-mono uppercase tracking-wider text-gray-400 font-semibold block">
                  Documented Contributions:
                </span>
                {selectedProject.bullets.map((b, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                    <CheckCircle2 className="h-4 w-4 text-cyan-400 mt-0.5 shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-gray-800 flex justify-end">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="rounded-xl border border-gray-700 bg-gray-800 px-4 py-2 text-xs font-mono text-gray-200 hover:bg-gray-700"
                >
                  Close Pipeline Inspection
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

// 3D Card with interactive tilt & hover lighting
interface ProjectCardProps {
  project: ResumeProject;
  icon: React.ReactNode;
  gradient: string;
  onInspect: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, icon, gradient, onInspect }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = ((y - centerY) / centerY) * -8; // max tilt degrees
    const rY = ((x - centerX) / centerX) * 8;

    setRotateX(rX);
    setRotateY(rY);
    setGlarePosition({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.15,
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlarePosition((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      style={{ perspective: 1000 }}
      className="group relative"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transition: 'transform 0.15s ease-out',
        }}
        className="relative flex flex-col justify-between h-full rounded-2xl border border-gray-800/90 bg-gradient-to-b from-gray-900/60 to-gray-950/80 p-6 sm:p-7 backdrop-blur-xl group-hover:border-cyan-500/40 group-hover:shadow-2xl group-hover:shadow-cyan-950/50 overflow-hidden"
      >
        {/* Dynamic Glare Overlay */}
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(56, 189, 248, ${glarePosition.opacity}), transparent 60%)`,
          }}
        />

        {/* Ambient Top Gradient Glow */}
        <div
          className={`pointer-events-none absolute top-0 inset-x-0 h-36 bg-gradient-to-b ${gradient} opacity-50 group-hover:opacity-100 transition-opacity`}
        />

        {/* Card Content Top */}
        <div className="relative z-10">
          {/* Header Row */}
          <div className="flex items-center justify-between mb-4">
            <div className="p-2.5 rounded-xl bg-gray-950 border border-gray-800 group-hover:border-cyan-500/30 transition-colors">
              {icon}
            </div>
            <span className="rounded-full bg-gray-950/80 border border-gray-800 px-2.5 py-0.5 text-[10px] font-mono text-cyan-400">
              {project.category}
            </span>
          </div>

          <h3 className="font-display font-bold text-white text-lg sm:text-xl group-hover:text-cyan-300 transition-colors leading-snug">
            {project.title}
          </h3>

          <p className="mt-1 text-xs font-mono text-gray-400 mb-4">{project.subtitle}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-gray-950/70 border border-gray-800 px-2 py-0.5 text-[11px] font-mono text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Documented Contributions */}
          <div className="space-y-2 mb-6">
            {project.bullets.map((bullet, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-gray-300 leading-relaxed font-sans">
                <span className="text-cyan-400 mt-1 shrink-0">•</span>
                <span>{bullet}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Card Content Bottom / Actions */}
        <div className="relative z-10 pt-4 border-t border-gray-800/80 flex items-center justify-between">
          <button
            onClick={onInspect}
            className="flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors group/btn"
          >
            <span>Inspect Architecture</span>
            <ChevronRight className="h-3.5 w-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
          </button>

          <span className="text-[10px] font-mono text-gray-500">
            Verified Project
          </span>
        </div>
      </div>
    </div>
  );
};
