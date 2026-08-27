import React, { useState } from 'react';
import { Phone, MapPin, Navigation, Send, MessageCircle, Check, Copy, ArrowRight, Clock, ShieldAlert } from 'lucide-react';
import { BUSINESS_INFO, FITNESS_GOALS } from '../data/gymData';
import { InquiryFormData } from '../types';

interface LocationContactProps {
  preselectedGoal?: string;
}

export const LocationContact: React.FC<LocationContactProps> = ({ preselectedGoal }) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    name: '',
    phone: '',
    fitnessGoal: preselectedGoal || 'Strength Training',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState(false);

  // Update fitnessGoal when preselectedGoal prop changes
  React.useEffect(() => {
    if (preselectedGoal) {
      setFormData((prev) => ({ ...prev, fitnessGoal: preselectedGoal }));
    }
  }, [preselectedGoal]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      return;
    }

    // Prepare WhatsApp URL with the form payload
    const textPayload = `Hi JB FITNESS GYM, I am interested in joining!%0A%0A*Name:* ${encodeURIComponent(formData.name)}%0A*Phone:* ${encodeURIComponent(formData.phone)}%0A*Fitness Goal:* ${encodeURIComponent(formData.fitnessGoal)}%0A*Message:* ${encodeURIComponent(formData.message || 'I would like to inquire about membership and gym visit.')}`;
    const whatsappUrl = `https://wa.me/917578026614?text=${textPayload}`;

    // Open WhatsApp directly for instant response
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  const copyAddressToClipboard = () => {
    navigator.clipboard.writeText(BUSINESS_INFO.address.full);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2500);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#0a0a0a] text-neutral-100 relative border-t border-white/5">
      {/* Background radial glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-[#FF4D00]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 text-[#FF4D00] text-xs font-bold uppercase tracking-widest font-display mb-4">
            <MapPin className="w-3.5 h-3.5" />
            <span>Visit & Contact</span>
          </div>

          <h2
            id="contact-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase text-white tracking-tight leading-[0.95] mb-6 font-heading"
          >
            READY TO <span className="text-[#FF4D00]">START TRAINING?</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-300">
            Take the first step toward a stronger, fitter you. Visit JB FITNESS GYM or contact us today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Business Details & Map */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Business Contact Card */}
            <div className="p-8 bg-[#0f0f0f] border border-white/10 shadow-xl space-y-6">
              <div>
                <div className="text-[10px] uppercase tracking-widest text-[#FF4D00] font-bold font-display mb-1">
                  Fitness Center Location
                </div>
                <h3 className="text-3xl font-black uppercase text-white font-heading tracking-wide">
                  JB FITNESS GYM
                </h3>
              </div>

              {/* Address details */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#FF4D00]/10 border border-[#FF4D00]/30 flex items-center justify-center text-[#FF4D00] flex-shrink-0 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1 text-xs sm:text-sm text-zinc-300">
                  <div className="font-bold text-white">Shree Banke Bihari Plaza</div>
                  <div className="text-[#FF4D00] font-semibold">Near Income Tax Office</div>
                  <div>City Center, Kailash Vihar, Tulsi Vihar Colony</div>
                  <div>Gwalior, Madhya Pradesh 474002, India</div>
                  
                  <button
                    type="button"
                    onClick={copyAddressToClipboard}
                    className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white mt-2 pt-1 font-bold uppercase tracking-wider transition-colors"
                  >
                    {copiedAddress ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Address copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-zinc-500" />
                        <span>Copy address</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Phone Info */}
              <div className="flex items-start gap-4 pt-4 border-t border-white/10">
                <div className="w-10 h-10 bg-[#FF4D00]/10 border border-[#FF4D00]/30 flex items-center justify-center text-[#FF4D00] flex-shrink-0 mt-1">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase text-zinc-400 font-bold font-display tracking-wider">
                    Direct Phone / WhatsApp
                  </div>
                  <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="text-xl sm:text-2xl font-black text-white hover:text-[#FF4D00] transition-colors font-heading tracking-wide"
                  >
                    {BUSINESS_INFO.formattedPhone}
                  </a>
                  <div className="text-xs text-zinc-400 mt-0.5">
                    Call or send a message for inquiries
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  id="contact-call-btn"
                  className="inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#FF4D00] hover:bg-white text-black font-black text-xs uppercase tracking-widest shadow-lg shadow-[#FF4D00]/20 transition-colors text-center"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>CALL JB FITNESS GYM</span>
                </a>

                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-directions-btn"
                  className="inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#0a0a0a] hover:bg-[#151515] border border-white/10 hover:border-white/30 text-white font-bold text-xs uppercase tracking-widest transition-colors text-center"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#FF4D00]" />
                  <span>GET DIRECTIONS</span>
                </a>
              </div>

            </div>

            {/* Embedded Google Maps Area */}
            <div className="overflow-hidden border border-white/10 bg-[#0f0f0f] relative shadow-xl h-64 sm:h-72">
              <iframe
                title="JB FITNESS GYM Location in City Center Gwalior"
                src="https://maps.google.com/maps?q=Shree%20Banke%20Bihari%20Plaza%20Near%20Income%20Tax%20Office%20City%20Center%20Kailash%20Vihar%20Gwalior%20Madhya%20Pradesh%20474002&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 grayscale contrast-125 opacity-90 hover:opacity-100 transition-opacity"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute top-3 right-3">
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-[#0a0a0a]/90 text-white text-[10px] font-black uppercase tracking-widest backdrop-blur-md border border-white/10 flex items-center gap-1.5 hover:bg-[#FF4D00] hover:text-black transition-colors"
                >
                  <span>Open in Google Maps</span>
                  <Navigation className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact & Membership Inquiry Form */}
          <div className="lg:col-span-6">
            <div className="p-8 sm:p-10 bg-[#0f0f0f] border border-white/10 shadow-2xl relative">
              
              <div className="mb-6">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#FF4D00] font-display mb-2">
                  <MessageCircle className="w-4 h-4 text-[#FF4D00]" />
                  <span>Join The Gym</span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-black uppercase text-white font-heading tracking-wide leading-none">
                  Interested in joining?
                </h3>
                <p className="text-xs text-zinc-400 mt-2">
                  Fill in your details below to send an inquiry directly to JB FITNESS GYM via WhatsApp/call.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 bg-[#0a0a0a] border border-emerald-500/40 text-center space-y-4">
                  <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-white font-heading uppercase">
                    INQUIRY DISPATCHED!
                  </h4>
                  <p className="text-xs text-zinc-300">
                    Your inquiry details have been formatted for instant contact with our team at JB FITNESS GYM.
                  </p>
                  <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href={`tel:${BUSINESS_INFO.phone}`}
                      className="px-5 py-2.5 bg-[#FF4D00] text-black font-black text-xs uppercase tracking-widest"
                    >
                      Call Now Directly
                    </a>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-2.5 bg-[#151515] hover:bg-[#202020] text-zinc-200 font-bold text-xs uppercase tracking-widest border border-white/10"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form id="inquiry-form" onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Name Field */}
                  <div>
                    <label htmlFor="inquiry-name" className="block text-[11px] font-bold uppercase tracking-widest text-zinc-400 mb-1.5 font-display">
                      Full Name <span className="text-[#FF4D00]">*</span>
                    </label>
                    <input
                      type="text"
                      id="inquiry-name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-3 bg-[#0a0a0a] border border-white/10 text-white placeholder-zinc-600 text-xs focus:outline-none focus:border-[#FF4D00] transition-colors"
                    />
                  </div>

                  {/* Phone Number Field */}
                  <div>
                    <label htmlFor="inquiry-phone" className="block text-[11px] font-bold uppercase tracking-widest text-zinc-400 mb-1.5 font-display">
                      Phone Number <span className="text-[#FF4D00]">*</span>
                    </label>
                    <input
                      type="tel"
                      id="inquiry-phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full px-4 py-3 bg-[#0a0a0a] border border-white/10 text-white placeholder-zinc-600 text-xs focus:outline-none focus:border-[#FF4D00] transition-colors"
                    />
                  </div>

                  {/* Fitness Goal Field */}
                  <div>
                    <label htmlFor="inquiry-goal" className="block text-[11px] font-bold uppercase tracking-widest text-zinc-400 mb-1.5 font-display">
                      Fitness Goal
                    </label>
                    <select
                      id="inquiry-goal"
                      value={formData.fitnessGoal}
                      onChange={(e) => setFormData({ ...formData, fitnessGoal: e.target.value })}
                      className="w-full px-4 py-3 bg-[#0a0a0a] border border-white/10 text-white text-xs focus:outline-none focus:border-[#FF4D00] transition-colors"
                    >
                      {FITNESS_GOALS.map((goal) => (
                        <option key={goal} value={goal} className="bg-[#0a0a0a] text-white">
                          {goal}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="inquiry-message" className="block text-[11px] font-bold uppercase tracking-widest text-zinc-400 mb-1.5 font-display">
                      Message / Timings Question
                    </label>
                    <textarea
                      id="inquiry-message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Any specific workout preferences or inquiry about visiting the gym in City Center..."
                      className="w-full px-4 py-3 bg-[#0a0a0a] border border-white/10 text-white placeholder-zinc-600 text-xs focus:outline-none focus:border-[#FF4D00] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    id="submit-inquiry-btn"
                    className="w-full py-3.5 px-6 bg-[#FF4D00] hover:bg-white text-black font-black text-xs uppercase tracking-widest shadow-xl shadow-[#FF4D00]/20 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>SEND INQUIRY</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <div className="flex items-center justify-between text-[10px] uppercase font-bold tracking-wider text-zinc-500 pt-1">
                    <span>⚡ Direct connect via WhatsApp & Call</span>
                    <span>No spam guaranteed</span>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
