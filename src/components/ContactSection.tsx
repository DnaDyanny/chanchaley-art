import React, { useState } from 'react';
import { Artwork, GALLERY_INFO, buildWhatsAppUrl } from '../data/artworks';
import { MessageCircle, Mail, Phone, Instagram, Facebook, Send, ShieldCheck, Check } from 'lucide-react';

interface ContactSectionProps {
  artworks: Artwork[];
  initialArtwork?: Artwork | null;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  artworks,
  initialArtwork = null,
}) => {
  const [selectedArtworkId, setSelectedArtworkId] = useState<string>(
    initialArtwork ? initialArtwork.id : ""
  );
  const [visitorName, setVisitorName] = useState("");
  const [country, setCountry] = useState("");
  const [customMessage, setCustomMessage] = useState("");
  const [framing, setFraming] = useState<'unframed' | 'framed'>('unframed');
  const [shipping, setShipping] = useState<'thamel_pickup' | 'worldwide_shipping'>('worldwide_shipping');

  const selectedArtwork = artworks.find((a) => a.id === selectedArtworkId);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = buildWhatsAppUrl({
      title: selectedArtwork?.title,
      id: selectedArtwork?.id,
      visitorName: visitorName.trim() || undefined,
      country: country.trim() || undefined,
      customMessage: customMessage.trim() || undefined,
      framing,
      shipping,
    });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#F3EFEA] border-b border-[#E7E1D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Contact Details & Gallery Guarantee */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-sans font-semibold tracking-[0.2em] uppercase text-[#991B1B]">
                Direct Contact
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917] mt-2 tracking-tight">
                Connect with the Gallery
              </h2>
              <p className="font-sans text-sm sm:text-base text-[#57534E] mt-3 leading-relaxed">
                We take pride in direct, personal communication with every art lover.
                Send us a message anytime for pricing, video walkthroughs, or bespoke landscape commissions.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              {/* WhatsApp Card */}
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 bg-white border border-[#E7E1D8] hover:border-[#25D366] rounded-xs flex items-center justify-between group transition-all shadow-2xs"
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 bg-[#25D366]/10 text-[#25D366] rounded-xs flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-sans font-bold uppercase tracking-wider text-[#1C1917]">
                      WhatsApp (Fastest Response)
                    </h4>
                    <p className="text-sm font-semibold text-[#1C1917] mt-0.5 group-hover:text-[#25D366] transition-colors">
                      {GALLERY_INFO.phoneIntl}
                    </p>
                  </div>
                </div>
                <span className="text-xs font-sans font-medium text-[#78716C] group-hover:text-[#1C1917] transition-colors">
                  Chat Now →
                </span>
              </a>

              {/* Telephone Card */}
              <a
                href="tel:+9779818902898"
                className="p-5 bg-white border border-[#E7E1D8] hover:border-[#1C1917] rounded-xs flex items-center justify-between group transition-all shadow-2xs"
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 bg-[#FAF8F5] text-[#1C1917] rounded-xs flex items-center justify-center shrink-0 border border-[#E7E1D8]">
                    <Phone className="w-5 h-5 text-[#991B1B]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-sans font-bold uppercase tracking-wider text-[#1C1917]">
                      Direct Telephone
                    </h4>
                    <p className="text-sm font-medium text-[#1C1917] mt-0.5">
                      {GALLERY_INFO.phoneIntl}
                    </p>
                  </div>
                </div>
                <span className="text-xs font-sans font-medium text-[#78716C]">
                  Call
                </span>
              </a>

              {/* Email Card */}
              <a
                href={`mailto:${GALLERY_INFO.email}`}
                className="p-5 bg-white border border-[#E7E1D8] hover:border-[#1C1917] rounded-xs flex items-center justify-between group transition-all shadow-2xs"
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 bg-[#FAF8F5] text-[#1C1917] rounded-xs flex items-center justify-center shrink-0 border border-[#E7E1D8]">
                    <Mail className="w-5 h-5 text-[#D97706]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-sans font-bold uppercase tracking-wider text-[#1C1917]">
                      Email Enquiries
                    </h4>
                    <p className="text-sm font-medium text-[#1C1917] mt-0.5">
                      {GALLERY_INFO.email}
                    </p>
                  </div>
                </div>
                <span className="text-xs font-sans font-medium text-[#78716C]">
                  Email
                </span>
              </a>
            </div>

            {/* Social Media Channels */}
            <div className="pt-2">
              <h4 className="text-xs font-sans font-semibold uppercase tracking-wider text-[#78716C] mb-3">
                Follow Artist Studio Updates
              </h4>
              <div className="flex items-center gap-3">
                <a
                  href={GALLERY_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-white hover:bg-[#FAF8F5] border border-[#E7E1D8] rounded-xs text-xs font-sans font-medium text-[#1C1917] transition-colors"
                >
                  <Instagram className="w-4 h-4 text-[#E1306C]" />
                  <span>Instagram</span>
                </a>

                <a
                  href={GALLERY_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-white hover:bg-[#FAF8F5] border border-[#E7E1D8] rounded-xs text-xs font-sans font-medium text-[#1C1917] transition-colors"
                >
                  <Facebook className="w-4 h-4 text-[#1877F2]" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive WhatsApp Inquiry Builder */}
          <div className="lg:col-span-7 bg-white border border-[#E7E1D8] p-7 sm:p-9 rounded-xs shadow-md">
            <div className="mb-6">
              <span className="text-xs font-sans font-semibold tracking-wider uppercase text-[#D97706]">
                Instant Generator
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#1C1917] mt-1">
                WhatsApp Inquiry Builder
              </h3>
              <p className="text-xs font-sans text-[#78716C] mt-1">
                Customize your questions, select preferences, and launch WhatsApp with a tailored pre-filled message.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Artwork Selection */}
              <div>
                <label htmlFor="artwork-select" className="block text-xs font-sans font-semibold uppercase tracking-wider text-[#1C1917] mb-1.5">
                  Artwork of Interest
                </label>
                <select
                  id="artwork-select"
                  value={selectedArtworkId}
                  onChange={(e) => setSelectedArtworkId(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#E7E1D8] text-[#1C1917] text-sm rounded-xs focus-visible:outline-none focus:border-[#D97706]"
                >
                  <option value="">General Gallery Enquiry (or Custom Commission)</option>
                  {artworks.map((art) => (
                    <option key={art.id} value={art.id}>
                      {art.id} — {art.title} ({art.category})
                    </option>
                  ))}
                </select>
              </div>

              {/* Name & Country in Two Columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="visitor-name" className="block text-xs font-sans font-semibold uppercase tracking-wider text-[#1C1917] mb-1.5">
                    Your Name (Optional)
                  </label>
                  <input
                    id="visitor-name"
                    type="text"
                    value={visitorName}
                    onChange={(e) => setVisitorName(e.target.value)}
                    placeholder="e.g. Sarah Miller"
                    className="w-full px-3.5 py-2 bg-[#FAF8F5] border border-[#E7E1D8] text-[#1C1917] text-sm rounded-xs focus-visible:outline-none focus:border-[#D97706]"
                  />
                </div>

                <div>
                  <label htmlFor="visitor-country" className="block text-xs font-sans font-semibold uppercase tracking-wider text-[#1C1917] mb-1.5">
                    Your Country / City (Optional)
                  </label>
                  <input
                    id="visitor-country"
                    type="text"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    placeholder="e.g. London, UK or Kathmandu"
                    className="w-full px-3.5 py-2 bg-[#FAF8F5] border border-[#E7E1D8] text-[#1C1917] text-sm rounded-xs focus-visible:outline-none focus:border-[#D97706]"
                  />
                </div>
              </div>

              {/* Delivery & Framing Segmented Radios */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="block text-xs font-sans font-semibold uppercase tracking-wider text-[#1C1917] mb-1.5">
                    Delivery Preference
                  </label>
                  <div className="space-y-1.5 text-xs font-sans">
                    <label className="flex items-center gap-2 p-2.5 bg-[#FAF8F5] border border-[#E7E1D8] rounded-xs cursor-pointer hover:bg-[#F3EFEA]">
                      <input
                        type="radio"
                        name="shipping"
                        checked={shipping === 'worldwide_shipping'}
                        onChange={() => setShipping('worldwide_shipping')}
                        className="text-[#991B1B] focus:ring-0"
                      />
                      <span>Worldwide Shipping</span>
                    </label>
                    <label className="flex items-center gap-2 p-2.5 bg-[#FAF8F5] border border-[#E7E1D8] rounded-xs cursor-pointer hover:bg-[#F3EFEA]">
                      <input
                        type="radio"
                        name="shipping"
                        checked={shipping === 'thamel_pickup'}
                        onChange={() => setShipping('thamel_pickup')}
                        className="text-[#991B1B] focus:ring-0"
                      />
                      <span>Collect in Thamel Gallery</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-sans font-semibold uppercase tracking-wider text-[#1C1917] mb-1.5">
                    Framing Preference
                  </label>
                  <div className="space-y-1.5 text-xs font-sans">
                    <label className="flex items-center gap-2 p-2.5 bg-[#FAF8F5] border border-[#E7E1D8] rounded-xs cursor-pointer hover:bg-[#F3EFEA]">
                      <input
                        type="radio"
                        name="framing"
                        checked={framing === 'unframed'}
                        onChange={() => setFraming('unframed')}
                        className="text-[#991B1B] focus:ring-0"
                      />
                      <span>Unframed / Rolled in Tube</span>
                    </label>
                    <label className="flex items-center gap-2 p-2.5 bg-[#FAF8F5] border border-[#E7E1D8] rounded-xs cursor-pointer hover:bg-[#F3EFEA]">
                      <input
                        type="radio"
                        name="framing"
                        checked={framing === 'framed'}
                        onChange={() => setFraming('framed')}
                        className="text-[#991B1B] focus:ring-0"
                      />
                      <span>Framed on Request</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Custom Message or Questions */}
              <div>
                <label htmlFor="custom-message" className="block text-xs font-sans font-semibold uppercase tracking-wider text-[#1C1917] mb-1.5">
                  Specific Questions / Commission Details
                </label>
                <textarea
                  id="custom-message"
                  rows={3}
                  value={customMessage}
                  onChange={(e) => setCustomMessage(e.target.value)}
                  placeholder="Ask about pricing, dimensions, custom painting requests, or delivery timeframe..."
                  className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#E7E1D8] text-[#1C1917] text-sm rounded-xs focus-visible:outline-none focus:border-[#D97706] resize-none"
                />
              </div>

              {/* Submit to WhatsApp Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 bg-[#25D366] hover:bg-[#20BA5C] text-white rounded-xs font-sans text-sm font-semibold tracking-wide flex items-center justify-center gap-2.5 transition-colors shadow-sm"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Send via WhatsApp (+977 981-8902898)</span>
                </button>
                <p className="text-[11px] text-center text-[#78716C] mt-2">
                  Opens WhatsApp in a new tab with your pre-composed message. No spam, ever.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
