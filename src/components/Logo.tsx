import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

export const Logo: React.FC<LogoProps> = ({ className = "h-12 w-12", size = 48 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Chanchale Art Gallery Official Logo"
    >
      <defs>
        <path
          id="upper-curve"
          d="M 80,250 A 170,170 0 0,1 420,250"
          fill="none"
        />
        <path
          id="lower-curve"
          d="M 110,270 A 165,165 0 0,0 390,270"
          fill="none"
        />
        {/* Mountain Canvas Gradient */}
        <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#87CEEB" />
          <stop offset="100%" stopColor="#D4EEFF" />
        </linearGradient>
      </defs>

      {/* Outer Circle Ring */}
      <circle cx="250" cy="250" r="235" fill="#1E78C8" stroke="#165B99" strokeWidth="8" />

      {/* Inner Central Disc */}
      <circle cx="250" cy="250" r="145" fill="#4AA8F0" />

      {/* Decorative Accent Dots */}
      <circle cx="65" cy="250" r="14" fill="#1C1917" />
      <circle cx="435" cy="250" r="14" fill="#1C1917" />

      {/* Upper Arched Text: CHANCHALE */}
      <text
        fill="#1C1917"
        fontSize="54"
        fontWeight="900"
        fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
        letterSpacing="8"
      >
        <textPath href="#upper-curve" startOffset="50%" textAnchor="middle">
          CHANCHALE
        </textPath>
      </text>

      {/* Lower Arched Text: Art Gallery */}
      <text
        fill="#FFFFFF"
        fontSize="44"
        fontWeight="600"
        fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
        letterSpacing="4"
      >
        <textPath href="#lower-curve" startOffset="50%" textAnchor="middle">
          Art Gallery
        </textPath>
      </text>

      {/* Easel Structure (Center) */}
      <g id="easel">
        {/* Easel Mast (vertical center spine) */}
        <rect x="246" y="140" width="8" height="220" fill="#786040" rx="2" />
        
        {/* Left Leg */}
        <line x1="240" y1="165" x2="195" y2="365" stroke="#8C704B" strokeWidth="8" strokeLinecap="round" />
        
        {/* Right Leg */}
        <line x1="260" y1="165" x2="305" y2="365" stroke="#8C704B" strokeWidth="8" strokeLinecap="round" />

        {/* Back Leg Shadow */}
        <line x1="250" y1="165" x2="250" y2="350" stroke="#5A4730" strokeWidth="6" strokeLinecap="round" opacity="0.6" />

        {/* Canvas Shelf */}
        <rect x="190" y="275" width="120" height="8" fill="#5A4730" rx="3" />

        {/* Canvas on Easel */}
        <rect x="202" y="170" width="96" height="105" fill="#FFFFFF" stroke="#333333" strokeWidth="2.5" rx="2" />

        {/* Mountain Painting inside Canvas */}
        <g clipPath="url(#canvasClip)">
          <clipPath id="canvasClip">
            <rect x="203" y="171" width="94" height="103" rx="1.5" />
          </clipPath>
          
          {/* Painting Sky */}
          <rect x="203" y="171" width="94" height="103" fill="url(#skyGrad)" />
          
          {/* Mountain Peak (Everest Silhouette) */}
          <polygon points="250,195 285,274 215,274" fill="#5C5549" />
          {/* Snow Summit */}
          <polygon points="250,195 268,225 255,228 250,222 245,230 232,225" fill="#FFFFFF" />
          {/* Snow Ridge Left */}
          <polygon points="250,195 245,230 232,225 220,255 228,255 238,245" fill="#E2E8F0" />
          {/* Rocky Face Details */}
          <polygon points="250,195 268,225 282,255 272,255 260,238" fill="#3D372E" />
          {/* Base Moraine */}
          <rect x="203" y="260" width="94" height="15" fill="#786B59" />
        </g>
      </g>
    </svg>
  );
};
