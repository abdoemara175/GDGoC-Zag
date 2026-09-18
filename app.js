/**
 * GDG on Campus – Zagazig University Link Hub
 * Application Controller (Theme, Language, Dynamic Render, LocalStorage Persistence)
 */

(function () {
  'use strict';

  // SVG Icons Store for Dynamic Components
  const ICONS = {
    arrowRight: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>`,
    info: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>`,
    externalLink: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg>`,
    user: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>`,
    code: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>`,
    management: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/></svg>`,
    lead: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>`,
    session: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z"/></svg>`,
    instagram: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>`,
    facebook: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`,
    linkedin: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>`
  };

  // State
  const STORAGE_KEY_LANG = 'gdg_zag_lang';
  const STORAGE_KEY_THEME = 'gdg_zag_theme';

  let currentLang = 'en';
  let currentTheme = 'light';
  let activeModalItemId = null;
  let lastActiveElement = null;

  // DOM References
  const htmlEl = document.documentElement;
  const btnLangEn = document.getElementById('btn-lang-en');
  const btnLangAr = document.getElementById('btn-lang-ar');
  const btnThemeToggle = document.getElementById('btn-theme-toggle');
  const themeText = document.getElementById('theme-text');
  const iconSun = btnThemeToggle.querySelector('.icon-sun');
  const iconMoon = btnThemeToggle.querySelector('.icon-moon');
  const metaThemeColor = document.getElementById('meta-theme-color');

  // Static Elements
  const heroTitle = document.getElementById('hero-title');
  const heroSubtitle = document.getElementById('hero-subtitle');
  const heroTagline = document.getElementById('hero-tagline');
  const mainLogo = document.getElementById('main-logo');

  const whatsappLink = document.getElementById('whatsapp-link');
  const whatsappBadge = document.getElementById('whatsapp-badge');
  const whatsappTitle = document.getElementById('whatsapp-title');
  const whatsappDesc = document.getElementById('whatsapp-desc');

  const regTitle = document.getElementById('reg-title');
  const regCardsContainer = document.getElementById('registration-cards-container');

  const fbCtaTitle = document.getElementById('fb-cta-title');
  const fbCtaDesc = document.getElementById('fb-cta-desc');
  const fbCtaBtn = document.getElementById('fb-cta-btn');
  const fbCtaBtnText = document.getElementById('fb-cta-btn-text');
  const fbCtaArrow = document.getElementById('fb-cta-arrow');

  const socialTitle = document.getElementById('social-title');
  const socialDesc = document.getElementById('social-desc');
  const socialContainer = document.getElementById('social-links-container');

  const secondaryLogo = document.getElementById('secondary-logo');
  const footerText = document.getElementById('footer-text');

  // Modal Elements
  const modalBackdrop = document.getElementById('info-modal-backdrop');
  const modalEl = document.getElementById('info-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalLeadingIcon = document.getElementById('modal-leading-icon');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body');
  const modalCtaBtn = document.getElementById('modal-cta-btn');
  const modalCtaText = document.getElementById('modal-cta-text');
  const modalCtaArrow = document.getElementById('modal-cta-arrow');

  /**
   * Initialize Application
   */
  function init() {
    // 1. Language Initialization
    const savedLang = localStorage.getItem(STORAGE_KEY_LANG);
    if (savedLang === 'ar' || savedLang === 'en') {
      currentLang = savedLang;
    } else {
      currentLang = 'en'; // Default requirement
    }

    // 2. Theme Initialization (Always default to Light on first visit)
    const savedTheme = localStorage.getItem(STORAGE_KEY_THEME);
    if (savedTheme === 'light' || savedTheme === 'dark') {
      currentTheme = savedTheme;
    } else {
      currentTheme = 'light';
    }

    // Apply initial settings
    applyTheme(currentTheme, false);
    applyLanguage(currentLang, false);

    // Event Listeners & Subtle Parallax
    setupEventListeners();
    setupParallax();
  }

  /**
   * Setup Event Listeners
   */
  function setupEventListeners() {
    // Language Switcher Buttons
    btnLangEn.addEventListener('click', () => {
      if (currentLang !== 'en') {
        applyLanguage('en', true);
      }
    });

    btnLangAr.addEventListener('click', () => {
      if (currentLang !== 'ar') {
        applyLanguage('ar', true);
      }
    });

    // Theme Switcher Button
    btnThemeToggle.addEventListener('click', () => {
      const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
      applyTheme(nextTheme, true);
    });

    // Modal Event Listeners
    if (modalCloseBtn) {
      modalCloseBtn.addEventListener('click', closeInfoModal);
    }

    if (modalBackdrop) {
      modalBackdrop.addEventListener('click', (e) => {
        if (e.target === modalBackdrop) {
          closeInfoModal();
        }
      });
    }

    document.addEventListener('keydown', handleModalKeydown);
  }

  /**
   * Apply Theme (Light / Dark)
   */
  function applyTheme(theme, savePreference) {
    currentTheme = theme;
    htmlEl.setAttribute('data-theme', theme);

    if (savePreference) {
      localStorage.setItem(STORAGE_KEY_THEME, theme);
    }

    // Update Theme Meta & Toggle Button
    if (theme === 'dark') {
      metaThemeColor.setAttribute('content', '#1f2023');
      iconSun.style.display = 'inline-block';
      iconMoon.style.display = 'none';
      themeText.textContent = siteConfig.translations[currentLang].topControls.themeLight;
      btnThemeToggle.setAttribute('aria-label', siteConfig.translations[currentLang].topControls.themeToggleAria + ' (Light)');
    } else {
      metaThemeColor.setAttribute('content', '#f8f9fa');
      iconSun.style.display = 'none';
      iconMoon.style.display = 'inline-block';
      themeText.textContent = siteConfig.translations[currentLang].topControls.themeDark;
      btnThemeToggle.setAttribute('aria-label', siteConfig.translations[currentLang].topControls.themeToggleAria + ' (Dark)');
    }
  }

  /**
   * Apply Language (English / Arabic)
   */
  function applyLanguage(lang, savePreference) {
    currentLang = lang;
    const t = siteConfig.translations[lang];
    const meta = siteConfig.metadata[lang];

    if (savePreference) {
      localStorage.setItem(STORAGE_KEY_LANG, lang);
    }

    // 1. Update HTML attributes
    htmlEl.setAttribute('lang', t.langCode);
    htmlEl.setAttribute('dir', t.dir);

    // 2. Update Page Meta
    document.title = meta.title;
    const metaDesc = document.getElementById('meta-desc');
    if (metaDesc) metaDesc.setAttribute('content', meta.description);

    const ogTitle = document.getElementById('og-title');
    if (ogTitle) ogTitle.setAttribute('content', meta.ogTitle);

    const ogDesc = document.getElementById('og-desc');
    if (ogDesc) ogDesc.setAttribute('content', meta.ogDescription);

    const twTitle = document.getElementById('tw-title');
    if (twTitle) twTitle.setAttribute('content', meta.ogTitle);

    const twDesc = document.getElementById('tw-desc');
    if (twDesc) twDesc.setAttribute('content', meta.ogDescription);

    // 3. Update Language Switcher UI
    if (lang === 'en') {
      btnLangEn.classList.add('active');
      btnLangEn.setAttribute('aria-pressed', 'true');
      btnLangAr.classList.remove('active');
      btnLangAr.setAttribute('aria-pressed', 'false');
    } else {
      btnLangAr.classList.add('active');
      btnLangAr.setAttribute('aria-pressed', 'true');
      btnLangEn.classList.remove('active');
      btnLangEn.setAttribute('aria-pressed', 'false');
    }

    // 4. Update Theme Switcher Label in Current Language
    if (currentTheme === 'dark') {
      themeText.textContent = t.topControls.themeLight;
      btnThemeToggle.setAttribute('aria-label', t.topControls.themeToggleAria + ' (Light)');
    } else {
      themeText.textContent = t.topControls.themeDark;
      btnThemeToggle.setAttribute('aria-label', t.topControls.themeToggleAria + ' (Dark)');
    }

    // 5. Update Hero Section
    mainLogo.setAttribute('src', siteConfig.logos.main);
    mainLogo.setAttribute('alt', t.hero.logoAlt);
    heroTitle.textContent = t.hero.title;
    heroSubtitle.textContent = t.hero.subtitle;
    heroTagline.textContent = t.hero.tagline;

    // 6. Update WhatsApp Community Card
    whatsappLink.setAttribute('href', siteConfig.links.whatsapp);
    whatsappLink.setAttribute('aria-label', t.whatsapp.actionAria);
    whatsappBadge.textContent = t.whatsapp.badge;
    whatsappTitle.textContent = t.whatsapp.title;
    whatsappDesc.textContent = t.whatsapp.description;

    // 7. Update Registration & Opportunities
    regTitle.textContent = t.registration.sectionTitle;
    renderRegistrationCards(t.registration.items);

    // 8. Update Facebook CTA Section
    fbCtaTitle.textContent = t.facebookCTA.title;
    fbCtaDesc.textContent = t.facebookCTA.description;
    fbCtaBtn.setAttribute('href', siteConfig.links.facebookCTA);
    fbCtaBtn.setAttribute('aria-label', t.facebookCTA.actionAria);
    fbCtaBtnText.textContent = t.facebookCTA.buttonText;
    fbCtaArrow.textContent = t.facebookCTA.buttonArrow;

    // 9. Update Social Media Section
    socialTitle.textContent = t.social.sectionTitle;
    socialDesc.textContent = t.social.description;
    renderSocialLinks(t.social.platforms);

    // 10. Secondary Logo & Footer
    secondaryLogo.setAttribute('src', siteConfig.logos.secondary);
    secondaryLogo.setAttribute('alt', t.secondaryLogo.alt);
    footerText.textContent = t.footer.text;

    // 11. Modal Language Synchronization (if currently open)
    if (activeModalItemId && modalBackdrop && modalBackdrop.classList.contains('open')) {
      const activeItem = t.registration.items.find(it => it.id === activeModalItemId);
      if (activeItem && activeItem.popup) {
        modalTitle.textContent = activeItem.popup.title;
        modalBody.innerHTML = activeItem.popup.description;
        modalCtaText.textContent = activeItem.popup.ctaText;
        modalCtaArrow.textContent = lang === 'ar' ? '←' : '→';
        const ctaAriaDesc = lang === 'ar' ? 'فتح استمارة التسجيل' : 'Open registration form';
        modalCtaBtn.setAttribute('aria-label', `${activeItem.popup.ctaText} (${ctaAriaDesc})`);
      }
      if (t.modal && t.modal.closeAria) {
        modalCloseBtn.setAttribute('aria-label', t.modal.closeAria);
      }
    }
  }

  /**
   * Render Registration Cards List
   */
  function renderRegistrationCards(items) {
    regCardsContainer.innerHTML = '';

    const fragment = document.createDocumentFragment();

    items.forEach((item) => {
      const url = siteConfig.links[item.urlKey];
      if (!url) return;

      const card = document.createElement('a');
      card.className = 'action-card';
      card.href = url;
      card.target = '_blank';
      card.rel = 'noopener noreferrer';
      card.setAttribute('aria-label', item.aria || item.title);

      const iconSvg = ICONS[item.icon] || ICONS.user;
      const accentClass = item.accent ? `accent-${item.accent}` : 'accent-blue';
      const infoAria = item.infoAria || (currentLang === 'ar' ? `معلومات أكثر عن ${item.title}` : `More information about ${item.title}`);

      card.innerHTML = `
        <div class="card-leading-icon ${accentClass}" aria-hidden="true">
          ${iconSvg}
        </div>
        <div class="card-content">
          <div class="card-title">${escapeHTML(item.title)}</div>
          <div class="card-description">${escapeHTML(item.description)}</div>
        </div>
        <button type="button" class="card-info-btn" aria-label="${escapeHTML(infoAria)}" title="${escapeHTML(infoAria)}">
          ${ICONS.info}
        </button>
      `;

      const infoBtn = card.querySelector('.card-info-btn');
      if (infoBtn) {
        infoBtn.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          openInfoModal(item);
        });
      }

      fragment.appendChild(card);
    });

    regCardsContainer.appendChild(fragment);
  }

  /**
   * Render Social Media Links
   * ONLY display platforms that have a configured URL in siteConfig.social
   */
  function renderSocialLinks(platforms) {
    socialContainer.innerHTML = '';

    const fragment = document.createDocumentFragment();

    platforms.forEach((platform) => {
      const url = siteConfig.social[platform.urlKey];
      // Only render if URL is configured and non-empty
      if (!url || typeof url !== 'string' || url.trim() === '') {
        return;
      }

      const iconSvg = ICONS[platform.urlKey] || ICONS.externalLink;

      const link = document.createElement('a');
      link.className = 'social-link';
      link.href = url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.setAttribute('aria-label', platform.aria || platform.name);
      link.title = platform.name;

      link.innerHTML = iconSvg;

      fragment.appendChild(link);
    });

    socialContainer.appendChild(fragment);
  }

  /**
   * Subtle Scroll Parallax on Dot Grid Background Layer
   * Opposite direction of scroll, ~4-8px max displacement, GPU-accelerated translate3d.
   * Fully disabled when prefers-reduced-motion is active.
   */
  function setupParallax() {
    const gridLayer = document.querySelector('.bg-grid-layer');
    if (!gridLayer) return;

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motionQuery.matches) {
      gridLayer.style.transform = 'none';
      return;
    }

    let ticking = false;

    function onScroll() {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(updateParallax);
      }
    }

    function updateParallax() {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
      const isMobile = window.innerWidth <= 440;
      const factor = isMobile ? 0.0055 : 0.0075;
      const maxDisplacement = isMobile ? 6 : 8;

      // Move in opposite direction of scroll (negative Y), clamped to 6px on mobile, 8px on desktop
      const offset = Math.max(-maxDisplacement, -(scrollY * factor));
      gridLayer.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;

      ticking = false;
    }

    window.addEventListener('scroll', onScroll, { passive: true });

    motionQuery.addEventListener('change', (e) => {
      if (e.matches) {
        window.removeEventListener('scroll', onScroll);
        gridLayer.style.transform = 'none';
      } else {
        window.addEventListener('scroll', onScroll, { passive: true });
        updateParallax();
      }
    });

    // Initial position
    updateParallax();
  }

  /**
   * Open Information Modal for Registration Card
   */
  function openInfoModal(item) {
    if (!modalBackdrop || !item || !item.popup) return;

    activeModalItemId = item.id;
    lastActiveElement = document.activeElement;

    const accentClass = item.accent ? `accent-${item.accent}` : 'accent-blue';
    modalLeadingIcon.className = `card-leading-icon ${accentClass}`;
    modalLeadingIcon.innerHTML = ICONS[item.icon] || ICONS.user;

    modalTitle.textContent = item.popup.title;
    modalBody.innerHTML = item.popup.description;

    const url = siteConfig.links[item.urlKey] || '#';
    modalCtaBtn.setAttribute('href', url);
    const ctaAriaDesc = currentLang === 'ar' ? 'فتح استمارة التسجيل' : 'Open registration form';
    modalCtaBtn.setAttribute('aria-label', `${item.popup.ctaText} (${ctaAriaDesc})`);
    modalCtaText.textContent = item.popup.ctaText;
    modalCtaArrow.textContent = currentLang === 'ar' ? '←' : '→';

    const t = siteConfig.translations[currentLang];
    if (t && t.modal && t.modal.closeAria) {
      modalCloseBtn.setAttribute('aria-label', t.modal.closeAria);
    }

    modalBackdrop.classList.add('open');
    modalBackdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Shift focus into modal for accessibility
    setTimeout(() => {
      if (modalCloseBtn) modalCloseBtn.focus();
    }, 50);
  }

  /**
   * Close Information Modal
   */
  function closeInfoModal() {
    if (!modalBackdrop || !modalBackdrop.classList.contains('open')) return;

    modalBackdrop.classList.remove('open');
    modalBackdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    activeModalItemId = null;

    if (lastActiveElement && typeof lastActiveElement.focus === 'function') {
      lastActiveElement.focus();
    }
  }

  /**
   * Handle Escape key and focus trapping inside modal
   */
  function handleModalKeydown(e) {
    if (!modalBackdrop || !modalBackdrop.classList.contains('open')) return;

    if (e.key === 'Escape') {
      e.preventDefault();
      closeInfoModal();
      return;
    }

    if (e.key === 'Tab') {
      const focusable = modalEl.querySelectorAll('button:not([disabled]), [href]:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])');
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
  }

  /**
   * Basic HTML Escaper for Security
   */
  function escapeHTML(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
