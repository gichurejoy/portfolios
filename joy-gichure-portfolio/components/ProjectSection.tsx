
import React from 'react';
import { PROJECTS } from '../constants';

const ProjectSection: React.FC = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto" id="projects">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
        <div>
          <h2 className="text-neutral-500 text-sm font-bold uppercase tracking-widest mb-4">Selected Work</h2>
          <h3 className="text-4xl md:text-5xl font-outfit font-bold">A display of my recent <span className="text-neutral-400">ventures.</span></h3>
        </div>
        <button className="text-neutral-400 hover:text-white transition-colors flex items-center gap-2">
          View all projects 
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" x2="19" y1="12" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project) => (
          <div key={project.id} className="group relative flex flex-col gap-6">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 aspect-video bg-neutral-900">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                 <div className="px-6 py-3 bg-white text-black font-bold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
                   View Case Study
                 </div>
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                {project.tech.slice(0, 3).map(t => (
                  <span key={t} className="text-[10px] text-neutral-500 font-bold uppercase border border-neutral-800 px-2 py-0.5 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
              <h4 className="text-2xl font-bold group-hover:text-purple-400 transition-colors">{project.title}</h4>
              <p className="text-neutral-400 text-sm leading-relaxed max-w-lg">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
