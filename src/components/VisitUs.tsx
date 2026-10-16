import React from 'react';
import { GALLERY_INFO } from '../data/artworks';
import { MapPin, Clock, Camera, Sparkles, Navigation, CheckCircle2, Phone, AlertCircle } from 'lucide-react';

export const VisitUs: React.FC = () => {
  return (
    <section id="visit-us" className="py-20 lg:py-28 bg-[#FAF8F5] border-b border-[#E7E1D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Curatorial Header */}
        <div className="max-w-2xl mb-12 lg:mb-16">
          <span className="text-xs font-sans font-semibold tracking-[0.2em] uppercase text-[#991B1B]">
            Thamel Art Sanctuary
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917] mt-2 tracking-tight">
            Visit Us in Thamel
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#57534E] mt-3 leading-relaxed">
            Whether you are exploring Kathmandu or resting after a Himalayan trek, you are warmly invited to step inside, take your time, and experience authentic Nepali art in person.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Practical Visit Details & Etiquette */}
          <div className="lg:col-span-5 space-y-6">
            {/* Hours & Location Card */}
            <div className="p-6 sm:p-7 bg-white border border-[#E7E1D8] rounded-xs shadow-2xs space-y-5">
              <div className="flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-[#991B1B] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-sans font-bold uppercase tracking-wider text-[#1C1917]">
                    Physical Address
                  </h4>
                  <p className="text-sm font-medium text-[#1C1917] mt-1">
                    {GALLERY_INFO.address}
                  </p>
                  <p className="text-xs text-[#78716C] mt-0.5">
                    {GALLERY_INFO.landmark}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#F3EFEA] flex items-start gap-3.5">
                <Clock className="w-5 h-5 text-[#D97706] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-sans font-bold uppercase tracking-wider text-[#1C1917]">
                    Opening Hours
                  </h4>
                  <p className="text-sm font-medium text-[#1C1917] mt-1">
                    {GALLERY_INFO.hours}
                  </p>
                  <p className="text-xs text-[#15803D] font-medium mt-0.5">
                    Open Every Day (Monday – Sunday)
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#F3EFEA] flex items-start gap-3.5">
                <Phone className="w-5 h-5 text-[#1C1917] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-sans font-bold uppercase tracking-wider text-[#1C1917]">
                    Direct Telephone
                  </h4>
                  <a
                    href="tel:+9779818902898"
                    className="text-sm font-medium text-[#1C1917] hover:text-[#991B1B] transition-colors mt-1 block"
                  >
                    {GALLERY_INFO.phoneIntl}
                  </a>
                </div>
              </div>

              <div className="pt-3">
                <a
                  href={GALLERY_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#1C1917] hover:bg-[#991B1B] text-[#FAF8F5] py-2.5 px-4 rounded-xs text-xs font-sans font-semibold tracking-wide transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>

            {/* Visitor Experience & Guidelines (All verified from user document) */}
            <div className="p-6 bg-[#F3EFEA] border border-[#E7E1D8] rounded-xs space-y-4">
              <h3 className="font-serif text-lg font-bold text-[#1C1917] flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#D97706]" />
                Visitor Information
              </h3>

              <ul className="space-y-2.5 text-xs font-sans text-[#57534E]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#15803D] shrink-0" />
                  <span><strong>Free Admission:</strong> No entrance fee. Everyone is welcome.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#15803D] shrink-0" />
                  <span><strong>No Appointment Needed:</strong> Drop in anytime between 8 AM – 6 PM.</span>
                </li>
                <li className="flex items-center gap-2">
                  <Camera className="w-4 h-4 text-[#D97706] shrink-0" />
                  <span><strong>Photography Welcome:</strong> Photos are welcome (please ask before flash).</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#15803D] shrink-0" />
                  <span><strong>Guided Walkthroughs:</strong> Discuss paintings directly with the artist.</span>
                </li>
              </ul>

              <div className="pt-3 border-t border-[#E7E1D8] text-[11px] text-[#78716C] flex items-start gap-1.5">
                <AlertCircle className="w-3.5 h-3.5 text-[#A8A29E] shrink-0 mt-0.5" />
                <span>To protect original canvases, kindly avoid touching artworks or bringing open drinks near displays.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Embedded Google Map & Thamel Orientation */}
          <div className="lg:col-span-7 space-y-4">
            <div className="bg-white border border-[#E7E1D8] rounded-xs overflow-hidden shadow-sm">
              {/* Map Header */}
              <div className="p-4 bg-[#FAF8F5] border-b border-[#E7E1D8] flex items-center justify-between text-xs font-sans">
                <span className="font-semibold text-[#1C1917] flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#991B1B]" />
                  Chanchale Art Gallery · Thamel Location
                </span>
                <a
                  href={GALLERY_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#991B1B] hover:underline font-medium"
                >
                  View Large Map →
                </a>
              </div>

              {/* Responsive Google Maps Embed with Thamel / Kaldhara coordinates */}
              <div className="relative w-full h-[380px] sm:h-[440px] bg-[#E7E1D8]">
                <iframe
                  title="Chanchale Art Gallery Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.062450379461!2d85.30906237618032!3d27.71536707617942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18fc9b3117cf%3A0xa6be902b4507c33f!2sKathmandu%20Sport%20Climbing%20Center!5e0!3m2!1sen!2snp!4v1700000000000!5m2!1sen!2snp"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full filter saturate-90 contrast-105"
                />
              </div>

              {/* Landmark directions card below map */}
              <div className="p-4 sm:p-5 bg-white text-xs font-sans text-[#57534E] flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-[#E7E1D8]">
                <div>
                  <strong className="text-[#1C1917]">How to find us:</strong> Located on Kaldhara Marg, just steps from the Kathmandu Sport Climbing Center in northern Thamel.
                </div>
                <a
                  href={GALLERY_INFO.whatsappUrl + "?text=" + encodeURIComponent("Hello, I am nearby Thamel and need directions to Chanchale Art Gallery.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#15803D] hover:underline whitespace-nowrap font-medium"
                >
                  Need live directions? WhatsApp us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
