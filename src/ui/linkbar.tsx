import React from 'react';

interface LinkBarProps {
  githubUrl?: string;
  telegramUrl?: string;
  tenchatUrl?: string;
}

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
        className="text-lg font-mono transition-colors"
      >
        GITHUB
      </a>
      <a
        href={telegramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-lg font-mono transition-colors"
      >
        TELEGRAM
      </a>
      <a
        href={tenchatUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-lg font-mono transition-colors"
      >
        TENCHAT
      </a>
    </div>
  );
};
