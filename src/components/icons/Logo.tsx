
import React from 'react';

interface LogoProps {
  className?: string;
  // textColor prop is no longer needed as the logo is an image
}

const Logo: React.FC<LogoProps> = ({ className = "h-10 w-auto" }) => {
  return (
    <div className="flex items-center">
      <img 
        src="/lovable-uploads/a8f3cf5c-bf73-4275-b390-ff253ca8e751.png" 
        alt="HappyPaws Logo" 
        className={className} 
      />
    </div>
  );
};

export default Logo;
