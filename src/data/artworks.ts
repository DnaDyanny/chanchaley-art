export interface Artwork {
  id: string;
  title: string;
  category: 'Himalayan Landscapes' | 'Heritage & Temples' | 'Village Life' | 'Thangka & Scrolls';
  medium: string;
  year: string;
  dimensions: string;
  description: string;
  featured: boolean;
  orientation: 'landscape' | 'portrait' | 'square';
  sceneType: 'everest' | 'amadablam' | 'annapurna' | 'machapuchare' | 'durbar' | 'swayambhu' | 'nyatapola' | 'patangold' | 'nuwakot' | 'langtang' | 'mustang' | 'pokhara' | 'mandala' | 'wheel';
  dominantColors: {
    skyTop: string;
    skyBottom: string;
    mountainLight: string;
    mountainShadow: string;
    accent: string;
  };
}

export const GALLERY_INFO = {
  name: "Chanchale Art Gallery",
  founder: "Jham Bahadur Majakoti (Chanchale Majkoti)",
  address: "Kaldhara Marg, Kathmandu 44600",
  landmark: "Near Kathmandu Sport Climbing Center, Thamel",
  city: "Thamel, Kathmandu, Nepal",
  hours: "8:00 AM to 6:00 PM everyday",
  phone: "977 981-8902898",
  phoneIntl: "+977 981-8902898",
  phoneRaw: "9779818902898",
  email: "chanchaleart@gmail.com",
  whatsappUrl: "https://wa.me/9779818902898",
  mapsUrl: "https://maps.app.goo.gl/gpiKfWvaWBs442xX8",
  facebookUrl: "https://www.facebook.com/profile.php?id=61577916715961",
  instagramUrl: "https://www.instagram.com/chanchaleartgallery/",
  established: "August 10, 2026", // from provided details
  medium: "Original Acrylic on Canvas",
  customCommissionsDays: "3–4 days",
  admission: "Free entry, no appointment required"
};

export const ARTWORKS: Artwork[] = [
  {
    id: "ART-001",
    title: "Everest & Lhotse Morning Glow",
    category: "Himalayan Landscapes",
    medium: "Original Acrylic on Canvas",
    year: "2026",
    dimensions: "90 × 60 cm (35 × 24 in)",
    description: "Capturing the first rays of Himalayan dawn as golden amber light strikes the summit pyramid of Mount Everest and Lhotse. Built with rich impasto brushwork and textured mountain ridges over deep twilight blue valleys.",
    featured: true,
    orientation: "landscape",
    sceneType: "everest",
    dominantColors: {
      skyTop: "#1E293B",
      skyBottom: "#F59E0B",
      mountainLight: "#FEF3C7",
      mountainShadow: "#334155",
      accent: "#D97706"
    }
  },
  {
    id: "ART-002",
    title: "Ama Dablam: The Sacred Pinnacle",
    category: "Himalayan Landscapes",
    medium: "Original Acrylic on Canvas",
    year: "2026",
    dimensions: "75 × 50 cm (30 × 20 in)",
    description: "The revered 'Matterhorn of the Himalayas' rising proudly above Khumbu rhododendron ridges. Expressive knife work defines the sharp hanging glaciers and vertical granite faces under an azure Himalayan sky.",
    featured: true,
    orientation: "portrait",
    sceneType: "amadablam",
    dominantColors: {
      skyTop: "#0F172A",
      skyBottom: "#38BDF8",
      mountainLight: "#FFFFFF",
      mountainShadow: "#1E293B",
      accent: "#0284C7"
    }
  },
  {
    id: "ART-003",
    title: "Kathmandu Durbar Square at Dusk",
    category: "Heritage & Temples",
    medium: "Original Acrylic on Canvas",
    year: "2026",
    dimensions: "80 × 60 cm (31 × 24 in)",
    description: "A rich atmospheric study of historic multi-tiered pagoda temples in Kathmandu Durbar Square. Warm clay terracotta bricks glow beneath intricate carved Newari wooden struts as evening oil lamps begin to flicker.",
    featured: true,
    orientation: "landscape",
    sceneType: "durbar",
    dominantColors: {
      skyTop: "#312E81",
      skyBottom: "#F97316",
      mountainLight: "#FED7AA",
      mountainShadow: "#431407",
      accent: "#991B1B"
    }
  },
  {
    id: "ART-004",
    title: "Kalachakra Sacred Mandala of Peace",
    category: "Thangka & Scrolls",
    medium: "Original Mineral Pigment & Acrylic on Canvas",
    year: "2026",
    dimensions: "60 × 60 cm (24 × 24 in)",
    description: "Traditional Himalayan sacred geometry representing cosmic order, meditation, and inner tranquility. Painted with meticulous fine single-hair brush details, lotus borders, and shimmering golden highlights.",
    featured: true,
    orientation: "square",
    sceneType: "mandala",
    dominantColors: {
      skyTop: "#18181B",
      skyBottom: "#7F1D1D",
      mountainLight: "#FDE68A",
      mountainShadow: "#1E3A8A",
      accent: "#D97706"
    }
  },
  {
    id: "ART-005",
    title: "Nuwakot Terraced Valley in Mist",
    category: "Village Life",
    medium: "Original Acrylic on Canvas",
    year: "2026",
    dimensions: "70 × 50 cm (28 × 20 in)",
    description: "A personal homage to artist Chanchale Majkoti's home district of Nuwakot. Stepping agricultural terraces descend through morning river mist past traditional stone-roofed homesteads, with distant mountain silhouettes.",
    featured: false,
    orientation: "landscape",
    sceneType: "nuwakot",
    dominantColors: {
      skyTop: "#334155",
      skyBottom: "#CBD5E1",
      mountainLight: "#86EFAC",
      mountainShadow: "#166534",
      accent: "#15803D"
    }
  },
  {
    id: "ART-006",
    title: "Swayambhunath: Eyes of All-Seeing Wisdom",
    category: "Heritage & Temples",
    medium: "Original Acrylic on Canvas",
    year: "2026",
    dimensions: "60 × 80 cm (24 × 31 in)",
    description: "The gilded harmika and watchful compassionate eyes of the ancient hilltop Swayambhu stupa. Strands of wind-whipped prayer flags carry blessings across the Kathmandu Valley beneath a luminous sunset.",
    featured: false,
    orientation: "portrait",
    sceneType: "swayambhu",
    dominantColors: {
      skyTop: "#1E1B4B",
      skyBottom: "#FB923C",
      mountainLight: "#FDE047",
      mountainShadow: "#4C1D95",
      accent: "#D97706"
    }
  },
  {
    id: "ART-007",
    title: "Machapuchare: The Fishtail Sentinel",
    category: "Himalayan Landscapes",
    medium: "Original Acrylic on Canvas",
    year: "2026",
    dimensions: "85 × 60 cm (33 × 24 in)",
    description: "The unclimbed sacred twin-peak of Pokhara towering majestically into crisp Himalayan skies. Dramatic side lighting emphasizes the vertical ice flutes and knife-edge summit ridge.",
    featured: false,
    orientation: "landscape",
    sceneType: "machapuchare",
    dominantColors: {
      skyTop: "#0C4A6E",
      skyBottom: "#7DD3FC",
      mountainLight: "#F8FAFC",
      mountainShadow: "#0F172A",
      accent: "#0284C7"
    }
  },
  {
    id: "ART-008",
    title: "Annapurna Range Alpenglow",
    category: "Himalayan Landscapes",
    medium: "Original Acrylic on Canvas",
    year: "2026",
    dimensions: "100 × 50 cm (39 × 20 in)",
    description: "A panoramic canvas capturing the immense wall of Annapurna I, South, and Hiunchuli burning with sunset alpenglow over dark pine forests.",
    featured: false,
    orientation: "landscape",
    sceneType: "annapurna",
    dominantColors: {
      skyTop: "#4C0519",
      skyBottom: "#FB7185",
      mountainLight: "#FFE4E6",
      mountainShadow: "#4C1D95",
      accent: "#BE123C"
    }
  },
  {
    id: "ART-009",
    title: "Langtang Himalayan Village Life",
    category: "Village Life",
    medium: "Original Acrylic on Canvas",
    year: "2026",
    dimensions: "75 × 55 cm (30 × 22 in)",
    description: "Serene mountain community life nestled beneath soaring ice giants. Traditional stone cottages with woodsmoke rising gently into alpine air, prayer wheels, and terraced barley fields.",
    featured: false,
    orientation: "landscape",
    sceneType: "langtang",
    dominantColors: {
      skyTop: "#1E293B",
      skyBottom: "#93C5FD",
      mountainLight: "#F1F5F9",
      mountainShadow: "#334155",
      accent: "#D97706"
    }
  },
  {
    id: "ART-010",
    title: "Nyatapola Temple of Bhaktapur",
    category: "Heritage & Temples",
    medium: "Original Acrylic on Canvas",
    year: "2026",
    dimensions: "50 × 75 cm (20 × 30 in)",
    description: "The monumental five-tiered pagoda temple soaring above Taumadhi Square. Guardians carved in stone line the staircase, framed by traditional Newari brickwork and vibrant city street life.",
    featured: false,
    orientation: "portrait",
    sceneType: "nyatapola",
    dominantColors: {
      skyTop: "#172554",
      skyBottom: "#FDBA74",
      mountainLight: "#FED7AA",
      mountainShadow: "#451A03",
      accent: "#991B1B"
    }
  },
  {
    id: "ART-011",
    title: "Mustang Cliffside Caravans",
    category: "Village Life",
    medium: "Original Acrylic on Canvas",
    year: "2026",
    dimensions: "80 × 55 cm (31 × 22 in)",
    description: "The dramatic windswept plateau of Upper Mustang with red ochre and white-striped chortens, carved cliff dwellings, and horse riders beneath expansive trans-Himalayan skies.",
    featured: false,
    orientation: "landscape",
    sceneType: "mustang",
    dominantColors: {
      skyTop: "#0284C7",
      skyBottom: "#BAE6FD",
      mountainLight: "#FED7AA",
      mountainShadow: "#78350F",
      accent: "#C2410C"
    }
  },
  {
    id: "ART-012",
    title: "Phewa Lake Reflections, Pokhara",
    category: "Village Life",
    medium: "Original Acrylic on Canvas",
    year: "2026",
    dimensions: "70 × 50 cm (28 × 20 in)",
    description: "Colorful wooden doonga boats moored peacefully along the shores of Phewa Lake at dusk, mirrored against the calm water with the snowy Annapurna massif reflected in the distance.",
    featured: false,
    orientation: "landscape",
    sceneType: "pokhara",
    dominantColors: {
      skyTop: "#312E81",
      skyBottom: "#F472B6",
      mountainLight: "#E0E7FF",
      mountainShadow: "#1E1B4B",
      accent: "#6366F1"
    }
  },
  {
    id: "ART-013",
    title: "Patan Golden Temple Courtyard",
    category: "Heritage & Temples",
    medium: "Original Acrylic on Canvas",
    year: "2026",
    dimensions: "65 × 50 cm (26 × 20 in)",
    description: "Hiranya Varna Mahavihar, the renowned Golden Temple of Patan. Detailed copper-gilt roofs, brass lions, and oil lamps capturing the enduring devotional spirit of Kathmandu craftsmen.",
    featured: false,
    orientation: "landscape",
    sceneType: "patangold",
    dominantColors: {
      skyTop: "#18181B",
      skyBottom: "#78350F",
      mountainLight: "#FDE047",
      mountainShadow: "#451A03",
      accent: "#D97706"
    }
  },
  {
    id: "ART-014",
    title: "Wheel of Life (Bhavachakra) Scroll",
    category: "Thangka & Scrolls",
    medium: "Original Mineral Pigment on Fine Cotton Canvas",
    year: "2026",
    dimensions: "55 × 75 cm (22 × 30 in)",
    description: "The classical Buddhist representation of cyclical existence, mindfulness, and liberation. Painted with meticulous symbolic iconography, gold leaf trims, and rich natural earth pigments.",
    featured: false,
    orientation: "portrait",
    sceneType: "wheel",
    dominantColors: {
      skyTop: "#09090B",
      skyBottom: "#450A0A",
      mountainLight: "#FDE68A",
      mountainShadow: "#18181B",
      accent: "#991B1B"
    }
  }
];

export const CATEGORIES = [
  "All",
  "Himalayan Landscapes",
  "Heritage & Temples",
  "Village Life",
  "Thangka & Scrolls"
] as const;

export type Category = typeof CATEGORIES[number];

/**
 * Builds an official WhatsApp enquiry link with pre-filled message
 */
export function buildWhatsAppUrl(options?: {
  title?: string;
  id?: string;
  customMessage?: string;
  visitorName?: string;
  country?: string;
  framing?: 'unframed' | 'framed';
  shipping?: 'thamel_pickup' | 'worldwide_shipping';
}): string {
  const base = "https://wa.me/9779818902898";
  
  if (!options || (!options.title && !options.customMessage)) {
    // General enquiry
    const defaultText = "Hello Chanchale Art Gallery, I found your gallery online and would like to know more about your original paintings.";
    return `${base}?text=${encodeURIComponent(defaultText)}`;
  }

  const { title, id, customMessage, visitorName, country, framing, shipping } = options;
  
  const lines: string[] = [];
  lines.push("Hello Chanchale Art Gallery,");
  
  if (visitorName) {
    const fromStr = country ? ` from ${country}` : "";
    lines.push(`My name is ${visitorName}${fromStr}.`);
  }
  
  if (title && id) {
    lines.push(`I am interested in the painting '${title}' (Ref: ${id}).`);
  } else if (title) {
    lines.push(`I am interested in the artwork '${title}'.`);
  }
  
  if (framing) {
    lines.push(`• Framing: ${framing === 'framed' ? 'Framed on request' : 'Unframed / Rolled in protective tube'}`);
  }
  
  if (shipping) {
    lines.push(`• Delivery: ${shipping === 'thamel_pickup' ? 'Collect in Thamel gallery' : 'Worldwide shipping to my address'}`);
  }

  if (customMessage) {
    lines.push(`Note: ${customMessage}`);
  } else {
    lines.push("Could you please share the price, dimensions, and delivery details?");
  }

  lines.push("Thank you!");

  return `${base}?text=${encodeURIComponent(lines.join("\n\n"))}`;
}
