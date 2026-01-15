
import React from 'react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-2 lg:p-6 overflow-hidden">
      <div className="absolute inset-0 bg-white/95 backdrop-blur-xl" onClick={onClose}></div>
      
      <div className="relative w-full h-full max-w-[1500px] bg-white shadow-2xl overflow-hidden flex flex-col border border-black/5 animate-in fade-in zoom-in-95 duration-500">
        <div className="flex justify-between items-center px-6 py-3 border-b border-black/5">
           <div>
              <span className="text-[10px] font-mono uppercase tracking-widest opacity-40">Project Summary</span>
              <h2 className="text-lg font-serif">{project.title}</h2>
           </div>
           <button onClick={onClose} className="group flex items-center space-x-2">
              <span className="text-[10px] font-mono uppercase tracking-widest group-hover:opacity-100 opacity-40">Close</span>
              <div className="w-7 h-7 border border-black/10 flex items-center justify-center group-hover:border-black transition-colors">
                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12"></path></svg>
              </div>
           </button>
        </div>

        <div className="flex-grow overflow-y-auto">
          <div className="grid lg:grid-cols-2 h-full">
            <div className="relative min-h-[250px] lg:min-h-0">
              <img 
                src={project.imageUrl} 
                className="w-full h-full object-cover grayscale"
              />
              <div className="absolute bottom-0 left-0 p-6 text-white bg-gradient-to-t from-black/80 to-transparent w-full">
                  <p className="text-[9px] font-mono uppercase tracking-widest text-blue-400 mb-0.5">Location Data</p>
                  <p className="text-xl font-serif italic">{project.location}</p>
              </div>
            </div>

            <div className="p-8 lg:p-12 space-y-8">
              <div>
                 <span className="text-[10px] font-mono uppercase tracking-[0.4em] opacity-40 mb-3 block">Context & Objective</span>
                 <p className="text-xl font-serif leading-snug">{project.description}</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                 <div>
                    <h4 className="text-[10px] font-mono uppercase tracking-widest opacity-40 mb-2">Role Assigned</h4>
                    <p className="text-sm font-light leading-relaxed">{project.role}</p>
                 </div>
                 <div className="space-y-3">
                    <h4 className="text-[10px] font-mono uppercase tracking-widest opacity-40 mb-2">Technical Findings</h4>
                    <ul className="space-y-1.5">
                       {project.findings.map((f, i) => (
                         <li key={i} className="text-[10px] font-mono uppercase tracking-tighter flex items-start leading-tight">
                            <span className="mr-2 text-blue-600">»</span> {f}
                         </li>
                       ))}
                    </ul>
                 </div>
              </div>

              <div className="pt-6 border-t border-black/5 flex flex-col sm:flex-row gap-2">
                 <button className="flex-1 bg-black text-white py-2.5 font-mono text-[9px] uppercase tracking-widest hover:opacity-80 transition-opacity">
                    Full Valuation Report
                 </button>
                 <button className="flex-1 border border-black/10 py-2.5 font-mono text-[9px] uppercase tracking-widest hover:bg-black hover:text-white transition-all">
                    View Market Data
                 </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
