
import React from 'react';
// import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react'; // No longer needed
import Logo from './icons/Logo';

const Footer = () => {
  const year = new Date().getFullYear();

  // const socialLinks = [ // Removed social links array
  //   { icon: Instagram, href: "#", name: "Instagram" },
  //   { icon: Facebook, href: "#", name: "Facebook" },
  //   { icon: Twitter, href: "#", name: "Twitter" },
  //   { icon: Linkedin, href: "#", name: "LinkedIn" },
  // ];

  return (
    <footer className="bg-background border-t border-border dark:bg-gray-900">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Logo className="h-12 w-auto"/>
            <p className="mt-2 text-sm text-muted-foreground">Making pet parenting joyful and simple.</p>
          </div>
          
          {/* Removed social links rendering section
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                aria-label={link.name}
              >
                <link.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
          */}
        </div>
        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground dark:border-gray-700">
          &copy; {year} HappyPaws. All rights reserved. Designed with love for pets & their parents in India.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
