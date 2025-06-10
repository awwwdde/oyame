import React from 'react';
import Footbar from '../../ui/footbar';
import { LinkBar } from '../../ui/linkbar';

const MainPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-end justify-between p-16 font-mono">
      <LinkBar />
      <Footbar />
    </div>
  );
};

export default MainPage;
