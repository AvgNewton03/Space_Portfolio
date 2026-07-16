"use client";

import { Stars, Sparkles } from '@react-three/drei';

export function Background() {
  return (
    <group>
      {/* Distant stars */}
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
    </group>
  );
}
