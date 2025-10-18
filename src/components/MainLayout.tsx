import React from 'react';
import { NavBar } from '@/components/NavBar';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavBar />
      <div className="w-full min-h-screen">
        {children}
      </div>
    </>
  );
};

export default MainLayout;
