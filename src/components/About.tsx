import React from 'react';
import { Star, Award, HeartHandshake, MapPin, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/gymData';

interface AboutProps {
  onJoinClick: () => void;
}

export const About: React.FC<AboutProps> = ({ onJoinClick }) => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#0a0a0a] text-neutral-100 relative border-t border-white/5">
      {/* Decorative gradient blur */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF4D00]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Image with Badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative overflow-hidden border border-white/10 shadow-2xl group bg-[#0f0f0f]">
              <img
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1200&auto=format&fit=crop"
                alt="JB FITNESS GYM modern weights and strength training floor in Gwalior"
                className="w-full h-[420px] sm:h-[500px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent" />
              
              {/* Floating Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#0f0f0f]/95 backdrop-blur-md border border-white/10 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#FF4D00]/10 border border-[#FF4D00]/30 flex items-center justify-center text-[#FF4D00]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold font-display">
                      Prime Location
                    </div>
                    <div className="text-xs font-bold text-white uppercase tracking-wider">
                      City Center, Kailash Vihar, Gwalior
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Corner Decorative Accent */}
            <div className="hidden sm:block absolute -top-3 -left-3 w-16 h-16 border-t border-l border-[#FF4D00]/50 pointer-events-none" />
            <div className="hidden sm:block absolute -bottom-3 -right-3 w-16 h-16 border-b border-r border-[#FF4D00]/50 pointer-events-none" />
          </div>

          {/* Right Column: About Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 text-[#FF4D00] text-xs font-bold uppercase tracking-widest font-display mb-4 w-fit">
              <span>About JB FITNESS GYM</span>
            </div>

            <h2
              id="about-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase text-white tracking-tight leading-[0.95] mb-6 font-heading"
            >
              YOUR FITNESS. <span className="text-[#FF4D00]">YOUR STRENGTH.</span> YOUR JOURNEY.
            </h2>

            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed mb-5">
              <strong className="text-white font-semibold">JB FITNESS GYM</strong> is a premier local fitness destination
              in Gwalior, dedicated to helping individuals of all fitness levels build strength, elevate endurance, sharpen mental focus, and build lasting physical confidence.
            </p>

            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed mb-8">
              Conveniently located in <span className="text-white font-medium">City Center, Gwalior</span> (Shree Banke Bihari Plaza, near Income Tax Office), our gym offers a motivating, distraction-free environment where every rep, set, and session brings you closer to your fitness goals.
            </p>

            {/* Value Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#FF4D00] mt-0.5 flex-shrink-0" />
                <span className="text-xs sm:text-sm text-zinc-300">High-energy, focused workout atmosphere</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#FF4D00] mt-0.5 flex-shrink-0" />
                <span className="text-xs sm:text-sm text-zinc-300">Central Gwalior location with easy access</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#FF4D00] mt-0.5 flex-shrink-0" />
                <span className="text-xs sm:text-sm text-zinc-300">Training for strength, muscle & conditioning</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#FF4D00] mt-0.5 flex-shrink-0" />
                <span className="text-xs sm:text-sm text-zinc-300">Positive community supporting your progress</span>
              </div>
            </div>

            {/* Statistics Row (Exact verified facts) */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 p-4 sm:p-6 bg-[#0f0f0f] border border-white/10">
              <div className="text-center sm:text-left border-r border-white/10 pr-2">
                <div className="text-3xl sm:text-4xl font-black text-white font-heading flex items-center justify-center sm:justify-start gap-1">
                  <span className="text-amber-400">4.8</span>
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                </div>
                <div className="text-[11px] uppercase tracking-wider text-zinc-400 font-bold mt-1 font-display">Google Rating</div>
              </div>

              <div className="text-center sm:text-left border-r border-white/10 pr-2">
                <div className="text-3xl sm:text-4xl font-black text-white font-heading">
                  143<span className="text-[#FF4D00]">+</span>
                </div>
                <div className="text-[11px] uppercase tracking-wider text-zinc-400 font-bold mt-1 font-display">Reviews</div>
              </div>

              <div className="text-center sm:text-left">
                <div className="text-3xl sm:text-4xl font-black text-white font-heading">
                  100<span className="text-[#FF4D00]">%</span>
                </div>
                <div className="text-[11px] uppercase tracking-wider text-zinc-400 font-bold mt-1 font-display">Dedication</div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={onJoinClick}
                className="px-6 py-3 bg-[#FF4D00] hover:bg-white text-black font-black text-xs tracking-widest uppercase transition-colors shadow-lg shadow-[#FF4D00]/20"
              >
                START TRAINING TODAY
              </button>
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-white text-xs font-bold uppercase tracking-wider hover:underline"
              >
                <span>View on Google Maps</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#FF4D00]" />
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
