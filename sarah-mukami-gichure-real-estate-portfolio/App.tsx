
import React, { useState, useRef, useEffect } from 'react';
import { Layout, Section } from './components/Layout';
import { PROJECTS, EXPERIENCES, SKILLS } from './constants';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { Project } from './types';
import { askPortfolioAssistant } from './services/geminiService';

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [cvOpen, setCvOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [messages, setMessages] = useState<{role: 'user' | 'assistant', text: string}[]>([
    { role: 'assistant', text: 'Sarah Mukami Gichure\'s Inquiry Assistant active. How can I provide technical details on Sarah\'s background?' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, isTyping]);

  const handleSendMessage = async () => {
    if (!chatInput.trim()) return;
    const userMsg = chatInput;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setChatInput('');
    setIsTyping(true);
    const context = `Candidate: Sarah Mukami Gichure, Real Estate Professional. Currently studying at the University of Nairobi. Experience: Attachment Intern at Ministry of Lands (Valuation), Office Admin at Geollen Preparatory School. Skills: Property Valuation, Market Analysis, Land Administration. Education: Bachelor of Real Estate at University of Nairobi. Contact: +254 110 427 373, sarahgichure3@gmail.com.`;
    const response = await askPortfolioAssistant(userMsg, context);
    setMessages(prev => [...prev, { role: 'assistant', text: response }]);
    setIsTyping(false);
  };

  return (
    <Layout>
      {/* Cinematic Hero */}
      <section className="relative min-h-[90vh] flex flex-col justify-end bg-white overflow-hidden arch-grid">
        <div className="absolute top-0 right-0 w-full lg:w-[65%] h-[40vh] lg:h-full p-8 lg:p-0">
          <div className="relative w-full h-full overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop" 
              alt="Architectural Feature" 
              className="w-full h-full object-cover grayscale transition-transform duration-[3s] hover:scale-105"
            />
            <div className="absolute inset-0 bg-white/20 mix-blend-overlay"></div>
          </div>
        </div>

        <div className="relative z-10 w-full max-w-[1800px] mx-auto px-8 pb-8 lg:pb-12">
          <div className="max-w-4xl reveal-up">
            <span className="text-xs font-mono uppercase tracking-[0.5em] mb-3 block opacity-60">Sarah Mukami Gichure • Real Estate</span>
            <h1 className="text-5xl md:text-[7rem] font-serif leading-[0.85] tracking-tighter mb-4">
              Property Value <br /><span className="italic ml-8 md:ml-16">Strategist.</span>
            </h1>
            <div className="flex flex-col md:flex-row md:items-center gap-6 mt-6">
              <div className="flex-1">
                <p className="text-base md:text-lg font-light text-slate-500 leading-relaxed max-w-lg">
                  Specializing in precision valuation and strategic market analysis within Nairobi's evolving urban fabric.
                </p>
              </div>
              <div className="flex space-x-3">
                 <button 
                  onClick={() => setCvOpen(true)}
                  className="px-5 py-3 bg-black text-white font-mono text-[9px] uppercase tracking-[0.3em] hover:bg-blue-600 transition-all shadow-xl shadow-black/10 flex items-center space-x-3"
                 >
                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                   <span>View Technical CV</span>
                 </button>
                 <a href="#works" className="w-12 h-12 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-all group">
                   <svg className="w-4 h-4 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
                 </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Technical Sidebar - Visual Decoration */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden xl:block">
          <div className="flex flex-col items-center space-y-16">
             <span className="rotate-90 text-[10px] font-mono tracking-[0.5em] uppercase opacity-20">Est. 2024</span>
             <span className="rotate-90 text-[10px] font-mono tracking-[0.5em] uppercase opacity-20">Nairobi, KE</span>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <Section id="works" title="Selected Works" subtitle="Professional Archive 2024-2025">
        <div className="max-w-4xl mx-auto border border-slate-200 shadow-sm">
          {PROJECTS.map((project) => (
            <div 
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative bg-white aspect-[16/9] overflow-hidden cursor-pointer"
            >
              <img 
                src={project.imageUrl} 
                className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 p-6 flex flex-col justify-between text-white">
                <div>
                   <span className="text-[10px] font-mono uppercase tracking-widest text-blue-400 mb-1 block">{project.category}</span>
                   <h3 className="text-2xl font-serif">{project.title}</h3>
                </div>
                <div className="flex justify-between items-end border-t border-white/20 pt-4">
                   <div className="text-[10px] font-light">
                      <p className="opacity-50 uppercase tracking-wider mb-0.5">Context</p>
                      <p className="font-mono">{project.location}</p>
                   </div>
                   <span className="text-[10px] font-mono uppercase tracking-widest border border-white/40 px-3 py-1 hover:bg-white hover:text-black transition-colors">Details</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Profile / CV Section */}
      <Section id="profile" title="The Profile" dark subtitle="Curriculum Vitae">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-3xl font-serif">Sarah Mukami Gichure</h3>
            <div className="space-y-4">
              <div className="border-l border-white/20 pl-4 pb-1">
                 <p className="text-xs font-mono uppercase text-blue-400 mb-0.5">University of Nairobi</p>
                 <h4 className="text-lg font-serif mb-0.5">Bachelor of Real Estate</h4>
                 <p className="text-sm opacity-60 leading-relaxed font-light">
                   Currently studying at the University of Nairobi. Pursuing professional expertise in Real Estate, Land Economics, and Valuation procedures.
                 </p>
              </div>
              <div className="border-l border-white/20 pl-4">
                 <p className="text-xs font-mono uppercase text-blue-400 mb-1">Technical Skills</p>
                 <div className="flex flex-wrap gap-x-4 gap-y-2">
                    {SKILLS.filter(s => s.category === 'Technical').map(s => (
                      <span key={s.name} className="text-xs font-mono uppercase tracking-tighter opacity-70">{s.name}</span>
                    ))}
                 </div>
              </div>
              <button 
                onClick={() => setCvOpen(true)}
                className="inline-flex items-center space-x-3 text-[10px] font-mono uppercase tracking-widest text-blue-400 border border-blue-400/30 px-4 py-2 hover:bg-blue-400 hover:text-white transition-all"
              >
                <span>Full Technical Resume</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
            </div>
          </div>
          
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-3xl font-serif">Path of Growth</h3>
            <div className="space-y-px bg-white/5 border border-white/5">
               {EXPERIENCES.map(exp => (
                 <div key={exp.id} className="p-5 hover:bg-white/5 transition-colors group">
                    <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-3">
                       <div>
                          <p className="text-[10px] font-mono uppercase text-blue-400 mb-0.5">{exp.dates}</p>
                          <h4 className="text-xl font-serif">{exp.role}</h4>
                       </div>
                       <span className="text-[10px] font-mono opacity-50 uppercase tracking-widest mt-0.5 md:mt-0 text-right">{exp.company}</span>
                    </div>
                    <ul className="grid md:grid-cols-2 gap-x-6 gap-y-1">
                       {exp.responsibilities.map((r, i) => (
                         <li key={i} className="text-[11px] font-light opacity-50 leading-relaxed flex items-start">
                            <span className="mr-2 text-blue-400">—</span> {r}
                         </li>
                       ))}
                    </ul>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </Section>

      {/* AI Consulting Tool */}
      <Section id="insights" title="Inquiry Desk" subtitle="Technical Consultant">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg font-light text-slate-600 mb-6 leading-relaxed">
              Experience Sarah's profile through our technical AI integration. Query Sarah's experience at the Ministry of Lands or her studies at the University of Nairobi.
            </p>
            <div className="h-px bg-slate-200 w-full mb-4"></div>
            <div className="flex space-x-6">
               <div>
                  <p className="text-[10px] font-mono uppercase opacity-40 mb-0.5">Interface</p>
                  <p className="text-xs font-mono">Portfolio_Assistant_v2</p>
               </div>
               <div>
                  <p className="text-[10px] font-mono uppercase opacity-40 mb-0.5">Location</p>
                  <p className="text-xs font-mono">Nairobi, KE</p>
               </div>
            </div>
          </div>
          
          <div className="bg-slate-50 border border-slate-100 p-5 rounded-sm shadow-inner flex flex-col h-[380px]">
             <div className="flex-grow overflow-y-auto mb-3 space-y-3 pr-2" ref={scrollRef}>
                {messages.map((m, i) => (
                  <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[90%] p-3 text-[13px] leading-relaxed ${
                      m.role === 'user' ? 'bg-black text-white' : 'bg-white border border-slate-200 shadow-sm'
                    }`}>
                      <p className="font-mono text-[9px] uppercase opacity-40 mb-1">{m.role}</p>
                      {m.text}
                    </div>
                  </div>
                ))}
                {isTyping && <div className="text-[9px] font-mono animate-pulse opacity-40">PROCESSING...</div>}
             </div>
             <div className="flex items-center border-t border-slate-200 pt-3">
                <input 
                  type="text" 
                  className="flex-grow bg-transparent font-mono text-xs focus:outline-none" 
                  placeholder="ASK SARAH'S ASSISTANT..."
                  value={chatInput}
                  onChange={e => setChatInput(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && handleSendMessage()}
                />
                <button onClick={handleSendMessage} className="ml-4 p-1 hover:opacity-50 transition-opacity">
                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </button>
             </div>
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="Connect" subtitle="Direct Line">
        <div className="grid lg:grid-cols-2 gap-10">
           <div className="space-y-6">
              <h3 className="text-4xl font-serif">Sarah Mukami <br />Gichure.</h3>
              <div className="space-y-4">
                 <div>
                    <p className="text-[10px] font-mono uppercase tracking-[0.4em] opacity-40 mb-1">Email</p>
                    <a href="mailto:sarahgichure3@gmail.com" className="text-2xl font-light hover:text-blue-600 transition-colors">sarahgichure3@gmail.com</a>
                 </div>
                 <div>
                    <p className="text-[10px] font-mono uppercase tracking-[0.4em] opacity-40 mb-1">Phone</p>
                    <p className="text-xl font-light">+254 110 427 373</p>
                 </div>
                 <div className="pt-1">
                    <p className="text-[10px] font-mono uppercase tracking-[0.4em] opacity-40 mb-1">Network</p>
                    <a href="https://www.linkedin.com/in/sarah-gichure-6a935022a" target="_blank" rel="noopener noreferrer" className="text-xs font-mono opacity-60 underline tracking-tighter uppercase">LinkedIn Profile</a>
                 </div>
              </div>
           </div>
           
           <div className="space-y-6 bg-slate-50 p-6 border border-slate-100">
              <div className="grid grid-cols-2 gap-4">
                 <input type="text" placeholder="FULL NAME" className="bg-transparent border-b border-black/10 py-2 focus:border-black outline-none font-mono text-[10px] uppercase" />
                 <input type="email" placeholder="EMAIL ADDRESS" className="bg-transparent border-b border-black/10 py-2 focus:border-black outline-none font-mono text-[10px] uppercase" />
              </div>
              <textarea placeholder="MESSAGE" rows={3} className="bg-transparent w-full border-b border-black/10 py-2 focus:border-black outline-none font-mono text-[10px] uppercase"></textarea>
              <button className="w-full bg-black text-white py-3 font-mono text-[10px] uppercase tracking-[0.3em] hover:bg-slate-800 transition-all">
                Send Message
              </button>
           </div>
        </div>
      </Section>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      <ResumeModal isOpen={cvOpen} onClose={() => setCvOpen(false)} />
    </Layout>
  );
};

export default App;
