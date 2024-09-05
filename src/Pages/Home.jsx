import React, { useState } from 'react';
import MainFooter from '../Components/Footer/MainFooter';

// Menu items for the navbar
const menuItems = [
  { label: 'Home', hasDropdown: false },
  { label: 'About', hasDropdown: true },
  { label: 'Our Business', hasDropdown: true },
  { label: 'News', hasDropdown: true },
  { label: 'Careers', hasDropdown: false }
];



//  Why choose JEF section

const featureData = [
  {
    title: 'Smart digitalisation',
    description: 'Our patented tool that provides end to end digitalisation for conducting system studies gives us a unique leverage to deliver quality & consistency at scale.',
    imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c4c01e3bc7bed86c38d371bdd6bd1af13d97347baf0d4bf14d4585deece35459?apiKey=7904fd7afaaf4ee2b0837ab86d91b244&',
  },
  {
    title: 'Our L&d centre',
    description: 'Enhancing Value & Quality for Our Clients Through Our Continuous Learning & Development Program.',
    imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c07d5e60d7acc2dfbda12fa854cc93fa978c2cbc0d3964684876aa0f84fa2b99?apiKey=7904fd7afaaf4ee2b0837ab86d91b244&',
  },
];


// OurContact's Section

const inputFields = [
  { label: 'Name', type: 'text' },
  { label: 'Email', type: 'email' },
  { label: 'Mobile Number', type: 'tel' },
];

// Blog's Data

const blogData = [
  {
    imageSrc: "./HomePageImg/BlogsSection/Img1.png",
    title: "Earthing System Ceremony Celebrates Outstanding Contributions",
  },
  {
    imageSrc: "./HomePageImg/BlogsSection/Img2.png",
    title: "JEF and Saudi Broadcasting Authority (SBA) form astrategic partnership to",
  },
  {
    imageSrc: "./HomePageImg/BlogsSection/Img3.png",
    title: "JEF social responsibility program reach 50,000 beneficiaries",
  },
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

function Home() {
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
    <>
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

    {/*  Why choose JEF Section  */}

    <main className="flex lg:px-[200px] overflow-hidden flex-col px-16 py-6 bg-stone-900 ">
      <header className="flex flex-wrap gap-7 w-full max-w-[1522px] max-md:max-w-full">
      </header>
      {featureData.map((feature, index) => (
        <FeatureSection
          key={index}
          title={feature.title}
          description={feature.description}
          imageSrc={feature.imageSrc}
        />
      ))}
    </main>



    {/*  Founder's Message Section   */}

     <section>

          <main className="flex overflow-hidden flex-col font-bold text-white bg-white bg-opacity-50">
            <section className="flex relative flex-col justify-center items-start px-20 py-16 w-full min-h-[858px] max-md:px-5 max-md:max-w-full">
              <img loading="lazy" src="./HomePageImg/FounderImg.png" alt="" className="object-cover absolute inset-0 size-full" />
              <div className="flex lg:mx-[120px] relative flex-col items-start max-w-full w-[909px]">
              <h1 className="text-6xl max-md:max-w-full max-md:text-4xl">
                Founder's message
              </h1>
              <p className="self-stretch mt-6 text-3xl leading-10 max-md:max-w-full">
                JEF is an innovative company with Indian roots and an extensive international presence across 21+ countries in the ASEAN, Middle Eastern, African and European regions. We have been the preferred vendor for prestigious projects in many countries with 3000+ global customers and an astounding 90% customer retention rate.
              </p>
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9413036975d5e878aae400b5c1b1dede1eb9dddb15de69b0300085276dd801b0?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244" alt="Signature" className="object-contain mt-8 max-w-full aspect-[2.93] w-[226px]" />
                <h2 className="mt-5 text-5xl max-md:text-4xl">Prashanth BG</h2>
                <p className="mt-5 text-3xl max-md:max-w-full">
                  CEO, JEF TECHNO SOLUTIONS PVT LTD
                </p>
              </div>
            </section>
          </main>

          </section>



  {/*  Blog's Section  */}



    <section >
      <main className="lg:px-[200px] flex overflow-hidden flex-col justify-center items-center px-20 py-20 w-full bg-neutral-100 max-md:px-5 max-md:pb-24 max-md:max-w-full">
          <div className="flex flex-col items-start mb-0 w-full max-w-[1480px] max-md:mb-2.5 max-md:max-w-full">
            <header className="flex flex-wrap gap-5 justify-between self-stretch w-full text-red-700 uppercase max-md:max-w-full">
              <h1 className="text-4xl font-bold leading-none tracking-[3.36px]">BLOGS</h1>
              <div className="flex gap-7 text-base tracking-[3px]">
                <div className="grow my-auto">99 ARTICLES IN TOTAL</div>
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/951171544b272ca27d823631886443b3e62258383a3a68c83393b1447e2eb810?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244" alt="" className="object-contain shrink-0 w-14 aspect-square" />
              </div>
            </header>
            <nav className="flex gap-8 mt-16 ml-3.5 text-xl uppercase whitespace-nowrap tracking-[3.36px] max-md:mt-10 max-md:ml-2.5">
              <a href="#newest" className="text-red-700 basis-auto">Newest</a>
              <a href="#oldest" className="text-neutral-900">Oldest</a>
            </nav>
            <section className="mt-10 w-full max-w-[1400px] max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                {blogData.map((blog, index) => (
                  <BlogCard key={index} imageSrc={blog.imageSrc} title={blog.title} />
                ))}
              </div>
            </section>
          </div>
        </main>
    </section>


   {/*  Contact Us Section    */}

    <section className="flex overflow-hidden flex-col text-base font-light bg-white text-stone-300">
      <div className="flex relative flex-col justify-center items-start px-20 py-24 w-full min-h-[628px] max-md:px-5 max-md:pb-24 max-md:max-w-full">
        <img loading="lazy" src="./HomePageImg/ContactUsMainImg.png" alt="" className="object-cover absolute inset-0 size-full" />
        <div className="flex lg:mx-[120px] relative flex-col items-start mb-0 max-w-full w-[521px] max-md:mb-2.5">
          <h1 className="text-5xl font-semibold text-red-700 uppercase tracking-[2px] max-md:text-4xl">
            Contact us
          </h1>
          <p className="self-stretch mt-4 text-lg font-normal leading-none text-white max-md:max-w-full">
          Get in touch with us for any business enquiry.
          </p>
          <form className="w-full mt-12 max-md:mt-10">
            {inputFields.map((field, index) => (
              <FormInput key={index} label={field.label} type={field.type} />
            ))}
            <button
              type="submit"
              className="overflow-hidden px-16 py-4 mt-2 max-w-full text-xl font-semibold text-white whitespace-nowrap bg-red-700 rounded-3xl w-[380px] max-md:px-5"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>


  



      < MainFooter />
  </>
  );
}




















// Why Choose JEF Section 



function FeatureSection({ title, description, imageSrc }) {
  return (
    <section className="self-center my-20 w-full max-w-[1472px] max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex  flex-col w-[36%] max-md:ml-0 max-md:w-full">
          <img loading="lazy" src={imageSrc} className="object-contain grow w-full aspect-[0.8] max-md:max-w-full" alt="" />
        </div>
        <div className="flex flex-col ml-5 w-[64%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow items-start mt-7 text-white max-md:max-w-full">
            <div className=" text-3xl font-semibold tracking-widest text-red-700 uppercase max-md:ml-2.5">
              Why choose JEF ?
            </div>
            <h2 className="mt-10 relative 2xl:-inset-x-32 text-7xl font-bold uppercase lg:w-[20vw] tracking-[3px] max-md:mt-10  max-md:text-4xl">
                  {title} 
            </h2>
            <div className="flex flex-col self-end mt-10 max-w-full w-[855px] max-md:mt-10">
              <p className="text-2xl font-light leading-10 max-md:max-w-full">
                {description}
              </p>
              <button className="flex gap-2.5 justify-center items-center self-start  px-6 mt-20 text-xl uppercase bg-red-700 border border-solid border-zinc-900 border-opacity-10 min-h-[64px] rounded-[50px] tracking-[2px] max-md:mt-10">
               <span className="self-stretch my-auto">Read More</span>
               <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/db980ec347a907dbb470da6524b4de0865962ecb1dce316128b11f72afbae1f5?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244" className="object-contain shrink-0 self-stretch my-auto aspect-[1.2] w-[53px]" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}







// Blog's Section Extra


function BlogCard({ imageSrc, title }) {
  return (
    <article className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow max-md:mt-10">
        <div className="flex flex-col justify-center w-full min-h-[420px]">
          <img loading="lazy" src={imageSrc} alt={title} className="object-contain w-[360px] aspect-square" />
        </div>
        <div className="flex flex-col items-start pr-16 mt-8 w-full max-w-[412px] max-md:pr-5">
          <h2 className="text-lg leading-6 text-stone-900">{title}</h2>
          <div className="flex gap-2 mt-8 text-xs tracking-widest leading-tight text-center text-red-700 uppercase">
            <div className="grow">Read more</div>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c99385a3888a56e12aa67bbca0d3363e44c74249fcb42246da50d1f716869d4?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244" alt="" className="object-contain shrink-0 aspect-[2.07] w-[31px]" />
          </div>
        </div>
      </div>
    </article>
  );
}



// Our Contact's Input Section

function FormInput({ label, type }) {
  const id = label.toLowerCase().replace(' ', '-');

  return (
    <div className="mb-6">
      <label htmlFor={id} className="sr-only">{label}</label>
      <input
        type={type}
        id={id}
        name={id}
        placeholder={label}
        className="overflow-hidden px-5 py-3.5 w-full max-w-[380px] bg-white rounded-3xl border border-solid border-neutral-200"
        required
      />
    </div>
  );
}

export default Home;