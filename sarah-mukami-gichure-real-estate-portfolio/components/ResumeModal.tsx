
import React from 'react';
import { EXPERIENCES, SKILLS } from '../constants';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[250] flex items-center justify-center p-2 lg:p-4">
      <div className="absolute inset-0 bg-white/98 backdrop-blur-md" onClick={onClose}></div>
      
      <div className="relative w-full max-w-4xl h-full max-h-[96vh] bg-white shadow-[0_0_80px_rgba(0,0,0,0.1)] border border-black/5 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-500">
        {/* Header / Controls */}
        <div className="flex justify-between items-center px-5 py-3 border-b border-black/5 bg-slate-50">
          <div className="flex items-center space-x-3">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] opacity-40">SARAH_MUKAMI_GICHURE_CV</span>
            <button className="text-[10px] font-mono uppercase tracking-widest bg-black text-white px-3 py-1 hover:opacity-80 transition-opacity">
              Download PDF
            </button>
          </div>
          <button onClick={onClose} className="p-1.5 hover:bg-black/5 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>

        {/* CV Content */}
        <div className="flex-grow overflow-y-auto p-6 lg:p-10 space-y-10">
          {/* Resume Header */}
          <div className="flex flex-col md:flex-row justify-between items-start border-b-2 border-black pb-6">
            <div>
              <h1 className="text-2xl font-serif tracking-tighter mb-0.5">SARAH MUKAMI GICHURE.</h1>
              <p className="text-[10px] font-mono uppercase tracking-[0.4em] text-blue-600">Bachelor of Real Estate</p>
            </div>
            <div className="mt-3 md:mt-0 text-right font-mono text-[9px] space-y-0 uppercase tracking-widest opacity-60">
              <p>P.O Box 13553-00800, Nairobi, Kenya</p>
              <p>+254 110 427 373</p>
              <p>sarahgichure3@gmail.com</p>
            </div>
          </div>

          {/* Personal Info Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-3 bg-slate-50 border border-black/5 rounded">
            <div><p className="text-[9px] font-mono uppercase opacity-40">Nationality</p><p className="text-[10px] font-mono">Kenyan</p></div>
            <div><p className="text-[9px] font-mono uppercase opacity-40">DOB</p><p className="text-[10px] font-mono">09/09/2003</p></div>
            <div><p className="text-[9px] font-mono uppercase opacity-40">Status</p><p className="text-[10px] font-mono">Single</p></div>
            <div><p className="text-[9px] font-mono uppercase opacity-40">Languages</p><p className="text-[10px] font-mono">English, Swahili</p></div>
          </div>

          {/* Resume Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1 space-y-8">
              <section>
                <h3 className="text-[10px] font-mono uppercase tracking-[0.4em] mb-3 opacity-40">Key Skills</h3>
                <div className="space-y-2">
                  {[
                    'Interpersonal & Org Skills',
                    'Minimal Supervision',
                    'Integrity & Leadership',
                    'Time Management',
                    'Deadline Proficiency',
                    'Industry Adaptability'
                  ].map(skill => (
                    <div key={skill} className="flex items-center justify-between group">
                      <span className="text-[9px] font-mono uppercase tracking-tighter">{skill}</span>
                      <div className="h-px bg-black/5 flex-grow mx-2"></div>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h3 className="text-[10px] font-mono uppercase tracking-[0.4em] mb-3 opacity-40">Education</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-[10px] font-bold font-serif italic mb-0">University of Nairobi</p>
                    <p className="text-[9px] font-mono uppercase opacity-60">B. Real Estate</p>
                    <p className="text-[9px] font-mono opacity-40">2021 — Present</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold font-serif italic mb-0">Othaya Girls High School</p>
                    <p className="text-[9px] font-mono uppercase opacity-60">KCSE Grade: A-</p>
                    <p className="text-[9px] font-mono opacity-40">2017 — 2021</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold font-serif italic mb-0">Wileyce Academy</p>
                    <p className="text-[9px] font-mono uppercase opacity-60">KCPE: 385 Score</p>
                    <p className="text-[9px] font-mono opacity-40">2010 — 2016</p>
                  </div>
                </div>
              </section>
            </div>

            <div className="md:col-span-2 space-y-8">
              <section>
                <h3 className="text-[10px] font-mono uppercase tracking-[0.4em] mb-4 opacity-40">Work Experience</h3>
                <div className="space-y-6">
                  {EXPERIENCES.map(exp => (
                    <div key={exp.id} className="group">
                      <div className="flex justify-between items-baseline mb-1">
                        <h4 className="text-base font-serif font-bold">{exp.role}</h4>
                        <span className="text-[9px] font-mono opacity-40">{exp.dates}</span>
                      </div>
                      <p className="text-[9px] font-mono uppercase tracking-widest text-blue-600 mb-2">{exp.company}</p>
                      <ul className="space-y-1.5">
                        {exp.responsibilities.map((r, i) => (
                          <li key={i} className="text-[10px] font-light leading-relaxed flex items-start opacity-70 group-hover:opacity-100 transition-opacity">
                            <span className="mr-2 mt-1.5 w-1 h-1 bg-black rounded-full flex-shrink-0"></span>
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              <div className="grid grid-cols-2 gap-6">
                <section>
                  <h3 className="text-[10px] font-mono uppercase tracking-[0.4em] mb-3 opacity-40">Interests</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {['Traveling', 'Writing', 'Volunteering', 'Reading'].map(h => (
                      <span key={h} className="text-[8px] font-mono uppercase tracking-widest border border-black/10 px-2 py-0.5">{h}</span>
                    ))}
                  </div>
                </section>

                <section>
                  <h3 className="text-[10px] font-mono uppercase tracking-[0.4em] mb-3 opacity-40">References</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-[10px] font-bold font-serif">Tr. Mary</p>
                      <p className="text-[9px] font-mono opacity-60">Teacher, Geollen Prep</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold font-serif">Mr. Hamphrey Malala</p>
                      <p className="text-[9px] font-mono opacity-60">Senior Valuer, Min. of Lands</p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>

          {/* Professional Statement */}
          <div className="pt-6 border-t border-black/5">
            <h3 className="text-[10px] font-mono uppercase tracking-[0.4em] mb-3 opacity-40">Career Objective</h3>
            <p className="text-base font-serif italic leading-relaxed text-slate-600">
              "Dedicated and hardworking professional pursuing excellence in real estate. Highly organized and a team player, keen on contributing to the success of an organization through collaboration and excellence."
            </p>
          </div>
        </div>

        {/* Footer Signature */}
        <div className="px-6 py-4 border-t border-black/5 flex justify-between items-center opacity-30 grayscale">
            <span className="text-[8px] font-mono uppercase tracking-widest">Digital Auth: SARAH_GICHURE_RE_ADVISORY</span>
            <div className="w-12 h-px bg-black"></div>
        </div>
      </div>
    </div>
  );
};
