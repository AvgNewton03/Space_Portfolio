"use client";

import { useAppStore } from '@/store/useAppStore';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, User, Mail, FileText } from 'lucide-react';

export function ContactPanel() {
  const { currentView } = useAppStore();

  const isVisible = currentView === 'contact';

  const links = [
    { name: 'GitHub', icon: Code, href: 'https://github.com/AvgNewton03', color: 'hover:text-white' },
    { name: 'LinkedIn', icon: User, href: 'http://www.linkedin.com/in/deepam-sipani-b124a9386', color: 'hover:text-blue-400' },
    { name: 'Email', icon: Mail, href: 'https://mail.google.com/mail/?view=cm&fs=1&to=deepamsipani3@gmail.com', color: 'hover:text-red-400' },
    { name: 'Resume', icon: FileText, href: '/resume.pdf', color: 'hover:text-green-400' },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.5 } }}
          transition={{ duration: 0.8, delay: 0.5 }} // Wait for camera
          className="fixed inset-0 z-40 flex items-center justify-center pointer-events-none p-4 md:p-6"
        >
          <div className="bg-black/60 backdrop-blur-2xl border border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-12 pointer-events-auto shadow-[0_0_50px_rgba(255,255,255,0.05)] max-w-lg w-full text-center mt-12 md:mt-0">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">Initiate Contact</h2>
            <p className="text-white/50 mb-6 md:mb-10 font-light text-sm md:text-base">Transmission frequencies are open.</p>

            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {links.map((link) => {
                const isMail = link.href.startsWith('mailto:');
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target={isMail ? undefined : "_blank"}
                    rel={isMail ? undefined : "noopener noreferrer"}
                    className={`flex flex-col items-center justify-center gap-2 md:gap-3 p-4 md:p-6 bg-white/5 border border-white/5 rounded-xl md:rounded-2xl transition-all duration-300 hover:bg-white/10 hover:border-white/20 text-white/60 ${link.color} group`}
                  >
                    <link.icon className="w-6 h-6 md:w-8 md:h-8 transition-transform group-hover:scale-110" />
                    <span className="font-medium text-sm md:text-base">{link.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
