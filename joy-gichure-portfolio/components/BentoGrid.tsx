
import React from 'react';
import { SKILLS, PROJECTS } from '../constants';

const BentoGrid: React.FC = () => {
  return (
    <section className="py-12 px-4 md:px-6 max-w-7xl mx-auto mb-20">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        
        {/* Profile Card */}
        <div className="md:col-span-4 bg-[#111] rounded-[2.5rem] p-8 glass bento-card flex flex-col items-center text-center justify-between">
          <div className="relative">
            <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-white/10 mb-4">
              <img src="https://picsum.photos/seed/alexrivers/400/400" alt="Profile" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-4 right-0 w-8 h-8 bg-green-500 border-4 border-[#111] rounded-full"></div>
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-1">Alex Rivers</h1>
            <p className="text-neutral-400 text-sm">Senior Frontend Engineer @ Aura</p>
          </div>
          <div className="flex gap-4 mt-6">
            <a href="#" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:scale-110 transition-transform">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="#" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:scale-110 transition-transform">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </a>
            <a href="#" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:scale-110 transition-transform">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            </a>
          </div>
        </div>

        {/* Bio Card */}
        <div className="md:col-span-8 bg-[#111] rounded-[2.5rem] p-10 glass bento-card flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">
            Crafting <span className="text-purple-500">seamless</span> digital experiences with modern web technologies.
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl">
            I specialize in building performance-first applications that bridge the gap between complex engineering and elegant design.
          </p>
        </div>

        {/* Featured Project - Main Tile */}
        <div className="md:col-span-8 md:row-span-2 bg-[#111] rounded-[2.5rem] overflow-hidden glass bento-card group cursor-pointer relative">
          <img src={PROJECTS[1].image} alt="Featured" className="w-full h-full object-cover opacity-50 group-hover:scale-105 group-hover:opacity-70 transition-all duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-10 flex flex-col justify-end">
            <span className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-2">Featured Project</span>
            <h3 className="text-3xl font-bold mb-4">{PROJECTS[1].title}</h3>
            <p className="text-neutral-300 max-w-md">{PROJECTS[1].description}</p>
          </div>
        </div>

        {/* Work Availability / Experience */}
        <div className="md:col-span-4 bg-[#111] rounded-[2.5rem] p-8 glass bento-card flex flex-col justify-between">
          <div>
             <div className="flex items-center gap-2 mb-4">
               <span className="w-2 h-2 rounded-full bg-green-500"></span>
               <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">Availability</span>
             </div>
             <p className="text-xl font-semibold">Open to collaboration & creative freelance projects.</p>
          </div>
          <button className="mt-6 w-full py-4 bg-white text-black font-bold rounded-2xl hover:bg-neutral-200 transition-colors">
            Get in touch
          </button>
        </div>

        {/* Location / Map Style */}
        <div className="md:col-span-4 bg-[#111] rounded-[2.5rem] p-8 glass bento-card relative overflow-hidden h-64">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#555" d="M47.7,-57.4C60.4,-47.9,68.2,-31.6,71.1,-14.8C74,2C72,19.3,66.4,36.7,54.7,48.7C43.1,60.7,27.3,67.3,10.6,69.5C-6.1,71.7,-23.7,69.5,-38.4,61.4C-53,53.2,-64.7,39.1,-69.1,23.1C-73.4,7.1,-70.4,-10.7,-62.4,-25.1C-54.4,-39.6,-41.4,-50.7,-27.4,-59.4C-13.4,-68.1,1.6,-74.4,17.2,-71.3C32.8,-68.2,35,-57.4,47.7,-57.4Z" transform="translate(100 100)" />
            </svg>
          </div>
          <div className="relative z-10 h-full flex flex-col justify-between">
            <h3 className="text-xl font-bold">San Francisco</h3>
            <p className="text-neutral-500 text-sm">PST Timezone (UTC-8)</p>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="md:col-span-4 md:row-span-1 bg-[#111] rounded-[2.5rem] p-8 glass bento-card">
           <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-6">Tech Stack</h3>
           <div className="grid grid-cols-4 gap-4">
             {SKILLS.slice(0, 8).map(skill => (
               <div key={skill} className="w-10 h-10 glass rounded-lg flex items-center justify-center text-[10px] font-bold text-neutral-400 group-hover:text-white transition-colors">
                 {skill.charAt(0)}
               </div>
             ))}
           </div>
        </div>

        {/* Secondary Project */}
        <div className="md:col-span-8 bg-[#111] rounded-[2.5rem] p-8 glass bento-card flex items-center gap-8 group cursor-pointer">
           <div className="w-48 h-32 rounded-2xl overflow-hidden flex-shrink-0 bg-neutral-900">
             <img src={PROJECTS[0].image} alt="Project" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
           </div>
           <div>
             <h3 className="text-2xl font-bold mb-2">{PROJECTS[0].title}</h3>
             <p className="text-neutral-400 text-sm line-clamp-2">{PROJECTS[0].description}</p>
           </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
