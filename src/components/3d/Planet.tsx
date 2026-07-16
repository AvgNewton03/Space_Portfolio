"use client";

import { useRef, useState, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Project } from '@/data/projects';
import { useAppStore } from '@/store/useAppStore';
import { Html } from '@react-three/drei';

interface PlanetProps {
  project: Project;
}

export function Planet({ project }: PlanetProps) {
  const planetRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  const atmosphereRef = useRef<THREE.Mesh>(null);
  
  const [hovered, setHovered] = useState(false);
  const { selectedProject, setSelectedProject, currentView } = useAppStore();

  const isSelected = selectedProject?.id === project.id;
  const isProjectsView = currentView === 'projects';

  // Calculate random initial phase for orbit so they don't all start in a line
  const randomPhase = useMemo(() => Math.random() * Math.PI * 2, []);

  useFrame((state, delta) => {
    if (planetRef.current) {
      // Orbit around the sun
      const time = state.clock.getElapsedTime();
      const angle = time * project.orbitSpeed + randomPhase;
      planetRef.current.position.x = Math.cos(angle) * project.orbitRadius;
      planetRef.current.position.z = Math.sin(angle) * project.orbitRadius;
    }

    if (meshRef.current) {
      // Rotate the planet on its axis
      meshRef.current.rotation.y += project.rotationSpeed * (delta * 60);
    }
    
    if (atmosphereRef.current) {
      // Pulse atmosphere if hovered or selected
      const targetScale = (hovered || isSelected) ? 1.2 + Math.sin(state.clock.elapsedTime * 5) * 0.05 : 1.1;
      atmosphereRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
      
      const targetOpacity = (hovered || isSelected) ? 0.4 : 0.15;
      (atmosphereRef.current.material as THREE.MeshBasicMaterial).opacity += (targetOpacity - (atmosphereRef.current.material as THREE.MeshBasicMaterial).opacity) * 0.1;
    }
  });

  return (
    <group ref={planetRef}>
      {/* Orbit Path */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        {/* We have to put the orbit in the parent group (SolarSystem) to draw the ring around the sun, not here. 
            So we won't draw the full orbit ring here. */}
      </mesh>

      <group
        onClick={(e) => {
          if (project.isClickable === false) return;
          e.stopPropagation();
          if (isProjectsView) {
            setSelectedProject(project);
          }
        }}
        onPointerOver={(e) => {
          if (project.isClickable === false) return;
          e.stopPropagation();
          if (isProjectsView) {
            setHovered(true);
            document.body.style.cursor = 'pointer';
          }
        }}
        onPointerOut={() => {
          if (project.isClickable === false) return;
          if (isProjectsView) {
            setHovered(false);
            document.body.style.cursor = 'default';
          }
        }}
      >
        {/* Main Planet Mesh */}
        <mesh ref={meshRef}>
          <sphereGeometry args={[project.planetSize, 32, 32]} />
          <meshStandardMaterial 
            color={project.planetColor} 
            roughness={0.7}
            metalness={0.2}
            emissive={project.planetColor}
            emissiveIntensity={isSelected ? 0.5 : 0.1}
          />
        </mesh>

        {/* Atmosphere Glow */}
        <mesh ref={atmosphereRef}>
          <sphereGeometry args={[project.planetSize, 32, 32]} />
          <meshBasicMaterial 
            color={project.planetColor} 
            transparent 
            opacity={0.15} 
            blending={THREE.AdditiveBlending} 
            depthWrite={false} 
          />
        </mesh>

        {/* Hover Tooltip (HTML Overlay) */}
        {hovered && !isSelected && isProjectsView && (
          <Html distanceFactor={15} center zIndexRange={[100, 0]}>
            <div className="px-3 py-1.5 bg-black/80 backdrop-blur-md border border-white/20 rounded-full text-white text-xs font-medium tracking-wider whitespace-nowrap pointer-events-none transform -translate-y-8">
              {project.name}
            </div>
          </Html>
        )}
      </group>
    </group>
  );
}
