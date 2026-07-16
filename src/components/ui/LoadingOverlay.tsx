"use client";

import { useAppStore } from '@/store/useAppStore';
import { motion, AnimatePresence } from 'framer-motion';

export function LoadingOverlay() {
  const { isCanvasLoaded } = useAppStore();

  return (
    <AnimatePresence>
      {!isCanvasLoaded && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black text-white"
        >
          <div className="relative flex flex-col items-center">
            {/* Simple glowing loading ring */}
            <div className="w-24 h-24 rounded-full border-4 border-white/10 border-t-blue-500 animate-spin" />
            
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="mt-8 text-sm uppercase tracking-[0.3em] text-white/70"
            >
              Initializing Universe
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
