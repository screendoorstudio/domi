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
