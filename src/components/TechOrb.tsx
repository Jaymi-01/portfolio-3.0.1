import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

const SimpleBox = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta;
      meshRef.current.rotation.y += delta;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="red" />
    </mesh>
  );
};

const TechOrb = () => {
  return (
    <div className="w-full h-[400px] md:h-[600px] bg-white/5 border border-white/10 rounded-xl relative overflow-hidden">
      {/* Fallback Text if Canvas fails silently */}
      <div className="absolute top-2 left-2 text-xs text-gray-500 z-0">3D Viewport</div>
      
      <Canvas style={{ background: 'transparent', width: '100%', height: '100%' }}>
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} />
        <SimpleBox />
      </Canvas>
    </div>
  );
};

export default TechOrb;