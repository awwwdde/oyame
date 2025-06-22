import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';


interface HeaderBarProps {
  className?: string;
}

export const HeaderBar: React.FC<HeaderBarProps> = () => {
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

  return (
    <header className="text-white py-10">
      <div className="flex justify-center items-center">
        <div className="flex space-x-8">
          <Link to="/" className="text-lg font-mono transition-colors  bg-[#FFFFFF] text-[#103840] px-4 py-2 rounded-[15px] w-[100px] h-[30px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.span
                initial="enter"
                animate="animate"
                exit="exit"
                variants={textVariants}
                className="cursor-pointer inline-block"
              >
                home
              </motion.span>
            </AnimatePresence>
          </Link>
          <Link to="/about" className="text-lg font-mono transition-colors bg-[#FFFFFF] text-[#103840] px-4 py-2 rounded-[15px] w-[100px] h-[30px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.span
                initial="enter"
                animate="animate"
                exit="exit"
                variants={textVariants}
                className="cursor-pointer inline-block"
              >
                about
              </motion.span>
            </AnimatePresence>
          </Link>
          <Link to="/collection" className="text-lg font-mono transition-colors bg-[#FFFFFF] text-[#103840] px-4 py-2 rounded-[15px] w-[100px] h-[30px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.span
                initial="enter"
                animate="animate"
                exit="exit"
                variants={textVariants}
                className="cursor-pointer inline-block"
              >
                collection
              </motion.span>
            </AnimatePresence>
          </Link>
          <Link to="/contact" className="text-lg font-mono transition-colors bg-[#FFFFFF] text-[#103840] px-4 py-2 rounded-[15px] w-[100px] h-[30px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.span
                initial="enter"
                animate="animate"
                exit="exit"
                variants={textVariants}
                className="cursor-pointer inline-block"
              >
                contact
              </motion.span>
            </AnimatePresence>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default HeaderBar;
