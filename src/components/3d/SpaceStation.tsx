"use client";

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useAppStore } from '@/store/useAppStore';

export function SpaceStation() {
  const stationRef = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const { currentView } = useAppStore();

  useFrame((state, delta) => {
    if (ringRef.current) {
      ringRef.current.rotation.y += delta * 0.2;
    }
    if (stationRef.current) {
      // Gentle floating animation
      stationRef.current.position.y = 20 + Math.sin(state.clock.elapsedTime * 0.5) * 0.5;
    }
  });

  return (
    <group ref={stationRef} position={[-50, 20, -50]}>
      {/* Central Hub */}
      <mesh>
        <cylinderGeometry args={[2, 2, 8, 32]} />
        <meshStandardMaterial color="#888888" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Rotating Ring */}
      <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[8, 1, 16, 64]} />
        <meshStandardMaterial color="#666666" metalness={0.9} roughness={0.1} />
        {/* Lights on the ring */}
        <meshBasicMaterial color="#4ade80" />
      </mesh>

      <pointLight color="#4ade80" intensity={20} distance={50} decay={2} />
    </group>
  );
}
