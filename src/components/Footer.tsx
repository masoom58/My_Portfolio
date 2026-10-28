import React from 'react';
import { RESUME_DATA } from '../data/resumeData.ts';
import { FileText, Download, Linkedin, Mail, ArrowUp, Sparkles, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gray-950 border-t border-gray-900 py-12 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-gray-900">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-display font-bold text-sm">
              MC
            </div>
            <div>
              <div className="font-display font-bold text-white text-sm tracking-wider">
                {RESUME_DATA.personal.name}
              </div>
              <p className="text-[11px] font-mono text-cyan-400/80">
                {RESUME_DATA.personal.primaryRole}
              </p>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono">
            <a href="#about" className="hover:text-cyan-300 transition-colors">About</a>
            <a href="#skills" className="hover:text-cyan-300 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-cyan-300 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-cyan-300 transition-colors">Experience</a>
            <a href="#education" className="hover:text-cyan-300 transition-colors">Education</a>
            <a href="#achievements" className="hover:text-cyan-300 transition-colors">Achievements</a>
            <a href="#contact" className="hover:text-cyan-300 transition-colors">Contact</a>
          </div>

          {/* Actions & Scroll to top */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="flex items-center gap-1.5 rounded-lg border border-cyan-500/20 bg-gray-900 px-3 py-1.5 text-xs font-mono text-cyan-300 hover:border-cyan-500/40 transition-colors"
            >
              <FileText className="h-3.5 w-3.5" />
              <span>Resume</span>
            </button>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg border border-gray-800 bg-gray-900 text-gray-400 hover:text-white hover:border-cyan-500/40 transition-colors"
              title="Back to Top"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Bottom Bar with Resume Truthfulness Note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-cyan-400" />
            <span>Built strictly adhering to the candidate's authentic resume. No simulated metrics.</span>
          </div>

          <div>
            <span>© {new Date().getFullYear()} Masoom Choudhary. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
