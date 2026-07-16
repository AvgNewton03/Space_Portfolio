"use client";

import { Canvas } from '@react-three/fiber';
import { Suspense, useEffect } from 'react';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { OrbitControls } from '@react-three/drei';
import { Background } from './Background';
import { Sun } from './Sun';
import { SolarSystem } from './SolarSystem';
import { SpaceStation } from './SpaceStation';
import { Satellite } from './Satellite';
import { CameraRig } from './CameraRig';
import { useAppStore } from '@/store/useAppStore';

export function Scene() {
  const { setCanvasLoaded } = useAppStore();

  useEffect(() => {
    const timer = setTimeout(() => {
      setCanvasLoaded(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, [setCanvasLoaded]);

  return (
    <div className="fixed inset-0 w-full h-full bg-black z-0">
      <Canvas
        camera={{ position: [0, 10, 50], fov: 45 }}
        gl={{ antialias: false, powerPreference: "high-performance" }}
      >
        <color attach="background" args={['#000000']} />
        
        <Suspense fallback={null}>
          <OrbitControls 
            makeDefault 
            enablePan={false} 
            maxDistance={120} 
            minDistance={5} 
            enableDamping 
            dampingFactor={0.05}
          />
          <CameraRig />
          <Background />
          <Sun />
          <SolarSystem />
          <SpaceStation />
          <Satellite />
          
          <EffectComposer>
            <Bloom 
              luminanceThreshold={0.5} 
              mipmapBlur 
              intensity={2} 
            />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  );
}
