
import React from 'react';
import { PawPrint } from 'lucide-react';

const Logo = ({ className = "h-10 w-auto", textColor = "text-primary" }) => {
  return (
    <div className="flex items-center space-x-2">
      <PawPrint className={`${className} ${textColor}`} />
      <span className={`text-2xl font-bold ${textColor}`}>HappyPaws</span>
    </div>
  );
};

export default Logo;
