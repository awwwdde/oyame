import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LinkBarProps {
  githubUrl?: string;
  telegramUrl?: string;
  tenchatUrl?: string;
}

const MatrixText: React.FC<{ text: string }> = ({ text }) => {
  const [displayText, setDisplayText] = useState(text);
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let intervalId: number;

  const startAnimation = () => {
    let iterations = 0;
    const maxIterations = 3;

    intervalId = setInterval(() => {
      if (iterations >= maxIterations) {
        clearInterval(intervalId);
        setDisplayText(text);
        return;
      }

      setDisplayText(
        text
          .split('')
          .map(() => characters[Math.floor(Math.random() * characters.length)])
          .join('')
      );
      iterations++;
    }, 50);
  };

  const stopAnimation = () => {
    if (intervalId) {
      clearInterval(intervalId);
    }
    setDisplayText(text);
  };

  return (
    <motion.span
      className="inline-block"
      onHoverStart={startAnimation}
      onHoverEnd={stopAnimation}
    >
      {displayText}
    </motion.span>
  );
};

export const LinkBar: React.FC<LinkBarProps> = ({
  githubUrl = 'https://github.com/awwwdde',
  telegramUrl = 'https://t.me/awwddedev',
  tenchatUrl = 'https://tenchat.ru/awwwdde'
}) => {
  return (
    <div className="text-black py-4 flex flex-col">
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-lg font-mono transition-colors hover:text-gray-600"
      >
        <MatrixText text="GITHUB" />
      </a>
      <a
        href={telegramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-lg font-mono transition-colors hover:text-gray-600"
      >
        <MatrixText text="TELEGRAM" />
      </a>
      <a
        href={tenchatUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-lg font-mono transition-colors hover:text-gray-600"
      >
        <MatrixText text="TENCHAT" />
      </a>
    </div>
  );
};
