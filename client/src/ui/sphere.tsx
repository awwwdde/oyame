import React from 'react';
import { motion } from 'framer-motion';

interface SphereProps {
  delay?: number;
}

export const AnimatedSphere: React.FC<SphereProps> = ({ delay = 0 }) => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ 
        opacity: 1,
        x: [-100, -80, -120, -100],
        y: [0, -20, 20, 0],
        rotate: [0, 5, -5, 0],
        transition: {
          opacity: {
            duration: 2,
            delay,
            ease: [0.4, 0, 0.2, 1]
          },
          x: {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          },
          y: {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          },
          rotate: {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }
      }}
      className="absolute bottom-[-200px] w-[600px] h-[600px] rounded-full backdrop-blur-3xl"
      style={{
        filter: 'blur(40px)',
        left: '50%',
        transform: 'translateX(-50%)',
        background: `
          radial-gradient(circle at 30% 30%, 
            rgba(255, 255, 255, 0.2) 0%,
            rgba(255, 255, 255, 0) 50%),
          radial-gradient(circle at 70% 70%, 
            rgba(255, 255, 255, 0.2) 0%,
            rgba(255, 255, 255, 0) 50%),
          linear-gradient(135deg,
            rgba(147, 51, 234, 0.3) 0%,
            rgba(236, 72, 153, 0.3) 25%,
            rgba(59, 130, 246, 0.3) 50%,
            rgba(236, 72, 153, 0.3) 75%,
            rgba(147, 51, 234, 0.3) 100%
          )
        `,
        boxShadow: `
          0 0 60px rgba(147, 51, 234, 0.2),
          0 0 120px rgba(236, 72, 153, 0.2),
          inset 0 0 60px rgba(255, 255, 255, 0.1)
        `,
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
    >
      <motion.div
        animate={{
          background: [
            'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 50%)',
            'radial-gradient(circle at 70% 70%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 50%)',
            'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 50%)'
          ]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 rounded-full"
        style={{
          mixBlendMode: 'overlay'
        }}
      />
    </motion.div>
  );
}; 