import React from 'react';
import { HeaderBar } from './headerbar';
import { LinkBar } from './linkbar';
import { Footbar } from './footbar';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col relative bg-gray-800">
      <div className="absolute inset-0 z-0">
        {children}
      </div>
      <div className="relative z-50">
        <div className="container mx-auto px-4">
          <HeaderBar />
        </div>
      </div>

      <div className="flex-1 relative z-40">
        <div className="container mx-auto px-4">
        </div>
      </div>

      <div className="relative z-50 mt-auto">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end py-4">
            <div className="">
              <LinkBar />
            </div>
            <div className="text-right">
              <Footbar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout; 