
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="text-xl font-playfair font-bold tracking-tight text-slate-900 uppercase">JWG</Link>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link to="/work" className="text-slate-600 hover:text-slate-900 transition">Work</Link>
            <Link to="/shop" className="text-slate-600 hover:text-slate-900 transition">Packages</Link>
            <Link to="/contact" className="text-slate-600 hover:text-slate-900 transition">Contact</Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link to="/contact" className="hidden sm:inline-flex items-center gap-2 rounded-md bg-slate-900 px-3 py-1.5 text-sm font-medium text-white hover:bg-emerald-600 transition-all">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4"/><path d="m4.93 4.93 2.83 2.83"/><path d="M2 12h4"/><path d="m4.93 19.07 2.83-2.83"/><path d="M12 22v-4"/><path d="m19.07 19.07-2.83-2.83"/><path d="M22 12h-4"/><path d="m19.07 4.93-2.83 2.83"/></svg>
              Hire Me
            </Link>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:bg-slate-50 border border-slate-100"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white animate-in slide-in-from-top-2 duration-300">
          <div className="px-4 py-6 space-y-4">
            <Link to="/work" onClick={() => setIsMobileMenuOpen(false)} className="block text-sm font-medium text-slate-900">Work</Link>
            <Link to="/shop" onClick={() => setIsMobileMenuOpen(false)} className="block text-sm font-medium text-slate-900">Packages</Link>
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block text-sm font-medium text-slate-900">Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
