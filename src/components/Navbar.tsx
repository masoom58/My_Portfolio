import React, { useState, useEffect } from 'react';
import { RESUME_DATA } from '../data/resumeData.ts';
import { FileText, Download, Menu, X, ExternalLink, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-gray-950/85 backdrop-blur-md border-b border-cyan-500/15 py-3 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 group-hover:border-cyan-400 transition-colors">
            <span className="font-display font-bold text-cyan-400 text-lg tracking-wider">MC</span>
            <div className="absolute inset-0 rounded-xl bg-cyan-400/10 blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div>
            <div className="font-display font-bold text-sm tracking-wider text-white flex items-center gap-1.5">
              <span>MASOOM CHOUDHARY</span>
            </div>
            <p className="text-[10px] font-mono tracking-widest text-cyan-400/80 uppercase">
              AI/ML & NLP Engineer
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-mono uppercase tracking-wider text-gray-400 hover:text-cyan-300 transition-colors relative py-1 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 rounded-lg border border-cyan-500/30 bg-cyan-950/30 px-3.5 py-1.5 text-xs font-mono text-cyan-300 hover:border-cyan-400 hover:bg-cyan-900/40 transition-colors"
          >
            <FileText className="h-3.5 w-3.5 text-cyan-400" />
            <span>View Resume</span>
          </button>

          <a
            href={RESUME_DATA.personal.resumePdfUrl}
            download="Masoom_Choudhary_Resume.pdf"
            className="flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-3.5 py-1.5 text-xs font-mono font-medium text-white shadow-lg shadow-cyan-500/20 hover:from-cyan-400 hover:to-blue-500 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Download className="h-3.5 w-3.5" />
            <span>Download PDF</span>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg border border-gray-800 bg-gray-900/80 text-gray-300 hover:text-white"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-gray-950/95 border-b border-cyan-500/20 px-6 py-6 backdrop-blur-xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-mono uppercase tracking-wider text-gray-300 hover:text-cyan-400 py-1 border-b border-gray-800/40"
              >
                {link.label}
              </a>
            ))}

            <div className="flex flex-col gap-2.5 pt-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="flex items-center justify-center gap-2 rounded-lg border border-cyan-500/30 bg-cyan-950/40 py-2.5 text-xs font-mono text-cyan-300"
              >
                <FileText className="h-4 w-4" />
                <span>View Full Resume</span>
              </button>
              <a
                href={RESUME_DATA.personal.resumePdfUrl}
                download="Masoom_Choudhary_Resume.pdf"
                className="flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 py-2.5 text-xs font-mono font-medium text-white shadow-md shadow-cyan-500/20"
              >
                <Download className="h-4 w-4" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
