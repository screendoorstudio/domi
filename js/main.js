/**
 * DOMI Landing Pages - Main JavaScript
 * Handles animations, mobile menu, and scroll effects
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize all functionality
  initMobileMenu();
  initScrollAnimations();
  initHeaderScroll();
  initSmoothScroll();
  initCategoryTags();
});

/**
 * Mobile Menu Toggle
 */
function initMobileMenu() {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');

  if (!menuBtn || !navLinks) return;

  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Update aria-expanded
    const isExpanded = navLinks.classList.contains('active');
    menuBtn.setAttribute('aria-expanded', isExpanded);
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!menuBtn.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('active');
      menuBtn.setAttribute('aria-expanded', 'false');
    }
  });

  // Close menu when clicking a link
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      menuBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

/**
 * Scroll-triggered Fade-in Animations
 */
function initScrollAnimations() {
  const fadeElements = document.querySelectorAll('.fade-in');

  if (!fadeElements.length) return;

  // Use Intersection Observer for better performance
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Unobserve after animation to save resources
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  fadeElements.forEach(el => {
    observer.observe(el);
  });

  // Also handle stagger-children groups
  const staggerGroups = document.querySelectorAll('.stagger-children');
  staggerGroups.forEach(group => {
    observer.observe(group);
  });
}

/**
 * Header Scroll Effect
 * Adds shadow and background on scroll
 */
function initHeaderScroll() {
  const header = document.getElementById('header');

  if (!header) return;

  let lastScrollY = 0;
  let ticking = false;

  const updateHeader = () => {
    const scrollY = window.scrollY;

    if (scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    lastScrollY = scrollY;
    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateHeader);
      ticking = true;
    }
  }, { passive: true });
}

/**
 * Smooth Scroll for Anchor Links
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');

      // Skip if just "#"
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        e.preventDefault();

        const headerHeight = document.getElementById('header')?.offsetHeight || 72;
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight - 20;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/**
 * Category Tag Selection (Digital Mailbox Page)
 */
function initCategoryTags() {
  const categoryTags = document.querySelectorAll('.category-tag');

  if (!categoryTags.length) return;

  categoryTags.forEach(tag => {
    tag.addEventListener('click', () => {
      tag.classList.toggle('selected');
    });
  });
}

/**
 * Utility: Debounce function
 */
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Utility: Throttle function
 */
function throttle(func, limit) {
  let inThrottle;
  return function executedFunction(...args) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

/**
 * Add visible class to elements in viewport on load
 * (for elements above the fold)
 */
window.addEventListener('load', () => {
  const fadeElements = document.querySelectorAll('.fade-in');
  fadeElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add('visible');
    }
  });
});

/**
 * Analytics & Tracking
 * Captures UTM parameters, QR scans, and user interactions
 */

// Data layer for GTM
window.dataLayer = window.dataLayer || [];

/**
 * Get URL parameter by name
 */
function getParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name) || '';
}

/**
 * Track page source and UTM parameters
 */
function initAnalytics() {
  const utmData = {
    utm_source: getParam('utm_source'),
    utm_medium: getParam('utm_medium'),
    utm_campaign: getParam('utm_campaign'),
    utm_content: getParam('utm_content'),
    utm_term: getParam('utm_term')
  };

  // Store UTM data in session for cross-page tracking
  if (utmData.utm_source) {
    sessionStorage.setItem('domi_utm', JSON.stringify(utmData));
  }

  // Push to data layer
  dataLayer.push({
    'event': 'page_load',
    'page_type': getPageType(),
    'page_path': window.location.pathname,
    ...utmData,
    'is_eddm': utmData.utm_medium === 'postcard'
  });

  // Track QR scans (EDDM postcard visitors)
  if (utmData.utm_medium === 'postcard') {
    trackQRScan(utmData);
  }

  // If gtag is available, send event
  if (typeof gtag === 'function' && utmData.utm_source) {
    gtag('event', 'campaign_landing', utmData);
  }
}

/**
 * Determine page type from URL
 */
function getPageType() {
  const path = window.location.pathname;
  if (path.includes('opt-out')) return 'opt-out';
  if (path.includes('digital-mailbox-earn')) return 'digital-mailbox-earn';
  if (path.includes('digital-mailbox')) return 'digital-mailbox';
  if (path === '/' || path.includes('index')) return 'home';
  return 'other';
}

/**
 * Track QR code scans from EDDM postcards
 */
function trackQRScan(utmData) {
  dataLayer.push({
    'event': 'qr_scan',
    'campaign': utmData.utm_campaign,
    'neighborhood': utmData.utm_term,
    'postcard_variant': utmData.utm_content
  });

  if (typeof gtag === 'function') {
    gtag('event', 'qr_scan', {
      campaign: utmData.utm_campaign,
      neighborhood: utmData.utm_term,
      postcard_variant: utmData.utm_content
    });
  }

  // Facebook pixel event
  if (typeof fbq === 'function') {
    fbq('trackCustom', 'QRScan', {
      campaign: utmData.utm_campaign,
      neighborhood: utmData.utm_term
    });
  }
}

/**
 * Track app download button clicks
 */
function initAppDownloadTracking() {
  const appLinks = document.querySelectorAll('a[href*="apps.apple.com"], a[href*="play.google.com"]');

  appLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const platform = this.href.includes('apple') ? 'ios' : 'android';
      const storedUtm = JSON.parse(sessionStorage.getItem('domi_utm') || '{}');

      // Data layer push
      dataLayer.push({
        'event': 'app_download_click',
        'platform': platform,
        'click_location': getClickLocation(this),
        'source': storedUtm.utm_source || 'direct'
      });

      // Google Analytics
      if (typeof gtag === 'function') {
        gtag('event', 'app_download_click', {
          platform: platform,
          page: window.location.pathname,
          source: storedUtm.utm_source || 'direct',
          neighborhood: storedUtm.utm_term || ''
        });
      }

      // Facebook pixel
      if (typeof fbq === 'function') {
        fbq('track', 'Lead', {
          content_name: platform + '_download',
          content_category: 'app_download'
        });
      }
    });
  });
}

/**
 * Determine click location for analytics
 */
function getClickLocation(element) {
  const parent = element.closest('section');
  if (!parent) return 'unknown';

  if (parent.classList.contains('hero')) return 'hero';
  if (parent.classList.contains('cta-section')) return 'cta';
  if (parent.classList.contains('footer')) return 'footer';
  return 'body';
}

/**
 * Track CTA button clicks
 */
function initCTATracking() {
  const ctaButtons = document.querySelectorAll('.btn');

  ctaButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      const buttonText = this.textContent.trim();
      const isAppLink = this.href && (this.href.includes('apps.apple') || this.href.includes('play.google'));

      // Skip app links (tracked separately)
      if (isAppLink) return;

      dataLayer.push({
        'event': 'cta_click',
        'cta_text': buttonText,
        'cta_location': getClickLocation(this),
        'page_type': getPageType()
      });

      if (typeof gtag === 'function') {
        gtag('event', 'cta_click', {
          button_text: buttonText,
          page: window.location.pathname
        });
      }
    });
  });
}

/**
 * Track scroll depth
 */
function initScrollDepthTracking() {
  const scrollDepths = [25, 50, 75, 100];
  const trackedDepths = [];

  window.addEventListener('scroll', throttle(() => {
    const scrollPercent = Math.round(
      (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
    );

    scrollDepths.forEach(depth => {
      if (scrollPercent >= depth && !trackedDepths.includes(depth)) {
        trackedDepths.push(depth);

        dataLayer.push({
          'event': 'scroll_depth',
          'depth': depth,
          'page_type': getPageType()
        });

        if (typeof gtag === 'function') {
          gtag('event', 'scroll_depth', {
            depth: depth,
            page: window.location.pathname
          });
        }
      }
    });
  }, 500), { passive: true });
}

/**
 * Track time on page
 */
function initTimeOnPageTracking() {
  const startTime = Date.now();
  const timeThresholds = [30, 60, 120, 300]; // seconds
  const trackedThresholds = [];

  setInterval(() => {
    const timeOnPage = Math.floor((Date.now() - startTime) / 1000);

    timeThresholds.forEach(threshold => {
      if (timeOnPage >= threshold && !trackedThresholds.includes(threshold)) {
        trackedThresholds.push(threshold);

        dataLayer.push({
          'event': 'time_on_page',
          'seconds': threshold,
          'page_type': getPageType()
        });
      }
    });
  }, 10000); // Check every 10 seconds
}

// Initialize analytics when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initAnalytics();
  initAppDownloadTracking();
  initCTATracking();
  initScrollDepthTracking();
  initTimeOnPageTracking();
});
