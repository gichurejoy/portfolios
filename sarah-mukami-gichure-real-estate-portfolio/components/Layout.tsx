
import React, { useState, useEffect } from 'react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ${isScrolled || isMenuOpen ? 'bg-white/95 backdrop-blur-md py-3 shadow-sm' : 'bg-transparent py-5'}`}>
        <div className="max-w-[1800px] mx-auto px-8 flex justify-between items-baseline">
          <div className="flex flex-col">
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'}); }} className="text-2xl font-serif font-bold tracking-tighter hover:opacity-70 transition-opacity">
              S.<span className="italic">M</span>.G
            </a>
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] mt-1 hidden sm:block">Real Estate Professional</span>
          </div>
          
          <div className="flex space-x-12 items-center">
            {['Works', 'Profile', 'Insights', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                onClick={(e) => scrollToSection(e, item.toLowerCase())}
                className="text-xs font-mono uppercase tracking-widest hover:text-blue-600 transition-colors hidden md:block"
              >
                {item}
              </a>
            ))}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-xs font-mono uppercase tracking-widest border border-black px-4 py-2 hover:bg-black hover:text-white transition-all md:hidden"
            >
              {isMenuOpen ? 'Close' : 'Menu'}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[90] bg-white transition-transform duration-500 ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'} md:hidden`}>
        <div className="flex flex-col items-center justify-center h-full space-y-10">
          {['Works', 'Profile', 'Insights', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              onClick={(e) => scrollToSection(e, item.toLowerCase())}
              className="text-3xl font-serif italic tracking-tighter hover:text-blue-600 transition-colors"
            >
              {item}
            </a>
          ))}
          <div className="pt-10 border-t border-black/5 w-1/2 text-center">
            <p className="text-[10px] font-mono uppercase tracking-[0.3em] opacity-40">Nairobi, KE</p>
          </div>
        </div>
      </div>
    </>
  );
};

export const Section: React.FC<{ id: string; title: string; subtitle?: string; children: React.ReactNode; dark?: boolean; className?: string }> = ({ id, title, subtitle, children, dark, className = "" }) => {
  return (
    <section id={id} className={`relative py-12 px-8 scroll-mt-20 ${dark ? 'bg-[#1a1a1a] text-white' : 'bg-white text-[#1a1a1a]'} ${className}`}>
      <div className="max-w-[1800px] mx-auto">
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between border-b border-current/10 pb-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.4em] opacity-50 mb-1 block">{subtitle || 'Technical Archive'}</span>
            <h2 className="text-4xl md:text-6xl font-serif leading-none tracking-tight">{title}</h2>
          </div>
          <div className="mt-2 md:mt-0 text-right">
            <span className="text-3xl font-serif italic opacity-10">/ {id}</span>
          </div>
        </div>
        {children}
      </div>
    </section>
  );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="min-h-screen">
    <Navbar />
    {children}
    <footer className="bg-[#1a1a1a] text-white py-10 px-8 border-t border-white/5">
      <div className="max-w-[1800px] mx-auto grid md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-2xl font-serif mb-4">S.M.G</h3>
          <p className="text-sm opacity-50 leading-relaxed font-light">
            Defining property value through technical precision and market intelligence. Based in Nairobi, Kenya.
          </p>
        </div>
        <div className="space-y-3">
          <p className="text-xs font-mono uppercase tracking-widest opacity-40">Navigation</p>
          <div className="flex flex-col space-y-1">
            <a href="#works" className="text-sm hover:translate-x-2 transition-transform">Projects Gallery</a>
            <a href="#profile" className="text-sm hover:translate-x-2 transition-transform">Candidate CV</a>
            <a href="#insights" className="text-sm hover:translate-x-2 transition-transform">Inquiries</a>
          </div>
        </div>
        <div className="text-right">
           <p className="text-xs font-mono uppercase tracking-widest opacity-40 mb-1">Technical Practice</p>
           <p className="text-sm">Real Estate Valuation & Advisory</p>
           <p className="text-sm opacity-50">Portfolio v2.4</p>
        </div>
      </div>
    </footer>
  </div>
);
