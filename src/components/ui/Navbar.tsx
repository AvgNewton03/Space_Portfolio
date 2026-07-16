"use client";

import { useAppStore, ViewState } from '@/store/useAppStore';
import { motion } from 'framer-motion';

const NAV_ITEMS: { label: string; view: ViewState }[] = [
  { label: 'Home', view: 'home' },
  { label: 'Projects', view: 'projects' },
  { label: 'About', view: 'about' },
  { label: 'Contact', view: 'contact' },
];

export function Navbar() {
  const { currentView, setCurrentView, isCanvasLoaded } = useAppStore();

  if (!isCanvasLoaded) return null;

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center py-6 pointer-events-none"
    >
      <div className="flex items-center space-x-1 md:space-x-8 px-4 md:px-6 py-2 md:py-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 pointer-events-auto overflow-x-auto max-w-[90vw] custom-scrollbar">
        {NAV_ITEMS.map((item) => {
          const isActive = currentView === item.view;
          return (
            <button
              key={item.view}
              onClick={() => setCurrentView(item.view)}
              className={`relative px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-medium transition-colors ${
                isActive ? 'text-white' : 'text-white/60 hover:text-white'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute inset-0 rounded-full bg-white/10"
                  initial={false}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </button>
          );
        })}
      </div>
    </motion.nav>
  );
}
