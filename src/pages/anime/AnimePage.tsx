import React from 'react';
import { motion } from 'framer-motion';

const AnimePage: React.FC = () => {
  const title = "ANIME";

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center">
      <div className="relative flex space-x-4">
        {title.split("").map((char, index) => (
          <motion.span
            key={index}
            className="text-7xl font-bold text-gray-800"
            initial={{ 
              opacity: 0,
              y: 20,
              scale: 0.5
            }}
            animate={{ 
              opacity: 1,
              y: 0,
              scale: 1
            }}
            transition={{ 
              delay: index * 0.1,
              duration: 0.5,
              type: "spring",
              stiffness: 100
            }}
          >
            {char}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default AnimePage;
