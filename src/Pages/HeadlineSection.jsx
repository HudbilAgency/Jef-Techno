import React, { useState } from 'react';

// Menu items for the navbar
const menuItems = [
  { label: 'Home', hasDropdown: false },
  { label: 'About', hasDropdown: true },
  { label: 'Our Business', hasDropdown: true },
  { label: 'News', hasDropdown: true },
  { label: 'Careers', hasDropdown: false }
];

// Carousel data with images, text, and dot colors
const carouselData = [
  {
    backgroundImage: './HomePageImg/Img1.png',
    buttonImage: './HomePageImg/ArrowImg.png',
    text: 'THINK ELECTRICAL, THINK JEF',
    dotColors: ['bg-white', 'bg-gray-400', 'bg-gray-400']
  },
  {
    backgroundImage: './HomePageImg/Img2.png',
    buttonImage: './HomePageImg/ArrowImg.png',
    text: 'END-to-END SOLUTIONS FOR ELECTRICAL PROTECTION',
    dotColors: ['bg-gray-400', 'bg-white', 'bg-gray-400']
  },
  {
    backgroundImage: './HomePageImg/Img3.png',
    buttonImage: './HomePageImg/ArrowImg.png',
    text: 'EXCELLENCE THROUGH DIGITALISATION',
    dotColors: ['bg-gray-400', 'bg-gray-400', 'bg-white']
  }
];

function HeadlineSection() {
  const [language, setLanguage] = useState('English');
  const [currentIndex, setCurrentIndex] = useState(0);

  const toggleLanguage = () => {
    setLanguage(prevLang => (prevLang === 'English' ? 'Français' : 'English'));
  };

  const handleButtonClick = () => {
    setCurrentIndex((currentIndex + 1) % carouselData.length);
  };

  const currentData = carouselData[currentIndex];

  return (
    <div className="flex overflow-hidden flex-col bg-white h-screen">
      <div className="flex relative flex-col py-6 w-full h-full max-md:max-w-full">
        <img
          loading="lazy"
          src={currentData.backgroundImage}
          alt="Electrical background"
          className="object-cover absolute inset-0 w-full h-full"
        />
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
              className="object-contain w-9"
            />
            <div className="flex gap-2.5 items-center self-stretch my-auto">
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
            <button className="gap-3 self-stretch p-2.5 my-auto text-2xl text-white bg-red-700 rounded-[30px] tracking-[2px] w-[216px]">
              Get In Touch
            </button>
          </div>
        </header>
        <div className="relative shrink-0 mt-8 h-px border border-solid border-neutral-200 max-md:max-w-full" />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/294404525c18fdbaa9f653036e40ee212908398c77171f1630872999832f8f9e?placeholderIfAbsent=true&apiKey=60c6eb6ce37644fdb727618799199006"
          alt="Scroll to top"
          className="object-contain self-end mt-4 mr-28 w-[60px] max-md:mt-10 max-md:mr-2.5"
        />
        <div className="flex relative mt-56 justify-end mx-[80px]">
          <button
            className="flex flex-col px-1 py-2 w-12 rounded-full border border-white border-solid"
            onClick={handleButtonClick}
          >
            <img
              loading="lazy"
              src={currentData.buttonImage}
              className="object-contain w-full aspect-[1.2]"
            />
          </button>
        </div>
        <section className="flex relative flex-col self-center   w-full max-w-[1310px] max-md:mt-10 max-md:max-w-full">
          <h1 className="text-7xl font-bold h-28 my-auto tracking-wider text-white max-md:max-w-full max-md:text-4xl">
            {currentData.text}
          </h1>
          <div className="flex gap-6 items-center self-start mt-12 text-2xl uppercase text-neutral-900 tracking-[3px] max-md:mt-10">
            <button>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8855ae14d9effa10b9317a704535212615d40fdec755767f2e9941cd3e8401cc?placeholderIfAbsent=true&apiKey=60c6eb6ce37644fdb727618799199006"
                alt="Electrical icon"
                className="object-contain w-16"
              />
            </button>
            <button className="gap-2.5 self-stretch px-2.5 py-4 my-auto bg-white border border-solid border-zinc-900 border-opacity-10 min-h-[64px] rounded-[50px] w-[239px]">
              Learn More
            </button>
          </div>
          <div className="flex gap-2.5 self-center mt-24 ml-20 w-20 max-md:mt-10">
            {currentData.dotColors.map((color, index) => (
              <div
                key={index}
                className={`flex shrink-0 w-4 h-4 rounded-full ${color}`}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default HeadlineSection;