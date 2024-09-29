import React from 'react';
import NavbarOther from '../Components/Navbar/NavbarOther';
import MainFooter from '../Components/Footer/MainFooter';
import Navbar from '../Components/Navbar/Navbar';
import MainImgWhite from '../Components/MainImgWhite/MainImgWhite';
import MainImg from '../Components/MainImg/MainImg';

const GetInTouchPage = () => {
  const categories = [
    { name: 'Press', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/3b4ca608dfe7c87c49a262f43596b1ce20d6bdf1a9d54628eb3a7a44088d543c?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244', active: true },
    { name: 'Business', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/81e19bd1991ce4c9a6012444c392c15a65571fd0b2a4ca903f0dec206f94272f?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244' },
    { name: 'Invest', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/037113e1c58bca9aa9fd079f131750cd539dc5cfab81d4ff3b79f5df80bf3e7e?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244' },
    { name: 'Live', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ebe689aa5ab67930d9a8b6f839aeeb9af799b6fb7cd0db043ccea8118ac427e7?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244' },
    { name: 'Visit', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/6204b4c55eaf552239eff61e7d7323d1f98fbedd4ba1f28419a7bee9babf0045?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244' },
    { name: 'Work', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/8a93e477a8f859de6b4a8b3a0428276f78c49295a12f86c9449f4da7ce0526c5?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244' }
  ];

  return (

    <>
    < MainImg />
    <section className="flex py-20 overflow-hidden flex-col bg-white">
      <div className="flex overflow-hidden flex-col w-full bg-stone-900 max-md:max-w-full">
        <div className="flex flex-col justify-center w-full max-md:max-w-full">
          <div className="flex overflow-hidden relative flex-col flex-1 w-full min-h-[820px] max-md:max-w-full">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0752e0f87c55b34ebf176275412f268783f148a72e69b03a0528273277bae13f?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244" alt="" className="object-cover absolute inset-0 size-full" />
            <div className="flex relative flex-col pb-44 w-full max-md:pb-24 max-md:max-w-full">
              <div className="flex flex-col self-center mt-24 -mb-9 ml-3 w-full max-w-[1510px] max-md:mt-10 max-md:mb-2.5 max-md:max-w-full">
                <div className="flex flex-col max-w-full text-xs text-white w-[658px]">
                  <div className="flex flex-col w-full max-md:max-w-full">
                    <h2 className="w-full font-bold tracking-widest leading-6 text-red-700 max-md:max-w-full">
                      GET IN TOUCH
                    </h2>
                    <p className="flex items-center mt-4 w-full text-base leading-10 uppercase tracking-[2.55px] max-md:max-w-full">
                      <span className="flex flex-col self-stretch my-auto min-w-[240px] w-[1040px]">
                        <span className="pb-px w-full max-md:max-w-full">
                          Please select the category that best
                        </span>
                        <span className="pb-px w-full max-md:max-w-full">
                          describes the nature of your inquiry
                        </span>
                      </span>
                    </p>
                    <p className="pt-1.5 mt-4 w-full font-thin leading-7 uppercase max-md:max-w-full">
                      Select one:
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-8 items-center mt-16 w-full max-md:mt-10 max-md:max-w-full">
                  {categories.map((category, index) => (
                    <div
                      key={index}
                      className={`flex flex-col grow shrink justify-between items-center self-stretch px-20 py-11 my-auto ${
                        category.active ? 'bg-red-700' : ''
                      } rounded-lg border border-solid ${
                        category.active ? 'border-red-700' : 'border-stone-300'
                      } min-h-[180px] w-[179px] max-md:px-5`}
                      role="button"
                      tabIndex="0"
                    >
                      <div className="flex flex-col justify-center min-h-[50px] w-[50px]">
                        <img loading="lazy" src={category.icon} alt="" className="object-contain flex-1 w-full aspect-square" />
                      </div>
                      <div className={`mt-5 text-base ${category.active ? 'font-semibold' : 'font-thin'} text-center text-white`}>
                        {category.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    < MainFooter />
    </>
  );
};

export default GetInTouchPage;