import React from 'react';
import { Artwork, buildWhatsAppUrl } from '../data/artworks';
import { PaintingCanvas } from './PaintingCanvas';
import { MessageCircle, Eye, ArrowRight } from 'lucide-react';

interface FeaturedArtworksProps {
  artworks: Artwork[];
  onSelectArtwork: (artwork: Artwork) => void;
}

export const FeaturedArtworks: React.FC<FeaturedArtworksProps> = ({
  artworks,
  onSelectArtwork,
}) => {
  const featured = artworks.filter((a) => a.featured).slice(0, 4);

  return (
    <section className="py-20 lg:py-28 bg-[#FAF8F5] border-b border-[#E7E1D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Curatorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16">
          <div>
            <span className="text-xs font-sans font-semibold tracking-[0.2em] uppercase text-[#991B1B]">
              Curator's Selection
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917] mt-2 tracking-tight">
              Featured Artworks
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-[#57534E] max-w-lg leading-relaxed">
            Signature original paintings chosen for their evocative depiction of the Himalayas, Kathmandu heritage, and sacred meditative geometry.
          </p>
        </div>

        {/* Featured Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          {featured.map((artwork, index) => {
            const isFirst = index === 0;
            return (
              <div
                key={artwork.id}
                className={`group flex flex-col bg-white border border-[#E7E1D8] overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-[#D97706]/50 ${
                  isFirst ? "lg:col-span-2 lg:grid lg:grid-cols-12 lg:gap-8 items-center" : ""
                }`}
              >
                {/* Artwork Canvas View */}
                <div
                  className={`relative overflow-hidden cursor-pointer ${
                    isFirst
                      ? "lg:col-span-7 h-80 sm:h-96 lg:h-[460px]"
                      : "h-72 sm:h-80 w-full"
                  }`}
                  onClick={() => onSelectArtwork(artwork)}
                >
                  <PaintingCanvas artwork={artwork} isDetailed />
                  
                  {/* Subtle Hover Overlay */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                    <span className="inline-flex items-center gap-2 bg-[#FAF8F5] text-[#1C1917] px-4 py-2 text-xs font-sans font-medium tracking-wide uppercase rounded-xs shadow-md">
                      <Eye className="w-3.5 h-3.5 text-[#991B1B]" />
                      View Painting Details
                    </span>
                  </div>
                </div>

                {/* Painting Information Deck */}
                <div
                  className={`p-6 sm:p-8 flex flex-col justify-between ${
                    isFirst ? "lg:col-span-5" : "flex-1"
                  }`}
                >
                  <div>
                    {/* Accession Reference & Category */}
                    <div className="flex items-center justify-between text-xs font-sans text-[#78716C] mb-2.5">
                      <span className="font-semibold text-[#991B1B] tracking-wider">
                        {artwork.id}
                      </span>
                      <span>{artwork.category}</span>
                    </div>

                    {/* Title */}
                    <h3
                      onClick={() => onSelectArtwork(artwork)}
                      className="font-serif text-2xl sm:text-3xl font-semibold text-[#1C1917] hover:text-[#991B1B] transition-colors cursor-pointer leading-tight mb-3"
                    >
                      {artwork.title}
                    </h3>

                    {/* Medium & Dimensions Metadata (Unboxed Text per zero-pill rules) */}
                    <div className="flex flex-wrap items-center gap-2 text-xs font-sans text-[#57534E] mb-4">
                      <span>{artwork.medium}</span>
                      <span aria-hidden="true">·</span>
                      <span>{artwork.dimensions}</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-[#D97706] font-medium">Original</span>
                    </div>

                    {/* Curatorial Story Excerpt */}
                    <p className="font-sans text-sm text-[#57534E] leading-relaxed mb-6 line-clamp-3">
                      {artwork.description}
                    </p>
                  </div>

                  {/* Actions: Direct WhatsApp Enquiry + Lightbox Details */}
                  <div className="pt-5 border-t border-[#F3EFEA] flex flex-wrap items-center justify-between gap-3">
                    <a
                      href={buildWhatsAppUrl({ title: artwork.title, id: artwork.id })}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#1C1917] hover:bg-[#991B1B] text-[#FAF8F5] px-4 py-2.5 text-xs font-sans font-semibold tracking-wide rounded-xs transition-colors shadow-xs"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                      <span>Enquire on WhatsApp</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => onSelectArtwork(artwork)}
                      className="inline-flex items-center gap-1.5 text-xs font-sans font-medium text-[#78716C] hover:text-[#1C1917] transition-colors py-1"
                    >
                      <span>Full Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
