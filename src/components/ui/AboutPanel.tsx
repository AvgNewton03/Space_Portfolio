"use client";

import { useAppStore } from '@/store/useAppStore';
import { motion, AnimatePresence } from 'framer-motion';

export function AboutPanel() {
  const { currentView } = useAppStore();

  const isVisible = currentView === 'about';

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50, transition: { duration: 0.5 } }}
          transition={{ duration: 0.8, delay: 0.5 }} // Delay to wait for camera to arrive
          className="fixed inset-0 z-40 flex justify-center pointer-events-none p-4 md:p-6 pt-24 md:pt-32 overflow-y-auto custom-scrollbar"
        >
          <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 pointer-events-auto pb-8 md:pb-12 h-fit">
            {/* About Me Card */}
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-5 md:p-8 hover:bg-white/10 transition-colors">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">Deepam Sipani</h2>
              <p className="text-white/70 leading-relaxed font-light">
                I am a passionate software engineering student specializing in Data Science at Dwarkadas J. Sanghvi College of Engineering. 
                I enjoy building full-stack applications, integrating AI/ML models, and designing immersive digital experiences.
              </p>
            </div>

            {/* Skills Card */}
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-5 md:p-8 hover:bg-white/10 transition-colors">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">Skills</h2>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {['JavaScript', 'TypeScript', 'Python', 'React', 'Next.js', 'Node.js', 'MongoDB', 'TensorFlow', 'OpenCV'].map(skill => (
                  <span key={skill} className="px-3 md:px-4 py-1 md:py-2 bg-white/5 border border-white/10 rounded-full text-white/80 text-xs md:text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Education & Experience Card */}
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-5 md:p-8 hover:bg-white/10 transition-colors md:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">Education & Experience</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg md:text-xl font-medium text-white">B-Tech in Computer Science & Data Science <span className="text-white/50 text-sm md:text-base">@ D.J. Sanghvi College of Engineering</span></h3>
                  <p className="text-xs md:text-sm text-white/50 mb-2">2025 - 2029 | GPA: 9.43</p>
                  <p className="text-white/70 font-light text-sm md:text-base">Focusing on advanced computing, data science, and modern software architecture.</p>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-medium text-white">Full-Stack Developer <span className="text-white/50 text-sm md:text-base">@ Jewel Palace (Project)</span></h3>
                  <p className="text-xs md:text-sm text-white/50 mb-2">Feb 2026 - Ongoing</p>
                  <p className="text-white/70 font-light text-sm md:text-base">Engineered an e-commerce platform using the MERN stack with Razorpay API and Firebase authentication.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
