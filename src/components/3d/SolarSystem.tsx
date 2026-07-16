"use client";

import { projects } from '@/data/projects';
import { Planet } from './Planet';
import * as THREE from 'three';

export function SolarSystem() {
  return (
    <group>
      {projects.map((project) => (
        <group key={project.id}>
          {/* Orbit Ring */}
          <mesh rotation={[-Math.PI / 2, 0, 0]}>
            <ringGeometry args={[project.orbitRadius - 0.05, project.orbitRadius + 0.05, 64]} />
            <meshBasicMaterial color="#ffffff" transparent opacity={0.05} side={THREE.DoubleSide} />
          </mesh>
          
          <Planet project={project} />
        </group>
      ))}
    </group>
  );
}
