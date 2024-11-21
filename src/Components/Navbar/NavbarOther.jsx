import React, { useState , useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const menuItems = [
  { label: 'Home', hasDropdown: false, path: '/' },
  { label: 'About', hasDropdown: true },
  { label: 'Our Business', hasDropdown: true },
  { label: 'News', hasDropdown: true },
  { label: 'Careers', hasDropdown: false, path: '/careers' }
];

const NavbarOther = () => {
  const [language, setLanguage] = useState('English');
  const [activeSection, setActiveSection] = useState(''); // Track which section is active

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'English' ? 'Français' : 'English'));
  };

  const handleMenuClick = (label) => {
    setActiveSection((prevSection) => (prevSection === label ? '' : label)); // Toggle section visibility
  };

  useEffect(() => {
    if (activeSection) {
      document.body.style.overflow = 'hidden'; // Disable scroll
    } else {
      document.body.style.overflow = ''; // Enable scroll
    }

    // Cleanup when component unmounts or activeSection changes
    return () => {
      document.body.style.overflow = ''; // Reset scroll when component unmounts
    };
  }, [activeSection]);

  return (
    <div className="flex absolute w-full overflow-hidden flex-col bg-stone-800">
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
                {item.path ? (
                  <NavLink
                    to={item.path} // Use path for routing if available
                    className="self-stretch my-auto text-2xl font-medium text-white tracking-[2px]"
                    activeClassName="active" // Optional: styling for active link
                  >
                    {item.label}
                  </NavLink>
                ) : (
                  <button
                    onClick={() => handleMenuClick(item.label)} // Toggle visibility of the section
                    className="self-stretch my-auto text-2xl font-medium text-white tracking-[2px]"
                  >
                    {item.label}
                  </button>
                )}
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
              className="object-contain w-9 hidden lg:block"
            />
            <div className="lg:flex hidden gap-2.5 items-center self-stretch my-auto">
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
            <Link to={'/get-in-touch'}>
            <button className="gap-3 self-stretch p-2.5 my-auto text-xs lg:text-2xl text-white bg-red-700 rounded-[30px] tracking-[2px] w-[8rem] 2xl:w-[216px]">
              Get In Touch
            </button>
            </Link>
            <button className='md:hidden mr-2 justify-items-center w-[2.3rem]'>
              <img src="./HomePageImg/NavbarImg/MenuLogo.png" alt="Mobile View Menu Button" />
            </button>
          </div>
        </header>
        <div className="relative shrink-0 mt-6 h-px border border-solid border-neutral-200 max-md:max-w-full" />
      </div>

      {/* Conditionally render sections */}
      {activeSection === 'About' && <AboutSection />}
      {activeSection === 'Our Business' && <OurBusinessSection />}
      {activeSection === 'News' && <NewsSection />}
    </div>
  );
};

// Dummy components for different sections (replace with real content)
const navigationItems = [
  { number: '01', title: 'What is JEF' },
  { number: '02', title: 'JEF leadership team' },
  { number: '03', title: 'Our mission' },
  { number: '04', title: 'Our vision' }
];

function AboutSection() {
  return (
    <section className="flex overflow-hidden flex-col items-center px-16 pt-5 pb-96 bg-stone-900 max-md:px-5 max-md:pb-24">
      <div className="ml-3.5 max-w-full w-[994px]">
        <div className="flex gap-5 max-md:flex-col">
          <nav className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-wrap grow gap-6 max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col grow shrink-0 items-start my-auto basis-0 w-fit max-md:max-w-full">
                {navigationItems.map((item, index) => (
                  <div key={index} className="flex gap-7 items-center mt-11 uppercase tracking-[3.36px] max-md:mt-10">
                    <div className="self-stretch my-auto text-base text-red-700">{item.number}</div>
                    <div className="self-stretch my-auto text-2xl font-medium text-white">{item.title}</div>
                    {item.number === '01' && (
                      <div className="flex flex-col justify-center items-center py-1.5 pr-2.5 pl-2.5 min-h-[29px] rotate-[-1.5707963267948966rad]">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2bb3117bb1e657fdbc997cd15e47263db3ce1251843c4a3543e9042a61e0fd2a?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244"
                          className="object-contain w-2.5 aspect-[0.56]"
                          alt=""
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="shrink-0 w-px border border-solid border-neutral-300 h-[348px]" role="separator" aria-orientation="vertical"></div>
            </div>
          </nav>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex gap-10 mt-16 text-xl font-medium text-white uppercase tracking-[3.36px] max-md:mt-10">
              <h2>About</h2>
              <p className="flex-auto">redefining business</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const OurBusinessSection = () => (
  <section className="p-8 bg-gray-100">
    <h2>Our Business</h2>
    <p>Details about our business ventures.</p>
  </section>
);

const NewsSection = () => (
  <section className="p-8 bg-gray-100">
    <h2>News</h2>
    <p>Latest company news and updates.</p>
  </section>
);

export default NavbarOther;
