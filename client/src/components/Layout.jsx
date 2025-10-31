import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from './navbar';
const Layout = () => {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Navbar />
      <main className="flex-grow overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
