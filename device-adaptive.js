// =======================================================================
// Akosh Eco / EcoAkobir — Device & Screen Orientation Adaptive Engine
// Avtomatik Ekran Formatini Aniqlash (Telefon: Vertikal | Katta Ekran: Gorizontal)
// =======================================================================

const DeviceAdaptiveManager = {
  currentMode: 'auto', // 'auto', 'force-vertical', 'force-horizontal'
  detectedFormat: 'horizontal',

  init() {
    this.detectAndApply();
    
    // Realtime listeners
    window.addEventListener('resize', () => {
      this.detectAndApply();
    });

    window.addEventListener('orientationchange', () => {
      setTimeout(() => this.detectAndApply(), 150);
    });

    if (window.matchMedia) {
      try {
        window.matchMedia('(orientation: portrait)').addEventListener('change', () => {
          this.detectAndApply();
        });
      } catch (e) {}
    }

    console.log("DeviceAdaptiveManager: Ekran formatini avtomatik aniqlovchi modul ishga tushdi.");
  },

  detect() {
    if (this.currentMode === 'force-vertical') return 'vertical';
    if (this.currentMode === 'force-horizontal') return 'horizontal';

    const width = window.innerWidth || document.documentElement.clientWidth || screen.width;
    const height = window.innerHeight || document.documentElement.clientHeight || screen.height;
    const isPortrait = height > width;
    const isTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
    const isMobileWidth = width < 768;

    // Mobile Phone in Portrait format
    if (isMobileWidth || (isTouch && isPortrait)) {
      return 'vertical';
    }

    // Computer, Laptop, Smart Monitor, Large Display or Landscape mode
    return 'horizontal';
  },

  detectAndApply() {
    const format = this.detect();
    this.detectedFormat = format;

    const htmlEl = document.documentElement;
    const bodyEl = document.body;
    const pillText = document.getElementById('screen-mode-text');
    const pillIcon = document.getElementById('screen-mode-icon');
    const mobileNav = document.getElementById('mobile-bottom-nav');

    if (format === 'vertical') {
      htmlEl.classList.remove('mode-horizontal-desktop');
      htmlEl.classList.add('mode-vertical-mobile');
      bodyEl.classList.remove('mode-horizontal-desktop');
      bodyEl.classList.add('mode-vertical-mobile');

      if (pillText) {
        pillText.textContent = this.currentMode === 'force-vertical' ? 'Majburiy: Vertikal' : 'Mobil: Vertikal';
      }
      if (pillIcon) {
        pillIcon.innerHTML = '<i class="fa-solid fa-mobile-screen"></i>';
      }
      if (mobileNav) {
        mobileNav.classList.remove('hidden');
      }
    } else {
      htmlEl.classList.remove('mode-vertical-mobile');
      htmlEl.classList.add('mode-horizontal-desktop');
      bodyEl.classList.remove('mode-vertical-mobile');
      bodyEl.classList.add('mode-horizontal-desktop');

      if (pillText) {
        pillText.textContent = this.currentMode === 'force-horizontal' ? 'Majburiy: Gorizontal' : 'Katta Ekran: Gorizontal';
      }
      if (pillIcon) {
        pillIcon.innerHTML = '<i class="fa-solid fa-display"></i>';
      }
      if (mobileNav) {
        mobileNav.classList.add('hidden');
      }
    }

    this.updateActiveMobileTabHighlight();
  },

  toggleMode() {
    if (this.currentMode === 'auto') {
      this.currentMode = 'force-vertical';
      if (typeof showToast === 'function') {
        showToast("📱 Mobil Vertikal format tanlandi");
      }
    } else if (this.currentMode === 'force-vertical') {
      this.currentMode = 'force-horizontal';
      if (typeof showToast === 'function') {
        showToast("🖥️ Katta Ekran Gorizontal format tanlandi");
      }
    } else {
      this.currentMode = 'auto';
      if (typeof showToast === 'function') {
        showToast("⚡ Avtomatik aniqlash rejimiga qaytildi");
      }
    }

    this.detectAndApply();
    if (window.ecoAudio) window.ecoAudio.playClick();
  },

  updateActiveMobileTabHighlight() {
    const tabs = ['modules', 'games', 'sorting'];
    // Highlight matching mobile nav item if exists
  }
};

window.DeviceAdaptiveManager = DeviceAdaptiveManager;

// Auto-run on load
window.addEventListener('DOMContentLoaded', () => {
  DeviceAdaptiveManager.init();
});
