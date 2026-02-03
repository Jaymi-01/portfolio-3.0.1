import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere, Float, PerspectiveCamera, Stars } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedShape = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const { x, y } = state.pointer;
    if (meshRef.current) {
      // Gentle rotation
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.005;
    }
    if (groupRef.current) {
      // Follow cursor with lag for "floaty" feel
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, x * Math.PI * 0.2, 0.1);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -y * Math.PI * 0.2, 0.1);
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        {/* Core Glowing Sphere - Simplified for Debugging */}
        <Sphere args={[1, 32, 32]} ref={meshRef}>
          <meshStandardMaterial
            color="#d99a6c"
            emissive="#d99a6c"
            emissiveIntensity={0.8}
            roughness={0.2}
            metalness={0.8}
          />
        </Sphere>
        
        {/* Outer Wireframe Shell */}
        <Sphere args={[1.4, 16, 16]}>
          <meshStandardMaterial 
            color="#d99a6c" 
            wireframe 
            transparent 
            opacity={0.3} 
          />
        </Sphere>

        {/* Small Floating "Satellites" */}
        {[...Array(3)].map((_, i) => (
          <mesh key={i} position={[Math.sin(i * 2) * 2, Math.cos(i * 2) * 2, 0]}>
            <sphereGeometry args={[0.1, 8, 8]} />
            <meshStandardMaterial color="#d99a6c" emissive="#d99a6c" emissiveIntensity={1} />
          </mesh>
        ))}
      </Float>
    </group>
  );
};

const TechOrb = () => {
  return (
    <div className="w-full h-[400px] md:h-[600px] cursor-grab active:cursor-grabbing relative z-10">
      <Canvas className="bg-transparent">
        <PerspectiveCamera makeDefault position={[0, 0, 6]} />
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#d99a6c" />
        <spotLight position={[-10, 10, 10]} angle={0.3} penumbra={1} intensity={2} color="#ffffff" />
        
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        
        <AnimatedShape />
      </Canvas>
    </div>
  );
};

export default TechOrb;