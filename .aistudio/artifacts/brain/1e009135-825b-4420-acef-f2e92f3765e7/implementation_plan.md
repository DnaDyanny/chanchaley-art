# Chanchale Art Gallery — Fine Art Presence & WhatsApp Enquiry Platform

A fast, mobile-first, and curatorial web presence for **Chanchale Art Gallery**, located in Kaldhara Marg, Thamel, Kathmandu, Nepal. The platform presents original hand-painted acrylic artworks by founder **Chanchale Majkoti** (Himalayan landscapes, heritage temples, village life, and spiritual scrolls) and routes collector inquiries directly to WhatsApp with pre-filled painting references.

---

### User Review & Critical Decisions

> [!IMPORTANT]
> The following decisions were confirmed during Phase 1 clarification:
> - **Visual Aesthetic**: Warm Himalayan Gallery palette with soft alabaster/warm paper background (`#FAF8F5`), deep charcoal typography (`#1C1917`), and accents of Himalayan amber/gold (`#D97706`) and sacred Newari temple red (`#991B1B`).
> - **Gallery Layout**: Responsive masonry grid with category filter tabs and an instant curatorial lightbox modal with full uncropped artwork containment (`object-contain`).
> - **WhatsApp Enquiry Flow**: Direct one-click WhatsApp pre-filled button on every artwork card, floating WhatsApp launcher, plus an interactive WhatsApp Inquiry Builder that allows visitors to select framing, worldwide shipping vs. gallery collection, and customize their message before sending.
> - **Strict Non-E-Commerce Boundary**: No cart, checkout, or login; prices remain negotiable upon direct consultation.

---

### 1. Overview & Core Concept

- **What It Does**: Showcases the original hand-painted acrylic collection of Chanchale Art Gallery, communicates the founder's authentic journey from Nuwakot to Thamel, provides practical visitor and visit-us information (hours, location near Kathmandu Sport Climbing Center, Thamel, guidelines), and facilitates frictionless WhatsApp inquiries for international tourists, diaspora collectors, and art lovers worldwide.
- **Target Audience**:
  1. International travelers and trekkers visiting Thamel seeking authentic, portable or shipped original art.
  2. Nepali art connoisseurs and diaspora looking for meaningful cultural and Himalayan paintings.
  3. Overseas collectors interested in custom commissioned landscapes or worldwide delivery.
- **Key Value**: Direct artist-to-collector connection with complete transparency, preserving fair value for Nepali craftsmanship without middleman markups.

---

### 2. User Experience & Visual Design

#### A. Key User Flows
1. **Browse & Filter**: Visitor scrolls past the atmospheric gallery hero into the Featured Highlights and Filterable Masonry Collection (`All`, `Himalayan Landscapes`, `Heritage & Temples`, `Village Life`, `Thangka & Scrolls`).
2. **Curatorial Lightbox**: Clicking any painting opens an uncropped, high-resolution viewing modal displaying accession number (e.g., `ART-001`), descriptive title, medium (Acrylic on canvas), dimensions/availability, and a prominent "Enquire on WhatsApp" action.
3. **Interactive WhatsApp Builder**: A dedicated enquiry modal lets visitors select their country, preferred delivery method (Worldwide Express Shipping or Thamel Gallery Collection), framing option, and custom message, immediately opening a formatted `https://wa.me/9779818902898?text=...` link in a new tab.
4. **Visit & Contact**: Detailed visiting guide with operating hours (8:00 AM – 6:00 PM everyday), interactive Google Map embed, visitor rules (free admission, photography welcome, guided tours), and direct phone/email/Instagram/Facebook links.

#### B. Visual Identity & Theme
- **Aesthetic Direction**: Museum & Contemporary Himalayan Gallery. Minimal, warm, unhurried, and quiet, letting the paintings command the screen.
- **Color System**:
  - Neutral Canvas (60%): `#FAF8F5` (Warm Alabaster Paper) & `#FFFFFF` (Gallery White Surface)
  - Structural Surfaces (30%): `#F3EFEA` (Warm Limestone), `#E7E1D8` (Hairline Dividers), `#1C1917` (Deep Antique Charcoal Body Text), `#57534E` (Curatorial Muted Text)
  - Accent Budget (10%): `#D97706` (Himalayan Amber Gold) and `#991B1B` (Newari Temple Ochre Red)
- **Typography**:
  - Primary Display & Headings: `Cormorant Garamond` (high-contrast classical serif)
  - Body & UI Controls: `Plus Jakarta Sans` (refined, humanist sans-serif)
  - Accession & Metadata: `Plus Jakarta Sans` tracking-widest uppercase (`font-medium tracking-widest text-xs uppercase`)
- **Zero-Pill Discipline**: Metadata displayed with clean typographic dots (`·`) and hairline borders—no static pill chips or cluttered badges.
- **Top Bar Contract**: Fixed clean header containing Brand Wordmark with Gallery Logo, 4 single-line links (`Collection`, `About`, `Visit Us`, `Contact`), and 1 primary "Enquire on WhatsApp" action button.

---

### 3. Key Product Decisions & Trade-Offs

1. **Self-Contained Data Architecture (`src/data/artworks.ts`)**:
   - *Chosen Approach*: Maintain all artwork entries (ID, title, category, dimensions, medium, description, photo path, orientation) in a dedicated, strongly typed TypeScript file.
   - *Why*: Allows the gallery owner to easily add, edit, or remove paintings with zero database overhead.
2. **Dynamic WhatsApp URL Generator**:
   - *Chosen Approach*: Clean helper function `buildWhatsAppUrl(options)` encoding specific artwork title, ID, framing preference, and delivery destination.
   - *Why*: Guarantees reliable formatting across iOS, Android, and desktop browsers without relying on external server endpoints.
3. **Curatorial Lightbox with Keyboard Navigation**:
   - *Chosen Approach*: Accessible dialog supporting `Esc` to close, `ArrowLeft`/`ArrowRight` to navigate paintings, and zoom containment.
   - *Why*: Critical for fine art appraisal so brushwork and canvas textures are visible without cropping.
4. **Structured SEO & JSON-LD**:
   - *Chosen Approach*: Implement Schema.org `ArtGallery` and `LocalBusiness` structured data with geocoordinates, address in Kaldhara Marg, Thamel, opening hours, and social profiles.

---

### 4. Technical Architecture & System Layout

```
┌────────────────────────────────────────────────────────────────────────┐
│                        Top Navigation Bar                              │
│  [Logo + Chanchale Art Gallery] ── [Collection · About · Visit · Contact] ── [WhatsApp] │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│                 Hero Section (Atmospheric Gallery View)                │
│       "Preserving the Spirit & Grandeur of Nepal on Canvas"            │
│         [Explore Collection]     [Enquire on WhatsApp]                 │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│               Curated Standout Artworks (Large Showcase)               │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│                 Full Collection with Category Filter Tabs              │
│       [All] [Himalayan Landscapes] [Heritage] [Village Life] [Scrolls] │
│          Responsive Masonry Grid with Lazy-Loaded Images               │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│              Founder's Story: Chanchale Majkoti Narrative              │
│   From Nuwakot to Thamel · Direct Artist-to-Collector Mission          │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│            Trust Points & Simple 3-Step Buying Guide                   │
│   1. Choose Painting ── 2. Message on WhatsApp ── 3. Receive or Collect│
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│                Visit the Gallery & Practical Info                      │
│   Kaldhara Marg, Thamel · 8AM-6PM Daily · Google Map · Visitor Rules   │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│           Direct Contact Channels & Interactive Inquiry Builder        │
│    WhatsApp: +977 981-8902898 · Email · Phone · Instagram · Facebook   │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│                        Curatorial Lightbox Modal                       │
│    Uncropped Containment · Full Description · WhatsApp Direct Action   │
└────────────────────────────────────────────────────────────────────────┘
```

---

### 5. Implementation Sequence

1. **Assets & Data Configuration**:
   - Organize provided artwork photographs and gallery interior images into `/public/images/`.
   - Embed official gallery circular logo.
   - Setup `src/data/artworks.ts` with accurate metadata for all unique photos.
2. **Typography & Styling Setup**:
   - Configure Google Fonts (`Cormorant Garamond` and `Plus Jakarta Sans`) in `index.html`.
   - Setup Tailwind theme colors and utility classes in `src/index.css`.
3. **Core Interactive Components**:
   - `Header`: 3-zone contract, responsive mobile drawer, smooth scroll triggers.
   - `Hero`: Gallery view with clear dual CTAs and operational badge.
   - `FeaturedArtworks`: Spotlight of 3–4 signature paintings with museum-style accession details.
   - `GalleryMasonry`: Category-filtered masonry grid with hover zoom and quick-enquire buttons.
   - `ArtworkLightbox`: Accessible modal with full image view, metadata, keyboard shortcuts, and WhatsApp trigger.
   - `AboutStory`: Founder Chanchale Majkoti's story from Nuwakot to Thamel.
   - `WhyBuyUs` & `HowToBuy`: Trust highlights (hand-painted originals, worldwide shipping, certificate of authenticity, framing).
   - `VisitUs`: Address, interactive map, operating hours, and gallery etiquette.
   - `ContactSection`: Quick WhatsApp builder modal, contact cards, and social links.
   - `FloatingWhatsApp`: Non-intrusive bottom-right button with mobile viewport safe-area compliance.
   - `Footer`: Clean editorial footer with copyright and navigation.
4. **SEO & Structured Data**:
   - Update `<head>` tags in `index.html` with title, meta description, Open Graph, Twitter cards, and Schema.org `ArtGallery` JSON-LD.
   - Verify zero build or lint issues via `compile_applet`.
