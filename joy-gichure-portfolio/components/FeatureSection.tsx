
import React from 'react';

const FeatureSection: React.FC = () => {
  return (
    <div className="space-y-16 py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Featured Article Style */}
      <section className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        <div className="lg:col-span-7 order-2 lg:order-1">
          <p className="text-xs uppercase tracking-[0.2em] text-emerald-600 font-bold mb-4">Engineering Standards</p>
          <h2 className="text-4xl tracking-tight font-semibold font-playfair mb-4">
            High-Performance Systems Built to Scale
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-8">
            I'm not just a designer—I'm a full-stack engineer with 3+ years building production systems. Your portfolio will be built with the same quality standards as enterprise applications.
          </p>
          <a href="/work" className="inline-flex items-center gap-2 rounded-md border border-emerald-600 px-5 py-2.5 text-sm font-bold text-emerald-700 hover:bg-emerald-50 transition-colors">
            View Case Studies
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
        </div>
        <div className="lg:col-span-5 order-1 lg:order-2">
          <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/64f0d4bd-476f-486c-b427-1a26ca765dc4_800w.jpg" alt="Backend performance dashboard" className="w-full h-72 object-cover" />
          </div>
        </div>
      </section>

      {/* High Contrast Feature Card */}
      <section className="relative rounded-[2.5rem] border border-slate-200 bg-white p-6 md:p-12 shadow-sm overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M12 2v20M2 12h20M12 2l10 10-10 10L2 12 12 2z"/></svg>
        </div>
        <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl border-2 border-emerald-600 overflow-hidden shadow-xl">
              <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d3b11be0-a11b-4956-8c79-6ba44348ba52_800w.jpg" alt="JWG portrait" className="h-80 w-full object-cover" />
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-600"></span>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-600 font-bold">The Vision</p>
            </div>
            <h3 className="text-4xl tracking-tight font-semibold font-playfair mb-4 text-slate-900">Developer-to-Developer Understanding</h3>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              As a developer, I know what recruiters and hiring managers look for. I'll showcase your projects in ways that demonstrate real technical competence and problem-solving skills.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/contact" className="inline-flex items-center gap-2 rounded-md bg-slate-900 px-6 py-3 text-sm font-bold text-white hover:bg-slate-800 transition-all">
                Schedule Consultation
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4"/><path d="M12 18v4"/><path d="M4.93 4.93l2.83 2.83"/><path d="M16.24 16.24l2.83 2.83"/><path d="M2 12h4"/><path d="M18 12h4"/><path d="M4.93 19.07l2.83-2.83"/><path d="M16.24 7.76l2.83-2.83"/></svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeatureSection;
