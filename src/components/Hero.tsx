import React from 'react';
import { GALLERY_INFO, buildWhatsAppUrl } from '../data/artworks';
import { MessageCircle, ArrowDown, Sparkles, ShieldCheck, Globe, Palette } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#1C1917] text-[#FAF8F5] pt-16 pb-20 lg:pt-24 lg:pb-32">
      {/* Background Gallery Interior Atmosphere with Architectural Lighting */}
      <div className="absolute inset-0 z-0">
        <svg
          className="w-full h-full object-cover opacity-25"
          viewBox="0 0 1440 800"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Gallery Walls & Ambient Skylight */}
          <rect width="1440" height="800" fill="#1C1917" />
          <radialGradient id="gallery-light" cx="50%" cy="25%" r="60%">
            <stop offset="0%" stopColor="#D97706" stopOpacity="0.35" />
            <stop offset="50%" stopColor="#78350F" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#1C1917" stopOpacity="0" />
          </radialGradient>
          <rect width="1440" height="800" fill="url(#gallery-light)" />

          {/* Perspective Gallery Wall Lines */}
          <line x1="0" y1="200" x2="1440" y2="200" stroke="#78716C" strokeWidth="1" strokeOpacity="0.2" />
          <line x1="0" y1="560" x2="1440" y2="560" stroke="#78716C" strokeWidth="1" strokeOpacity="0.15" />

          {/* Wall Hanging Canvases in Perspective */}
          <rect x="120" y="240" width="220" height="150" fill="#292524" stroke="#D97706" strokeWidth="2" strokeOpacity="0.4" rx="2" />
          <rect x="420" y="220" width="300" height="180" fill="#292524" stroke="#D97706" strokeWidth="2.5" strokeOpacity="0.5" rx="2" />
          <rect x="800" y="230" width="260" height="160" fill="#292524" stroke="#D97706" strokeWidth="2" strokeOpacity="0.4" rx="2" />
          <rect x="1140" y="240" width="200" height="140" fill="#292524" stroke="#D97706" strokeWidth="2" strokeOpacity="0.3" rx="2" />

          {/* Warm Spotlights */}
          <circle cx="230" cy="180" r="140" fill="#FBBF24" fillOpacity="0.08" />
          <circle cx="570" cy="170" r="180" fill="#FBBF24" fillOpacity="0.12" />
          <circle cx="930" cy="170" r="150" fill="#FBBF24" fillOpacity="0.09" />
        </svg>

        {/* Soft Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917] via-[#1C1917]/70 to-[#1C1917]/50" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#1C1917]/40 to-[#1C1917]" />
      </div>

      {/* Decorative Subtle Nepali Motif Border Top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#991B1B] via-[#D97706] to-[#991B1B]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Curatorial Kicker */}
        <div className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-sans tracking-[0.25em] uppercase text-[#D97706] font-medium mb-6">
          <span className="w-6 h-px bg-[#D97706]/60" />
          <span>Kaldhara Marg · Thamel · Kathmandu</span>
          <span className="w-6 h-px bg-[#D97706]/60" />
        </div>

        {/* Hero Headline */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#FAF8F5] leading-[1.08] max-w-4xl mx-auto mb-6 text-balance">
          Capturing the Serenity, Mountains & Spirit of Nepal
        </h1>

        {/* Subheadline (authentic from provided details) */}
        <p className="font-sans text-base sm:text-lg md:text-xl text-[#D6CEBE] max-w-2xl mx-auto leading-relaxed font-normal mb-10 text-balance">
          Original, hand-painted acrylic artworks on canvas by artist Chanchale Majkoti. Inspired by the Himalayas, ancient valley temples, and everyday Nepali life.
        </p>

        {/* Two Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-16">
          <a
            href="#gallery"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#FAF8F5] hover:bg-[#FAF8F5]/90 text-[#1C1917] px-7 py-3.5 rounded-xs font-sans text-sm font-semibold tracking-wide transition-all shadow-md hover:shadow-lg whitespace-nowrap"
          >
            <span>View the Collection</span>
            <ArrowDown className="w-4 h-4 text-[#991B1B]" />
          </a>

          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20BA5C] text-white px-7 py-3.5 rounded-xs font-sans text-sm font-semibold tracking-wide transition-all shadow-md hover:shadow-lg whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Enquire on WhatsApp</span>
          </a>
        </div>

        {/* Trust Proof Pillars Ribbon (Supported by document) */}
        <div className="pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          <div className="flex items-start gap-3">
            <Palette className="w-5 h-5 text-[#D97706] shrink-0 mt-0.5" />
            <div>
              <h2 className="text-xs font-sans font-semibold text-[#FAF8F5] uppercase tracking-wider">
                100% Hand-Painted
              </h2>
              <p className="text-[12px] text-[#A8A29E] mt-0.5 leading-snug">
                Every artwork created individually by Chanchale Majkoti.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Globe className="w-5 h-5 text-[#D97706] shrink-0 mt-0.5" />
            <div>
              <h2 className="text-xs font-sans font-semibold text-[#FAF8F5] uppercase tracking-wider">
                Worldwide Delivery
              </h2>
              <p className="text-[12px] text-[#A8A29E] mt-0.5 leading-snug">
                Secure tube or crated shipping directly to your home.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#D97706] shrink-0 mt-0.5" />
            <div>
              <h2 className="text-xs font-sans font-semibold text-[#FAF8F5] uppercase tracking-wider">
                Authenticity Certificate
              </h2>
              <p className="text-[12px] text-[#A8A29E] mt-0.5 leading-snug">
                Signed Certificate of Authenticity (COA) with each piece.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-[#D97706] shrink-0 mt-0.5" />
            <div>
              <h2 className="text-xs font-sans font-semibold text-[#FAF8F5] uppercase tracking-wider">
                Custom Commissions
              </h2>
              <p className="text-[12px] text-[#A8A29E] mt-0.5 leading-snug">
                Your favorite mountain or memory painted in {GALLERY_INFO.customCommissionsDays}.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
