import { Scene } from '@/components/3d/Scene';
import { Overlay } from '@/components/ui/Overlay';

export default function Home() {
  return (
    <main className="relative w-screen h-screen overflow-hidden bg-black text-white selection:bg-white/30">
      <Scene />
      <Overlay />
    </main>
  );
}
