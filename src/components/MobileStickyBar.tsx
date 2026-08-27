import React from 'react';
import { Phone, Navigation, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/gymData';

interface MobileStickyBarProps {
  onInquireClick: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onInquireClick }) => {
  return (
    <div
      id="mobile-sticky-cta-bar"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0a0a0a]/95 backdrop-blur-xl border-t border-white/10 p-2.5 px-4 shadow-[0_-10px_25px_-5px_rgba(0,0,0,0.8)]"
    >
      <div className="flex items-center gap-2 max-w-md mx-auto">
        
        {/* Call Now CTA */}
        <a
          href={`tel:${BUSINESS_INFO.phone}`}
          id="mobile-sticky-call-btn"
          className="flex-1 min-h-[44px] inline-flex items-center justify-center gap-2 px-3 py-2 bg-[#FF4D00] text-black font-black text-xs uppercase tracking-widest active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4" />
          <span>CALL NOW</span>
        </a>

        {/* Get Directions CTA */}
        <a
          href={BUSINESS_INFO.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          id="mobile-sticky-directions-btn"
          className="flex-1 min-h-[44px] inline-flex items-center justify-center gap-2 px-3 py-2 bg-[#151515] border border-white/10 text-white font-bold text-xs uppercase tracking-widest active:scale-95 transition-transform"
        >
          <Navigation className="w-3.5 h-3.5 text-[#FF4D00]" />
          <span>DIRECTIONS</span>
        </a>

        {/* WhatsApp Quick Chat */}
        <a
          href={BUSINESS_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          id="mobile-sticky-whatsapp-btn"
          className="min-h-[44px] w-[44px] inline-flex items-center justify-center bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 active:scale-95 transition-transform flex-shrink-0"
          aria-label="Chat with JB FITNESS GYM on WhatsApp"
        >
          <MessageCircle className="w-5 h-5" />
        </a>

      </div>
    </div>
  );
};
