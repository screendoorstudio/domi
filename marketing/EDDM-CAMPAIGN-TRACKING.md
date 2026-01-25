# EDDM Campaign Tracking & QR Codes

## QR Code URL Structure

Base URL: `https://domi-landing.vercel.app`

### UTM Parameter Format
```
?utm_source=eddm
&utm_medium=postcard
&utm_campaign={campaign_id}
&utm_content={postcard_variant}
&utm_term={zip4_code}
```

---

## Month 2: Wave 1 - First Touch

### Tampa Bay Markets

| Neighborhood | Zip+4 | Households | QR Code ID | Landing URL |
|--------------|-------|------------|------------|-------------|
| TBD - Neighborhood 1 | XXXXX-XXXX | 600 | TPA-001 | `https://domi-landing.vercel.app/opt-out.html?utm_source=eddm&utm_medium=postcard&utm_campaign=wave1-feb2026&utm_content=stop-junk-mail&utm_term=TPA-001` |
| TBD - Neighborhood 2 | XXXXX-XXXX | 600 | TPA-002 | `https://domi-landing.vercel.app/opt-out.html?utm_source=eddm&utm_medium=postcard&utm_campaign=wave1-feb2026&utm_content=stop-junk-mail&utm_term=TPA-002` |
| TBD - Neighborhood 3 | XXXXX-XXXX | 600 | TPA-003 | `https://domi-landing.vercel.app/opt-out.html?utm_source=eddm&utm_medium=postcard&utm_campaign=wave1-feb2026&utm_content=stop-junk-mail&utm_term=TPA-003` |

### Birmingham Markets

| Neighborhood | Zip+4 | Households | QR Code ID | Landing URL |
|--------------|-------|------------|------------|-------------|
| TBD - Neighborhood 1 | XXXXX-XXXX | 600 | BHM-001 | `https://domi-landing.vercel.app/opt-out.html?utm_source=eddm&utm_medium=postcard&utm_campaign=wave1-feb2026&utm_content=stop-junk-mail&utm_term=BHM-001` |
| TBD - Neighborhood 2 | XXXXX-XXXX | 600 | BHM-002 | `https://domi-landing.vercel.app/opt-out.html?utm_source=eddm&utm_medium=postcard&utm_campaign=wave1-feb2026&utm_content=stop-junk-mail&utm_term=BHM-002` |

---

## Month 3: Wave 1 - Second Touch

### Tampa Bay Markets

| Neighborhood | Zip+4 | QR Code ID | Landing URL |
|--------------|-------|------------|-------------|
| Same as Wave 1 | - | TPA-001-T2 | `https://domi-landing.vercel.app/digital-mailbox.html?utm_source=eddm&utm_medium=postcard&utm_campaign=wave1-mar2026&utm_content=digital-mailbox&utm_term=TPA-001` |
| Same as Wave 1 | - | TPA-002-T2 | `https://domi-landing.vercel.app/digital-mailbox.html?utm_source=eddm&utm_medium=postcard&utm_campaign=wave1-mar2026&utm_content=digital-mailbox&utm_term=TPA-002` |
| Same as Wave 1 | - | TPA-003-T2 | `https://domi-landing.vercel.app/digital-mailbox.html?utm_source=eddm&utm_medium=postcard&utm_campaign=wave1-mar2026&utm_content=digital-mailbox&utm_term=TPA-003` |

### Birmingham Markets

| Neighborhood | Zip+4 | QR Code ID | Landing URL |
|--------------|-------|------------|-------------|
| Same as Wave 1 | - | BHM-001-T2 | `https://domi-landing.vercel.app/digital-mailbox.html?utm_source=eddm&utm_medium=postcard&utm_campaign=wave1-mar2026&utm_content=digital-mailbox&utm_term=BHM-001` |
| Same as Wave 1 | - | BHM-002-T2 | `https://domi-landing.vercel.app/digital-mailbox.html?utm_source=eddm&utm_medium=postcard&utm_campaign=wave1-mar2026&utm_content=digital-mailbox&utm_term=BHM-002` |

---

## Month 4: Wave 1 - Third Touch

### Tampa Bay Markets

| Neighborhood | Zip+4 | QR Code ID | Landing URL |
|--------------|-------|------------|-------------|
| Same as Wave 1 | - | TPA-001-T3 | `https://domi-landing.vercel.app/digital-mailbox-earn.html?utm_source=eddm&utm_medium=postcard&utm_campaign=wave1-apr2026&utm_content=earn-money&utm_term=TPA-001` |
| Same as Wave 1 | - | TPA-002-T3 | `https://domi-landing.vercel.app/digital-mailbox-earn.html?utm_source=eddm&utm_medium=postcard&utm_campaign=wave1-apr2026&utm_content=earn-money&utm_term=TPA-002` |
| Same as Wave 1 | - | TPA-003-T3 | `https://domi-landing.vercel.app/digital-mailbox-earn.html?utm_source=eddm&utm_medium=postcard&utm_campaign=wave1-apr2026&utm_content=earn-money&utm_term=TPA-003` |

### Birmingham Markets

| Neighborhood | Zip+4 | QR Code ID | Landing URL |
|--------------|-------|------------|-------------|
| Same as Wave 1 | - | BHM-001-T3 | `https://domi-landing.vercel.app/digital-mailbox-earn.html?utm_source=eddm&utm_medium=postcard&utm_campaign=wave1-apr2026&utm_content=earn-money&utm_term=BHM-001` |
| Same as Wave 1 | - | BHM-002-T3 | `https://domi-landing.vercel.app/digital-mailbox-earn.html?utm_source=eddm&utm_medium=postcard&utm_campaign=wave1-apr2026&utm_content=earn-money&utm_term=BHM-002` |

---

## Postcard Creative Alignment

| Touch | Postcard | Landing Page | Primary Message |
|-------|----------|--------------|-----------------|
| 1st | postcard-1-stop-junk-mail.html | opt-out.html | "Yes, This is Junk Mail - But It's The Last Piece You'll Ever Need" |
| 2nd | postcard-2-digital-mailbox.html | digital-mailbox.html | "Coupons You Want. Zero Clutter. Earn $100/Month" |
| 3rd | postcard-3-earn-money.html | digital-mailbox-earn.html | "$100 Per Month - Just for Checking Your Mail" |

---

## QR Code Generation

### Recommended Tool
Use [QR Code Generator](https://www.qr-code-generator.com/) or similar with:
- High error correction (H level)
- Minimum 200x200 px
- DoMi brand colors (optional: blue fill #004B87)
- Add DoMi logo center (with sufficient quiet zone)

### QR Code Specifications
- Size: 1.25" x 1.25" minimum on postcard
- Format: SVG preferred, PNG 300dpi minimum
- Test scan distance: 12-18 inches typical viewing

---

## Tracking Dashboard Setup

### Google Analytics 4 Events
```javascript
// Track QR code scans
gtag('event', 'qr_scan', {
  'campaign': 'wave1-feb2026',
  'market': 'tampa',
  'neighborhood': 'TPA-001',
  'touch': 1
});

// Track app download clicks
gtag('event', 'app_download_click', {
  'platform': 'ios', // or 'android'
  'source': 'eddm',
  'market': 'tampa'
});
```

### Mixpanel/Amplitude Events
- `eddm_landing_view` - Page load with UTM params
- `app_download_intent` - Click on app store button
- `email_capture` - If collecting emails on landing
- `feature_interest` - Which feature card clicked

---

## Response Tracking Template

### Weekly Report (per neighborhood)

| Metric | TPA-001 | TPA-002 | TPA-003 | BHM-001 | BHM-002 | Total |
|--------|---------|---------|---------|---------|---------|-------|
| QR Scans | - | - | - | - | - | - |
| Unique Visitors | - | - | - | - | - | - |
| App Downloads | - | - | - | - | - | - |
| iOS | - | - | - | - | - | - |
| Android | - | - | - | - | - | - |
| Verified Users | - | - | - | - | - | - |
| Response Rate | -% | -% | -% | -% | -% | -% |
| CPA | $- | $- | $- | $- | $- | $- |

### Cumulative Funnel (all markets)

| Stage | Count | Conversion |
|-------|-------|------------|
| Postcards Sent | 3,000 | 100% |
| QR Scans | - | -% |
| Landing Page Visits | - | -% |
| App Download Clicks | - | -% |
| App Installs | - | -% |
| Verified Users | - | -% |
| Active (7-day) | - | -% |

---

## A/B Test Variants

### Landing Page Tests
| Test | Variant A | Variant B | Traffic Split |
|------|-----------|-----------|---------------|
| Hero CTA | "Stop Junk Mail" | "Get Started Free" | 50/50 |
| Value Prop | Environment focus | Earnings focus | 50/50 |
| Social Proof | Stats only | Testimonials | 50/50 |

### Postcard Tests (Wave 2+)
| Test | Variant A | Variant B |
|------|-----------|-----------|
| Headline | Question format | Statement format |
| CTA | "Scan to Stop" | "Download Free" |
| Image | Mail pile | App screenshot |

---

## Print Specifications

### Postcard Size
- 6" x 9" (standard EDDM size)
- 4-color process (CMYK)
- 14pt or 16pt cardstock
- UV coating (optional)

### Bleed & Safe Zone
- Bleed: 0.125" all sides
- Safe zone: 0.25" from trim edge
- QR code: Minimum 0.5" from any edge

### File Format
- PDF/X-1a:2001
- 300 DPI minimum
- CMYK color space
- Fonts outlined or embedded

---

## Vendor Contacts

### Recommended Print Vendors
| Vendor | Specialty | Est. Cost (6k pcs) |
|--------|-----------|-------------------|
| VistaPrint | Budget-friendly | ~$800 |
| PrintingForLess | Quality focus | ~$1,100 |
| NextDayFlyers | Fast turnaround | ~$950 |
| 4Over | Wholesale pricing | ~$700 |

### EDDM Postage
- Current rate: $0.247/piece
- 6,000 pieces = $1,482 postage
- Total print + postage: ~$2,200-2,600
