import React, { useState } from 'react';
import { buildWhatsAppUrl, GALLERY_INFO } from '../data/artworks';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <aside aria-label="WhatsApp quick chat" className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Optional Dismissible Tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#1C1917] text-[#FAF8F5] text-xs font-sans px-3.5 py-2 rounded-xs shadow-lg border border-white/10 animate-in fade-in slide-in-from-right-4 duration-200">
          <span>Chat directly with Chanchale Majkoti</span>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="text-[#A8A29E] hover:text-white p-0.5"
            aria-label="Dismiss message preview"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={buildWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] hover:bg-[#20BA5C] text-white rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition-transform duration-200 focus-visible:outline-none focus:ring-4 focus:ring-[#25D366]/40"
        aria-label="Contact Chanchale Art Gallery on WhatsApp"
        title="Chat on WhatsApp (+977 981-8902898)"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="sr-only">Open WhatsApp chat</span>
      </a>
    </aside>
  );
};
