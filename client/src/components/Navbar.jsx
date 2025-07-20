import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md">
      <div className="flex items-center gap-2">
        <span className="text-2xl">🚑</span>
        <h1 className="text-xl font-bold text-red-600">QuickAid</h1>
      </div>
    </nav>
  );
};

export default Navbar;
