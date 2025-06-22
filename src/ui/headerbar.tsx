import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

interface HeaderBarProps {
  className?: string;
}

export const HeaderBar: React.FC<HeaderBarProps> = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    open: {
      y: '0%',
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1],
        staggerChildren: 0.1,
      },
    },
    closed: {
      y: '-100%',
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  const linkVariants = {
    open: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    closed: { opacity: 0, y: 20 },
  };

  const navLinks = [
    { to: '/', text: 'home' },
    { to: '/about', text: 'about' },
    { to: '/collection', text: 'collection' },
    { to: '/contact', text: 'contact' },
  ];

  return (
    <>
      <header className="text-white py-10">
        <div className="container mx-auto px-4 bg-[#FFFFFF] rounded-[15px]">
          <div className="hidden  md:flex justify-center items-center">
            <div className="flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-lg font-mono transition-colors text-[#103840] px-4 py-2 flex items-center justify-center"
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
          <div className="md:hidden flex justify-end z-50">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="flex flex-col space-y-2"
              animate={isOpen ? 'open' : 'closed'}
            >
              <motion.span
                className="block w-8 h-0.5 bg-white"
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 10 },
                }}
              ></motion.span>
              <motion.span
                className="block w-8 h-0.5 bg-white"
                variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }}
                transition={{ duration: 0.1 }}
              ></motion.span>
              <motion.span
                className="block w-8 h-0.5 bg-white"
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -10 },
                }}
              ></motion.span>
            </motion.button>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed top-0 left-0 w-full h-full bg-[#1c1c1c] text-white flex flex-col items-center justify-center space-y-10 z-40"
          >
            {navLinks.map((link) => (
              <motion.div variants={linkVariants} key={link.to}>
                <Link
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className="text-5xl font-mono capitalize"
                >
                  {link.text}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HeaderBar;
