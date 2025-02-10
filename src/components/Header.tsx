import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface HeaderProps {
  isLoading: boolean;
}

const Header: React.FC<HeaderProps> = ({ isLoading }) => {
  const headerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const spinnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isLoading && headerRef.current && logoRef.current) {
      // Animate header to final position
      gsap.to(headerRef.current, {
        top: '1.5rem',
        duration: 1,
        ease: 'power3.inOut'
      });

      // Animate logo to smaller size
      gsap.to(logoRef.current, {
        scale: 1,
        duration: 1,
        ease: 'power3.inOut'
      });

      // Fade out spinner
      if (spinnerRef.current) {
        gsap.to(spinnerRef.current, {
          opacity: 0,
          duration: 0.5,
          ease: 'power2.inOut',
          onComplete: () => {
            if (spinnerRef.current) {
              spinnerRef.current.style.display = 'none';
            }
          }
        });
      }
    }
  }, [isLoading]);

  return (
    <header 
      ref={headerRef}
      className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        isLoading ? 'top-1/2 -translate-y-1/2' : 'top-6'
      }`}
    >
      <div className="relative">
        {/* Spinner */}
        <div 
          ref={spinnerRef}
          className={`absolute inset-0 w-[calc(100%+5rem)] h-[calc(100%+5rem)] -left-10 -top-10 ${
            isLoading ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="w-full h-full border-t-4 border-t-white rounded-full animate-spin" />
        </div>

        {/* Logo container */}
        <div className="bg-black/20 backdrop-blur-sm p-4 w-full m-auto rounded-full flex items-center justify-center">
          <img 
            ref={logoRef}
            src="/assets/icons/icon.png" 
            className={`rounded-full shadow-lg shadow-white transition-all duration-300 ${
              isLoading ? 'w-40 h-40' : 'w-20 h-20'
            }`}
            alt="iveez logo" 
            style={{
              transform: isLoading ? 'scale(1.5)' : 'scale(1)'
            }}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
