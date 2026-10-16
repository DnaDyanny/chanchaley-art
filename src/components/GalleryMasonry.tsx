import React, { useState } from 'react';
import { Artwork, CATEGORIES, Category, buildWhatsAppUrl } from '../data/artworks';
import { PaintingCanvas } from './PaintingCanvas';
import { MessageCircle, ZoomIn } from 'lucide-react';

interface GalleryMasonryProps {
  artworks: Artwork[];
  onSelectArtwork: (artwork: Artwork) => void;
}

export const GalleryMasonry: React.FC<GalleryMasonryProps> = ({
  artworks,
  onSelectArtwork,
}) => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredArtworks = activeCategory === "All"
    ? artworks
    : artworks.filter((a) => a.category === activeCategory);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#F3EFEA] border-b border-[#E7E1D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 lg:mb-14">
          <span className="text-xs font-sans font-semibold tracking-[0.2em] uppercase text-[#991B1B]">
            Original Artworks
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917] mt-2 tracking-tight">
            The Complete Gallery
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#57534E] mt-3 leading-relaxed">
            Every piece is an authentic, individually painted acrylic canvas by Chanchale Majkoti.
            Click any painting to examine brush details or enquire directly.
          </p>
        </div>

        {/* Category Filter Tabs (Interactive Filter Controls per frontend-design rules) */}
        <div className="flex items-center justify-center mb-12">
          <div className="inline-flex flex-wrap items-center justify-center p-1.5 bg-[#FAF8F5] border border-[#E7E1D8] rounded-xs shadow-2xs gap-1">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-sans font-medium tracking-wide rounded-xs transition-colors whitespace-nowrap shrink-0 ${
                    isActive
                      ? "bg-[#1C1917] text-[#FAF8F5] shadow-xs"
                      : "text-[#57534E] hover:text-[#1C1917] hover:bg-[#F3EFEA]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Counter / Category Note */}
        <div className="flex items-center justify-between text-xs font-sans text-[#78716C] mb-8 pb-3 border-b border-[#E7E1D8]">
          <span>
            Showing <strong className="text-[#1C1917]">{filteredArtworks.length}</strong> original paintings
          </span>
          <span className="hidden sm:inline">
            Each artwork includes a signed Certificate of Authenticity (COA)
          </span>
        </div>

        {/* Masonry / Responsive Art Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArtworks.map((artwork) => {
            // Determine card height based on artwork orientation
            const canvasHeightClass =
              artwork.orientation === 'portrait'
                ? 'h-84 sm:h-96'
                : artwork.orientation === 'square'
                ? 'h-72 sm:h-80'
                : 'h-64 sm:h-72';

            return (
              <div
                key={artwork.id}
                className="group flex flex-col bg-white border border-[#E7E1D8] hover:border-[#D97706] rounded-xs overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                {/* Canvas Container */}
                <div
                  className={`relative ${canvasHeightClass} cursor-pointer overflow-hidden`}
                  onClick={() => onSelectArtwork(artwork)}
                >
                  <PaintingCanvas artwork={artwork} />
                  
                  {/* Hover Quick Zoom Cue */}
                  <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="inline-flex items-center gap-1.5 bg-[#FAF8F5] text-[#1C1917] px-3.5 py-1.5 text-xs font-sans font-medium rounded-xs shadow-md">
                      <ZoomIn className="w-3.5 h-3.5 text-[#991B1B]" />
                      Expand Lightbox
                    </span>
                  </div>
                </div>

                {/* Card Information Deck */}
                <div className="p-5 flex flex-col flex-1 justify-between bg-white">
                  <div>
                    {/* Accession ID & Category */}
                    <div className="flex items-center justify-between text-xs font-sans text-[#78716C] mb-1.5">
                      <span className="font-semibold text-[#991B1B] tracking-wider">
                        {artwork.id}
                      </span>
                      <span>{artwork.category}</span>
                    </div>

                    {/* Artwork Title */}
                    <h3
                      onClick={() => onSelectArtwork(artwork)}
                      className="font-serif text-xl font-bold text-[#1C1917] group-hover:text-[#991B1B] transition-colors cursor-pointer leading-snug mb-2"
                    >
                      {artwork.title}
                    </h3>

                    {/* Dimensions & Medium Unboxed Metadata */}
                    <div className="flex flex-wrap items-center gap-2 text-xs font-sans text-[#57534E] mb-3">
                      <span>{artwork.dimensions}</span>
                      <span aria-hidden="true">·</span>
                      <span>{artwork.medium}</span>
                    </div>

                    {/* Brief Synopsis */}
                    <p className="font-sans text-xs text-[#78716C] leading-relaxed line-clamp-2 mb-4">
                      {artwork.description}
                    </p>
                  </div>

                  {/* Card Action */}
                  <div className="pt-3 border-t border-[#F3EFEA] flex items-center justify-between gap-3">
                    <a
                      href={buildWhatsAppUrl({ title: artwork.title, id: artwork.id })}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#FAF8F5] hover:bg-[#1C1917] text-[#1C1917] hover:text-[#FAF8F5] border border-[#E7E1D8] hover:border-[#1C1917] px-3.5 py-2 text-xs font-sans font-semibold rounded-xs transition-colors shadow-2xs"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                      <span>Enquire on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div className="mt-16 text-center">
          <p className="font-sans text-sm text-[#78716C]">
            Have a custom mountain, village, or memory you'd like painted?
          </p>
          <a
            href={buildWhatsAppUrl({ customMessage: "Hello, I would like to request a custom commissioned painting." })}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-sans font-semibold text-[#991B1B] hover:text-[#7F1D1D] underline underline-offset-4 mt-2 transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            Request a Custom Commission (takes 3–4 days)
          </a>
        </div>
      </div>
    </section>
  );
};
