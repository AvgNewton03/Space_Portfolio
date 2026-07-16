"use client";

import { useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import gsap from 'gsap';
import * as THREE from 'three';
import { useAppStore } from '@/store/useAppStore';

export function CameraRig() {
  const { camera, controls } = useThree();
  const { currentView, selectedProject } = useAppStore();
  
  useEffect(() => {
    let targetPos = new THREE.Vector3();
    let lookAtPos = new THREE.Vector3(0, 0, 0);

    if (currentView === 'home') {
      targetPos.set(0, 10, 50); 
      lookAtPos.set(0, 0, 0);
    } else if (currentView === 'projects') {
      if (selectedProject) {
        const r = selectedProject.orbitRadius;
        targetPos.set(0, 15, r + 15);
        lookAtPos.set(0, 0, r);
      } else {
        targetPos.set(0, 40, 60);
        lookAtPos.set(0, 0, 0);
      }
    } else if (currentView === 'about') {
      targetPos.set(-50, 20, -30); 
      lookAtPos.set(-50, 20, -50);
    } else if (currentView === 'contact') {
      targetPos.set(60, -10, 20); 
      lookAtPos.set(60, -10, 40);
    }

    gsap.to(camera.position, {
      x: targetPos.x,
      y: targetPos.y,
      z: targetPos.z,
      duration: 2,
      ease: "power3.inOut",
    });

    if (controls) {
      // @ts-ignore - controls is OrbitControls
      gsap.to(controls.target, {
        x: lookAtPos.x,
        y: lookAtPos.y,
        z: lookAtPos.z,
        duration: 2,
        ease: "power3.inOut",
      });
    } else {
      // Fallback if controls aren't loaded yet
      const dummyTarget = new THREE.Vector3().copy(lookAtPos);
      gsap.to(dummyTarget, {
        x: lookAtPos.x,
        y: lookAtPos.y,
        z: lookAtPos.z,
        duration: 2,
        ease: "power3.inOut",
        onUpdate: () => {
          camera.lookAt(dummyTarget);
        }
      });
    }

  }, [currentView, selectedProject, camera, controls]);

  return null;
}
