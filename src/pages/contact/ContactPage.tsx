import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ContactPage: React.FC = () => {
  const title = "CONTACT";
  const asciiChars = "!@#$%^&*()_+-=[]{}|;:,.<>?/~`";
  const [displayText, setDisplayText] = useState(title);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    let animationFrame: number;
    let frameCount = 0;
    const maxFrames = 30;

    const animateText = () => {
      if (frameCount >= maxFrames) {
        setDisplayText(title);
        setIsAnimating(false);
        return;
      }

      const newText = title
        .split('')
        .map((char, index) => {
          const correctCharProbability = frameCount / maxFrames;
          return Math.random() < correctCharProbability 
            ? char 
            : asciiChars[Math.floor(Math.random() * asciiChars.length)];
        })
        .join('');

      setDisplayText(newText);
      frameCount++;
      animationFrame = requestAnimationFrame(animateText);
    };

    animationFrame = requestAnimationFrame(animateText);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center">
      <div className="relative font-mono">
        <motion.div
          className="text-7xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {displayText.split('').map((char, index) => (
            <motion.span
              key={index}
              className="inline-block"
              animate={{
                color: char === title[index] ? "#1f2937" : "#6b7280",
                scale: char === title[index] ? 1.1 : 1,
              }}
              transition={{
                duration: 0.2,
                type: "spring",
                stiffness: 200
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
