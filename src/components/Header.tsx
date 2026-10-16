import React, { useState } from 'react';
import { Logo } from './Logo';
import { GALLERY_INFO, buildWhatsAppUrl } from '../data/artworks';
import { MessageCircle, Menu, X, Clock, MapPin } from 'lucide-react';

interface HeaderProps {
  onOpenEnquiryModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenEnquiryModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Operational Announcement Bar (Quiet Editorial Strip) */}
      <div className="bg-[#1C1917] text-[#FAF8F5] text-[11px] font-sans tracking-wide py-1.5 px-4 sm:px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-[#A8A29E]">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-[#E7E1D8]">
              <MapPin className="w-3 h-3 text-[#D97706]" />
              Kaldhara Marg, Thamel, Kathmandu
            </span>
            <span className="hidden md:inline" aria-hidden="true">·</span>
            <span className="hidden md:flex items-center gap-1.5">
              <Clock className="w-3 h-3 text-[#D97706]" />
              Open Daily: 8:00 AM – 6:00 PM
            </span>
          </div>
          <div className="flex items-center gap-3 text-xs">
            <span>Direct from Artist Chanchale Majkoti</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#F59E0B] font-medium">Worldwide Shipping Available</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E7E1D8] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark with Official Logo */}
          <a
            href="#"
            className="flex items-center gap-3.5 group whitespace-nowrap shrink-0 focus-visible:outline-none"
          >
            <Logo size={42} className="h-10 w-10 sm:h-11 sm:w-11 transition-transform group-hover:scale-105" />
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#1C1917] leading-none group-hover:text-[#991B1B] transition-colors">
                Chanchale
              </span>
              <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.2em] uppercase font-semibold text-[#78716C] mt-0.5">
                Art Gallery · Kathmandu
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (Single-Line, 4 Clean Links) */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-sans font-medium text-[#57534E]">
            <a
              href="#gallery"
              className="hover:text-[#1C1917] hover:border-b-2 hover:border-[#D97706] pb-1 transition-colors whitespace-nowrap shrink-0"
            >
              Collection
            </a>
            <a
              href="#about"
              className="hover:text-[#1C1917] hover:border-b-2 hover:border-[#D97706] pb-1 transition-colors whitespace-nowrap shrink-0"
            >
              About the Artist
            </a>
            <a
              href="#why-buy"
              className="hover:text-[#1C1917] hover:border-b-2 hover:border-[#D97706] pb-1 transition-colors whitespace-nowrap shrink-0"
            >
              Craftsmanship
            </a>
            <a
              href="#visit-us"
              className="hover:text-[#1C1917] hover:border-b-2 hover:border-[#D97706] pb-1 transition-colors whitespace-nowrap shrink-0"
            >
              Visit Gallery
            </a>
            <a
              href="#contact"
              className="hover:text-[#1C1917] hover:border-b-2 hover:border-[#D97706] pb-1 transition-colors whitespace-nowrap shrink-0"
            >
              Contact
            </a>
          </nav>

          {/* Zone 3: Primary Action (WhatsApp Enquiry Button) */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#1C1917] hover:bg-[#991B1B] text-[#FAF8F5] px-4 py-2.5 rounded-sm text-xs sm:text-sm font-sans font-semibold tracking-wide transition-all shadow-xs hover:shadow-md whitespace-nowrap shrink-0"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span className="hidden sm:inline">Enquire on WhatsApp</span>
              <span className="sm:hidden">WhatsApp</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#1C1917] hover:text-[#991B1B] focus-visible:outline-none rounded-sm"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FAF8F5] border-b border-[#E7E1D8] px-6 py-6 space-y-4 shadow-lg animate-in fade-in duration-150">
            <nav className="flex flex-col space-y-3.5 text-base font-sans font-medium text-[#1C1917]">
              <a
                href="#gallery"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#991B1B] transition-colors"
              >
                Collection & Gallery
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#991B1B] transition-colors"
              >
                About Founder Chanchale Majkoti
              </a>
              <a
                href="#why-buy"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#991B1B] transition-colors"
              >
                Why Buy From Us
              </a>
              <a
                href="#visit-us"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#991B1B] transition-colors"
              >
                Visit Us (Thamel, Kathmandu)
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#991B1B] transition-colors"
              >
                Contact & Custom Commissions
              </a>
            </nav>

            <div className="pt-4 border-t border-[#E7E1D8] flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiryModal();
                }}
                className="w-full py-2.5 px-4 bg-[#F3EFEA] hover:bg-[#E7E1D8] text-[#1C1917] rounded-sm text-sm font-sans font-medium text-center transition-colors"
              >
                Custom Artwork Enquiry Form
              </button>
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 bg-[#25D366] hover:bg-[#20BA5C] text-white rounded-sm text-sm font-sans font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Open WhatsApp: {GALLERY_INFO.phoneIntl}
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
