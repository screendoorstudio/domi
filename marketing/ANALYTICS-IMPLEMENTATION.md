# DoMi Analytics Implementation Guide

## Overview
This document outlines the analytics setup needed to track GTM campaign performance across EDDM, digital advertising, and website engagement.

---

## 1. Google Analytics 4 Setup

### Property Configuration
- Property Name: `DoMi Landing Pages`
- Data Stream: Web (domi-landing.vercel.app)
- Enhanced Measurement: Enable all

### Custom Events

```javascript
// Add to js/main.js or via Google Tag Manager

// Track UTM parameters on page load
function trackPageSource() {
  const params = new URLSearchParams(window.location.search);
  const utmData = {
    utm_source: params.get('utm_source'),
    utm_medium: params.get('utm_medium'),
    utm_campaign: params.get('utm_campaign'),
    utm_content: params.get('utm_content'),
    utm_term: params.get('utm_term')
  };

  if (utmData.utm_source) {
    gtag('event', 'campaign_landing', utmData);
  }
}

// Track QR code scans (inferred from EDDM UTM)
function trackQRScan() {
  const params = new URLSearchParams(window.location.search);
  if (params.get('utm_medium') === 'postcard') {
    gtag('event', 'qr_scan', {
      campaign: params.get('utm_campaign'),
      neighborhood: params.get('utm_term'),
      postcard_variant: params.get('utm_content')
    });
  }
}

// Track app download clicks
document.querySelectorAll('a[href*="apps.apple.com"], a[href*="play.google.com"]').forEach(link => {
  link.addEventListener('click', function() {
    const platform = this.href.includes('apple') ? 'ios' : 'android';
    gtag('event', 'app_download_click', {
      platform: platform,
      page: window.location.pathname,
      source: new URLSearchParams(window.location.search).get('utm_source') || 'direct'
    });
  });
});

// Track CTA button clicks
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', function() {
    gtag('event', 'cta_click', {
      button_text: this.textContent.trim(),
      button_class: this.className,
      page: window.location.pathname
    });
  });
});

// Track scroll depth
let scrollDepths = [25, 50, 75, 100];
let trackedDepths = [];

window.addEventListener('scroll', function() {
  const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);

  scrollDepths.forEach(depth => {
    if (scrollPercent >= depth && !trackedDepths.includes(depth)) {
      trackedDepths.push(depth);
      gtag('event', 'scroll_depth', {
        depth: depth,
        page: window.location.pathname
      });
    }
  });
});
```

### Custom Dimensions

| Dimension | Scope | Description |
|-----------|-------|-------------|
| utm_term (neighborhood) | Event | EDDM neighborhood code |
| postcard_variant | Event | Which postcard creative |
| scroll_depth | Event | How far user scrolled |

### Custom Metrics

| Metric | Scope | Description |
|--------|-------|-------------|
| qr_scans | Event | Count of QR code landings |
| app_clicks | Event | Count of app store clicks |

---

## 2. Google Tag Manager Setup

### Container Structure

```
DoMi Landing Pages (GTM-XXXXXX)
├── Tags
│   ├── GA4 Configuration
│   ├── GA4 - Page View
│   ├── GA4 - QR Scan
│   ├── GA4 - App Download Click
│   ├── GA4 - CTA Click
│   ├── GA4 - Scroll Depth
│   ├── Facebook Pixel - Base
│   ├── Facebook Pixel - PageView
│   ├── Facebook Pixel - Lead
│   └── Nextdoor Conversion Pixel
├── Triggers
│   ├── All Pages
│   ├── App Store Click
│   ├── CTA Button Click
│   ├── Scroll 25/50/75/100
│   └── EDDM Landing (UTM = postcard)
└── Variables
    ├── UTM Source
    ├── UTM Medium
    ├── UTM Campaign
    ├── UTM Content
    ├── UTM Term
    ├── Click Text
    └── Page Path
```

### Variable Configuration

**UTM Source Variable:**
```
Type: URL
Component: Query
Query Key: utm_source
```

**UTM Term Variable (Neighborhood Code):**
```
Type: URL
Component: Query
Query Key: utm_term
```

---

## 3. Facebook Pixel Setup

### Pixel Installation

```html
<!-- Add to <head> of all pages -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'PIXEL_ID_HERE');
fbq('track', 'PageView');
</script>
```

### Custom Events

```javascript
// Track app download intent as Lead
document.querySelectorAll('a[href*="apps.apple.com"], a[href*="play.google.com"]').forEach(link => {
  link.addEventListener('click', function() {
    fbq('track', 'Lead', {
      content_name: this.href.includes('apple') ? 'ios_download' : 'android_download',
      content_category: 'app_download'
    });
  });
});

// Track high-intent page views
if (window.location.pathname.includes('opt-out') ||
    window.location.pathname.includes('digital-mailbox')) {
  fbq('track', 'ViewContent', {
    content_name: window.location.pathname,
    content_type: 'landing_page'
  });
}
```

### Custom Conversions Setup

| Conversion | Rule | Category |
|------------|------|----------|
| EDDM Landing | URL contains utm_medium=postcard | Other |
| App Download Click | Event = Lead | Lead |
| High-Intent Page | URL contains opt-out OR digital-mailbox | View Content |

---

## 4. Mixpanel/Amplitude Setup (App Analytics)

### Events to Track

| Event | Properties | Trigger |
|-------|------------|---------|
| landing_page_view | source, medium, campaign, neighborhood | Page load |
| app_download_click | platform, source | Click |
| app_install | source, campaign, neighborhood | App open (attributed) |
| address_verification_start | - | Verification flow start |
| address_verification_complete | method | Verification success |
| first_mail_scan | mail_type | First scan |
| opt_out_submitted | mail_type, sender | Opt-out request |
| digital_mailbox_enabled | categories[] | Feature enabled |
| offer_viewed | brand, category | Offer opened |

### User Properties

| Property | Type | Description |
|----------|------|-------------|
| acquisition_source | String | EDDM, organic, paid, referral |
| acquisition_campaign | String | Campaign name |
| acquisition_neighborhood | String | EDDM neighborhood code |
| verified | Boolean | Address verified |
| opt_outs_count | Number | Total opt-outs submitted |
| digital_mailbox_enabled | Boolean | Feature enabled |
| earnings_total | Number | Lifetime earnings |

### Funnel: EDDM to Active User

```
1. landing_page_view (utm_medium=postcard)
   ↓
2. app_download_click
   ↓
3. app_install
   ↓
4. address_verification_complete
   ↓
5. first_mail_scan OR digital_mailbox_enabled
   ↓
6. day_7_active (7-day retention)
```

---

## 5. Attribution Setup

### Mobile Attribution (AppsFlyer/Adjust)

**Deep Links:**
```
domi://landing?source={utm_source}&medium={utm_medium}&campaign={utm_campaign}&neighborhood={utm_term}
```

**Web-to-App Flow:**
1. User lands on web page with UTM params
2. Clicks "Download on App Store"
3. App store opens with attribution data
4. App install tracked with original source

### Cross-Device Tracking
- Use email capture where possible to link web visits to app installs
- Facebook SDK for cross-device attribution
- Google Analytics User ID for logged-in users

---

## 6. Dashboard Requirements

### Executive Dashboard (Weekly)

| Section | Metrics |
|---------|---------|
| **Campaign Overview** | Impressions, Clicks, CTR, Spend, CPA |
| **EDDM Performance** | QR Scans, Scan Rate, By Neighborhood |
| **Conversion Funnel** | Landing → Click → Install → Verify → Active |
| **Channel Comparison** | EDDM vs Paid vs Organic |
| **Geographic** | Performance by Market (Tampa vs Birmingham) |

### Operational Dashboard (Daily)

| Section | Metrics |
|---------|---------|
| **Today's Traffic** | Sessions, Source breakdown |
| **App Downloads** | iOS, Android, Total |
| **Conversion Rates** | By landing page variant |
| **Ad Performance** | By platform, by creative |

### EDDM-Specific Dashboard

| Section | Metrics |
|---------|---------|
| **By Neighborhood** | Scans, Installs, Verifications, CPA |
| **By Touch** | 1st vs 2nd vs 3rd postcard |
| **By Creative** | Stop Junk Mail vs Digital Mailbox vs Earn |
| **Cumulative** | Running totals, response rate trend |

---

## 7. Implementation Checklist

### Landing Pages
- [ ] Add GA4 gtag.js to all pages
- [ ] Add Facebook Pixel to all pages
- [ ] Add Nextdoor pixel (when available)
- [ ] Implement UTM capture on page load
- [ ] Add app download click tracking
- [ ] Add CTA click tracking
- [ ] Add scroll depth tracking
- [ ] Test all events in GA4 DebugView

### Google Tag Manager
- [ ] Create GTM container
- [ ] Configure all tags
- [ ] Set up triggers
- [ ] Create variables
- [ ] Test in preview mode
- [ ] Publish container

### Facebook Ads Manager
- [ ] Create pixel
- [ ] Verify pixel installation
- [ ] Set up custom conversions
- [ ] Create custom audiences (visitors, downloaders)
- [ ] Set up lookalike audiences

### App Analytics
- [ ] Configure Mixpanel/Amplitude SDK
- [ ] Implement all events
- [ ] Set up user properties
- [ ] Create funnel reports
- [ ] Set up retention cohorts

### Attribution
- [ ] Set up AppsFlyer/Adjust
- [ ] Configure deep links
- [ ] Test attribution flow
- [ ] Connect to ad platforms

---

## 8. Data Layer Specification

```javascript
// Standard data layer for GTM
window.dataLayer = window.dataLayer || [];

// On page load
dataLayer.push({
  'event': 'page_load',
  'page_type': 'landing', // landing, opt-out, digital-mailbox, home
  'page_path': window.location.pathname,
  'utm_source': getParam('utm_source'),
  'utm_medium': getParam('utm_medium'),
  'utm_campaign': getParam('utm_campaign'),
  'utm_content': getParam('utm_content'),
  'utm_term': getParam('utm_term'),
  'is_eddm': getParam('utm_medium') === 'postcard'
});

// On app download click
dataLayer.push({
  'event': 'app_download_click',
  'platform': 'ios', // or 'android'
  'click_location': 'hero' // hero, cta, footer
});

// On CTA click
dataLayer.push({
  'event': 'cta_click',
  'cta_text': 'Stop Junk Mail',
  'cta_location': 'hero'
});
```

---

## 9. Privacy & Compliance

### Cookie Consent
- Implement cookie consent banner (OneTrust, Cookiebot, or custom)
- Only fire tracking pixels after consent
- Provide opt-out mechanism

### Data Retention
- GA4: 14 months (max)
- Mixpanel: As needed
- Raw data exports: Monthly backup

### CCPA Compliance
- Honor "Do Not Sell" requests
- Provide data deletion mechanism
- Document data flows

---

## 10. Testing Protocol

### Before Launch
1. Verify all pixels firing correctly
2. Test UTM parameter capture
3. Confirm events appear in dashboards
4. Test cross-device attribution
5. Verify conversion tracking

### Test Checklist

| Test | Method | Expected Result |
|------|--------|-----------------|
| GA4 Page View | GA4 DebugView | Event fires on load |
| QR Scan Event | Visit with utm_medium=postcard | qr_scan event fires |
| App Click | Click iOS button | Lead event in FB, app_download in GA4 |
| Attribution | Full flow test | Source appears in app analytics |
| UTM Persistence | Navigate between pages | UTMs preserved |
