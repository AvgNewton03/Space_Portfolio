"use client";

import { useAppStore } from '@/store/useAppStore';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export function LandingOverlay() {
  const { currentView, setCurrentView, isCanvasLoaded } = useAppStore();

  const isVisible = isCanvasLoaded && currentView === 'home';

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1 } }}
          transition={{ duration: 1.5, delay: 1 }}
          className="fixed inset-0 z-40 flex flex-col items-center justify-center pointer-events-none"
        >
          <div className="text-center">
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="text-4xl md:text-7xl font-bold tracking-tight text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] px-4"
            >
              Welcome to My Universe
            </motion.h1>
            
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.8, duration: 1 }}
              className="mt-6 text-lg md:text-2xl text-white font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] px-4"
            >
              Every planet tells the story of one project.
            </motion.p>

            <motion.button
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 2.2, duration: 1 }}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentView('projects')}
              className="mt-12 group pointer-events-auto flex items-center gap-2 mx-auto px-8 py-4 bg-white/5 backdrop-blur-md border border-white/20 rounded-full text-white transition-colors"
            >
              <span className="uppercase tracking-[0.2em] text-sm">Begin Journey</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
