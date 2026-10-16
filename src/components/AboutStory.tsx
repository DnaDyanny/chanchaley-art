import React from 'react';
import { GALLERY_INFO } from '../data/artworks';
import { Quote, Heart, Award, Compass } from 'lucide-react';

export const AboutStory: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FAF8F5] border-b border-[#E7E1D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Curatorial Section Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <span className="text-xs font-sans font-semibold tracking-[0.2em] uppercase text-[#991B1B]">
            Authentic Nepali Craftsmanship
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917] mt-2 tracking-tight">
            The Story Behind the Canvas
          </h2>
          <p className="font-sans text-base text-[#57534E] mt-3 leading-relaxed">
            Every painting in Chanchale Art Gallery is created by founder and artist Chanchale Majkoti (Jham Bahadur Majakoti)—a testament to dedication, self-taught perseverance, and deep love for Nepal.
          </p>
        </div>

        {/* Narrative Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Visual Studio & Quote Card */}
          <div className="lg:col-span-5 space-y-6">
            {/* Visual Studio Representation */}
            <div className="relative bg-[#1C1917] rounded-xs overflow-hidden border border-[#E7E1D8] shadow-md p-6 sm:p-8 text-[#FAF8F5]">
              <div className="relative z-10">
                <Quote className="w-10 h-10 text-[#D97706]/60 mb-4" />
                <blockquote className="font-serif text-xl sm:text-2xl italic leading-relaxed text-[#FAF8F5] mb-6">
                  "Art should do more than decorate a space—it should capture a feeling, preserve a moment, and tell an honest story of our Himalayas and villages."
                </blockquote>
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-sans">
                  <div>
                    <p className="font-bold text-[#F59E0B] tracking-wide">Chanchale Majkoti</p>
                    <p className="text-[#A8A29E] mt-0.5">Founder & Artist, Nuwakot / Thamel</p>
                  </div>
                  <div className="text-right text-[#78716C]">
                    <span>Est. {GALLERY_INFO.established}</span>
                  </div>
                </div>
              </div>

              {/* Decorative Background Glow */}
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#D97706]/15 rounded-full blur-2xl" />
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white border border-[#E7E1D8] rounded-xs">
                <Heart className="w-5 h-5 text-[#991B1B] mb-2" />
                <h4 className="text-xs font-sans font-bold uppercase tracking-wider text-[#1C1917]">
                  Born in Nuwakot
                </h4>
                <p className="text-[12px] text-[#57534E] mt-1 leading-snug">
                  Steeped in the rural landscapes, river mist, and terraced hills of central Nepal.
                </p>
              </div>

              <div className="p-4 bg-white border border-[#E7E1D8] rounded-xs">
                <Compass className="w-5 h-5 text-[#D97706] mb-2" />
                <h4 className="text-xs font-sans font-bold uppercase tracking-wider text-[#1C1917]">
                  Fair Value Vision
                </h4>
                <p className="text-[12px] text-[#57534E] mt-1 leading-snug">
                  Built to bypass middlemen markups and link collectors directly with artists.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Narrative Prose */}
          <div className="lg:col-span-7 space-y-6 font-sans text-[#44403C] text-base leading-relaxed">
            <h3 className="font-serif text-2xl font-bold text-[#1C1917]">
              From Nuwakot to the Streets of Thamel
            </h3>

            <p>
              In 2021, Chanchale came to Kathmandu from his hometown in Nuwakot in search of employment to support his family. While walking the bustling streets of Thamel, he noticed independent artists painting right outdoors and was captivated by the rich gallery culture of the neighborhood.
            </p>

            <p>
              Among them, he met artist Mandip Bhatta, who was working intently on a vibrant landscape. Fascinated by the brushstrokes, Chanchale asked if Mandip could teach him how to paint. That humble conversation became the catalyst for his artistic calling.
            </p>

            <p>
              With no formal fine art schooling, Chanchale learned through unyielding patience, deep observation, and daily dedication. He returned to his small room in Nuwakot, spending endless hours painting by lamp-light while continuing to support his family, gradually developing his distinctive technique in Himalayan landscapes and heritage scenes.
            </p>

            <div className="p-5 bg-[#F3EFEA] border-l-2 border-[#991B1B] rounded-xs my-6 text-[#1C1917]">
              <h4 className="font-serif text-lg font-bold text-[#991B1B] mb-1.5">
                The Injustice That Built Chanchale Art Gallery
              </h4>
              <p className="text-sm text-[#44403C] leading-relaxed">
                In his early months, Chanchale would carry his canvases from Nuwakot to Kathmandu, selling them to middlemen for as little as NPR 200 per painting. Seeing those exact paintings later resold in Thamel tourist shops for NPR 5,000 to 7,000 or more opened his eyes: talented Nepali artists were receiving almost none of the true value of their labor.
              </p>
            </div>

            <p>
              That experience planted an unwavering determination: to establish an independent gallery where artists could forge direct, authentic relationships with art lovers and receive fair, dignified value for their creativity.
            </p>

            <p>
              Today, Chanchale Art Gallery in Kaldhara Marg, Thamel stands as the fruition of that dream. Every painting on the wall is an original acrylic on canvas—never a mass print—carrying the genuine emotion, devotion, and beauty of Nepal directly to your living space.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
