/**
 * GDG on Campus – Zagazig University Link Hub
 * Application Controller (Theme, Language, Dynamic Render, LocalStorage Persistence)
 */

(function () {
  'use strict';

  // SVG Icons Store for Dynamic Components
  const ICONS = {
    arrowRight: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>`,
    arrowLeft: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/></svg>`,
    info: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>`,
    externalLink: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg>`,
    user: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>`,
    code: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>`,
    management: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/></svg>`,
    lead: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>`,
    session: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z"/></svg>`,
    instagram: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>`,
    facebook: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`,
    whatsapp: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm0 18.15c-1.49 0-2.95-.4-4.22-1.16l-.3-.18-3.13.82.84-3.05-.2-.31a8.17 8.17 0 0 1-1.25-4.36c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.188 8.188 0 0 1 2.42 5.83c0 4.55-3.7 8.24-8.24 8.24zm4.52-6.17c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.08 0 1.23.89 2.42 1.02 2.59.12.17 1.76 2.69 4.27 3.77.6.26 1.06.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.18-.47-.3z"/></svg>`,
    linkedin: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>`,
    tiktok: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>`,
    // Track Specific Icons
    network: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.4z"/></svg>`,
    cloud: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/></svg>`,
    cs50: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 4H4c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.11-.89-2-2-2zm0 14H4V8h16v10zm-2-1h-6v-2h6v2zM7.5 17l-1.41-1.41L8.67 13l-2.58-2.59L7.5 9l4 4-4 4z"/></svg>`,
    flutter: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z"/></svg>`,
    backend: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 20h20v-4H2v4zm2-3h2v2H4v-2zM2 4v4h20V4H2zm4 3H4V5h2v2zm-4 7h20v-4H2v4zm2-3h2v2H4v-2z"/></svg>`,
    cybersecurity: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg>`,
    bdPr: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>`,
    marketing: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 2v3h-2V2h2zm-2 17h2v3h-2v-3zm3-7v2h3v-2h-3zm-6.26-6.66l1.41-1.41 2.12 2.12-1.41 1.41-2.12-2.12zm3.53 10.95l-1.41-1.41 2.12-2.12 1.41 1.41-2.12 2.12zM4 9v6h4l5 5V4L8 9H4z"/></svg>`,
    frontend: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h16v12H4zM2 4v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2zm2 0h16v3H4V4zm0 5h4v11H4V9zm6 11V9h10v11H10z"/></svg>`,
    robotics: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 9H9v6h6V9zm-2 4h-2v-2h2v2zm8-2V9h-2V7c0-1.1-.9-2-2-2h-2V3h-2v2h-2V3H9v2H7c-1.1 0-2 .9-2 2v2H3v2h2v2H3v2h2v2c0 1.1.9 2 2 2h2v2h2v-2h2v2h2v-2h2c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2zm-4 6H7V7h10v10z"/></svg>`,
    video: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z"/></svg>`,
    uiUx: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10c1.38 0 2.5-1.12 2.5-2.5 0-.61-.23-1.21-.64-1.67-.08-.1-.13-.22-.13-.33 0-.28.22-.5.5-.5H16c3.31 0 6-2.69 6-6 0-4.96-4.49-9-10-9zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 8 6.5 8 8 8.67 8 9.5 7.33 11 6.5 11zm3-4C8.67 7 8 6.33 8 5.5S8.67 4 9.5 4s1.5.67 1.5 1.5S10.33 7 9.5 7zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 4 14.5 4s1.5.67 1.5 1.5S15.33 7 14.5 7zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 8 17.5 8s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>`,
    contentWriting: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>`,
    graphicDesign: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L4.35 19.4c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l1.9-1.9C9.32 19.58 10.61 20 12 20c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 15c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/></svg>`,
    hr: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>`,
    ai: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 9l1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25L19 9zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12l-5.5-2.5zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25L19 15z"/></svg>`,
    photography: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>`,
    share: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/></svg>`,
    copy: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>`,
    qr: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 11h8V3H3v8zm2-6h4v4H5V5zM3 21h8v-8H3v8zm2-6h4v4H5v-4zM13 3v8h8V3h-8zm6 6h-4V5h4v4zM19 19v2h2v-2h-2zm-6-6h2v2h-2v-2zm2 2h2v2h-2v-2zm-2 2h2v2h-2v-2zm2 2h2v2h-2v-2zm2-2h2v2h-2v-2zm0-4h2v2h-2v-2zm2 2h2v2h-2v-2z"/></svg>`
  };

  // State
  const STORAGE_KEY_LANG = 'gdg_zag_lang';
  const STORAGE_KEY_THEME = 'gdg_zag_theme';

  let currentLang = 'ar';
  let currentTheme = 'light';
  let activeModalItemId = null;
  let lastActiveElement = null;

  // Track Guide Drawer State
  let isDrawerOpen = false;
  let drawerState = {
    view: 'category', // 'category' | 'list' | 'brief'
    category: null,   // 'technical' | 'managerial'
    track: null,      // selected track object
    localLang: 'ar'   // local language inside Track Brief ('en' | 'ar')
  };

  // Share Modal State
  let isShareModalOpen = false;
  let isQrExpanded = false;
  let copyFeedbackTimer = null;

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

  // Track Guide Standalone Entry Button (Below Events)
  const trackGuideEntryBtn = document.getElementById('track-guide-entry-btn');
  const trackGuideEntryTitle = document.getElementById('track-guide-entry-title');
  const trackGuideEntryDesc = document.getElementById('track-guide-entry-desc');

  // Track Guide Drawer Elements
  const drawerBackdrop = document.getElementById('track-guide-drawer-backdrop');
  const drawerEl = document.getElementById('track-guide-drawer');
  const drawerContent = document.getElementById('drawer-content');

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

  // Original Registration Modal Elements
  const modalBackdrop = document.getElementById('info-modal-backdrop');
  const modalEl = document.getElementById('info-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalLeadingIcon = document.getElementById('modal-leading-icon');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body');
  const modalFooter = document.getElementById('modal-footer');
 
  // Floating Share Button & Share Modal Elements
  const floatingShareBtn = document.getElementById('floating-share-btn');
  const shareModalBackdrop = document.getElementById('share-modal-backdrop');
  const shareModalEl = document.getElementById('share-modal');
  const shareModalCloseBtn = document.getElementById('share-modal-close-btn');
  const shareModalTitle = document.getElementById('share-modal-title');
  const shareActionWeb = document.getElementById('share-action-web');
  const shareActionCopy = document.getElementById('share-action-copy');
  const shareActionQr = document.getElementById('share-action-qr');
  const shareTextLink = document.getElementById('share-text-link');
  const shareTextCopy = document.getElementById('share-text-copy');
  const shareTextQr = document.getElementById('share-text-qr');
  const shareCopyFeedback = document.getElementById('share-copy-feedback');
  const shareCopyFeedbackText = document.getElementById('share-copy-feedback-text');
  const shareQrContainer = document.getElementById('share-qr-container');
  const shareQrImg = document.getElementById('share-qr-img');
  const shareQrCaption = document.getElementById('share-qr-caption');

  // Track Discovery Journey Elements (R1–R10)
  const journeyEntryBtn = document.getElementById('journey-entry-btn');
  const journeyBadge = document.getElementById('journey-badge');
  const journeyEntryTitle = document.getElementById('journey-entry-title');
  const journeyEntryDesc = document.getElementById('journey-entry-desc');

  const journeyOverlay = document.getElementById('journey-overlay');
  const journeyModal = document.getElementById('journey-modal');
  const journeyModalBadge = document.getElementById('journey-modal-badge');
  const journeyTitle = document.getElementById('journey-title');
  const journeyModalSubtitle = document.getElementById('journey-modal-subtitle');
  const journeyCloseBtn = document.getElementById('journey-close-btn');

  const journeyStepperContainer = document.getElementById('journey-stepper-container');
  const journeyProgressFill = document.getElementById('journey-progress-fill');
  const journeyStepsIndicator = document.getElementById('journey-steps-indicator');
  const journeyStepsRow = document.getElementById('journey-steps-row');

  const journeyBody = document.getElementById('journey-body');
  const journeyFooter = document.getElementById('journey-footer');
  const journeyBtnBack = document.getElementById('journey-btn-back');
  const journeyBtnBackText = document.getElementById('journey-btn-back-text');
  const journeyBtnNext = document.getElementById('journey-btn-next');
  const journeyBtnNextText = document.getElementById('journey-btn-next-text');

  /**
   * Initialize Application
   */
  function init() {
    // 1. Language Initialization: Default to Arabic on first visit / new user
    const savedLang = localStorage.getItem(STORAGE_KEY_LANG);
    if (savedLang === 'ar' || savedLang === 'en') {
      currentLang = savedLang;
    } else {
      currentLang = 'ar'; // Default initial state for every new user
    }

    drawerState.localLang = currentLang;

    // 2. Theme Initialization: Default to Light Mode on first visit / new user
    const savedTheme = localStorage.getItem(STORAGE_KEY_THEME);
    if (savedTheme === 'light' || savedTheme === 'dark') {
      currentTheme = savedTheme;
    } else {
      currentTheme = 'light'; // Default initial state for every new user
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

    // Standalone Track Guide Button Click
    if (trackGuideEntryBtn) {
      trackGuideEntryBtn.addEventListener('click', () => {
        openTrackDrawer();
      });
    }

    // Drawer Backdrop Click (Close)
    if (drawerBackdrop) {
      drawerBackdrop.addEventListener('click', (e) => {
        if (e.target === drawerBackdrop) {
          closeTrackDrawer();
        }
      });
    }

    // Registration Modal Event Listeners
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

    // Floating Share Button & Modal Listeners
    if (floatingShareBtn) {
      floatingShareBtn.addEventListener('click', openShareModal);
    }
    if (shareModalCloseBtn) {
      shareModalCloseBtn.addEventListener('click', closeShareModal);
    }
    if (shareModalBackdrop) {
      shareModalBackdrop.addEventListener('click', (e) => {
        if (e.target === shareModalBackdrop) {
          closeShareModal();
        }
      });
    }
    if (shareActionWeb) {
      shareActionWeb.addEventListener('click', handleShareLink);
    }
    if (shareActionCopy) {
      shareActionCopy.addEventListener('click', copyPageUrl);
    }
    if (shareActionQr) {
      shareActionQr.addEventListener('click', toggleQrCode);
    }

    // Track Discovery Journey (R1–R10)
    TrackDiscoveryJourney.init();

    document.addEventListener('keydown', handleGlobalKeydown);
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

    // 9. Update Standalone Track Guide Entry Button
    if (trackGuideEntryBtn) {
      const tgAria = lang === 'ar' ? 'اعرف أكتر عن التراكات' : 'Learn More About the Tracks';
      trackGuideEntryBtn.setAttribute('aria-label', tgAria);
      trackGuideEntryBtn.setAttribute('title', tgAria);
    }

    // 9b. Update Track Discovery Journey Action Card & Synchronize Modal (R1, R4)
    if (journeyEntryBtn && t.journey && t.journey.trigger) {
      journeyEntryBtn.setAttribute('aria-label', t.journey.trigger.actionAria || t.journey.trigger.title);
      if (journeyBadge) journeyBadge.textContent = t.journey.trigger.badge;
      if (journeyEntryTitle) journeyEntryTitle.textContent = t.journey.trigger.title;
      if (journeyEntryDesc) journeyEntryDesc.textContent = t.journey.trigger.subtitle;
    }
    if (typeof TrackDiscoveryJourney !== 'undefined' && TrackDiscoveryJourney.isOpen()) {
      TrackDiscoveryJourney.setLanguage(lang);
    }

    // 10. Update Track Guide Drawer if currently open
    if (isDrawerOpen) {
      if (drawerState.view !== 'brief') {
        drawerState.localLang = lang;
      }
      renderDrawer();
    }

    // 11. Update Social Media Section
    socialTitle.textContent = t.social.sectionTitle;
    socialDesc.textContent = t.social.description;
    renderSocialLinks(t.social.platforms);

    // 12. Secondary Logo & Footer
    secondaryLogo.setAttribute('src', siteConfig.logos.secondary);
    secondaryLogo.setAttribute('alt', t.secondaryLogo.alt);
    footerText.textContent = t.footer.text;

    // 13. Registration Modal Language Synchronization (if currently open)
    if (activeModalItemId && modalBackdrop && modalBackdrop.classList.contains('open')) {
      const activeItem = t.registration.items.find(it => it.id === activeModalItemId);
      if (activeItem && activeItem.popup) {
        openInfoModal(activeItem, false);
      }
    }

    // 14. Update Floating Share Button & Share Modal Texts
    if (t.share) {
      if (floatingShareBtn) {
        floatingShareBtn.setAttribute('aria-label', t.share.buttonAria);
        floatingShareBtn.setAttribute('title', t.share.buttonAria);
      }
      if (shareModalCloseBtn) {
        shareModalCloseBtn.setAttribute('aria-label', t.share.closeAria);
      }
      if (shareModalTitle) {
        shareModalTitle.textContent = t.share.panelTitle;
      }
      if (shareActionWeb) {
        shareActionWeb.setAttribute('aria-label', t.share.shareLink);
      }
      if (shareTextLink) {
        shareTextLink.textContent = t.share.shareLink;
      }
      if (shareActionCopy) {
        shareActionCopy.setAttribute('aria-label', t.share.copyLink);
      }
      if (shareTextCopy) {
        shareTextCopy.textContent = t.share.copyLink;
      }
      if (shareActionQr) {
        shareActionQr.setAttribute('aria-label', t.share.qrCode);
      }
      if (shareTextQr) {
        shareTextQr.textContent = t.share.qrCode;
      }
      if (shareCopyFeedbackText) {
        shareCopyFeedbackText.textContent = t.share.copySuccess;
      }
      if (shareQrImg) {
        shareQrImg.setAttribute('alt', t.share.qrLabel);
      }
      if (shareQrCaption) {
        shareQrCaption.textContent = t.share.qrLabel;
      }
    }
  }

  /**
   * Render Registration Cards List (Original 5 Cards Only)
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
          openInfoModal(item, true);
        });
      }

      fragment.appendChild(card);
    });

    regCardsContainer.appendChild(fragment);
  }

  /**
   * Render Social Media Links
   */
  function renderSocialLinks(platforms) {
    socialContainer.innerHTML = '';

    const fragment = document.createDocumentFragment();

    platforms.forEach((platform) => {
      const url = siteConfig.social[platform.urlKey];
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
   * Open Track Guide Drawer (Standalone panel from Home Screen)
   */
  function openTrackDrawer() {
    if (!drawerBackdrop || !drawerEl) return;

    lastActiveElement = document.activeElement;
    isDrawerOpen = true;
    drawerState.view = 'category';
    drawerState.category = null;
    drawerState.track = null;
    drawerState.localLang = currentLang;

    renderDrawer();

    drawerBackdrop.classList.add('open');
    drawerBackdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
      const firstInteractive = drawerEl.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      if (firstInteractive) firstInteractive.focus();
    }, 50);
  }

  /**
   * Close Track Guide Drawer
   */
  function closeTrackDrawer() {
    if (!drawerBackdrop || !isDrawerOpen) return;

    drawerBackdrop.classList.remove('open');
    drawerBackdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    isDrawerOpen = false;

    if (lastActiveElement && typeof lastActiveElement.focus === 'function') {
      lastActiveElement.focus();
    }
  }

  /**
   * Render Track Guide Drawer Content according to current state:
   * View 1: category (Technical / Managerial selection)
   * View 2: list (List of 9 Technical or 7 Managerial tracks)
   * View 3: brief (Track brief, requirements, local AR/EN toggle, join options)
   */
  function renderDrawer() {
    if (!drawerContent) return;
    drawerContent.innerHTML = '';

    const t = siteConfig.translations[currentLang];
    const tracks = siteConfig.tracks || [];

    // --- VIEW 1: CATEGORY SELECTION ---
    if (drawerState.view === 'category') {
      // Header
      const header = document.createElement('div');
      header.className = 'drawer-header';
      header.innerHTML = `
        <div class="drawer-title-group">
          <h2 class="drawer-title" id="drawer-heading">${escapeHTML(t.trackGuide.categoryTitle)}</h2>
          <div class="drawer-subtitle">${escapeHTML(t.trackGuide.categorySubtitle)}</div>
        </div>
        <button type="button" class="drawer-close-btn" id="drawer-close-btn" aria-label="${escapeHTML(t.trackGuide.closeAria)}">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
        </button>
      `;

      const closeBtn = header.querySelector('#drawer-close-btn');
      closeBtn.addEventListener('click', closeTrackDrawer);

      // Body: Two Category Cards
      const grid = document.createElement('div');
      grid.className = 'category-selection-grid';

      // Card 1: Technical
      const techCard = document.createElement('button');
      techCard.type = 'button';
      techCard.className = 'category-selection-card';
      techCard.setAttribute('aria-label', t.trackGuide.techCategoryTitle);
      techCard.innerHTML = `
        <div class="card-leading-icon accent-blue" aria-hidden="true">
          ${ICONS.code}
        </div>
        <div class="card-content">
          <span class="track-category-tag tag-technical">${escapeHTML(t.trackGuide.techBadge)}</span>
          <div class="card-title">${escapeHTML(t.trackGuide.techCategoryTitle)}</div>
          <div class="card-description">${escapeHTML(t.trackGuide.techCategorySubtitle)}</div>
        </div>
        <span class="card-arrow" aria-hidden="true">${ICONS.arrowRight}</span>
      `;
      techCard.addEventListener('click', () => {
        drawerState.category = 'technical';
        drawerState.view = 'list';
        renderDrawer();
        setTimeout(() => {
          const backBtn = drawerEl.querySelector('.drawer-back-btn');
          if (backBtn) backBtn.focus();
        }, 50);
      });

      // Card 2: Managerial
      const mgrCard = document.createElement('button');
      mgrCard.type = 'button';
      mgrCard.className = 'category-selection-card';
      mgrCard.setAttribute('aria-label', t.trackGuide.mgrCategoryTitle);
      mgrCard.innerHTML = `
        <div class="card-leading-icon accent-yellow" aria-hidden="true">
          ${ICONS.management}
        </div>
        <div class="card-content">
          <span class="track-category-tag tag-managerial">${escapeHTML(t.trackGuide.mgrBadge)}</span>
          <div class="card-title">${escapeHTML(t.trackGuide.mgrCategoryTitle)}</div>
          <div class="card-description">${escapeHTML(t.trackGuide.mgrCategorySubtitle)}</div>
        </div>
        <span class="card-arrow" aria-hidden="true">${ICONS.arrowRight}</span>
      `;
      mgrCard.addEventListener('click', () => {
        drawerState.category = 'managerial';
        drawerState.view = 'list';
        renderDrawer();
        setTimeout(() => {
          const backBtn = drawerEl.querySelector('.drawer-back-btn');
          if (backBtn) backBtn.focus();
        }, 50);
      });

      grid.appendChild(techCard);
      grid.appendChild(mgrCard);

      drawerContent.appendChild(header);
      drawerContent.appendChild(grid);
      return;
    }

    // --- VIEW 2: TRACK LIST (9 Tech or 7 Mgr) ---
    if (drawerState.view === 'list') {
      const isTech = drawerState.category === 'technical';
      const categoryTitle = isTech ? t.trackGuide.techCategoryTitle : t.trackGuide.mgrCategoryTitle;
      const filteredTracks = tracks.filter(tr => tr.category === drawerState.category);

      // Header
      const header = document.createElement('div');
      header.className = 'drawer-header';
      header.innerHTML = `
        <button type="button" class="drawer-back-btn" id="drawer-back-btn" aria-label="${escapeHTML(t.trackGuide.backToCategories)}">
          ${currentLang === 'ar' ? ICONS.arrowRight : ICONS.arrowLeft}
          <span>${escapeHTML(t.trackGuide.backToCategories)}</span>
        </button>
        <div class="drawer-title-group" style="text-align: center;">
          <h2 class="drawer-title" id="drawer-heading">${escapeHTML(categoryTitle)} (${filteredTracks.length})</h2>
        </div>
        <button type="button" class="drawer-close-btn" id="drawer-close-btn" aria-label="${escapeHTML(t.trackGuide.closeAria)}">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
        </button>
      `;

      const backBtn = header.querySelector('#drawer-back-btn');
      backBtn.addEventListener('click', () => {
        drawerState.view = 'category';
        drawerState.category = null;
        renderDrawer();
        setTimeout(() => {
          const firstCat = drawerEl.querySelector('.category-selection-card');
          if (firstCat) firstCat.focus();
        }, 50);
      });

      const closeBtn = header.querySelector('#drawer-close-btn');
      closeBtn.addEventListener('click', closeTrackDrawer);

      // Body: List of tracks in this category
      const listContainer = document.createElement('div');
      listContainer.className = 'track-list-container';

      filteredTracks.forEach(track => {
        const card = document.createElement('button');
        card.type = 'button';
        card.className = 'action-card track-card';
        card.setAttribute('aria-label', `${track.name} - ${categoryTitle}`);

        const iconSvg = ICONS[track.icon] || ICONS.code;
        const accentClass = track.accent ? `accent-${track.accent}` : 'accent-blue';
        const tagClass = track.category === 'technical' ? 'tag-technical' : 'tag-managerial';
        const tagLabel = track.category === 'technical' ? t.trackGuide.technicalBadge : t.trackGuide.managerialBadge;

        // Clean concise teaser
        const briefText = track.brief[currentLang] || '';
        let teaser = briefText;
        const periodIdx = briefText.indexOf('.');
        if (periodIdx > 20 && periodIdx < 130) {
          teaser = briefText.substring(0, periodIdx + 1);
        } else if (briefText.length > 110) {
          teaser = briefText.substring(0, 105) + '...';
        }

        card.innerHTML = `
          <div class="card-leading-icon ${accentClass}" aria-hidden="true">
            ${iconSvg}
          </div>
          <div class="card-content">
            <span class="track-category-tag ${tagClass}">${escapeHTML(tagLabel)}</span>
            <div class="card-title">${escapeHTML(track.name)}</div>
            <div class="card-description">${escapeHTML(teaser)}</div>
          </div>
          <span class="card-arrow" aria-hidden="true">${ICONS.arrowRight}</span>
        `;

        card.addEventListener('click', () => {
          drawerState.track = track;
          drawerState.localLang = currentLang;
          drawerState.view = 'brief';
          renderDrawer();
          setTimeout(() => {
            const backBtn = drawerEl.querySelector('.drawer-back-btn');
            if (backBtn) backBtn.focus();
          }, 50);
        });

        listContainer.appendChild(card);
      });

      drawerContent.appendChild(header);
      drawerContent.appendChild(listContainer);
      return;
    }

    // --- VIEW 3: TRACK BRIEF ---
    if (drawerState.view === 'brief' && drawerState.track) {
      const track = drawerState.track;
      const localLang = drawerState.localLang; // 'en' or 'ar'
      const isArabicLocal = localLang === 'ar';
      const arrow = isArabicLocal ? '←' : '→';

      // Header with Back button, Local Language Switch, and Close button
      const header = document.createElement('div');
      header.className = 'drawer-header';
      header.innerHTML = `
        <button type="button" class="drawer-back-btn" id="drawer-back-btn" aria-label="${escapeHTML(t.trackGuide.backToTracks)}">
          ${currentLang === 'ar' ? ICONS.arrowRight : ICONS.arrowLeft}
          <span>${escapeHTML(t.trackGuide.backToTracks)}</span>
        </button>
        <button type="button" class="drawer-lang-btn" id="drawer-local-lang-toggle" aria-label="Switch brief language">
          ${isArabicLocal ? 'English' : 'العربية'}
        </button>
        <button type="button" class="drawer-close-btn" id="drawer-close-btn" aria-label="${escapeHTML(t.trackGuide.closeAria)}">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
        </button>
      `;

      const backBtn = header.querySelector('#drawer-back-btn');
      backBtn.addEventListener('click', () => {
        drawerState.view = 'list';
        drawerState.track = null;
        renderDrawer();
        setTimeout(() => {
          const firstTrack = drawerEl.querySelector('.track-card');
          if (firstTrack) firstTrack.focus();
        }, 50);
      });

      // LOCAL language toggle: modifies ONLY Track Brief language & direction
      const localLangBtn = header.querySelector('#drawer-local-lang-toggle');
      localLangBtn.addEventListener('click', () => {
        drawerState.localLang = isArabicLocal ? 'en' : 'ar';
        renderDrawer();
      });

      const closeBtn = header.querySelector('#drawer-close-btn');
      closeBtn.addEventListener('click', closeTrackDrawer);

      // Body: Brief view container with local direction
      const briefView = document.createElement('div');
      briefView.className = 'track-brief-view';
      briefView.setAttribute('dir', isArabicLocal ? 'rtl' : 'ltr');

      const accentClass = track.accent ? `accent-${track.accent}` : 'accent-blue';
      const tagClass = track.category === 'technical' ? 'tag-technical' : 'tag-managerial';
      const tagLabel = track.category === 'technical'
        ? (isArabicLocal ? 'تراك تقني' : 'Technical Track')
        : (isArabicLocal ? 'تراك إداري' : 'Managerial Track');

      // Track Title & Category
      const briefHeader = document.createElement('div');
      briefHeader.className = 'track-brief-header';
      briefHeader.innerHTML = `
        <div class="card-leading-icon ${accentClass}" aria-hidden="true">
          ${ICONS[track.icon] || ICONS.code}
        </div>
        <div class="card-content">
          <span class="track-category-tag ${tagClass}">${escapeHTML(tagLabel)}</span>
          <h3 class="card-title" id="drawer-heading" style="font-size: 1.15rem;">${escapeHTML(track.name)}</h3>
        </div>
      `;

      // Brief text
      const briefParagraph = document.createElement('p');
      briefParagraph.className = 'track-brief-body';
      briefParagraph.textContent = track.brief[localLang] || '';

      briefView.appendChild(briefHeader);
      briefView.appendChild(briefParagraph);

      // Requirements ONLY if applicable
      if (track.requirements && track.requirements[localLang] && Array.isArray(track.requirements[localLang]) && track.requirements[localLang].length > 0) {
        const reqTitle = isArabicLocal ? 'المتطلبات' : 'Requirements';
        const reqBox = document.createElement('div');
        reqBox.className = 'track-requirements-box';
        reqBox.innerHTML = `
          <div class="track-requirements-title">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
            <span>${escapeHTML(reqTitle)}</span>
          </div>
          <ul class="track-requirements-list">
            ${track.requirements[localLang].map(r => `<li>${escapeHTML(r)}</li>`).join('')}
          </ul>
        `;
        briefView.appendChild(reqBox);
      }

      // Registration Options
      // Technical: [ Apply as a Student ] + [ Join Technical Core Team ]
      // Managerial: ONLY [ Join Managerial Core Team ]
      // NO Leads option!
      const actions = document.createElement('div');
      actions.className = 'track-modal-actions';

      if (track.category === 'technical') {
        // 1. Member CTA (Technical only)
        const memberBtnText = isArabicLocal ? 'التقديم كطالب' : 'Apply as a Student';
        const memberAriaDesc = isArabicLocal ? 'استمارة التقديم كطالب في التراك' : 'Form to apply as a student in this track';

        const memberBtn = document.createElement('a');
        memberBtn.href = siteConfig.links.becomeMember;
        memberBtn.target = '_blank';
        memberBtn.rel = 'noopener noreferrer';
        memberBtn.className = 'fb-cta-btn modal-cta-btn';
        memberBtn.setAttribute('aria-label', `${memberBtnText} (${memberAriaDesc})`);
        memberBtn.innerHTML = `<span>${escapeHTML(memberBtnText)}</span><span class="btn-arrow">${arrow}</span>`;
        actions.appendChild(memberBtn);

        // 2. Technical Core Team CTA
        const techCoreText = isArabicLocal ? 'الانضمام للفريق التقني' : 'Join Technical Core Team';
        const techCoreAria = isArabicLocal ? 'استمارة التقديم للفريق التقني' : 'Form to apply for Technical Core Team';

        const coreBtn = document.createElement('a');
        coreBtn.href = siteConfig.links.coreTechnical;
        coreBtn.target = '_blank';
        coreBtn.rel = 'noopener noreferrer';
        coreBtn.className = 'fb-cta-btn modal-cta-btn modal-cta-btn-secondary';
        coreBtn.setAttribute('aria-label', `${techCoreText} (${techCoreAria})`);
        coreBtn.innerHTML = `<span>${escapeHTML(techCoreText)}</span><span class="btn-arrow">${arrow}</span>`;
        actions.appendChild(coreBtn);
      } else {
        // Managerial: ONLY Core Team CTA
        const mgrCoreText = isArabicLocal ? 'الانضمام للفريق الإداري' : 'Join Managerial Core Team';
        const mgrCoreAria = isArabicLocal ? 'استمارة التقديم للفريق الإداري' : 'Form to apply for Managerial Core Team';

        const coreBtn = document.createElement('a');
        coreBtn.href = siteConfig.links.coreManagerial;
        coreBtn.target = '_blank';
        coreBtn.rel = 'noopener noreferrer';
        coreBtn.className = 'fb-cta-btn modal-cta-btn';
        coreBtn.setAttribute('aria-label', `${mgrCoreText} (${mgrCoreAria})`);
        coreBtn.innerHTML = `<span>${escapeHTML(mgrCoreText)}</span><span class="btn-arrow">${arrow}</span>`;
        actions.appendChild(coreBtn);
      }

      briefView.appendChild(actions);

      drawerContent.appendChild(header);
      drawerContent.appendChild(briefView);
      return;
    }
  }

  /**
   * Subtle Scroll Parallax on Dot Grid Background Layer
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

    updateParallax();
  }

  /**
   * Open Information Modal for Original Registration Cards
   */
  function openInfoModal(item, shouldFocus = true) {
    if (!modalBackdrop || !item || !item.popup) return;

    activeModalItemId = item.id;
    if (shouldFocus) {
      lastActiveElement = document.activeElement;
    }

    const accentClass = item.accent ? `accent-${item.accent}` : 'accent-blue';
    modalLeadingIcon.className = `card-leading-icon ${accentClass}`;
    modalLeadingIcon.innerHTML = ICONS[item.icon] || ICONS.user;

    modalTitle.textContent = item.popup.title;
    modalBody.innerHTML = item.popup.description;

    const url = siteConfig.links[item.urlKey] || '#';
    const ctaAriaDesc = currentLang === 'ar' ? 'فتح استمارة التسجيل' : 'Open registration form';
    const arrow = currentLang === 'ar' ? '←' : '→';

    let ctaBtn = document.getElementById('modal-cta-btn');
    if (!ctaBtn || !modalFooter.contains(ctaBtn)) {
      modalFooter.innerHTML = `
        <a id="modal-cta-btn" href="${url}" target="_blank" rel="noopener noreferrer" class="fb-cta-btn modal-cta-btn" aria-label="${escapeHTML(item.popup.ctaText)} (${ctaAriaDesc})">
          <span id="modal-cta-text">${escapeHTML(item.popup.ctaText)}</span>
          <span class="btn-arrow" id="modal-cta-arrow">${arrow}</span>
        </a>
      `;
    } else {
      ctaBtn.setAttribute('href', url);
      ctaBtn.setAttribute('aria-label', `${item.popup.ctaText} (${ctaAriaDesc})`);
      const ctaText = document.getElementById('modal-cta-text');
      if (ctaText) ctaText.textContent = item.popup.ctaText;
      const ctaArrow = document.getElementById('modal-cta-arrow');
      if (ctaArrow) ctaArrow.textContent = arrow;
    }

    const t = siteConfig.translations[currentLang];
    if (t && t.modal && t.modal.closeAria) {
      modalCloseBtn.setAttribute('aria-label', t.modal.closeAria);
    }

    modalBackdrop.classList.add('open');
    modalBackdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    if (shouldFocus) {
      setTimeout(() => {
        if (modalCloseBtn) modalCloseBtn.focus();
      }, 50);
    }
  }

  /**
   * Close Information Modal for Registration Cards
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
   * Handle Global Keydown (Escape key & Focus Trapping)
   */
  function handleGlobalKeydown(e) {
    // 0. If Track Discovery Journey is Open
    if (typeof TrackDiscoveryJourney !== 'undefined' && TrackDiscoveryJourney.isOpen()) {
      TrackDiscoveryJourney.handleKeydown(e);
      return;
    }

    // 1. If Track Guide Drawer is Open
    if (isDrawerOpen) {
      if (e.key === 'Escape') {
        e.preventDefault();
        closeTrackDrawer();
        return;
      }

      if (e.key === 'Tab') {
        const focusable = drawerEl.querySelectorAll('button:not([disabled]), [href]:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])');
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
      return;
    }

    // 2. If Registration Modal is Open
    if (modalBackdrop && modalBackdrop.classList.contains('open')) {
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
      return;
    }

    // 3. If Share Modal is Open
    if (isShareModalOpen && shareModalBackdrop && shareModalBackdrop.classList.contains('open')) {
      if (e.key === 'Escape') {
        e.preventDefault();
        closeShareModal();
        return;
      }

      if (e.key === 'Tab') {
        const focusable = shareModalEl.querySelectorAll('button:not([disabled]), [href]:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])');
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
  }

  /**
   * Open Share Modal
   */
  function openShareModal() {
    if (!shareModalBackdrop) return;

    lastActiveElement = (document.activeElement && document.activeElement !== document.body)
      ? document.activeElement
      : floatingShareBtn;
    isShareModalOpen = true;

    // Reset temporary states
    if (shareCopyFeedback) {
      shareCopyFeedback.style.display = 'none';
    }
    if (copyFeedbackTimer) {
      clearTimeout(copyFeedbackTimer);
      copyFeedbackTimer = null;
    }
    isQrExpanded = false;
    if (shareQrContainer) {
      shareQrContainer.style.display = 'none';
    }
    if (shareActionQr) {
      shareActionQr.setAttribute('aria-expanded', 'false');
    }

    shareModalBackdrop.classList.add('open');
    shareModalBackdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
      if (shareModalCloseBtn) shareModalCloseBtn.focus();
    }, 50);
  }

  /**
   * Close Share Modal
   */
  function closeShareModal() {
    if (!shareModalBackdrop || !isShareModalOpen) return;

    shareModalBackdrop.classList.remove('open');
    shareModalBackdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    isShareModalOpen = false;

    if (copyFeedbackTimer) {
      clearTimeout(copyFeedbackTimer);
      copyFeedbackTimer = null;
    }

    if (lastActiveElement && typeof lastActiveElement.focus === 'function' && lastActiveElement !== document.body) {
      lastActiveElement.focus();
    } else if (floatingShareBtn && typeof floatingShareBtn.focus === 'function') {
      floatingShareBtn.focus();
    }
  }

  /**
   * Action 1: Web Share API (navigator.share) with fallback to Copy URL
   */
  function handleShareLink() {
    const url = window.location.href;
    const t = siteConfig.translations[currentLang].share;
    const shareData = {
      title: t.webShareTitle || 'GDG on Campus – Zagazig University',
      text: currentLang === 'ar' ? 'انضم إلى مجتمع GDG on Campus بجامعة الزقازيق وابدأ رحلتك التقنية!' : 'Join the GDG on Campus Zagazig University community!',
      url: url
    };

    if (navigator.share) {
      navigator.share(shareData).catch((err) => {
        // If aborted/cancelled by user, do nothing. Otherwise fallback to copy.
        if (err && err.name !== 'AbortError') {
          copyPageUrl();
        }
      });
    } else {
      copyPageUrl();
    }
  }

  /**
   * Action 2: Copy Link to Clipboard with ~2.5s inline temporary feedback
   */
  function copyPageUrl() {
    const url = window.location.href;

    const showSuccess = () => {
      if (!shareCopyFeedback) return;
      const t = siteConfig.translations[currentLang].share;
      if (shareCopyFeedbackText) {
        shareCopyFeedbackText.textContent = t.copySuccess;
      }
      shareCopyFeedback.style.display = 'flex';

      if (copyFeedbackTimer) {
        clearTimeout(copyFeedbackTimer);
      }
      copyFeedbackTimer = setTimeout(() => {
        if (shareCopyFeedback) {
          shareCopyFeedback.style.display = 'none';
        }
        copyFeedbackTimer = null;
      }, 2500);
    };

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url).then(showSuccess).catch(() => {
        fallbackCopyText(url, showSuccess);
      });
    } else {
      fallbackCopyText(url, showSuccess);
    }
  }

  /**
   * Fallback text copy using temporary textarea
   */
  function fallbackCopyText(text, callback) {
    try {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.top = '0';
      textArea.style.left = '0';
      textArea.style.opacity = '0';
      textArea.style.pointerEvents = 'none';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    } catch (e) {
      // ignore
    } finally {
      if (typeof callback === 'function') callback();
    }
  }

  /**
   * Action 3: Toggle QR Code Display
   */
  function toggleQrCode() {
    if (!shareQrContainer) return;

    isQrExpanded = !isQrExpanded;
    shareQrContainer.style.display = isQrExpanded ? 'flex' : 'none';
    if (shareActionQr) {
      shareActionQr.setAttribute('aria-expanded', isQrExpanded ? 'true' : 'false');
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

  /**
   * --------------------------------------------------------------------------
   * Track Discovery Journey Interactive Wizard Controller (R1–R10)
   * --------------------------------------------------------------------------
   */
  const TrackDiscoveryJourney = (function () {
    const state = {
      isOpen: false,
      step: 1, // 1: Language, 2: Field, 3: Interests, 4: Track, 5: Experience (Tech only), 6: Result
      lang: 'ar',
      field: null, // 'technical' | 'managerial'
      selectedKeywords: [],
      selectedTrackId: null,
      experience: null, // 'beginner' | 'experienced' (Technical only)
      viewingBriefTrackId: null,
      isBrowsingAlternatives: false,
      lastActiveElement: null
    };

    let toastTimer = null;

    /**
     * Show lightweight top toast notification
     */
    function showToast(msg) {
      if (!journeyModal) return;
      let toastEl = journeyModal.querySelector('#journey-toast');
      if (!toastEl) {
        toastEl = document.createElement('div');
        toastEl.id = 'journey-toast';
        toastEl.className = 'journey-toast';
        toastEl.setAttribute('role', 'status');
        toastEl.setAttribute('aria-live', 'polite');
        journeyModal.appendChild(toastEl);
      }
      toastEl.textContent = msg;
      toastEl.classList.add('show');

      if (toastTimer) clearTimeout(toastTimer);
      toastTimer = setTimeout(() => {
        if (toastEl) toastEl.classList.remove('show');
        toastTimer = null;
      }, 2500);
    }

    /**
     * Initialize DOM event listeners for Track Discovery Journey
     */
    function init() {
      if (journeyEntryBtn) {
        journeyEntryBtn.addEventListener('click', open);
      }
      if (journeyCloseBtn) {
        journeyCloseBtn.addEventListener('click', close);
      }
      if (journeyOverlay) {
        journeyOverlay.addEventListener('click', (e) => {
          if (e.target === journeyOverlay) {
            close();
          }
        });
      }
      if (journeyBtnBack) {
        journeyBtnBack.addEventListener('click', handleBack);
      }
      if (journeyBtnNext) {
        journeyBtnNext.addEventListener('click', handleNext);
      }
    }

    /**
     * Open Journey Overlay & Lock Body Scroll
     */
    function open() {
      if (!journeyOverlay || !journeyModal) return;

      if (checkpointTimer) {
        clearTimeout(checkpointTimer);
        checkpointTimer = null;
      }

      state.lastActiveElement = document.activeElement;
      state.isOpen = true;
      state.isCheckpoint = false;
      state.step = 1;
      state.lang = currentLang; // Default to current global site language
      state.field = null;
      state.selectedKeywords = [];
      state.selectedTrackId = null;
      state.experience = null;
      state.viewingBriefTrackId = null;
      state.isBrowsingAlternatives = false;

      // Stop attention animation upon interaction
      if (journeyEntryBtn) {
        journeyEntryBtn.classList.remove('animate-attention');
      }

      // Lock body scroll
      document.body.style.overflow = 'hidden';

      // Reset any previous theme accents
      journeyModal.classList.remove('journey-theme-technical', 'journey-theme-managerial');

      // Show overlay
      journeyOverlay.classList.add('open');
      journeyOverlay.setAttribute('aria-hidden', 'false');

      render();

      setTimeout(() => {
        if (journeyCloseBtn) {
          journeyCloseBtn.focus();
        }
      }, 50);
    }

    /**
     * Close Journey Overlay & Restore Focus
     */
    function close() {
      if (!journeyOverlay || !state.isOpen) return;

      if (checkpointTimer) {
        clearTimeout(checkpointTimer);
        checkpointTimer = null;
      }

      journeyOverlay.classList.remove('open');
      journeyOverlay.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      state.isOpen = false;
      state.isCheckpoint = false;

      const elementToFocus = (state.lastActiveElement && typeof state.lastActiveElement.focus === 'function' && state.lastActiveElement !== document.body)
        ? state.lastActiveElement
        : journeyEntryBtn;

      if (elementToFocus && typeof elementToFocus.focus === 'function') {
        elementToFocus.focus();
      }
    }

    /**
     * Set Language for Journey
     */
    function setLanguage(newLang) {
      if (newLang !== 'ar' && newLang !== 'en') return;
      state.lang = newLang;
      render();
    }

    /**
     * Set Field (Technical or Managerial)
     */
    function setField(newField) {
      if (newField !== 'technical' && newField !== 'managerial') return;
      // Sanitize selections if field changes
      if (state.field && state.field !== newField) {
        state.selectedKeywords = [];
        state.selectedTrackId = null;
        state.experience = null;
        state.viewingBriefTrackId = null;
        state.isBrowsingAlternatives = false;
      }
      state.field = newField;
      render();
    }

    /**
     * Toggle Keyword Selection (1 to 4 allowed in exact selection order)
     */
    function toggleKeyword(kwId) {
      const index = state.selectedKeywords.indexOf(kwId);
      if (index !== -1) {
        state.selectedKeywords.splice(index, 1);
      } else {
        if (state.selectedKeywords.length >= 4) {
          const toastMsg = state.lang === 'ar'
            ? 'وصلت للحد الأقصى. اختار لحد 4 اهتمامات فقط.'
            : 'Maximum 4 interests. Remove one to choose another.';
          showToast(toastMsg);
          return { success: false, count: state.selectedKeywords.length, error: 'MAX_LIMIT_REACHED' };
        }
        state.selectedKeywords.push(kwId);
      }

      renderStep3();
      updateFooterButtons();
      return { success: true, count: state.selectedKeywords.length };
    }

    /**
     * Select Track
     */
    function selectTrack(trackId) {
      state.selectedTrackId = trackId;
      renderStepBody();
      updateFooterButtons();
    }

    let checkpointTimer = null;

    /**
     * Trigger Final Checkpoint & Auto-Open Google Form
     */
    function triggerCheckpoint(targetUrl) {
      if (!targetUrl) return;
      if (checkpointTimer) {
        clearTimeout(checkpointTimer);
        checkpointTimer = null;
      }
      state.isCheckpoint = true;

      renderTheme();

      const welcomeMsg = state.lang === 'ar'
        ? 'أهلاً بيك في عيلة GDG!'
        : 'Welcome to the GDG family!';

      if (journeyTitle) journeyTitle.textContent = welcomeMsg;
      if (journeyModalSubtitle) journeyModalSubtitle.textContent = '';

      // Set Stepper to 100% completed
      if (journeyProgressFill) journeyProgressFill.style.width = '100%';
      if (journeyStepperContainer) journeyStepperContainer.setAttribute('aria-valuenow', '100');
      if (journeyStepsRow) {
        const nodes = journeyStepsRow.querySelectorAll('.journey-step-node');
        nodes.forEach(node => node.classList.add('completed'));
        const connectors = journeyStepsRow.querySelectorAll('.journey-step-connector');
        connectors.forEach(conn => conn.classList.add('completed'));
      }

      // Hide footer navigation buttons during checkpoint
      if (journeyBtnBack) journeyBtnBack.style.display = 'none';
      if (journeyBtnNext) journeyBtnNext.style.display = 'none';

      // Render Checkpoint View
      journeyBody.innerHTML = `
        <div class="journey-step-view journey-checkpoint-view" role="status" aria-live="polite">
          <div class="journey-checkmark-wrapper">
            <svg class="journey-checkmark-svg" viewBox="0 0 52 52" aria-hidden="true">
              <circle class="checkmark-circle" cx="26" cy="26" r="23" fill="none"/>
              <path class="checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
            </svg>
          </div>
          <h3 class="journey-checkpoint-title">${escapeHTML(welcomeMsg)}</h3>
        </div>
      `;

      checkpointTimer = setTimeout(() => {
        try {
          window.open(targetUrl, '_blank', 'noopener,noreferrer');
        } catch (e) {
          window.location.href = targetUrl;
        }
        close();
        checkpointTimer = null;
      }, 2000);
    }

    /**
     * Set Technical Experience Level ('beginner' or 'experienced')
     */
    function setExperience(exp) {
      if (exp !== 'beginner' && exp !== 'experienced') return;
      state.experience = exp;
      const targetUrl = exp === 'experienced'
        ? siteConfig.links.coreTechnical
        : siteConfig.links.becomeMember;
      triggerCheckpoint(targetUrl);
    }

    /**
     * Start Over (Resets wizard to Step 1 while strictly preserving language)
     */
    function startOver() {
      if (checkpointTimer) {
        clearTimeout(checkpointTimer);
        checkpointTimer = null;
      }
      state.isCheckpoint = false;
      const retainedLang = state.lang;
      state.step = 1;
      state.field = null;
      state.selectedKeywords = [];
      state.selectedTrackId = null;
      state.experience = null;
      state.viewingBriefTrackId = null;
      state.isBrowsingAlternatives = false;
      state.lang = retainedLang;

      journeyModal.classList.remove('journey-theme-technical', 'journey-theme-managerial');
      render();

      setTimeout(() => {
        if (journeyBody) journeyBody.focus();
      }, 50);
    }

    /**
     * Check if user can advance from current step
     */
    function canProceed() {
      switch (state.step) {
        case 1:
          return state.lang === 'ar' || state.lang === 'en';
        case 2:
          return state.field === 'technical' || state.field === 'managerial';
        case 3:
          return state.selectedKeywords.length >= 1 && state.selectedKeywords.length <= 4;
        case 4:
          return state.selectedTrackId !== null;
        case 5:
          return state.field === 'managerial' || state.experience !== null;
        default:
          return false;
      }
    }

    /**
     * Advance to Next Step
     */
    function handleNext() {
      if (!canProceed()) return;

      // In Step 4, Managerial triggers Checkpoint and opens Managerial Core Team form
      if (state.step === 4 && state.field === 'managerial') {
        state.viewingBriefTrackId = null;
        triggerCheckpoint(siteConfig.links.coreManagerial);
        return;
      }

      if (state.step === 5) {
        state.viewingBriefTrackId = null;
        const targetUrl = state.experience === 'experienced'
          ? siteConfig.links.coreTechnical
          : siteConfig.links.becomeMember;
        triggerCheckpoint(targetUrl);
        return;
      }

      if (state.step < 5) {
        state.step++;
        state.viewingBriefTrackId = null;
        render();
      }
    }

    /**
     * Navigate Back
     */
    function handleBack() {
      if (state.isCheckpoint) return;

      // If viewing track brief inside Step 4, back returns to recommendations list
      if (state.step === 4 && state.viewingBriefTrackId) {
        state.viewingBriefTrackId = null;
        render();
        return;
      }

      if (state.step > 1) {
        state.step--;
        state.viewingBriefTrackId = null;
        render();
        return;
      }

      // Step 1 Back dismisses overlay
      close();
    }

    /**
     * Deterministic Recommendation Engine (R7)
     */
    function getRecommendations() {
      if (!state.field) return [];
      const field = state.field;
      const keywords = (siteConfig.journeyKeywords && siteConfig.journeyKeywords[field]) || [];
      const candidateTracks = (siteConfig.tracks || []).filter(t => t.category === field);

      const trackScores = candidateTracks.map((track, originalIndex) => {
        let score = 0;
        state.selectedKeywords.forEach(kwId => {
          const kw = keywords.find(k => k.id === kwId);
          if (kw) {
            let weight = 0;
            if (kw.weights && typeof kw.weights[track.id] === 'number') {
              weight = kw.weights[track.id];
            } else if (kw.tracks && typeof kw.tracks[track.id] === 'number') {
              weight = kw.tracks[track.id];
            } else if (kw.tracks && Array.isArray(kw.tracks) && kw.tracks.includes(track.id)) {
              weight = 1;
            }
            score += weight;
          }
        });
        return { track, score, originalIndex };
      });

      // Deterministic sort: descending by score, tie-break by original catalog order
      trackScores.sort((a, b) => {
        if (b.score !== a.score) {
          return b.score - a.score;
        }
        return a.originalIndex - b.originalIndex;
      });

      // Extract top 3 with localized badge labels
      return trackScores.slice(0, 3).map((item, rank) => {
        let badgeTextEn = 'Suggested Alternative';
        let badgeTextAr = 'مسار بديل مقترح';
        if (item.score > 0) {
          if (rank === 0) {
            badgeTextEn = 'Top Match for Your Interests';
            badgeTextAr = 'أعلى تطابق لاهتماماتك';
          } else {
            badgeTextEn = 'Good Match for Your Interests';
            badgeTextAr = 'مناسب لاهتماماتك';
          }
        }
        return {
          track: item.track,
          score: item.score,
          rank: rank + 1,
          badge: {
            en: badgeTextEn,
            ar: badgeTextAr
          }
        };
      });
    }

    /**
     * Master Render
     */
    function render() {
      renderTheme();
      renderHeader();
      renderStepper();
      renderStepBody();
      updateFooterButtons();
    }

    /**
     * Render Dynamic Theme Accents (R5)
     */
    function renderTheme() {
      if (!journeyModal) return;
      if (state.field === 'technical') {
        journeyModal.classList.add('journey-theme-technical');
        journeyModal.classList.remove('journey-theme-managerial');
      } else if (state.field === 'managerial') {
        journeyModal.classList.add('journey-theme-managerial');
        journeyModal.classList.remove('journey-theme-technical');
      } else {
        journeyModal.classList.remove('journey-theme-technical', 'journey-theme-managerial');
      }
    }

    /**
     * Render Modal Header
     */
    function renderHeader() {
      if (!journeyModal) return;
      const t = siteConfig.translations[state.lang];

      journeyModal.setAttribute('dir', state.lang === 'ar' ? 'rtl' : 'ltr');
      journeyModal.setAttribute('lang', state.lang);

      if (journeyModalBadge) {
        journeyModalBadge.textContent = t.journey.trigger.badge;
      }
      if (journeyCloseBtn) {
        journeyCloseBtn.setAttribute('aria-label', t.journey.navigation.closeAria);
      }

      let title = '';
      let subtitle = '';
      switch (state.step) {
        case 1:
          title = t.journey.step1.title;
          subtitle = t.journey.step1.subtitle;
          break;
        case 2:
          title = t.journey.step2.title;
          subtitle = t.journey.step2.subtitle;
          break;
        case 3:
          title = t.journey.step3.title;
          subtitle = t.journey.step3.subtitle;
          break;
        case 4:
          if (state.viewingBriefTrackId) {
            title = t.journey.brief.briefTitle;
            subtitle = '';
          } else {
            title = t.journey.step4.title;
            subtitle = t.journey.step4.subtitle;
          }
          break;
        case 5:
          title = t.journey.experience.title;
          subtitle = t.journey.experience.subtitle;
          break;
      }

      if (journeyTitle) journeyTitle.textContent = title;
      if (journeyModalSubtitle) journeyModalSubtitle.textContent = subtitle;
    }

    /**
     * Render Dynamic Stepper Progress Indicator (R3)
     */
    function renderStepper() {
      if (!journeyStepperContainer || !journeyProgressFill || !journeyStepsRow) return;
      const t = siteConfig.translations[state.lang];
      const totalSteps = state.field === 'managerial' ? 4 : 5;
      const currentStepVal = Math.min(state.step, totalSteps);

      journeyStepperContainer.setAttribute('aria-valuenow', String(currentStepVal));
      journeyStepperContainer.setAttribute('aria-valuemin', '1');
      journeyStepperContainer.setAttribute('aria-valuemax', String(totalSteps));

      const fillPercent = Math.min(100, Math.round((currentStepVal / totalSteps) * 100));
      journeyProgressFill.style.width = fillPercent + '%';

      const stepDefs = state.field === 'managerial'
        ? [
            { num: 1, label: t.journey.steps.language },
            { num: 2, label: t.journey.steps.field },
            { num: 3, label: t.journey.steps.interests },
            { num: 4, label: t.journey.steps.track }
          ]
        : [
            { num: 1, label: t.journey.steps.language },
            { num: 2, label: t.journey.steps.field },
            { num: 3, label: t.journey.steps.interests },
            { num: 4, label: t.journey.steps.track },
            { num: 5, label: t.journey.steps.experience }
          ];

      let rowHtml = '';
      stepDefs.forEach((s, idx) => {
        const isCompleted = state.step > s.num;
        const isActive = state.step === s.num;
        const nodeClass = 'journey-step-node' + (isCompleted ? ' completed' : '') + (isActive ? ' active' : '');
        const circleContent = isCompleted
          ? `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>`
          : `${s.num}`;

        rowHtml += `
          <div class="${nodeClass}" data-step="${s.num}">
            <div class="step-circle" aria-hidden="true">${circleContent}</div>
            <span class="step-text">${escapeHTML(s.label)}</span>
          </div>
        `;

        if (idx < stepDefs.length - 1) {
          const connCompleted = state.step > (idx + 1);
          rowHtml += `<div class="journey-step-connector ${connCompleted ? 'completed' : ''}" aria-hidden="true"></div>`;
        }
      });

      journeyStepsRow.innerHTML = rowHtml;
    }

    /**
     * Render Step Body Content
     */
    function renderStepBody() {
      if (!journeyBody) return;
      switch (state.step) {
        case 1:
          renderStep1();
          break;
        case 2:
          renderStep2();
          break;
        case 3:
          renderStep3();
          break;
        case 4:
          renderStep4();
          break;
        case 5:
          renderStep5();
          break;
      }
    }

    /**
     * Step 1: Language Selection View (R4)
     */
    function renderStep1() {
      const t = siteConfig.translations[state.lang];
      journeyBody.innerHTML = `
        <div class="journey-step-view" data-step="1">
          <h3 class="journey-step-prompt">${escapeHTML(t.journey.step1.title)}</h3>
          <p class="journey-step-hint">${escapeHTML(t.journey.step1.subtitle)}</p>
          <div class="journey-choices-list" role="radiogroup" aria-label="${escapeHTML(t.journey.step1.title)}">
            <button type="button" class="journey-choice-card ${state.lang === 'ar' ? 'selected' : ''}" data-choice-lang="ar" role="radio" aria-checked="${state.lang === 'ar'}">
              <div class="journey-choice-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24"><path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"/></svg>
              </div>
              <div class="journey-choice-content">
                <div class="journey-choice-title">العربية</div>
                <div class="journey-choice-desc">تصفح الرحلة باللغة العربية مع واجهة تدعم اليمين إلى اليسار</div>
              </div>
            </button>
            <button type="button" class="journey-choice-card ${state.lang === 'en' ? 'selected' : ''}" data-choice-lang="en" role="radio" aria-checked="${state.lang === 'en'}">
              <div class="journey-choice-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24"><path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"/></svg>
              </div>
              <div class="journey-choice-content">
                <div class="journey-choice-title">English</div>
                <div class="journey-choice-desc">Browse the journey in English with left-to-right orientation</div>
              </div>
            </button>
          </div>
        </div>
      `;

      const cards = journeyBody.querySelectorAll('.journey-choice-card');
      cards.forEach(card => {
        card.addEventListener('click', () => {
          const chosenLang = card.getAttribute('data-choice-lang');
          state.lang = chosenLang;
          state.step = 2;
          render();
        });
      });
    }

    /**
     * Step 2: Field Selection View (R5)
     */
    function renderStep2() {
      const t = siteConfig.translations[state.lang];
      journeyBody.innerHTML = `
        <div class="journey-step-view" data-step="2">
          <h3 class="journey-step-prompt">${escapeHTML(t.journey.step2.title)}</h3>
          <p class="journey-step-hint">${escapeHTML(t.journey.step2.subtitle)}</p>
          <div class="journey-choices-list" role="radiogroup" aria-label="${escapeHTML(t.journey.step2.title)}">
            <button type="button" class="journey-choice-card ${state.field === 'technical' ? 'selected' : ''}" data-choice-field="technical" role="radio" aria-checked="${state.field === 'technical'}">
              <div class="journey-choice-icon" style="color: #4285F4;" aria-hidden="true">
                ${ICONS.code}
              </div>
              <div class="journey-choice-content">
                <div class="journey-choice-title">${escapeHTML(t.journey.fields.technical.title)}</div>
                <div class="journey-choice-desc">${escapeHTML(t.journey.fields.technical.desc)}</div>
              </div>
              <span class="journey-choice-badge">${escapeHTML(t.journey.fields.technical.badge)}</span>
            </button>
            <button type="button" class="journey-choice-card ${state.field === 'managerial' ? 'selected' : ''}" data-choice-field="managerial" role="radio" aria-checked="${state.field === 'managerial'}">
              <div class="journey-choice-icon" style="color: #FBBC05;" aria-hidden="true">
                ${ICONS.management}
              </div>
              <div class="journey-choice-content">
                <div class="journey-choice-title">${escapeHTML(t.journey.fields.managerial.title)}</div>
                <div class="journey-choice-desc">${escapeHTML(t.journey.fields.managerial.desc)}</div>
              </div>
              <span class="journey-choice-badge">${escapeHTML(t.journey.fields.managerial.badge)}</span>
            </button>
          </div>
        </div>
      `;

      const cards = journeyBody.querySelectorAll('.journey-choice-card');
      cards.forEach(card => {
        card.addEventListener('click', () => {
          const chosenField = card.getAttribute('data-choice-field');
          setField(chosenField);
          state.step = 3;
          render();
        });
      });
    }

    /**
     * Step 3: Multi-Select Interest Chips & Validation View (R6)
     */
    function renderStep3() {
      const t = siteConfig.translations[state.lang];
      const keywords = (siteConfig.journeyKeywords && siteConfig.journeyKeywords[state.field]) || [];
      const count = state.selectedKeywords.length;
      const isValid = count >= 1 && count <= 4;
      const orderBadges = ['①', '②', '③', '④'];

      journeyBody.innerHTML = `
        <div class="journey-step-view" data-step="3">
          <h3 class="journey-step-prompt">${escapeHTML(t.journey.step3.title)}</h3>
          <p class="journey-step-hint">${escapeHTML(t.journey.step3.subtitle)}</p>
          <div class="journey-chips-grid" role="group" aria-label="${escapeHTML(t.journey.step3.title)}">
            ${keywords.map(kw => {
              const index = state.selectedKeywords.indexOf(kw.id);
              const isSelected = index !== -1;
              const badgeSymbol = isSelected ? (orderBadges[index] || (index + 1)) : '';
              return `
                <button type="button" class="journey-chip ${isSelected ? 'selected' : ''}" data-kw-id="${escapeHTML(kw.id)}" aria-pressed="${isSelected}">
                  ${isSelected ? `<span class="chip-order-badge" aria-hidden="true">${badgeSymbol}</span>` : ''}
                  <span>${escapeHTML(kw.label[state.lang] || kw.id)}</span>
                </button>
              `;
            }).join('')}
          </div>
          <div class="journey-chips-counter ${isValid ? 'valid' : ''}" id="journey-chips-counter">
            ${escapeHTML(t.journey.step3.counterText.replace('{count}', count))} ${escapeHTML(t.journey.step3.counterHint)}
          </div>
        </div>
      `;

      const chips = journeyBody.querySelectorAll('.journey-chip');
      chips.forEach(chip => {
        chip.addEventListener('click', () => {
          const kwId = chip.getAttribute('data-kw-id');
          toggleKeyword(kwId);
        });
      });
    }

    /**
     * Step 4: Deterministic Recommendations View & Step 4.5 Brief (R7, R8)
     */
    function renderStep4() {
      const t = siteConfig.translations[state.lang];

      // If viewing brief (Step 4.5)
      if (state.viewingBriefTrackId) {
        const track = (siteConfig.tracks || []).find(tr => tr.id === state.viewingBriefTrackId);
        if (!track) {
          state.viewingBriefTrackId = null;
          render();
          return;
        }

        const categoryLabel = track.category === 'technical'
          ? (state.lang === 'ar' ? 'تراك تقني' : 'Technical Track')
          : (state.lang === 'ar' ? 'تراك إداري' : 'Managerial Track');

        const hasReqs = track.requirements && track.requirements[state.lang] && Array.isArray(track.requirements[state.lang]) && track.requirements[state.lang].length > 0;

        journeyBody.innerHTML = `
          <div class="journey-step-view" data-step="4">
            <div class="journey-brief-layout">
              <div class="journey-brief-header">
                <div class="card-leading-icon accent-${track.accent}" aria-hidden="true">
                  ${ICONS[track.icon] || ICONS.code}
                </div>
                <div style="flex: 1; min-width: 0;">
                  <span class="journey-badge-pill">${escapeHTML(categoryLabel)}</span>
                  <h3 style="font-size: 1.15rem; font-weight: 700; margin: 4px 0 0 0; color: var(--color-text-primary);">${escapeHTML(track.name)}</h3>
                </div>
              </div>

              <div class="journey-brief-box">
                <h4>${escapeHTML(t.journey.brief.briefTitle)}</h4>
                <p style="white-space: pre-line;">${escapeHTML(track.brief[state.lang])}</p>
              </div>

              <div class="journey-brief-box">
                <h4>${escapeHTML(t.journey.brief.requirementsTitle)}</h4>
                ${hasReqs ? `
                  <ul>
                    ${track.requirements[state.lang].map(req => `<li>${escapeHTML(req)}</li>`).join('')}
                  </ul>
                ` : `
                  <p>${escapeHTML(t.journey.brief.noRequirements)}</p>
                `}
              </div>

              <div style="display: flex; gap: 10px; margin-top: 4px;">
                <button type="button" class="journey-btn journey-btn-primary" id="journey-brief-select-btn" style="flex: 1;">
                  ${state.lang === 'ar' ? 'اختيار ومتابعة' : 'Select & Continue'}
                </button>
                <button type="button" class="journey-btn journey-btn-secondary" id="journey-brief-back-btn">
                  ${escapeHTML(t.journey.step4.backToRecommended)}
                </button>
              </div>
            </div>
          </div>
        `;

        const selectBtn = journeyBody.querySelector('#journey-brief-select-btn');
        if (selectBtn) {
          selectBtn.addEventListener('click', () => {
            state.selectedTrackId = track.id;
            state.viewingBriefTrackId = null;
            handleNext();
          });
        }

        const backBtn = journeyBody.querySelector('#journey-brief-back-btn');
        if (backBtn) {
          backBtn.addEventListener('click', () => {
            state.viewingBriefTrackId = null;
            render();
          });
        }
        return;
      }

      // Normal Step 4: Top 3 recommendations & alternative browsing
      const recs = getRecommendations();
      if (!state.selectedTrackId && recs.length > 0) {
        state.selectedTrackId = recs[0].track.id;
      }

      const allCategoryTracks = (siteConfig.tracks || []).filter(tr => tr.category === state.field);

      journeyBody.innerHTML = `
        <div class="journey-step-view" data-step="4">
          <h3 class="journey-step-prompt">${escapeHTML(t.journey.step4.title)}</h3>
          <p class="journey-step-hint">${escapeHTML(t.journey.step4.subtitle)}</p>

          <div class="journey-recommendations-list">
            ${recs.map(item => {
              const track = item.track;
              const isSelected = state.selectedTrackId === track.id;
              const badgeText = item.badge[state.lang];
              return `
                <div class="journey-recommend-card ${isSelected ? 'selected' : ''}" data-track-card="${track.id}">
                  <div class="journey-recommend-header">
                    <div class="card-leading-icon accent-${track.accent}" aria-hidden="true">
                      ${ICONS[track.icon] || ICONS.code}
                    </div>
                    <div style="flex: 1; min-width: 0;">
                      <span class="journey-recommend-title">${escapeHTML(track.name)}</span>
                    </div>
                    <span class="journey-recommend-badge">${escapeHTML(badgeText)}</span>
                  </div>
                  <p class="journey-recommend-desc">${escapeHTML(track.brief[state.lang])}</p>
                  <div class="journey-recommend-actions">
                    <button type="button" class="journey-btn ${isSelected ? 'journey-btn-primary' : 'journey-btn-secondary'}" data-action="select-track" data-track-id="${track.id}">
                      ${isSelected ? (state.lang === 'ar' ? 'تم الاختيار ✓' : 'Selected ✓') : (state.lang === 'ar' ? 'اختيار هذا التراك' : 'Select Track')}
                    </button>
                    <button type="button" class="journey-btn journey-btn-secondary" data-action="view-brief" data-track-id="${track.id}">
                      ${escapeHTML(t.journey.results.exploreBrief)}
                    </button>
                  </div>
                </div>
              `;
            }).join('')}
          </div>

          <div class="journey-alt-container">
            <button type="button" class="journey-alt-toggle-btn" id="journey-browse-all-btn">
              ${state.isBrowsingAlternatives ? escapeHTML(t.journey.step4.backToRecommended) : escapeHTML(t.journey.step4.browseAll)}
            </button>
            ${state.isBrowsingAlternatives ? `
              <div class="journey-alt-tracks-list">
                ${allCategoryTracks.map(tr => {
                  const isSelected = state.selectedTrackId === tr.id;
                  return `
                    <div class="journey-recommend-card ${isSelected ? 'selected' : ''}" style="padding: 12px;">
                      <div class="journey-recommend-header">
                        <div class="card-leading-icon accent-${tr.accent}" style="width: 34px; height: 34px;" aria-hidden="true">
                          ${ICONS[tr.icon] || ICONS.code}
                        </div>
                        <div style="flex: 1; min-width: 0;">
                          <span class="journey-recommend-title" style="font-size: 0.95rem;">${escapeHTML(tr.name)}</span>
                        </div>
                        <div style="display: flex; gap: 6px;">
                          <button type="button" class="journey-btn ${isSelected ? 'journey-btn-primary' : 'journey-btn-secondary'}" style="min-height: 40px; padding: 6px 14px; font-size: 0.8rem;" data-action="select-track" data-track-id="${tr.id}">
                            ${isSelected ? (state.lang === 'ar' ? 'تم الاختيار ✓' : 'Selected ✓') : (state.lang === 'ar' ? 'اختيار' : 'Select')}
                          </button>
                          <button type="button" class="journey-btn journey-btn-secondary" style="min-height: 40px; padding: 6px 12px; font-size: 0.8rem;" data-action="view-brief" data-track-id="${tr.id}">
                            ${escapeHTML(t.journey.results.exploreBrief)}
                          </button>
                        </div>
                      </div>
                    </div>
                  `;
                }).join('')}
              </div>
            ` : ''}
          </div>
        </div>
      `;

      // Bind selection clicks
      const selectButtons = journeyBody.querySelectorAll('[data-action="select-track"]');
      selectButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const trackId = btn.getAttribute('data-track-id');
          selectTrack(trackId);
        });
      });

      // Bind brief view clicks
      const briefButtons = journeyBody.querySelectorAll('[data-action="view-brief"]');
      briefButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const trackId = btn.getAttribute('data-track-id');
          state.viewingBriefTrackId = trackId;
          render();
        });
      });

      // Clicking recommendation card body selects it
      const cards = journeyBody.querySelectorAll('.journey-recommend-card');
      cards.forEach(card => {
        card.addEventListener('click', (e) => {
          if (e.target.closest('button')) return;
          const trackId = card.getAttribute('data-track-card');
          if (trackId) {
            selectTrack(trackId);
          }
        });
      });

      // Toggle alternative tracks
      const toggleAltBtn = journeyBody.querySelector('#journey-browse-all-btn');
      if (toggleAltBtn) {
        toggleAltBtn.addEventListener('click', () => {
          state.isBrowsingAlternatives = !state.isBrowsingAlternatives;
          renderStepBody();
        });
      }
    }

    /**
     * Step 5: Technical Experience View (R9 - Technical only)
     */
    function renderStep5() {
      const t = siteConfig.translations[state.lang];
      journeyBody.innerHTML = `
        <div class="journey-step-view" data-step="5">
          <h3 class="journey-step-prompt">${escapeHTML(t.journey.experience.title)}</h3>
          <p class="journey-step-hint">${escapeHTML(t.journey.experience.subtitle)}</p>
          <div class="journey-choices-list" role="radiogroup" aria-label="${escapeHTML(t.journey.experience.title)}">
            <button type="button" class="journey-choice-card ${state.experience === 'beginner' ? 'selected' : ''}" data-choice-exp="beginner" role="radio" aria-checked="${state.experience === 'beginner'}">
              <div class="journey-choice-icon" aria-hidden="true">
                ${ICONS.user}
              </div>
              <div class="journey-choice-content">
                <div class="journey-choice-title">${escapeHTML(t.journey.experience.beginner.title)}</div>
                <div class="journey-choice-desc">${escapeHTML(t.journey.experience.beginner.desc)}</div>
              </div>
              <span class="journey-choice-badge">${escapeHTML(t.journey.experience.beginner.badge)}</span>
            </button>
            <button type="button" class="journey-choice-card ${state.experience === 'experienced' ? 'selected' : ''}" data-choice-exp="experienced" role="radio" aria-checked="${state.experience === 'experienced'}">
              <div class="journey-choice-icon" aria-hidden="true">
                ${ICONS.lead}
              </div>
              <div class="journey-choice-content">
                <div class="journey-choice-title">${escapeHTML(t.journey.experience.experienced.title)}</div>
                <div class="journey-choice-desc">${escapeHTML(t.journey.experience.experienced.desc)}</div>
              </div>
              <span class="journey-choice-badge">${escapeHTML(t.journey.experience.experienced.badge)}</span>
            </button>
          </div>
          <div class="journey-exp-note">${escapeHTML(t.journey.experience.note)}</div>
        </div>
      `;

      const cards = journeyBody.querySelectorAll('.journey-choice-card');
      cards.forEach(card => {
        card.addEventListener('click', () => {
          const chosenExp = card.getAttribute('data-choice-exp');
          setExperience(chosenExp);
        });
      });
    }

    /**
     * Update Footer Navigation Buttons (Back & Next)
     */
    function updateFooterButtons() {
      if (!journeyFooter || !journeyBtnBack || !journeyBtnNext) return;
      const t = siteConfig.translations[state.lang];

      // Back Button
      if (state.step === 1 || state.isCheckpoint) {
        journeyBtnBack.style.display = 'none';
      } else {
        journeyBtnBack.style.display = 'inline-flex';
        if (journeyBtnBackText) journeyBtnBackText.textContent = t.journey.navigation.backBtn;
        journeyBtnBack.setAttribute('aria-label', t.journey.navigation.backBtn);
      }

      // Next Button (Hidden on Step 1, Step 2, or during Checkpoint)
      if (state.step === 1 || state.step === 2 || state.isCheckpoint) {
        journeyBtnNext.style.display = 'none';
      } else {
        journeyBtnNext.style.display = 'inline-flex';
        if ((state.step === 4 && state.field === 'managerial') || state.step === 5) {
          if (journeyBtnNextText) journeyBtnNextText.textContent = t.journey.navigation.finishBtn;
          journeyBtnNext.setAttribute('aria-label', t.journey.navigation.finishBtn);
        } else {
          if (journeyBtnNextText) journeyBtnNextText.textContent = t.journey.navigation.nextBtn;
          journeyBtnNext.setAttribute('aria-label', t.journey.navigation.nextBtn);
        }
        journeyBtnNext.disabled = !canProceed();
      }
    }

    /**
     * Handle Focus Trapping & Escape Key
     */
    function handleKeydown(e) {
      if (e.key === 'Escape') {
        e.preventDefault();
        close();
        return;
      }

      if (e.key === 'Tab') {
        const focusable = journeyModal.querySelectorAll(
          'button:not([disabled]):not([style*="display: none"]), a[href]:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
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

    return {
      init,
      open,
      close,
      isOpen: () => state.isOpen,
      setLanguage,
      setField,
      toggleKeyword,
      selectTrack,
      setExperience,
      startOver,
      handleBack,
      handleNext,
      handleKeydown,
      getRecommendations,
      getState: () => ({ ...state, selectedKeywords: Array.from(state.selectedKeywords) })
    };
  })();

  if (typeof window !== 'undefined') {
    window.TrackDiscoveryJourney = TrackDiscoveryJourney;
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
