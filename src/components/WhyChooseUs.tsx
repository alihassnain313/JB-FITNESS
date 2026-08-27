import React from 'react';
import { Target, Flame, MapPin, Trophy, TrendingUp, Star, CheckCircle } from 'lucide-react';
import { WHY_CHOOSE_ITEMS, BUSINESS_INFO } from '../data/gymData';

export const WhyChooseUs: React.FC = () => {
  const getBenefitIcon = (iconName: string) => {
    switch (iconName) {
      case 'Target':
        return <Target className="w-5 h-5 text-[#FF4D00]" />;
      case 'Flame':
        return <Flame className="w-5 h-5 text-[#FF4D00]" />;
      case 'MapPin':
        return <MapPin className="w-5 h-5 text-[#FF4D00]" />;
      case 'Trophy':
        return <Trophy className="w-5 h-5 text-[#FF4D00]" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-[#FF4D00]" />;
      case 'Star':
        return <Star className="w-5 h-5 text-amber-400 fill-amber-400" />;
      default:
        return <CheckCircle className="w-5 h-5 text-[#FF4D00]" />;
    }
  };

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-[#0a0a0a] text-neutral-100 relative border-t border-white/5">
      {/* Decorative background glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FF4D00]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 text-[#FF4D00] text-xs font-bold uppercase tracking-widest font-display mb-4">
            <span>The JB Fitness Edge</span>
          </div>

          <h2
            id="why-choose-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase text-white tracking-tight leading-[0.95] mb-6 font-heading"
          >
            WHY CHOOSE <span className="text-[#FF4D00]">JB FITNESS GYM</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-300">
            We provide the environment, accessibility, and high-energy atmosphere you need to stay committed to your transformation in Gwalior.
          </p>
        </div>

        {/* Benefits Grid (6 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_ITEMS.map((item, idx) => (
            <div
              key={item.id}
              id={`why-card-${item.id}`}
              className="p-8 bg-[#0f0f0f] hover:bg-[#151515] border border-white/10 hover:border-[#FF4D00]/50 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Icon Container */}
                <div className="w-12 h-12 bg-[#0a0a0a] border border-white/10 group-hover:border-[#FF4D00]/40 flex items-center justify-center mb-6 shadow-inner group-hover:scale-105 transition-transform">
                  {getBenefitIcon(item.iconName)}
                </div>

                {/* Card Title */}
                <h3 className="text-xl sm:text-2xl font-bold uppercase text-white tracking-wide font-heading mb-3 group-hover:text-[#FF4D00] transition-colors">
                  {item.title}
                </h3>

                {/* Card Description */}
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              {/* Card Footer Highlight */}
              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs text-zinc-400 font-display">
                <span className="tracking-widest uppercase font-bold text-zinc-500 text-[10px]">
                  Feature #{idx + 1}
                </span>
                {item.id === 'highly-rated' && (
                  <span className="text-amber-400 font-bold flex items-center gap-1 text-[11px]">
                    ★ 4.8 / 5.0 (143 reviews)
                  </span>
                )}
                {item.id === 'convenient-location' && (
                  <span className="text-[#FF4D00] font-bold text-[11px] uppercase tracking-wider">
                    City Center, Kailash Vihar
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Local Verification Quote */}
        <div className="mt-14 p-6 bg-[#0f0f0f] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#FF4D00]/10 border border-[#FF4D00]/30 flex items-center justify-center text-[#FF4D00] flex-shrink-0">
              <Star className="w-6 h-6 fill-[#FF4D00]" />
            </div>
            <div>
              <h4 className="text-lg font-black uppercase text-white font-heading tracking-wider">
                JOIN GWALIOR'S TRUSTED FITNESS HUB
              </h4>
              <p className="text-xs sm:text-sm text-zinc-400">
                Experience the motivation and consistency that our 143+ Google reviewers celebrate.
              </p>
            </div>
          </div>

          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="px-6 py-3 bg-[#0a0a0a] hover:bg-[#FF4D00] hover:text-black text-white border border-white/10 hover:border-[#FF4D00] text-xs font-black uppercase tracking-widest transition-colors flex-shrink-0"
          >
            Call {BUSINESS_INFO.formattedPhone}
          </a>
        </div>

      </div>
    </section>
  );
};
