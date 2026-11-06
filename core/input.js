/**
 * ============================================================================
 * ECO-BATL CORE: INPUT MANAGER (KLAVIATURA VA SENSOR BOSHQARUV)
 * ============================================================================
 * Muallif: Asoschi Akobir | EcoAkobir Platformasi
 * 
 * 1-O'yinchi (Chap): A / S / D / F (yoki Ф / Ы / В / А) -> Variant 0, 1, 2, 3
 * 2-O'yinchi (O'ng): J / K / L / ; (yoki О / Л / Д / Ж) -> Variant 0, 1, 2, 3
 * Boshqaruv: Space (Pauza), Escape (Chiqish)
 */

(function () {
  'use strict';

  const T1_KEYS = {
    'KeyA': 0, 'a': 0, 'A': 0, 'ф': 0, 'Ф': 0,
    'KeyS': 1, 's': 1, 'S': 1, 'ы': 1, 'Ы': 1,
    'KeyD': 2, 'd': 2, 'D': 2, 'в': 2, 'В': 2,
    'KeyF': 3, 'f': 3, 'F': 3, 'а': 3, 'А': 3
  };

  const T2_KEYS = {
    'KeyJ': 0, 'j': 0, 'J': 0, 'о': 0, 'О': 0,
    'KeyK': 1, 'k': 1, 'K': 1, 'л': 1, 'Л': 1,
    'KeyL': 2, 'l': 2, 'L': 2, 'д': 2, 'Д': 2,
    'Semicolon': 3, ';': 3, ':': 3, 'ж': 3, 'Ж': 3
  };

  const CoreInput = {
    isEnabled: false,
    listeners: [],
    keyHandler: null,

    // Tinglovchi qo'shish
    onAction(callback) {
      if (typeof callback === 'function') {
        this.listeners.push(callback);
      }
    },

    // Hodisani uzatish
    emit(teamId, action, data = {}) {
      if (!this.isEnabled) return;
      this.listeners.forEach(cb => {
        try {
          cb(teamId, action, data);
        } catch (e) {
          console.error('[CoreInput] Callback error:', e);
        }
      });
    },

    // Klaviaturani bog'lash
    bind() {
      if (this.keyHandler) this.unbind();
      this.isEnabled = true;

      this.keyHandler = (e) => {
        // Matn kiritish maydonida bo'lsa ishlamasin
        if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;

        const code = e.code;
        const key = e.key;

        // 1-Jamoa tekshiruvi (A S D F)
        if (code in T1_KEYS || key in T1_KEYS) {
          const optIdx = code in T1_KEYS ? T1_KEYS[code] : T1_KEYS[key];
          e.preventDefault();
          this.emit(1, 'select_option', { optionIndex: optIdx, key: key });
          return;
        }

        // 2-Jamoa tekshiruvi (J K L ;)
        if (code in T2_KEYS || key in T2_KEYS) {
          const optIdx = code in T2_KEYS ? T2_KEYS[code] : T2_KEYS[key];
          e.preventDefault();
          this.emit(2, 'select_option', { optionIndex: optIdx, key: key });
          return;
        }

        // Boshqaruv tugmalari
        if (code === 'Space') {
          e.preventDefault();
          this.emit(0, 'toggle_pause');
          return;
        }

        if (code === 'Escape') {
          e.preventDefault();
          this.emit(0, 'escape');
          return;
        }
      };

      window.addEventListener('keydown', this.keyHandler);
    },

    // Klaviaturani uzish
    unbind() {
      this.isEnabled = false;
      if (this.keyHandler) {
        window.removeEventListener('keydown', this.keyHandler);
        this.keyHandler = null;
      }
      this.listeners = [];
    },

    // Sensor / Sichqoncha orqali tanlashni chaqirish
    clickOption(teamId, optionIndex) {
      this.emit(teamId, 'select_option', { optionIndex, byClick: true });
    }
  };

  window.EcoBattleCoreInput = CoreInput;
})();
