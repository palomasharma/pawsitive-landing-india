
import React from 'react';
// import Logo from './icons/Logo'; // No longer needed for this header type
// import { Button } from './ui/button'; // Example if we add a CTA later

const Header = () => {
  return (
    <header className="w-full">
      <img 
        src="/lovable-uploads/a8279ebf-b2f1-4f3f-99da-590469f90996.png" 
        alt="A cute kitten and puppy lying together in the grass" 
        className="w-full h-auto object-cover" 
        style={{ maxHeight: '300px' }} // Limiting height to prevent it from being too large
      />
    </header>
  );
};
export default Header;
