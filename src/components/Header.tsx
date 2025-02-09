import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-black/20 backdrop-blur-sm px-8 py-4 w-full m-auto rounded-full flex items-center">
        {/* <div className="bg-white/10 p-3 rounded-full m-auto backdrop-blur-sm"> */}
          {/* <Smartphone size={24} className="text-white " /> */}
          <img src="/assets/icons/icon.png" className='w-20 h-20 rounded-full' alt="iveez logo" />
        {/* </div> */}
      </div>
    </header>
  );
};

export default Header;