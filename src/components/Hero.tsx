import React from 'react';
import { Phone, ChevronDown, Star, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/gymData';

interface HeroProps {
  onJoinClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onJoinClick }) => {
  const scrollToAbout = () => {
    const aboutElem = document.getElementById('about');
    if (aboutElem) {
      aboutElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 lg:py-32 overflow-hidden bg-[#0a0a0a]"
    >
      {/* Cinematic Gym Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2000&auto=format&fit=crop"
          alt="JB FITNESS GYM training environment with modern equipment and dramatic athletic lighting"
          className="w-full h-full object-cover object-center scale-105"
          loading="eager"
          referrerPolicy="no-referrer"
        />
        {/* Layered dark gradients for maximum contrast and high-end feel */}
        <div className="absolute inset-0 bg-[#0a0a0a]/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-[#0a0a0a]/75" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#0a0a0a]/40 to-[#0a0a0a]/90" />
        {/* Orange atmospheric light flare */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#FF4D00]/15 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Trust & Location Badge */}
        <a
          href={BUSINESS_INFO.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          id="hero-trust-badge"
          className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-[#0f0f0f] border border-white/10 text-xs text-zinc-300 hover:border-[#FF4D00]/50 hover:bg-[#151515] transition-all duration-200 mb-6 group cursor-pointer shadow-lg"
        >
          <div className="flex items-center text-amber-400">
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            <span className="font-bold ml-1 text-white">4.8/5</span>
          </div>
          <span className="text-zinc-600">•</span>
          <span className="text-zinc-400 font-semibold tracking-wider uppercase text-[11px]">Google Rating</span>
          <span className="text-zinc-600">•</span>
          <span className="text-[#FF4D00] font-bold uppercase tracking-wider text-[11px] group-hover:underline flex items-center gap-1">
            143+ Reviews <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </span>
        </a>

        {/* Business Sub-Brand Name */}
        <div className="flex items-center gap-2 text-[#FF4D00] text-xs sm:text-sm font-bold tracking-[0.25em] uppercase font-display mb-2">
          <span className="h-0.5 w-6 bg-[#FF4D00] inline-block"></span>
          <span>GWALIOR'S PREMIER TRAINING DESTINATION</span>
          <span className="h-0.5 w-6 bg-[#FF4D00] inline-block"></span>
        </div>

        {/* Primary Powerful Heading */}
        <h1
          id="hero-title"
          className="text-5xl sm:text-7xl md:text-8xl font-black uppercase text-white tracking-tight leading-[0.9] mb-6 font-heading"
        >
          <span className="block text-white">TRAIN HARD.</span>
          <span className="block text-[#FF4D00]">
            GET STRONGER.
          </span>
          <span className="block text-white">BECOME BETTER.</span>
        </h1>

        {/* Supporting Copy */}
        <p
          id="hero-description"
          className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal"
        >
          Your fitness journey starts here. Train smarter, get stronger, and become the best version of yourself at{' '}
          <strong className="text-white font-semibold">JB FITNESS GYM</strong>, City Center, Gwalior.
        </p>

        {/* Hero CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center mb-12">
          <button
            id="hero-join-cta"
            onClick={onJoinClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-xs font-black uppercase tracking-widest text-black bg-[#FF4D00] hover:bg-white transition-colors duration-200 shadow-xl shadow-[#FF4D00]/20"
          >
            <span>JOIN NOW</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            id="hero-call-cta"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-xs font-bold tracking-widest uppercase text-white bg-[#0f0f0f] hover:bg-[#151515] border border-white/10 hover:border-white/30 transition-all duration-200"
          >
            <Phone className="w-4 h-4 text-[#FF4D00]" />
            <span>CALL NOW</span>
          </a>
        </div>

        {/* Quick Micro-Highlights */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 pt-6 border-t border-white/10 text-xs text-zinc-400 w-full max-w-3xl">
          <div className="flex items-center justify-center gap-2 p-3 bg-[#0f0f0f] border border-white/5">
            <MapPin className="w-4 h-4 text-[#FF4D00] flex-shrink-0" />
            <span className="font-semibold text-zinc-300">City Center, Gwalior</span>
          </div>
          <div className="flex items-center justify-center gap-2 p-3 bg-[#0f0f0f] border border-white/5">
            <Star className="w-4 h-4 text-amber-400 flex-shrink-0 fill-amber-400" />
            <span className="font-semibold text-zinc-300">4.8★ Google Rating</span>
          </div>
          <div className="col-span-2 sm:col-span-1 flex items-center justify-center gap-2 p-3 bg-[#0f0f0f] border border-white/5">
            <ShieldCheck className="w-4 h-4 text-[#FF4D00] flex-shrink-0" />
            <span className="font-semibold text-zinc-300">100% Dedicated Training</span>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <button
        type="button"
        id="hero-scroll-indicator"
        onClick={scrollToAbout}
        aria-label="Scroll down to About section"
        className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-zinc-500 hover:text-white transition-colors cursor-pointer group"
      >
        <span className="text-[10px] font-bold tracking-[0.2em] uppercase mb-1 opacity-70 group-hover:opacity-100 font-display">
          Explore Gym
        </span>
        <div className="w-5 h-8 border border-zinc-600 group-hover:border-[#FF4D00] flex items-start justify-center p-1 transition-colors">
          <div className="w-1 h-2 bg-[#FF4D00] animate-bounce" />
        </div>
      </button>
    </section>
  );
};
