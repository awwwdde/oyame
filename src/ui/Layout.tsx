import React from 'react';
import { HeaderBar } from './headerbar';
import { LinkBar } from './linkbar';
import { Footbar } from './footbar';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <div className="relative z-50">
        <div className="container mx-auto px-4">
          <HeaderBar />
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center relative z-40">
        <div className="container mx-auto px-4">
          {children}
        </div>
      </div>
      <div className="relative z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end py-4">
            <div>
              <LinkBar />
            </div>
            <div>
              <Footbar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout; 