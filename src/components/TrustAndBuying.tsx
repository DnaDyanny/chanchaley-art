import React from 'react';
import { GALLERY_INFO, buildWhatsAppUrl } from '../data/artworks';
import { Palette, Globe, ShieldCheck, MapPin, MessageCircle, Eye, PackageCheck } from 'lucide-react';

export const WhyBuyFromUs: React.FC = () => {
  const trustPoints = [
    {
      icon: Palette,
      title: "100% Hand-Painted Originals",
      description: "Every artwork is individually painted by Chanchale Majkoti with acrylics on durable canvas. You receive a unique, one-of-a-kind original—never a machine print or reproduction."
    },
    {
      icon: ShieldCheck,
      title: "Certificate of Authenticity (COA)",
      description: "Each painting comes with an official, signed Certificate of Authenticity specifying title, medium, dimensions, date of creation, and artist signature."
    },
    {
      icon: Globe,
      title: "Secure Worldwide Shipping & Custom Framing",
      description: "Dispatched globally with heavy-duty protective packaging (rolled in rigid tubes or crated). Optional professional framing available on request before dispatch."
    },
    {
      icon: MapPin,
      title: "Visit Us in Person in Thamel",
      description: "Explore our physical gallery in Kaldhara Marg, Thamel. Free entry, guided viewing with the artist, and convenient local collection if you are traveling in Nepal."
    }
  ];

  return (
    <section id="why-buy" className="py-20 lg:py-28 bg-[#FAF8F5] border-b border-[#E7E1D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-sans font-semibold tracking-[0.2em] uppercase text-[#991B1B]">
            Integrity & Authenticity
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917] mt-2 tracking-tight">
            Why Choose Chanchale Art Gallery
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#57534E] mt-3 leading-relaxed">
            Built on a philosophy of fairness, patience, and direct connection between artist and collector.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                className="p-6 sm:p-7 bg-white border border-[#E7E1D8] rounded-xs flex flex-col justify-between hover:border-[#D97706] transition-colors shadow-2xs"
              >
                <div>
                  <div className="w-11 h-11 bg-[#F3EFEA] text-[#991B1B] rounded-xs flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#1C1917] mb-2.5">
                    {point.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#57534E] leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export const HowToBuy: React.FC = () => {
  const steps = [
    {
      step: "01",
      icon: Eye,
      title: "Choose Your Painting",
      description: "Browse our online collection, note the reference ID (e.g. ART-001), or request a custom commission of your favorite Himalayan peak, temple, or memory."
    },
    {
      step: "02",
      icon: MessageCircle,
      title: "Message Us on WhatsApp",
      description: "Click any 'Enquire on WhatsApp' button to open a direct chat. We share current pricing, high-resolution close-up photos, video walkthroughs, and framing options."
    },
    {
      step: "03",
      icon: PackageCheck,
      title: "Receive at Home or Collect in Thamel",
      description: "Have your painting safely shipped worldwide to your doorstep with tracking, or collect it directly from our Kaldhara Marg gallery in Thamel."
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F3EFEA] border-b border-[#E7E1D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-sans font-semibold tracking-[0.2em] uppercase text-[#991B1B]">
            Simple & Transparent
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917] mt-2 tracking-tight">
            How to Acquire a Painting
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#57534E] mt-3 leading-relaxed">
            No complicated checkouts or hidden fees. Just direct, personalized communication with the gallery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="relative bg-white border border-[#E7E1D8] p-7 sm:p-8 rounded-xs shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-3xl font-bold text-[#991B1B]/30">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 bg-[#FAF8F5] text-[#D97706] rounded-xs flex items-center justify-center border border-[#E7E1D8]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#1C1917] mb-3">
                    {item.title}
                  </h3>
                  <p className="font-sans text-sm text-[#57534E] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Central Action */}
        <div className="mt-12 text-center">
          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20BA5C] text-white px-7 py-3 rounded-xs font-sans text-sm font-semibold tracking-wide shadow-xs transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat Directly on WhatsApp (+977 981-8902898)</span>
          </a>
        </div>
      </div>
    </section>
  );
};
