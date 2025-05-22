
import React, { useRef, useEffect } from "react";
import * as THREE from "three";

interface ThreeSceneProps {
  className?: string;
  interactive?: boolean;
}

const ThreeScene: React.FC<ThreeSceneProps> = ({
  className,
  interactive = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const meshRef = useRef<THREE.Mesh | null>(null);
  const frameIdRef = useRef<number | null>(null);
  const mousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    // Initialize scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Create camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    cameraRef.current = camera;

    // Create renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(
      containerRef.current.clientWidth,
      containerRef.current.clientHeight
    );
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 0.8);
    pointLight.position.set(2, 3, 4);
    scene.add(pointLight);

    // Create geometry
    const geometries = [
      new THREE.IcosahedronGeometry(1, 0),
      new THREE.OctahedronGeometry(1, 0),
      new THREE.TetrahedronGeometry(1, 0),
    ];
    
    const selectedGeometry = geometries[Math.floor(Math.random() * geometries.length)];
    
    // Material
    const material = new THREE.MeshStandardMaterial({
      color: 0x333333,
      wireframe: true,
      transparent: true,
      opacity: 0.8,
    });
    
    // Create mesh
    const mesh = new THREE.Mesh(selectedGeometry, material);
    scene.add(mesh);
    meshRef.current = mesh;

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current || !cameraRef.current || !rendererRef.current) return;
      
      cameraRef.current.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      cameraRef.current.updateProjectionMatrix();
      
      rendererRef.current.setSize(
        containerRef.current.clientWidth,
        containerRef.current.clientHeight
      );
    };

    window.addEventListener("resize", handleResize);

    // Handle mouse movement for interactive mode
    const handleMouseMove = (event: MouseEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const relativeX = event.clientX - rect.left;
      const relativeY = event.clientY - rect.top;
      
      mousePosition.current = {
        x: (relativeX / containerRef.current.clientWidth) * 2 - 1,
        y: -(relativeY / containerRef.current.clientHeight) * 2 + 1,
      };
    };

    if (interactive) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    // Animation loop
    const animate = () => {
      frameIdRef.current = requestAnimationFrame(animate);
      
      if (meshRef.current) {
        meshRef.current.rotation.x += 0.005;
        meshRef.current.rotation.y += 0.005;
        
        if (interactive) {
          // Smoothly follow mouse
          meshRef.current.rotation.x += (mousePosition.current.y * 0.2 - meshRef.current.rotation.x) * 0.05;
          meshRef.current.rotation.y += (mousePosition.current.x * 0.2 - meshRef.current.rotation.y) * 0.05;
        }
      }
      
      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };
    
    animate();

    // Cleanup
    return () => {
      if (frameIdRef.current) {
        cancelAnimationFrame(frameIdRef.current);
      }
      
      window.removeEventListener("resize", handleResize);
      
      if (interactive) {
        window.removeEventListener("mousemove", handleMouseMove);
      }
      
      if (rendererRef.current && containerRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      
      if (meshRef.current) {
        meshRef.current.geometry.dispose();
        (meshRef.current.material as THREE.Material).dispose();
      }
    };
  }, [interactive]);

  return (
    <div
      ref={containerRef}
      className={interactive ? "interactive-three-canvas" : "three-canvas"}
    />
  );
};

export default ThreeScene;
