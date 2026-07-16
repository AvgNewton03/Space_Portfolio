"use client";

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function Sun() {
  const sunRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (sunRef.current) {
      sunRef.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <group>
      {/* Central Star */}
      <mesh ref={sunRef}>
        <sphereGeometry args={[4, 64, 64]} />
        {/* We use meshBasicMaterial so it emits its own light, enhanced by postprocessing Bloom */}
        <meshBasicMaterial color="#ffeedd" />
      </mesh>

      {/* PointLight to illuminate the planets */}
      <pointLight position={[0, 0, 0]} intensity={200} color="#ffeedd" distance={150} decay={1.5} />
    </group>
  );
}
