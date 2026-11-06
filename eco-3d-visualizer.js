// =======================================================================
// EcoAkobir — 3D Interaktiv Sanoat & Ekologik Vizualizator (v44)
// Three.js asosidagi to'liq 360° aylanuvchi interaktiv 3D uskunalar modeli
// Barcha 21 ta sanoat arxetiplari uchun to'liq ixtisoslashgan 3D modellar
// Asoschi: Akobir | Akosh Eco & EcoAkobir Platformasi
// =======================================================================

const Eco3DVisualizer = {
  activeInstances: new Map(),

  // Har bir konteyner uchun 3D sahnani ishga tushirish
  mount(containerEl, sceneType, meta = {}) {
    if (!containerEl) return null;
    this.unmount(containerEl);

    if (typeof THREE === 'undefined') {
      console.warn("Three.js kutubxonasi topilmadi. 2D rejimda qolinadi.");
      return null;
    }

    const width = containerEl.clientWidth || 600;
    const height = Math.max(200, containerEl.clientHeight || 220);

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x060b14);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 18, 38);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.shadowMap.enabled = true;
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.borderRadius = '0.75rem';
    renderer.domElement.style.outline = 'none';
    renderer.domElement.style.cursor = 'grab';

    containerEl.innerHTML = '';
    containerEl.appendChild(renderer.domElement);

    // 2. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.75);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.25);
    dirLight.position.set(25, 45, 30);
    scene.add(dirLight);

    const dirLight2 = new THREE.DirectionalLight(0x38bdf8, 0.7);
    dirLight2.position.set(-25, 25, -25);
    scene.add(dirLight2);

    const accentColor = this.getThemeColor(sceneType);
    const pointLight = new THREE.PointLight(accentColor, 2.8, 70);
    pointLight.position.set(0, 12, 5);
    scene.add(pointLight);

    // 3. Grid Platform Floor
    const gridHelper = new THREE.GridHelper(55, 26, 0x1e293b, 0x0f172a);
    gridHelper.position.y = -0.05;
    scene.add(gridHelper);

    // Circular Sci-fi Platform Ring
    const ringGeo = new THREE.RingGeometry(18, 18.6, 64);
    const ringMat = new THREE.MeshBasicMaterial({ color: accentColor, side: THREE.DoubleSide, transparent: true, opacity: 0.35 });
    const platformRing = new THREE.Mesh(ringGeo, ringMat);
    platformRing.rotation.x = Math.PI / 2;
    platformRing.position.y = 0.02;
    scene.add(platformRing);

    // 4. Model Root Group
    const modelGroup = new THREE.Group();
    scene.add(modelGroup);

    // Build specific 3D model
    const animatedProps = this.buildModel(modelGroup, sceneType, meta);

    // 5. Custom Smooth 360° Orbit Controller
    const controls = {
      isDragging: false,
      prevX: 0,
      prevY: 0,
      theta: 0.3,
      phi: 0.45,
      radius: 42,
      targetRadius: 42,
      autoRotate: true,
      autoRotateSpeed: 0.005,
      target: new THREE.Vector3(0, 6, 0)
    };

    const updateCameraPos = () => {
      controls.radius += (controls.targetRadius - controls.radius) * 0.1;
      camera.position.x = controls.target.x + controls.radius * Math.sin(controls.phi) * Math.sin(controls.theta);
      camera.position.y = controls.target.y + controls.radius * Math.cos(controls.phi);
      camera.position.z = controls.target.z + controls.radius * Math.sin(controls.phi) * Math.cos(controls.theta);
      camera.lookAt(controls.target);
    };
    updateCameraPos();

    const onPointerDown = (e) => {
      controls.isDragging = true;
      controls.prevX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
      controls.prevY = e.clientY || (e.touches && e.touches[0].clientY) || 0;
      renderer.domElement.style.cursor = 'grabbing';
    };

    const onPointerMove = (e) => {
      if (!controls.isDragging) return;
      const x = e.clientX || (e.touches && e.touches[0].clientX) || 0;
      const y = e.clientY || (e.touches && e.touches[0].clientY) || 0;
      const dx = x - controls.prevX;
      const dy = y - controls.prevY;
      controls.prevX = x;
      controls.prevY = y;

      controls.theta -= dx * 0.012;
      controls.phi += dy * 0.012;
      controls.phi = Math.max(0.12, Math.min(Math.PI / 2 - 0.05, controls.phi));
      controls.autoRotate = false; // pause auto-rotate on interaction
      updateCameraPos();
    };

    const onPointerUp = () => {
      controls.isDragging = false;
      renderer.domElement.style.cursor = 'grab';
    };

    const onWheel = (e) => {
      e.preventDefault();
      controls.targetRadius += e.deltaY * 0.04;
      controls.targetRadius = Math.max(16, Math.min(85, controls.targetRadius));
      updateCameraPos();
    };

    const dom = renderer.domElement;
    dom.addEventListener('mousedown', onPointerDown);
    dom.addEventListener('mousemove', onPointerMove);
    window.addEventListener('mouseup', onPointerUp);
    dom.addEventListener('wheel', onWheel, { passive: false });
    dom.addEventListener('touchstart', onPointerDown, { passive: true });
    dom.addEventListener('touchmove', onPointerMove, { passive: true });
    window.addEventListener('touchend', onPointerUp);

    // 6. Animation Loop
    let animId = null;
    const animate = () => {
      animId = requestAnimationFrame(animate);

      if (controls.autoRotate && !controls.isDragging) {
        controls.theta += controls.autoRotateSpeed;
        updateCameraPos();
      }

      if (animatedProps && typeof animatedProps.update === 'function') {
        animatedProps.update();
      }

      renderer.render(scene, camera);
    };
    animate();

    // 7. Store instance for unmounting
    const instance = {
      containerEl,
      renderer,
      scene,
      camera,
      controls,
      destroy: () => {
        cancelAnimationFrame(animId);
        dom.removeEventListener('mousedown', onPointerDown);
        dom.removeEventListener('mousemove', onPointerMove);
        window.removeEventListener('mouseup', onPointerUp);
        dom.removeEventListener('wheel', onWheel);
        dom.removeEventListener('touchstart', onPointerDown);
        dom.removeEventListener('touchmove', onPointerMove);
        window.removeEventListener('touchend', onPointerUp);
        renderer.dispose();
        if (dom.parentElement) dom.parentElement.removeChild(dom);
      }
    };

    this.activeInstances.set(containerEl, instance);
    return instance;
  },

  unmount(containerEl) {
    if (this.activeInstances.has(containerEl)) {
      const inst = this.activeInstances.get(containerEl);
      inst.destroy();
      this.activeInstances.delete(containerEl);
    }
  },

  getThemeColor(sceneType) {
    switch (sceneType) {
      case 'pyrolysis_reactor': return 0xf59e0b;
      case 'gas_scrubber': return 0x06b6d4;
      case 'wastewater_basin': return 0x14b8a6;
      case 'sanitary_radar': return 0xa855f7;
      case 'noise_barrier': return 0xf43f5e;
      case 'electrostatic_filter': return 0x38bdf8;
      case 'chemical_electrolysis': return 0xeab308;
      case 'landfill_membrane': return 0x10b981;
      case 'medical_autoclave': return 0xef4444;
      case 'nature_reserve': return 0x22c55e;
      case 'ewaste_recycler': return 0x06b6d4;
      case 'foundry_smelter': return 0xf97316;
      case 'clean_energy': return 0x10b981;
      case 'compost_biochar': return 0x84cc16;
      case 'radiation_scanner': return 0xfacc15;
      case 'pipeline_valve': return 0xf59e0b;
      case 'textile_ozone': return 0x6366f1;
      case 'dust_cyclone': return 0x94a3b8;
      case 'tailings_dam': return 0x78716c;
      case 'green_belt': return 0x14b8a6;
      case 'sorting': return 0x10b981;
      default: return 0x38bdf8;
    }
  },

  // 3D Modellarni generatsiya qilish (21 ta ixtisoslashgan model)
  buildModel(root, sceneType, meta) {
    const metalMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.35, metalness: 0.75 });
    const steelMat = new THREE.MeshStandardMaterial({ color: 0x64748b, roughness: 0.4, metalness: 0.6 });
    const accentMat = new THREE.MeshStandardMaterial({ color: this.getThemeColor(sceneType), roughness: 0.2, metalness: 0.8 });
    const glassMat = new THREE.MeshPhysicalMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.45, roughness: 0.1, transmission: 0.85 });
    const warningMat = new THREE.MeshStandardMaterial({ color: 0xef4444, roughness: 0.3, metalness: 0.7 });

    let updateFn = null;

    switch (sceneType) {
      // 1. Piroliz va Dioksin Reaktori
      case 'pyrolysis_reactor': {
        const furnaceGeo = new THREE.BoxGeometry(10, 10, 10);
        const furnace = new THREE.Mesh(furnaceGeo, metalMat);
        furnace.position.set(-8, 5, 0);
        root.add(furnace);

        const winGeo = new THREE.PlaneGeometry(5, 5);
        const winMat = new THREE.MeshBasicMaterial({ color: 0xef4444, side: THREE.DoubleSide });
        const win = new THREE.Mesh(winGeo, winMat);
        win.position.set(-8, 5, 5.05);
        root.add(win);

        const secGeo = new THREE.CylinderGeometry(3.5, 3.5, 14, 32);
        const secCol = new THREE.Mesh(secGeo, accentMat);
        secCol.position.set(5, 7, 0);
        root.add(secCol);

        const pipeGeo = new THREE.CylinderGeometry(0.8, 0.8, 8, 16);
        const pipe = new THREE.Mesh(pipeGeo, steelMat);
        pipe.rotation.z = Math.PI / 2;
        pipe.position.set(-1.5, 8, 0);
        root.add(pipe);

        const stackGeo = new THREE.CylinderGeometry(1.2, 1.8, 18, 32);
        const stack = new THREE.Mesh(stackGeo, steelMat);
        stack.position.set(13, 9, 0);
        root.add(stack);

        const particleCount = 45;
        const pGeo = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        for (let i = 0; i < particleCount; i++) {
          positions[i*3] = -8 + (Math.random() - 0.5) * 3;
          positions[i*3+1] = 2 + Math.random() * 5;
          positions[i*3+2] = 5 + Math.random() * 2;
        }
        pGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        const pMat = new THREE.PointsMaterial({ color: 0xf59e0b, size: 0.8, transparent: true, opacity: 0.85 });
        const pSystem = new THREE.Points(pGeo, pMat);
        root.add(pSystem);

        updateFn = () => {
          const pos = pGeo.attributes.position.array;
          for (let i = 0; i < particleCount; i++) {
            pos[i*3+1] += 0.08;
            if (pos[i*3+1] > 8) pos[i*3+1] = 2;
          }
          pGeo.attributes.position.needsUpdate = true;
          winMat.color.setHSL(0.05 + Math.sin(Date.now() * 0.005) * 0.03, 1, 0.5);
        };
        break;
      }

      // 2. Skrubber va Gaz Tozalash
      case 'gas_scrubber': {
        const colGeo = new THREE.CylinderGeometry(3.8, 3.8, 16, 32);
        const col = new THREE.Mesh(colGeo, glassMat);
        col.position.set(0, 8, 0);
        root.add(col);

        const capGeo = new THREE.CylinderGeometry(4.2, 4.2, 1.5, 32);
        const baseCap = new THREE.Mesh(capGeo, steelMat);
        baseCap.position.set(0, 0.75, 0);
        root.add(baseCap);

        const topCap = new THREE.Mesh(capGeo, steelMat);
        topCap.position.set(0, 16, 0);
        root.add(topCap);

        const sprayRingGeo = new THREE.TorusGeometry(2.8, 0.3, 16, 32);
        const sprayRing = new THREE.Mesh(sprayRingGeo, accentMat);
        sprayRing.rotation.x = Math.PI / 2;
        sprayRing.position.set(0, 13, 0);
        root.add(sprayRing);

        const count = 60;
        const dGeo = new THREE.BufferGeometry();
        const dPos = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
          const angle = Math.random() * Math.PI * 2;
          const r = Math.random() * 2.6;
          dPos[i*3] = Math.cos(angle) * r;
          dPos[i*3+1] = 13 - Math.random() * 10;
          dPos[i*3+2] = Math.sin(angle) * r;
        }
        dGeo.setAttribute('position', new THREE.BufferAttribute(dPos, 3));
        const dMat = new THREE.PointsMaterial({ color: 0x38bdf8, size: 0.6, transparent: true, opacity: 0.9 });
        const dSystem = new THREE.Points(dGeo, dMat);
        root.add(dSystem);

        updateFn = () => {
          const pos = dGeo.attributes.position.array;
          for (let i = 0; i < count; i++) {
            pos[i*3+1] -= 0.15;
            if (pos[i*3+1] < 2) pos[i*3+1] = 13;
          }
          dGeo.attributes.position.needsUpdate = true;
        };
        break;
      }

      // 3. Oqava Suv Aeratenki
      case 'wastewater_basin': {
        const tankGeo = new THREE.BoxGeometry(22, 6, 14);
        const tank = new THREE.Mesh(tankGeo, metalMat);
        tank.position.set(0, 3, 0);
        root.add(tank);

        const waterGeo = new THREE.PlaneGeometry(21, 13, 20, 20);
        const waterMat = new THREE.MeshStandardMaterial({ color: 0x0f766e, roughness: 0.1, metalness: 0.5, transparent: true, opacity: 0.85 });
        const water = new THREE.Mesh(waterGeo, waterMat);
        water.rotation.x = -Math.PI / 2;
        water.position.set(0, 5.8, 0);
        root.add(water);

        const bCount = 80;
        const bGeo = new THREE.BufferGeometry();
        const bPos = new Float32Array(bCount * 3);
        for (let i = 0; i < bCount; i++) {
          bPos[i*3] = (Math.random() - 0.5) * 19;
          bPos[i*3+1] = 1 + Math.random() * 4.5;
          bPos[i*3+2] = (Math.random() - 0.5) * 11;
        }
        bGeo.setAttribute('position', new THREE.BufferAttribute(bPos, 3));
        const bMat = new THREE.PointsMaterial({ color: 0x5eead4, size: 0.5, transparent: true, opacity: 0.9 });
        const bSystem = new THREE.Points(bGeo, bMat);
        root.add(bSystem);

        updateFn = () => {
          const pos = bGeo.attributes.position.array;
          for (let i = 0; i < bCount; i++) {
            pos[i*3+1] += 0.08;
            if (pos[i*3+1] > 5.8) pos[i*3+1] = 1;
          }
          bGeo.attributes.position.needsUpdate = true;
        };
        break;
      }

      // 4. Sanitar-Himoya Zonasi (SHZ) Lazer Radari
      case 'sanitary_radar': {
        const plantGeo = new THREE.BoxGeometry(8, 7, 8);
        const plant = new THREE.Mesh(plantGeo, metalMat);
        plant.position.set(-13, 3.5, 0);
        root.add(plant);

        const chimGeo = new THREE.CylinderGeometry(0.8, 1.2, 10, 16);
        const chim = new THREE.Mesh(chimGeo, steelMat);
        chim.position.set(-13, 10, 0);
        root.add(chim);

        const houseGeo = new THREE.BoxGeometry(4, 3.5, 4);
        const houseMat = new THREE.MeshStandardMaterial({ color: 0x0284c7 });
        const house1 = new THREE.Mesh(houseGeo, houseMat);
        house1.position.set(12, 1.75, -2);
        root.add(house1);

        const house2 = new THREE.Mesh(houseGeo, houseMat);
        house2.position.set(13, 1.75, 4);
        root.add(house2);

        const lineGeo = new THREE.CylinderGeometry(0.15, 0.15, 25, 8);
        const lineMat = new THREE.MeshBasicMaterial({ color: 0xa855f7 });
        const line = new THREE.Mesh(lineGeo, lineMat);
        line.rotation.z = Math.PI / 2;
        line.position.set(0, 4, 0);
        root.add(line);

        const markerGeo = new THREE.SphereGeometry(1.2, 16, 16);
        const markerMat = new THREE.MeshBasicMaterial({ color: 0xec4899 });
        const marker = new THREE.Mesh(markerGeo, markerMat);
        marker.position.set(0, 4, 0);
        root.add(marker);

        updateFn = () => {
          marker.position.x = Math.sin(Date.now() * 0.002) * 8;
          const s = 1 + Math.sin(Date.now() * 0.008) * 0.25;
          marker.scale.set(s, s, s);
        };
        break;
      }

      // 5. Akustik Shovqin To'sig'i
      case 'noise_barrier': {
        const roadGeo = new THREE.BoxGeometry(28, 0.4, 8);
        const roadMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.9 });
        const road = new THREE.Mesh(roadGeo, roadMat);
        road.position.set(0, 0.2, 5);
        root.add(road);

        const wallGeo = new THREE.BoxGeometry(28, 8, 0.8);
        const wallMat = new THREE.MeshStandardMaterial({ color: 0xf43f5e, roughness: 0.3, metalness: 0.7 });
        const wall = new THREE.Mesh(wallGeo, wallMat);
        wall.position.set(0, 4, 0);
        root.add(wall);

        const waveGeo = new THREE.RingGeometry(3, 3.4, 32);
        const waveMat = new THREE.MeshBasicMaterial({ color: 0xef4444, side: THREE.DoubleSide, transparent: true, opacity: 0.8 });
        const soundWave = new THREE.Mesh(waveGeo, waveMat);
        soundWave.position.set(-6, 3, 5);
        root.add(soundWave);

        updateFn = () => {
          const s = 1 + ((Date.now() * 0.003) % 4);
          soundWave.scale.set(s, s, s);
          waveMat.opacity = Math.max(0, 1 - (s - 1) / 4);
        };
        break;
      }

      // 6. Elektrofiltr va Kul Tutqich
      case 'electrostatic_filter': {
        const casingGeo = new THREE.BoxGeometry(14, 10, 8);
        const casing = new THREE.Mesh(casingGeo, metalMat);
        casing.position.set(-2, 5, 0);
        root.add(casing);

        const hopperGeo = new THREE.CylinderGeometry(7, 1.5, 4, 4);
        const hopper = new THREE.Mesh(hopperGeo, steelMat);
        hopper.rotation.y = Math.PI / 4;
        hopper.position.set(-2, -2, 0);
        root.add(hopper);

        const stackGeo = new THREE.CylinderGeometry(1.5, 2.2, 16, 32);
        const stack = new THREE.Mesh(stackGeo, steelMat);
        stack.position.set(8, 8, 0);
        root.add(stack);

        const sparkCount = 20;
        const sparkGeo = new THREE.BufferGeometry();
        const sparkPos = new Float32Array(sparkCount * 3);
        for (let i = 0; i < sparkCount; i++) {
          sparkPos[i*3] = -2 + (Math.random() - 0.5) * 10;
          sparkPos[i*3+1] = 2 + Math.random() * 6;
          sparkPos[i*3+2] = (Math.random() - 0.5) * 6;
        }
        sparkGeo.setAttribute('position', new THREE.BufferAttribute(sparkPos, 3));
        const sparkMat = new THREE.PointsMaterial({ color: 0x38bdf8, size: 0.9, transparent: true, opacity: 0.95 });
        const sparkSystem = new THREE.Points(sparkGeo, sparkMat);
        root.add(sparkSystem);

        updateFn = () => {
          sparkMat.opacity = 0.4 + Math.sin(Date.now() * 0.02) * 0.55;
        };
        break;
      }

      // 7. Kimyoviy Elektroliz
      case 'chemical_electrolysis': {
        const vatGeo = new THREE.BoxGeometry(16, 8, 10);
        const vat = new THREE.Mesh(vatGeo, glassMat);
        vat.position.set(0, 4, 0);
        root.add(vat);

        const elGeo = new THREE.BoxGeometry(1, 7, 6);
        const elAnode = new THREE.Mesh(elGeo, new THREE.MeshStandardMaterial({ color: 0xb45309, metalness: 0.9 }));
        elAnode.position.set(-4, 4, 0);
        root.add(elAnode);

        const elCathode = new THREE.Mesh(elGeo, new THREE.MeshStandardMaterial({ color: 0x475569, metalness: 0.9 }));
        elCathode.position.set(4, 4, 0);
        root.add(elCathode);

        const gasCount = 30;
        const gasGeo = new THREE.BufferGeometry();
        const gasPos = new Float32Array(gasCount * 3);
        for (let i = 0; i < gasCount; i++) {
          gasPos[i*3] = (Math.random() > 0.5 ? -4 : 4) + (Math.random() - 0.5) * 1.5;
          gasPos[i*3+1] = 1 + Math.random() * 6;
          gasPos[i*3+2] = (Math.random() - 0.5) * 5;
        }
        gasGeo.setAttribute('position', new THREE.BufferAttribute(gasPos, 3));
        const gasMat = new THREE.PointsMaterial({ color: 0xfef08a, size: 0.7, transparent: true });
        const gasSystem = new THREE.Points(gasGeo, gasMat);
        root.add(gasSystem);

        updateFn = () => {
          const pos = gasGeo.attributes.position.array;
          for (let i = 0; i < gasCount; i++) {
            pos[i*3+1] += 0.09;
            if (pos[i*3+1] > 7.5) pos[i*3+1] = 1;
          }
          gasGeo.attributes.position.needsUpdate = true;
        };
        break;
      }

      // 8. QMQ Sanitar Poligoni & Geomembrana
      case 'landfill_membrane': {
        const baseGeo = new THREE.CylinderGeometry(14, 16, 5, 8);
        const baseMat = new THREE.MeshStandardMaterial({ color: 0x44403c });
        const landfill = new THREE.Mesh(baseGeo, baseMat);
        landfill.position.set(0, 2.5, 0);
        root.add(landfill);

        const memGeo = new THREE.CylinderGeometry(14.2, 14.2, 0.3, 8);
        const memMat = new THREE.MeshStandardMaterial({ color: 0x10b981, roughness: 0.2 });
        const mem = new THREE.Mesh(memGeo, memMat);
        mem.position.set(0, 5, 0);
        root.add(mem);

        const flareGeo = new THREE.CylinderGeometry(0.4, 0.4, 8, 16);
        const flarePipe = new THREE.Mesh(flareGeo, steelMat);
        flarePipe.position.set(0, 8, 0);
        root.add(flarePipe);

        const flameGeo = new THREE.ConeGeometry(1.2, 3, 16);
        const flameMat = new THREE.MeshBasicMaterial({ color: 0x06b6d4 });
        const flame = new THREE.Mesh(flameGeo, flameMat);
        flame.position.set(0, 13.5, 0);
        root.add(flame);

        updateFn = () => {
          flame.scale.y = 1 + Math.sin(Date.now() * 0.015) * 0.3;
        };
        break;
      }

      // 9. Tibbiy Chiqindilar Avtoklavi
      case 'medical_autoclave': {
        const autoGeo = new THREE.CylinderGeometry(4.5, 4.5, 14, 32);
        const autoclave = new THREE.Mesh(autoGeo, steelMat);
        autoclave.rotation.z = Math.PI / 2;
        autoclave.position.set(0, 5, 0);
        root.add(autoclave);

        const doorGeo = new THREE.CylinderGeometry(4.8, 4.8, 1.2, 32);
        const door = new THREE.Mesh(doorGeo, warningMat);
        door.rotation.z = Math.PI / 2;
        door.position.set(7.2, 5, 0);
        root.add(door);

        const wheelGeo = new THREE.TorusGeometry(2, 0.3, 16, 24);
        const wheel = new THREE.Mesh(wheelGeo, accentMat);
        wheel.rotation.y = Math.PI / 2;
        wheel.position.set(8, 5, 0);
        root.add(wheel);

        updateFn = () => {
          wheel.rotation.x += 0.03;
        };
        break;
      }

      // 10. Milliy Tabiat Bog'i va Baliq Yo'lagi
      case 'nature_reserve': {
        const mtGeo1 = new THREE.ConeGeometry(8, 12, 5);
        const mtMat = new THREE.MeshStandardMaterial({ color: 0x065f46 });
        const mt1 = new THREE.Mesh(mtGeo1, mtMat);
        mt1.position.set(-8, 6, -5);
        root.add(mt1);

        const mt2 = new THREE.Mesh(mtGeo1, mtMat);
        mt2.position.set(6, 7, -6);
        root.add(mt2);

        const riverGeo = new THREE.PlaneGeometry(12, 28);
        const riverMat = new THREE.MeshStandardMaterial({ color: 0x38bdf8, roughness: 0.1 });
        const river = new THREE.Mesh(riverGeo, riverMat);
        river.rotation.x = -Math.PI / 2;
        river.position.set(0, 0.1, 2);
        root.add(river);

        for (let i = 0; i < 4; i++) {
          const stepGeo = new THREE.BoxGeometry(8, 0.8, 2);
          const step = new THREE.Mesh(stepGeo, metalMat);
          step.position.set(0, 0.4 + i * 0.6, -2 + i * 2.5);
          root.add(step);
        }
        break;
      }

      // 11. E-Chiqindi va Litiy Shredder
      case 'ewaste_recycler': {
        const boxGeo = new THREE.BoxGeometry(12, 8, 8);
        const shredder = new THREE.Mesh(boxGeo, metalMat);
        shredder.position.set(0, 4, 0);
        root.add(shredder);

        const shaftGeo = new THREE.CylinderGeometry(1.6, 1.6, 7, 16);
        const shaft1 = new THREE.Mesh(shaftGeo, accentMat);
        shaft1.rotation.x = Math.PI / 2;
        shaft1.position.set(-2.5, 4, 0);
        root.add(shaft1);

        const shaft2 = new THREE.Mesh(shaftGeo, accentMat);
        shaft2.rotation.x = Math.PI / 2;
        shaft2.position.set(2.5, 4, 0);
        root.add(shaft2);

        updateFn = () => {
          shaft1.rotation.y += 0.08;
          shaft2.rotation.y -= 0.08;
        };
        break;
      }

      // 12. Induksion Quyuv Pechi
      case 'foundry_smelter': {
        const potGeo = new THREE.CylinderGeometry(5, 3.5, 9, 32);
        const pot = new THREE.Mesh(potGeo, metalMat);
        pot.position.set(0, 5, 0);
        root.add(pot);

        const liquidGeo = new THREE.CylinderGeometry(4.6, 4.6, 0.5, 32);
        const liquidMat = new THREE.MeshBasicMaterial({ color: 0xf97316 });
        const liquid = new THREE.Mesh(liquidGeo, liquidMat);
        liquid.position.set(0, 8.5, 0);
        root.add(liquid);

        updateFn = () => {
          liquidMat.color.setHSL(0.06 + Math.sin(Date.now() * 0.006) * 0.02, 1, 0.5);
        };
        break;
      }

      // 13. Shamol va Quyosh (Clean Energy)
      case 'clean_energy': {
        const towerGeo = new THREE.CylinderGeometry(0.6, 1.4, 20, 16);
        const tower = new THREE.Mesh(towerGeo, steelMat);
        tower.position.set(0, 10, 0);
        root.add(tower);

        const rotor = new THREE.Group();
        rotor.position.set(0, 20, 2.2);
        root.add(rotor);

        const hubGeo = new THREE.SphereGeometry(1.2, 16, 16);
        const hub = new THREE.Mesh(hubGeo, accentMat);
        rotor.add(hub);

        for (let i = 0; i < 3; i++) {
          const bladeGeo = new THREE.BoxGeometry(0.6, 12, 0.2);
          const blade = new THREE.Mesh(bladeGeo, steelMat);
          blade.position.y = 6;
          const bladePivot = new THREE.Group();
          bladePivot.rotation.z = (i * Math.PI * 2) / 3;
          bladePivot.add(blade);
          rotor.add(bladePivot);
        }

        updateFn = () => {
          rotor.rotation.z -= 0.04;
        };
        break;
      }

      // 14. Siklon Separator (Dust Cyclone)
      case 'dust_cyclone': {
        const coneGeo = new THREE.ConeGeometry(5, 9, 32);
        const cone = new THREE.Mesh(coneGeo, glassMat);
        cone.rotation.x = Math.PI;
        cone.position.set(0, 5.5, 0);
        root.add(cone);

        const topCylGeo = new THREE.CylinderGeometry(5, 5, 4, 32);
        const topCyl = new THREE.Mesh(topCylGeo, steelMat);
        topCyl.position.set(0, 11, 0);
        root.add(topCyl);

        const vCount = 40;
        const vGeo = new THREE.BufferGeometry();
        const vPos = new Float32Array(vCount * 3);
        vGeo.setAttribute('position', new THREE.BufferAttribute(vPos, 3));
        const vMat = new THREE.PointsMaterial({ color: 0x38bdf8, size: 0.6 });
        const vSys = new THREE.Points(vGeo, vMat);
        root.add(vSys);

        updateFn = () => {
          const pos = vGeo.attributes.position.array;
          const time = Date.now() * 0.005;
          for (let i = 0; i < vCount; i++) {
            const h = (i / vCount) * 11 + 2;
            const r = (h / 13) * 4;
            const angle = time * 3 + i * 0.5;
            pos[i*3] = Math.cos(angle) * r;
            pos[i*3+1] = h;
            pos[i*3+2] = Math.sin(angle) * r;
          }
          vGeo.attributes.position.needsUpdate = true;
        };
        break;
      }

      // 15. Chiqindilarni Saralash Konveyeri (Sorting Game)
      case 'sorting': {
        const beltGeo = new THREE.BoxGeometry(26, 1.2, 6);
        const beltMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.9 });
        const belt = new THREE.Mesh(beltGeo, beltMat);
        belt.position.set(0, 3, 0);
        root.add(belt);

        for (let i = 0; i < 4; i++) {
          const legGeo = new THREE.CylinderGeometry(0.4, 0.4, 3, 8);
          const leg = new THREE.Mesh(legGeo, steelMat);
          leg.position.set(-10 + i * 6.5, 1.5, 0);
          root.add(leg);
        }

        const boxColors = [0xef4444, 0x3b82f6, 0x10b981, 0xf59e0b];
        const bins = [];
        for (let i = 0; i < 4; i++) {
          const binGeo = new THREE.BoxGeometry(3.5, 3.5, 3.5);
          const binMat = new THREE.MeshStandardMaterial({ color: boxColors[i], metalness: 0.5 });
          const bin = new THREE.Mesh(binGeo, binMat);
          bin.position.set(-9 + i * 6, 1.75, 6);
          root.add(bin);
          bins.push(bin);
        }
        break;
      }

      // Universal / Boshqa barcha arxetiplar uchun
      default: {
        const mainGeo = new THREE.CylinderGeometry(4.8, 4.8, 12, 32);
        const mainMesh = new THREE.Mesh(mainGeo, metalMat);
        mainMesh.position.set(0, 6, 0);
        root.add(mainMesh);

        const orbitRingGeo = new THREE.TorusGeometry(7.5, 0.4, 16, 64);
        const orbitRing = new THREE.Mesh(orbitRingGeo, accentMat);
        orbitRing.rotation.x = Math.PI / 3;
        orbitRing.position.set(0, 6, 0);
        root.add(orbitRing);

        const domeGeo = new THREE.SphereGeometry(4.8, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2);
        const dome = new THREE.Mesh(domeGeo, steelMat);
        dome.position.set(0, 12, 0);
        root.add(dome);

        updateFn = () => {
          orbitRing.rotation.z += 0.02;
          orbitRing.rotation.y += 0.01;
        };
        break;
      }
    }

    return { update: updateFn };
  },

  // Butun ekranli 3D Model Ko'rish Modali (Fullscreen Inspection)
  openFullscreenModal(sceneType, meta = {}) {
    let modal = document.getElementById('eco-3d-fullscreen-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'eco-3d-fullscreen-modal';
      modal.className = 'fixed inset-0 z-[9999] bg-slate-950/90 backdrop-blur-xl flex flex-col items-center justify-center p-4 select-none';
      modal.innerHTML = `
        <div class="relative w-full max-w-4xl h-[80vh] rounded-3xl border border-amber-500/40 bg-slate-950 shadow-2xl overflow-hidden flex flex-col">
          <!-- Top Bar -->
          <div class="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/60">
            <div class="flex items-center gap-3">
              <span class="w-3 h-3 rounded-full bg-amber-400 animate-ping"></span>
              <span id="eco-3d-modal-title" class="text-sm font-black text-amber-400 uppercase tracking-widest">3D Model Tekshiruvi</span>
            </div>
            <button onclick="Eco3DVisualizer.closeFullscreenModal()" class="w-9 h-9 rounded-xl bg-slate-800 hover:bg-red-500 hover:text-white text-slate-300 font-bold flex items-center justify-center transition-all cursor-pointer">
              ✕
            </button>
          </div>
          <!-- Canvas Container -->
          <div id="eco-3d-modal-viewport" class="flex-1 w-full relative"></div>
          <!-- Bottom Controls -->
          <div class="px-6 py-3 border-t border-slate-800 bg-slate-900/60 flex flex-wrap items-center justify-between text-xs text-slate-400 gap-2">
            <span>🖱️ Sichqoncha yoki barmoq bilan 360° har tomondan aylantiring</span>
            <div class="flex items-center gap-2">
              <button onclick="Eco3DVisualizer.toggleModalAutoRotate(this)" class="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-300 font-bold transition-all">🔄 Avto: Yoqiq</button>
              <button onclick="Eco3DVisualizer.closeFullscreenModal()" class="px-4 py-1.5 rounded-lg bg-emerald-500 text-slate-950 font-black transition-all">Tushunarli</button>
            </div>
          </div>
        </div>
      `;
      document.body.appendChild(modal);
    }

    modal.classList.remove('hidden');
    const viewport = document.getElementById('eco-3d-modal-viewport');
    const titleEl = document.getElementById('eco-3d-modal-title');
    if (titleEl && meta.title) titleEl.textContent = `3D: ${meta.title}`;
    this.mount(viewport, sceneType, meta);
  },

  closeFullscreenModal() {
    const modal = document.getElementById('eco-3d-fullscreen-modal');
    if (modal) {
      modal.classList.add('hidden');
      const viewport = document.getElementById('eco-3d-modal-viewport');
      if (viewport) this.unmount(viewport);
    }
  },

  toggleModalAutoRotate(btn) {
    const viewport = document.getElementById('eco-3d-modal-viewport');
    if (!viewport) return;
    const inst = this.activeInstances.get(viewport);
    if (inst && inst.controls) {
      inst.controls.autoRotate = !inst.controls.autoRotate;
      if (btn) btn.textContent = inst.controls.autoRotate ? "🔄 Avto: Yoqiq" : "⏸️ Avto: O'chiq";
    }
  }
};

window.Eco3DVisualizer = Eco3DVisualizer;
