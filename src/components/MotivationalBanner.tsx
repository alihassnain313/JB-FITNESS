import React from 'react';
import { ArrowRight, Flame } from 'lucide-react';

interface MotivationalBannerProps {
  onStartJourney: () => void;
}

export const MotivationalBanner: React.FC<MotivationalBannerProps> = ({ onStartJourney }) => {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-[#0a0a0a] border-t border-white/5">
      {/* Cinematic Gym Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2000&auto=format&fit=crop"
          alt="Athlete focused on heavy barbell lifting at gym with intense lighting"
          className="w-full h-full object-cover object-center scale-105 brightness-90"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        {/* Layered dark dramatic vignette overlays */}
        <div className="absolute inset-0 bg-[#0a0a0a]/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/70 to-[#0a0a0a]" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#0a0a0a]/60 to-[#0a0a0a]" />
        {/* Accent Orange Center Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#FF4D00]/15 rounded-full blur-[100px] pointer-events-none" />
      </div>

      {/* Motivational Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="inline-flex items-center gap-2 px-4 py-1 bg-white/5 border border-white/10 text-[#FF4D00] text-xs font-bold uppercase tracking-widest font-display mb-6">
          <Flame className="w-3.5 h-3.5 text-[#FF4D00] fill-[#FF4D00]" />
          <span>NO EXCUSES. ONLY RESULTS.</span>
        </div>

        <h2
          id="motivational-banner-heading"
          className="text-5xl sm:text-7xl md:text-8xl font-black uppercase text-white tracking-tight leading-[0.9] mb-6 font-heading"
        >
          <span className="block text-white">DON'T WISH FOR IT.</span>
          <span className="block text-[#FF4D00]">
            WORK FOR IT.
          </span>
        </h2>

        <p className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Every workout builds strength, discipline, and endurance. Take action today at JB FITNESS GYM in City Center, Gwalior.
        </p>

        <button
          id="banner-start-journey-cta"
          onClick={onStartJourney}
          className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 text-xs sm:text-sm font-black tracking-widest text-black uppercase bg-[#FF4D00] hover:bg-white shadow-2xl shadow-[#FF4D00]/30 transition-colors duration-200"
        >
          <span>START YOUR FITNESS JOURNEY</span>
          <ArrowRight className="w-4 h-4" />
        </button>

      </div>
    </section>
  );
};
