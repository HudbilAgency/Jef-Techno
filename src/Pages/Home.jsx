import React, { useRef, useState } from "react";
import MainFooter from '../Components/Footer/MainFooter';
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from '../Components/Navbar/Navbar';
import CarousalImg from "../Components/Carousel/CarousalImg";
import { Link } from "react-router-dom";




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

//button data for hover effect in What We do Section

const buttonData = [
  { image: './HomePageImg/WhatWeDoSection/Earthing Studies 2.png', text: 'Earthing studies',marginTop:"mt-[240px]",marginLeft:"ms-[0px]" , 
    title : "Grounding studies projects completed",
    totalProjects: 165, 
    indiaProjects: 123,
    gcc:42,
    description:"Earthing is an essential part of any electrical installation, essential for the safety from electrical shock, and fire and for operation of most of the protective systems of the electrical installation."
   },
  { image: './HomePageImg/WhatWeDoSection/Lightning Protection 2.png', text: 'Lightning protection system studies',marginTop:"mt-[150px]",marginLeft:"ms-[0px]",
    title : "Lightning Protection Studies Projects Completed",
    totalProjects: 233, 
    indiaProjects: 195,
    gcc:38,
    description:"The purpose of Lightning Protection System audit is to conduct lightning risk assessment and determine the level of protection required to the structure/facility as per the latest relevant standards. LPS Adequacy audit helps to manage and mitigate the risk due to lightning and protect the life and assets."
  },
  { image: './HomePageImg/WhatWeDoSection/Power System Studies 2.png', text: 'power system studies',marginTop:"mt-[50px]",marginLeft:"ms-[0px]", 
    title : "Power System Studies Projects Completed",
    totalProjects: 74, 
    indiaProjects: 58,
    gcc:16,
    description:"A Power System Study involves analyzing various aspects of an electrical power system to identify potential issues and optimize performance. These studies include load flow analysis, short circuit studies, relay coordination, arc flash analysis, and more, all aimed at enhancing system reliability and safety."
    },
  { image: './HomePageImg/WhatWeDoSection/Power Quality and Root cause Analysis 2.png', text: 'power quality & root cause analysis',marginTop:"-mt-[70px]",marginLeft:"ms-[130px]", 
    title : "Power Quality & Root Cause Studies Projects Completed",
    totalProjects: 66, 
    indiaProjects: 36,
    gcc:30,
    description:"A Power Quality Study involves a comprehensive analysis of your electrical system to identify disturbances and deviations in voltage, current, and frequency. These studies are essential for ensuring that your power supply is stable and free from issues that can lead to equipment malfunction or inefficiencies."},
  { image: './HomePageImg/WhatWeDoSection/Instrumentation Earthing 2.png', text: 'instrumentation earthing',marginTop:"-mt-[160px]",marginLeft:"ms-[20px]", 
    title : "Instrumentation Earthing Studies Projects Completed",
    totalProjects: 32, 
    indiaProjects: 24,
    gcc: "08",
    description:"An Instrumentation Earthing Study involves evaluating the earthing system of instrumentation and control systems to ensure proper grounding. This study helps prevent electrical noise, surges, and other issues that can affect the accuracy and reliability of instrumentation."
  },
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


useGSAP(() => {
  let mm = gsap.matchMedia();

  mm.add({
    // For larger screens (3072 x 1920)
    largeScreen: "(min-width: 1920px)",
    // For smaller screens (1920 x 1080)
    smallScreen: "(max-width: 1919px)"
  }, (context) => {
    let { largeScreen, smallScreen } = context.conditions;

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".container",
        toggleActions: "play none none reverse",
        start: "10% 10%",
        end: "center 35%",
        pin: true
      }
    });

    // Text Animation
    tl.to(".title1", { x: largeScreen ? 50 : 20, opacity: 0, scrub: true }, "display")
      .to(".description1", { y: largeScreen ? 20 : 10, opacity: 0 }, "display")
      .fromTo(".title2", { x: largeScreen ? 30 : 15, opacity: 0 }, { x: 0, opacity: 1 })
      .fromTo(".description2", { y: largeScreen ? 10 : 5, opacity: 0 }, { y: 0, opacity: 1 });

    // Image Animation
    tl.to(".image1", { x: largeScreen ? 750 : 400, y: largeScreen ? -750 : -800 }, "display")
      .to(".image2", { x: largeScreen ? -1020 : -910, y: largeScreen ? -580 : -580 }, "display");
  });
});


  const [language, setLanguage] = useState('English');
  const [currentIndex, setCurrentIndex] = useState(0);

  const toggleLanguage = () => {
    setLanguage(prevLang => (prevLang === 'English' ? 'Français' : 'English'));
  };

  const handleButtonClick = () => {
    setCurrentIndex((currentIndex + 1) % carouselData.length);
  };

  const currentData = carouselData[currentIndex];



  // What we do Sectionn 

  // const CircleItem = ({ text, className }) => (
  //   <div className={`px-8 py-16 max-w-full rounded-full border border-solid ${className}`}>
  //     {text}
  //   </div>
  // );
  
 
  //   const circleItems = [
  //     { text: "Earthing studies", className: "bg-red-700 border-red-700" },
  //     { text: "Lightning Protection System Studies", className: "" },
  //     { text: "Power Quality & Root cause Analysis", className: "border-stone-300" },
  //     { text: "Power System Studies", className: "border-stone-300" },
  //     { text: "Instrumentation Earthing", className: "" }
  //   ];

    
    const totalSlides = 3;




  return (
    <>



< Navbar />
    <div className="relative w-full h-screen overflow-hidden">
      <div ref={carouselRef} className="bg-no-repeat flex w-[300%] h-full ">
        <div className="relative w-full h-full ">
          <video autoPlay loop muted className="absolute size-full object-cover" >
              <source src="./HomePageImg/Banner 1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          <div className="2xl:mt-[35rem] p-4 inset-y-2/4 md:inset-0 md:p-0 lg:mx-[200px] flex relative flex-col self-center w-full max-w-[1310px] max-md:mt-10 max-md:max-w-full ">
            <h1 className="lg:text-6xl  2xl:text-7xl font-bold h-20 2xl:h-36 my-auto tracking-wider text-white max-md:max-w-full max-md:text-4xl">
            THINK ELECTRICAL, <br />
            THINK JEF
            </h1>
            <div className="flex gap-2 lg:gap-6 items-center self-start mt-12 text-2xl uppercase text-neutral-900 tracking-[3px] max-md:mt-10">
              <button>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8855ae14d9effa10b9317a704535212615d40fdec755767f2e9941cd3e8401cc?placeholderIfAbsent=true&apiKey=60c6eb6ce37644fdb727618799199006"
                  alt="Electrical icon"
                  className="bg-repeat object-contain w-9 lg:w-16"
                />
              </button>
              <button className="gap-2.5 self-stretch px-2.5 py-1 lg:py-4 my-auto bg-white border border-solid border-zinc-900 border-opacity-10 text-sm h-[2.5rem] lg:text-2xl 2xl:min-h-[64px] rounded-[50px] w-[10rem] 2xl:w-[239px]">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div  className="relative w-full h-full">
           <video autoPlay loop muted className="absolute size-full object-cover" >
              <source src="./HomePageImg/Banner 2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
        <div className="2xl:mt-[35rem] p-4 inset-y-60 md:inset-0 md:p-0 lg:mx-[200px] flex relative flex-col self-center w-full max-w-[1310px] max-md:mt-10 max-md:max-w-full ">
            <h1 className="lg:text-6xl  2xl:text-7xl font-bold h-36 2xl:h-36 my-auto tracking-wider text-white max-md:max-w-full max-md:text-4xl">
            END-to-END SOLUTIONS 
            <br />FOR ELECTRICAL PROTECTION
            </h1>
            <div className="flex gap-2 lg:gap-6 items-center self-start mt-12 text-2xl uppercase text-neutral-900 tracking-[3px] max-md:mt-10">
              <button>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8855ae14d9effa10b9317a704535212615d40fdec755767f2e9941cd3e8401cc?placeholderIfAbsent=true&apiKey=60c6eb6ce37644fdb727618799199006"
                  alt="Electrical icon"
                  className="bg-repeat object-contain w-9 lg:w-16"
                />
              </button>
              <button className="gap-2.5 self-stretch px-2.5 py-1 lg:py-4 my-auto bg-white border border-solid border-zinc-900 border-opacity-10 text-sm h-[2.5rem] lg:text-2xl 2xl:min-h-[64px] rounded-[50px] w-[10rem] 2xl:w-[239px]">
                Learn More
              </button>
            </div>
          </div>
        
        </div>
        <div className="relative w-full h-full">
             <video autoPlay loop muted className="absolute size-full object-cover" >
                <source src="./HomePageImg/Banner 3.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        <div className="2xl:mt-[35rem] px-1 inset-y-2/4 md:inset-0 md:p-0 lg:mx-[200px] flex relative flex-col self-center w-full max-w-[1310px] max-md:mt-10 max-md:max-w-full ">
            <h1 className="lg:text-6xl  2xl:text-7xl font-bold h-20 2xl:h-36 my-auto tracking-wider text-white max-md:max-w-full max-md:text-4xl">
            EXCELLENCE THROUGH DIGITALISATION
            </h1>
            <div className="flex gap-2 lg:gap-6 items-center self-start mt-12 text-2xl uppercase text-neutral-900 tracking-[3px] max-md:mt-10">
              <button>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8855ae14d9effa10b9317a704535212615d40fdec755767f2e9941cd3e8401cc?placeholderIfAbsent=true&apiKey=60c6eb6ce37644fdb727618799199006"
                  alt="Electrical icon"
                  className="bg-repeat object-contain w-9 lg:w-16"
                />
              </button>
              <button className="gap-2.5 self-stretch px-2.5 py-1 lg:py-4 my-auto bg-white border border-solid border-zinc-900 border-opacity-10 text-sm h-[2.5rem] lg:text-2xl 2xl:min-h-[64px] rounded-[50px] w-[10rem] 2xl:w-[239px]">
                Learn More
              </button>
            </div>
          </div>

        </div>
      </div>
    <div ref={coverRef} className="absolute  w-full h-full bg-zinc-800"></div>
    {index > 0 && (
        <div
          className="absolute top-1/2 left-5 transform -translate-y-1/2 cursor-pointer border border-white rounded-full h-12 w-12 flex items-center justify-center"
          onClick={handlePrev}
        >
          <img src="./HomePageImg/LeftArrow.png" alt="Left Arrow" />
        </div>
      )}
      {index < totalSlides - 1 && (
        <div
          className="absolute top-1/2 right-5 transform -translate-y-1/2 cursor-pointer border border-white rounded-full h-12 w-12 flex items-center justify-center"
          onClick={handleNext}
        >
          <img src="./HomePageImg/RightArrow.png" alt="Right Arrow" />
        </div>
      )}
    </div>



  {/* const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3; // Total number of slides

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleNext = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  }; */}





    {/*  What we do Section */}

    < WhatWeDoSection />



    {/* <section className="flex h-screen overflow-hidden flex-col bg-zinc-800">
      <div className="flex relative flex-col px-20 pt-16 w-full min-h-[1126px] max-md:px-5 max-md:py-24 max-md:max-w-full">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a2ceda35d03e9aba12e6edcbd87485058a157c6b826569162b32f9a272e9db4?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244" alt="" className="object-cover absolute inset-0 size-full" />
        <div className="flex relative  flex-col mb-0 w-full max-w-[1467px] max-md:mb-2.5 max-md:max-w-full">
          <header className="flex flex-wrap gap-5 justify-between text-white uppercase tracking-[3px] max-md:max-w-full">
            <div className="flex flex-col self-start text-3xl font-bold">
              <h1 className="">what we do</h1>
              <div  className="shrink-0 mt-5  border border-zinc-400 thin-border" />
            </div>
            <div className="flex flex-col text-3xl font-medium leading-10 max-md:max-w-full">
              <div className="shrink-0 mt-6  border border-zinc-400 thin-border max-md:max-w-full" />
              <h2 className="mt-7 max-md:max-w-full">Grounding studies projects completed</h2>
            </div>
          </header>
          <div className="mt-12 w-full max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <div className="flex flex-row w-6/12 max-md:ml-0 max-md:w-full">
                <div className="grow mt-24 max-md:mt-10 max-md:max-w-full">
                  <div className="flex gap-5 mx-20 max-md:flex-col">
                    {circleItems.map((item, index) => (
                      <div key={index} className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                        <CircleItem text={item.text} className={`text-base leading-6 text-center text-white uppercase w-[201px] ${item.className}`} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col items-start w-full max-md:mt-10 max-md:max-w-full">
                  <div className="max-w-full w-[413px]">
                    <div className="flex gap-5 max-md:flex-col">
                      <div className="flex flex-col w-9/12 max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow uppercase tracking-[3px] max-md:mt-10">
                          <h3 className="text-2xl font-bold items-start self-start text-green-600">Total Projects</h3>
                          <div className="flex flex-col items-start self-start mt-5 text-2xl text-white whitespace-nowrap">
                            <p>165</p>
                            <h4 className="self-stretch my-5 text-2xl font-bold text-center text-green-600">gcc</h4>
                            <p>42</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col uppercase whitespace-nowrap tracking-[3px] max-md:mt-10">
                          <h3 className="text-2xl font-bold text-center text-green-600">INDIA</h3>
                          <p className="self-start mt-5 text-2xl text-white">123</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h3 className="mt-10 text-2xl font-bold text-center text-green-500 uppercase tracking-[3px] max-md:max-w-full">cAPACITY | UNIT | SQM AREA</h3>
                  <p className="self-stretch mt-12 text-2xl leading-9 text-white max-md:mt-10 max-md:max-w-full">
                    Earthing is an essential part of any electrical installation, essential for the safety from electrical shock, and fire and for operation of most of the protective systems of the electrical installation.
                  </p>
                  <button className="gap-2.5 self-stretch px-2.5 py-2 mt-14 text-2xl text-red-700 uppercase bg-white min-h-[42px] h-14 rounded-[50px] w-[240px] max-md:mt-10">
                    Read more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}









    {/*  Why choose JEF Section  */}

    <main className="flex bg-fixed lg:px-[200px] overflow-hidden flex-col px-16 py-6 bg-stone-900 ">
      <header className="flex flex-row gap-7 w-full max-w-[1522px] max-md:max-w-full">
      <img className="h-32 my-auto" src="./HomePageImg/WhyChooseJEFImg/ScrollImg.png" alt="ScrollPng" />
      <FeatureSection/>
      </header>
      
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



  <section>
      <main className="lg:px-[200px] flex overflow-hidden flex-col justify-center items-center px-20 pt-20 w-full bg-neutral-100 max-md:px-5  max-md:max-w-full">
        <div className="flex flex-col items-start mb-0 w-full max-w-[1480px]  max-md:max-w-full">
          <header className="flex flex-wrap gap-5 justify-between self-stretch w-full text-red-700 uppercase max-md:max-w-full">
            <h1 className="text-6xl font-bold leading-none tracking-[3.36px]">BLOGS</h1>
            <div className="flex gap-7 text-base tracking-[3px]">
              <div className="grow my-auto">99 ARTICLES IN TOTAL</div>
              <Link to="/Blog">
                  <button>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/951171544b272ca27d823631886443b3e62258383a3a68c83393b1447e2eb810?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244"
                      alt=""
                      className="object-contain shrink-0 w-14 aspect-square"
                    />
                  </button>
              </Link>
            </div>
          </header>
          <nav className="flex gap-8 mt-16 ml-3.5 text-xl uppercase whitespace-nowrap tracking-[3.36px] max-md:mt-10 max-md:ml-2.5">
            <a href="#newest" className="text-red-700 basis-auto">Newest</a>
            <a href="#oldest" className="text-neutral-900">Oldest</a>
          </nav>
        </div>
      </main>
          <section>
          < CarousalImg/>
          </section>
    </section>

    
{/* 
 < BlogCarousel />
< CarousalImg/>
 */}








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




// what we do Section


const WhatWeDoSection = () => {

  const [hoveredButtonIndex, setHoveredButtonIndex] = useState(null);

  const [showSection, setShowSection] = useState(false);
  const videoRef = useRef(null);

  const handleVideoEnd = () => {
    setFadeOut(true);
    // Wait for the fade-out effect to complete before showing the section
    setTimeout(() => {
      setShowSection(true);
    }, 400); // Duration of the fade-out effect
  };

  const [fadeOut, setFadeOut] = useState(false);

  return (
    <section className="flex h-screen overflow-hidden flex-col bg-zinc-800">
       {!showSection && (
        <div className={`flex relative flex-col px-20 pt-16 w-full min-h-[1126px] max-md:px-5 max-md:py-24 max-md:max-w-full transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
          <video
            ref={videoRef}
            onEnded={handleVideoEnd}
            className="object-cover absolute inset-0 size-full"
            autoPlay
            muted
          >
            <source src="./HomePageImg/Earth zoom.mp4" type="video/mp4" />
          </video>
        </div>
      )}
{/* 
      <div className="w-[200px] h-full mx-auto perspective-[1000px] backface-visibility-hidden bg-white">
            <button className="relative top-1/2 left-1/2 -ml-[50px] -mt-[50px] w-[100px] h-[100px] text-lg font-light text-center tracking-tight leading-[100px] text-white uppercase rounded-full bg-[#5a99d4] cursor-pointer animate-[pulse_1.5s_infinite] hover:animate-none">
              Pulse
            </button>
          </div> */}

{/* <div className="flex justify-center items-center h-screen">
            <div className="bg-blue-500 rounded-full w-48 h-48 flex justify-center items-center">
                <div className="bg-red-500 rounded-full w-44 h-44"></div>
            </div>
        </div> */}

      {/* Section Content */}
      {showSection && (
       <section className="flex h-screen overflow-hidden flex-col bg-zinc-800 ">
       <div className="flex relative flex-col px-20 pt-12 w-full min-h-[1126px] max-md:px-5 max-md:py-24 max-md:max-w-full">
         <img
           loading="lazy"
           src={buttonData[hoveredButtonIndex]?.image || './HomePageImg/WhatWeDoSection/Earthing Studies 1.png'}
           alt=""
           className="transition-all duration-5900 object-cover absolute inset-0 size-full"
         />
         <div className="flex 2xl:mx-[150px] relative flex-col mb-0  w-full max-w-[1467px] max-md:mb-2.5 max-md:max-w-full">
           <header className="flex flex-wrap  justify-between text-white uppercase tracking-[3px] max-md:max-w-full">
             <div className="flex flex-col self-start text-3xl font-bold">
               <h1 className="">what we do</h1>
               <div className="shrink-0 mt-5 border border-zinc-400 thin-border" />
             </div>
             <div className="flex flex-col text-3xl font-medium leading-10 max-md:max-w-full">
               <div className="shrink-0 mt-6 border border-zinc-400 thin-border max-md:max-w-full" />
               <h2 className="mt-8 w-[35rem] max-md:max-w-full">{buttonData[hoveredButtonIndex]?.title || 'Grounding studies projects completed'}</h2>
             </div>
           </header>
           <div className="mt-12 w-full max-md:mt-10 max-md:max-w-full">
             <div className="flex gap-5 max-md:flex-col">
               <div className="flex flex-row w-6/12 max-md:ml-0 max-md:w-full">
                 <div className="grow max-md:mt-10 max-md:max-w-full ">
                   <div className="flex flex-wrap gap-5 h-full max-md:flex-col">
                     {buttonData.map((button, index) => (
                        <button
                         key={index}
                         className={`border-[.5px] p-4 border-white animate-[pulse_2s_infinite] hover:animate-none rounded-full w-44 h-44 bg-cover bg-center  cursor-pointer transition-all duration-300 ease-in-out ${button.marginTop} ${button.marginLeft} ${hoveredButtonIndex === index ? 'bg-red-500 border-none'  : 'bg-transparent'}`}
                         onMouseEnter={() => setHoveredButtonIndex(index)}
                         onMouseLeave={() => setHoveredButtonIndex(null)}
                       >
                         <span className="text-white text-sm uppercase ">{button.text}</span>
                       </button>                     
                     ))}
                   </div>
                 </div>
               </div>
               <div className="flex flex-col ml-[13rem] w-5/12 max-md:ml-0 max-md:w-full">
                 <div className="flex flex-col items-start w-full max-md:mt-10 max-md:max-w-full">
                   <div className="max-w-full w-[413px]">
                     <div className="flex gap-5 max-md:flex-col">
                       <div className="flex flex-col w-9/12 max-md:ml-0 max-md:w-full">
                         <div className="flex flex-col grow uppercase tracking-[3px] max-md:mt-10">
                           <h3 className="text-2xl font-bold items-start self-start text-green-600">Total  Projects</h3>
                           <div className="flex flex-col items-start self-start mt-5 text-2xl text-white whitespace-nowrap">
                             <p>{buttonData[hoveredButtonIndex]?.totalProjects || 165 }</p>
                             <h4 className="self-stretch my-5 text-2xl font-bold text-center text-green-600">gcc</h4>
                             <p>{buttonData[hoveredButtonIndex]?.gcc || 42 }</p>
                           </div>
                         </div>
                       </div>
                       <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                         <div className="flex flex-col uppercase whitespace-nowrap tracking-[3px] max-md:mt-10">
                           <h3 className="text-2xl font-bold text-center text-green-600">INDIA</h3>
                           <p className="self-start mt-5 text-2xl text-white">{buttonData[hoveredButtonIndex]?.indiaProjects || 123 }</p>
                         </div>
                       </div>
                     </div>
                   </div>
                   <div>
                   <h3 className="mt-10 text-2xl font-bold text-start text-green-500 uppercase tracking-[3px] max-md:max-w-full">cAPACITY | UNIT | SQM AREA</h3>
                   <p className="self-stretch  mt-6 text-xl h-44 leading-9 text-white max-md:mt-10 max-md:max-w-full">
                   {buttonData[hoveredButtonIndex]?.description || "Earthing is an essential part of any electrical installation, essential for the safety from electrical shock, and fire and for operation of most of the protective systems of the electrical installation." }
                   </p>
                   <button className="gap-2.5 self-stretch px-2.5 py-2 mt-14 text-2xl text-red-700 uppercase bg-white min-h-[42px] h-14 rounded-[50px] w-[240px] max-md:mt-10">
                     Read more
                   </button>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
     </section>
      )}
    </section>
  );
};








// const BlogCarousel = () => {
//   const [startIndex, setStartIndex] = useState(0);

//   const handleNext = () => {
//     if (startIndex + 3 < blogData.length) {
//       setStartIndex((prevIndex) => prevIndex + 1);
//     }
//   };

//   return (
//     <section>
//       <main className="lg:px-[200px] flex overflow-hidden flex-col justify-center items-center px-20 py-20 w-full bg-neutral-100 max-md:px-5 max-md:pb-24 max-md:max-w-full">
//         <div className="flex flex-col items-start mb-0 w-full max-w-[1480px] max-md:mb-2.5 max-md:max-w-full">
//           <header className="flex flex-wrap gap-5 justify-between self-stretch w-full text-red-700 uppercase max-md:max-w-full">
//             <h1 className="text-5xl font-bold leading-none tracking-[3.36px]">BLOGS</h1>
//             <div className="flex gap-7 text-base tracking-[3px]">
//               <div className="grow my-auto">99 ARTICLES IN TOTAL</div>
//               <button onClick={handleNext} disabled={startIndex + 3 >= blogData.length}>
//                 <img
//                   loading="lazy"
//                   src="https://cdn.builder.io/api/v1/image/assets/TEMP/951171544b272ca27d823631886443b3e62258383a3a68c83393b1447e2eb810?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244"
//                   alt=""
//                   className="object-contain shrink-0 w-14 aspect-square"
//                 />
//               </button>
//             </div>
//           </header>
//           <nav className="flex gap-8 mt-16 ml-3.5 text-xl uppercase whitespace-nowrap tracking-[3.36px] max-md:mt-10 max-md:ml-2.5">
//             <a href="#newest" className="text-red-700 basis-auto">Newest</a>
//             <a href="#oldest" className="text-neutral-900">Oldest</a>
//           </nav>
//           <section className="mt-10 w-full max-w-[1400px] max-md:max-w-full">
//             <div className="flex justify-between items-center">
              
//               <div className="flex gap-5 max-md:flex-col w-full justify-center">
//                 {blogData.slice(startIndex, startIndex + 3).map((blog, index) => (
//                   <BlogCard key={index} imageSrc={blog.imageSrc} title={blog.title} />
//                 ))}
//               </div>
              
//             </div>
//           </section>
//         </div>
//       </main>
//     </section>
//   );
// };














// Why Choose JEF Section 



function FeatureSection() {
  return (
    <section className="overflow-hidden shrink-0 container self-center my-20 w-full h-screen max-w-[1472px] max-md:mt-10 max-md:max-w-full ">
      <div className=" text-3xl mt-10 text-center font-semibold tracking-widest text-red-700 uppercase max-md:ml-2.5">
              Why choose JEF ?
            </div>
      <div className={`flex gap-5 max-md:flex-col`}>
        <div className={` image1 flex  flex-col 2xl:w-[28%] w-[36%] max-md:ml-0 max-md:w-full`}>
          <img loading="lazy" src={"./HomePageImg/WhyChooseJEFImg/Smart Digitization 1.png"} className=  "object-contain grow w-full aspect-[0.8] max-md:max-w-full" alt="" />
        </div>
        
        <div className={` box flex flex-col ml-5 w-[64%] max-md:ml-0 max-md:w-full`}>
          <div className="flex flex-col grow items-start mt-7 text-white max-md:max-w-full">
            <h2 className="title1 mt-10  relative 2xl:-inset-x-32 text-7xl font-bold uppercase lg:w-[50%] tracking-[3px] max-md:mt-10  max-md:text-4xl">
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
      <div className={`ml-auto mt-28 2xl:mr-[2rem] image2 flex 2xl:w-[28%] flex-col w-[32%] max-md:w-full`}>
          <img loading="lazy" src={"./HomePageImg/WhyChooseJEFImg/Our L&D Centre 1.png"} className=  "object-contain grow w-full aspect-[0.8] max-md:max-w-full" alt="" />
        </div>
    </section>
  );
}







// Blog's Section Extra


// function BlogCard({ imageSrc, title }) {
//   return (
//     <article className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
//       <div className="flex flex-col grow max-md:mt-10">
//         <div className="flex flex-col justify-center w-full min-h-[400px]">
//           <img loading="lazy" src={imageSrc} alt={title} className="object-contain w-[380px] aspect-square" />
//         </div>
//         <div className="flex flex-col items-start mt-4 w-full max-w-[400px] max-md:pr-5">
//           <h2 className="text-lg leading-6 lg:h-16 text-stone-900">{title}</h2>
//           <div className="flex gap-2 mt-6 text-xs tracking-widest leading-tight text-center text-red-700 uppercase">
//             <div className="grow">Read more</div>
//             <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c99385a3888a56e12aa67bbca0d3363e44c74249fcb42246da50d1f716869d4?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244" alt="" className="object-contain shrink-0 aspect-[2.07] w-[31px]" />
//           </div>
//         </div>
//       </div>
//     </article>
//   );
// }


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