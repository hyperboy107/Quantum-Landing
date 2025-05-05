import * as THREE from 'three';

interface SceneConfig {
  canvasId: string;
  animate?: boolean;
}

// Create and return a Three.js scene
export const createScene = ({ canvasId, animate = true }: SceneConfig) => {
  const canvas = document.getElementById(canvasId) as HTMLCanvasElement;
  
  if (!canvas) {
    console.error(`Canvas element with id '${canvasId}' not found.`);
    return null;
  }
  
  // Create scene
  const scene = new THREE.Scene();
  
  // Create camera
  const camera = new THREE.PerspectiveCamera(
    75,
    canvas.clientWidth / canvas.clientHeight,
    0.1,
    1000
  );
  camera.position.z = 5;
  
  // Create renderer
  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
  });
  
  renderer.setSize(canvas.clientWidth, canvas.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  
  // Handle window resize
  const handleResize = () => {
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
  };
  
  window.addEventListener('resize', handleResize);
  
  // Setup animation loop
  let animationId: number;
  
  const startAnimation = (animateFunc: (time: number) => void) => {
    const tick = (time: number) => {
      animateFunc(time);
      renderer.render(scene, camera);
      animationId = requestAnimationFrame(tick);
    };
    
    animationId = requestAnimationFrame(tick);
  };
  
  // Cleanup function
  const cleanup = () => {
    window.removeEventListener('resize', handleResize);
    if (animationId) cancelAnimationFrame(animationId);
    scene.clear();
    renderer.dispose();
  };
  
  return {
    scene,
    camera,
    renderer,
    startAnimation,
    cleanup,
  };
};

// Create floating particles effect
export const createParticles = (scene: THREE.Scene, count: number = 200, size: number = 0.05) => {
  const particlesGeometry = new THREE.BufferGeometry();
  const particlesCount = count;
  
  const positions = new Float32Array(particlesCount * 3);
  const colors = new Float32Array(particlesCount * 3);
  
  const colorOptions = [
    new THREE.Color(0x4f46e5), // indigo
    new THREE.Color(0x7c3aed), // violet
    new THREE.Color(0x0d9488), // teal
  ];
  
  for (let i = 0; i < particlesCount; i++) {
    // Positions (random within a sphere)
    const radius = 3.5 * Math.cbrt(Math.random());
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.random() * Math.PI;
    
    positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);     // x
    positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta); // y
    positions[i * 3 + 2] = radius * Math.cos(phi);                   // z
    
    // Colors (random from our options)
    const color = colorOptions[Math.floor(Math.random() * colorOptions.length)];
    colors[i * 3] = color.r;
    colors[i * 3 + 1] = color.g;
    colors[i * 3 + 2] = color.b;
  }
  
  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  
  const particlesMaterial = new THREE.PointsMaterial({
    size,
    sizeAttenuation: true,
    transparent: true,
    alphaMap: createCircleTexture(),
    vertexColors: true,
  });
  
  const particles = new THREE.Points(particlesGeometry, particlesMaterial);
  scene.add(particles);
  
  // Animation function
  const animateParticles = (time: number) => {
    const t = time * 0.0001;
    particles.rotation.y = t * 0.1;
    
    // Update positions slightly for a floating effect
    const positions = particlesGeometry.attributes.position.array as Float32Array;
    for (let i = 0; i < particlesCount; i++) {
      const i3 = i * 3;
      positions[i3] += Math.sin(t + i) * 0.002;
      positions[i3 + 1] += Math.cos(t + i) * 0.002;
    }
    particlesGeometry.attributes.position.needsUpdate = true;
  };
  
  return {
    particles,
    animate: animateParticles,
  };
};

// Create a circular texture for particles
function createCircleTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 32;
  canvas.height = 32;
  
  const context = canvas.getContext('2d')!;
  
  // Draw a circle
  context.beginPath();
  context.arc(16, 16, 15, 0, Math.PI * 2);
  context.closePath();
  
  // Create gradient
  const gradient = context.createRadialGradient(16, 16, 0, 16, 16, 16);
  gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
  gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
  
  context.fillStyle = gradient;
  context.fill();
  
  const texture = new THREE.Texture(canvas);
  texture.needsUpdate = true;
  
  return texture;
}

// Create a floating torus
export const createTorus = (scene: THREE.Scene) => {
  const geometry = new THREE.TorusGeometry(1, 0.3, 16, 100);
  const material = new THREE.MeshBasicMaterial({
    color: 0x7c3aed,
    wireframe: true,
  });
  
  const torus = new THREE.Mesh(geometry, material);
  scene.add(torus);
  
  const animateTorus = (time: number) => {
    const t = time * 0.001;
    torus.rotation.x = t * 0.3;
    torus.rotation.y = t * 0.5;
  };
  
  return {
    torus,
    animate: animateTorus,
  };
};