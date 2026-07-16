"use client";

import { useAppStore } from '@/store/useAppStore';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Code, ExternalLink } from 'lucide-react';
import Image from 'next/image';

export function ProjectPanel() {
  const { selectedProject, setSelectedProject, currentView } = useAppStore();

  const isVisible = selectedProject !== null && currentView === 'projects';

  return (
    <AnimatePresence>
      {isVisible && selectedProject && (
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50, transition: { duration: 0.3 } }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 md:top-auto md:bottom-6 md:right-6 md:left-auto md:w-full md:max-w-md z-40 flex flex-col pointer-events-none p-4 md:p-0 max-h-[75vh] md:max-h-[calc(100vh-8rem)]"
        >
          <div className="bg-black/80 md:bg-black/40 backdrop-blur-xl border border-white/10 rounded-t-2xl md:rounded-2xl p-4 md:p-6 pointer-events-auto flex flex-col overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)]">
            <div className="flex justify-between items-center mb-4 md:mb-6">
              <h2 className="text-xl md:text-2xl font-bold text-white tracking-wide">
                {selectedProject.name}
              </h2>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {selectedProject.thumbnail && (
              <div className="relative w-full h-48 rounded-xl overflow-hidden mb-6 border border-white/10 shrink-0">
                <Image 
                  src={selectedProject.thumbnail}
                  alt={selectedProject.name}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
              <p className="text-white/80 leading-relaxed mb-6 font-light">
                {selectedProject.description}
              </p>

              <div className="mb-6">
                <h3 className="text-sm uppercase tracking-widest text-white/50 mb-3">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech) => (
                    <span key={tech} className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-white/70">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-white/10 flex gap-4">
              {selectedProject.githubLink && selectedProject.githubLink !== "#" && (
                <a 
                  href={selectedProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-white/5 hover:bg-white/10 border border-white/20 rounded-xl text-white transition-colors"
                >
                  <Code className="w-4 h-4" />
                  <span className="text-sm font-medium">GitHub</span>
                </a>
              )}
              {selectedProject.demoLink && selectedProject.demoLink !== "#" && (
                <a 
                  href={selectedProject.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-white text-black hover:bg-white/90 rounded-xl transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span className="text-sm font-medium">Live Demo</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
