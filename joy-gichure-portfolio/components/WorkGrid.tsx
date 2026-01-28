
import React from 'react';
import { PROJECTS } from '../constants';

const WorkGrid: React.FC = () => {
  const categories = ['Studio Kit', 'Series 02', 'Digital Lab', 'Terrain Lab'];
  
  return (
    <section className="py-16 bg-neutral-50" id="work">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {PROJECTS.map((project, idx) => (
            <a 
              key={project.id} 
              href={project.link} 
              className="group relative overflow-hidden rounded-lg border border-slate-200 hover:border-emerald-600 transition duration-300"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="h-44 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/20 to-transparent"></div>
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-slate-600 font-bold">{categories[idx] || 'Project'}</p>
                  <p className="text-sm font-semibold tracking-tight text-slate-900">{project.title}</p>
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-700 opacity-0 group-hover:opacity-100 transition-opacity"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkGrid;
