import React from 'react';
import { Artwork } from '../data/artworks';

interface PaintingCanvasProps {
  artwork: Artwork;
  className?: string;
  isDetailed?: boolean;
}

export const PaintingCanvas: React.FC<PaintingCanvasProps> = ({
  artwork,
  className = "",
  isDetailed = false,
}) => {
  const { dominantColors, sceneType, title } = artwork;

  return (
    <div
      className={`relative overflow-hidden w-full h-full bg-[#1C1917] select-none ${className}`}
      style={{
        boxShadow: isDetailed
          ? '0 25px 50px -12px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(0, 0, 0, 0.1)'
          : '0 4px 12px rgba(0, 0, 0, 0.08)'
      }}
    >
      {/* Background Painting Canvas Graphics */}
      <svg
        viewBox="0 0 800 600"
        className="w-full h-full object-cover block"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label={title}
      >
        <defs>
          {/* Canvas Fabric Texture Filter */}
          <filter id={`canvas-weave-${artwork.id}`} x="0%" y="0%" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" result="noise" />
            <feColorMatrix type="matrix" values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.08 0" result="coloredNoise" />
            <feComposite operator="in" in="coloredNoise" in2="SourceGraphic" result="textured" />
            <feBlend mode="multiply" in="SourceGraphic" in2="textured" />
          </filter>

          {/* Sky Gradient */}
          <linearGradient id={`sky-grad-${artwork.id}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={dominantColors.skyTop} />
            <stop offset="65%" stopColor={dominantColors.skyBottom} />
            <stop offset="100%" stopColor={dominantColors.mountainLight} stopOpacity="0.8" />
          </linearGradient>

          {/* Golden Sun / Light Ray Gradient */}
          <radialGradient id={`glow-${artwork.id}`} cx="45%" cy="30%" r="50%">
            <stop offset="0%" stopColor="#FFFBEB" stopOpacity="0.8" />
            <stop offset="40%" stopColor="#FDE68A" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Base Sky Layer */}
        <rect width="800" height="600" fill={`url(#sky-grad-${artwork.id})`} />

        {/* Ambient Light Glow */}
        <circle cx="450" cy="220" r="280" fill={`url(#glow-${artwork.id})`} />

        {/* Specific Scenic Brushwork */}
        {sceneType === 'everest' && (
          <g id="everest-scene">
            {/* Distant Ridge */}
            <polygon points="0,380 180,310 320,340 450,290 600,320 800,280 800,600 0,600" fill={dominantColors.mountainShadow} opacity="0.6" />
            {/* Lhotse Ridge (Right) */}
            <polygon points="460,260 580,180 720,290 800,240 800,600 380,600" fill={dominantColors.mountainShadow} />
            <polygon points="460,260 580,180 620,240 540,270" fill={dominantColors.mountainLight} opacity="0.9" />
            
            {/* Mount Everest Pyramid Summit (Center) */}
            <polygon points="260,340 380,120 520,310 400,380" fill="#2E2419" />
            {/* Golden Sunlight on Everest Kangshung Face */}
            <polygon points="380,120 480,220 520,310 420,310 390,260" fill={dominantColors.mountainLight} />
            {/* Snow Flutes & Ridges */}
            <path d="M 380,120 Q 360,180 340,240 Q 330,290 310,340" stroke="#FFF" strokeWidth="6" strokeLinecap="round" opacity="0.7" fill="none" />
            <path d="M 400,140 Q 430,200 460,280" stroke="#FEF08A" strokeWidth="8" strokeLinecap="round" opacity="0.85" fill="none" />
            
            {/* Fore-peaks & Glacial Moraine */}
            <polygon points="0,420 160,360 300,430 460,400 640,460 800,410 800,600 0,600" fill="#1C1917" />
            {/* Foreground Snow Patches */}
            <ellipse cx="220" cy="460" rx="90" ry="14" fill="#F1F5F9" opacity="0.5" />
            <ellipse cx="580" cy="490" rx="120" ry="18" fill="#F8FAFC" opacity="0.4" />
          </g>
        )}

        {sceneType === 'amadablam' && (
          <g id="amadablam-scene">
            {/* Background Alpine Sky */}
            <polygon points="0,420 200,350 400,390 650,330 800,380 800,600 0,600" fill="#1E293B" opacity="0.7" />
            {/* The Towering Pinnacle (Ama Dablam) */}
            <polygon points="400,90 280,360 540,340" fill="#0F172A" />
            {/* Hanging Glacier / Dapche */}
            <polygon points="400,90 470,220 540,340 440,320 390,230" fill="#FFFFFF" />
            <polygon points="390,230 450,240 430,290 370,280" fill="#E2E8F0" />
            {/* Right Shoulder Ridge */}
            <polygon points="400,90 480,160 620,290 540,340" fill={dominantColors.accent} opacity="0.4" />
            {/* Left Ice Flutes */}
            <path d="M 400,90 L 320,320" stroke="#F8FAFC" strokeWidth="7" opacity="0.8" />
            <path d="M 420,130 L 360,330" stroke="#E2E8F0" strokeWidth="5" opacity="0.6" />
            {/* Foreground Khumbu Ridge */}
            <polygon points="0,460 320,400 480,480 800,430 800,600 0,600" fill="#0A0A0A" />
            {/* Prayer Flags Line in Foreground */}
            <path d="M 40,490 Q 220,530 440,500" stroke="#A8A29E" strokeWidth="2" fill="none" />
            <polygon points="100,500 115,502 110,518 95,516" fill="#3B82F6" />
            <polygon points="140,506 155,508 150,524 135,522" fill="#FFFFFF" />
            <polygon points="180,511 195,513 190,529 175,527" fill="#EF4444" />
            <polygon points="220,514 235,515 230,531 215,530" fill="#22C55E" />
            <polygon points="260,513 275,514 270,530 255,529" fill="#EAB308" />
          </g>
        )}

        {sceneType === 'durbar' && (
          <g id="durbar-temple-scene">
            {/* Ancient Pagoda Temples Silhouette against Sunset Sky */}
            <rect x="0" y="480" width="800" height="120" fill="#261005" />
            
            {/* Temple Tier 1 (Base Plinth) */}
            <polygon points="250,520 550,520 530,460 270,460" fill="#451A03" />
            <polygon points="280,460 520,460 500,410 300,410" fill="#78350F" />
            
            {/* Pagoda Roof 1 */}
            <polygon points="200,420 600,420 550,370 250,370" fill="#7F1D1D" />
            {/* Carved Struts */}
            <rect x="340" y="370" width="120" height="40" fill="#451A03" />
            
            {/* Pagoda Roof 2 */}
            <polygon points="240,370 560,370 510,320 290,320" fill="#991B1B" />
            {/* Core Sanctum */}
            <rect x="360" y="320" width="80" height="50" fill="#291206" />

            {/* Top Roof (Gilded Pinnacle) */}
            <polygon points="280,320 520,320 460,260 340,260" fill="#B91C1C" />
            {/* Golden Gajur Spire */}
            <polygon points="390,260 410,260 405,190 395,190" fill="#F59E0B" />
            <circle cx="400" cy="180" r="10" fill="#FBBF24" />

            {/* Secondary Pagoda in background left */}
            <polygon points="60,450 200,450 170,400 90,400" fill="#3B1706" opacity="0.8" />
            <polygon points="80,400 180,400 150,350 110,350" fill="#5A200B" opacity="0.8" />
            <rect x="125" y="320" width="10" height="30" fill="#D97706" opacity="0.9" />

            {/* Flock of Evening Pigeons */}
            <path d="M 620,240 Q 628,234 636,240 Q 644,234 652,240" stroke="#78350F" strokeWidth="2.5" fill="none" />
            <path d="M 650,220 Q 656,215 662,220 Q 668,215 674,220" stroke="#78350F" strokeWidth="2" fill="none" />
            <path d="M 590,260 Q 596,255 602,260 Q 608,255 614,260" stroke="#78350F" strokeWidth="2" fill="none" />

            {/* Warm Lantern Glows */}
            <circle cx="370" cy="480" r="6" fill="#FDE047" opacity="0.9" />
            <circle cx="430" cy="480" r="6" fill="#FDE047" opacity="0.9" />
          </g>
        )}

        {sceneType === 'mandala' && (
          <g id="mandala-scene">
            {/* Outer Decorative Ring */}
            <circle cx="400" cy="300" r="240" stroke="#D97706" strokeWidth="4" fill="none" />
            <circle cx="400" cy="300" r="225" stroke="#FBBF24" strokeWidth="2" strokeDasharray="6 4" fill="none" />
            
            {/* Fire Ring (Wisdom Flame) */}
            <circle cx="400" cy="300" r="210" fill="#7F1D1D" opacity="0.8" />
            <circle cx="400" cy="300" r="190" fill="#1E3A8A" opacity="0.85" />
            
            {/* Geometric Square Palace (Four Gates) */}
            <rect x="270" y="170" width="260" height="260" fill="#F59E0B" opacity="0.3" stroke="#FDE68A" strokeWidth="3" transform="rotate(45 400 300)" />
            <rect x="290" y="190" width="220" height="220" fill="#991B1B" opacity="0.5" stroke="#FCD34D" strokeWidth="2" />
            
            {/* Concentric Lotus Petals */}
            <circle cx="400" cy="300" r="110" fill="#1E293B" stroke="#F59E0B" strokeWidth="3" />
            <circle cx="400" cy="300" r="70" fill="#991B1B" stroke="#FEF08A" strokeWidth="2" />
            <circle cx="400" cy="300" r="30" fill="#D97706" />
            <circle cx="400" cy="300" r="12" fill="#FEF08A" />

            {/* Four Cardinal Portals (T-shapes) */}
            {/* North */}
            <polygon points="380,85 420,85 410,130 390,130" fill="#FBBF24" />
            {/* South */}
            <polygon points="380,515 420,515 410,470 390,470" fill="#FBBF24" />
            {/* East */}
            <polygon points="615,280 615,320 570,310 570,290" fill="#FBBF24" />
            {/* West */}
            <polygon points="185,280 185,320 230,310 230,290" fill="#FBBF24" />
          </g>
        )}

        {sceneType === 'swayambhu' && (
          <g id="swayambhu-scene">
            {/* Hilltop Stupa Dome */}
            <path d="M 240,480 C 240,320 560,320 560,480 Z" fill="#F8FAFC" />
            {/* Harmika (Square Cube) */}
            <rect x="330" y="250" width="140" height="100" fill="#F59E0B" stroke="#B45309" strokeWidth="3" />
            
            {/* The All-Seeing Eyes of Buddha */}
            {/* Left Eye */}
            <path d="M 355,290 Q 380,270 405,290 Q 380,310 355,290" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2.5" />
            <circle cx="380" cy="290" r="8" fill="#0F172A" />
            <circle cx="383" cy="288" r="2.5" fill="#FFFFFF" />
            
            {/* Right Eye */}
            {/* Eye of Unity (Nose coil / Nepali figure 1) */}
            <path d="M 400,310 Q 395,335 400,340 Q 405,335 400,310" stroke="#991B1B" strokeWidth="3" fill="none" />
            
            <path d="M 395,290 Q 420,270 445,290 Q 420,310 395,290" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2.5" />
            <circle cx="420" cy="290" r="8" fill="#0F172A" />
            <circle cx="423" cy="288" r="2.5" fill="#FFFFFF" />

            {/* 13 Gilded Steppes (Spire) */}
            <polygon points="345,250 455,250 440,130 360,130" fill="#D97706" />
            <circle cx="400" cy="115" r="16" fill="#FBBF24" />

            {/* Radiating Prayer Flags from Spire */}
            <line x1="400" y1="130" x2="100" y2="450" stroke="#CBD5E1" strokeWidth="1.5" opacity="0.6" />
            <line x1="400" y1="130" x2="700" y2="450" stroke="#CBD5E1" strokeWidth="1.5" opacity="0.6" />
            <line x1="400" y1="130" x2="250" y2="520" stroke="#CBD5E1" strokeWidth="1.5" opacity="0.6" />
            <line x1="400" y1="130" x2="550" y2="520" stroke="#CBD5E1" strokeWidth="1.5" opacity="0.6" />
          </g>
        )}

        {sceneType === 'nuwakot' && (
          <g id="nuwakot-scene">
            {/* Distant Hills */}
            <polygon points="0,320 220,260 480,290 800,240 800,600 0,600" fill="#166534" opacity="0.5" />
            {/* Midground Terraces */}
            <path d="M 0,380 Q 250,340 500,370 T 800,360 L 800,600 L 0,600 Z" fill="#15803D" />
            <path d="M 0,440 Q 300,410 600,430 T 800,420 L 800,600 L 0,600 Z" fill="#22C55E" opacity="0.8" />
            <path d="M 0,490 Q 200,470 500,480 T 800,470 L 800,600 L 0,600 Z" fill="#4ADE80" opacity="0.8" />

            {/* Traditional Slate-Roofed House */}
            <polygon points="260,390 340,360 420,390" fill="#334155" />
            <rect x="280" y="390" width="120" height="70" fill="#B45309" />
            <rect x="300" y="415" width="20" height="30" fill="#1C1917" />
            <rect x="350" y="410" width="25" height="20" fill="#78350F" stroke="#1C1917" strokeWidth="2" />
          </g>
        )}

        {/* Fallback for general landscape / heritage / village */}
        {!['everest', 'amadablam', 'durbar', 'mandala', 'swayambhu', 'nuwakot'].includes(sceneType) && (
          <g id="generic-fine-art-scene">
            {/* Majestic Mountain Ridge */}
            <polygon points="0,380 220,240 400,320 580,200 800,340 800,600 0,600" fill={dominantColors.mountainShadow} />
            <polygon points="220,240 310,320 400,320 340,270" fill={dominantColors.mountainLight} opacity="0.9" />
            <polygon points="580,200 680,280 800,340 700,310" fill={dominantColors.mountainLight} opacity="0.9" />

            {/* Midground Hills */}
            <polygon points="0,440 280,380 520,430 800,390 800,600 0,600" fill={dominantColors.accent} opacity="0.7" />

            {/* Foreground Landscape */}
            <polygon points="0,510 350,470 680,520 800,490 800,600 0,600" fill="#1C1917" />
            {/* Fine Light Reflections / Water */}
            <ellipse cx="400" cy="550" rx="280" ry="25" fill={dominantColors.mountainLight} opacity="0.25" />
          </g>
        )}

        {/* Acrylic Brushstroke Glaze Overlay */}
        <rect
          width="800"
          height="600"
          fill="none"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="12"
        />

        {/* Artist Signature at Bottom Right */}
        <text
          x="750"
          y="575"
          textAnchor="end"
          fill="rgba(255,255,255,0.6)"
          fontSize="17"
          fontFamily="'Cormorant Garamond', Georgia, serif"
          fontStyle="italic"
        >
          Chanchale Majkoti
        </text>
      </svg>

      {/* Canvas Texture Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.2) 100%)`
        }}
      />

      {/* Subtle Stretched Canvas Edge Lighting */}
      <div className="absolute inset-0 pointer-events-none border border-black/10 shadow-[inset_0_0_20px_rgba(0,0,0,0.15)]" />

      {/* Accession Badge on Hover (Quiet Museum Style) */}
      <div className="absolute top-3 left-3 px-2 py-0.5 bg-black/75 backdrop-blur-xs text-[#FAF8F5] text-[10px] font-sans font-medium tracking-widest uppercase rounded-xs border border-white/10">
        {artwork.id}
      </div>
    </div>
  );
};
