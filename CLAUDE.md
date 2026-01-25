# Domi Partner Landing Pages

## Project Overview
A set of high-converting landing pages for Domi (Digital Domi), showcasing their two main value propositions:
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
├── gtm-strategy.html       # 12-month GTM strategy presentation (INTERACTIVE)
├── css/
│   └── styles.css          # All styles, Domi brand system
├── js/
│   └── main.js             # Scroll animations, mobile menu, smooth scroll
├── assets/
│   ├── images/             # Domi brand assets (scraped from digitaldomi.com)
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
│       ├── domi-sticker.jpeg        # Return to Sender sticker (used in GTM page)
│       ├── GettyImages-187591416.jpg (mail at door)
│       ├── GettyImages-567074375.jpg (overflowing mailboxes)
│       ├── GettyImages-83408155.jpg (mail carrier)
│       └── Zero-Junk-Mail_*.jpg (paper waste piles)
├── screenshots/            # Development screenshots (not deployed)
│   └── formatting/         # Bug screenshots for fixing layout issues
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

### Branding Note
Always use "Domi" (not "DoMi") for consistent branding across all materials.

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
- Old Way vs Domi comparison
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
- Comparison table (Traditional Mail vs Domi)
- Trust badges

### 5. gtm-strategy.html (Stakeholder Presentation) - MAJOR INTERACTIVE PAGE
**Live URL**: https://domi-landing.vercel.app/gtm-strategy.html

Visual, interactive presentation of the 12-month Go-to-Market strategy for stakeholder approval.

#### Page Structure (Top to Bottom)

1. **Hero** - Gradient header with Domi branding
2. **Executive Summary** (Enhanced)
   - Key stats row: $255K budget, 12 months, 5,000 target users, $3-5M Series A
   - "The Opportunity" - 41 lbs junk mail per household problem
   - "Our Approach" - EDDM-anchored strategy overview
   - Success Metrics sidebar (Month 12 targets)
   - Three pillars: Pilot Markets, Acquisition Strategy, Series A Positioning
3. **Multi-Channel Approach** - 8 integrated channel icons
4. **Strategic Timeline** - 4 expandable phase cards
5. **Messaging Simplification** (NEW)
   - Two value prop cards with SVG illustrations
   - Phone mockup showing "Stop Junk Mail" app
   - Computer mockup showing digital offers
   - Before/After website simplification wireframes
6. **UX & Sign-up Flow Hardening** (NEW)
   - 4-step flow with phone screen mockups
   - Key improvements grid (Faster Onboarding, Clear Value, Mobile-First, Progress Indicators)
7. **EDDM Postcard Campaigns** - 3-touch postcard visuals + sticker
8. **Market Selection & Budget Calculator** (Moved here, side-by-side layout)
   - City selector on left (scrollable)
   - Budget calculator on right (sticky)
9. **Digital Advertising** - Meta, Nextdoor, Google details
10. **Content & SEO Strategy** - Content hub concept
11. **Community Building** - Neighborhood champions, Nextdoor
12. **Partnerships** - Credit unions, environmental orgs, brands
13. **Budget Allocation** - Donut chart visualization
14. **Growth Trajectory** - KPI bar charts
15. **12-Month Milestones** - Detailed success criteria grid
16. **CTA** - Approval request

#### Key Interactive Features

**50-City Market Selector (Side-by-Side Layout)**
- City selector on LEFT (scrollable, 500px max height)
- Budget calculator on RIGHT (sticky, stays visible while scrolling)
- Stacks vertically on mobile (<1000px)
- Click to select/deselect cities for campaign planning
- Tampa & Birmingham are pre-selected as pilot markets (locked)
- "Select All" and "Clear" buttons
- Shows "X of 50 cities selected" counter

**Budget Calculator with Economies of Scale**
- Dynamically calculates costs based on selected cities
- Per-city base cost: $10,932 (EDDM $5,657 + Digital $3,775 + Partnerships $1,500)
- Discount tiers:
  - 1-5 cities: 0% discount
  - 6-15 cities: 10% discount
  - 16-30 cities: 20% discount
  - 31-50 cities: 30% discount
- Shows: cities selected, per-city cost, total savings, total budget
- Visual tier indicator dots
- Callout prompts to add more cities for next discount tier

**Target Cities (50 total)**
- **Pilots:** Tampa FL, Birmingham AL
- **Southeast:** Atlanta, Charlotte, Raleigh, Durham, Asheville, Wilmington, Greenville SC, Charleston, Savannah, Jacksonville, Orlando
- **Tennessee/Kentucky:** Nashville, Knoxville, Chattanooga, Louisville, Lexington
- **Texas:** Austin, San Antonio
- **Southwest:** Denver, Boulder, Colorado Springs, Phoenix, Scottsdale, Tucson, Albuquerque, Santa Fe, Salt Lake City
- **Pacific Northwest:** Seattle, Spokane, Portland, Eugene, Boise
- **California:** San Diego, Santa Barbara, San Jose, Oakland, Sacramento, Fresno
- **Midwest:** Minneapolis, Madison, Grand Rapids, Ann Arbor, Indianapolis, Cincinnati, Kansas City, Omaha, Des Moines
- **Mid-Atlantic:** Pittsburgh, Richmond, Providence

#### Messaging Simplification Section
Two value propositions presented with custom SVG illustrations:

**Value Prop #1: Stop Junk Mail**
- SVG phone mockup with red-themed opt-out app
- Shows mail items with X buttons to block
- "BLOCK ALL" button at bottom
- Tagline: "Scan it. We stop it."
- Target: Frustrated homeowners tired of mailbox clutter

**Value Prop #2: Digital Mailbox**
- SVG computer/monitor mockup showing digital offers
- Three offer cards: Target 20% OFF, Amazon Free Shipping, Whole Foods $50
- Each with "Claim $X" lime green buttons
- Tagline: "Coupons you want. Zero clutter."
- Target: Deal-seekers who want savings without paper waste

**Before/After Website Wireframes**
- Shows simplification from 6 confusing boxes to 2 clear paths
- Issues listed: Too many features, unclear action, dense copy
- Benefits listed: Two clear paths, single CTA, clean layout

#### UX Hardening Section
4-step visual flow with phone screen mockups:
1. Quick Sign-up (email/social login)
2. Verify Address (confirm mailbox)
3. Choose Path (opt-out or digital mailbox)
4. Ready to Go (start scanning)

Key Improvements Grid:
- Faster Onboarding (<60 seconds with social login)
- Clear Value Upfront (benefit before account creation)
- Mobile-First (thumb-friendly)
- Progress Indicators (show where users are)

#### Strategic Timeline (4 Phases, Detailed)

**Phase 1: Foundation & Pilot (Months 1-3) - $50,462** - 12 items:
- Harden sign-up flow & onboarding
- Simplify messaging & value prop
- Launch Tampa + Birmingham pilots
- First 3-touch EDDM (3,000 homes)
- Launch SEO content hub site
- GA4 + Meta Pixel analytics live
- First explainer video produced
- Meta + Nextdoor ad campaigns
- Change.org coalition outreach
- Accelerator applications submitted
- Recruit neighborhood champions
- One Tree Planted partnership signed

**Phase 2: Optimization & PR (Months 4-6) - $55,392** - 11 items:
- Direct Mail Sculpture unveiling (public art installation)
- First "Liberated" neighborhood (80%+)
- Local TV/radio earned media push
- Second explainer video (earnings focus)
- Credit union member pilot program
- HOA sustainability partnerships (5+)
- Environmental impact dashboard live
- Referral program launched
- Email nurture sequences activated
- A/B test landing page variants
- Local eco-friendly retailer partnerships

**Phase 3: Scale & B2B Launch (Months 7-9) - $98,000** - 11 items:
- Expand to 20 neighborhoods
- Launch DMP to brand partners
- First zero-junk-mail apartment complex
- University sustainability partnerships
- Trade shows (ANA, Postal Forum)
- Launch podcast + guest appearances
- Investor deck & data room finalized
- Mail house partnership negotiations
- Property management company outreach
- Employer benefits program pilot
- Customer testimonial video series

**Phase 4: Series A Push (Months 10-12) - $112,000** - 11 items:
- Investor roadshow (20+ meetings)
- National media placement (WSJ, NPR)
- Scale to 30 neighborhoods
- 20 brand partners, $50K/mo B2B
- B Corp certification application
- Customer case studies published
- Convert petition signers to users
- Advisory board formalized
- Strategic partnership announcements
- Due diligence materials ready
- Close Series A: $3-5M

#### Visual Design Notes
- Sections have clear separation with colored top borders
- Lime green borders for primary sections
- Blue borders for alternate sections
- Executive Summary has blue bottom border
- Market Selection has lime top border and blue bottom border
- Phase-colored cards (blue → cyan → purple → lime)
- Animated bar charts and donut chart
- Scroll fade-in animations
- Mobile responsive
- Uses actual `domi-sticker.jpeg` image

## EDDM Postcards

**Live URL**: https://domi-landing.vercel.app/postcards/

Three 6" x 9" postcards designed for Every Door Direct Mail (EDDM) campaigns. Each includes front and back designs with proper USPS EDDM formatting.

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
- Return address with Digital Domi branding
- QR code placeholder for app download

### Export to PDF
1. Open postcard in browser
2. Press **Cmd + P** (Mac) or **Ctrl + P** (Windows)
3. Select "Save as PDF"
4. Set paper size to 9" x 6"
5. Set margins to "None"
6. Enable "Background graphics"
7. Save

## Marketing Folder (/marketing/)

Comprehensive GTM strategy documentation:

| File | Purpose |
|------|---------|
| `GTM-TRACKER.md` | 12-month implementation tracker with phases |
| `EDDM-CAMPAIGN-TRACKING.md` | QR codes, UTM structure, print specs |
| `EMAIL-SEQUENCES.md` | Welcome & re-engagement nurture sequences |
| `THEUNSUBSCRIBEGUY-CONTENT-PLAN.md` | SEO content hub strategy |
| `PARTNERSHIP-OUTREACH.md` | Credit unions, mail houses, brand partners |
| `DIGITAL-ADVERTISING-PLAN.md` | Meta, Nextdoor, Google Ads campaigns |
| `ANALYTICS-IMPLEMENTATION.md` | GA4, GTM, Facebook Pixel setup |

## Go-To-Market Strategy Summary

### Overview
12-month pre-Series A GTM plan targeting 50 potential markets with pilot focus on Tampa + Birmingham.
- **Total Budget:** ~$316K (varies by cities selected)
- **Series A Goal:** $3-5M at $15-25M pre-money valuation
- **Pilot Markets:** Tampa Bay, FL + Birmingham, AL

### EDDM Campaign Structure
Three-touch postcard sequence per neighborhood:
1. **Touch 1:** "Stop Junk Mail" (red theme) → opt-out.html
2. **Touch 2:** "Digital Mailbox" (blue theme) → digital-mailbox.html
3. **Touch 3:** "Earn Money" (green theme) → digital-mailbox-earn.html

### Key PR Event: Direct Mail Sculpture
- Public art installation made from collected junk mail
- Media event in Month 5
- Positive framing (not "Wall of Shame")
- Local TV/radio coverage opportunity

### QR Code UTM Structure
```
?utm_source=eddm
&utm_medium=postcard
&utm_campaign={wave}-{month}{year}
&utm_content={postcard-variant}
&utm_term={neighborhood-code}
```

### Key Metrics Targets (Month 12)
- Verified users: 5,000
- MAU: 4,000
- CAC: <$10
- LTV: $75
- B2B partners: 20
- Monthly B2B revenue: $50,000
- Liberated neighborhoods: 5+

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

## Recent Session Notes (January 25, 2025)

### Latest Session Changes
1. **City Selector & Budget Calculator** - Now side-by-side layout (city list left, calculator right sticky)
2. **Market Selection Moved** - Now appears AFTER EDDM section (better flow)
3. **Messaging Simplification Section** - NEW section with:
   - Two value prop cards
   - Custom SVG illustrations (phone app mockup, computer screen mockup)
   - Before/After website wireframes
4. **UX Hardening Section** - NEW section with:
   - 4-step flow with phone screen mockups
   - Key improvements grid
5. **Enhanced Executive Summary** - Added:
   - Key stats row ($255K, 12 months, 5K users, $3-5M)
   - "The Opportunity" and "Our Approach" paragraphs
   - Success Metrics sidebar
6. **Section Separation** - Added colored borders to make sections distinct
7. **Deleted** - "From Physical Clutter to Digital Value" visual break
8. **Deleted** - "Marketing Contractor: $3,000/month" callout
9. **Fixed** - CSS conflict with `.mini-card` class (was breaking stats grids)

### Previous Session Changes
1. **Interactive 50-City Market Selector** - Compact card grid with select all/clear buttons
2. **Budget Calculator** - Real-time cost calculation with 4-tier volume discounts
3. **Expanded Strategic Timeline** - All 4 phases now have 11-12 detailed action items
4. **Updated Milestones** - All 12 months have detailed success criteria
5. **Sticker Image** - Replaced SVG mockup with actual `domi-sticker.jpeg`
6. **Rebranded** - Changed "Wall of Shame" to "Direct Mail Sculpture"
7. **Standardized** - All "DoMi" instances changed to "Domi"

### Next Steps / TODO
- [ ] Review marketing/*.md files for consistency with updated GTM strategy
- [ ] Update budget numbers in marketing docs to match new calculator
- [ ] Create actual QR codes for postcards
- [ ] Finalize postcard designs for print
- [ ] Set up GA4 and Meta Pixel per ANALYTICS-IMPLEMENTATION.md
- [ ] Consider adding more detail to individual channel sections

## Notes
- All pages use actual Domi brand assets scraped from digitaldomi.com
- Consistent header/footer across all pages
- Mobile-responsive design
- Scroll animations via Intersection Observer
- The digital-mailbox-earn.html is an A/B test variant (not linked from main nav)
- GTM strategy page has embedded JavaScript for budget calculator
- Screenshots folder contains bug/formatting screenshots for development reference
