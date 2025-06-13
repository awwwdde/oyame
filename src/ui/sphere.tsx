import React from 'react';
import { motion } from 'framer-motion';

interface SphereProps {
  delay?: number;
}

export const AnimatedSphere: React.FC<SphereProps> = ({ delay = 0 }) => {
  return (
    <motion.div
      initial={{ y: 300, opacity: 0 }}
      animate={{ 
        opacity: 1,
        x: [-150, -100, -120, -80, -150],
        y: [100, 50, 70, 30, 100],
        rotate: [0, 10, -5, 15, 0],
        scale: [1, 1.1, 0.95, 1.05, 1],
        transition: {
          opacity: {
            duration: 2,
            delay,
            ease: [0.4, 0, 0.2, 1]
          },
          x: {
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.25, 0.5, 0.75, 1]
          },
          y: {
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.25, 0.5, 0.75, 1]
          },
          rotate: {
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.25, 0.5, 0.75, 1]
          },
          scale: {
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.25, 0.5, 0.75, 1]
          }
        }
      }}
      className="absolute bottom-[-300px] w-[800px] h-[800px] rounded-full backdrop-blur-3xl"
      style={{
        filter: 'blur(60px)',
        left: '50%',
        transform: 'translateX(-50%)',
        background: `
          radial-gradient(circle at 30% 30%, 
            rgba(255, 255, 255, 0.3) 0%,
            rgba(255, 255, 255, 0) 50%),
          radial-gradient(circle at 70% 70%, 
            rgba(255, 255, 255, 0.3) 0%,
            rgba(255, 255, 255, 0) 50%),
          linear-gradient(135deg,
            rgba(147, 51, 234, 0.4) 0%,
            rgba(236, 72, 153, 0.4) 25%,
            rgba(59, 130, 246, 0.4) 50%,
            rgba(236, 72, 153, 0.4) 75%,
            rgba(147, 51, 234, 0.4) 100%
          )
        `,
        boxShadow: `
          0 0 100px rgba(147, 51, 234, 0.3),
          0 0 200px rgba(236, 72, 153, 0.3),
          inset 0 0 100px rgba(255, 255, 255, 0.2)
        `,
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
    >
      <motion.div
        animate={{
          background: [
            'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 50%)',
            'radial-gradient(circle at 70% 70%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 50%)',
            'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 50%)'
          ],
          rotate: [0, 180, 360]
        }}
        transition={{
          background: {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          },
          rotate: {
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }
        }}
        className="absolute inset-0 rounded-full"
        style={{
          mixBlendMode: 'overlay'
        }}
      />
    </motion.div>
  );
}; 