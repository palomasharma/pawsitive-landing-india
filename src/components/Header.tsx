
import React from 'react';
import Logo from './icons/Logo';
// import { Button } from './ui/button'; // Example if we add a CTA later

const Header = () => {
  return (
    <header className="py-4 px-4 md:px-6 sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <Logo className="h-10 w-auto" />
        {/* <nav className="flex items-center space-x-4">
          Could add navigation links here in the future
          <Button variant="outline" size="sm">Sign In</Button>
        </nav> */}
      </div>
    </header>
  );
};

export default Header;
