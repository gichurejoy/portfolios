
import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Assistant from './components/Assistant';
import FeatureSection from './components/FeatureSection';
import { PROJECTS, SHOP_ITEMS, FAQS } from './constants';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <section className="sm:py-14 pt-10 pb-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-emerald-600 font-bold mb-2">Projects</p>
              <h2 className="text-3xl font-playfair font-bold text-slate-900">Selected Work</h2>
            </div>
            <Link to="/work" className="text-sm font-bold text-green-600 hover:text-emerald-700">View All</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {PROJECTS.map((project) => (
              <Link
                key={project.id}
                to="/work"
                className="group relative overflow-hidden rounded-xl border border-slate-200 hover:border-emerald-600 transition duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-44 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/20 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <div className="">
                    <p className="text-[10px] uppercase font-bold text-slate-500">{project.displayCategory}</p>
                    <p className="text-sm font-bold tracking-tight text-slate-900">{project.title}</p>
                  </div>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FeatureSection />

      <section className="sm:py-24 pt-16 pb-16 text-center bg-white border-y border-slate-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.2em] text-emerald-600 font-bold mb-4">Software Solutions</p>
          <h3 className="text-4xl sm:text-5xl tracking-tight font-bold font-playfair text-slate-900">
            Building Custom Systems for Businesses
          </h3>
          <p className="mt-6 text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
            From B2B e-commerce platforms to automated data workflows, I build technical solutions that solve real-world business challenges.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-slate-900 px-8 py-3.5 text-sm font-bold text-white hover:bg-slate-800 transition-all">
              Request a Custom Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

const WorkPage: React.FC = () => {
  useEffect(() => {
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, observerOptions);
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }, []);

  return (
    <div className="min-h-screen bg-cream text-neutral-900 relative antialiased pt-16 selection:bg-emerald-500 selection:text-white">
      {/* Work Hero - Baha Style */}
      {/* Work Hero - Baha Style */}
      <section className="px-6 md:px-12 pt-6 pb-8 relative overflow-hidden">
        <div className="absolute top-6 left-6 md:left-12 flex items-center gap-2 reveal active">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
        </div>

        <div className="max-w-7xl mx-auto w-full mt-4">
          <h1 className="text-3xl md:text-5xl lg:text-5xl leading-[0.9] tracking-tighter font-bold text-neutral-900 mb-6 reveal active uppercase font-playfair">
            I Build Systems
            <br />
            That Think, <br />
            <span className="text-neutral-300 italic">So You Don't Have To</span>
          </h1>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full gap-8 reveal active">
            <p className="max-w-md text-lg leading-relaxed text-slate-500 font-medium">
              Automation architect & software systems designer. Building intelligent production workflows that eliminate chaos.
            </p>

            <a href="#work-grid" className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest border-b-2 border-neutral-200 pb-1 hover:border-emerald-500 hover:text-emerald-500 transition-all">
              Selected Work
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-y-1 transition-transform"><path d="M7 13l5 5 5-5M7 6l5 5 5-5" /></svg>
            </a>
          </div>
        </div>
      </section>

      {/* Selected Work - Alternating Immersion Grid */}
      <section id="work-grid" className="py-12 md:py-16 px-6 md:px-12 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12 md:mb-16 reveal">
            <h2 className="text-3xl md:text-5xl tracking-tight font-bold font-playfair uppercase">Case Studies</h2>
            <span className="hidden md:block text-xs uppercase tracking-[0.3em] font-black text-neutral-300">2023 — 2025</span>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Project 1: Order Matching Engine (Terminal Visual) */}
            <article className="group relative flex flex-col gap-3 reveal">
              <div className="h-[25vh] md:h-[30vh] w-full bg-[#0d0d0d] overflow-hidden relative md:rounded-organic rounded-[20px] transition-transform duration-700 hover:shadow-2xl hover:shadow-emerald-500/10 hover:scale-[1.01] border border-white/5">
                <div className="absolute inset-0 p-6 flex flex-col font-mono text-[9px]">
                  <div className="flex justify-between text-neutral-600 mb-6 border-b border-neutral-800 pb-2 uppercase tracking-widest">
                    <span>matching_engine_v2.log</span>
                    <span className="text-emerald-500 animate-pulse">Live: Processing</span>
                  </div>
                  <div className="space-y-3 text-emerald-500/80">
                    <p className="opacity-60">&gt; Initializing matching protocol...</p>
                    <p className="delay-75 opacity-80">&gt; Sorting bids [Price-Time Priority]</p>
                    <div className="flex gap-1 items-end h-8 py-2">
                      <div className="w-1 bg-emerald-500/30 h-3 animate-[pulse_0.5s_infinite]"></div>
                      <div className="w-1 bg-emerald-500/60 h-6 animate-[pulse_0.5s_infinite_0.1s]"></div>
                      <div className="w-1 bg-emerald-500 h-5 animate-[pulse_0.5s_infinite_0.2s]"></div>
                      <div className="w-1 bg-emerald-500 h-8 animate-[pulse_0.5s_infinite_0.3s]"></div>
                      <div className="w-1 bg-emerald-500/40 h-4 animate-[pulse_0.5s_infinite_0.4s]"></div>
                    </div>
                    <p className="text-white typing-cursor font-bold">&gt; Throughput: 10,000 matches/sec</p>
                  </div>
                  <div className="mt-auto relative h-24 w-full border-t border-neutral-800 pt-3">
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/10 to-transparent"></div>
                    <div className="scan-line top-0"></div>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                  <span className="text-xs uppercase tracking-[0.2em] text-emerald-500 font-black">Performance Engineering</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight font-playfair">{PROJECTS[0].title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm font-medium">
                  Built a production-grade matching engine for decentralized prediction markets. Optimized for low-latency trade execution using a price-time priority algorithm.
                </p>
                <ul className="flex flex-wrap gap-2 pt-4">
                  {PROJECTS[0].tech.map(t => (
                    <li key={t} className="px-4 py-1.5 border border-neutral-200 rounded-full text-[10px] font-black uppercase text-neutral-500 tracking-widest">{t}</li>
                  ))}
                </ul>
              </div>
            </article>

            {/* Project 2: Pharma Automation (Voice/Waveform Visual) */}
            <article className="group relative flex flex-col gap-3 reveal">
              <div className="h-[25vh] md:h-[30vh] w-full bg-neutral-100 overflow-hidden relative md:rounded-organic-rev rounded-[20px] transition-transform duration-700 hover:shadow-2xl hover:scale-[1.01] border border-neutral-200">
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center relative mb-6 shadow-xl border border-neutral-200">
                    <div className="absolute w-full h-full rounded-full border-2 border-emerald-500 opacity-20 animate-ping"></div>
                    <div className="absolute w-[140%] h-[140%] rounded-full border border-emerald-500 opacity-10 animate-[ping_3s_infinite]"></div>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" y1="19" x2="12" y2="22" /></svg>
                  </div>
                  <div className="flex items-center gap-1 h-12">
                    <div className="w-2 bg-neutral-900 rounded-full h-3 animate-[pulse_0.8s_ease-in-out_infinite]"></div>
                    <div className="w-2 bg-neutral-900 rounded-full h-8 animate-[pulse_0.8s_ease-in-out_infinite_0.1s]"></div>
                    <div className="w-2 bg-neutral-900 rounded-full h-12 animate-[pulse_0.8s_ease-in-out_infinite_0.2s]"></div>
                    <div className="w-2 bg-neutral-900 rounded-full h-6 animate-[pulse_0.8s_ease-in-out_infinite_0.3s]"></div>
                    <div className="w-2 bg-neutral-900 rounded-full h-3 animate-[pulse_0.8s_ease-in-out_infinite_0.4s]"></div>
                  </div>
                  <div className="bg-white px-4 py-1.5 rounded-full shadow-lg mt-6 border border-neutral-200 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-[9px] font-black text-neutral-900 uppercase tracking-widest">Automation Active</span>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                  <span className="text-xs uppercase tracking-[0.2em] text-emerald-500 font-black">AI Automation</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight font-playfair">{PROJECTS[1].title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm font-medium">
                  Automated 148-page medical catalogue translation using NLP workflows. Transformed an 8-hour manual process into a 30-minute automated execution cycle.
                </p>
                <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-2xl my-6">
                  <p className="text-xs uppercase font-black text-emerald-600 mb-1">Result</p>
                  <p className="text-sm font-bold text-emerald-900">Reduced operational overhead by 85%.</p>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {PROJECTS[1].tech.map(t => (
                    <li key={t} className="px-4 py-1.5 border border-neutral-200 rounded-full text-[10px] font-black uppercase text-neutral-500 tracking-widest">{t}</li>
                  ))}
                </ul>
              </div>
            </article>

            {/* Project 3: Contract Dashboard (Monitoring Visual) */}
            <article className="group relative flex flex-col gap-3 reveal">
              <div className="h-[25vh] md:h-[30vh] w-full bg-neutral-900 overflow-hidden relative md:rounded-organic rounded-[20px] transition-transform duration-700 hover:shadow-2xl hover:scale-[1.01] border border-white/5">
                <div className="absolute inset-0 p-8 flex flex-col justify-center">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-neutral-800/80 backdrop-blur p-4 rounded-xl border border-neutral-700">
                      <div className="flex justify-between items-start mb-2">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      </div>
                      <div className="text-[9px] uppercase font-black text-neutral-500 tracking-widest mb-1">System Health</div>
                      <div className="text-xl font-bold text-white uppercase tracking-tighter">100.0%</div>
                    </div>
                    <div className="bg-neutral-800/80 backdrop-blur p-4 rounded-xl border border-neutral-700">
                      <div className="flex justify-between items-start mb-2">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a3a3a3" strokeWidth="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                        <span className="text-[7px] bg-emerald-500/20 text-emerald-500 px-2 py-0.5 rounded font-black tracking-widest">AUTO</span>
                      </div>
                      <div className="text-[9px] uppercase font-black text-neutral-500 tracking-widest mb-1">Reports Gen</div>
                      <div className="text-xl font-bold text-white uppercase tracking-tighter">Realtime</div>
                    </div>
                  </div>
                  <div className="bg-[#0a0a0a] rounded-xl p-4 font-mono text-[9px] space-y-2 border border-neutral-800 shadow-inner">
                    <div className="flex gap-2"><span className="text-neutral-600">09:42:01</span><span className="text-emerald-400">Pull_New_Invoices() - Success</span></div>
                    <div className="flex gap-2"><span className="text-neutral-600">09:42:05</span><span className="text-white">Sync_Airtable_Database()</span></div>
                    <div className="flex gap-2"><span className="text-neutral-600">09:42:08</span><span className="text-emerald-400">Trigger_Client_Notification()</span></div>
                  </div>
                </div>
              </div>
              <div className="space-y-3 md:pr-12">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                  <span className="text-xs uppercase tracking-[0.2em] text-emerald-500 font-black">Enterprise Dashboard</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight font-playfair">{PROJECTS[3].title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm font-medium">
                  Centralized enterprise management portal with automated reporting and real-time data synchronization. Features complex approval workflows and PDF export engines.
                </p>
                <ul className="flex flex-wrap gap-2 pt-4">
                  {PROJECTS[3].tech.map(t => (
                    <li key={t} className="px-4 py-1.5 border border-neutral-200 rounded-full text-[10px] font-black uppercase text-neutral-500 tracking-widest">{t}</li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Philosophy Section - Baha Dark Style */}
      <section className="py-8 md:py-12 bg-[#0d0d0d] text-cream relative overflow-hidden">
        <div className="absolute top-0 right-0 p-64 bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <span className="block text-emerald-500 text-[10px] uppercase tracking-[0.4em] font-black mb-8 reveal">The System Mindset</span>
          <h2 className="text-3xl md:text-5xl leading-[1.1] font-bold tracking-tighter mb-10 reveal font-playfair uppercase">
            "Every manual process is a <span className="text-neutral-500 italic">software system</span> <br /> waiting to be born."
          </h2>

          <div className="grid md:grid-cols-2 gap-12 text-neutral-400 leading-relaxed text-lg font-medium reveal">
            <p>
              I don't just write code—I architect scalable ecosystems. My engineering philosophy is error handling and self-healing systems.
            </p>
            <p>
              I build software that works while you sleep, not systems that break when you're away. Reliability is the primary feature.
            </p>
          </div>
        </div>
      </section>
      {/* Added Section: How I Work */}
      <section className="py-12 md:py-16 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl tracking-tight font-medium mb-24 reveal">How I Work</h2>
          <div className="grid md:grid-cols-5 gap-12">
            {[
              { n: '01', t: 'Discovery', d: 'Deep dive into current processes. Mapping manual steps and identifying bottlenecks.' },
              { n: '02', t: 'Architecture', d: 'Designing the automation blueprint. Data flows, trigger logic, and scalability considerations.' },
              { n: '03', t: 'Build', d: 'Development with obsessive attention to edge cases, retry logic, and error handling.' },
              { n: '04', t: 'Test & Launch', d: 'Rigorous scenario testing. Gradual rollout with active monitoring.' },
              { n: '05', t: 'Optimize', d: 'Continuous monitoring and iteration to expand coverage and efficiency.' }
            ].map((step, idx) => (
              <div key={idx} className="relative pt-8 reveal" style={{ transitionDelay: `${idx * 100}ms` }}>
                <div className="absolute top-0 left-0 w-full h-[1px] bg-neutral-200"></div>
                <span className="text-[10px] font-mono text-neutral-400 mb-6 block">{step.n}</span>
                <h3 className="text-xl font-medium mb-4">{step.t}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Added Section: Tools I Master */}
      <section className="py-8 border-y border-neutral-200 overflow-hidden bg-white/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <p className="text-xs uppercase tracking-widest text-neutral-400 mb-8 text-center">Tools I Master</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 reveal active">
            {['Django', 'N8N', 'OpenAI API', 'Vapi', 'HubSpot', 'CMS', 'Airtable', 'Laravel', 'Python', 'Webhooks', 'Odoo', 'Gemini API'].map(tool => (
              <span key={tool} className="px-4 py-2 bg-white rounded-lg border border-neutral-200 text-sm font-medium text-neutral-600 hover:border-emerald-500 hover:text-emerald-500 transition-colors">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 px-6 md:px-12 bg-cream text-center">
        <div className="max-w-4xl mx-auto reveal">
          <h2 className="text-3xl md:text-5xl tracking-tighter font-bold mb-6 font-playfair uppercase italic">Let's Build <br /> The System.</h2>
          <p className="text-base text-neutral-600 max-w-sm mx-auto mb-8 font-medium">Have a complex technical challenge? Let's engineer a solution together.</p>

          <div className="flex flex-col items-center gap-10">
            <Link to="/contact" className="group flex items-center gap-2 bg-neutral-900 text-cream pl-8 pr-2 py-2 rounded-full hover:bg-emerald-500 transition-all duration-500 shadow-2xl">
              <span className="text-xs font-black uppercase tracking-widest">Connect with me</span>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-neutral-900 group-hover:scale-90 transition-transform">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
              </div>
            </Link>
            <a href="mailto:joy.gichure@outlook.com" className="text-2xl md:text-3xl font-bold hover:text-emerald-500 transition-colors border-b-2 border-neutral-200 pb-2">
              joy.gichure@outlook.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

const ShopPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [quickViewItem, setQuickViewItem] = useState<ShopItem | null>(null);

  const categories = ['All', 'Portfolio Package', 'Custom System', 'Full Stack'];

  const filteredItems = SHOP_ITEMS.filter(item =>
    activeCategory === 'All' || item.category === activeCategory
  );

  useEffect(() => {
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, observerOptions);

    // Slight delay to ensure DOM is ready
    setTimeout(() => {
      document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    }, 100);

    return () => observer.disconnect();
  }, [activeCategory]); // Re-run when category changes

  // Smarter parser that avoids empty sections and handles tight sequences of headers
  const parseSections = (details: string) => {
    const lines = details.split('\n');
    const sections: { title: string; items: string[] }[] = [];
    let currentSection: { title: string; items: string[] } | null = null;

    lines.forEach(line => {
      const trimmed = line.trim();
      if (!trimmed) return;

      const isHeader = (trimmed.toUpperCase() === trimmed && trimmed.length > 5) || trimmed.endsWith(':');

      if (isHeader) {
        const title = trimmed.replace(':', '').trim();
        // If current section is empty, just replace title to prevent orphaned headers
        if (currentSection && currentSection.items.length === 0) {
          currentSection.title = `${currentSection.title} / ${title}`;
        } else {
          currentSection = { title, items: [] };
          sections.push(currentSection);
        }
      } else if (currentSection) {
        currentSection.items.push(trimmed);
      }
    });
    return sections.filter(s => s.items.length > 0);
  };

  return (
    <div className="min-h-screen bg-cream text-neutral-900 relative pt-20 overflow-hidden selection:bg-emerald-500 selection:text-white">
      <div className="absolute top-0 left-0 w-full h-screen bg-[radial-gradient(circle_at_20%_20%,#10b98108,transparent_50%)] pointer-events-none"></div>

      <section className="pt-6 pb-6 px-6 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl reveal">
            <p className="text-[9px] uppercase font-bold tracking-[0.4em] text-emerald-600 mb-4 flex items-center gap-4">
              <span className="w-10 h-[2px] bg-emerald-500/30"></span>
              Engineering Excellence
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold font-playfair leading-[0.9] tracking-tighter mb-6 uppercase text-neutral-900">
              Production <br /> <span className="text-neutral-300 italic">Packages</span>
            </h1>
            <p className="text-lg text-slate-500 max-w-2xl font-medium leading-relaxed">
              Propel your career with engineered portfolio systems that combine high-performance code with sophisticated aesthetic direction.
            </p>
          </div>
        </div>
      </section>

      <section className="sticky top-16 z-30 py-4 border-y border-slate-200 bg-cream/90 backdrop-blur-2xl">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="flex items-center gap-8 overflow-x-auto no-scrollbar">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[10px] uppercase tracking-[0.3em] font-black transition-all whitespace-nowrap pb-1.5 border-b-2 ${activeCategory === cat
                  ? 'text-emerald-600 border-emerald-600'
                  : 'text-neutral-500 border-transparent hover:text-neutral-900'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 px-6 md:px-12 bg-cream">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredItems.map((item, idx) => (
              <div key={item.id} className="reveal group" style={{ transitionDelay: `${(idx % 2) * 150}ms` }}>
                <div className="relative">
                  <div className={`aspect-[16/10] w-full overflow-hidden bg-white border border-slate-200 shadow-sm transition-all duration-1000 ease-in-out group-hover:shadow-lg ${idx % 2 === 0 ? 'md:rounded-organic' : 'md:rounded-organic-rev'} rounded-[30px] relative`}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
                    />

                    {item.status && (
                      <div className="absolute top-8 left-8 z-10">
                        <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-[7px] font-black uppercase tracking-[0.2em] text-white ${item.statusColor || 'bg-slate-900'} shadow-lg`}>
                          {item.status}
                        </span>
                      </div>
                    )}

                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-[2px]">
                      <button
                        onClick={() => setQuickViewItem(item)}
                        className="bg-neutral-900 text-white px-6 py-2.5 rounded-full text-[8px] font-black uppercase tracking-[0.2em] hover:bg-emerald-600 transition-colors shadow-2xl"
                      >
                        Launch Preview
                      </button>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                    <div className="space-y-2 max-w-lg">
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-[1px] bg-emerald-500/30"></span>
                        <span className="text-[8px] font-mono font-black text-emerald-600 uppercase tracking-[0.3em]">{item.category}</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold tracking-tighter font-playfair uppercase leading-none text-neutral-900">{item.title}</h3>
                      <p className="text-slate-600 text-sm font-medium leading-relaxed">{item.description}</p>
                    </div>

                    <div className="flex flex-col items-start lg:items-end gap-4">
                      <div className="flex flex-col items-start lg:items-end">
                        <span className="text-slate-400 text-[8px] uppercase tracking-widest font-black mb-0.5">Investment</span>
                        <span className="text-xl font-black tracking-tighter text-neutral-900 tabular-nums">{item.price}</span>
                      </div>
                      <Link
                        to="/contact"
                        className="group flex items-center gap-4 bg-neutral-900 text-white pl-6 pr-1.5 py-1.5 rounded-full hover:bg-emerald-600 transition-all duration-500 shadow-xl"
                      >
                        <span className="text-[8px] font-black uppercase tracking-[0.2em]">Begin Project</span>
                        <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center text-neutral-900 group-hover:rotate-45 transition-transform duration-500">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DASHBOARD MODAL - OPTIMIZED FOR ONE SCREEN (NO SCROLLING) */}
      {quickViewItem && (
        <div
          onClick={() => setQuickViewItem(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center p-2 md:p-4 bg-white/98 backdrop-blur-3xl animate-in fade-in zoom-in duration-300 overflow-hidden cursor-pointer"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="cursor-auto relative w-full max-w-[98vw] bg-white border border-slate-50 rounded-[20px] shadow-[0_40px_100px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col h-auto max-h-[98vh]"
          >

            {/* Tight Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-50">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg overflow-hidden border border-slate-100">
                  <img src={quickViewItem.image} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[8px] font-black text-emerald-600 uppercase tracking-[0.4em]">{quickViewItem.category}</span>
                    <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">— {quickViewItem.price}</span>
                  </div>
                  <h2 className="text-xl font-bold font-playfair uppercase tracking-tighter text-neutral-900 leading-none mt-0.5">{quickViewItem.title}</h2>
                </div>
              </div>
              <button
                onClick={() => setQuickViewItem(null)}
                className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-neutral-900 hover:bg-neutral-900 hover:text-white transition-all"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M18 6L6 18M6 6l12 12" /></svg>
              </button>
            </div>

            {/* Multi-column flow layout for density (newspaper style) */}
            <div className="p-4 md:columns-3 columns-1 gap-6 space-y-4">
              {parseSections(quickViewItem.details).map((section, idx) => (
                <div key={idx} className="break-inside-avoid mb-4 bg-cream/30 p-3 rounded-xl border border-slate-50">
                  <h4 className="text-[9px] font-black uppercase tracking-[0.2em] text-neutral-900 border-b border-emerald-100 pb-1.5 flex items-center gap-2 mb-2">
                    <span className="w-1 h-1 rounded-full bg-emerald-500"></span>
                    {section.title}
                  </h4>
                  <ul className="space-y-1">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex gap-2 text-[10px] leading-tight text-slate-600 items-start">
                        <span className="text-emerald-500 font-bold shrink-0">{item.startsWith('✓') ? '✓' : '•'}</span>
                        <span className={item.startsWith('✓') ? 'text-neutral-900 font-medium' : ''}>
                          {item.replace('✓', '').trim()}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Footer bar */}
            <div className="p-3 px-6 bg-slate-50/50 border-t border-slate-50 flex items-center justify-between gap-4">
              <div className="flex items-center gap-4 text-[8px] font-bold text-slate-400 uppercase tracking-widest">
                <span>Timeline: 5-10 Days</span>
                <span className="w-px h-3 bg-slate-200"></span>
                <span className="text-emerald-600">Priority Support Included</span>
              </div>
              <Link
                to="/contact"
                onClick={() => setQuickViewItem(null)}
                className="group flex items-center gap-4 bg-neutral-900 text-white pl-6 pr-1.5 py-1.5 rounded-full hover:bg-emerald-600 transition-all duration-500 shadow-md"
              >
                <span className="text-[9px] font-black uppercase tracking-[0.3em]">Configure Package</span>
                <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center text-neutral-900 group-hover:translate-x-1 transition-transform">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </div>
              </Link>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

const ContactPage: React.FC = () => {
  useEffect(() => {
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, observerOptions);
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }, []);

  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // NOTE: Replace these with your actual EmailJS Service ID, Template ID, and Public Key
    // You can get them from https://dashboard.emailjs.com/admin
    const SERVICE_ID = 'service_v4ejoml';
    const TEMPLATE_ID = 'template_mtd5b29';
    const PUBLIC_KEY = 'D8Mruj-Z_kGndXHfI';

    if (form.current) {
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
        .then((result) => {
          console.log(result.text);
          setSubmitStatus('success');
          setIsSubmitting(false);
          form.current?.reset();
        }, (error) => {
          console.log(error.text);
          setSubmitStatus('error');
          setIsSubmitting(false);
        });
    }
  };

  return (
    <div className="min-h-screen bg-cream text-neutral-900 antialiased pt-16 selection:bg-emerald-500 selection:text-white">
      {/* Contact Hero */}
      {/* Contact Hero */}
      <section className="relative pt-4 pb-6 reveal">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="max-w-5xl">
            <p className="text-[9px] uppercase tracking-[0.4em] text-emerald-600 font-black mb-2">Get in touch</p>
            <h1 className="text-3xl md:text-5xl lg:text-5xl tracking-tight font-bold font-playfair text-neutral-900 uppercase leading-[0.85]">
              Let's create something <br /> <span className="text-neutral-300 italic">extraordinary</span>
            </h1>
            <p className="mt-6 text-lg text-slate-500 font-medium leading-relaxed max-w-2xl">
              Whether you're looking for a professional portfolio to land your dream job, or need a custom software system to scale your business — I'd love to hear about your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Main Content */}
      {/* Contact Main Content */}
      <section className="pb-16 sm:pb-24 reveal">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Form Section */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-[30px] border border-slate-200 p-6 sm:p-8 shadow-[0_30px_100px_rgba(0,0,0,0.02)]">
                <h2 className="text-2xl font-bold tracking-tighter mb-6 font-playfair uppercase text-neutral-900">Send a message</h2>
                <form ref={form} className="space-y-4" onSubmit={sendEmail}>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-[9px] font-black uppercase tracking-[0.4em] text-neutral-400 mb-2">First name</label>
                      <input type="text" id="firstName" name="firstName" required className="w-full bg-cream px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-[9px] font-black uppercase tracking-[0.4em] text-neutral-400 mb-2">Last name</label>
                      <input type="text" id="lastName" name="lastName" required className="w-full bg-cream px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-[9px] font-black uppercase tracking-[0.4em] text-neutral-400 mb-2">Email address</label>
                      <input type="email" id="email" name="email" required className="w-full bg-cream px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-[9px] font-black uppercase tracking-[0.4em] text-neutral-400 mb-2">Phone number</label>
                      <input type="tel" id="phone" name="phone" className="w-full bg-cream px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="projectType" className="block text-[9px] font-black uppercase tracking-[0.4em] text-neutral-400 mb-2">Project type</label>
                      <select id="projectType" name="projectType" className="w-full bg-cream px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all appearance-none text-sm">
                        <option value="">Select project type</option>
                        <option value="portfolio">Professional Portfolio</option>
                        <option value="custom-system">Custom Business System</option>
                        <option value="automation">Workflow Automation</option>
                        <option value="api-integration">API Integration</option>
                        <option value="full-stack-app">Full-Stack Application</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-[9px] font-black uppercase tracking-[0.4em] text-neutral-400 mb-2">Budget range</label>
                      <select id="budget" name="budget" className="w-full bg-cream px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all appearance-none text-sm">
                        <option value="">Select budget range</option>
                        <option value="15k-25k">KSH 15k - 25k</option>
                        <option value="25k-45k">KSH 25k - 45k</option>
                        <option value="45k-100k">KSH 45k - 100k</option>
                        <option value="100k+">KSH 100k+</option>
                        <option value="discuss">Let's discuss</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-[9px] font-black uppercase tracking-[0.4em] text-neutral-400 mb-2">Tell me about your project</label>
                    <textarea id="message" name="message" rows={4} required className="w-full bg-cream px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all" placeholder="Describe your vision, goals, and timeline..."></textarea>
                  </div>

                  {submitStatus === 'success' && (
                    <div className="p-4 bg-emerald-50 text-emerald-900 rounded-xl text-sm font-medium border border-emerald-100 animate-in fade-in slide-in-from-top-2">
                      Message sent successfully! I'll get back to you within 24 hours.
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-50 text-red-900 rounded-xl text-sm font-medium border border-red-100 animate-in fade-in slide-in-from-top-2">
                      Something went wrong. Please try again or email me directly at joy.gichure@outlook.com
                    </div>
                  )}

                  <button type="submit" disabled={isSubmitting} className="group w-full sm:w-auto inline-flex items-center justify-between gap-4 rounded-full bg-neutral-900 px-6 py-2.5 text-[10px] font-black uppercase tracking-[0.4em] text-white hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed">
                    {isSubmitting ? 'Sending...' : 'Send message'}
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-neutral-900 group-hover:rotate-45 transition-transform duration-500">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
                    </div>
                  </button>
                </form>
              </div>
            </div>

            {/* Sidebar Details Section */}
            <div className="lg:col-span-5">
              <div className="space-y-12">
                {/* Direct Contact Card */}
                <div className="bg-white rounded-[30px] border border-slate-200 p-6 shadow-[0_30px_100px_rgba(0,0,0,0.02)]">
                  <h3 className="text-[9px] font-black uppercase tracking-[0.4em] text-emerald-600 mb-6">Direct contact</h3>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-cream rounded-full flex items-center justify-center text-emerald-600 flex-shrink-0 border border-slate-100 shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-10 5L2 7"></path></svg>
                      </div>
                      <div>
                        <p className="text-[9px] font-black uppercase tracking-[0.4em] text-neutral-400 mb-1">Email</p>
                        <a href="mailto:joy.gichure@outlook.com" className="text-sm font-bold text-neutral-900 hover:text-emerald-600 transition-colors">joy.gichure@outlook.com</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-8">
                      <div className="w-10 h-10 bg-cream rounded-full flex items-center justify-center text-emerald-600 flex-shrink-0 border border-slate-100 shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                      </div>
                      <div>
                        <p className="text-[9px] font-black uppercase tracking-[0.4em] text-neutral-400 mb-1">Phone</p>
                        <a href="tel:+254798717800" className="text-sm font-bold text-neutral-900 hover:text-emerald-600 transition-colors">+254 798 717 800</a>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-cream rounded-full flex items-center justify-center text-emerald-600 flex-shrink-0 border border-slate-100 shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                      </div>
                      <div>
                        <p className="text-[9px] font-black uppercase tracking-[0.4em] text-neutral-400 mb-1">Location</p>
                        <p className="text-sm font-bold text-neutral-900">Nairobi, Kenya</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Follow the Work Card */}
                <div className="bg-white rounded-[30px] border border-slate-200 p-6 shadow-[0_30px_100px_rgba(0,0,0,0.02)]">
                  <h3 className="text-[9px] font-black uppercase tracking-[0.4em] text-emerald-600 mb-6">Follow the work</h3>
                  <div className="space-y-4">
                    <a href="https://github.com/gichurejoy" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 rounded-xl bg-cream border border-slate-100 hover:bg-emerald-500 hover:text-white transition-all group">
                      <div className="flex items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                        <span className="text-xs font-black uppercase tracking-widest">GitHub</span>
                      </div>
                      <span className="text-[9px] opacity-50 font-mono tracking-tighter">github.com/gichurejoy</span>
                    </a>
                  </div>
                </div>

                {/* Response Time Card */}
                <div className="bg-emerald-50/50 rounded-[30px] border border-emerald-100 p-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 text-emerald-500/10 pointer-events-none">
                    <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                  </div>
                  <div className="flex items-start gap-8 relative z-10">
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-emerald-600 flex-shrink-0 shadow-sm border border-emerald-100">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"></circle><polyline points="12,6 12,12 16,14"></polyline></svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-emerald-900 uppercase font-playfair tracking-tight mb-3">Response time</h4>
                      <p className="text-emerald-700/80 font-medium leading-relaxed">I typically respond within 24 hours during business days. Looking forward to engineering something great together.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Section */}
      <section className="pt-8 pb-12 sm:pb-16 bg-white border-t border-slate-100 reveal">
        <div className="mx-auto max-w-4xl px-6 md:px-8">
          <div className="text-center mb-10">
            <p className="text-[9px] uppercase tracking-[0.6em] text-emerald-600 font-black mb-4">Support & Logistics</p>
            <h2 className="text-3xl md:text-5xl font-bold font-playfair tracking-tighter uppercase leading-[0.85] text-neutral-900">
              Frequently <br /> <span className="text-neutral-400 italic">Asked Questions</span>
            </h2>
          </div>

          <div className="space-y-8">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="bg-cream rounded-[20px] p-6 border border-slate-100 hover:border-emerald-500 transition-all group">
                <div className="flex items-start gap-4">
                  <span className="text-[9px] font-black uppercase tracking-widest text-emerald-600 pt-1.5 opacity-50">Q{idx + 1}</span>
                  <div>
                    <h3 className="text-lg font-bold text-neutral-900 mb-3 tracking-tight leading-tight group-hover:text-emerald-600 transition-colors">
                      {faq.q}
                    </h3>
                    <div className="w-8 h-[1px] bg-slate-200 mb-3"></div>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Bottom CTA Area */}
      <section className="py-8 px-6 bg-cream text-center reveal">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl tracking-tighter font-bold mb-6 font-playfair uppercase italic text-neutral-900">Let's Begin <br /> The Process.</h2>
          <div className="flex flex-col items-center gap-6">
            <a href="mailto:joy.gichure@outlook.com" className="text-xl md:text-2xl font-black hover:text-emerald-600 transition-colors border-b-2 border-neutral-200 pb-2 inline-block">
              joy.gichure@outlook.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen selection:bg-emerald-600 selection:text-white">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <Assistant />
      </div>
    </BrowserRouter>
  );
};

export default App;
