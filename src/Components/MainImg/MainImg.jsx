import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';



const menuItems = [
  { label: 'Home', hasDropdown: false , path: '/'  },
  { label: 'About', hasDropdown: true },
  { label: 'Our Business', hasDropdown: true },
  { label: 'News', hasDropdown: true },
  { label: 'Careers', hasDropdown: false }
];

const MainImg = () => {


  const [language, setLanguage] = useState('English');

  const toggleLanguage = () => {
    setLanguage(prevLang => (prevLang === 'English' ? 'Français' : 'English'));
  };



  return (
    <div className="flex absolute w-full z-50 overflow-hidden flex-col bg-stone-800">
      <div className="flex flex-col pt-5 w-full h-full max-md:max-w-full">
        <header className="flex relative flex-wrap justify-between items-center self-center w-full max-w-[1520px] max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f72711985a65d5e9cccf583145ef02cf25367e53a9dbd9152d31ad79b46cc8c?placeholderIfAbsent=true&apiKey=60c6eb6ce37644fdb727618799199006"
            alt="JEF Company logo"
            className="object-contain w-[124px] aspect-[1.77]"
          />
          <nav className="flex flex-wrap gap-10 items-center self-stretch my-auto max-md:max-w-full">
      {menuItems.map((item, index) => (
        <div key={index} className="flex gap-2.5 justify-center items-center self-stretch my-auto">
          <NavLink 
            to={item.path} // Add the path for navigation
            className="self-stretch my-auto text-2xl font-medium text-white tracking-[2px]"
          >
            {item.label}
          </NavLink>
          {item.hasDropdown && (
            <div className="flex flex-col justify-center items-center self-stretch px-2.5 py-3.5 my-auto w-9 min-h-[36px]">
              <img
                loading="lazy"
                src="./HomePageImg/NavbarImg/Dropdown.png"
                alt={`${item.label} dropdown`}
                className="object-contain aspect-[1.8] w-[18px]"
              />
            </div>
          )}
        </div>
      ))}
    </nav>
          <div className="flex gap-8 items-center self-stretch my-auto max-md:max-w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d286a54bf2245ec9b8204fea512ccef9942321493eb7d4c073ee049948aa0c7a?placeholderIfAbsent=true&apiKey=60c6eb6ce37644fdb727618799199006"
              alt="Search"
              className="object-contain w-9"
            />
            <div className="flex gap-2.5 items-center self-stretch my-auto">
              <button
                onClick={toggleLanguage}
                className="self-stretch my-auto text-2xl font-light text-white tracking-[2px]"
              >
                {language}
              </button>
              <div className="flex flex-col justify-center items-center self-stretch px-2.5 py-3.5 my-auto w-9 min-h-[36px]">
                <img
                  loading="lazy"
                  src="./HomePageImg/NavbarImg/Dropdown.png"
                  alt="Language selector"
                  className="object-contain aspect-[1.8] w-[18px]"
                />
              </div>
            </div>
            <button className="gap-3 self-stretch p-2.5 my-auto text-2xl text-white bg-red-700 rounded-[30px] tracking-[2px] w-[216px]">
              Get In Touch
            </button>
          </div>
        </header>
        <div className="relative shrink-0 mt-6 h-px border border-solid border-neutral-200 max-md:max-w-full" />
      </div>
    </div>
  )
}

export default MainImg;