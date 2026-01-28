
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="text-white bg-slate-900 mt-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-12 grid md:grid-cols-2 gap-8 items-center border-b border-white/5">
          <div className="flex items-center gap-6">
            <Link to="/" className="text-xl font-playfair font-bold tracking-tight uppercase">JWG</Link>
            <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium">
              <Link to="/work" className="hover:underline text-white/70 hover:text-white">Work</Link>
              <Link to="/contact" className="hover:underline text-white/70 hover:text-white">Contact</Link>
            </nav>
          </div>
          <div className="md:text-right text-sm text-white/70">
            <p>© 2025 JWG | Full Stack Developer & Portfolio Specialist.</p>
          </div>
        </div>
        <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-white/30 uppercase tracking-[0.3em] font-bold">M-Pesa • Bank Transfer Accepted</p>
          <div className="flex gap-6">
            <a href="https://github.com/gichurejoy" className="text-white/50 hover:text-white transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/joy-wanjiru-4426221a1/" className="text-white/50 hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
