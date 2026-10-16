import React from 'react';
import { Logo } from './Logo';
import { GALLERY_INFO, buildWhatsAppUrl } from '../data/artworks';
import { MessageCircle, Mail, Phone, Instagram, Facebook, MapPin, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#141210] text-[#D6CEBE] pt-16 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Decorative Traditional Nepali Five-Color Ribbon (Blue, White, Red, Green, Yellow) */}
      <div className="absolute top-0 left-0 right-0 h-1 flex">
        <div className="w-1/5 bg-[#2563EB]" />
        <div className="w-1/5 bg-[#F8FAFC]" />
        <div className="w-1/5 bg-[#DC2626]" />
        <div className="w-1/5 bg-[#16A34A]" />
        <div className="w-1/5 bg-[#EAB308]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          {/* Brand & Mission Statement (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <Logo size={42} className="h-10 w-10" />
              <div>
                <span className="font-serif text-2xl font-bold text-[#FAF8F5] block leading-none">
                  Chanchale Art Gallery
                </span>
                <span className="font-sans text-[10px] tracking-[0.2em] uppercase font-semibold text-[#D97706] mt-1 block">
                  Fine Nepali Art · Thamel, Kathmandu
                </span>
              </div>
            </div>

            <p className="font-sans text-xs sm:text-sm text-[#A8A29E] leading-relaxed max-w-sm pt-2">
              Dedicated to preserving the beauty, culture, and spirit of Nepal through original, hand-painted acrylic artworks by Chanchale Majkoti. Direct artist-to-collector authenticity without middleman markups.
            </p>

            <div className="pt-2 text-xs font-sans text-[#78716C] space-y-1">
              <p>Founder & Principal Artist: <strong className="text-[#FAF8F5]">Jham Bahadur Majakoti</strong></p>
              <p>Established: <strong className="text-[#FAF8F5]">{GALLERY_INFO.established}</strong></p>
            </div>
          </div>

          {/* Quick Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-sans font-bold uppercase tracking-wider text-[#FAF8F5]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-sans text-[#A8A29E]">
              <li>
                <a href="#gallery" className="hover:text-[#F59E0B] transition-colors">
                  Artworks Collection
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#F59E0B] transition-colors">
                  About Founder Chanchale Majkoti
                </a>
              </li>
              <li>
                <a href="#why-buy" className="hover:text-[#F59E0B] transition-colors">
                  Authenticity & Craftsmanship
                </a>
              </li>
              <li>
                <a href="#visit-us" className="hover:text-[#F59E0B] transition-colors">
                  Visit Gallery in Thamel
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#F59E0B] transition-colors">
                  Custom Commissions & Inquiries
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Summary (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-sans font-bold uppercase tracking-wider text-[#FAF8F5]">
              Gallery Location
            </h4>
            <div className="space-y-2.5 text-xs font-sans text-[#A8A29E]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                <span>
                  {GALLERY_INFO.address}, {GALLERY_INFO.landmark}, Kathmandu 44600, Nepal
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#D97706] shrink-0" />
                <span>{GALLERY_INFO.hours} (Everyday)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#25D366] shrink-0" />
                <a href="tel:+9779818902898" className="hover:text-white transition-colors">
                  {GALLERY_INFO.phoneIntl}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#F59E0B] shrink-0" />
                <a href={`mailto:${GALLERY_INFO.email}`} className="hover:text-white transition-colors">
                  {GALLERY_INFO.email}
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="pt-3 flex items-center gap-3">
              <a
                href={GALLERY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#25D366]/20 text-[#25D366] hover:bg-[#25D366] hover:text-white flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={GALLERY_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 text-white hover:bg-[#E1306C] flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={GALLERY_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 text-white hover:bg-[#1877F2] flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Developer Summary */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-sans text-[#78716C]">
          <p>© {new Date().getFullYear()} Chanchale Art Gallery. All rights reserved. Handcrafted original paintings from Nepal.</p>
          <div className="flex items-center gap-4">
            <span>Free Admission</span>
            <span aria-hidden="true">·</span>
            <span>Worldwide Shipping</span>
            <span aria-hidden="true">·</span>
            <span>Signed Certificates of Authenticity</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
