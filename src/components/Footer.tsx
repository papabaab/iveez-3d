import { Facebook, Twitter, Instagram } from 'lucide-react';

interface FooterProps {
  didScroll: boolean;
}

const isMobile = window.innerWidth < 768? true : false;

const Footer = ({ didScroll }: FooterProps) => {
  const isFrench = navigator.language.startsWith('fr');
  const scrollText = isFrench ? "défiler pour voir plus" : "scroll to see more";

  return (
   <>
    <div className={`absolute right-0 bottom-[66vh] rotate-90 transition-opacity duration-300 ${didScroll ? 'opacity-0' : 'opacity-100'}`}>
      <p className="text-white/50 text-xs absolute whitespace-nowrap">{scrollText}</p>
    </div>
    <footer className="fixed bottom-0 w-full bg-[#330099] py-6">
      <div className="container mx-auto px-4">
        {/* Footer content */}
        <div className="flex justify-between items-center">
          {isMobile? (<>
          <a href="https://play.google.com/store/apps/details?id=com.iveez.app" target="_blank">
           <img className='h-16' src="/assets/imgs/download-android.png" alt="" />
          </a>
          <a href="https://apps.apple.com/us/app/iveez/id1638195131?itsct=apps_box_link&itscg=30200" target="_blank">
           <img className='h-16' src="/assets/imgs/download-apple.png" alt="" />
          </a>
            <div className="absolute bottom-0 flex justify-between w-full">
              <p className="text-white/50 text-xs -ml-4">iveez, vivez mieux!</p>
              <p className="text-white/50 text-xs">© 2025 All rights reserved</p>
            </div>
          </>) : (<>
          <div className="text-white">
              <h3 className="font-bold text-xl">iveez, vivez mieux!</h3>
              <p className="text-sm opacity-70">© 2025 All rights reserved</p>
            </div><div className="flex space-x-6">
                <a href="https://web.facebook.com/iveezci" target="_blank" className="text-white hover:text-white/70 transition-colors">
                  <Facebook size={24} />
                </a>
                <a href="#" className="text-white hover:text-white/70 transition-colors">
                  <Twitter size={24} />
                </a>
                <a href="https://www.instagram.com/iveezapp/" target="_blank" className="text-white hover:text-white/70 transition-colors">
                  <Instagram size={24} />
                </a>
              </div>
              </>)}
        </div>
      </div>
    </footer>
   </>
  );
};

export default Footer;
