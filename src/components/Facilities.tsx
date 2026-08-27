import React, { useState } from 'react';
import { Dumbbell, Flame, HeartPulse, Activity, Zap, ShieldCheck, ArrowRight, Check } from 'lucide-react';
import { TRAINING_CATEGORIES } from '../data/gymData';
import { TrainingCategory } from '../types';

interface FacilitiesProps {
  onSelectCategory: (categoryName: string) => void;
}

export const Facilities: React.FC<FacilitiesProps> = ({ onSelectCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState<TrainingCategory | null>(null);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Dumbbell':
        return <Dumbbell className="w-4 h-4 text-[#FF4D00]" />;
      case 'Flame':
        return <Flame className="w-4 h-4 text-[#FF4D00]" />;
      case 'HeartPulse':
        return <HeartPulse className="w-4 h-4 text-[#FF4D00]" />;
      case 'Activity':
        return <Activity className="w-4 h-4 text-[#FF4D00]" />;
      case 'Zap':
        return <Zap className="w-4 h-4 text-[#FF4D00]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-4 h-4 text-[#FF4D00]" />;
      default:
        return <Dumbbell className="w-4 h-4 text-[#FF4D00]" />;
    }
  };

  return (
    <section id="facilities" className="py-20 lg:py-28 bg-[#0a0a0a] relative border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#FF4D00]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 text-[#FF4D00] text-xs font-bold uppercase tracking-widest font-display mb-4">
            <span>Training & Facilities</span>
          </div>

          <h2
            id="facilities-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase text-white tracking-tight leading-[0.95] mb-6 font-heading"
          >
            EVERYTHING YOU NEED TO <span className="text-[#FF4D00]">GET STRONGER</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-300">
            Comprehensive workout zones and versatile training spaces designed to support your athletic progress, whether you're lifting heavy or conditioning for life.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {TRAINING_CATEGORIES.map((category) => (
            <div
              key={category.id}
              id={`facility-card-${category.id}`}
              className="group relative overflow-hidden bg-[#0f0f0f] border border-white/10 hover:border-[#FF4D00]/60 shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              {/* Card Image with Dramatic Overlay */}
              <div className="relative h-56 sm:h-64 overflow-hidden bg-[#0a0a0a]">
                <img
                  src={category.image}
                  alt={`${category.title} at JB FITNESS GYM Gwalior`}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-[#0f0f0f]/40 to-transparent" />

                {/* Category Icon Badge */}
                <div className="absolute top-4 left-4 p-2 bg-[#0a0a0a]/90 backdrop-blur-md border border-white/10 shadow-md">
                  {getCategoryIcon(category.iconName)}
                </div>

                {/* Title badge overlay on image */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-[10px] uppercase tracking-widest text-[#FF4D00] font-bold font-display mb-1">
                    {category.tagline}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold uppercase text-white font-heading tracking-wide leading-none">
                    {category.title}
                  </h3>
                </div>
              </div>

              {/* Card Content & Focus Areas */}
              <div className="p-6 pt-4 flex-1 flex flex-col justify-between">
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6 font-normal">
                  {category.description}
                </p>

                <div>
                  {/* Focus Badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {category.focusAreas.map((focus, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#0a0a0a] border border-white/5 text-[11px] text-zinc-300 font-semibold uppercase tracking-wider"
                      >
                        <Check className="w-3 h-3 text-[#FF4D00]" />
                        <span>{focus}</span>
                      </span>
                    ))}
                  </div>

                  {/* Action Link */}
                  <button
                    type="button"
                    onClick={() => onSelectCategory(category.title)}
                    className="w-full py-2.5 px-4 bg-[#0a0a0a] hover:bg-[#FF4D00] text-zinc-300 hover:text-black border border-white/10 hover:border-[#FF4D00] text-xs font-black uppercase tracking-widest transition-colors flex items-center justify-center gap-2 group/btn"
                  >
                    <span>Inquire About {category.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom helper note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">
            Training modalities suitable for beginners to advanced lifters • Visit JB FITNESS GYM in City Center, Gwalior to get started
          </p>
        </div>

      </div>
    </section>
  );
};
