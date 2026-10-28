import React, { useState } from 'react';
import { RESUME_DATA } from '../data/resumeData.ts';
import { X, Download, FileText, Check, Copy, ExternalLink, Printer } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'preview' | 'structured'>('preview');

  if (!isOpen) return null;

  const copyEmail = () => {
    navigator.clipboard.writeText(RESUME_DATA.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const printDocument = () => {
    window.open(RESUME_DATA.personal.resumePdfUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-5xl max-h-[92vh] flex flex-col rounded-2xl border border-cyan-500/30 bg-gray-950 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800 bg-gray-900/60">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
              <FileText className="h-5 w-5" />
            </div>
            <div>
              <h2 className="font-display font-bold text-white text-base sm:text-lg flex items-center gap-2">
                <span>Masoom Choudhary — Official Resume</span>
                <span className="hidden sm:inline-block rounded-full bg-cyan-500/20 px-2 py-0.5 text-[10px] font-mono text-cyan-300">
                  VERIFIED PDF
                </span>
              </h2>
              <p className="text-xs font-mono text-gray-400">
                Single Source of Truth • NLP & AI/ML Engineer
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* View Mode Switcher */}
            <div className="hidden sm:flex items-center rounded-lg border border-gray-800 bg-gray-900 p-0.5 text-xs font-mono">
              <button
                onClick={() => setActiveTab('preview')}
                className={`px-2.5 py-1 rounded-md transition-colors ${
                  activeTab === 'preview'
                    ? 'bg-cyan-500/20 text-cyan-300 font-medium'
                    : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                PDF Stream
              </button>
              <button
                onClick={() => setActiveTab('structured')}
                className={`px-2.5 py-1 rounded-md transition-colors ${
                  activeTab === 'structured'
                    ? 'bg-cyan-500/20 text-cyan-300 font-medium'
                    : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                Executive Reader
              </button>
            </div>

            {/* Direct Download */}
            <a
              href={RESUME_DATA.personal.resumePdfUrl}
              download="Masoom_Choudhary_Resume.pdf"
              className="flex items-center gap-1.5 rounded-lg bg-cyan-500/20 border border-cyan-500/30 px-3 py-1.5 text-xs font-mono text-cyan-300 hover:bg-cyan-500/30 transition-colors"
            >
              <Download className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Download</span>
            </a>

            {/* Close */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto bg-gray-950 p-4 sm:p-6 text-gray-200">
          {activeTab === 'preview' ? (
            <div className="flex flex-col items-center">
              <div className="w-full h-[68vh] rounded-xl overflow-hidden border border-gray-800 bg-gray-900/50 flex flex-col">
                <object
                  data={`${RESUME_DATA.personal.resumePdfUrl}#toolbar=1&navpanes=0`}
                  type="application/pdf"
                  className="w-full h-full"
                >
                  <div className="h-full flex flex-col items-center justify-center p-6 text-center">
                    <FileText className="h-12 w-12 text-cyan-400 mb-3" />
                    <h3 className="font-display font-semibold text-lg text-white">
                      Document Ready for Direct Viewing
                    </h3>
                    <p className="mt-1 text-sm text-gray-400 max-w-md">
                      Your browser preview is ready. You can switch to Executive Reader mode or download the verified PDF directly.
                    </p>
                    <div className="mt-4 flex gap-3">
                      <button
                        onClick={() => setActiveTab('structured')}
                        className="rounded-lg bg-cyan-600/30 border border-cyan-500/40 px-4 py-2 text-xs font-mono text-cyan-300 hover:bg-cyan-600/40"
                      >
                        Switch to Executive Reader
                      </button>
                      <a
                        href={RESUME_DATA.personal.resumePdfUrl}
                        download="Masoom_Choudhary_Resume.pdf"
                        className="rounded-lg bg-cyan-500 px-4 py-2 text-xs font-mono font-medium text-black hover:bg-cyan-400"
                      >
                        Download PDF File
                      </a>
                    </div>
                  </div>
                </object>
              </div>
            </div>
          ) : (
            <div className="max-w-3xl mx-auto space-y-6 font-sans">
              {/* Header section in structured view */}
              <div className="border-b border-gray-800 pb-5">
                <h1 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
                  {RESUME_DATA.personal.name}
                </h1>
                <p className="mt-1 text-sm font-mono text-cyan-400">
                  {RESUME_DATA.personal.primaryRole}
                </p>
                <div className="mt-3 flex flex-wrap gap-y-1 gap-x-4 text-xs font-mono text-gray-400">
                  <span>✉ {RESUME_DATA.personal.email}</span>
                  <span>✆ {RESUME_DATA.personal.phone}</span>
                  <span>📍 {RESUME_DATA.personal.location}</span>
                  <a
                    href={RESUME_DATA.personal.linkedin.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-cyan-400 hover:underline"
                  >
                    🔗 LinkedIn Profile
                  </a>
                </div>
              </div>

              {/* Summary */}
              <div>
                <h3 className="font-mono text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-2">
                  Professional Summary
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed bg-gray-900/40 p-3.5 rounded-lg border border-gray-800/60">
                  {RESUME_DATA.summary}
                </p>
              </div>

              {/* Projects */}
              <div>
                <h3 className="font-mono text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-3">
                  Key Projects
                </h3>
                <div className="space-y-4">
                  {RESUME_DATA.projects.map((proj) => (
                    <div key={proj.id} className="rounded-lg border border-gray-800 bg-gray-900/30 p-4">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <h4 className="font-display font-semibold text-white text-base">
                          {proj.title}
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {proj.tags.map((t) => (
                            <span
                              key={t}
                              className="rounded bg-cyan-950/50 border border-cyan-800/40 px-2 py-0.5 text-[10px] font-mono text-cyan-300"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                      <ul className="list-disc list-inside space-y-1 text-xs text-gray-300">
                        {proj.bullets.map((b, i) => (
                          <li key={i}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div>
                <h3 className="font-mono text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-3">
                  Professional Experience
                </h3>
                {RESUME_DATA.experience.map((exp, idx) => (
                  <div key={idx} className="rounded-lg border border-gray-800 bg-gray-900/30 p-4">
                    <div className="flex flex-wrap justify-between items-baseline mb-2">
                      <h4 className="font-display font-semibold text-white text-base">
                        {exp.role} — <span className="text-cyan-400">{exp.organization}</span>
                      </h4>
                      <span className="text-xs font-mono text-gray-400">{exp.program}</span>
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-xs text-gray-300">
                      {exp.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Education */}
              <div>
                <h3 className="font-mono text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-3">
                  Education
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {RESUME_DATA.education.map((edu, idx) => (
                    <div key={idx} className="rounded-lg border border-gray-800 bg-gray-900/30 p-3">
                      <div className="font-display font-semibold text-white text-sm">
                        {edu.degree} – {edu.field}
                      </div>
                      <div className="text-xs text-gray-400 mt-1">{edu.institution}</div>
                      <div className="mt-2 flex items-center justify-between text-[11px] font-mono text-cyan-300">
                        <span>{edu.period}</span>
                        {edu.score && <span className="text-gray-300 font-bold">{edu.score}</span>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-3.5 border-t border-gray-800 bg-gray-900/80">
          <div className="flex items-center gap-2">
            <button
              onClick={copyEmail}
              className="flex items-center gap-1.5 rounded-lg border border-gray-700 bg-gray-800 px-3 py-1.5 text-xs font-mono text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
            >
              {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
              <span>{copied ? 'Email Copied!' : 'Copy Email'}</span>
            </button>
            <a
              href={`mailto:${RESUME_DATA.personal.email}`}
              className="hidden sm:flex items-center gap-1.5 rounded-lg border border-cyan-500/20 bg-cyan-950/30 px-3 py-1.5 text-xs font-mono text-cyan-300 hover:border-cyan-500/40"
            >
              <span>Mail Direct</span>
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={RESUME_DATA.personal.resumePdfUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-xs font-mono text-gray-400 hover:text-cyan-300"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              <span>Open in New Tab</span>
            </a>
            <a
              href={RESUME_DATA.personal.resumePdfUrl}
              download="Masoom_Choudhary_Resume.pdf"
              className="flex items-center gap-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 px-4 py-1.5 text-xs font-mono font-medium text-black transition-all shadow-md shadow-cyan-500/20"
            >
              <Download className="h-4 w-4" />
              <span>Download Official PDF</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
