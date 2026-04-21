# Design System — Overnight Studio

## 1. Visual Theme & Atmosphere

Overnight Studio is a tech-driven 3D outsourcing studio operated by Chat3D, a French ML startup. The brand identity balances two worlds: the precision and credibility of deep-tech engineering with the creative energy of 3D art production. The visual language is confidently minimal — generous white space on light themes, deep blacks on dark themes — with a signature multi-stop gradient (pink → coral → violet → red) that represents the creative energy running through the studio's pipeline.

The logo is a crescent moon with mischievous eyes — playful yet confident, instantly recognizable. It exists in three variants: solid black (light backgrounds), solid white (dark backgrounds), and gradient (brand moments, hero sections). The logotype "OVERNIGHT" uses Plus Jakarta Sans at ExtraBold weight with tight tracking, paired with "STUDIO" in a lighter weight with wider letter-spacing beneath.

The design philosophy is "modern minimalism with controlled warmth." Surfaces are clean and generous. The brand gradient never dominates — it appears as subtle accents: thin decorative lines, occasional text highlights, the logo mark in special contexts. Buttons stay solid (black or white). Cards use fine borders, not heavy shadows. Typography does the heavy lifting through size contrast and weight precision.

**Key Characteristics:**
- Plus Jakarta Sans as the display typeface — geometric, modern, distinctive
- Inter as the body/UI typeface — neutral, readable, engineered
- Two theme modes: Light (Agency/Retail) and Dark (Entertainment/Gaming)
- Signature gradient: `#FBCAEF → #FF5A47 → #9533CF → #CB360F` — used sparingly as accent only
- Generous whitespace — slides and sections breathe with 100px+ padding
- Solid-color buttons (never gradient) — black on light, white on dark
- Fine borders (`rgba` at 4-8% opacity) instead of heavy shadows
- Moon logo as brand mark — appears at 28-32px in navigation, larger in hero contexts
- Complementary accent colors allowed (greens, teals) as long as they harmonize — never clash

## 2. Color Palette & Roles

### Primary Colors
- **Overnight Black** (`#0A0A0A`): Primary text on light backgrounds, dark button fills, logo solid variant. Near-pure black with micro-warmth.
- **Overnight Light** (`#F4F4F4`): Secondary surface backgrounds, card fills on white pages, alternate section backgrounds. Warm light gray — never stark white for sections.
- **Overnight Red** (`#CB360F`): Brand primary accent. Used for emphasis, data visualization, important labels. A deep, warm red with orange undertones — authoritative, not alarming.
- **Overnight Purple** (`#7B24F5`): Brand primary accent. Used for interactive highlights, selected states, brand moments. A vivid, saturated violet — electric but controlled.

### Secondary / Gradient Colors
- **Gradient Pink** (`#FBCAEF`): The lightest gradient stop. Soft, warm pink. Used alone as a very subtle tint for surfaces or badges in light contexts.
- **Gradient Coral** (`#FF5A47`): Warm coral-red. The energetic center of the gradient. Can be used standalone for warm accents, notifications, or data points.
- **Gradient Violet** (`#9533CF`): Deep purple-violet. The rich middle of the gradient. Can appear as standalone accent in dark theme contexts.
- **Gradient Red** (`#CB360F`): The anchor end of the gradient. Shares identity with Primary Red.

### Brand Gradient (in order)
```css
/* Standard brand gradient — left to right or top to bottom */
background: linear-gradient(90deg, #FBCAEF, #FF5A47, #9533CF, #CB360F);

/* Subtle accent gradient — for thin lines, reduced opacity */
background: linear-gradient(90deg, #FBCAEF, #FF5A47, #9533CF, #CB360F);
opacity: 0.4; /* Never use at full opacity on large surfaces */
```

### Complementary Accents (use sparingly to add variety)
- **Forest Green** (`#1A9E5C`): Success states, growth metrics, eco/sustainability angles. Pairs well with the violet.
- **Teal** (`#0D9488`): Technical/pipeline elements, secondary data visualization. Cool complement to the warm gradient.
- **Amber** (`#D97706`): Warning states, attention markers. Warm but distinct from brand red.

### Light Theme Surfaces
- **Background Primary** (`#FFFFFF`): Main page background — pure white.
- **Background Secondary** (`#FAFAFA`): Elevated cards, subtle surface distinction.
- **Background Tertiary** (`#F4F4F4`): Alternate section backgrounds, input fields, tag backgrounds.
- **Border Subtle** (`rgba(10, 10, 10, 0.06)`): Default border for cards, inputs, dividers.
- **Border Medium** (`rgba(10, 10, 10, 0.12)`): Hover state borders, active elements.

### Dark Theme Surfaces (Entertainment)
- **Background Primary** (`#0A0A0A`): Main page background — near-black.
- **Background Secondary** (`#111111`): Card backgrounds, elevated panels.
- **Background Tertiary** (`#1A1A1A`): Alternate sections, input fields.
- **Background Elevated** (`#222222`): Hover states, dropdowns, popovers.
- **Border Subtle** (`rgba(255, 255, 255, 0.06)`): Default border in dark mode.
- **Border Medium** (`rgba(255, 255, 255, 0.1)`): Hover borders in dark mode.

### Text Colors — Light Theme
- **Primary** (`#0A0A0A`): Headings, primary content, strong labels.
- **Secondary** (`#6B6B6B`): Body text, descriptions, supporting content.
- **Tertiary** (`#9A9A9A`): Captions, metadata, placeholder text, disabled labels.
- **Inverse** (`#FFFFFF`): Text on dark buttons, dark sections.

### Text Colors — Dark Theme
- **Primary** (`#F4F4F4`): Headings, primary content on dark backgrounds.
- **Secondary** (`#A0A0A0`): Body text on dark backgrounds.
- **Tertiary** (`#666666`): Captions, metadata on dark backgrounds.
- **Inverse** (`#0A0A0A`): Text on light buttons in dark theme.

## 3. Typography Rules

### Font Families
- **Display / Headings**: `'Plus Jakarta Sans'`, with fallbacks: `-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`
- **Body / UI**: `'Inter'`, with fallbacks: `-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`

### Google Fonts Import
```html
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
```

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display XL | Plus Jakarta Sans | 76px (4.75rem) | 800 | 1.02 (ultra-tight) | -3px | Hero headlines, maximum impact. Only one per slide. |
| Display Large | Plus Jakarta Sans | 56px (3.50rem) | 700 | 1.06 (tight) | -2px | Section hero headlines, slide titles. |
| Display Medium | Plus Jakarta Sans | 42px (2.63rem) | 700 | 1.10 (tight) | -1.2px | Sub-section titles, feature headlines. |
| Heading | Plus Jakarta Sans | 24px (1.50rem) | 700 | 1.25 | -0.5px | Card titles, component headings. |
| Heading Small | Plus Jakarta Sans | 18px (1.13rem) | 700 | 1.3 | -0.3px | Small card titles, list headings. |
| Subheading | Inter | 20px (1.25rem) | 400 | 1.65 (relaxed) | -0.1px | Section descriptions, intro paragraphs. |
| Body Large | Inter | 17px (1.06rem) | 400 | 1.70 (relaxed) | normal | Feature descriptions, explanations. |
| Body | Inter | 15px (0.94rem) | 400 | 1.65 | normal | Standard body text, card descriptions. |
| Button | Inter | 14px (0.88rem) | 500 | 1.00 | -0.1px | Button labels, CTA text. |
| Caption | Inter | 12px (0.75rem) | 600 | 1.33 | 2px | `text-transform: uppercase`. Section labels, metadata. |
| Micro | Inter | 11px (0.69rem) | 500 | 1.33 | 1px | Footer text, copyright, tiny labels. |

### Logotype Typography
- **"OVERNIGHT"**: Plus Jakarta Sans, ExtraBold (800), tight letter-spacing (-1px at display sizes)
- **"STUDIO"**: Plus Jakarta Sans, Medium (500), wide letter-spacing (+3px), smaller size (approximately 40% of "OVERNIGHT" size)
- **"Agency" / "Entertainment"**: Plus Jakarta Sans, SemiBold (600), standard tracking

### Principles
- **Weight contrast as hierarchy**: Display uses 700-800 (bold/extrabold), headings use 700, body uses 400, buttons use 500. Never use bold (700) for body text.
- **Negative tracking on display**: All display sizes use negative letter-spacing (-3px to -0.5px). Body text uses normal or very slight negative tracking.
- **Line-height contrast**: Headlines compress to 1.02-1.10 for billboard impact. Body text opens to 1.65-1.70 for comfortable reading. This dramatic range creates hierarchy through rhythm.
- **Two fonts, strict roles**: Plus Jakarta Sans is exclusively for headings and display — never for body text. Inter is exclusively for body, UI, buttons, captions — never for display headlines.

## 4. Component Stylings

### Buttons

**Primary (Solid Dark)**
- Background: `#0A0A0A`
- Text: `#FFFFFF`
- Padding: 15px 36px
- Border-radius: 980px (full pill)
- Font: Inter, 14px, weight 500
- Hover: background `#1A1A1A`, translateY(-2px), shadow `0 12px 40px rgba(0,0,0,0.12)`
- Active: translateY(0)
- Use: Primary CTA — "Schedule a Demo", "Get Started", "Contact Us"
- **NEVER apply gradient to buttons**

**Ghost (Outline)**
- Background: transparent
- Text: `#0A0A0A` (light) / `#F4F4F4` (dark)
- Border: 1.5px solid `rgba(10,10,10,0.06)` (light) / `rgba(255,255,255,0.06)` (dark)
- Padding: 15px 36px
- Border-radius: 980px
- Font: Inter, 14px, weight 500
- Hover: border-color darkens, subtle background tint
- Use: Secondary CTA — "Visit Website", "Learn More"

**Primary (Solid Light — dark theme)**
- Background: `#FFFFFF`
- Text: `#0A0A0A`
- Same dimensions as Primary Dark
- Hover: background `#F4F4F4`

### Cards

**Standard Card**
- Background: `#FFFFFF` (light) / `#111111` (dark)
- Border: 1px solid `rgba(10,10,10,0.06)` (light) / `rgba(255,255,255,0.06)` (dark)
- Border-radius: 20px
- Padding: 44px
- Shadow: none by default
- Hover: translateY(-4px), border-color intensifies, shadow `0 20px 60px rgba(0,0,0,0.06)`
- Top accent on hover: 2px gradient line at top, opacity 0.4 (very subtle)

**Compact Card**
- Same as Standard but padding: 36px
- Used in grid-4 layouts

### Tags / Pills
- Background: `#F4F4F4` (light) / `rgba(255,255,255,0.06)` (dark)
- Text: `#6B6B6B` (light) / `#A0A0A0` (dark)
- Padding: 7px 16px
- Border-radius: 980px
- Font: Inter, 13px, weight 500
- Hover: subtle border appears
- Use: category labels, format tags, skill badges

### Service Icon Containers
- Width/height: 52px
- Border-radius: 14px
- Background: `#F4F4F4` (light) / `#1A1A1A` (dark)
- Icon: 24px stroke icons, stroke-width 1.5, color `#0A0A0A` (light) / `#F4F4F4` (dark)
- Card hover state: background becomes `#0A0A0A`, icon stroke becomes white

### Pipeline Steps
- Number circle: 56px diameter, 1.5px border `rgba(10,10,10,0.06)`, Plus Jakarta Sans 18px weight 700
- Connector line: 1px solid `rgba(10,10,10,0.06)`, 48px width
- Label: Plus Jakarta Sans, 14px, weight 700
- Description: Inter, 13px, color tertiary, centered, max-width 150px
- Hover: number circle fills `#0A0A0A` with white text

### Metrics Display
- Value: Plus Jakarta Sans, 72px, weight 800, letter-spacing -3px
- Label: Inter, 14px, weight 400, color tertiary
- Layout: centered, padding 40px 20px

### Navigation (Fixed)
- Position: fixed, top 36px, left 44px
- Logo mark: 28px, plus logo text at 14px weight 700
- Background: transparent (becomes frosted glass on scroll if needed)
- Nav dots: fixed right 36px, 8px circles, `rgba(10,10,10,0.12)`, active state solid `#0A0A0A`

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Slide padding: 120px vertical, 100px horizontal (desktop)
- Grid gap (3-col): 28px
- Grid gap (2-col): 80px (generous breathing room between content + visual)
- Grid gap (4-col): 24px
- Section internal spacing: 32-72px between elements
- Smallest gap: 8px (between tag pills)

### Slide Dimensions
- Full viewport width and height (100vw × 100vh minimum)
- Max content width: 1080px, centered
- All content contained within slide-inner wrapper

### Grid Layouts
- **Hero/Cover**: Single centered column, text-align center
- **Content + Visual**: 2-column, equal width, 80px gap, vertically centered
- **Feature Cards**: 3-column equal grid, 28px gap
- **Compact Cards**: 4-column equal grid, 24px gap
- **Pipeline**: Horizontal flex, centered, with connector lines between steps

### Whitespace Philosophy
- **Slides breathe**: 120px padding creates a frame of emptiness around content. The white space is intentional — it communicates confidence and premium quality.
- **Asymmetric gaps**: 2-column layouts use 80px gaps — much wider than typical. Content and visuals need room to exist independently.
- **Vertical rhythm**: Elements within a slide use 20-72px spacing in a clear hierarchy: caption → gradient line (20px) → title (24-32px) → subtitle (48-64px) → content.
- **No section background alternation pattern**: Alternate between white and `#FAFAFA`/`#F4F4F4` for subtle rhythm. Never use colored section backgrounds (the gradient stays as accents only).

### Border Radius Scale
- Micro (6px): Small buttons, code snippets
- Standard (14px): Service icon containers, small cards
- Comfortable (16px): List items, vlist items
- Large (20px): Standard cards, feature panels
- Full Pill (980px): Buttons, tags, nav pills
- Circle (50%): Pipeline numbers, avatar containers

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow, no border | Page background, text blocks |
| Bordered (Level 1) | 1px solid `rgba(10,10,10,0.06)` | Cards at rest, inputs, dividers |
| Hover Lift (Level 2) | translateY(-4px), border intensifies, `0 20px 60px rgba(0,0,0,0.06)` | Cards on hover |
| Button Hover (Level 3) | translateY(-2px), `0 12px 40px rgba(0,0,0,0.12)` | Primary buttons on hover |
| Gradient accent | 2px height, gradient, opacity 0.4 | Card top accent on hover |

**Shadow Philosophy**: Overnight Studio uses shadows with extreme restraint. At rest, elements have NO shadow — only a fine border separates them from the background. Shadows appear only on interaction (hover) and are always soft, wide-blur, and low-opacity. The brand's depth comes from border contrast and spacing, not from layered shadows. This approach reinforces the minimal, modern aesthetic.

### Decorative Depth
- **Background orbs**: Radial gradient circles at 3-7% opacity, 700-1000px diameter, using `rgba(123,36,245,0.03)`. These create subtle atmospheric depth without being visible as distinct shapes.
- **Gradient lines**: 2px height, gradient fill at 40-50% opacity. Used as section dividers and after caption labels.
- **Full-width gradient line**: 1px height, full width, gradient at 12% opacity. Used as a subtle separator before footer/contact sections.

## 7. Logo Usage

### Logo Variants
1. **Moon Icon — Black**: For light backgrounds. Solid `#0A0A0A`.
2. **Moon Icon — White**: For dark backgrounds. Solid `#FFFFFF`.
3. **Moon Icon — Gradient**: For brand moments, hero sections, special contexts. Gradient `#FBCAEF → #FF5A47 → #9533CF → #CB360F`.
4. **Full Lockup — Black**: Moon icon + "OVERNIGHT STUDIO" text in black. Light backgrounds only.
5. **Full Lockup — White**: Moon icon + "OVERNIGHT STUDIO" text in white. Dark backgrounds only.
6. **Full Lockup — Gradient Icon + White Text**: Gradient moon icon with white logotype. Dark backgrounds, hero moments.

### Logo Clear Space
- Minimum clear space: 1× the width of the moon icon on all sides
- Minimum size: 24px height for icon alone, 40px height for full lockup

### Logo Don'ts
- Never stretch or distort the moon
- Never place the gradient logo on light backgrounds (contrast too low)
- Never place the black logo on dark backgrounds
- Never add shadows, strokes, or effects to the logo
- Never rotate the logo
- Never use the gradient logo at sizes below 32px (detail gets lost)

## 8. Animation & Interaction

### Scroll Reveal
- Elements animate in on scroll via IntersectionObserver (threshold 0.12)
- Default: opacity 0 → 1, translateY(28px) → 0
- Duration: 0.9s, easing: cubic-bezier(0.16, 1, 0.3, 1) — smooth deceleration
- Stagger: children delay +0.07s each

### Hover Transitions
- Cards: 0.6s cubic-bezier(0.16, 1, 0.3, 1)
- Buttons: 0.4s cubic-bezier(0.16, 1, 0.3, 1)
- Icons/small elements: 0.3s ease

### SVG Animations
- Line drawing: stroke-dasharray + stroke-dashoffset animation, 2-2.5s ease-out
- Fade in: opacity 0 → 1, 0.3-0.5s, staggered
- Float: translateY(0) → translateY(-8px) → translateY(0), 6s ease-in-out infinite
- Bar expansion: width 0 → target, 1.5s ease-out

### Slide Navigation
- Keyboard: Arrow keys + Space bar
- Nav dots: fixed right side, click to scroll
- Counter: fixed bottom center, format "01 — 09"
- Scroll: smooth scroll-behavior on html

## 9. Do's and Don'ts

### Do
- Use Plus Jakarta Sans exclusively for headings (700-800 weight) and Inter for body/UI (400-500)
- Apply negative letter-spacing on all display text (-3px at 76px, scaling down proportionally)
- Keep the gradient as subtle accents only — thin lines, text highlights at reduced opacity
- Use solid `#0A0A0A` for primary buttons on light themes — never gradient
- Maintain 120px+ slide padding for generous whitespace
- Use fine borders (`rgba` at 4-8% opacity) rather than shadows for card definition
- Let complementary colors (green, teal) appear naturally for semantic meaning (success, tech)
- Always pair the gradient moon logo with dark backgrounds only
- Use the correct logo variant for the background (black on light, white on dark, gradient on dark-hero)

### Don't
- Don't apply the brand gradient to buttons, large surfaces, or section backgrounds
- Don't use Plus Jakarta Sans for body text or UI elements — it's display-only
- Don't use Inter for headlines — it lacks the personality needed at display sizes
- Don't use heavy shadows (> 0.08 opacity) — the system relies on borders, not shadows
- Don't use the gradient at full opacity (100%) on decorative elements — always reduce to 30-50%
- Don't introduce warm section backgrounds (cream, beige, tan) — stick to white/off-white/light-gray
- Don't center-align body text in 2-column layouts — only center in single-column hero contexts
- Don't use more than 2 complementary accent colors per slide — the palette should feel controlled
- Don't place text directly on the gradient — gradient is for decoration, not for text backgrounds

## 10. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | < 640px | Single column, padding 48px 24px, nav dots hidden |
| Tablet | 640-960px | 2-col grids collapse to 1-col, pipeline goes vertical |
| Desktop | 960-1280px | Full layout, 1080px max-width content |
| Large Desktop | > 1280px | Centered with generous margins |

### Typography Scaling
- Display XL: 76px → 56px → 44px (mobile)
- Display LG: 56px → 42px → 34px (mobile)
- Display MD: 42px → 32px → 26px (mobile)
- All use `clamp()` for smooth scaling

### Touch Targets
- Buttons: minimum 48px touch height via padding
- Nav dots: 8px visible but 24px+ touch area via padding
- Pipeline steps: 56px circles, adequate for touch

## 11. Theme Variants

### Overnight Agency (Light Theme)
- For: Retail, e-commerce, marketing presentations
- Background: white + `#FAFAFA` alternation
- Text: `#0A0A0A` primary, `#6B6B6B` secondary
- Buttons: black pill on white
- Logo: black moon icon
- Mood: clean, professional, trustworthy, premium

### Overnight Entertainment (Dark Theme)
- For: Gaming, animation, VFX, cinema presentations
- Background: `#0A0A0A` + `#111111` alternation
- Text: `#F4F4F4` primary, `#A0A0A0` secondary
- Buttons: white pill on dark
- Logo: white or gradient moon icon
- Mood: immersive, cinematic, bold, creative
- Gradient usage: slightly more visible (accent lines at 50-60% opacity)
- Additional: subtle glow effects allowed on gradient elements

## 12. Agent Prompt Guide

### Quick Color Reference — Light Theme
- Background: `#FFFFFF`
- Section alt: `#FAFAFA` or `#F4F4F4`
- Heading text: `#0A0A0A`
- Body text: `#6B6B6B`
- Caption text: `#9A9A9A`
- Primary button bg: `#0A0A0A`
- Primary button text: `#FFFFFF`
- Card border: `rgba(10,10,10,0.06)`
- Gradient line: `linear-gradient(90deg, #FBCAEF, #FF5A47, #9533CF, #CB360F)` at 40-50% opacity

### Quick Color Reference — Dark Theme
- Background: `#0A0A0A`
- Section alt: `#111111`
- Heading text: `#F4F4F4`
- Body text: `#A0A0A0`
- Caption text: `#666666`
- Primary button bg: `#FFFFFF`
- Primary button text: `#0A0A0A`
- Card border: `rgba(255,255,255,0.06)`
- Gradient line: same gradient at 50-60% opacity

### Example Component Prompt
"Create a slide for Overnight Agency (light theme). White background, 120px padding. Caption 'OUR PIPELINE' in Inter 12px weight 600 uppercase, letter-spacing 2px, color #9A9A9A. Below: 2px gradient line (brand gradient at 50% opacity), 48px width. Title 'Structured 3D Production' in Plus Jakarta Sans 56px weight 700, line-height 1.06, letter-spacing -2px, color #0A0A0A. Subtitle in Inter 20px weight 400, line-height 1.65, color #6B6B6B. Primary CTA button: black (#0A0A0A) pill (980px radius), Inter 14px weight 500, white text, 15px 36px padding."
