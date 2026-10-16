/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ARTWORKS, Artwork } from './data/artworks';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturedArtworks } from './components/FeaturedArtworks';
import { GalleryMasonry } from './components/GalleryMasonry';
import { AboutStory } from './components/AboutStory';
import { WhyBuyFromUs, HowToBuy } from './components/TrustAndBuying';
import { VisitUs } from './components/VisitUs';
import { ContactSection } from './components/ContactSection';
import { ArtworkLightbox } from './components/ArtworkLightbox';
import { EnquiryModal } from './components/EnquiryModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [enquiryTargetArtwork, setEnquiryTargetArtwork] = useState<Artwork | null>(null);

  const handleOpenEnquiryModal = (artwork?: Artwork | null) => {
    setEnquiryTargetArtwork(artwork || null);
    setIsEnquiryModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1C1917] selection:bg-[#D97706]/20 selection:text-[#991B1B]">
      {/* 1. Sticky Navigation Header */}
      <Header onOpenEnquiryModal={() => handleOpenEnquiryModal(null)} />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Featured Collection (Standout Paintings Large) */}
        <FeaturedArtworks
          artworks={ARTWORKS}
          onSelectArtwork={(art) => setSelectedArtwork(art)}
        />

        {/* 4. Complete Masonry Gallery with Category Filter Tabs */}
        <GalleryMasonry
          artworks={ARTWORKS}
          onSelectArtwork={(art) => setSelectedArtwork(art)}
        />

        {/* 5. About the Gallery & Founder Chanchale Majkoti Narrative */}
        <AboutStory />

        {/* 6. Why Buy From Us (Core Trust Points) */}
        <WhyBuyFromUs />

        {/* 7. How to Buy (3-Step Simple Guide) */}
        <HowToBuy />

        {/* 8. Visit Us (Address, Opening Hours, Map, Visitor Guidelines) */}
        <VisitUs />

        {/* 9. Contact & Interactive WhatsApp Inquiry Form */}
        <ContactSection
          artworks={ARTWORKS}
          initialArtwork={enquiryTargetArtwork}
        />
      </main>

      {/* 10. Curatorial Footer */}
      <Footer />

      {/* Fixed Floating WhatsApp Trigger */}
      <FloatingWhatsApp />

      {/* Artwork Curatorial Lightbox Modal */}
      <ArtworkLightbox
        artwork={selectedArtwork}
        artworks={ARTWORKS}
        onClose={() => setSelectedArtwork(null)}
        onSelectArtwork={(art) => setSelectedArtwork(art)}
        onOpenEnquiryModalWithArtwork={(art) => handleOpenEnquiryModal(art)}
      />

      {/* Dedicated Interactive WhatsApp Enquiry Modal */}
      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
        artworks={ARTWORKS}
        targetArtwork={enquiryTargetArtwork}
      />
    </div>
  );
}
