# Perfume Selling Platform - Design Style Guide

## Design Philosophy

### Visual Language
**Luxury Minimalism with Sensual Depth**: The design embodies the essence of high-end perfumery through sophisticated restraint and carefully curated visual elements. Every detail speaks to the refined taste of fragrance connoisseurs while remaining accessible to newcomers.

### Color Palette
**Primary Colors:**
- **Deep Charcoal (#1a1a1a)**: Primary background, conveying luxury and sophistication
- **Warm Ivory (#f8f6f0)**: Text and content areas, soft and elegant
- **Champagne Gold (#d4af37)**: Accent color for premium elements, buttons, and highlights
- **Soft Blush (#f4f1e8)**: Secondary backgrounds and subtle sections

**Supporting Colors:**
- **Muted Rose (#e8d5d0)**: For feminine fragrance categories
- **Sage Green (#a8b5a0)**: For unisex and fresh fragrances
- **Warm Amber (#c9a96e)**: For oriental and woody categories

### Typography
**Primary Font Pairing:**
- **Display/Headers**: "Canela" - A sophisticated serif with dramatic contrast
- **Body Text**: "Suisse Int'l" - Clean, modern sans-serif for readability
- **Accent Text**: "Reckless" - For luxury branding elements

**Hierarchy:**
- Hero headlines: 4rem (64px) with tight letter-spacing
- Section headers: 2.5rem (40px) 
- Product titles: 1.5rem (24px)
- Body text: 1rem (16px) with 1.6 line-height

## Visual Effects & Styling

### Core Libraries Integration
**Animation & Interaction:**
- **Anime.js**: Smooth micro-interactions, button hover states, cart animations
- **Typed.js**: Typewriter effect for hero taglines and product descriptions
- **Splitting.js**: Letter-by-letter text reveals for premium feel

**Visual Enhancement:**
- **Shader-park**: Subtle background particle systems mimicking fragrance diffusion
- **PIXI.js**: Liquid-metal displacement effects for hero backgrounds
- **ECharts.js**: Elegant data visualization for scent profile breakdowns

**User Experience:**
- **Splide**: Smooth product carousels and image galleries
- **p5.js**: Interactive scent visualization and perfume finder quiz

### Header & Hero Effects
**Background Treatment:**
- Liquid-metal displacement shader creating flowing, organic movement
- Subtle particle system suggesting fragrance molecules in motion
- Gradient overlay transitioning from deep charcoal to warm amber

**Text Effects:**
- Typewriter animation for main headline with golden color cycling
- Staggered letter reveals for subheadings using Splitting.js
- Gentle fade-in animations for call-to-action buttons

### Interactive Elements
**Product Cards:**
- 3D tilt effect on hover with subtle shadow expansion
- Image zoom with overlay revealing quick product details
- Smooth color transitions for wishlist heart icons

**Navigation & Buttons:**
- Micro-interactions with gentle scale and glow effects
- Shopping cart icon with bounce animation when items added
- Filter chips with morphing backgrounds and smooth state changes

### Scroll Motion Design
**Reveal Animations:**
- Content sections fade in from 24px below with 200ms duration
- Staggered reveals for product grids (50ms delay between items)
- Parallax movement limited to ±8% for decorative elements only

**Visual Hierarchy:**
- Hero section: No scroll effects to maintain impact
- Product sections: Subtle upward motion (16px) with opacity fade
- Testimonials: Gentle scale-in effect with rotation

### Responsive Design Principles
**Mobile-First Approach:**
- Touch-optimized interactions with 44px minimum touch targets
- Simplified animations that respect reduced motion preferences
- Condensed typography scaling for smaller screens

**Breakpoint Strategy:**
- Mobile: 320px - 768px (single column, stacked interactions)
- Tablet: 768px - 1024px (two-column grid, medium animations)
- Desktop: 1024px+ (full multi-column layout, complete effects)

### Luxury Details
**Micro-Interactions:**
- Perfume bottle hover effects with subtle rotation and reflection
- Scent note visualization with floating particle animations
- Loading states using elegant spinner designs

**Visual Texture:**
- Subtle paper grain overlay on backgrounds (5% opacity)
- Soft drop shadows with warm undertones
- Refined border-radius values (8px for cards, 4px for buttons)

This design system creates an immersive luxury experience that honors the artistry of perfumery while providing intuitive, modern e-commerce functionality.