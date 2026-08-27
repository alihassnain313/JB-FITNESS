import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Dumbbell, ChevronRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/gymData';

interface NavbarProps {
  onJoinClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onJoinClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Facilities', href: '#facilities' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/10 shadow-2xl py-3'
          : 'bg-gradient-to-b from-[#0a0a0a]/95 via-[#0a0a0a]/70 to-transparent py-4 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            id="brand-logo-link"
            className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-[#FF4D00] rounded-sm p-1"
          >
            <div className="w-8 h-8 bg-[#FF4D00] flex items-center justify-center font-black italic text-black shadow-lg shadow-[#FF4D00]/20 group-hover:scale-105 transition-transform duration-200">
              JB
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight text-white font-heading leading-none flex items-center gap-1.5 uppercase italic">
                JB FITNESS <span className="text-[#FF4D00]">GYM</span>
              </span>
              <span className="text-[9px] tracking-[0.2em] uppercase font-bold text-zinc-400 font-display">
                City Center • Gwalior
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                id={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs font-semibold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors duration-200 relative py-1 hover:border-b-2 hover:border-[#FF4D00]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              id="nav-call-button"
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-bold tracking-widest uppercase text-zinc-300 hover:text-white bg-[#0f0f0f] hover:bg-[#151515] border border-white/10 rounded-none transition-all duration-200"
              title="Call JB Fitness Gym"
            >
              <Phone className="w-3.5 h-3.5 text-[#FF4D00]" />
              <span className="hidden lg:inline">{BUSINESS_INFO.formattedPhone}</span>
              <span className="lg:hidden">Call</span>
            </a>

            <button
              id="nav-join-button"
              onClick={onJoinClick}
              className="inline-flex items-center gap-1.5 px-6 py-2 text-xs font-black uppercase tracking-widest text-black bg-[#FF4D00] hover:bg-white transition-colors duration-200 shadow-md shadow-[#FF4D00]/20"
            >
              <span>JOIN NOW</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              id="nav-mobile-join-button"
              onClick={onJoinClick}
              className="px-3 py-1.5 text-xs font-black uppercase tracking-widest text-black bg-[#FF4D00] sm:hidden"
            >
              JOIN
            </button>

            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-400 hover:text-white hover:bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#FF4D00]"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer-menu"
          className="md:hidden bg-[#0a0a0a]/98 backdrop-blur-xl border-b border-white/10 px-4 pt-3 pb-6 space-y-2 mt-2 shadow-2xl animate-in fade-in slide-in-from-top duration-200"
        >
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-3 text-xs font-bold uppercase tracking-widest text-zinc-300 hover:text-white hover:bg-[#151515] transition-colors flex items-center justify-between border-b border-white/5"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-zinc-500" />
              </a>
            ))}
          </div>

          <div className="pt-4 space-y-3">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-[#0f0f0f] text-white text-xs font-bold uppercase tracking-widest border border-white/10"
            >
              <Phone className="w-4 h-4 text-[#FF4D00]" />
              <span>Call: {BUSINESS_INFO.formattedPhone}</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onJoinClick();
              }}
              className="w-full py-3 px-4 bg-[#FF4D00] text-black font-black uppercase tracking-widest text-xs text-center shadow-lg shadow-[#FF4D00]/20 hover:bg-white transition-colors"
            >
              JOIN NOW
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
