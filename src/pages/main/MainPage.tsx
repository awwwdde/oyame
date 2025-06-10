import React from 'react';
import { motion } from 'framer-motion';
import Footbar from '../../ui/footbar';
import { LinkBar } from '../../ui/linkbar';
import { AnimatedSphere } from '../../ui/sphere';

const GlassOverlay: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
      className="fixed inset-0 bg-white/10 backdrop-blur-md"
      style={{
        background: 'linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
      }}
    />
  );
};

const MainPage: React.FC = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0">
        <AnimatedSphere />
      </div>
      <GlassOverlay />
      <div className="relative z-10 min-h-screen flex items-end justify-between p-16 font-mono">
        <LinkBar />
        <Footbar />
      </div>
    </div>
  );
};

export default MainPage;
