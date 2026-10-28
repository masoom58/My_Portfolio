import React, { useState } from 'react';
import { RESUME_DATA } from '../data/resumeData.ts';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Copy,
  CheckCircle,
  ExternalLink,
  Send,
  Download,
  MessageSquare,
  Sparkles,
  UserCheck
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [inquiryType, setInquiryType] = useState('AI/ML Internship & Full-time Engineering Opportunities');
  const [customSubject, setCustomSubject] = useState('');
  const [customBody, setCustomBody] = useState('');

  const copyEmail = () => {
    navigator.clipboard.writeText(RESUME_DATA.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(RESUME_DATA.personal.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  // Generate mailto link without fake form backend
  const generateMailto = () => {
    const subject = encodeURIComponent(customSubject || `Inquiry: ${inquiryType} - Masoom Choudhary`);
    const body = encodeURIComponent(
      customBody ||
        `Hi Masoom,\n\nI reviewed your portfolio and verified resume regarding your work in NLP, LLMs, and AI/ML engineering.\n\nWe would like to connect with you regarding:\n`
    );
    return `mailto:${RESUME_DATA.personal.email}?subject=${subject}&body=${body}`;
  };

  // Generate vCard for easy recruiter saving
  const downloadVCard = () => {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:Masoom Choudhary
N:Choudhary;Masoom;;;
TITLE:NLP Engineer | AI/ML Engineer | LLM Developer
EMAIL;TYPE=INTERNET,HOME:${RESUME_DATA.personal.email}
TEL;TYPE=CELL:${RESUME_DATA.personal.phone}
ADR;TYPE=HOME:;;Pithampur;Madhya Pradesh;;India
URL:${RESUME_DATA.personal.linkedin.url}
NOTE:Specializing in NLP, LLMs, Generative AI, and Deep Learning (PyTorch, TensorFlow)
END:VCARD`;

    const blob = new Blob([vCardData], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Masoom_Choudhary.vcf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="contact" className="relative py-24 bg-gray-950/80 border-t border-gray-900">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/30 px-3.5 py-1 text-xs font-mono text-cyan-300 uppercase tracking-widest mb-3">
            <Mail className="h-3.5 w-3.5 text-cyan-400" />
            <span>Direct Communications</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Connect with <span className="text-gradient-cyan">Masoom</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-400 max-w-2xl font-sans">
            Reach out directly for AI/ML engineering positions, NLP & LLM roles, or collaborative research.
          </p>
        </div>

        {/* 2-Column Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          
          {/* Left Column: Verified Contact Coordinates */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="rounded-2xl border border-cyan-500/30 bg-gray-900/40 p-6 backdrop-blur-xl group hover:border-cyan-400/50 transition-all">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-white text-base">Direct Email</h3>
                    <p className="text-xs font-mono text-gray-400">Primary Channel</p>
                  </div>
                </div>
                <button
                  onClick={copyEmail}
                  className="flex items-center gap-1.5 rounded-lg border border-gray-800 bg-gray-950 px-2.5 py-1 text-xs font-mono text-gray-300 hover:text-white hover:border-cyan-500/30 transition-colors"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <CheckCircle className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <a
                href={`mailto:${RESUME_DATA.personal.email}`}
                className="font-mono text-sm text-cyan-300 hover:underline break-all block mt-1"
              >
                {RESUME_DATA.personal.email}
              </a>
            </div>

            {/* Phone Card */}
            <div className="rounded-2xl border border-gray-800 bg-gray-900/40 p-6 backdrop-blur-xl group hover:border-cyan-500/30 transition-all">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-white text-base">Phone Contact</h3>
                    <p className="text-xs font-mono text-gray-400">Direct Voice & Mobile</p>
                  </div>
                </div>
                <button
                  onClick={copyPhone}
                  className="flex items-center gap-1.5 rounded-lg border border-gray-800 bg-gray-950 px-2.5 py-1 text-xs font-mono text-gray-300 hover:text-white hover:border-cyan-500/30 transition-colors"
                >
                  {copiedPhone ? <CheckCircle className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                  <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <a
                href={`tel:${RESUME_DATA.personal.phone}`}
                className="font-mono text-sm text-blue-300 hover:underline block mt-1"
              >
                {RESUME_DATA.personal.phone}
              </a>
            </div>

            {/* LinkedIn Card */}
            <div className="rounded-2xl border border-gray-800 bg-gray-900/40 p-6 backdrop-blur-xl group hover:border-cyan-500/30 transition-all">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400">
                    <Linkedin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-white text-base">LinkedIn Profile</h3>
                    <p className="text-xs font-mono text-gray-400">Professional Network</p>
                  </div>
                </div>
                <a
                  href={RESUME_DATA.personal.linkedin.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 rounded-lg border border-cyan-500/20 bg-cyan-950/30 px-2.5 py-1 text-xs font-mono text-cyan-300 hover:border-cyan-500/40"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  <span>Open</span>
                </a>
              </div>

              <a
                href={RESUME_DATA.personal.linkedin.url}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs sm:text-sm text-sky-300 hover:underline break-all block mt-1"
              >
                {RESUME_DATA.personal.linkedin.display}
              </a>
            </div>

            {/* Location Card & vCard Download */}
            <div className="rounded-2xl border border-gray-800 bg-gray-900/40 p-6 backdrop-blur-xl flex flex-col justify-between">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-white text-base">Base Location</h3>
                  <p className="text-xs font-mono text-gray-300">{RESUME_DATA.personal.location}</p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-800 flex items-center justify-between">
                <span className="text-xs font-mono text-gray-500">Recruiter Quick Save:</span>
                <button
                  onClick={downloadVCard}
                  className="flex items-center gap-1.5 rounded-lg border border-purple-500/30 bg-purple-950/30 px-3 py-1 text-xs font-mono text-purple-300 hover:bg-purple-900/30 transition-colors"
                >
                  <UserCheck className="h-3.5 w-3.5" />
                  <span>Save Contact (.vcf)</span>
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Direct Email Composer (Transparent Mailto Generator, No fake forms!) */}
          <div className="lg:col-span-7 rounded-2xl border border-cyan-500/20 bg-gray-900/50 p-6 sm:p-8 backdrop-blur-xl relative">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                <MessageSquare className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-white text-lg sm:text-xl">
                  Quick Message Composer
                </h3>
                <p className="text-xs font-mono text-gray-400">
                  Direct dispatch to <span className="text-cyan-400">{RESUME_DATA.personal.email}</span>
                </p>
              </div>
            </div>

            {/* Topic Select */}
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-1.5">
                  Inquiry Focus Area:
                </label>
                <select
                  value={inquiryType}
                  onChange={(e) => setInquiryType(e.target.value)}
                  className="w-full rounded-xl border border-gray-800 bg-gray-950 px-3.5 py-2.5 text-xs font-mono text-gray-200 focus:border-cyan-500/50 focus:outline-none"
                >
                  <option value="AI/ML Internship & Full-time Engineering Opportunities">
                    AI/ML Internship & Full-time Engineering Opportunities
                  </option>
                  <option value="NLP & LLM Conversational Systems Project">
                    NLP & LLM Conversational Systems Project
                  </option>
                  <option value="Predictive Modeling & Recommendation Engines">
                    Predictive Modeling & Recommendation Engines
                  </option>
                  <option value="Academic & Technical AI Research Collaboration">
                    Academic & Technical AI Research Collaboration
                  </option>
                  <option value="General Professional Inquiry">
                    General Professional Inquiry
                  </option>
                </select>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-1.5">
                  Subject Line:
                </label>
                <input
                  type="text"
                  placeholder={`Inquiry: ${inquiryType} - Masoom Choudhary`}
                  value={customSubject}
                  onChange={(e) => setCustomSubject(e.target.value)}
                  className="w-full rounded-xl border border-gray-800 bg-gray-950 px-3.5 py-2.5 text-xs font-mono text-gray-200 placeholder-gray-600 focus:border-cyan-500/50 focus:outline-none"
                />
              </div>

              {/* Message Note */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-1.5">
                  Message / Invitation Details:
                </label>
                <textarea
                  rows={4}
                  placeholder="Include details about the role, technical scope, or discussion agenda..."
                  value={customBody}
                  onChange={(e) => setCustomBody(e.target.value)}
                  className="w-full rounded-xl border border-gray-800 bg-gray-950 px-3.5 py-2.5 text-xs font-mono text-gray-200 placeholder-gray-600 focus:border-cyan-500/50 focus:outline-none resize-none"
                />
              </div>

              {/* Action */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-[11px] font-mono text-gray-500">
                  Launches your default email application with prefilled verified recipient.
                </span>

                <a
                  href={generateMailto()}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-xs font-mono font-bold text-white shadow-lg shadow-cyan-500/20 hover:from-cyan-400 hover:to-blue-500 transition-all hover:scale-[1.02]"
                >
                  <Send className="h-4 w-4" />
                  <span>Send via Email Client</span>
                </a>
              </div>
            </div>

            {/* Resume Download Reminder */}
            <div className="mt-8 pt-5 border-t border-gray-800/80 flex items-center justify-between text-xs font-mono">
              <span className="text-gray-400">Need immediate resume for recruitment ATS?</span>
              <a
                href={RESUME_DATA.personal.resumePdfUrl}
                download="Masoom_Choudhary_Resume.pdf"
                className="flex items-center gap-1.5 text-cyan-400 hover:underline"
              >
                <Download className="h-3.5 w-3.5" />
                <span>Download PDF Now</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
