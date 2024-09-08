import React, { useRef, useState } from "react";
import MainFooter from '../Components/Footer/MainFooter';
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from '../Components/Navbar/Navbar';




gsap.registerPlugin(ScrollTrigger);

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
    title: "Enhance Reliability, Efficiency and Compliance of Your Electrical Grid through Power System Studies",
  },
  {
    imageSrc: "./HomePageImg/BlogsSection/Img2.png",
    title: "What are the Challenges for Electrical System Design and Engineering in Greenfield Projects",
  },
  {
    imageSrc: "./HomePageImg/BlogsSection/Img3.png",
    title: "Measurement, simulation, validation - The 3 key steps of Power System Studies",
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


// Carousal Image's Animation

  const [index, setIndex] = useState(0);
  const coverRef = useRef(null);
  const carouselRef = useRef(null);
  

  const handleNext = () => {
    if (index < 2) {
      gsap.fromTo(
        coverRef.current,
        {
          x: "100%",
          y: "-100%",
        },
        {
          x: "0%",
          yoyo: true,
          repeat: 1,
        }
      );
      gsap.to(carouselRef.current, {
        x: `-${(index + 1) * 33.33}%`,
      });
      setIndex(index + 1);
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      gsap.fromTo(
        coverRef.current,
        {
          x: "-100%",
          y: "-100%",
        },
        {
          x: "0%",
          y: "-100%",
          yoyo: true,
          repeat: 1,
        }
      );
      gsap.to(carouselRef.current, {
        x: `-${(index - 1) * 33.33}%`,
      });
      setIndex(index - 1);
    }
  };


  



{/*Gsap Annimation*/}


useGSAP(()=>{

  let tl=gsap.timeline({
    scrollTrigger:{
      trigger:".container",
      toggleActions:"play none none reverse",
      
      start:"10% 10%",
      end:"center 35%",
      pin:true
    }
  })
  {/*Text Animation*/}
  
  tl.to(".title1",{x:50,opacity:0,scrub:true,},"display")
  tl.to(".description1",{y:20,opacity:0},"display")
  tl.fromTo(".title2",{x:30,opacity:0},{x:0,opacity:1})
  tl.fromTo(".description2",{y:10,opacity:0},{y:0,opacity:1})
  
  {/*Image Animation*/}
  
  tl.to(".image1",{x:750,y:-630},"display")
  
  
  tl.to(".image2",{x: -880, y: -620},"display")
  
})


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



< Navbar />
    <div className="relative w-full h-screen overflow-hidden">
      <div ref={carouselRef} className="bg-no-repeat flex w-[300%] h-full ">
        <div  style={{ backgroundImage: "url('./HomePageImg/Img1.png')" }} className="w-full h-full bg-cover">
          <div className="mt-[450px] lg:mx-[200px] flex relative flex-col self-center   w-full max-w-[1310px] max-md:mt-10 max-md:max-w-full ">
            <h1 className="lg:text-6xl 2xl:text-7xl font-bold h-28 my-auto tracking-wider text-white max-md:max-w-full max-md:text-4xl">
            THINK ELECTRICAL, THINK JEF
            </h1>
            <div className="flex gap-6 items-center self-start mt-12 text-2xl uppercase text-neutral-900 tracking-[3px] max-md:mt-10">
              <button>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8855ae14d9effa10b9317a704535212615d40fdec755767f2e9941cd3e8401cc?placeholderIfAbsent=true&apiKey=60c6eb6ce37644fdb727618799199006"
                  alt="Electrical icon"
                  className="bg-repeat object-contain w-16"
                />
              </button>
              <button className="gap-2.5 self-stretch px-2.5 py-4 my-auto bg-white border border-solid border-zinc-900 border-opacity-10 min-h-[64px] rounded-[50px] w-[239px]">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div style={{ backgroundImage: "url('./HomePageImg/Img2.png')" }} className="w-full h-full bg-cover">

        <div className="mt-[450px] lg:mx-[200px] flex relative flex-col self-center  w-full max-w-[1310px] max-md:mt-10 max-md:max-w-full ">
            <h1 className="lg:text-6xl  2xl:text-7xl font-bold h-28 my-auto tracking-wider text-white max-md:max-w-full max-md:text-4xl">
            END-to-END SOLUTIONS 
            <br />FOR ELECTRICAL PROTECTION
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
          </div>
        
        </div>
        <div style={{ backgroundImage: "url('./HomePageImg/Img3.png')" }} className="w-full h-full bg-cover">
        
        <div className="mt-[450px] lg:mx-[200px] flex relative flex-col self-center   w-full max-w-[1310px] max-md:mt-10 max-md:max-w-full ">
            <h1 className="lg:text-6xl 2xl:text-7xl font-bold h-28 my-auto tracking-wider text-white max-md:max-w-full max-md:text-4xl">
            EXCELLENCE THROUGH DIGITALISATION
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
          </div>

        </div>
      </div>
    <div ref={coverRef} className="absolute  w-full h-full bg-zinc-800"></div>
      <div
        className="absolute top-1/2 left-5 transform -translate-y-1/2 cursor-pointer border border-white rounded-full h-12 w-12 flex items-center justify-center"
        onClick={handlePrev}
      >
        <img src="./HomePageImg/LeftArrow.png" />
      </div>
      <div
        className="absolute top-1/2 right-5 transform -translate-y-1/2 cursor-pointer border border-white rounded-full h-12 w-12 flex items-center justify-center"
        onClick={handleNext}
      >
         <img src="./HomePageImg/RightArrow.png" />
      </div>
      
    </div>

    {/*  Why choose JEF Section  */}

    <main className="flex lg:px-[200px] overflow-hidden flex-col px-16 py-6 bg-stone-900 ">
      <header className="flex flex-wrap gap-7 w-full max-w-[1522px] max-md:max-w-full">
      </header>
      
      <FeatureSection/>
    </main>



    {/*  Founder's Message Section   */}


    

     {/* <section>

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

          </section> */}



    <main className="flex overflow-hidden flex-col">
      <section className="overflow-hidden  relative  w-full">
        <img src="./HomePageImg/FounderMsgSection.png" alt="foundersMsg"  className="object-cover absolute inset-0 size-full" />
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex lg:mx-[200px] flex-col  max-md:ml-0 max-md:w-full">
            <div className="flex z-10 my-20 flex-col items-start mt-20 mr-0 font-light text-red-700 max-md:mt-10 max-md:max-w-full">
              <h1 className="text-6xl font-bold uppercase tracking-[3px] max-md:max-w-full max-md:text-4xl">
                Founder message
              </h1>
              <p className="self-stretch my-20 w-[45vw] text-3xl leading-10 text-stone-900 max-md:mt-10 max-md:max-w-full">
                Every single day, we endeavour to make more customers across continents benefit from our work as a step to enhance reliability & safety in the electrical network.
                <br />
                I hope you choose to work with us. For some reason, if you choose otherwise, I will look forward to the next opportunity to work together. Thank you!
              </p>
              <h2 className="text-5xl font-semibold max-md:mt-10 max-md:text-4xl">{"Prashanth BG"}</h2>
              <p className="mt-4 text-3xl max-md:max-w-full">{"Chairman and Managing Director"}</p>
              <p className="mt-4 text-3xl">{"JEF Group"}</p>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[54%] max-md:ml-0 max-md:w-full">
          </div>
        </div>
      </section>
    </main>







  {/*  Blog's Section  */}



    <section >
      <main className="lg:px-[200px] flex overflow-hidden flex-col justify-center items-center px-20 py-20 w-full bg-neutral-100 max-md:px-5 max-md:pb-24 max-md:max-w-full">
          <div className="flex flex-col items-start mb-0 w-full max-w-[1480px] max-md:mb-2.5 max-md:max-w-full">
            <header className="flex flex-wrap gap-5 justify-between self-stretch w-full text-red-700 uppercase max-md:max-w-full">
              <h1 className="text-5xl font-bold leading-none tracking-[3.36px]">BLOGS</h1>
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



function FeatureSection() {
  return (
    <section className="overflow-hidden container self-center my-20 w-full h-[110vh] max-w-[1472px] max-md:mt-10 max-md:max-w-full ">
      <div className=" text-3xl mt-10 text-center font-semibold tracking-widest text-red-700 uppercase max-md:ml-2.5">
              Why choose JEF ?
            </div>
      <div className={`flex gap-5 max-md:flex-col`}>
        <div className={` image1 flex  flex-col w-[36%] max-md:ml-0 max-md:w-full`}>
          <img loading="lazy" src={"./HomePageImg/WhyChooseJEFImg/Smart Digitization 1.png"} className=  "object-contain grow w-full aspect-[0.8] max-md:max-w-full" alt="" />
        </div>
        
        <div className={` box flex flex-col ml-5 w-[64%] max-md:ml-0 max-md:w-full`}>
          <div className="flex flex-col grow items-start mt-7 text-white max-md:max-w-full">
            <h2 className="title1 mt-10  relative 2xl:-inset-x-32 text-7xl font-bold uppercase lg:w-[100%] tracking-[3px] max-md:mt-10  max-md:text-4xl">
                  Smart digitalisation 
            </h2>
            <h2 className='absolute title2 mt-10  ml-[35%]  2xl:-inset-x-32 text-7xl font-bold uppercase lg:w-[30%] tracking-[3px] max-md:mt-10 z-10  max-md:text-4xl'>
            Our L&d centre
            </h2>
            <div className="flex flex-col self-end  max-w-full w-[855px] max-md:mt-10">
              <p className="description1 text-2xl mt-10 font-light leading-10 max-md:max-w-full">
              Our patented tool that provides end to end digitalisation for conducting system studies gives us a unique leverage to deliver quality & consistency at scale.
              </p>
              <p className='description2 -mt-20 text-2xl font-light leading-10 max-md:max-w-full'>
              Enhancing Value & Quality for Our Clients Through Our Continuous Learning & Development Program.
              </p>
              
            </div>
            <button className="flex gap-2.5 justify-center items-center self-start  px-6 mt-24 text-xl uppercase bg-red-700 border border-solid border-zinc-900 border-opacity-10 min-h-[64px] rounded-[50px] tracking-[2px] max-md:mt-10">
               <span className="self-stretch my-auto">Read More</span>
               <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/db980ec347a907dbb470da6524b4de0865962ecb1dce316128b11f72afbae1f5?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244" className=" object-contain shrink-0 self-stretch my-auto aspect-[1.2] w-[53px]" alt="" />
              </button>
          </div>
        </div>
      </div>
      <div className={`ml-auto mt-28 image2 flex  flex-col w-[32%] max-md:w-full`}>
          <img loading="lazy" src={"./HomePageImg/WhyChooseJEFImg/Our L&D Centre 1.png"} className=  "object-contain grow w-full aspect-[0.8] max-md:max-w-full" alt="" />
        </div>
    </section>
  );
}







// Blog's Section Extra


function BlogCard({ imageSrc, title }) {
  return (
    <article className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow max-md:mt-10">
        <div className="flex flex-col justify-center w-full min-h-[400px]">
          <img loading="lazy" src={imageSrc} alt={title} className="object-contain w-[380px] aspect-square" />
        </div>
        <div className="flex flex-col items-start mt-4 w-full max-w-[400px] max-md:pr-5">
          <h2 className="text-lg leading-6 lg:h-16 text-stone-900">{title}</h2>
          <div className="flex gap-2 mt-6 text-xs tracking-widest leading-tight text-center text-red-700 uppercase">
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