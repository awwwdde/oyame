import React from 'react';
import { motion } from 'framer-motion';

export const GlassOverlay: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
      className="fixed inset-0 bg-white/10 backdrop-blur-lg z-20"
      style={{
        background: 'linear-gradient(180deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)',
      }}
    />
  );
}; 