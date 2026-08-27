import React from 'react';
import { Dumbbell, Phone, MapPin, Star, ArrowUpRight, Heart } from 'lucide-react';
import { BUSINESS_INFO } from '../data/gymData';

export const Footer: React.FC = () => {
  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Facilities', href: '#facilities' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const elem = document.querySelector(href);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="footer" className="bg-[#0a0a0a] text-zinc-400 border-t border-white/10 pt-16 pb-28 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 bg-[#FF4D00] flex items-center justify-center text-black font-black">
                <Dumbbell className="w-5 h-5 text-black" />
              </div>
              <span className="text-2xl font-black tracking-wider text-white font-heading leading-none">
                JB FITNESS <span className="text-[#FF4D00]">GYM</span>
              </span>
            </div>

            <p className="text-base font-bold uppercase tracking-widest text-zinc-200 font-heading">
              Train Hard. Get Stronger. Become Better.
            </p>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-sm">
              Your premier fitness and strength training facility in Gwalior. Dedicated to empowering individuals through structured workouts, motivating atmosphere, and consistent discipline.
            </p>

            {/* Google Trust snippet */}
            <div className="pt-2">
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 bg-[#0f0f0f] border border-white/10 text-xs text-zinc-300 hover:border-[#FF4D00] hover:text-white transition-colors"
              >
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>Google Rating: <strong className="text-white">★ 4.8/5</strong> | 143 Reviews</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
              </a>
            </div>
          </div>

          {/* Quick Links Col */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white font-display">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs uppercase tracking-wider font-semibold">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="hover:text-[#FF4D00] inline-block transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white font-display">
              Gym Location & Phone
            </h4>
            
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FF4D00] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-bold uppercase tracking-wider">City Center, Gwalior, Madhya Pradesh</div>
                  <div className="text-xs text-zinc-400 mt-0.5">Shree Banke Bihari Plaza, Near Income Tax Office, Kailash Vihar, Tulsi Vihar Colony, 474002</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FF4D00] flex-shrink-0" />
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="text-white font-bold hover:text-[#FF4D00] transition-colors"
                >
                  {BUSINESS_INFO.formattedPhone}
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#FF4D00] hover:underline font-bold uppercase tracking-widest"
                >
                  <span>Open Google Business Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            © 2026 <strong className="text-zinc-300">JB FITNESS GYM</strong>. All Rights Reserved.
          </div>
          <div className="flex items-center gap-1 text-zinc-500 uppercase tracking-widest text-[10px] font-bold font-display">
            <span>Built for strength & performance in Gwalior</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
