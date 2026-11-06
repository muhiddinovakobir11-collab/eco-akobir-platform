// =======================================================================
// EcoAkobir — 3D Interaktiv Sanoat & Ekologik Vizualizator (v43)
// Three.js asosidagi to'liq 360° aylanuvchi interaktiv 3D uskunalar modeli
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
    const height = Math.max(220, containerEl.clientHeight || 220);

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
    renderer.domElement.style.borderRadius = '1rem';
    renderer.domElement.style.outline = 'none';
    renderer.domElement.style.cursor = 'grab';

    containerEl.innerHTML = '';
    containerEl.appendChild(renderer.domElement);

    // 2. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
    dirLight.position.set(20, 40, 25);
    scene.add(dirLight);

    const dirLight2 = new THREE.DirectionalLight(0x38bdf8, 0.6);
    dirLight2.position.set(-20, 20, -20);
    scene.add(dirLight2);

    // Accent PointLight based on theme
    const accentColor = this.getThemeColor(sceneType);
    const pointLight = new THREE.PointLight(accentColor, 2.5, 60);
    pointLight.position.set(0, 10, 0);
    scene.add(pointLight);

    // 3. Grid Platform Floor
    const gridHelper = new THREE.GridHelper(50, 25, 0x1e293b, 0x0f172a);
    gridHelper.position.y = -0.05;
    scene.add(gridHelper);

    // Circular Sci-fi Platform Ring
    const ringGeo = new THREE.RingGeometry(18, 18.5, 64);
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
      theta: 0,
      phi: 0.45,
      radius: 42,
      targetRadius: 42,
      autoRotate: true,
      autoRotateSpeed: 0.005,
      target: new THREE.Vector3(0, 5, 0)
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

      // Update specific animated components
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
      default: return 0x38bdf8;
    }
  },

  // 3D Modellarni generatsiya qilish
  buildModel(root, sceneType, meta) {
    const metalMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.35, metalness: 0.75 });
    const steelMat = new THREE.MeshStandardMaterial({ color: 0x64748b, roughness: 0.4, metalness: 0.6 });
    const accentMat = new THREE.MeshStandardMaterial({ color: this.getThemeColor(sceneType), roughness: 0.2, metalness: 0.8 });
    const glassMat = new THREE.MeshPhysicalMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.45, roughness: 0.1, transmission: 0.85 });

    let updateFn = null;

    switch (sceneType) {
      case 'pyrolysis_reactor': {
        // Primary Furnace
        const furnaceGeo = new THREE.BoxGeometry(10, 10, 10);
        const furnace = new THREE.Mesh(furnaceGeo, metalMat);
        furnace.position.set(-8, 5, 0);
        root.add(furnace);

        // Core glowing window
        const winGeo = new THREE.PlaneGeometry(5, 5);
        const winMat = new THREE.MeshBasicMaterial({ color: 0xef4444, side: THREE.DoubleSide });
        const win = new THREE.Mesh(winGeo, winMat);
        win.position.set(-8, 5, 5.05);
        root.add(win);

        // Secondary Combustion Column (1100C)
        const secGeo = new THREE.CylinderGeometry(3.5, 3.5, 14, 32);
        const secCol = new THREE.Mesh(secGeo, accentMat);
        secCol.position.set(5, 7, 0);
        root.add(secCol);

        // Connecting Pipe
        const pipeGeo = new THREE.CylinderGeometry(0.8, 0.8, 8, 16);
        const pipe = new THREE.Mesh(pipeGeo, steelMat);
        pipe.rotation.z = Math.PI / 2;
        pipe.position.set(-1.5, 8, 0);
        root.add(pipe);

        // Smokestack
        const stackGeo = new THREE.CylinderGeometry(1.2, 1.8, 18, 32);
        const stack = new THREE.Mesh(stackGeo, steelMat);
        stack.position.set(13, 9, 0);
        root.add(stack);

        // Animated Flame & Smoke Particles
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

      case 'gas_scrubber': {
        // Scrubber Column (Tall cylinder)
        const colGeo = new THREE.CylinderGeometry(3.8, 3.8, 16, 32);
        const col = new THREE.Mesh(colGeo, glassMat);
        col.position.set(0, 8, 0);
        root.add(col);

        // Steel base & top caps
        const capGeo = new THREE.CylinderGeometry(4.2, 4.2, 1.5, 32);
        const baseCap = new THREE.Mesh(capGeo, steelMat);
        baseCap.position.set(0, 0.75, 0);
        root.add(baseCap);

        const topCap = new THREE.Mesh(capGeo, steelMat);
        topCap.position.set(0, 16, 0);
        root.add(topCap);

        // Spray Ring
        const sprayRingGeo = new THREE.TorusGeometry(2.8, 0.3, 16, 32);
        const sprayRing = new THREE.Mesh(sprayRingGeo, accentMat);
        sprayRing.rotation.x = Math.PI / 2;
        sprayRing.position.set(0, 13, 0);
        root.add(sprayRing);

        // Animated Droplet Particles
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

      case 'wastewater_basin': {
        // Open Aeration Basin Tank
        const tankGeo = new THREE.BoxGeometry(22, 6, 14);
        const tank = new THREE.Mesh(tankGeo, metalMat);
        tank.position.set(0, 3, 0);
        root.add(tank);

        // Water surface
        const waterGeo = new THREE.PlaneGeometry(21, 13, 20, 20);
        const waterMat = new THREE.MeshStandardMaterial({ color: 0x0f766e, roughness: 0.1, metalness: 0.5, transparent: true, opacity: 0.85 });
        const water = new THREE.Mesh(waterGeo, waterMat);
        water.rotation.x = -Math.PI / 2;
        water.position.set(0, 5.8, 0);
        root.add(water);

        // Rising aeration bubbles
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

      case 'sanitary_radar': {
        // Factory model on left
        const plantGeo = new THREE.BoxGeometry(8, 7, 8);
        const plant = new THREE.Mesh(plantGeo, metalMat);
        plant.position.set(-13, 3.5, 0);
        root.add(plant);

        const chimGeo = new THREE.CylinderGeometry(0.8, 1.2, 10, 16);
        const chim = new THREE.Mesh(chimGeo, steelMat);
        chim.position.set(-13, 10, 0);
        root.add(chim);

        // Houses on right
        const houseGeo = new THREE.BoxGeometry(4, 3.5, 4);
        const houseMat = new THREE.MeshStandardMaterial({ color: 0x0284c7 });
        const house1 = new THREE.Mesh(houseGeo, houseMat);
        house1.position.set(12, 1.75, -2);
        root.add(house1);

        const house2 = new THREE.Mesh(houseGeo, houseMat);
        house2.position.set(13, 1.75, 4);
        root.add(house2);

        // Laser Distance Beam line
        const lineGeo = new THREE.CylinderGeometry(0.15, 0.15, 25, 8);
        const lineMat = new THREE.MeshBasicMaterial({ color: 0xa855f7 });
        const line = new THREE.Mesh(lineGeo, lineMat);
        line.rotation.z = Math.PI / 2;
        line.position.set(0, 4, 0);
        root.add(line);

        // Pulsing radar marker
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

      case 'clean_energy': {
        // Wind turbine tower
        const towerGeo = new THREE.CylinderGeometry(0.6, 1.4, 20, 16);
        const tower = new THREE.Mesh(towerGeo, steelMat);
        tower.position.set(0, 10, 0);
        root.add(tower);

        // Nacelle
        const nacelleGeo = new THREE.BoxGeometry(2, 2, 4);
        const nacelle = new THREE.Mesh(nacelleGeo, steelMat);
        nacelle.position.set(0, 20, 0);
        root.add(nacelle);

        // Rotor Blades Group
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

      default: {
        // Universal Industrial Core Model (Cylinder + Rings + Spheres)
        const mainGeo = new THREE.CylinderGeometry(4.5, 4.5, 12, 32);
        const mainMesh = new THREE.Mesh(mainGeo, metalMat);
        mainMesh.position.set(0, 6, 0);
        root.add(mainMesh);

        // Orbiting Ring
        const orbitRingGeo = new THREE.TorusGeometry(7, 0.4, 16, 64);
        const orbitRing = new THREE.Mesh(orbitRingGeo, accentMat);
        orbitRing.rotation.x = Math.PI / 3;
        orbitRing.position.set(0, 6, 0);
        root.add(orbitRing);

        // Top Dome
        const domeGeo = new THREE.SphereGeometry(4.5, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2);
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
  }
};

window.Eco3DVisualizer = Eco3DVisualizer;
