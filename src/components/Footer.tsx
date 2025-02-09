import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="absolute w-full bg-[#330099] py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="text-white">
            <h3 className="font-bold text-xl">Phone Gallery</h3>
            <p className="text-sm opacity-70">© 2024 All rights reserved</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-white hover:text-white/70 transition-colors">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-white hover:text-white/70 transition-colors">
              <Twitter size={24} />
            </a>
            <a href="#" className="text-white hover:text-white/70 transition-colors">
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;