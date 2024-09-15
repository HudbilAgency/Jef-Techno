import React, { useState } from 'react';



const menuItems = [
  { label: 'Home', hasDropdown: false },
  { label: 'About', hasDropdown: true },
  { label: 'Our Business', hasDropdown: true },
  { label: 'News', hasDropdown: true },
  { label: 'Careers', hasDropdown: false }
];

const Navbar = () => {


  const [language, setLanguage] = useState('English');

  const toggleLanguage = () => {
    setLanguage(prevLang => (prevLang === 'English' ? 'Français' : 'English'));
  };



  return (
    <div className="flex absolute w-full z-50 overflow-hidden flex-col bg-stone-800 lg:bg-transparent">
      <div className="flex flex-col pt-5 w-full h-full max-md:max-w-full">
        <header className="flex relative flex-wrap justify-between items-center self-center w-full max-w-[1520px] max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f72711985a65d5e9cccf583145ef02cf25367e53a9dbd9152d31ad79b46cc8c?placeholderIfAbsent=true&apiKey=60c6eb6ce37644fdb727618799199006"
            alt="JEF Company logo"
            className="object-contain w-[5rem] 2xl:w-[124px] aspect-[1.77]"
          />
          <nav className="flex flex-wrap gap-10 items-center self-stretch my-auto max-md:max-w-full">
            {menuItems.map((item, index) => (
              <div key={index} className="lg:flex hidden gap-2.5 justify-center items-center self-stretch my-auto">
                <div className="self-stretch my-auto text-2xl font-medium text-zinc-900 tracking-[2px]">
                  {item.label}
                </div>
                {item.hasDropdown && (
                  <div className="flex flex-col justify-center items-center self-stretch px-2.5 py-3.5 my-auto w-9 min-h-[36px]">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/5b78ea1e174590f051c423d232a44cf9a06dd7609926986d4d37c5c9a94107e0?placeholderIfAbsent=true&apiKey=60c6eb6ce37644fdb727618799199006"
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
              className="object-contain w-9  hidden lg:block"
            />
            <div className="lg:flex hidden gap-2.5 items-center self-stretch my-auto">
              <button
                onClick={toggleLanguage}
                className="self-stretch my-auto text-2xl font-light text-neutral-900 tracking-[2px]"
              >
                {language}
              </button>
              <div className="flex flex-col justify-center items-center self-stretch px-2.5 py-3.5 my-auto w-9 min-h-[36px]">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/932bb1b4188128c4db68e06cefe2307fe98ad701028c66d1c2a9754b15480222?placeholderIfAbsent=true&apiKey=60c6eb6ce37644fdb727618799199006"
                  alt="Language selector"
                  className="object-contain aspect-[1.8] w-[18px]"
                />
              </div>
            </div>
            <button className="gap-3 self-stretch p-2.5 my-auto text-xs lg:text-2xl text-white bg-red-700 rounded-[30px] tracking-[2px] w-[8rem] 2xl:w-[216px]">
              Get In Touch
            </button>
            <button className='md:hidden mr-2 justify-items-center w-[2.3rem]'>
              <img src="./HomePageImg/NavbarImg/MenuLogo.png" alt="Mobile View Menu Button" />
            </button>
          </div>
        </header>
        <div className="relative shrink-0 mt-6 h-px border border-solid border-neutral-200 max-md:max-w-full" />
      </div>
    </div>
  )
}

export default Navbar