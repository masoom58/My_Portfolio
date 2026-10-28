import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { Eye, EyeOff, RotateCw, Sparkles, Layers, Sliders } from 'lucide-react';

interface ThreeHeroCanvasProps {
  interactive?: boolean;
}

// Reusable math objects to prevent garbage collection inside render loop
const _mouse = new THREE.Vector2(0, 0);
const _targetRotation = new THREE.Vector2(0, 0);

export const ThreeHeroCanvas: React.FC<ThreeHeroCanvasProps> = ({ interactive = true }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [wireframeMode, setWireframeMode] = useState(false);
  const [activePreset, setActivePreset] = useState<'neural' | 'matrix' | 'hypercore'>('neural');
  const [isControlsOpen, setIsControlsOpen] = useState(true);
  const [isRotating, setIsRotating] = useState(true);
  const [isWebGLSupported, setIsWebGLSupported] = useState(true);

  // References for live updates inside animation loop without tearing down Three.js canvas
  const stateRef = useRef({
    wireframe: false,
    preset: 'neural' as 'neural' | 'matrix' | 'hypercore',
    rotating: true,
  });

  useEffect(() => {
    stateRef.current.wireframe = wireframeMode;
  }, [wireframeMode]);

  useEffect(() => {
    stateRef.current.preset = activePreset;
  }, [activePreset]);

  useEffect(() => {
    stateRef.current.rotating = isRotating;
  }, [isRotating]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Software-WebGL Guard
    const isSoftwareGl = (() => {
      try {
        const testCanvas = document.createElement('canvas');
        const gl = testCanvas.getContext('webgl2') || testCanvas.getContext('webgl');
        if (!gl) return true;
        const ext = gl.getExtension('WEBGL_debug_renderer_info');
        const param = ext ? ext.UNMASKED_RENDERER_WEBGL : (gl as WebGLRenderingContext).RENDERER;
        const gpu = String((gl as WebGLRenderingContext).getParameter(param));
        gl.getExtension('WEBGL_lose_context')?.loseContext();
        return /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
      } catch {
        return false;
      }
    })();

    // Scene setup
    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x030712, 0.045);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0.5, 5.8);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: !isSoftwareGl,
        powerPreference: 'high-performance',
        alpha: true,
      });
    } catch {
      setIsWebGLSupported(false);
      return;
    }

    renderer.setSize(width, height);
    renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);

    // Studio Environment reflection using RoomEnvironment
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    try {
      const roomEnv = new RoomEnvironment();
      scene.environment = pmremGenerator.fromScene(roomEnv, 0.04).texture;
      pmremGenerator.dispose();
    } catch {
      // Graceful fallback if PMREM not available
    }

    // 2. Lighting Rig (3-point balanced studio)
    const keyLight = new THREE.DirectionalLight(0x38bdf8, 3.2);
    keyLight.position.set(4, 5, 4);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x818cf8, 2.0);
    fillLight.position.set(-4, -2, -3);
    scene.add(fillLight);

    const hemiLight = new THREE.HemisphereLight(0x38bdf8, 0x0f172a, 1.2);
    scene.add(hemiLight);

    // 3. Composite Procedural Model: 3–12 Part "Neural AI Quantum Core"
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // Part 1: Central Glowing AI Node (Icosahedron with emissive glow)
    const coreGeo = new THREE.IcosahedronGeometry(0.85, 2);
    const coreMat = new THREE.MeshPhysicalMaterial({
      color: 0x0284c7,
      emissive: 0x0369a1,
      emissiveIntensity: 0.8,
      metalness: 0.85,
      roughness: 0.18,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      wireframe: false,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    coreGroup.add(coreMesh);

    // Part 2: Inner Pulsing Energy Core
    const innerGeo = new THREE.SphereGeometry(0.48, 24, 24);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.85,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    coreGroup.add(innerMesh);

    // Part 3: Outer Geodesic Synaptic Lattice (Lighter outer lattice)
    const cageGeo = new THREE.IcosahedronGeometry(1.35, 1);
    const cageMat = new THREE.MeshStandardMaterial({
      color: 0x7dd3fc,
      emissive: 0x0284c7,
      emissiveIntensity: 0.3,
      metalness: 0.9,
      roughness: 0.1,
      wireframe: true,
      transparent: true,
      opacity: 0.65,
    });
    const cageMesh = new THREE.Mesh(cageGeo, cageMat);
    coreGroup.add(cageMesh);

    // Part 4 & 5: Orbiting Quantum Rings (Multi-axis gimbal rings)
    const ring1Geo = new THREE.TorusGeometry(1.7, 0.02, 16, 96);
    const ringMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      emissive: 0x0284c7,
      emissiveIntensity: 0.5,
      metalness: 0.95,
      roughness: 0.15,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ringMat);
    ring1.rotation.x = Math.PI / 3;
    ring1.rotation.y = Math.PI / 6;
    coreGroup.add(ring1);

    const ring2Geo = new THREE.TorusGeometry(2.0, 0.015, 16, 96);
    const ring2Mat = new THREE.MeshStandardMaterial({
      color: 0x818cf8,
      emissive: 0x4f46e5,
      emissiveIntensity: 0.4,
      metalness: 0.9,
      roughness: 0.2,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.z = Math.PI / 4;
    coreGroup.add(ring2);

    // Part 6: Orbiting Synaptic Data Nodes on Ring 1
    const nodeGroup = new THREE.Group();
    const nodeGeo = new THREE.SphereGeometry(0.06, 12, 12);
    const nodeMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
    const nodeCount = 6;
    for (let i = 0; i < nodeCount; i++) {
      const angle = (i / nodeCount) * Math.PI * 2;
      const nm = new THREE.Mesh(nodeGeo, nodeMat);
      nm.position.set(Math.cos(angle) * 1.7, Math.sin(angle) * 1.7, 0);
      nodeGroup.add(nm);
    }
    ring1.add(nodeGroup);

    // Part 7: Synaptic Particle Nebula (Background depth field)
    const particleCount = isSoftwareGl ? 350 : 850;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      // Spherical distribution around core
      const radius = 1.8 + Math.random() * 4.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      particlePos[i3] = radius * Math.sin(phi) * Math.cos(theta);
      particlePos[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePos[i3 + 2] = radius * Math.cos(phi);

      // Gradient between cyan and electric indigo
      const mixRatio = Math.random();
      particleColors[i3] = 0.2 + mixRatio * 0.3; // R
      particleColors[i3 + 1] = 0.7 + mixRatio * 0.2; // G
      particleColors[i3 + 2] = 0.95; // B
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.045,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Part 8: Grounding Contact Shadow Plane
    const shadowGeo = new THREE.PlaneGeometry(6, 6);
    const shadowCanvas = document.createElement('canvas');
    shadowCanvas.width = 128;
    shadowCanvas.height = 128;
    const sctx = shadowCanvas.getContext('2d');
    if (sctx) {
      const grad = sctx.createRadialGradient(64, 64, 0, 64, 64, 64);
      grad.addColorStop(0, 'rgba(6, 182, 212, 0.25)');
      grad.addColorStop(0.5, 'rgba(15, 23, 42, 0.15)');
      grad.addColorStop(1, 'rgba(3, 7, 18, 0)');
      sctx.fillStyle = grad;
      sctx.fillRect(0, 0, 128, 128);
    }
    const shadowTex = new THREE.CanvasTexture(shadowCanvas);
    shadowTex.colorSpace = THREE.SRGBColorSpace;
    const shadowMat = new THREE.MeshBasicMaterial({
      map: shadowTex,
      transparent: true,
      opacity: 0.6,
      depthWrite: false,
    });
    const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    shadowMesh.rotation.x = -Math.PI / 2;
    shadowMesh.position.y = -2.2;
    scene.add(shadowMesh);

    // 4. Mouse / Touch Pointer interaction
    const handlePointerMove = (e: MouseEvent) => {
      if (!interactive) return;
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      _mouse.x = Math.max(-1, Math.min(1, x));
      _mouse.y = Math.max(-1, Math.min(1, y));
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });

    // Handle Resize
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // 5. Animation Loop with Software-GL guard
    let frameId = 0;
    const clock = new THREE.Clock();

    function afterDraw(cb: () => void) {
      const gl = renderer.getContext() as WebGL2RenderingContext;
      const sync = gl.fenceSync ? gl.fenceSync(gl.SYNC_GPU_COMMANDS_COMPLETE, 0) : null;
      gl.flush();
      const poll = () => {
        const state = sync && gl.getSyncParameter(sync, gl.SYNC_STATUS);
        if (state === gl.UNSIGNALED) {
          frameId = window.setTimeout(poll, 5);
        } else {
          if (sync) gl.deleteSync(sync);
          frameId = window.setTimeout(cb, 80);
        }
      };
      if (sync) {
        frameId = window.setTimeout(poll, 5);
      } else {
        frameId = window.setTimeout(cb, 80);
      }
    }

    function animate() {
      const delta = Math.min(clock.getDelta(), 0.1);
      const elapsed = clock.getElapsedTime();

      // Check current state from ref
      const current = stateRef.current;

      // Update wireframe mode
      coreMat.wireframe = current.wireframe;

      // Update preset visual styling
      if (current.preset === 'matrix') {
        coreMat.color.setHex(0x10b981);
        coreMat.emissive.setHex(0x059669);
        ringMat.color.setHex(0x34d399);
      } else if (current.preset === 'hypercore') {
        coreMat.color.setHex(0xec4899);
        coreMat.emissive.setHex(0xbe185d);
        ringMat.color.setHex(0xf472b6);
      } else {
        // neural default
        coreMat.color.setHex(0x0284c7);
        coreMat.emissive.setHex(0x0369a1);
        ringMat.color.setHex(0x38bdf8);
      }

      // Smooth pointer target interpolation
      _targetRotation.x = _mouse.y * 0.45;
      _targetRotation.y = _mouse.x * 0.65;

      coreGroup.rotation.x = THREE.MathUtils.damp(coreGroup.rotation.x, _targetRotation.x, 3.5, delta);
      coreGroup.rotation.y = THREE.MathUtils.damp(coreGroup.rotation.y, _targetRotation.y, 3.5, delta);

      // Autonomous rotation when enabled
      if (current.rotating) {
        coreMesh.rotation.y += delta * 0.45;
        coreMesh.rotation.x += delta * 0.2;
        innerMesh.rotation.y -= delta * 0.6;
        cageMesh.rotation.y += delta * 0.3;
        ring1.rotation.z += delta * 0.5;
        ring2.rotation.z -= delta * 0.35;
        particles.rotation.y += delta * 0.08;
      }

      // Subtle breath pulsing on inner core
      const pulseScale = 1.0 + Math.sin(elapsed * 2.2) * 0.08;
      innerMesh.scale.set(pulseScale, pulseScale, pulseScale);

      // Render
      renderer.render(scene, camera);

      if (isSoftwareGl) {
        afterDraw(animate);
      } else {
        frameId = requestAnimationFrame(animate);
      }
    }

    if (isSoftwareGl) {
      afterDraw(animate);
    } else {
      frameId = requestAnimationFrame(animate);
    }

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('resize', handleResize);
      if (isSoftwareGl) {
        clearTimeout(frameId);
      } else {
        cancelAnimationFrame(frameId);
      }
      renderer.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      cageGeo.dispose();
      cageMat.dispose();
      ring1Geo.dispose();
      ringMat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      nodeGeo.dispose();
      nodeMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      shadowGeo.dispose();
      shadowMat.dispose();
      shadowTex.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [interactive]);

  if (!isWebGLSupported) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-gray-950/80 p-6 text-center">
        <div className="max-w-md rounded-2xl border border-cyan-500/20 bg-gray-900/60 p-6 backdrop-blur-md">
          <Sparkles className="mx-auto mb-3 h-8 w-8 text-cyan-400" />
          <h3 className="font-display text-lg font-semibold text-white">Neural Hologram Active</h3>
          <p className="mt-1 text-sm text-gray-400">
            WebGL acceleration is restricted on this browser, running in optimized low-power mode.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-full w-full select-none">
      {/* WebGL Canvas Container */}
      <div ref={mountRef} className="h-full w-full cursor-grab active:cursor-grabbing" />

      {/* Sleek Collapsible Bottom Dock (Directive 5: Ergonomic Collapsible Bottom Dock) */}
      <div className="pointer-events-auto absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
        {/* Toggle Drawer Button */}
        <button
          onClick={() => setIsControlsOpen((prev) => !prev)}
          className="mb-1.5 flex items-center gap-1.5 rounded-full border border-cyan-500/20 bg-gray-950/80 px-3 py-1 text-xs font-mono text-cyan-300 backdrop-blur-md hover:border-cyan-400/40 hover:bg-gray-900 transition-colors shadow-lg"
          title="Toggle 3D Viewport Controls"
        >
          <Sliders className="h-3 w-3" />
          <span>{isControlsOpen ? '▾ Hide 3D Controls' : '▴ 3D HUD Controls'}</span>
        </button>

        {/* Collapsible Dock */}
        {isControlsOpen && (
          <div className="flex flex-wrap items-center justify-center gap-2 rounded-2xl border border-cyan-500/20 bg-gray-950/85 px-3 py-2 shadow-2xl backdrop-blur-md text-xs font-mono text-gray-300">
            {/* Presets */}
            <div className="flex items-center gap-1 border-r border-gray-800 pr-2">
              <span className="text-[10px] uppercase text-gray-500 mr-1 flex items-center gap-1">
                <Layers className="h-2.5 w-2.5 text-cyan-400" /> Mode:
              </span>
              <button
                onClick={() => setActivePreset('neural')}
                className={`rounded-lg px-2 py-1 transition-colors ${
                  activePreset === 'neural'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-medium'
                    : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                Neural
              </button>
              <button
                onClick={() => setActivePreset('matrix')}
                className={`rounded-lg px-2 py-1 transition-colors ${
                  activePreset === 'matrix'
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-medium'
                    : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                Matrix
              </button>
              <button
                onClick={() => setActivePreset('hypercore')}
                className={`rounded-lg px-2 py-1 transition-colors ${
                  activePreset === 'hypercore'
                    ? 'bg-pink-500/20 text-pink-300 border border-pink-500/30 font-medium'
                    : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                Pulse
              </button>
            </div>

            {/* Wireframe Toggle */}
            <button
              onClick={() => setWireframeMode((prev) => !prev)}
              className={`flex items-center gap-1 rounded-lg px-2.5 py-1 transition-colors ${
                wireframeMode
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                  : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/50'
              }`}
              title="Toggle Lattice Wireframe"
            >
              {wireframeMode ? <Eye className="h-3 w-3" /> : <EyeOff className="h-3 w-3" />}
              <span>Wireframe: {wireframeMode ? 'ON' : 'OFF'}</span>
            </button>

            {/* Auto-Rotation Toggle */}
            <button
              onClick={() => setIsRotating((prev) => !prev)}
              className={`flex items-center gap-1 rounded-lg px-2.5 py-1 transition-colors ${
                isRotating
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                  : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/50'
              }`}
              title="Toggle Auto Rotation"
            >
              <RotateCw className={`h-3 w-3 ${isRotating ? 'animate-spin' : ''}`} style={{ animationDuration: '6s' }} />
              <span>Spin: {isRotating ? 'ON' : 'PAUSED'}</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
