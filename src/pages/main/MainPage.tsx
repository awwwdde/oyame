import React from 'react';
import { AnimatedSphere } from '../../ui/sphere';
import { GlassOverlay } from '../../ui/glass';

const MainPage: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <AnimatedSphere delay={0.5} />
        <GlassOverlay />
      </div>
      <div className="relative z-30 min-h-screen">
        <div className="p-16">
          {/* Здесь будет контент главной страницы */}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
