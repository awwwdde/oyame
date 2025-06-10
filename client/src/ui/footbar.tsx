import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FootbarProps {
  className?: string;
}

export const Footbar: React.FC<FootbarProps> = () => {
  const [sunshine, setSunshine] = useState('ANIME');
  const [language, setLanguage] = useState('RUS');
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
      setTime(`${hours}:${minutes}:${seconds}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  const textVariants = {
    initial: { 
      opacity: 1,
      scale: 1,
      filter: "blur(0px)"
    },
    exit: { 
      opacity: 0,
      scale: 1.2,
      filter: "blur(10px)",
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    enter: {
      opacity: 0,
      scale: 0.8,
      filter: "blur(10px)"
    },
    animate: { 
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const timeVariants = {
    animate: { 
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <footer className='text-black py-4'>
      <div className="space-y-4">
        <p className="text-lg font-mono">
          OYAME [
          <AnimatePresence mode="wait">
            <motion.span
              key={sunshine}
              initial="enter"
              animate="animate"
              exit="exit"
              variants={textVariants}
              onClick={() => setSunshine(sunshine === 'ANIME' ? 'MANGA' : 'ANIME')}
              className="cursor-pointer inline-block"
            >
              {sunshine}
            </motion.span>
          </AnimatePresence>
          ] <br/>
          AWWWDDE [
          <AnimatePresence mode="wait">
            <motion.span
              key={language}
              initial="enter"
              animate="animate"
              exit="exit"
              variants={textVariants}
              onClick={() => setLanguage(language === 'RUS' ? 'JPN' : 'RUS')}
              className="cursor-pointer inline-block"
            >
              {language}
            </motion.span>
          </AnimatePresence>
          ] <br/>
          ANIME COLLECTION [
          <motion.span
            animate="animate"
            variants={timeVariants}
          >
            {time}
          </motion.span>
          ]
        </p>
      </div>
    </footer>
  );
};

export default Footbar;
