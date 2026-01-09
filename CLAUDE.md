# DoMi Partner Landing Pages

## Project Overview
A set of high-converting landing pages for Digital Domi (DoMi), showcasing their two main value propositions:
1. **Opt-Out Tool** - Scan unwanted mail with your phone to unsubscribe
2. **Digital Mailbox** - Replace physical junk mail with digital coupons/offers you control

## Deployment
- **Live URL**: https://domi-landing.vercel.app
- **GitHub**: https://github.com/screendoorstudio/domi.git
- **Vercel Project**: domi-landing (screenteam account)

## File Structure
```
/DoMi partner/
├── index.html              # Main homepage - balanced messaging
├── opt-out.html            # Opt-out tool landing page (red theme)
├── digital-mailbox.html    # Digital mailbox - convenience/eco focus (blue theme)
├── digital-mailbox-earn.html # A/B test variant - heavy earnings focus (green theme)
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
└── screenshots/            # Development screenshots (not deployed)
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

## Notes
- All pages use actual DoMi brand assets scraped from digitaldomi.com
- Consistent header/footer across all pages
- Mobile-responsive design
- Scroll animations via Intersection Observer
- The digital-mailbox-earn.html is an A/B test variant emphasizing earnings (not linked from main nav)
