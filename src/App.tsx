import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { About } from './components/About.tsx';
import { Skills } from './components/Skills.tsx';
import { Projects } from './components/Projects.tsx';
import { Experience } from './components/Experience.tsx';
import { Education } from './components/Education.tsx';
import { Certifications } from './components/Certifications.tsx';
import { Contact } from './components/Contact.tsx';
import { Footer } from './components/Footer.tsx';
import { ResumeModal } from './components/ResumeModal.tsx';
import { CustomCursor } from './components/CustomCursor.tsx';
import { RESUME_DATA } from './data/resumeData.ts';
import { FileText, Download, Mail, Linkedin, Sparkles } from 'lucide-react';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans selection:bg-cyan-500/20 selection:text-cyan-300 relative">
      {/* Desktop Dynamic Glowing Cursor */}
      <CustomCursor />

      {/* Main Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Sections */}
      <main>
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setIsResumeOpen(true)} />

      {/* Full Official Resume Modal (PDF Stream & Executive View) */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />

      {/* Quick Recruiter Access Pill (Bottom Right Floating) */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:flex items-center gap-2">
        <button
          onClick={() => setIsResumeOpen(true)}
          className="flex items-center gap-2 rounded-full border border-cyan-500/40 bg-gray-950/90 px-4 py-2 text-xs font-mono font-medium text-cyan-300 shadow-xl backdrop-blur-md hover:border-cyan-400 hover:bg-gray-900 transition-all hover:scale-105 active:scale-95"
          title="Inspect Official Resume"
        >
          <FileText className="h-4 w-4 text-cyan-400" />
          <span>Resume Document</span>
        </button>

        <a
          href={RESUME_DATA.personal.resumePdfUrl}
          download="Masoom_Choudhary_Resume.pdf"
          className="flex items-center justify-center h-9 w-9 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 hover:from-cyan-400 hover:to-blue-500 transition-all hover:scale-110 active:scale-95"
          title="Download PDF"
        >
          <Download className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
