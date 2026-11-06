// =======================================================================
// EcoAkobir — 2D Professional Sanoat & Ekologik Animatsiyalar Dvigateli (v42)
// 100 ta Audit va 100 ta Davlat Ekspertizasi keyslari uchun mukammal 2D animatsiyalar
// Asoschi: Akobir | Akosh Eco & EcoAkobir Platformasi
// =======================================================================

const Eco2DAnimator = {

  // Universal CSS animatsiyalari (SVG ichida yoki HTML kontekstida 60 FPS)
  getCommonStyles() {
    return `
      @keyframes ecoFlame {
        0%, 100% { transform: scaleY(0.92) scaleX(1.04); fill: #f59e0b; }
        50% { transform: scaleY(1.22) scaleX(0.88); fill: #ef4444; }
      }
      @keyframes ecoFlameBlue {
        0%, 100% { transform: scaleY(0.9) scaleX(1.05); fill: #06b6d4; }
        50% { transform: scaleY(1.25) scaleX(0.9); fill: #3b82f6; }
      }
      @keyframes ecoSprayMist {
        0% { transform: translateY(0); opacity: 0; }
        20% { opacity: 0.95; }
        100% { transform: translateY(55px); opacity: 0; }
      }
      @keyframes ecoBubbleRise {
        0% { transform: translateY(0) scale(0.6); opacity: 0.2; }
        50% { opacity: 0.95; }
        100% { transform: translateY(-48px) scale(1.15); opacity: 0; }
      }
      @keyframes ecoWaveMotion {
        0% { transform: translateX(0); }
        50% { transform: translateX(-16px); }
        100% { transform: translateX(0); }
      }
      @keyframes ecoLaserSweep {
        0%, 100% { transform: translateX(0); opacity: 0.4; }
        50% { transform: translateX(180px); opacity: 1; }
      }
      @keyframes ecoRadarWave {
        0% { r: 6; opacity: 1; }
        100% { r: 52; opacity: 0; }
      }
      @keyframes ecoGaugeNeedle {
        0%, 100% { transform: rotate(-32deg); }
        50% { transform: rotate(38deg); }
      }
      @keyframes ecoSpinWheel {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      @keyframes ecoSparkFlash {
        0%, 100% { opacity: 0; transform: scale(0.4); }
        30%, 70% { opacity: 1; transform: scale(1.3); }
      }
      @keyframes ecoDrip {
        0% { transform: translateY(0); opacity: 1; }
        70% { transform: translateY(32px); opacity: 1; }
        100% { transform: translateY(40px) scaleX(1.8) scaleY(0.4); opacity: 0; }
      }
      @keyframes ecoPipeFlow {
        0% { stroke-dashoffset: 40; }
        100% { stroke-dashoffset: 0; }
      }
      @keyframes ecoBioPulse {
        0%, 100% { opacity: 0.4; filter: drop-shadow(0 0 2px #ef4444); }
        50% { opacity: 1; filter: drop-shadow(0 0 12px #ef4444); }
      }
      @keyframes ecoSoundWave {
        0% { transform: scale(0.85); opacity: 0.9; }
        100% { transform: scale(1.45); opacity: 0; }
      }
      @keyframes ecoElectricSpark {
        0%, 100% { opacity: 0.1; }
        25%, 75% { opacity: 0.95; filter: drop-shadow(0 0 6px #38bdf8); }
        50% { opacity: 0.4; }
      }
      @keyframes ecoVortex {
        0% { transform: rotate(0deg) scale(1); }
        50% { transform: rotate(180deg) scale(1.08); }
        100% { transform: rotate(360deg) scale(1); }
      }
      @keyframes ecoFishJump {
        0% { transform: translate(0, 0) rotate(0deg); opacity: 0; }
        30% { opacity: 1; }
        60% { transform: translate(25px, -22px) rotate(25deg); opacity: 1; }
        100% { transform: translate(50px, 0) rotate(50deg); opacity: 0; }
      }

      .eco-flame-1 { transform-origin: bottom center; animation: ecoFlame 0.45s infinite ease-in-out; }
      .eco-flame-2 { transform-origin: bottom center; animation: ecoFlame 0.38s infinite ease-in-out 0.12s; }
      .eco-flame-blue { transform-origin: bottom center; animation: ecoFlameBlue 0.42s infinite ease-in-out; }
      .eco-spray-1 { animation: ecoSprayMist 1.6s infinite linear; }
      .eco-spray-2 { animation: ecoSprayMist 1.6s infinite linear 0.4s; }
      .eco-spray-3 { animation: ecoSprayMist 1.6s infinite linear 0.8s; }
      .eco-bubble-1 { animation: ecoBubbleRise 2.1s infinite ease-in; }
      .eco-bubble-2 { animation: ecoBubbleRise 2.5s infinite ease-in 0.6s; }
      .eco-bubble-3 { animation: ecoBubbleRise 1.9s infinite ease-in 1.2s; }
      .eco-bubble-4 { animation: ecoBubbleRise 2.3s infinite ease-in 0.3s; }
      .eco-wave-drift { animation: ecoWaveMotion 3s infinite ease-in-out; }
      .eco-laser-sweep { animation: ecoLaserSweep 2.2s infinite ease-in-out; }
      .eco-radar-p1 { animation: ecoRadarWave 2s infinite ease-out; }
      .eco-radar-p2 { animation: ecoRadarWave 2s infinite ease-out 1s; }
      .eco-needle-swing { transform-origin: center; animation: ecoGaugeNeedle 2.4s infinite ease-in-out; }
      .eco-gear-spin { transform-origin: center; animation: ecoSpinWheel 3.5s infinite linear; }
      .eco-turbine-spin { transform-origin: center; animation: ecoSpinWheel 5s infinite linear; }
      .eco-spark-burst { animation: ecoSparkFlash 0.9s infinite ease-in-out; }
      .eco-drip-drop { animation: ecoDrip 1.8s infinite cubic-bezier(0.4, 0, 0.2, 1); }
      .eco-pipe-dash { stroke-dasharray: 8, 5; animation: ecoPipeFlow 1.2s infinite linear; }
      .eco-bio-hazard { animation: ecoBioPulse 1.4s infinite ease-in-out; }
      .eco-sound-arc { transform-origin: center left; animation: ecoSoundWave 1.6s infinite ease-out; }
      .eco-sound-arc-2 { transform-origin: center left; animation: ecoSoundWave 1.6s infinite ease-out 0.8s; }
      .eco-arc-flash { animation: ecoElectricSpark 0.7s infinite ease-in-out; }
      .eco-vortex-spin { transform-origin: center; animation: ecoVortex 2.8s infinite linear; }
      .eco-fish-leap { animation: ecoFishJump 2.8s infinite ease-in-out; }
    `;
  },

  // Asosiy chaqiruvchi metod
  getSceneHtml(item, gameId) {
    if (!item) return '';

    const scene = this.detectScene(item, gameId);
    const title = item.sector || item.title || item.visualTitle || "Ekologik Obyekt";
    const info = item.visualInfo || item.description || "";
    const id = item.id || 1;

    switch (scene) {
      case 'pyrolysis_reactor':
        return this.renderPyrolysisReactor(id, title, info, gameId);
      case 'gas_scrubber':
        return this.renderGasScrubber(id, title, info, gameId);
      case 'wastewater_basin':
        return this.renderWastewaterBasin(id, title, info, gameId);
      case 'sanitary_radar':
        return this.renderSanitaryRadar(id, title, info, gameId);
      case 'noise_barrier':
        return this.renderNoiseBarrier(id, title, info, gameId);
      case 'electrostatic_filter':
        return this.renderElectrostaticFilter(id, title, info, gameId);
      case 'chemical_electrolysis':
        return this.renderChemicalElectrolysis(id, title, info, gameId);
      case 'landfill_membrane':
        return this.renderLandfillMembrane(id, title, info, gameId);
      case 'medical_autoclave':
        return this.renderMedicalAutoclave(id, title, info, gameId);
      case 'nature_reserve':
        return this.renderNatureReserve(id, title, info, gameId);
      case 'ewaste_recycler':
        return this.renderEWasteRecycler(id, title, info, gameId);
      case 'foundry_smelter':
        return this.renderFoundrySmelter(id, title, info, gameId);
      case 'clean_energy':
        return this.renderCleanEnergy(id, title, info, gameId);
      case 'compost_biochar':
        return this.renderCompostBiochar(id, title, info, gameId);
      case 'radiation_scanner':
        return this.renderRadiationScanner(id, title, info, gameId);
      case 'pipeline_valve':
        return this.renderPipelineValve(id, title, info, gameId);
      case 'textile_ozone':
        return this.renderTextileOzone(id, title, info, gameId);
      case 'dust_cyclone':
        return this.renderDustCyclone(id, title, info, gameId);
      case 'tailings_dam':
        return this.renderTailingsDam(id, title, info, gameId);
      case 'green_belt':
        return this.renderGreenBelt(id, title, info, gameId);
      default:
        return this.renderPyrolysisReactor(id, title, info, gameId);
    }
  },

  // Semantik klassifikatsiya: 200 ta keysni 20 ta boy animatsion arxetipga taqsimlash
  detectScene(item, gameId) {
    const text = [
      item.sector || '',
      item.title || '',
      item.category || '',
      item.visualTitle || '',
      item.visualInfo || '',
      item.description || ''
    ].join(' ').toLowerCase();

    // 1. Shovqin, akustika, magistral, aeroport, dB
    if (text.includes("shovqin") || text.includes("akustik") || text.includes("dba") || text.includes("samolyot") || text.includes("magistral trassa") || text.includes("shovqin maydoni")) {
      return 'noise_barrier';
    }

    // 2. Masofa, sanitar-himoya zonasi (SHZ), SanQvaM
    if (text.includes("shz") || text.includes("sanqvam") || text.includes("sanitar zona") || text.includes("sanitar-himoya") || text.includes("sanitar mintaqa") || ((text.includes("masofa") || text.includes("metr")) && (text.includes("turar-joy") || text.includes("aholi") || text.includes("bogcha") || text.includes("maktab") || text.includes("uy") || text.includes("bino")))) {
      return 'sanitary_radar';
    }

    // 3. Tibbiyot chiqindilari, avtoklav, infeksion, shprits, kasalxona
    if (text.includes("tibbiy") || text.includes("avtoklav") || text.includes("infeksion") || text.includes("shprits") || text.includes("patogen") || text.includes("kasalxona")) {
      return 'medical_autoclave';
    }

    // 4. Radiatsiya, geyger, metallolom, doza, seziy, rentgen
    if (text.includes("radiatsiya") || text.includes("doza") || text.includes("geiger") || text.includes("geyger") || text.includes("metallolom") || text.includes("rentgen") || text.includes("izotop")) {
      return 'radiation_scanner';
    }

    // 5. E-chiqindi, batareya, litiy, akkumulyator, quyosh paneli, elektron
    if (text.includes("elektron") || text.includes("batareya") || text.includes("akkumulyator") || text.includes("litiy") || text.includes("quyosh panel") || text.includes("black mass") || text.includes("invertor")) {
      return 'ewaste_recycler';
    }

    // 6. Tabiat bog'i, qo'riqxona, flora, fauna, baliq o'tkazgich, jayron, bug'u, qushlar, qizil kitob
    if (text.includes("qoriqxona") || text.includes("tabiat bogi") || text.includes("jayron") || text.includes("bugu") || text.includes("marinka") || text.includes("ryboxod") || text.includes("baliq otkazgich") || text.includes("qizil kitob") || text.includes("bioxilma") || text.includes("artemiya") || text.includes("ornitologik")) {
      return 'nature_reserve';
    }

    // 7. Qayta tiklanuvchi energiya (Shamol & Quyosh SES/ShES)
    if (text.includes("shamol elektr") || text.includes("shes") || text.includes("turbina") || text.includes("ses") || text.includes("quyosh elektr")) {
      return 'clean_energy';
    }

    // 8. Kompost, biogaz, biochar, chorvachilik, go'ng, lagunasi
    if (text.includes("kompost") || text.includes("biogaz") || text.includes("biochar") || text.includes("gong") || text.includes("chorvachilik") || text.includes("qoramol") || text.includes("fermentatsiya") || text.includes("biomassa")) {
      return 'compost_biochar';
    }

    // 9. Poligon, maishiy chiqindi, geomembrana, filtrat, axlatxona
    if (text.includes("poligon") || text.includes("filtrat") || text.includes("geomembrana") || text.includes("chiqindixona") || text.includes("qmq") || text.includes("axlat")) {
      return 'landfill_membrane';
    }

    // 10. To'qimachilik, bo'yoq, rangdorlik, ozon, pardozlash
    if (text.includes("toqimachilik") || text.includes("boyoq") || text.includes("rangdorlik") || text.includes("ozon") || text.includes("de-inking") || text.includes("matolarni")) {
      return 'textile_ozone';
    }

    // 11. Skrubber, ammiak, xlor, absorber, neytrallash
    if (text.includes("skrubber") || text.includes("ammiak") || text.includes("nh3") || text.includes("absorber") || text.includes("kislotali gaz") || text.includes("hcl")) {
      return 'gas_scrubber';
    }

    // 12. Elektrofiltr, IES, ko'mir, kul, sement klinkeri
    if (text.includes("elektrofiltr") || text.includes("komir") || text.includes("ies") || text.includes("kul") || text.includes("sement klinker") || text.includes("issiqlik elektr")) {
      return 'electrostatic_filter';
    }

    // 13. Siklon, chang, yengli filtr, ohak, paxta changi, aspiratsiya
    if (text.includes("siklon") || text.includes("chang") || text.includes("yengli filtr") || text.includes("rukavniy") || text.includes("aspiratsiya") || text.includes("ohak")) {
      return 'dust_cyclone';
    }

    // 14. Piroliz, dioksin, furan, insinerator, mash'ala, fakel, kreking
    if (text.includes("piroliz") || text.includes("dioksin") || text.includes("furan") || text.includes("insinerator") || text.includes("fakel") || text.includes("mashala") || text.includes("kreking") || text.includes("termik destruksiya")) {
      return 'pyrolysis_reactor';
    }

    // 15. Metallurgiya, quyish pechi, domna, shlak, alyuminiy eritish
    if (text.includes("quyish") || text.includes("eritish pech") || text.includes("domna") || text.includes("metallurgiya") || text.includes("shlak")) {
      return 'foundry_smelter';
    }

    // 16. Kimyoviy elektroliz, kislota, galvanika, simob, xrom
    if (text.includes("elektroliz") || text.includes("galvanik") || text.includes("kislota") || text.includes("simob") || text.includes("xrom") || text.includes("oyuvchi") || text.includes("naoh")) {
      return 'chemical_electrolysis';
    }

    // 17. Quvur, neft, sizish, klapan, zulfin, neft bazasi
    if (text.includes("quvur") || text.includes("neft") || text.includes("sizish") || text.includes("klapan") || text.includes("zulfin") || text.includes("rezervuar") || text.includes("neft mahsulot")) {
      return 'pipeline_valve';
    }

    // 18. Damba, shlam saqlagich, qum-shag'al, moratoriy, karer
    if (text.includes("damba") || text.includes("shlam") || text.includes("qum-shagal") || text.includes("moratoriy") || text.includes("karer") || text.includes("togon")) {
      return 'tailings_dam';
    }

    // 19. Yashil belbog', shamol atirguli, ko'kalamzorlashtirish
    if (text.includes("yashil belbog") || text.includes("daraxt") || text.includes("shamol atirguli") || text.includes("kokalamzor")) {
      return 'green_belt';
    }

    // 20. Oqava suv, aerotenk, kanalizatsiya, BOD, COD, daryo muhofazasi
    if (text.includes("oqava") || text.includes("aerotenk") || text.includes("bod") || text.includes("cod") || text.includes("kanalizatsiya") || text.includes("daryo") || text.includes("suv resurs") || text.includes("hovuz")) {
      return 'wastewater_basin';
    }

    const pool = ['pyrolysis_reactor', 'gas_scrubber', 'wastewater_basin', 'sanitary_radar', 'electrostatic_filter', 'chemical_electrolysis', 'landfill_membrane', 'dust_cyclone'];
    return pool[(item.id || 1) % pool.length];
  },

  // Yordamchi: Matnni xavfsiz qisqartirish
  cleanText(str, maxLen = 65) {
    if (!str) return '';
    const clean = String(str).replace(/[<>"\']/g, '').trim();
    return clean.length > maxLen ? clean.substring(0, maxLen) + '...' : clean;
  },

  // 1. Piroliz va Dioksin Reaktori Animatsiyasi
  renderPyrolysisReactor(id, title, info, gameId) {
    const isAudit = gameId === 2;
    const badge = isAudit ? "SANOAT AUDITI — I TOIFA" : "ZVOS EKSPERTIZASI — I TOIFA";
    return `
      <div class="relative w-full rounded-2xl overflow-hidden border border-amber-500/40 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 shadow-2xl p-2.5 select-none mb-3">
        <style>${this.getCommonStyles()}</style>
        <div class="flex items-center justify-between px-2 py-1 mb-1.5 border-b border-slate-800 text-[10px] font-bold">
          <div class="flex items-center gap-1.5 text-amber-400">
            <span class="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
            <span class="uppercase tracking-wider">🔥 Piroliz va Termik Destruksiya Reaktori #${id}</span>
          </div>
          <span class="px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30 text-[9px]">${badge}</span>
        </div>

        <svg viewBox="0 0 600 150" class="w-full h-auto rounded-xl bg-slate-950 border border-slate-800/80">
          <defs>
            <linearGradient id="pyrWall" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#334155"/>
              <stop offset="100%" stop-color="#0f172a"/>
            </linearGradient>
            <linearGradient id="fireGrad" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stop-color="#ef4444"/>
              <stop offset="50%" stop-color="#f59e0b"/>
              <stop offset="100%" stop-color="#fef08a"/>
            </linearGradient>
          </defs>

          <!-- Grid Lines -->
          <line x1="0" y1="120" x2="600" y2="120" stroke="#1e293b" stroke-width="1" stroke-dasharray="4,4"/>
          <line x1="180" y1="0" x2="180" y2="150" stroke="#1e293b" stroke-width="1" stroke-dasharray="4,4"/>
          <line x1="420" y1="0" x2="420" y2="150" stroke="#1e293b" stroke-width="1" stroke-dasharray="4,4"/>

          <!-- Primary Reactor Chamber -->
          <rect x="50" y="30" width="100" height="85" rx="10" fill="url(#pyrWall)" stroke="#f59e0b" stroke-width="2"/>
          <text x="100" y="48" font-size="9" fill="#facc15" font-weight="bold" text-anchor="middle">BIRLAMCHI PECH</text>
          
          <!-- Animated Flames in Primary Chamber -->
          <path d="M 75 105 Q 85 70 95 105 Q 105 75 115 105 Z" fill="url(#fireGrad)" class="eco-flame-1"/>
          <path d="M 85 105 Q 100 65 110 105 Q 120 75 125 105 Z" fill="url(#fireGrad)" class="eco-flame-2"/>

          <!-- High-Temp Secondary Combustion Chamber (1100C) -->
          <rect x="200" y="20" width="120" height="95" rx="12" fill="#18181b" stroke="#ef4444" stroke-width="2"/>
          <text x="260" y="40" font-size="9" fill="#f87171" font-weight="bold" text-anchor="middle">IKKILAMCHI DOZATOR</text>
          <text x="260" y="55" font-size="14" fill="#fbbf24" font-weight="900" text-anchor="middle">1,100°C</text>
          <circle cx="260" cy="85" r="18" fill="#450a0a" stroke="#ef4444" stroke-width="1.5"/>
          <line x1="260" y1="85" x2="270" y2="75" stroke="#fbbf24" stroke-width="2.5" stroke-linecap="round" class="eco-needle-swing"/>

          <!-- Connecting Gas Ducts with Animated Flow -->
          <path d="M 150 70 L 200 70" stroke="#f59e0b" stroke-width="4" fill="none" class="eco-pipe-dash"/>
          <path d="M 320 65 L 380 65" stroke="#ef4444" stroke-width="4" fill="none" class="eco-pipe-dash"/>

          <!-- Smokestack & Quenching Tower -->
          <path d="M 380 115 L 400 30 L 430 30 L 450 115 Z" fill="url(#pyrWall)" stroke="#38bdf8" stroke-width="2"/>
          <text x="415" y="48" font-size="8" fill="#38bdf8" font-weight="bold" text-anchor="middle">SOVITISH</text>

          <!-- Animated Steam/Clean Plume -->
          <circle cx="415" cy="22" r="5" fill="#38bdf8" opacity="0.4" class="eco-bubble-1"/>
          <circle cx="418" cy="14" r="8" fill="#bae6fd" opacity="0.3" class="eco-bubble-2"/>

          <!-- Telemetry HUD Card -->
          <rect x="470" y="20" width="118" height="95" rx="8" fill="#030712" stroke="#334155" stroke-width="1.5"/>
          <text x="529" y="38" font-size="9" fill="#94a3b8" font-weight="bold" text-anchor="middle">DIOKSIN DATCHIGI</text>
          <text x="529" y="58" font-size="12" fill="#ef4444" font-weight="900" text-anchor="middle">⚠️ TEQ / m³</text>
          <rect x="480" y="70" width="98" height="6" rx="3" fill="#1e293b"/>
          <rect x="480" y="70" width="76" height="6" rx="3" fill="#ef4444"/>
          <text x="529" y="90" font-size="8" fill="#fca5a5" text-anchor="middle">LIMITDAN YUQORI</text>

          <!-- Bottom Metric Ticker -->
          <rect x="15" y="125" width="570" height="20" rx="6" fill="#090d16" stroke="#1e293b"/>
          <text x="25" y="139" font-size="9.5" fill="#e2e8f0" font-weight="semibold">📊 Parametr: ${this.cleanText(info, 75)}</text>
        </svg>
      </div>
    `;
  },

  // 2. Skrubber va Gaz Tozalash Minorasi Animatsiyasi
  renderGasScrubber(id, title, info, gameId) {
    return `
      <div class="relative w-full rounded-2xl overflow-hidden border border-cyan-500/40 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 shadow-2xl p-2.5 select-none mb-3">
        <style>${this.getCommonStyles()}</style>
        <div class="flex items-center justify-between px-2 py-1 mb-1.5 border-b border-slate-800 text-[10px] font-bold">
          <div class="flex items-center gap-1.5 text-cyan-400">
            <span class="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
            <span class="uppercase tracking-wider">💧 Kimyoviy Skrubber & Neytrallash Minorasi #${id}</span>
          </div>
          <span class="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 text-[9px]">GAZ ABSORBSIYASI</span>
        </div>

        <svg viewBox="0 0 600 150" class="w-full h-auto rounded-xl bg-slate-950 border border-slate-800/80">
          <!-- Inflow duct -->
          <rect x="30" y="75" width="80" height="24" rx="4" fill="#1e293b" stroke="#06b6d4" stroke-width="1.5"/>
          <text x="70" y="91" font-size="9" fill="#67e8f9" font-weight="bold" text-anchor="middle">ZAHARLI GAZ</text>
          <path d="M 30 87 L 110 87" stroke="#06b6d4" stroke-width="2" class="eco-pipe-dash"/>

          <!-- Main Scrubber Column -->
          <rect x="130" y="15" width="110" height="110" rx="16" fill="#0f172a" stroke="#06b6d4" stroke-width="2"/>
          <text x="185" y="32" font-size="9" fill="#38bdf8" font-weight="bold" text-anchor="middle">SUG'ORMA MINORASI</text>

          <!-- Spray Nozzles -->
          <line x1="145" y1="42" x2="225" y2="42" stroke="#38bdf8" stroke-width="3"/>
          <circle cx="160" cy="42" r="3" fill="#38bdf8"/>
          <circle cx="185" cy="42" r="3" fill="#38bdf8"/>
          <circle cx="210" cy="42" r="3" fill="#38bdf8"/>

          <!-- Animated Liquid Mist Drops -->
          <line x1="160" y1="46" x2="160" y2="52" stroke="#38bdf8" stroke-width="2" stroke-linecap="round" class="eco-spray-1"/>
          <line x1="185" y1="46" x2="185" y2="52" stroke="#38bdf8" stroke-width="2" stroke-linecap="round" class="eco-spray-2"/>
          <line x1="210" y1="46" x2="210" y2="52" stroke="#38bdf8" stroke-width="2" stroke-linecap="round" class="eco-spray-3"/>

          <!-- Sump liquid at bottom -->
          <rect x="131" y="100" width="108" height="24" rx="6" fill="#0369a1" opacity="0.65"/>
          <text x="185" y="116" font-size="8" fill="#bae6fd" text-anchor="middle">NEORGANIK ERITMA</text>

          <!-- Circulation Pump -->
          <circle cx="285" cy="100" r="18" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
          <path d="M 285 86 L 285 114 M 271 100 L 299 100" stroke="#38bdf8" stroke-width="2.5" class="eco-gear-spin"/>
          <text x="285" y="128" font-size="8" fill="#94a3b8" text-anchor="middle">NASOS</text>

          <!-- Manometer Pressure Gauge -->
          <circle cx="360" cy="55" r="22" fill="#030712" stroke="#f59e0b" stroke-width="2"/>
          <line x1="360" y1="55" x2="370" y2="45" stroke="#f59e0b" stroke-width="2.5" stroke-linecap="round" class="eco-needle-swing"/>
          <text x="360" y="70" font-size="8" fill="#fbbf24" font-weight="bold" text-anchor="middle">ΔP BOSIM</text>

          <!-- Telemetry Readout -->
          <rect x="420" y="20" width="165" height="95" rx="10" fill="#030712" stroke="#334155" stroke-width="1.5"/>
          <text x="502" y="38" font-size="9" fill="#94a3b8" font-weight="bold" text-anchor="middle">GAZ KONSENTRATSIYASI</text>
          <text x="502" y="60" font-size="14" fill="#06b6d4" font-weight="900" text-anchor="middle">NH3 / SO2 ANALIZI</text>
          <rect x="435" y="74" width="135" height="6" rx="3" fill="#1e293b"/>
          <rect x="435" y="74" width="95" height="6" rx="3" fill="#06b6d4"/>
          <text x="502" y="94" font-size="8" fill="#67e8f9" text-anchor="middle">SAMARADORLIK: 98.4%</text>

          <!-- Bottom Metric -->
          <rect x="15" y="125" width="570" height="20" rx="6" fill="#090d16" stroke="#1e293b"/>
          <text x="25" y="139" font-size="9.5" fill="#e2e8f0" font-weight="semibold">🔬 Ko'rsatkich: ${this.cleanText(info, 75)}</text>
        </svg>
      </div>
    `;
  },

  // 3. Oqava Suv Aeratenki va Loy Tindirgichi Animatsiyasi
  renderWastewaterBasin(id, title, info, gameId) {
    return `
      <div class="relative w-full rounded-2xl overflow-hidden border border-teal-500/40 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 shadow-2xl p-2.5 select-none mb-3">
        <style>${this.getCommonStyles()}</style>
        <div class="flex items-center justify-between px-2 py-1 mb-1.5 border-b border-slate-800 text-[10px] font-bold">
          <div class="flex items-center gap-1.5 text-teal-400">
            <span class="w-2 h-2 rounded-full bg-teal-400 animate-ping"></span>
            <span class="uppercase tracking-wider">🌊 Biologik Aeratenk & Cho'ktirgich Havzasi #${id}</span>
          </div>
          <span class="px-2 py-0.5 rounded bg-teal-500/10 text-teal-300 border border-teal-500/30 text-[9px]">SUV MUHOFAZASI</span>
        </div>

        <svg viewBox="0 0 600 150" class="w-full h-auto rounded-xl bg-slate-950 border border-slate-800/80">
          <!-- Inflow pipe -->
          <path d="M 20 60 L 80 60 L 80 85" stroke="#14b8a6" stroke-width="4" fill="none" class="eco-pipe-dash"/>
          <text x="50" y="52" font-size="8" fill="#5eead4" font-weight="bold">XOM OQAVA</text>

          <!-- Aeration Basin Tank -->
          <rect x="90" y="35" width="180" height="85" rx="8" fill="#042f2e" stroke="#14b8a6" stroke-width="2"/>
          <text x="180" y="50" font-size="9" fill="#2dd4bf" font-weight="bold" text-anchor="middle">AEROTENK (FAOL LOY)</text>

          <!-- Animated Surface Waves -->
          <path d="M 95 62 Q 130 57 165 62 T 235 62 T 265 62" stroke="#5eead4" stroke-width="2" fill="none" class="eco-wave-drift"/>

          <!-- Diffuser Aerators (Rising Oxygen Bubbles) -->
          <line x1="110" y1="105" x2="250" y2="105" stroke="#0f766e" stroke-width="4"/>
          <circle cx="130" cy="98" r="3.5" fill="#5eead4" class="eco-bubble-1"/>
          <circle cx="160" cy="95" r="4.5" fill="#5eead4" class="eco-bubble-2"/>
          <circle cx="190" cy="98" r="3" fill="#5eead4" class="eco-bubble-3"/>
          <circle cx="225" cy="94" r="4" fill="#5eead4" class="eco-bubble-4"/>

          <!-- Secondary Clarifier Basin -->
          <polygon points="310,35 430,35 400,115 340,115" fill="#0f172a" stroke="#0d9488" stroke-width="2"/>
          <text x="370" y="50" font-size="9" fill="#99f6e4" font-weight="bold" text-anchor="middle">IKKILAMCHI TINTIRGICH</text>
          
          <!-- Clarifier Central Shaft & Scraper -->
          <line x1="370" y1="35" x2="370" y2="105" stroke="#5eead4" stroke-width="2"/>
          <line x1="345" y1="105" x2="395" y2="105" stroke="#5eead4" stroke-width="2.5" class="eco-needle-swing"/>

          <!-- Telemetry HUD -->
          <rect x="450" y="20" width="135" height="95" rx="10" fill="#030712" stroke="#334155" stroke-width="1.5"/>
          <text x="517" y="38" font-size="9" fill="#94a3b8" font-weight="bold" text-anchor="middle">KISLOROD & BOD</text>
          <text x="517" y="58" font-size="13" fill="#14b8a6" font-weight="900" text-anchor="middle">DO: 4.2 mg/l</text>
          <rect x="465" y="72" width="105" height="6" rx="3" fill="#1e293b"/>
          <rect x="465" y="72" width="80" height="6" rx="3" fill="#14b8a6"/>
          <text x="517" y="92" font-size="8" fill="#5eead4" text-anchor="middle">BOD KAMAYISHI: 92%</text>

          <!-- Bottom Metric -->
          <rect x="15" y="125" width="570" height="20" rx="6" fill="#090d16" stroke="#1e293b"/>
          <text x="25" y="139" font-size="9.5" fill="#e2e8f0" font-weight="semibold">🧪 Suv tahlili: ${this.cleanText(info, 75)}</text>
        </svg>
      </div>
    `;
  },

  // 4. Sanitar-Himoya Zonasi (SHZ) Lazer Masofa Radari Animatsiyasi
  renderSanitaryRadar(id, title, info, gameId) {
    return `
      <div class="relative w-full rounded-2xl overflow-hidden border border-purple-500/40 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 shadow-2xl p-2.5 select-none mb-3">
        <style>${this.getCommonStyles()}</style>
        <div class="flex items-center justify-between px-2 py-1 mb-1.5 border-b border-slate-800 text-[10px] font-bold">
          <div class="flex items-center gap-1.5 text-purple-400">
            <span class="w-2 h-2 rounded-full bg-purple-400 animate-ping"></span>
            <span class="uppercase tracking-wider">📏 Sanitar-Himoya Zonasi (SHZ) & Masofa Radari #${id}</span>
          </div>
          <span class="px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 border border-purple-500/30 text-[9px]">SanQvaM ME'YORI</span>
        </div>

        <svg viewBox="0 0 600 150" class="w-full h-auto rounded-xl bg-slate-950 border border-slate-800/80">
          <!-- Industrial Plant Silhouette on Left -->
          <rect x="25" y="45" width="75" height="70" rx="4" fill="#1e1b4b" stroke="#818cf8" stroke-width="1.5"/>
          <polygon points="40,45 55,20 65,20 65,45" fill="#312e81"/>
          <polygon points="70,45 80,15 90,15 90,45" fill="#312e81"/>
          <circle cx="85" cy="10" r="4" fill="#a5b4fc" opacity="0.6" class="eco-bubble-1"/>
          <text x="62" y="90" font-size="9" fill="#c7d2fe" font-weight="bold" text-anchor="middle">SANOAT</text>

          <!-- Distance Measurement Zone / Radar Beam -->
          <line x1="105" y1="80" x2="455" y2="80" stroke="#a855f7" stroke-width="2.5" stroke-dasharray="6,4"/>
          <line x1="105" y1="70" x2="105" y2="90" stroke="#a855f7" stroke-width="3"/>
          <line x1="455" y1="70" x2="455" y2="90" stroke="#a855f7" stroke-width="3"/>

          <!-- Laser Sweep Scanning Bar -->
          <line x1="160" y1="65" x2="160" y2="95" stroke="#ec4899" stroke-width="3" stroke-linecap="round" class="eco-laser-sweep"/>

          <!-- Animated Radar Circles -->
          <circle cx="280" cy="80" r="12" fill="none" stroke="#a855f7" stroke-width="1.5" class="eco-radar-p1"/>
          <circle cx="280" cy="80" r="26" fill="none" stroke="#c084fc" stroke-width="1.2" class="eco-radar-p2"/>

          <!-- Protective Green Belt Tree Icons -->
          <circle cx="220" cy="100" r="10" fill="#065f46" stroke="#10b981"/>
          <circle cx="240" cy="98" r="12" fill="#047857" stroke="#10b981"/>
          <circle cx="260" cy="100" r="9" fill="#065f46" stroke="#10b981"/>

          <!-- Residential Buildings on Right -->
          <rect x="460" y="55" width="45" height="60" rx="3" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
          <polygon points="455,55 482,35 510,55" fill="#0f766e"/>
          <rect x="472" y="68" width="8" height="8" fill="#fef08a"/>
          <rect x="488" y="68" width="8" height="8" fill="#fef08a"/>
          <text x="482" y="100" font-size="8" fill="#94a3b8" text-anchor="middle">AHOLI</text>

          <!-- Warning Deficit Marker Box -->
          <rect x="220" y="25" width="130" height="28" rx="6" fill="#450a0a" stroke="#ef4444" stroke-width="1.5"/>
          <text x="285" y="42" font-size="9" fill="#fecaca" font-weight="900" text-anchor="middle">⚠️ MASOFA TALABI</text>

          <!-- Telemetry Gauge on Far Right -->
          <rect x="520" y="20" width="70" height="95" rx="8" fill="#030712" stroke="#334155" stroke-width="1"/>
          <text x="555" y="40" font-size="8" fill="#c084fc" font-weight="bold" text-anchor="middle">SHZ RADAR</text>
          <text x="555" y="65" font-size="12" fill="#ec4899" font-weight="900" text-anchor="middle">DEFITSIT</text>
          <text x="555" y="90" font-size="7.5" fill="#f43f5e" text-anchor="middle">NORMA XALOS</text>

          <!-- Bottom Metric -->
          <rect x="15" y="125" width="570" height="20" rx="6" fill="#090d16" stroke="#1e293b"/>
          <text x="25" y="139" font-size="9.5" fill="#e2e8f0" font-weight="semibold">📐 Masofa tahlili: ${this.cleanText(info, 75)}</text>
        </svg>
      </div>
    `;
  },

  // 5. Akustik Shovqin To'sig'i va Desibel To'lqinlari Animatsiyasi
  renderNoiseBarrier(id, title, info, gameId) {
    return `
      <div class="relative w-full rounded-2xl overflow-hidden border border-rose-500/40 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 shadow-2xl p-2.5 select-none mb-3">
        <style>${this.getCommonStyles()}</style>
        <div class="flex items-center justify-between px-2 py-1 mb-1.5 border-b border-slate-800 text-[10px] font-bold">
          <div class="flex items-center gap-1.5 text-rose-400">
            <span class="w-2 h-2 rounded-full bg-rose-400 animate-ping"></span>
            <span class="uppercase tracking-wider">🔊 Akustik Shovqin To'sig'i & Desibel Ekranlash #${id}</span>
          </div>
          <span class="px-2 py-0.5 rounded bg-rose-500/10 text-rose-300 border border-rose-500/30 text-[9px]">AKUSTIKA & dB(A)</span>
        </div>

        <svg viewBox="0 0 600 150" class="w-full h-auto rounded-xl bg-slate-950 border border-slate-800/80">
          <!-- Highway / Train Track Source -->
          <rect x="30" y="85" width="130" height="30" rx="6" fill="#1e293b" stroke="#64748b"/>
          <line x1="30" y1="100" x2="160" y2="100" stroke="#facc15" stroke-width="2" stroke-dasharray="8,6"/>
          <text x="95" y="75" font-size="9" fill="#f87171" font-weight="bold" text-anchor="middle">MAGISTRAL (85 dB)</text>

          <!-- Radiating Sound Waves -->
          <path d="M 170 65 A 40 40 0 0 1 170 125" stroke="#ef4444" stroke-width="2.5" fill="none" class="eco-sound-arc"/>
          <path d="M 195 55 A 60 60 0 0 1 195 135" stroke="#f87171" stroke-width="2" fill="none" class="eco-sound-arc-2"/>

          <!-- High Acoustic Wall Barrier -->
          <rect x="250" y="20" width="22" height="98" rx="4" fill="#0f172a" stroke="#f43f5e" stroke-width="2.5"/>
          <line x1="261" y1="20" x2="261" y2="118" stroke="#f43f5e" stroke-width="1" stroke-dasharray="3,3"/>
          <text x="261" y="70" font-size="8" fill="#fda4af" font-weight="bold" transform="rotate(-90 261 70)" text-anchor="middle">EKRAN (4 METR)</text>

          <!-- Dampened Sound Waves Behind Wall -->
          <path d="M 290 85 A 25 25 0 0 1 290 105" stroke="#10b981" stroke-width="1.5" fill="none" stroke-dasharray="3,3"/>
          <path d="M 315 80 A 35 35 0 0 1 315 110" stroke="#10b981" stroke-width="1" fill="none" stroke-dasharray="3,3"/>

          <!-- Quiet Residential Settlement -->
          <rect x="350" y="60" width="55" height="55" rx="4" fill="#064e3b" stroke="#10b981" stroke-width="1.5"/>
          <polygon points="345,60 377,40 410,60" fill="#047857"/>
          <text x="377" y="92" font-size="8" fill="#a7f3d0" font-weight="bold" text-anchor="middle">55 dB(A)</text>

          <!-- Decibel Meter Display -->
          <rect x="440" y="20" width="145" height="95" rx="10" fill="#030712" stroke="#334155" stroke-width="1.5"/>
          <text x="512" y="38" font-size="9" fill="#94a3b8" font-weight="bold" text-anchor="middle">SHOVQIN DARAJASI</text>
          <text x="512" y="60" font-size="15" fill="#f43f5e" font-weight="900" text-anchor="middle">85 dB(A)</text>
          <rect x="455" y="74" width="115" height="6" rx="3" fill="#1e293b"/>
          <rect x="455" y="74" width="90" height="6" rx="3" fill="#ef4444"/>
          <text x="512" y="94" font-size="8" fill="#fda4af" text-anchor="middle">ME'YORDAGI XAVF: +30 dB</text>

          <!-- Bottom Metric -->
          <rect x="15" y="125" width="570" height="20" rx="6" fill="#090d16" stroke="#1e293b"/>
          <text x="25" y="139" font-size="9.5" fill="#e2e8f0" font-weight="semibold">📊 Akustika: ${this.cleanText(info, 75)}</text>
        </svg>
      </div>
    `;
  },

  // 6. Elektrofiltr va Quvurdan Chang Tozalash
  renderElectrostaticFilter(id, title, info, gameId) {
    return `
      <div class="relative w-full rounded-2xl overflow-hidden border border-blue-500/40 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 shadow-2xl p-2.5 select-none mb-3">
        <style>${this.getCommonStyles()}</style>
        <div class="flex items-center justify-between px-2 py-1 mb-1.5 border-b border-slate-800 text-[10px] font-bold">
          <div class="flex items-center gap-1.5 text-blue-400">
            <span class="w-2 h-2 rounded-full bg-blue-400 animate-ping"></span>
            <span class="uppercase tracking-wider">⚡ 5-Polyusli Elektrofiltr & Kul Tutqich #${id}</span>
          </div>
          <span class="px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/30 text-[9px]">SAMARADORLIK 99.5%</span>
        </div>

        <svg viewBox="0 0 600 150" class="w-full h-auto rounded-xl bg-slate-950 border border-slate-800/80">
          <!-- Flue gas inlet duct -->
          <rect x="30" y="65" width="70" height="40" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>
          <circle cx="50" cy="80" r="3" fill="#64748b"/>
          <circle cx="65" cy="90" r="2.5" fill="#64748b"/>
          <circle cx="80" cy="75" r="3.5" fill="#64748b"/>
          <text x="65" y="58" font-size="8" fill="#93c5fd" text-anchor="middle">KUL VA CHANG</text>

          <!-- Electrostatic Precipitator Housing -->
          <rect x="110" y="25" width="180" height="95" rx="10" fill="#0f172a" stroke="#3b82f6" stroke-width="2"/>
          <text x="200" y="42" font-size="9" fill="#60a5fa" font-weight="bold" text-anchor="middle">YUQORI VOLTLI ELEKTROD MAYDONI</text>

          <!-- Electrode Plates & Spark Arc -->
          <line x1="140" y1="50" x2="140" y2="105" stroke="#93c5fd" stroke-width="3"/>
          <line x1="170" y1="50" x2="170" y2="105" stroke="#38bdf8" stroke-width="2" class="eco-arc-flash"/>
          <line x1="200" y1="50" x2="200" y2="105" stroke="#93c5fd" stroke-width="3"/>
          <line x1="230" y1="50" x2="230" y2="105" stroke="#38bdf8" stroke-width="2" class="eco-arc-flash"/>
          <line x1="260" y1="50" x2="260" y2="105" stroke="#93c5fd" stroke-width="3"/>

          <!-- Clean smokestack outlet -->
          <path d="M 300 105 L 320 20 L 350 20 L 370 105 Z" fill="#1e293b" stroke="#60a5fa" stroke-width="1.5"/>
          <circle cx="335" cy="12" r="5" fill="#bae6fd" opacity="0.5" class="eco-bubble-1"/>
          <circle cx="335" cy="4" r="8" fill="#bae6fd" opacity="0.3" class="eco-bubble-2"/>
          <text x="335" y="45" font-size="8" fill="#93c5fd" font-weight="bold" text-anchor="middle">TOZA HAVO</text>

          <!-- Telemetry HUD -->
          <rect x="410" y="20" width="175" height="95" rx="10" fill="#030712" stroke="#334155" stroke-width="1.5"/>
          <text x="497" y="38" font-size="9" fill="#94a3b8" font-weight="bold" text-anchor="middle">FILTR SAMARASI</text>
          <text x="497" y="60" font-size="16" fill="#38bdf8" font-weight="900" text-anchor="middle">99.7 %</text>
          <rect x="425" y="74" width="145" height="6" rx="3" fill="#1e293b"/>
          <rect x="425" y="74" width="140" height="6" rx="3" fill="#38bdf8"/>
          <text x="497" y="94" font-size="8" fill="#93c5fd" text-anchor="middle">EMISSIYA PDK ME'YORIDA</text>

          <!-- Bottom Metric -->
          <rect x="15" y="125" width="570" height="20" rx="6" fill="#090d16" stroke="#1e293b"/>
          <text x="25" y="139" font-size="9.5" fill="#e2e8f0" font-weight="semibold">⚡ Elektrofiltr ma'lumoti: ${this.cleanText(info, 75)}</text>
        </svg>
      </div>
    `;
  },

  // 7. Kimyoviy Elektroliz va Toksik Galvanika
  renderChemicalElectrolysis(id, title, info, gameId) {
    return `
      <div class="relative w-full rounded-2xl overflow-hidden border border-yellow-500/40 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 shadow-2xl p-2.5 select-none mb-3">
        <style>${this.getCommonStyles()}</style>
        <div class="flex items-center justify-between px-2 py-1 mb-1.5 border-b border-slate-800 text-[10px] font-bold">
          <div class="flex items-center gap-1.5 text-yellow-400">
            <span class="w-2 h-2 rounded-full bg-yellow-400 animate-ping"></span>
            <span class="uppercase tracking-wider">🧪 Kimyoviy Elektroliz & Og'ir Metallar Vannasi #${id}</span>
          </div>
          <span class="px-2 py-0.5 rounded bg-yellow-500/10 text-yellow-300 border border-yellow-500/30 text-[9px]">TOKSIK I/II TOIFA</span>
        </div>

        <svg viewBox="0 0 600 150" class="w-full h-auto rounded-xl bg-slate-950 border border-slate-800/80">
          <!-- Heavy Chemical Vat -->
          <rect x="60" y="30" width="220" height="90" rx="10" fill="#0f172a" stroke="#eab308" stroke-width="2"/>
          <rect x="65" y="60" width="210" height="55" rx="6" fill="#ca8a04" opacity="0.45"/>
          <text x="170" y="48" font-size="9" fill="#fef08a" font-weight="bold" text-anchor="middle">GALVANIKA VANNASI (Cr / Ni)</text>

          <!-- Electrodes -->
          <rect x="100" y="40" width="14" height="60" fill="#94a3b8" stroke="#facc15" stroke-width="1.5"/>
          <text x="107" y="35" font-size="8" fill="#facc15" font-weight="bold" text-anchor="middle">+</text>
          
          <rect x="220" y="40" width="14" height="60" fill="#94a3b8" stroke="#facc15" stroke-width="1.5"/>
          <text x="227" y="35" font-size="8" fill="#facc15" font-weight="bold" text-anchor="middle">-</text>

          <!-- Bubbling Electrolysis Gases -->
          <circle cx="107" cy="85" r="3" fill="#fef08a" class="eco-bubble-1"/>
          <circle cx="125" cy="78" r="4" fill="#fef08a" class="eco-bubble-2"/>
          <circle cx="170" cy="82" r="3.5" fill="#fef08a" class="eco-bubble-3"/>
          <circle cx="227" cy="88" r="4" fill="#fef08a" class="eco-bubble-4"/>

          <!-- Sludge Drain Pipe -->
          <path d="M 170 120 L 170 135 L 320 135" stroke="#eab308" stroke-width="3" fill="none" class="eco-pipe-dash"/>
          <circle cx="320" cy="135" r="5" fill="#eab308"/>

          <!-- Neutralization Reactor Tank -->
          <rect x="310" y="35" width="90" height="85" rx="8" fill="#1e1b4b" stroke="#a855f7" stroke-width="1.5"/>
          <text x="355" y="52" font-size="8" fill="#c084fc" font-weight="bold" text-anchor="middle">NEYTRALLASH</text>
          <line x1="355" y1="60" x2="355" y2="105" stroke="#c084fc" stroke-width="2" class="eco-needle-swing"/>

          <!-- Telemetry HUD -->
          <rect x="430" y="20" width="155" height="95" rx="10" fill="#030712" stroke="#334155" stroke-width="1.5"/>
          <text x="507" y="38" font-size="9" fill="#94a3b8" font-weight="bold" text-anchor="middle">OG'IR METALL KONSENTRATSIYASI</text>
          <text x="507" y="60" font-size="14" fill="#eab308" font-weight="900" text-anchor="middle">Cr(VI) > 0.05 mg/l</text>
          <rect x="445" y="74" width="125" height="6" rx="3" fill="#1e293b"/>
          <rect x="445" y="74" width="98" height="6" rx="3" fill="#eab308"/>
          <text x="507" y="94" font-size="8" fill="#fef08a" text-anchor="middle">TOKSOKOLOGIK XAVF</text>

          <!-- Bottom Metric -->
          <rect x="15" y="125" width="570" height="20" rx="6" fill="#090d16" stroke="#1e293b"/>
          <text x="25" y="139" font-size="9.5" fill="#e2e8f0" font-weight="semibold">🧪 Kimyo: ${this.cleanText(info, 75)}</text>
        </svg>
      </div>
    `;
  },

  // 8. QMQ Sanitar Poligoni va Geomembrana Filtrat Drenaji
  renderLandfillMembrane(id, title, info, gameId) {
    return `
      <div class="relative w-full rounded-2xl overflow-hidden border border-emerald-500/40 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 shadow-2xl p-2.5 select-none mb-3">
        <style>${this.getCommonStyles()}</style>
        <div class="flex items-center justify-between px-2 py-1 mb-1.5 border-b border-slate-800 text-[10px] font-bold">
          <div class="flex items-center gap-1.5 text-emerald-400">
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span class="uppercase tracking-wider">♻️ Sanitar Poligon & HDPE Geomembrana Filtrat Drenaji #${id}</span>
          </div>
          <span class="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 text-[9px]">CHIQINDILAR</span>
        </div>

        <svg viewBox="0 0 600 150" class="w-full h-auto rounded-xl bg-slate-950 border border-slate-800/80">
          <!-- Landfill Strata Cross Section -->
          <polygon points="30,40 280,40 250,110 60,110" fill="#292524" stroke="#78716c"/>
          <text x="155" y="60" font-size="9" fill="#d6d3d1" font-weight="bold" text-anchor="middle">ZICHLANGAN CHIQINDI QATLAMI</text>

          <!-- Black HDPE Geomembrane Layer -->
          <line x1="55" y1="112" x2="255" y2="112" stroke="#10b981" stroke-width="4"/>
          <text x="155" y="126" font-size="8" fill="#34d399" font-weight="bold" text-anchor="middle">1.5 mm HDPE GEOMEMBRANA</text>

          <!-- Leachate Drainage Pipe & Animated Dripping -->
          <circle cx="265" cy="112" r="8" fill="#047857" stroke="#10b981" stroke-width="2"/>
          <circle cx="265" cy="122" r="2.5" fill="#34d399" class="eco-drip-drop"/>

          <!-- Methane Extraction Gas Well -->
          <line x1="120" y1="30" x2="120" y2="90" stroke="#0ea5e9" stroke-width="3" stroke-dasharray="4,2"/>
          <circle cx="120" cy="25" r="4" fill="#0ea5e9"/>
          
          <!-- Methane Flare Torch Flame -->
          <path d="M 115 20 Q 120 5 125 20 Z" fill="#06b6d4" class="eco-flame-blue"/>
          <text x="120" y="8" font-size="8" fill="#38bdf8" font-weight="bold" text-anchor="middle">CH4 FAZASI</text>

          <!-- Leachate Collection Pond -->
          <polygon points="300,70 390,70 380,115 310,115" fill="#064e3b" stroke="#10b981" stroke-width="1.5"/>
          <text x="345" y="95" font-size="8" fill="#a7f3d0" font-weight="bold" text-anchor="middle">FILTRAT HOVUZI</text>

          <!-- Telemetry HUD -->
          <rect x="420" y="20" width="165" height="95" rx="10" fill="#030712" stroke="#334155" stroke-width="1.5"/>
          <text x="502" y="38" font-size="9" fill="#94a3b8" font-weight="bold" text-anchor="middle">FILTRAT SIZISH DATCHIGI</text>
          <text x="502" y="58" font-size="14" fill="#10b981" font-weight="900" text-anchor="middle">0.00 % SIZISH</text>
          <rect x="435" y="74" width="135" height="6" rx="3" fill="#1e293b"/>
          <rect x="435" y="74" width="135" height="6" rx="3" fill="#10b981"/>
          <text x="502" y="94" font-size="8" fill="#a7f3d0" text-anchor="middle">EKOLOGIK XAVFSIZ</text>

          <!-- Bottom Metric -->
          <rect x="15" y="125" width="570" height="20" rx="6" fill="#090d16" stroke="#1e293b"/>
          <text x="25" y="139" font-size="9.5" fill="#e2e8f0" font-weight="semibold">♻️ Poligon tahlili: ${this.cleanText(info, 75)}</text>
        </svg>
      </div>
    `;
  },

  // 9. Tibbiy Chiqindi Avtoklavi va Biohazard Zararsizlantirish
  renderMedicalAutoclave(id, title, info, gameId) {
    return `
      <div class="relative w-full rounded-2xl overflow-hidden border border-red-500/40 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 shadow-2xl p-2.5 select-none mb-3">
        <style>${this.getCommonStyles()}</style>
        <div class="flex items-center justify-between px-2 py-1 mb-1.5 border-b border-slate-800 text-[10px] font-bold">
          <div class="flex items-center gap-1.5 text-red-400">
            <span class="w-2 h-2 rounded-full bg-red-400 animate-ping"></span>
            <span class="uppercase tracking-wider">☣️ Tibbiy Chiqindi Bosimli Avtoklav & Dezinfeksiya #${id}</span>
          </div>
          <span class="px-2 py-0.5 rounded bg-red-500/10 text-red-300 border border-red-500/30 text-[9px]">B/V SINF BIOXAVF</span>
        </div>

        <svg viewBox="0 0 600 150" class="w-full h-auto rounded-xl bg-slate-950 border border-slate-800/80">
          <!-- Autoclave Cylindrical Pressure Chamber -->
          <rect x="50" y="25" width="180" height="95" rx="24" fill="#0f172a" stroke="#ef4444" stroke-width="2.5"/>
          <text x="140" y="45" font-size="9" fill="#fca5a5" font-weight="bold" text-anchor="middle">GERMETIK BUG' KAMERASI</text>

          <!-- Circular Geared Door with Locking Lugs -->
          <circle cx="95" cy="75" r="28" fill="#1e293b" stroke="#f87171" stroke-width="2"/>
          <circle cx="95" cy="75" r="16" fill="#450a0a" stroke="#ef4444" stroke-width="1.5" class="eco-bio-hazard"/>
          <text x="95" y="79" font-size="12" fill="#ef4444" font-weight="900" text-anchor="middle">☣</text>

          <!-- Steam Jets Inside -->
          <circle cx="160" cy="70" r="4" fill="#fecaca" opacity="0.6" class="eco-bubble-1"/>
          <circle cx="185" cy="80" r="5" fill="#fecaca" opacity="0.5" class="eco-bubble-2"/>

          <!-- Pressure Manometer Dial -->
          <circle cx="280" cy="65" r="24" fill="#030712" stroke="#f59e0b" stroke-width="2"/>
          <line x1="280" y1="65" x2="292" y2="55" stroke="#f59e0b" stroke-width="3" stroke-linecap="round" class="eco-needle-swing"/>
          <text x="280" y="98" font-size="8" fill="#fbbf24" font-weight="bold" text-anchor="middle">3.5 BAR (134°C)</text>

          <!-- Telemetry HUD -->
          <rect x="360" y="20" width="225" height="95" rx="10" fill="#030712" stroke="#334155" stroke-width="1.5"/>
          <text x="472" y="38" font-size="9" fill="#94a3b8" font-weight="bold" text-anchor="middle">STERILIZATSIYA MONITORINGI</text>
          <text x="472" y="60" font-size="14" fill="#ef4444" font-weight="900" text-anchor="middle">100% PATOGEN NOBUD</text>
          <rect x="380" y="74" width="185" height="6" rx="3" fill="#1e293b"/>
          <rect x="380" y="74" width="185" height="6" rx="3" fill="#ef4444"/>
          <text x="472" y="94" font-size="8" fill="#fca5a5" text-anchor="middle">AVTOKLAV SIKLI TUGALLANGAN</text>

          <!-- Bottom Metric -->
          <rect x="15" y="125" width="570" height="20" rx="6" fill="#090d16" stroke="#1e293b"/>
          <text x="25" y="139" font-size="9.5" fill="#e2e8f0" font-weight="semibold">☣️ Tibbiy holat: ${this.cleanText(info, 75)}</text>
        </svg>
      </div>
    `;
  },

  // 10. Tabiat Bog'i, Daryo va Baliq Yo'lagi (Ryboxod) Animatsiyasi
  renderNatureReserve(id, title, info, gameId) {
    return `
      <div class="relative w-full rounded-2xl overflow-hidden border border-emerald-500/40 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 shadow-2xl p-2.5 select-none mb-3">
        <style>${this.getCommonStyles()}</style>
        <div class="flex items-center justify-between px-2 py-1 mb-1.5 border-b border-slate-800 text-[10px] font-bold">
          <div class="flex items-center gap-1.5 text-emerald-400">
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span class="uppercase tracking-wider">🌿 Milliy Tabiat Bog'i & Daryo Ekotizimi #${id}</span>
          </div>
          <span class="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 text-[9px]">QIZIL KITOB & FAUNA</span>
        </div>

        <svg viewBox="0 0 600 150" class="w-full h-auto rounded-xl bg-slate-950 border border-slate-800/80">
          <!-- Mountain Backdrop -->
          <polygon points="20,100 80,30 140,100" fill="#064e3b" opacity="0.6"/>
          <polygon points="100,100 170,20 240,100" fill="#047857" opacity="0.8"/>
          
          <!-- Flying Bird Silhouette -->
          <path d="M 120 25 Q 128 20 136 25 Q 144 20 152 25" stroke="#fef08a" stroke-width="1.8" fill="none"/>

          <!-- River Stream with Waves -->
          <path d="M 20 110 Q 150 90 280 115 T 450 110" stroke="#38bdf8" stroke-width="8" fill="none" opacity="0.75" class="eco-wave-drift"/>

          <!-- Stepped Fish Ladder (Ryboxod) -->
          <rect x="250" y="80" width="30" height="35" rx="3" fill="#1e293b" stroke="#38bdf8"/>
          <rect x="280" y="90" width="30" height="25" rx="3" fill="#1e293b" stroke="#38bdf8"/>
          <rect x="310" y="100" width="30" height="15" rx="3" fill="#1e293b" stroke="#38bdf8"/>

          <!-- Jumping Fish Animation -->
          <path d="M 260 85 Q 270 70 280 85" stroke="#fbbf24" stroke-width="2.5" fill="none" class="eco-fish-leap"/>
          <text x="295" y="70" font-size="8" fill="#fef08a" font-weight="bold" text-anchor="middle">BALIQ O'TKAZGICH</text>

          <!-- Telemetry HUD -->
          <rect x="420" y="20" width="165" height="95" rx="10" fill="#030712" stroke="#334155" stroke-width="1.5"/>
          <text x="502" y="38" font-size="9" fill="#94a3b8" font-weight="bold" text-anchor="middle">BIOXILMA-XILLIK HOLATI</text>
          <text x="502" y="60" font-size="14" fill="#10b981" font-weight="900" text-anchor="middle">POPULYATSIYA BARQAROR</text>
          <rect x="435" y="74" width="135" height="6" rx="3" fill="#1e293b"/>
          <rect x="435" y="74" width="125" height="6" rx="3" fill="#10b981"/>
          <text x="502" y="94" font-size="8" fill="#6ee7b7" text-anchor="middle">MIGRATSIYA YO'LI OCHIQ</text>

          <!-- Bottom Metric -->
          <rect x="15" y="125" width="570" height="20" rx="6" fill="#090d16" stroke="#1e293b"/>
          <text x="25" y="139" font-size="9.5" fill="#e2e8f0" font-weight="semibold">🌲 Tabiiy obyekt: ${this.cleanText(info, 75)}</text>
        </svg>
      </div>
    `;
  },

  // 11. E-Chiqindi va Litiy Batareya Qayta Ishlash
  renderEWasteRecycler(id, title, info, gameId) {
    return `
      <div class="relative w-full rounded-2xl overflow-hidden border border-cyan-500/40 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 shadow-2xl p-2.5 select-none mb-3">
        <style>${this.getCommonStyles()}</style>
        <div class="flex items-center justify-between px-2 py-1 mb-1.5 border-b border-slate-800 text-[10px] font-bold">
          <div class="flex items-center gap-1.5 text-cyan-400">
            <span class="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
            <span class="uppercase tracking-wider">🔋 E-Chiqindi & Litiy-Ion Batareyalarni Maydalash #${id}</span>
          </div>
          <span class="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 text-[9px]">QORA MASSA / LI-ION</span>
        </div>

        <svg viewBox="0 0 600 150" class="w-full h-auto rounded-xl bg-slate-950 border border-slate-800/80">
          <!-- Battery Feeding Conveyor -->
          <rect x="30" y="70" width="100" height="25" rx="4" fill="#1e293b" stroke="#06b6d4"/>
          <rect x="50" y="60" width="20" height="10" rx="2" fill="#22c55e"/>
          <rect x="85" y="60" width="20" height="10" rx="2" fill="#22c55e"/>

          <!-- Inert Nitrogen Shredder Chamber -->
          <rect x="145" y="30" width="120" height="85" rx="10" fill="#0f172a" stroke="#06b6d4" stroke-width="2"/>
          <text x="205" y="48" font-size="8.5" fill="#67e8f9" font-weight="bold" text-anchor="middle">INERT N2 SHREDDER</text>
          
          <!-- Shredder Rotating Cutters & Sparks -->
          <circle cx="185" cy="75" r="16" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
          <path d="M 185 62 L 185 88 M 172 75 L 198 75" stroke="#f59e0b" stroke-width="2.5" class="eco-gear-spin"/>
          <circle cx="225" cy="75" r="16" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
          <path d="M 225 62 L 225 88 M 212 75 L 238 75" stroke="#f59e0b" stroke-width="2.5" class="eco-gear-spin"/>

          <!-- Sparks -->
          <circle cx="205" cy="75" r="3" fill="#fef08a" class="eco-spark-burst"/>

          <!-- Chemical Leaching Beaker (Hydrometallurgy) -->
          <rect x="290" y="45" width="75" height="70" rx="8" fill="#164e63" stroke="#22d3ee" stroke-width="1.5"/>
          <text x="327" y="60" font-size="8" fill="#67e8f9" text-anchor="middle">GIDROMETALL</text>
          <circle cx="315" cy="90" r="3" fill="#a5f3fc" class="eco-bubble-1"/>
          <circle cx="340" cy="95" r="4" fill="#a5f3fc" class="eco-bubble-2"/>

          <!-- Telemetry HUD -->
          <rect x="400" y="20" width="185" height="95" rx="10" fill="#030712" stroke="#334155" stroke-width="1.5"/>
          <text x="492" y="38" font-size="9" fill="#94a3b8" font-weight="bold" text-anchor="middle">QAYTA AJRATISH KO'RSATKICHI</text>
          <text x="492" y="60" font-size="14" fill="#06b6d4" font-weight="900" text-anchor="middle">Li / Co / Ni: 94%</text>
          <rect x="415" y="74" width="155" height="6" rx="3" fill="#1e293b"/>
          <rect x="415" y="74" width="145" height="6" rx="3" fill="#06b6d4"/>
          <text x="492" y="94" font-size="8" fill="#a5f3fc" text-anchor="middle">HF GAZI USHLANGAN</text>

          <!-- Bottom Metric -->
          <rect x="15" y="125" width="570" height="20" rx="6" fill="#090d16" stroke="#1e293b"/>
          <text x="25" y="139" font-size="9.5" fill="#e2e8f0" font-weight="semibold">🔋 Batareya tahlili: ${this.cleanText(info, 75)}</text>
        </svg>
      </div>
    `;
  },

  // 12. Metallurgiya Quyuv Pechi va Eritish
  renderFoundrySmelter(id, title, info, gameId) {
    return `
      <div class="relative w-full rounded-2xl overflow-hidden border border-orange-500/40 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 shadow-2xl p-2.5 select-none mb-3">
        <style>${this.getCommonStyles()}</style>
        <div class="flex items-center justify-between px-2 py-1 mb-1.5 border-b border-slate-800 text-[10px] font-bold">
          <div class="flex items-center gap-1.5 text-orange-400">
            <span class="w-2 h-2 rounded-full bg-orange-400 animate-ping"></span>
            <span class="uppercase tracking-wider">🏭 Induksion Eritish Pechi & Metallurgik Shlak #${id}</span>
          </div>
          <span class="px-2 py-0.5 rounded bg-orange-500/10 text-orange-300 border border-orange-500/30 text-[9px]">ERITISH & 1500°C</span>
        </div>

        <svg viewBox="0 0 600 150" class="w-full h-auto rounded-xl bg-slate-950 border border-slate-800/80">
          <!-- Tilting Crucible Smelter -->
          <path d="M 70 35 L 170 35 L 155 105 L 85 105 Z" fill="#1c1917" stroke="#f97316" stroke-width="2"/>
          <path d="M 80 50 L 160 50 L 150 95 L 90 95 Z" fill="#ea580c" opacity="0.8"/>
          <text x="120" y="46" font-size="8.5" fill="#fed7aa" font-weight="bold" text-anchor="middle">INDUKSION PECH</text>

          <!-- Molten Metal Stream -->
          <path d="M 155 90 Q 185 110 240 115" stroke="#f97316" stroke-width="4" fill="none" class="eco-pipe-dash"/>

          <!-- Slag Collector Ladle -->
          <rect x="235" y="95" width="60" height="25" rx="5" fill="#44403c" stroke="#f59e0b"/>
          <text x="265" y="112" font-size="8" fill="#fef08a" text-anchor="middle">SHLAK</text>

          <!-- Dust Extraction Hood Above -->
          <polygon points="90,15 150,15 170,30 70,30" fill="#292524" stroke="#a8a29e"/>
          <line x1="120" y1="15" x2="120" y2="0" stroke="#a8a29e" stroke-width="3"/>

          <!-- Telemetry HUD -->
          <rect x="360" y="20" width="225" height="95" rx="10" fill="#030712" stroke="#334155" stroke-width="1.5"/>
          <text x="472" y="38" font-size="9" fill="#94a3b8" font-weight="bold" text-anchor="middle">ERITISH TELEMETRIYASI</text>
          <text x="472" y="60" font-size="14" fill="#f97316" font-weight="900" text-anchor="middle">1,480 °C | Al & Fe</text>
          <rect x="380" y="74" width="185" height="6" rx="3" fill="#1e293b"/>
          <rect x="380" y="74" width="165" height="6" rx="3" fill="#f97316"/>
          <text x="472" y="94" font-size="8" fill="#fed7aa" text-anchor="middle">GAZ TOZALASH FAOL</text>

          <!-- Bottom Metric -->
          <rect x="15" y="125" width="570" height="20" rx="6" fill="#090d16" stroke="#1e293b"/>
          <text x="25" y="139" font-size="9.5" fill="#e2e8f0" font-weight="semibold">🔥 Metallurgik holat: ${this.cleanText(info, 75)}</text>
        </svg>
      </div>
    `;
  },

  // 13. Qayta Tiklanuvchi Energiya (Shamol & Quyosh)
  renderCleanEnergy(id, title, info, gameId) {
    return `
      <div class="relative w-full rounded-2xl overflow-hidden border border-emerald-500/40 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 shadow-2xl p-2.5 select-none mb-3">
        <style>${this.getCommonStyles()}</style>
        <div class="flex items-center justify-between px-2 py-1 mb-1.5 border-b border-slate-800 text-[10px] font-bold">
          <div class="flex items-center gap-1.5 text-emerald-400">
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span class="uppercase tracking-wider">💨 Shamol & Quyosh Elektr Stansiyasi Ornitologik Monitoring #${id}</span>
          </div>
          <span class="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 text-[9px]">YASHIL ENERGIYA</span>
        </div>

        <svg viewBox="0 0 600 150" class="w-full h-auto rounded-xl bg-slate-950 border border-slate-800/80">
          <!-- Wind Turbine Tower -->
          <line x1="120" y1="40" x2="120" y2="120" stroke="#e2e8f0" stroke-width="4"/>
          <!-- Rotating Turbine Blades -->
          <circle cx="120" cy="40" r="5" fill="#38bdf8"/>
          <g class="eco-turbine-spin" style="transform-origin: 120px 40px;">
            <line x1="120" y1="40" x2="120" y2="10" stroke="#38bdf8" stroke-width="3" stroke-linecap="round"/>
            <line x1="120" y1="40" x2="145" y2="55" stroke="#38bdf8" stroke-width="3" stroke-linecap="round"/>
            <line x1="120" y1="40" x2="95" y2="55" stroke="#38bdf8" stroke-width="3" stroke-linecap="round"/>
          </g>

          <!-- Solar PV Panel Grid -->
          <polygon points="180,95 240,65 300,65 240,95" fill="#1e3a8a" stroke="#38bdf8" stroke-width="1.5"/>
          <polygon points="200,115 260,85 320,85 260,115" fill="#1e3a8a" stroke="#38bdf8" stroke-width="1.5"/>

          <!-- Bird Detection Radar Sweeper -->
          <circle cx="180" cy="45" r="18" fill="none" stroke="#22c55e" stroke-width="1.5" class="eco-radar-p1"/>
          <text x="180" y="30" font-size="8" fill="#86efac" font-weight="bold" text-anchor="middle">RADAR</text>

          <!-- Telemetry HUD -->
          <rect x="360" y="20" width="225" height="95" rx="10" fill="#030712" stroke="#334155" stroke-width="1.5"/>
          <text x="472" y="38" font-size="9" fill="#94a3b8" font-weight="bold" text-anchor="middle">GENERATSIYA & XAVFSIZLIK</text>
          <text x="472" y="60" font-size="14" fill="#10b981" font-weight="900" text-anchor="middle">SHUTDOWN READY</text>
          <rect x="380" y="74" width="185" height="6" rx="3" fill="#1e293b"/>
          <rect x="380" y="74" width="170" height="6" rx="3" fill="#10b981"/>
          <text x="472" y="94" font-size="8" fill="#86efac" text-anchor="middle">QUSH MIGRATSIYA MUHOFAZASI</text>

          <!-- Bottom Metric -->
          <rect x="15" y="125" width="570" height="20" rx="6" fill="#090d16" stroke="#1e293b"/>
          <text x="25" y="139" font-size="9.5" fill="#e2e8f0" font-weight="semibold">⚡ Qayta tiklanuvchi: ${this.cleanText(info, 75)}</text>
        </svg>
      </div>
    `;
  },

  // 14. Kompostlash va Bioko'mir (Biochar)
  renderCompostBiochar(id, title, info, gameId) {
    return `
      <div class="relative w-full rounded-2xl overflow-hidden border border-lime-500/40 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 shadow-2xl p-2.5 select-none mb-3">
        <style>${this.getCommonStyles()}</style>
        <div class="flex items-center justify-between px-2 py-1 mb-1.5 border-b border-slate-800 text-[10px] font-bold">
          <div class="flex items-center gap-1.5 text-lime-400">
            <span class="w-2 h-2 rounded-full bg-lime-400 animate-ping"></span>
            <span class="uppercase tracking-wider">🌱 Organik Kompost Maydoni & Piroliz Biochar #${id}</span>
          </div>
          <span class="px-2 py-0.5 rounded bg-lime-500/10 text-lime-300 border border-lime-500/30 text-[9px]">GUMUS & UGLEROD</span>
        </div>

        <svg viewBox="0 0 600 150" class="w-full h-auto rounded-xl bg-slate-950 border border-slate-800/80">
          <!-- Compost Windrow Mound -->
          <path d="M 40 115 Q 110 40 180 115 Z" fill="#3f2e18" stroke="#84cc16" stroke-width="2"/>
          <text x="110" y="90" font-size="8.5" fill="#bef264" font-weight="bold" text-anchor="middle">AEROB BURT</text>
          
          <!-- Rising Vapor Steams -->
          <circle cx="95" cy="50" r="3" fill="#f7fee7" opacity="0.6" class="eco-bubble-1"/>
          <circle cx="125" cy="45" r="4" fill="#f7fee7" opacity="0.5" class="eco-bubble-2"/>

          <!-- Thermal Aeration Core Probe -->
          <line x1="110" y1="35" x2="110" y2="105" stroke="#ef4444" stroke-width="2.5"/>
          <circle cx="110" cy="30" r="8" fill="#450a0a" stroke="#ef4444"/>
          <text x="110" y="33" font-size="7" fill="#fca5a5" text-anchor="middle">65°C</text>

          <!-- Biochar Retort Chamber -->
          <rect x="220" y="35" width="100" height="80" rx="10" fill="#18181b" stroke="#a3e635" stroke-width="2"/>
          <text x="270" y="52" font-size="8" fill="#d9f99d" font-weight="bold" text-anchor="middle">BIOCHAR RETORTA</text>
          <path d="M 255 105 Q 270 75 285 105 Z" fill="#f59e0b" class="eco-flame-1"/>

          <!-- Telemetry HUD -->
          <rect x="360" y="20" width="225" height="95" rx="10" fill="#030712" stroke="#334155" stroke-width="1.5"/>
          <text x="472" y="38" font-size="9" fill="#94a3b8" font-weight="bold" text-anchor="middle">ORGANIK FERMENTATSIYA</text>
          <text x="472" y="60" font-size="14" fill="#84cc16" font-weight="900" text-anchor="middle">HARORAT 65°C | OPTIMAL</text>
          <rect x="380" y="74" width="185" height="6" rx="3" fill="#1e293b"/>
          <rect x="380" y="74" width="165" height="6" rx="3" fill="#84cc16"/>
          <text x="472" y="94" font-size="8" fill="#bef264" text-anchor="middle">PATOGENLAR YO'QOTILMOQDA</text>

          <!-- Bottom Metric -->
          <rect x="15" y="125" width="570" height="20" rx="6" fill="#090d16" stroke="#1e293b"/>
          <text x="25" y="139" font-size="9.5" fill="#e2e8f0" font-weight="semibold">🌱 Kompost ko'rsatkichi: ${this.cleanText(info, 75)}</text>
        </svg>
      </div>
    `;
  },

  // 15. Radiatsion Skaner va Metallolom Dozimetri
  renderRadiationScanner(id, title, info, gameId) {
    return `
      <div class="relative w-full rounded-2xl overflow-hidden border border-yellow-500/40 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 shadow-2xl p-2.5 select-none mb-3">
        <style>${this.getCommonStyles()}</style>
        <div class="flex items-center justify-between px-2 py-1 mb-1.5 border-b border-slate-800 text-[10px] font-bold">
          <div class="flex items-center gap-1.5 text-yellow-400">
            <span class="w-2 h-2 rounded-full bg-yellow-400 animate-ping"></span>
            <span class="uppercase tracking-wider">☢️ Portal Dozimetr & Metallolom Radiatsiya Skaneri #${id}</span>
          </div>
          <span class="px-2 py-0.5 rounded bg-yellow-500/10 text-yellow-300 border border-yellow-500/30 text-[9px]">GEYGER MKR/SOAT</span>
        </div>

        <svg viewBox="0 0 600 150" class="w-full h-auto rounded-xl bg-slate-950 border border-slate-800/80">
          <!-- Portal Dosimeter Gate Arch -->
          <path d="M 60 120 L 60 25 L 200 25 L 200 120" stroke="#facc15" stroke-width="6" fill="none"/>
          <line x1="60" y1="25" x2="200" y2="25" stroke="#000000" stroke-width="2" stroke-dasharray="8,6"/>
          
          <!-- Scrap Metal Truck Passing Through -->
          <rect x="90" y="65" width="80" height="45" rx="4" fill="#334155" stroke="#94a3b8"/>
          <text x="130" y="90" font-size="8" fill="#fef08a" font-weight="bold" text-anchor="middle">METALLOLOM</text>

          <!-- Radiation Sensor Beams (Gamma Ray Scan) -->
          <line x1="63" y1="45" x2="197" y2="45" stroke="#ef4444" stroke-width="2" class="eco-arc-flash"/>
          <line x1="63" y1="75" x2="197" y2="75" stroke="#ef4444" stroke-width="2" class="eco-arc-flash"/>
          
          <!-- Geiger-Muller Analog Meter -->
          <circle cx="280" cy="65" r="26" fill="#030712" stroke="#eab308" stroke-width="2"/>
          <line x1="280" y1="65" x2="295" y2="50" stroke="#ef4444" stroke-width="3" stroke-linecap="round" class="eco-needle-swing"/>
          <text x="280" y="105" font-size="8" fill="#facc15" font-weight="bold" text-anchor="middle">µSv/h DOZA</text>

          <!-- Telemetry HUD -->
          <rect x="360" y="20" width="225" height="95" rx="10" fill="#030712" stroke="#334155" stroke-width="1.5"/>
          <text x="472" y="38" font-size="9" fill="#94a3b8" font-weight="bold" text-anchor="middle">RADIATSIYA TEKSHIRUVI</text>
          <text x="472" y="60" font-size="14" fill="#facc15" font-weight="900" text-anchor="middle">0.12 µSv/h (FON)</text>
          <rect x="380" y="74" width="185" height="6" rx="3" fill="#1e293b"/>
          <rect x="380" y="74" width="70" height="6" rx="3" fill="#22c55e"/>
          <text x="472" y="94" font-size="8" fill="#fef08a" text-anchor="middle">FON ME'YORIDA</text>

          <!-- Bottom Metric -->
          <rect x="15" y="125" width="570" height="20" rx="6" fill="#090d16" stroke="#1e293b"/>
          <text x="25" y="139" font-size="9.5" fill="#e2e8f0" font-weight="semibold">☢️ Radiatsion holat: ${this.cleanText(info, 75)}</text>
        </svg>
      </div>
    `;
  },

  // 16. Magistral Quvur va Avariyaviy Zulfin (Klapan)
  renderPipelineValve(id, title, info, gameId) {
    return `
      <div class="relative w-full rounded-2xl overflow-hidden border border-amber-500/40 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 shadow-2xl p-2.5 select-none mb-3">
        <style>${this.getCommonStyles()}</style>
        <div class="flex items-center justify-between px-2 py-1 mb-1.5 border-b border-slate-800 text-[10px] font-bold">
          <div class="flex items-center gap-1.5 text-amber-400">
            <span class="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
            <span class="uppercase tracking-wider">🛢️ Magistral Neft/Gaz Quvuri & Avtomatik Zulfin #${id}</span>
          </div>
          <span class="px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30 text-[9px]">BOSIM 64 ATM</span>
        </div>

        <svg viewBox="0 0 600 150" class="w-full h-auto rounded-xl bg-slate-950 border border-slate-800/80">
          <!-- Heavy Steel Pipeline -->
          <rect x="30" y="65" width="300" height="30" rx="4" fill="#334155" stroke="#94a3b8" stroke-width="2"/>
          <line x1="30" y1="80" x2="330" y2="80" stroke="#f59e0b" stroke-width="2" class="eco-pipe-dash"/>

          <!-- Automated Hydraulic Shutoff Valve Assembly -->
          <rect x="150" y="45" width="50" height="70" rx="6" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
          <circle cx="175" cy="35" r="14" fill="#b45309" stroke="#f59e0b" stroke-width="2"/>
          <line x1="175" y1="23" x2="175" y2="47" stroke="#fef08a" stroke-width="2.5" class="eco-gear-spin"/>
          <text x="175" y="85" font-size="8" fill="#fef08a" font-weight="bold" text-anchor="middle">ZULFIN</text>

          <!-- Acoustic Leak Sensor -->
          <circle cx="260" cy="65" r="8" fill="#ef4444" class="eco-spark-burst"/>
          <text x="260" y="52" font-size="8" fill="#f87171" font-weight="bold" text-anchor="middle">SENSOR</text>

          <!-- Telemetry HUD -->
          <rect x="360" y="20" width="225" height="95" rx="10" fill="#030712" stroke="#334155" stroke-width="1.5"/>
          <text x="472" y="38" font-size="9" fill="#94a3b8" font-weight="bold" text-anchor="middle">GAVXAVSIZLIK BOSIMI</text>
          <text x="472" y="60" font-size="14" fill="#f59e0b" font-weight="900" text-anchor="middle">6.4 MPa | ME'YOR</text>
          <rect x="380" y="74" width="185" height="6" rx="3" fill="#1e293b"/>
          <rect x="380" y="74" width="150" height="6" rx="3" fill="#f59e0b"/>
          <text x="472" y="94" font-size="8" fill="#fde68a" text-anchor="middle">AVARIYA KLAPANI SHAFTOV</text>

          <!-- Bottom Metric -->
          <rect x="15" y="125" width="570" height="20" rx="6" fill="#090d16" stroke="#1e293b"/>
          <text x="25" y="139" font-size="9.5" fill="#e2e8f0" font-weight="semibold">🛢️ Quvur holati: ${this.cleanText(info, 75)}</text>
        </svg>
      </div>
    `;
  },

  // 17. To'qimachilik Oqovalarini Ozon bilan Rangsizlantirish
  renderTextileOzone(id, title, info, gameId) {
    return `
      <div class="relative w-full rounded-2xl overflow-hidden border border-indigo-500/40 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 shadow-2xl p-2.5 select-none mb-3">
        <style>${this.getCommonStyles()}</style>
        <div class="flex items-center justify-between px-2 py-1 mb-1.5 border-b border-slate-800 text-[10px] font-bold">
          <div class="flex items-center gap-1.5 text-indigo-400">
            <span class="w-2 h-2 rounded-full bg-indigo-400 animate-ping"></span>
            <span class="uppercase tracking-wider">🎨 To'qimachilik Oqovasi & Ozon bilan Rangsizlantirish #${id}</span>
          </div>
          <span class="px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/30 text-[9px]">O3 DEKOLORIZATSIYA</span>
        </div>

        <svg viewBox="0 0 600 150" class="w-full h-auto rounded-xl bg-slate-950 border border-slate-800/80">
          <!-- Dark Colored Effluent Tank -->
          <rect x="40" y="35" width="110" height="85" rx="8" fill="#311042" stroke="#818cf8" stroke-width="2"/>
          <text x="95" y="52" font-size="8" fill="#e0e7ff" font-weight="bold" text-anchor="middle">BO'YOQLI SUV</text>

          <!-- Ozone Bubbling Reactor Chamber -->
          <rect x="180" y="30" width="140" height="95" rx="10" fill="#0f172a" stroke="#6366f1" stroke-width="2"/>
          <text x="250" y="48" font-size="8.5" fill="#c7d2fe" font-weight="bold" text-anchor="middle">OZON (O3) REAKTORI</text>

          <!-- Ozone Diffuser Bubbles -->
          <circle cx="210" cy="90" r="3" fill="#a5b4fc" class="eco-bubble-1"/>
          <circle cx="235" cy="85" r="4.5" fill="#a5b4fc" class="eco-bubble-2"/>
          <circle cx="260" cy="92" r="3.5" fill="#a5b4fc" class="eco-bubble-3"/>
          <circle cx="290" cy="88" r="4" fill="#a5b4fc" class="eco-bubble-4"/>

          <!-- Telemetry HUD -->
          <rect x="360" y="20" width="225" height="95" rx="10" fill="#030712" stroke="#334155" stroke-width="1.5"/>
          <text x="472" y="38" font-size="9" fill="#94a3b8" font-weight="bold" text-anchor="middle">RANGSIZLANISH DARAJASI</text>
          <text x="472" y="60" font-size="14" fill="#818cf8" font-weight="900" text-anchor="middle">98.5% TINIQLIK</text>
          <rect x="380" y="74" width="185" height="6" rx="3" fill="#1e293b"/>
          <rect x="380" y="74" width="175" height="6" rx="3" fill="#818cf8"/>
          <text x="472" y="94" font-size="8" fill="#c7d2fe" text-anchor="middle">XROM TUZLARI PARCHALANGAN</text>

          <!-- Bottom Metric -->
          <rect x="15" y="125" width="570" height="20" rx="6" fill="#090d16" stroke="#1e293b"/>
          <text x="25" y="139" font-size="9.5" fill="#e2e8f0" font-weight="semibold">🎨 Oqava tahlili: ${this.cleanText(info, 75)}</text>
        </svg>
      </div>
    `;
  },

  // 18. Siklon va Yengli Chang Tutqich
  renderDustCyclone(id, title, info, gameId) {
    return `
      <div class="relative w-full rounded-2xl overflow-hidden border border-slate-600/40 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 shadow-2xl p-2.5 select-none mb-3">
        <style>${this.getCommonStyles()}</style>
        <div class="flex items-center justify-between px-2 py-1 mb-1.5 border-b border-slate-800 text-[10px] font-bold">
          <div class="flex items-center gap-1.5 text-slate-300">
            <span class="w-2 h-2 rounded-full bg-slate-300 animate-ping"></span>
            <span class="uppercase tracking-wider">🌪️ Siklon Separator & Yengli Chang Tutqich #${id}</span>
          </div>
          <span class="px-2 py-0.5 rounded bg-slate-500/10 text-slate-300 border border-slate-500/30 text-[9px]">CHANG PDK: 20 mg/m³</span>
        </div>

        <svg viewBox="0 0 600 150" class="w-full h-auto rounded-xl bg-slate-950 border border-slate-800/80">
          <!-- Inflow duct -->
          <rect x="30" y="45" width="60" height="24" fill="#334155" stroke="#94a3b8"/>
          
          <!-- Conical Cyclone Housing -->
          <polygon points="90,30 200,30 165,100 125,100" fill="#1e293b" stroke="#94a3b8" stroke-width="2"/>
          <rect x="130" y="100" width="30" height="25" fill="#0f172a" stroke="#94a3b8"/>
          <text x="145" y="117" font-size="8" fill="#cbd5e1" text-anchor="middle">BUNKER</text>

          <!-- Animated Airflow Vortex Spiral -->
          <circle cx="145" cy="55" r="14" fill="none" stroke="#38bdf8" stroke-width="2" stroke-dasharray="4,2" class="eco-vortex-spin"/>

          <!-- Baghouse Filter Unit Next Door -->
          <rect x="230" y="30" width="100" height="90" rx="8" fill="#0f172a" stroke="#64748b" stroke-width="1.5"/>
          <line x1="250" y1="45" x2="250" y2="105" stroke="#e2e8f0" stroke-width="4"/>
          <line x1="280" y1="45" x2="280" y2="105" stroke="#e2e8f0" stroke-width="4"/>
          <line x1="310" y1="45" x2="310" y2="105" stroke="#e2e8f0" stroke-width="4"/>
          <text x="280" y="42" font-size="8" fill="#cbd5e1" font-weight="bold" text-anchor="middle">YENGLI FILTR</text>

          <!-- Telemetry HUD -->
          <rect x="360" y="20" width="225" height="95" rx="10" fill="#030712" stroke="#334155" stroke-width="1.5"/>
          <text x="472" y="38" font-size="9" fill="#94a3b8" font-weight="bold" text-anchor="middle">CHANG EMISSIYASI</text>
          <text x="472" y="60" font-size="14" fill="#38bdf8" font-weight="900" text-anchor="middle">12.4 mg/m³ (PDK: 50)</text>
          <rect x="380" y="74" width="185" height="6" rx="3" fill="#1e293b"/>
          <rect x="380" y="74" width="55" height="6" rx="3" fill="#22c55e"/>
          <text x="472" y="94" font-size="8" fill="#cbd5e1" text-anchor="middle">99.2% USHLASH DARAJASI</text>

          <!-- Bottom Metric -->
          <rect x="15" y="125" width="570" height="20" rx="6" fill="#090d16" stroke="#1e293b"/>
          <text x="25" y="139" font-size="9.5" fill="#e2e8f0" font-weight="semibold">🌪️ Chang tahlili: ${this.cleanText(info, 75)}</text>
        </svg>
      </div>
    `;
  },

  // 19. Shlam Saqlagich va Tog'-Kon Dambasi
  renderTailingsDam(id, title, info, gameId) {
    return `
      <div class="relative w-full rounded-2xl overflow-hidden border border-stone-500/40 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 shadow-2xl p-2.5 select-none mb-3">
        <style>${this.getCommonStyles()}</style>
        <div class="flex items-center justify-between px-2 py-1 mb-1.5 border-b border-slate-800 text-[10px] font-bold">
          <div class="flex items-center gap-1.5 text-stone-300">
            <span class="w-2 h-2 rounded-full bg-stone-300 animate-ping"></span>
            <span class="uppercase tracking-wider">⛰️ Shlam Saqlagich Dambasi & Pyezometrik Barqarorlik #${id}</span>
          </div>
          <span class="px-2 py-0.5 rounded bg-stone-500/10 text-stone-300 border border-stone-500/30 text-[9px]">TOG'-KON DOK-QARI</span>
        </div>

        <svg viewBox="0 0 600 150" class="w-full h-auto rounded-xl bg-slate-950 border border-slate-800/80">
          <!-- Engineered Rockfill Embankment -->
          <polygon points="50,115 150,45 220,45 290,115" fill="#44403c" stroke="#78716c" stroke-width="2"/>
          <text x="185" y="65" font-size="8.5" fill="#e7e5e4" font-weight="bold" text-anchor="middle">DAMBA TO'G'ONI</text>

          <!-- Tailings Slurry Impoundment -->
          <polygon points="220,50 340,50 310,115 285,115" fill="#292524" opacity="0.8"/>
          <text x="280" y="85" font-size="8" fill="#d6d3d1" text-anchor="middle">SHLAM</text>

          <!-- Piezometer Stability Sensor -->
          <line x1="170" y1="45" x2="170" y2="105" stroke="#ef4444" stroke-width="2"/>
          <circle cx="170" cy="40" r="5" fill="#ef4444"/>

          <!-- Telemetry HUD -->
          <rect x="360" y="20" width="225" height="95" rx="10" fill="#030712" stroke="#334155" stroke-width="1.5"/>
          <text x="472" y="38" font-size="9" fill="#94a3b8" font-weight="bold" text-anchor="middle">DAMBA STATIK XAVFSIZLIGI</text>
          <text x="472" y="60" font-size="14" fill="#a8a29e" font-weight="900" text-anchor="middle">K_b = 1.45 (NORM: >1.3)</text>
          <rect x="380" y="74" width="185" height="6" rx="3" fill="#1e293b"/>
          <rect x="380" y="74" width="165" height="6" rx="3" fill="#10b981"/>
          <text x="472" y="94" font-size="8" fill="#d6d3d1" text-anchor="middle">SIZISH VA SILJISH YO'Q</text>

          <!-- Bottom Metric -->
          <rect x="15" y="125" width="570" height="20" rx="6" fill="#090d16" stroke="#1e293b"/>
          <text x="25" y="139" font-size="9.5" fill="#e2e8f0" font-weight="semibold">⛰️ Damba holati: ${this.cleanText(info, 75)}</text>
        </svg>
      </div>
    `;
  },

  // 20. Shahar Yashil Belbog'i va Shamol Atirguli (Roza Vetrov)
  renderGreenBelt(id, title, info, gameId) {
    return `
      <div class="relative w-full rounded-2xl overflow-hidden border border-teal-500/40 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 shadow-2xl p-2.5 select-none mb-3">
        <style>${this.getCommonStyles()}</style>
        <div class="flex items-center justify-between px-2 py-1 mb-1.5 border-b border-slate-800 text-[10px] font-bold">
          <div class="flex items-center gap-1.5 text-teal-400">
            <span class="w-2 h-2 rounded-full bg-teal-400 animate-ping"></span>
            <span class="uppercase tracking-wider">🌳 Yashil Belbog' & Shamol Atirguli (Roza Vetrov) #${id}</span>
          </div>
          <span class="px-2 py-0.5 rounded bg-teal-500/10 text-teal-300 border border-teal-500/30 text-[9px]">SHAHAR EKOLOGIYASI</span>
        </div>

        <svg viewBox="0 0 600 150" class="w-full h-auto rounded-xl bg-slate-950 border border-slate-800/80">
          <!-- Wind Rose Compass on Left -->
          <circle cx="85" cy="70" r="38" fill="#0f172a" stroke="#0d9488" stroke-width="1.5"/>
          <path d="M 85 35 L 85 105 M 50 70 L 120 70" stroke="#14b8a6" stroke-width="1"/>
          <!-- Wind Vectors -->
          <polygon points="85,32 90,65 85,60 80,65" fill="#2dd4bf"/>
          <text x="85" y="26" font-size="8" fill="#5eead4" font-weight="bold" text-anchor="middle">SHIMOL</text>
          <text x="85" y="118" font-size="8" fill="#5eead4" font-weight="bold" text-anchor="middle">JANUB</text>

          <!-- Tiered Green Forest Trees Filtering Wind -->
          <circle cx="170" cy="75" r="14" fill="#065f46" stroke="#10b981"/>
          <circle cx="195" cy="65" r="16" fill="#047857" stroke="#10b981"/>
          <circle cx="225" cy="75" r="14" fill="#065f46" stroke="#10b981"/>
          <circle cx="250" cy="65" r="18" fill="#047857" stroke="#10b981"/>
          <circle cx="280" cy="75" r="15" fill="#065f46" stroke="#10b981"/>
          <text x="225" y="105" font-size="8.5" fill="#6ee7b7" font-weight="bold" text-anchor="middle">HIMOYA O'RMONZORI</text>

          <!-- Telemetry HUD -->
          <rect x="360" y="20" width="225" height="95" rx="10" fill="#030712" stroke="#334155" stroke-width="1.5"/>
          <text x="472" y="38" font-size="9" fill="#94a3b8" font-weight="bold" text-anchor="middle">HAVO OQIMI SOFLIGI</text>
          <text x="472" y="60" font-size="14" fill="#2dd4bf" font-weight="900" text-anchor="middle">60% CHANG TO'XTATILDI</text>
          <rect x="380" y="74" width="185" height="6" rx="3" fill="#1e293b"/>
          <rect x="380" y="74" width="155" height="6" rx="3" fill="#14b8a6"/>
          <text x="472" y="94" font-size="8" fill="#5eead4" text-anchor="middle">AHOLI HUDUDI HIMOYA OSTIDA</text>

          <!-- Bottom Metric -->
          <rect x="15" y="125" width="570" height="20" rx="6" fill="#090d16" stroke="#1e293b"/>
          <text x="25" y="139" font-size="9.5" fill="#e2e8f0" font-weight="semibold">🌳 Yashil belbog': ${this.cleanText(info, 75)}</text>
        </svg>
      </div>
    `;
  },

  // Saralash o'yini uchun konveyer animatsiyasi (Legacy & 1-o'yin uchun)
  renderSortingConveyor(wasteItem) {
    const itemName = (wasteItem && wasteItem.name) || "Chiqindi";
    const itemIcon = (wasteItem && wasteItem.icon) || "📦";
    const itemCat = (wasteItem && wasteItem.cat) || "plastik";

    return `
      <div class="relative w-full rounded-2xl overflow-hidden border border-emerald-500/40 bg-slate-950 shadow-2xl p-2 select-none mb-4">
        <style>${this.getCommonStyles()}</style>
        <div class="flex items-center justify-between px-2 py-1 mb-1 border-b border-slate-800 text-[10px] font-bold">
          <div class="flex items-center gap-1.5 text-emerald-400">
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span class="uppercase tracking-wider">Avtomatlashgan Konveyer</span>
          </div>
          <span class="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 text-[9px]">${itemCat.toUpperCase()}</span>
        </div>

        <svg viewBox="0 0 600 120" class="w-full h-auto rounded-xl bg-slate-950 border border-slate-800">
          <rect x="20" y="60" width="560" height="24" rx="4" fill="#1e293b" stroke="#334155" stroke-width="2"/>
          <g class="eco-conveyor-scroll">
            <line x1="20" y1="72" x2="580" y2="72" stroke="#64748b" stroke-width="3" stroke-dasharray="16,8"/>
          </g>
          <g transform="translate(260, 25)" class="eco-float">
            <rect x="0" y="0" width="80" height="45" rx="8" fill="#0f172a" stroke="#10b981" stroke-width="2"/>
            <text x="40" y="28" font-size="20" text-anchor="middle">${itemIcon}</text>
            <text x="40" y="40" font-size="7.5" fill="#a7f3d0" font-weight="bold" text-anchor="middle">${itemName}</text>
          </g>
        </svg>
      </div>
    `;
  },

  getSortingConveyorHtml(wasteItem) {
    return this.renderSortingConveyor(wasteItem);
  }
};

window.Eco2DAnimator = Eco2DAnimator;
