import React from 'react';
import { motion } from 'framer-motion';

export const AuthButtons: React.FC = () => {
  return (
    <div className="flex items-center space-x-6">
      <span 
        className="text-lg font-mono cursor-pointer transition-colors hover:text-gray-600"
      >
        LOG IN
      </span>
      
      <button
        className="relative w-[200px] py-2 rounded-full overflow-hidden group"
        style={{
          background: `
            linear-gradient(135deg,
              rgba(236, 72, 153, 0.3) 0%,
              rgba(59, 130, 246, 0.3) 100%
            )
          `
        }}
      >
        <span className="relative text-white font-mono text-lg">SIGN IN</span>
      </button>
    </div>
  );
};

export default AuthButtons; 