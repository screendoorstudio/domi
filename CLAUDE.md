# DoMi Partner Landing Pages

## Project Overview
A set of high-converting landing pages for Digital Domi (DoMi), showcasing their two main value propositions:
1. **Opt-Out Tool** - Scan unwanted mail with your phone to unsubscribe
2. **Digital Mailbox** - Replace physical junk mail with digital coupons/offers you control

## Deployment
- **Live URL**: https://domi-landing.vercel.app
- **Password**: DomiNODM (Vercel deployment protection)
- **GitHub**: https://github.com/screendoorstudio/domi.git
- **Vercel Project**: domi-landing (screenteam account)

## File Structure
```
/DoMi partner/
├── index.html              # Main homepage - balanced messaging
├── opt-out.html            # Opt-out tool landing page (red theme)
├── digital-mailbox.html    # Digital mailbox - convenience/eco focus (blue theme)
├── digital-mailbox-earn.html # A/B test variant - heavy earnings focus (green theme)
├── gtm-strategy.html       # 12-month GTM strategy presentation for stakeholders
├── css/
│   └── styles.css          # All styles, DoMi brand system
├── js/
│   └── main.js             # Scroll animations, mobile menu, smooth scroll
├── assets/
│   ├── images/             # DoMi brand assets (scraped from digitaldomi.com)
│   │   ├── primary-logo.svg
│   │   ├── brand-logo.png (favicon)
│   │   ├── app-store.png
│   │   ├── playstore.png
│   │   ├── platform-preview.png
│   │   ├── app-download.png
│   │   ├── domi-in.png
│   │   ├── domi-out.png
│   │   ├── domi-gpt.png
│   │   ├── domi-docs.png
│   │   ├── founder.png (Steve Gianfilippo)
│   │   ├── offers.png
│   │   ├── promotion.png
│   │   ├── magazine.png
│   │   ├── map.svg
│   │   ├── mailer-illustration.svg
│   │   └── social-share.png
│   └── other-images/       # Lifestyle/stock photos
│       ├── GettyImages-187591416.jpg (mail at door)
│       ├── GettyImages-567074375.jpg (overflowing mailboxes)
│       ├── GettyImages-83408155.jpg (mail carrier)
│       └── Zero-Junk-Mail_*.jpg (paper waste piles)
├── screenshots/            # Development screenshots (not deployed)
├── postcards/              # EDDM postcard designs
│   ├── index.html          # Postcard gallery with PDF export instructions
│   ├── postcard-1-stop-junk-mail.html
│   ├── postcard-2-digital-mailbox.html
│   └── postcard-3-earn-money.html
└── marketing/              # GTM strategy & campaign assets
    ├── GTM-TRACKER.md              # 12-month implementation tracker
    ├── EDDM-CAMPAIGN-TRACKING.md   # QR codes, UTM structure, print specs
    ├── EMAIL-SEQUENCES.md          # Nurture sequences (welcome, re-engagement)
    ├── THEUNSUBSCRIBEGUY-CONTENT-PLAN.md  # SEO content strategy
    ├── PARTNERSHIP-OUTREACH.md     # Credit unions, mail houses, brands
    ├── DIGITAL-ADVERTISING-PLAN.md # Meta, Nextdoor, Google Ads
    └── ANALYTICS-IMPLEMENTATION.md # GA4, GTM, Facebook Pixel setup
```

## Brand Guidelines

### Colors (CSS Custom Properties)
```css
--primary-blue: #004B87;      /* Main brand blue */
--primary-blue-hover: #003d6e;
--accent-lime: #CCFF00;       /* Signature lime green */
--accent-lime-hover: #b8e600;
--alert-red: #CC0800;         /* Opt-out/problem theme */

/* Backgrounds */
--bg-light: #F6F6F7;
--bg-white: #FFFFFF;
--bg-dark: #0E0F11;
--bg-dark-card: #1A1A1A;

/* Text */
--text-primary: #000003;
--text-dark: #333335;
--text-muted: #657286;
--text-light: #D3D3D7;
```

### Typography
- Font: Inter (Google Fonts)
- Large rounded corners (48px for cards/containers)

### Button Styles
- `.btn-primary` - Blue background, white text
- `.btn-lime` - Lime green background, dark text (with shimmer animation)
- `.btn-outline` - Transparent with white border
- `.btn-white` - White background (for dark backgrounds)

## Pages

### 1. index.html (Homepage)
- Problem/Solution split banner at top
- Hero with app preview
- Two feature cards (Opt-Out + Digital Mailbox)
- Environmental impact stats (with background image)
- How it works steps
- Founder quote (Steve Gianfilippo)
- CTA section with app download

### 2. opt-out.html
- Red gradient hero theme
- Problem vs Solution comparison cards
- How it works (Snap, We Contact, Mail Stops)
- Category grid (Catalogs, Credit Offers, etc.)
- Old Way vs DOMI comparison
- USPS Integration section with mail carrier image
- Image banner with overflowing mailboxes

### 3. digital-mailbox.html
- Blue gradient hero theme
- Feature cards (Instant Access, Always Organized)
- Image banner ("Never Again" - mail at door)
- Category selection pills
- Privacy protection features
- Environmental impact with paper waste background

### 4. digital-mailbox-earn.html (A/B Test Variant)
- Green gradient hero theme (money/earnings focus)
- Large $100/month earnings display
- Interactive earnings calculator slider
- Value props ($100+/month, $0.42/offer, 100% your terms)
- Testimonials with earnings quotes
- Comparison table (Traditional Mail vs DOMI)
- Trust badges

### 5. gtm-strategy.html (Stakeholder Presentation)
**Live URL**: https://domi-landing.vercel.app/gtm-strategy.html

Visual presentation of the 12-month Go-to-Market strategy for stakeholder approval.

**Sections:**
- **Hero** - Executive summary with key numbers ($255K budget, 63K households, 5K users, $3-5M Series A)
- **Strategic Timeline** - 4-phase visual timeline with expandable cards
  - Phase 1 (M1-3): Foundation & Pilot Launch - $50,462
  - Phase 2 (M4-6): Optimization & PR Push - $46,392
  - Phase 3 (M7-9): Scale-Up & B2B Launch - $89,000
  - Phase 4 (M10-12): Series A Push - $103,000
- **Budget Allocation** - Donut chart visualization (EDDM 27%, Digital Ads 18%, PR 14%, etc.)
- **Growth Trajectory** - KPI bar charts (Verified Users, CAC, LTV trajectories)
- **12-Month Milestones** - Grid of monthly milestones with success criteria
- **CTA** - Approval request with stakeholder contact

**Design:**
- Blue gradient hero matching DoMi brand
- Phase-colored milestone cards (blue → cyan → purple → lime)
- Animated bar charts and donut chart
- Scroll fade-in animations
- Mobile responsive

## EDDM Postcards

**Live URL**: https://domi-landing.vercel.app/postcards/

Three 6" x 9" postcards designed for Every Door Direct Mail (EDDM) campaigns. Each includes front and back designs with proper USPS EDDM formatting. All postcards use the official DoMi logo (`assets/images/primary-logo.svg`) for consistent branding.

### Postcard 1: Stop Junk Mail
- **Theme:** Ironic approach - "Yes, this is junk mail"
- **Front:** Red gradient (#CC0800), bold headline "But It's The Last Piece You'll Ever Need"
- **Back:** Navy blue left panel with benefits list, QR code section, EDDM indicia on right

### Postcard 2: Digital Mailbox
- **Theme:** Digital convenience with earnings mentioned
- **Front:** Navy blue gradient (#004B87), "Coupons You Want. Zero Clutter." Value pills for Earn/Privacy/Green
- **Back:** 3-step how-it-works, earnings box showing "$100/mo", QR code, EDDM indicia

### Postcard 3: Earn Money
- **Theme:** Heavy earnings focus (aligned with A/B test page)
- **Front:** Lime green gradient (#CCFF00), giant "$100 Per Month" headline, "Just for Checking Your Mail"
- **Back:** Earnings breakdown table, testimonial quote, QR code, EDDM indicia

### EDDM Requirements Included
- EDDM indicia box (PRSRT STD, ECRWSS, U.S. POSTAGE PAID, EDDM RETAIL)
- `****ECRWSSEDDM****` addressing code
- "Local Postal Customer" recipient line
- Return address with Digital DOMI branding
- QR code placeholder for app download

### Export to PDF
1. Open postcard in browser
2. Press **Cmd + P** (Mac) or **Ctrl + P** (Windows)
3. Select "Save as PDF"
4. Set paper size to 9" x 6"
5. Set margins to "None"
6. Enable "Background graphics"
7. Save

## Key CSS Components

### Problem/Solution Split Banner
```css
.problem-solution-section   /* Grid container */
.problem-side              /* Red/left panel */
.solution-side             /* Blue/right panel */
.split-content             /* Content wrapper */
.split-icon                /* Circular icon container */
```
- Uses `align-items: flex-start` with 100px top padding
- `align-items: stretch` on grid for equal height columns

### Image Banners
```css
.image-banner              /* Full-width image with overlay */
.image-banner .overlay     /* Dark gradient overlay */
.overlay-content           /* Text content on banner */
```
- `object-position: center bottom` to show mail piles

### Stats Section with Background
```css
.stats-image-section       /* Section with bg image */
.stats-grid                /* 4-column stats layout */
.stat-card                 /* Individual stat */
.stat-number               /* Large lime number */
```

## External Links
- App Store: https://apps.apple.com/app/digital-domi/id6738277048
- Google Play: https://play.google.com/store/apps/details?id=com.domilabs.domi
- Web App: https://web.digitaldomi.com
- Main Site: https://digitaldomi.com
- Mailer Platform: https://mailer.digitaldomi.com

## Deployment Commands
```bash
# Deploy to Vercel
npx vercel --prod --yes

# Push to GitHub
git push origin main
```

## Go-To-Market Strategy

### Overview
12-month pre-Series A GTM plan targeting 5,000-10,000 households in 20-30 zip+4 neighborhoods.
- **Total Budget:** $255,000
- **Series A Goal:** $3-5M at $15-25M pre-money valuation
- **Primary Markets:** Tampa Bay, FL + Birmingham, AL

### EDDM Campaign Structure
Three-touch postcard sequence per neighborhood:
1. **Touch 1:** "Stop Junk Mail" (red theme) → opt-out.html
2. **Touch 2:** "Digital Mailbox" (blue theme) → digital-mailbox.html
3. **Touch 3:** "Earn Money" (green theme) → digital-mailbox-earn.html

### QR Code UTM Structure
```
?utm_source=eddm
&utm_medium=postcard
&utm_campaign={wave}-{month}{year}
&utm_content={postcard-variant}
&utm_term={neighborhood-code}
```

### Analytics Implementation
- GA4 events: `qr_scan`, `app_download_click`, `cta_click`, `scroll_depth`
- Facebook Pixel: `PageView`, `Lead`, `ViewContent`
- Data layer pushes for GTM integration
- UTM persistence via sessionStorage

### Key Metrics Targets (Month 12)
- Households reached: 63,000
- Verified users: 5,000
- MAU: 4,000
- CAC: <$10
- LTV: $75
- B2B partners: 20
- Monthly B2B revenue: $50,000

## Notes
- All pages use actual DoMi brand assets scraped from digitaldomi.com
- Consistent header/footer across all pages
- Mobile-responsive design
- Scroll animations via Intersection Observer
- The digital-mailbox-earn.html is an A/B test variant emphasizing earnings (not linked from main nav)
- Analytics tracking added to main.js for campaign attribution
