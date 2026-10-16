import React, { useState } from 'react';
import { Artwork, buildWhatsAppUrl, GALLERY_INFO } from '../data/artworks';
import { X, MessageCircle, Send, Sparkles } from 'lucide-react';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  artworks: Artwork[];
  targetArtwork?: Artwork | null;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  artworks,
  targetArtwork,
}) => {
  const [selectedArtworkId, setSelectedArtworkId] = useState<string>(
    targetArtwork ? targetArtwork.id : ""
  );
  const [visitorName, setVisitorName] = useState("");
  const [country, setCountry] = useState("");
  const [customMessage, setCustomMessage] = useState("");
  const [framing, setFraming] = useState<'unframed' | 'framed'>('unframed');
  const [shipping, setShipping] = useState<'thamel_pickup' | 'worldwide_shipping'>('worldwide_shipping');

  if (!isOpen) return null;

  const selectedArtwork = artworks.find((a) => a.id === selectedArtworkId) || targetArtwork;

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
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="relative max-w-xl w-full max-h-[90vh] overflow-y-auto bg-[#FAF8F5] text-[#1C1917] p-6 sm:p-8 rounded-xs shadow-2xl border border-[#E7E1D8]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#78716C] hover:text-[#1C1917] transition-colors focus-visible:outline-none"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 pr-8">
          <span className="text-xs font-sans font-semibold tracking-wider uppercase text-[#991B1B] flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            Direct WhatsApp Inquiry
          </span>
          <h2 id="modal-title" className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917] mt-1">
            Enquire with Chanchale Art Gallery
          </h2>
          <p className="text-xs font-sans text-[#57534E] mt-1">
            Fill in your preferred details. This form does not submit to a private server; it prepares your inquiry directly in WhatsApp.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Painting Selection */}
          <div>
            <label htmlFor="modal-artwork-select" className="block text-xs font-sans font-semibold uppercase tracking-wider text-[#1C1917] mb-1">
              Painting Reference
            </label>
            <select
              id="modal-artwork-select"
              value={selectedArtworkId}
              onChange={(e) => setSelectedArtworkId(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-white border border-[#E7E1D8] text-sm text-[#1C1917] rounded-xs focus-visible:outline-none focus:border-[#D97706]"
            >
              <option value="">General Inquiry / Custom Mountain Commission</option>
              {artworks.map((art) => (
                <option key={art.id} value={art.id}>
                  {art.id} — {art.title}
                </option>
              ))}
            </select>
          </div>

          {/* Name & Country */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label htmlFor="modal-name" className="block text-xs font-sans font-semibold uppercase tracking-wider text-[#1C1917] mb-1">
                Your Name
              </label>
              <input
                id="modal-name"
                type="text"
                value={visitorName}
                onChange={(e) => setVisitorName(e.target.value)}
                placeholder="e.g. David Chen"
                className="w-full px-3.5 py-2 bg-white border border-[#E7E1D8] text-sm text-[#1C1917] rounded-xs focus-visible:outline-none focus:border-[#D97706]"
              />
            </div>

            <div>
              <label htmlFor="modal-country" className="block text-xs font-sans font-semibold uppercase tracking-wider text-[#1C1917] mb-1">
                Your Country / Location
              </label>
              <input
                id="modal-country"
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                placeholder="e.g. Australia, USA, Nepal"
                className="w-full px-3.5 py-2 bg-white border border-[#E7E1D8] text-sm text-[#1C1917] rounded-xs focus-visible:outline-none focus:border-[#D97706]"
              />
            </div>
          </div>

          {/* Framing & Shipping Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
            <div>
              <span className="block text-xs font-sans font-semibold uppercase tracking-wider text-[#1C1917] mb-1">
                Framing Option
              </span>
              <div className="space-y-1 text-xs font-sans">
                <label className="flex items-center gap-2 p-2 bg-white border border-[#E7E1D8] rounded-xs cursor-pointer">
                  <input
                    type="radio"
                    name="modal-framing"
                    checked={framing === 'unframed'}
                    onChange={() => setFraming('unframed')}
                    className="text-[#991B1B]"
                  />
                  <span>Unframed (Rolled Canvas)</span>
                </label>
                <label className="flex items-center gap-2 p-2 bg-white border border-[#E7E1D8] rounded-xs cursor-pointer">
                  <input
                    type="radio"
                    name="modal-framing"
                    checked={framing === 'framed'}
                    onChange={() => setFraming('framed')}
                    className="text-[#991B1B]"
                  />
                  <span>Framed on Request</span>
                </label>
              </div>
            </div>

            <div>
              <span className="block text-xs font-sans font-semibold uppercase tracking-wider text-[#1C1917] mb-1">
                Collection / Delivery
              </span>
              <div className="space-y-1 text-xs font-sans">
                <label className="flex items-center gap-2 p-2 bg-white border border-[#E7E1D8] rounded-xs cursor-pointer">
                  <input
                    type="radio"
                    name="modal-shipping"
                    checked={shipping === 'worldwide_shipping'}
                    onChange={() => setShipping('worldwide_shipping')}
                    className="text-[#991B1B]"
                  />
                  <span>Worldwide Shipping</span>
                </label>
                <label className="flex items-center gap-2 p-2 bg-white border border-[#E7E1D8] rounded-xs cursor-pointer">
                  <input
                    type="radio"
                    name="modal-shipping"
                    checked={shipping === 'thamel_pickup'}
                    onChange={() => setShipping('thamel_pickup')}
                    className="text-[#991B1B]"
                  />
                  <span>Thamel Gallery Collection</span>
                </label>
              </div>
            </div>
          </div>

          {/* Message Area */}
          <div>
            <label htmlFor="modal-message" className="block text-xs font-sans font-semibold uppercase tracking-wider text-[#1C1917] mb-1">
              Your Message or Questions
            </label>
            <textarea
              id="modal-message"
              rows={3}
              value={customMessage}
              onChange={(e) => setCustomMessage(e.target.value)}
              placeholder="Ask for price, size availability, or special commission requirements..."
              className="w-full px-3.5 py-2 bg-white border border-[#E7E1D8] text-sm text-[#1C1917] rounded-xs focus-visible:outline-none focus:border-[#D97706] resize-none"
            />
          </div>

          {/* Submit */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3 px-5 bg-[#25D366] hover:bg-[#20BA5C] text-white rounded-xs font-sans text-sm font-semibold tracking-wide flex items-center justify-center gap-2 transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Open in WhatsApp (+977 981-8902898)</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
