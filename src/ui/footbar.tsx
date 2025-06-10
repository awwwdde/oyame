import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FootbarProps {
  className?: string;
}

export const Footbar: React.FC<FootbarProps> = () => {
  const [sunshine, setSunshine] = useState('SUNSHINE');
  const [language, setLanguage] = useState('RUSSIAN');
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
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  const timeVariants = {
    animate: { opacity: 1 }
  };

  return (
    <footer className='text-black py-4'>
      <div className="space-y-4">
        <p className="text-lg font-mono">
          OYAME [
          <motion.span
            key={sunshine}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={textVariants}
            transition={{ duration: 0.3 }}
            onClick={() => setSunshine(sunshine === 'SUNSHINE' ? 'AFTERNOON' : 'SUNSHINE')}
            className="cursor-pointer inline-block"
          >
            {sunshine}
          </motion.span>
          ] <br/>
          AWWWDDE [
          <motion.span
            key={language}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={textVariants}
            transition={{ duration: 0.3 }}
            onClick={() => setLanguage(language === 'RUSSIAN' ? 'ENGLISH' : 'RUSSIAN')}
            className="cursor-pointer inline-block"
          >
            {language}
          </motion.span>
          ] <br/>
          ANIME COLLECTION [
          <motion.span
            animate="animate"
            variants={timeVariants}
            transition={{ duration: 0.1 }}
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
