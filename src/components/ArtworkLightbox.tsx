import React, { useEffect } from 'react';
import { Artwork, buildWhatsAppUrl, GALLERY_INFO } from '../data/artworks';
import { PaintingCanvas } from './PaintingCanvas';
import { X, ChevronLeft, ChevronRight, MessageCircle, ShieldCheck, Truck, Frame } from 'lucide-react';

interface ArtworkLightboxProps {
  artwork: Artwork | null;
  artworks: Artwork[];
  onClose: () => void;
  onSelectArtwork: (artwork: Artwork) => void;
  onOpenEnquiryModalWithArtwork?: (artwork: Artwork) => void;
}

export const ArtworkLightbox: React.FC<ArtworkLightboxProps> = ({
  artwork,
  artworks,
  onClose,
  onSelectArtwork,
  onOpenEnquiryModalWithArtwork,
}) => {
  useEffect(() => {
    if (!artwork) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        const currentIndex = artworks.findIndex((a) => a.id === artwork.id);
        const prevIndex = (currentIndex - 1 + artworks.length) % artworks.length;
        onSelectArtwork(artworks[prevIndex]);
      } else if (e.key === 'ArrowRight') {
        const currentIndex = artworks.findIndex((a) => a.id === artwork.id);
        const nextIndex = (currentIndex + 1) % artworks.length;
        onSelectArtwork(artworks[nextIndex]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [artwork, artworks, onClose, onSelectArtwork]);

  if (!artwork) return null;

  const currentIndex = artworks.findIndex((a) => a.id === artwork.id);
  const prevArtwork = artworks[(currentIndex - 1 + artworks.length) % artworks.length];
  const nextArtwork = artworks[(currentIndex + 1) % artworks.length];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Lightbox Dialog Container */}
      <div
        className="relative max-w-5xl w-full max-h-[92vh] overflow-y-auto bg-[#FAF8F5] text-[#1C1917] rounded-xs shadow-2xl border border-white/10 flex flex-col lg:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black text-white hover:text-[#FAF8F5] transition-colors focus-visible:outline-none"
          aria-label="Close lightbox modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Previous Artwork Trigger */}
        <button
          type="button"
          onClick={() => onSelectArtwork(prevArtwork)}
          className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/50 hover:bg-black text-white transition-colors focus-visible:outline-none"
          aria-label="Previous artwork"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Next Artwork Trigger */}
        <button
          type="button"
          onClick={() => onSelectArtwork(nextArtwork)}
          className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/50 hover:bg-black text-white transition-colors focus-visible:outline-none"
          aria-label="Next artwork"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Left Column: Full Uncropped Artwork Canvas View */}
        <div className="lg:w-3/5 bg-[#141210] flex items-center justify-center p-4 sm:p-8 min-h-[340px] sm:min-h-[440px] lg:min-h-[560px]">
          <div className="w-full max-w-lg aspect-4/3 relative shadow-2xl">
            <PaintingCanvas artwork={artwork} isDetailed />
          </div>
        </div>

        {/* Right Column: Curatorial Accession Details & WhatsApp Actions */}
        <div className="lg:w-2/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
          <div>
            {/* Museum Header Bar */}
            <div className="flex items-center justify-between text-xs font-sans text-[#78716C] pb-3 border-b border-[#E7E1D8] mb-4">
              <span className="font-semibold text-[#991B1B] tracking-widest uppercase">
                Ref: {artwork.id}
              </span>
              <span>{artwork.category}</span>
            </div>

            {/* Artwork Title */}
            <h2 id="lightbox-title" className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917] leading-tight mb-2">
              {artwork.title}
            </h2>

            {/* Artist Credit */}
            <p className="font-sans text-xs tracking-wide uppercase text-[#57534E] mb-5">
              By <strong className="text-[#1C1917]">Chanchale Majkoti</strong> · Original Acrylic
            </p>

            {/* Artwork Specifications Table */}
            <dl className="grid grid-cols-2 gap-3 p-3.5 bg-[#F3EFEA] rounded-xs border border-[#E7E1D8] text-xs font-sans mb-6">
              <div>
                <dt className="text-[#78716C] text-[11px] uppercase tracking-wider">Medium</dt>
                <dd className="font-medium text-[#1C1917] mt-0.5">{artwork.medium}</dd>
              </div>
              <div>
                <dt className="text-[#78716C] text-[11px] uppercase tracking-wider">Dimensions</dt>
                <dd className="font-medium text-[#1C1917] mt-0.5">{artwork.dimensions}</dd>
              </div>
              <div>
                <dt className="text-[#78716C] text-[11px] uppercase tracking-wider">Authenticity</dt>
                <dd className="font-medium text-[#1C1917] mt-0.5 flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-[#15803D]" />
                  Signed COA
                </dd>
              </div>
              <div>
                <dt className="text-[#78716C] text-[11px] uppercase tracking-wider">Availability</dt>
                <dd className="font-medium text-[#15803D] mt-0.5">Available for Purchase</dd>
              </div>
            </dl>

            {/* Curatorial Narrative */}
            <div className="space-y-3 mb-6">
              <h3 className="text-xs font-sans font-semibold tracking-wider uppercase text-[#1C1917]">
                Curatorial Note
              </h3>
              <p className="font-sans text-sm text-[#57534E] leading-relaxed">
                {artwork.description}
              </p>
            </div>

            {/* Framing & Worldwide Shipping Notes */}
            <div className="space-y-2 pt-4 border-t border-[#E7E1D8] text-xs font-sans text-[#57534E] mb-6">
              <div className="flex items-center gap-2">
                <Frame className="w-3.5 h-3.5 text-[#D97706] shrink-0" />
                <span>Custom framing available on request prior to dispatch.</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-3.5 h-3.5 text-[#D97706] shrink-0" />
                <span>Secure worldwide shipping in rigid protective tube or framed crate.</span>
              </div>
            </div>
          </div>

          {/* Action Zone: WhatsApp Enquiry */}
          <div className="space-y-2.5 pt-4 border-t border-[#E7E1D8]">
            <a
              href={buildWhatsAppUrl({
                title: artwork.title,
                id: artwork.id,
              })}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20BA5C] text-white py-3 px-5 rounded-xs font-sans text-sm font-semibold tracking-wide transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Enquire on WhatsApp (Ref: {artwork.id})</span>
            </a>

            {onOpenEnquiryModalWithArtwork && (
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenEnquiryModalWithArtwork(artwork);
                }}
                className="w-full py-2 text-xs font-sans text-[#78716C] hover:text-[#1C1917] transition-colors text-center underline underline-offset-2"
              >
                Customize enquiry options (framing & destination)
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
