import React from 'react';
import { Star, ArrowUpRight, CheckCircle2, ShieldCheck, MapPin, MessageSquareQuote } from 'lucide-react';
import { BUSINESS_INFO } from '../data/gymData';

export const GoogleReviews: React.FC = () => {
  const ratingBreakdown = [
    { label: '5 Stars', percent: 88, count: 126 },
    { label: '4 Stars', percent: 10, count: 14 },
    { label: '3 Stars', percent: 2, count: 3 },
    { label: '2 Stars', percent: 0, count: 0 },
    { label: '1 Star', percent: 0, count: 0 },
  ];

  return (
    <section id="reviews" className="py-20 lg:py-28 bg-[#0a0a0a] relative border-t border-white/5">
      {/* Glow Effect */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-[#FF4D00]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 text-[#FF4D00] text-xs font-bold uppercase tracking-widest font-display mb-4">
            <Star className="w-3.5 h-3.5 fill-[#FF4D00]" />
            <span>Google Verified Ratings</span>
          </div>

          <h2
            id="reviews-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase text-white tracking-tight leading-[0.95] mb-6 font-heading"
          >
            WHAT OUR <span className="text-[#FF4D00]">MEMBERS SAY</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-300">
            Real feedback from local gym members and fitness enthusiasts training at JB FITNESS GYM in Gwalior.
          </p>
        </div>

        {/* Main Rating Showcase Card */}
        <div className="max-w-4xl mx-auto bg-[#0f0f0f] border border-white/10 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          
          {/* Subtle Watermark Icon */}
          <MessageSquareQuote className="absolute -right-6 -bottom-6 w-56 h-56 text-zinc-900/40 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 items-center relative z-10">
            
            {/* Left side: Rating score big numbers */}
            <div className="md:col-span-5 text-center md:text-left flex flex-col items-center md:items-start border-b md:border-b-0 md:border-r border-white/10 pb-8 md:pb-0 md:pr-8">
              
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#0a0a0a] border border-white/10 text-[10px] uppercase tracking-wider font-bold text-zinc-300 mb-4">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Verified Google Profile</span>
              </div>

              <div className="text-6xl sm:text-7xl font-black text-white font-heading tracking-tight flex items-baseline gap-2">
                <span>4.8</span>
                <span className="text-2xl text-zinc-500 font-sans font-normal">/ 5</span>
              </div>

              {/* 5-star visual */}
              <div className="flex items-center gap-1 text-amber-400 my-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400" />
                ))}
              </div>

              <p className="text-xs sm:text-sm font-bold text-zinc-200 uppercase tracking-wider">
                Based on <span className="text-white font-black">143 Google reviews</span>
              </p>
              <p className="text-xs text-zinc-400 mt-1 uppercase tracking-wider font-display">
                JB FITNESS GYM • City Center, Gwalior
              </p>

              {/* CTA View All Google Reviews */}
              <div className="mt-8 w-full">
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="view-all-google-reviews-btn"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#FF4D00] hover:bg-white text-black font-black text-xs uppercase tracking-widest shadow-lg shadow-[#FF4D00]/20 transition-colors duration-200 group"
                >
                  <span>VIEW ALL GOOGLE REVIEWS</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>

            </div>

            {/* Right side: Rating Distribution & Highlights */}
            <div className="md:col-span-7 flex flex-col justify-center space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-300 font-display mb-2">
                Rating Breakdown
              </h3>

              {ratingBreakdown.map((item) => (
                <div key={item.label} className="space-y-1">
                  <div className="flex justify-between text-xs text-zinc-300">
                    <span className="font-semibold">{item.label}</span>
                    <span className="text-zinc-400 font-bold">{item.percent}%</span>
                  </div>
                  <div className="w-full h-2 bg-[#0a0a0a] overflow-hidden border border-white/5">
                    <div
                      className="h-full bg-[#FF4D00] transition-all duration-500"
                      style={{ width: `${item.percent}%` }}
                    />
                  </div>
                </div>
              ))}

              {/* Verified Trust Badges */}
              <div className="pt-6 border-t border-white/10 grid grid-cols-2 gap-3 text-xs text-zinc-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>100% Genuine Reviews</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>Active Local Community</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>Clean & Maintained</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>City Center Accessibility</span>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Callout Notice honoring no fabricated reviews */}
        <div className="mt-8 text-center">
          <p className="text-xs text-zinc-500 uppercase tracking-wider font-semibold flex items-center justify-center gap-1.5">
            <span>Read authentic reviews directly on our Google Maps profile</span>
            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF4D00] hover:underline font-bold"
            >
              Open Google Profile
            </a>
          </p>
        </div>

      </div>
    </section>
  );
};
