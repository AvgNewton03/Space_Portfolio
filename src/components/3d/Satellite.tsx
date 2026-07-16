"use client";

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function Satellite() {
  const satelliteRef = useRef<THREE.Group>(null);
  
  useFrame((state, delta) => {
    if (satelliteRef.current) {
      // Rotate slowly and bob up and down
      satelliteRef.current.rotation.y += delta * 0.1;
      satelliteRef.current.rotation.z += delta * 0.05;
      satelliteRef.current.position.y = -10 + Math.sin(state.clock.elapsedTime * 0.8) * 0.3;
    }
  });

  return (
    <group ref={satelliteRef} position={[60, -10, 40]}>
      {/* Main Body */}
      <mesh>
        <boxGeometry args={[1.5, 1.5, 3]} />
        <meshStandardMaterial color="#999999" metalness={0.7} roughness={0.3} />
      </mesh>
      
      {/* Solar Panel 1 */}
      <mesh position={[-3, 0, 0]}>
        <boxGeometry args={[4, 0.1, 1.5]} />
        <meshStandardMaterial color="#1e3a8a" metalness={0.9} roughness={0.1} />
      </mesh>
      
      {/* Solar Panel 2 */}
      <mesh position={[3, 0, 0]}>
        <boxGeometry args={[4, 0.1, 1.5]} />
        <meshStandardMaterial color="#1e3a8a" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Antenna */}
      <mesh position={[0, 1.5, 1]} rotation={[Math.PI / 4, 0, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 2]} />
        <meshStandardMaterial color="#cccccc" metalness={0.8} />
      </mesh>
      <mesh position={[0, 2.5, 1.7]} rotation={[Math.PI / 4, 0, 0]}>
        <sphereGeometry args={[0.2]} />
        <meshBasicMaterial color="#ef4444" />
      </mesh>

      <pointLight color="#ef4444" intensity={10} distance={20} decay={2} />
    </group>
  );
}
