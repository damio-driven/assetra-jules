import translations from './translations.js';

let currentLang = localStorage.getItem('lang') || 'it';
let isDark = localStorage.getItem('theme') === 'dark';

// DOM Elements
const themeToggleBtn = document.getElementById('theme-toggle');
const mobileThemeToggleBtn = document.getElementById('mobile-theme-toggle');
const langToggleBtn = document.getElementById('lang-toggle');
const mobileLangToggleBtn = document.getElementById('mobile-lang-toggle');
const contactForm = document.getElementById('contact-form');
const cookieBanner = document.getElementById('cookie-banner');
const acceptCookiesBtn = document.getElementById('accept-cookies');
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

// Initialize
function init() {
    updateTheme();
    updateLanguage();
    setupScrollAnimations();

    // Check for cookie consent
    if (!localStorage.getItem('cookieConsent')) {
        setTimeout(() => {
            cookieBanner.classList.remove('translate-y-full');
        }, 2000);
    }
}

// Theme Logic
function updateTheme() {
    if (isDark) {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
        document.getElementById('theme-toggle-dark-icon').classList.add('hidden');
        document.getElementById('theme-toggle-light-icon').classList.remove('hidden');
    } else {
        document.documentElement.classList.add('light');
        document.documentElement.classList.remove('dark');
        document.getElementById('theme-toggle-dark-icon').classList.remove('hidden');
        document.getElementById('theme-toggle-light-icon').classList.add('hidden');
    }
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

themeToggleBtn.addEventListener('click', () => {
    isDark = !isDark;
    updateTheme();
});

if (mobileThemeToggleBtn) {
    mobileThemeToggleBtn.addEventListener('click', () => {
        isDark = !isDark;
        updateTheme();
    });
}

// Language Logic
function updateLanguage() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translation = key.split('.').reduce((obj, i) => obj[i], translations[currentLang]);
        if (translation) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translation;
            } else {
                el.innerText = translation;
            }
        }
    });

    langToggleBtn.innerText = currentLang === 'it' ? 'EN' : 'IT';
    if (mobileLangToggleBtn) mobileLangToggleBtn.innerText = currentLang === 'it' ? 'EN' : 'IT';
    document.documentElement.lang = currentLang;
    localStorage.setItem('lang', currentLang);
}

langToggleBtn.addEventListener('click', () => {
    currentLang = currentLang === 'it' ? 'en' : 'it';
    updateLanguage();
});

if (mobileLangToggleBtn) {
    mobileLangToggleBtn.addEventListener('click', () => {
        currentLang = currentLang === 'it' ? 'en' : 'it';
        updateLanguage();
    });
}

// Mobile Menu Logic
mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when clicking a link
mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Form Logic
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const successMsg = translations[currentLang].contact.success;
    alert(successMsg);
    contactForm.reset();
});

// Cookie Consent
acceptCookiesBtn.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'true');
    cookieBanner.classList.add('translate-y-full');
});

// Scroll Animations
function setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

init();
