import React, { useRef, useState , useEffect } from "react";
import MainFooter from '../Components/Footer/MainFooter';
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from '../Components/Navbar/Navbar';
import { useGSAP } from '@gsap/react'
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ContactUs from "../Components/ContactUs/ContactUs";




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
  { image: './HomePageImg/WhatWeDoSection/Earthing Studies 2.png', text: 'Earthing studies',marginTop:" lg:mt-[240px]",marginLeft:"lg:ms-[0px]" , 
    title : "Grounding studies projects completed",
    path: '/EarthingStudies',
    totalProjects: 165, 
    indiaProjects: 123,
    gcc:42,
    description:"Earthing is an essential part of any electrical installation, essential for the safety from electrical shock, and fire and for operation of most of the protective systems of the electrical installation."
   },
  { image: './HomePageImg/WhatWeDoSection/Lightning Protection 2.png', text: 'Lightning protection system studies',marginTop:"-mt-[70%] lg:mt-[150px]",marginLeft:"lg:ms-[0px]",
    title : "Lightning Protection Studies Projects Completed",
    path: '/LightningProtectionStudies',
    totalProjects: 233, 
    indiaProjects: 195,
    gcc:38,
    description:"The purpose of Lightning Protection System audit is to conduct lightning risk assessment and determine the level of protection required to the structure/facility as per the latest relevant standards. LPS Adequacy audit helps to manage and mitigate the risk due to lightning and protect the life and assets."
  },
  { image: './HomePageImg/WhatWeDoSection/Power System Studies 2.png', text: 'power system studies',marginTop:"-mt-[100%] lg:mt-[50px]",marginLeft:"lg:ms-[0px]", 
    title : "Power System Studies Projects Completed",
    path: '/PowerSystemStudies',
    totalProjects: 74, 
    indiaProjects: 58,
    gcc:16,
    description:"A Power System Study involves analyzing various aspects of an electrical power system to identify potential issues and optimize performance. These studies include load flow analysis, short circuit studies, relay coordination, arc flash analysis, and more, all aimed at enhancing system reliability and safety."
    },
  { image: './HomePageImg/WhatWeDoSection/Power Quality and Root cause Analysis 2.png', text: 'power quality & root cause analysis',marginTop:"mt-[20%] lg:-mt-[50px]",marginLeft:"lg:ms-[130px]", 
    title : "Power Quality & Root Cause Studies Projects Completed",
    path: '/PowerQualityStudies',
    totalProjects: 66, 
    indiaProjects: 36,
    gcc:30,
    description:"A Power Quality Study involves a comprehensive analysis of your electrical system to identify disturbances and deviations in voltage, current, and frequency. These studies are essential for ensuring that your power supply is stable and free from issues that can lead to equipment malfunction or inefficiencies."},
  { image: './HomePageImg/WhatWeDoSection/Instrumentation Earthing 2.png', text: 'instrumentation earthing',marginTop:"-mt-[40%] lg:-mt-[160px]",marginLeft:"lg:ms-[20px]", 
    title : "Instrumentation Earthing Studies Projects Completed",
    totalProjects: 32, 
    indiaProjects: 24,
    gcc: "08",
    description:"An Instrumentation Earthing Study involves evaluating the earthing system of instrumentation and control systems to ensure proper grounding. This study helps prevent electrical noise, surges, and other issues that can affect the accuracy and reliability of instrumentation."
  },
];



function Home() {


  // For blogs Animation 

  useEffect(() => {
    // Select all elements with the 'X-axis-anm' class and apply staggered animation
    gsap.fromTo(
      gsap.utils.toArray('.X-axis-card-anm'),
      { opacity: 0, x: 120 },
      {
        x: 0,
        opacity: 1,
        duration: 1.1,
        stagger: 0.3, // 0.3s delay between each card animation
        scrollTrigger: {
          trigger: '.card-slider',
          start: 'top 80%', // Adjusted start position
          end: 'bottom 20%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);







  useEffect(() => {
    
    gsap.utils.toArray('.Y-axis-text').forEach((element) => {
        gsap.fromTo(
            element,
            { opacity: 0 , y: 50 },
            {   y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: element,
                    start: 'top 70%',
                    toggleActions: 'play none none none',
                      },
                  }
              );
          });
      }, []);

  
  
  



// For X-axis animation ----------------------------------------

      useEffect(() => {
        gsap.utils.toArray('.X-axis-Title').forEach((element) => {
            gsap.fromTo(
                element,
                { opacity: 0 , x: 120 },
                {   x: 0,
                    opacity: 1,
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: element,
                        start: 'top 70%',
                        toggleActions: 'play none none none',
                          },
                      }
                  );
              });
          }, []);


  const itemsPerPageMobile = 1;  // 1 card on mobile
  const itemsPerPageTablet = 2;  // 2 cards on tablet
  const itemsPerPageDesktop = 3; // 3 cards on desktop


  // Responsive value for `itemsPerPage`
  const itemsPerPage = window.innerWidth >= 1024 ? itemsPerPageDesktop
                     : window.innerWidth >= 768 ? itemsPerPageTablet
                     : itemsPerPageMobile;// Number of cards visible at once
  const totalItems = blogData.length; // Total number of blog cards

  // Function to handle the next slide
  const nextSlide = () => {
    if (currentIndex < totalItems - itemsPerPage) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Function to handle the previous slide
  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

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
    // For larger screens (1024px and above)
    largeScreen: "(min-width: 1025px)",
    // For mobile screens (1024px and below)
    smallScreen: "(max-width: 1024px)"
  }, (context) => {
    let { largeScreen, smallScreen } = context.conditions;

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".container",
        toggleActions: "play none none reverse",
        start: "10 10%",
        end: "center 50%",
        pin: true
      }
    });

    // Animations for larger screens (1025px and above)
    if (largeScreen) {
      // Text Animation for larger screens
      tl.to(".title1", { x: "3vw", opacity: 0, scrub: true }, "display")
        .to(".description1", { y: "1rem", opacity: 0 }, "display")
        .fromTo(".title2", { x: "2vw", opacity: 0 }, { x: 0, opacity: 1 })
        .fromTo(".description2", { y: "0.5rem", opacity: 0 }, { y: 0, opacity: 1 });

      // Image Animation for larger screens
      tl.to(".image1", { x: "60rem", y: "-40rem" }, "display")
        .to(".image2", { x: "-63rem", y: "-40rem" }, "display")
        .to(".buttonRM0", { x: "300rem" }, "display")
        .fromTo(".buttonRM1", { x: "20rem", opacity: 0 }, { x: "0rem", opacity: 1 });
    }

    // Animations for mobile screens (1024px and below)
    if (smallScreen) {
      // Image and text animation for mobile view
      tl.to(".SmImg1", { x: "-150%" }, "display")
        .to(".SmImg2", { x: "-113%" }, "display")
        .to(".textSM1", { y: "200%" }, "display")
        .to(".textSM2", { y: "-215%" }, "display");
    }
  });
});




  const [currentIndex, setCurrentIndex] = useState(0);


    
    const totalSlides = 3;



    const [marginLeft, setMarginLeft] = useState("1%");

    const calculateMarginLeft = () => {
      if (window.innerWidth >= 768) {
        return currentIndex === 0 ? "4%" : "0%"; // 4% margin for md and larger screens
      } else {
        return currentIndex === 0 ? "1%" : "0%"; // 1% margin for smaller screens
      }
    };
  
    useEffect(() => {
      // Set initial margin based on screen size
      setMarginLeft(calculateMarginLeft());
  
      // Update margin when resizing
      const handleResize = () => {
        setMarginLeft(calculateMarginLeft());
      };
      window.addEventListener('resize', handleResize);
  
      // Cleanup event listener on component unmount
      return () => window.removeEventListener('resize', handleResize);
    }, [currentIndex]);


    const [showVideo, setShowVideo] = useState(false);
    const [player, setPlayer] = useState(null);
    const [fadeClass, setFadeClass] = useState('');
  
    // Load the YouTube API script
    useEffect(() => {
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  
      // This function is called by the YouTube API
      window.onYouTubeIframeAPIReady = () => {
        const ytPlayer = new window.YT.Player('yt-player', {
          events: {
            onStateChange: onPlayerStateChange,
          },
        });
        setPlayer(ytPlayer);
      };
    }, []);
  
    // Handle the end of the video
    const onPlayerStateChange = (event) => {
      if (event.data === window.YT.PlayerState.ENDED) {
        setShowVideo(false); // Close the video overlay
      }
    };
  
    // Function to handle button click and show the video
    const handlePlayVideo = () => {
      setShowVideo(true);
      if (player) {
        player.playVideo();
      }
      setTimeout(() => setFadeClass('opacity-100'), 10);
    };
  
    // Function to close the video manually
    const closeVideo = () => {
      setShowVideo(false);
      if (player) {
        player.stopVideo();
      }
      setTimeout(() => setShowVideo(false), 300);
    };


    useEffect(() => {
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
      if (isIOS) {
        document.querySelectorAll("video").forEach(video => {
          video.play();
        });
      }
    }, []);
    
  


  return (
    <>



< Navbar />
    <div className="relative w-full h-screen overflow-hidden">
      <div ref={carouselRef} className="bg-no-repeat flex w-[300%] h-full ">
        <div className="relative w-full h-full ">
          <video autoPlay loop muted playsInline className="absolute size-full object-cover" >
              <source src="./HomePageImg/Banner 1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          <div className="inset-y-2/3 xl:mt-[2%] lg:inset-x-20 p-4 flex relative flex-col self-center w-full max-md:mt-10 max-md:max-w-full ">
            <h1 className="xl:text-6xl  lg:text-5xl md:text-4xl text-3xl font-bold h-20 2xl:h-36 my-auto tracking-wider text-white max-md:max-w-full max-md:text-4xl">
            THINK ELECTRICAL, <br />
            THINK JEF
            </h1>
            <div className="flex gap-2 lg:gap-6 items-center self-start text-2xl uppercase text-neutral-900 tracking-[3px] max-md:mt-10">
            <div className="flex flex-col items-center">
                 {/* Button to trigger the video */}
                <button onClick={handlePlayVideo} className="mb-4">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8855ae14d9effa10b9317a704535212615d40fdec755767f2e9941cd3e8401cc?placeholderIfAbsent=true&apiKey=60c6eb6ce37644fdb727618799199006"
                    alt="Electrical icon"
                    className="bg-repeat object-contain w-9 lg:w-14"
                  />
                </button>

                {/* Conditionally render the iframe video at 90% screen width */}
                {showVideo && (
                  <div className="hidden fixed inset-0 lg:flex items-center justify-center bg-black bg-opacity-75 z-50">
                    <div className="w-[90vw] h-[90%]">
                      {/* Close button */}
                      <div className="-mt-[1%] flex justify-end">
                        <button
                          className="text-white border-white border border-spacing-2"
                          onClick={closeVideo}
                        >
                          <img
                            src="./HomePageImg/NavbarImg/CLoseMenuLogo.png"
                            alt="closeButton"
                            className="w-[2vw]"
                          />
                        </button>
                      </div>

                      {/* YouTube Iframe */}
                      <iframe
                        id="yt-player"
                        className="w-full h-full object-contain rounded-md"
                        src="https://www.youtube.com/embed/9xiS0T3smxM?enablejsapi=1&autoplay=1"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                )}
          </div>
            </div>
          </div>
        </div>
        <div  className="relative w-full h-full">
           <video autoPlay loop muted playsInline className="absolute size-full object-cover" >
              <source src="./HomePageImg/Banner 2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
        <div className="inset-y-[26rem] xl:mt-[2%] lg:inset-x-20 md:inset-y-2/3 0 p-4 flex relative flex-col self-center w-full  max-md:mt-10 max-md:max-w-full ">
            <h1 className="xl:text-6xl lg:text-5xl md:text-4xl text-3xl font-bold h-32 2xl:h-36 my-auto tracking-wider text-white max-md:max-w-full max-md:text-4xl">
            END-to-END SOLUTIONS 
            <br />FOR ELECTRICAL PROTECTION
            </h1>
            <div className="flex gap-2 lg:gap-6 items-center self-start text-2xl uppercase text-neutral-900 tracking-[3px] max-md:mt-10">
              <button>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8855ae14d9effa10b9317a704535212615d40fdec755767f2e9941cd3e8401cc?placeholderIfAbsent=true&apiKey=60c6eb6ce37644fdb727618799199006"
                  alt="Electrical icon"
                  className="bg-repeat object-contain w-9 lg:w-14"
                />
              </button>
            </div>
          </div>
        
        </div>
        <div className="relative w-full h-full">
             <video autoPlay loop muted playsInline className="absolute size-full object-cover" >
                <source src="./HomePageImg/Banner 3.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        <div className="inset-y-2/3 xl:mt-[2%] lg:inset-x-20 p-4 flex relative flex-col self-center w-full max-w-[70%] max-md:mt-10 max-md:max-w-full ">
            <h1 className="xl:text-6xl lg:text-5xl md:text-4xl text-3xl font-bold h-20 2xl:h-36 my-auto tracking-wider text-white max-md:max-w-full max-md:text-4xl">
            EXCELLENCE THROUGH DIGITALISATION
            </h1>
            <div className="flex gap-2 lg:gap-6 items-center self-start text-2xl uppercase text-neutral-900 tracking-[3px] max-md:mt-10">
              <button>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8855ae14d9effa10b9317a704535212615d40fdec755767f2e9941cd3e8401cc?placeholderIfAbsent=true&apiKey=60c6eb6ce37644fdb727618799199006"
                  alt="Electrical icon"
                  className="bg-repeat object-contain w-9 lg:w-14"
                />
              </button>
            </div>
          </div>

        </div>
      </div>
    <div ref={coverRef} className="absolute w-full h-full bg-zinc-800"></div>
    {index > 0 && (
        <div
          className="absolute top-1/2 lg:left-24 transform -translate-y-1/2 cursor-pointer border border-white rounded-full h-12 w-12 flex items-center justify-center"
          onClick={handlePrev}
        >
          <img src="./HomePageImg/LeftArrow.png" alt="Left Arrow" />
        </div>
      )}
      {index < totalSlides - 1 && (
        <div
          className="absolute top-1/2 lg:right-20 right-0 transform -translate-y-1/2 cursor-pointer border border-white rounded-full h-12 w-12 flex items-center justify-center"
          onClick={handleNext}
        >
          <img src="./HomePageImg/RightArrow.png" alt="Right Arrow" />
        </div>
      )}
    </div>







    {/*  What we do Section */}

    <section>
    < WhatWeDoSection />

    </section>












    {/*  Why choose JEF Section  */}

    <section className="flex bg-fixed h-screen overflow-hidden  px-16 py-6 bg-stone-900 ">
    <img className="h-32 my-auto hidden lg:block" src="./HomePageImg/WhyChooseJEFImg/ScrollImg.png" alt="ScrollPng" />
    <main className="lg:px-[180px]">
      <header className="flex flex-row gap-7 w-full max-w-[1522px] max-md:max-w-full">
      <FeatureSection/>
      </header>
      
    </main>

    </section>



    <main className="flex overflow-hidden flex-col">
      <section className="overflow-hidden relative w-full">
        <img src="./HomePageImg/FounderMsgSection.png" alt="foundersMsg"  className="hidden lg:block object-cover absolute inset-0 h-full w-full" />
        <img src="./AboutUs/FAQ-Bg-Img.png" alt="MobileViewBg" className="lg:hidden object-cover absolute inset-0 size-full"/>
        <div className="flex gap-5 p-4 max-md:flex-col">
          <div className="flex lg:mx-[100px] flex-col  max-md:ml-0 max-md:w-full">
            <div className="flex z-10 my-32 mt-40 flex-col items-start  mr-0 font-light text-red-700 max-md:mt-10 max-md:max-w-full">
              <h1 className="text-3xl Y-axis-text font-bold uppercase tracking-[3px] max-md:max-w-full ">
                Founder message
              </h1>
              <p className="self-stretch Y-axis-text my-20 lg:w-[35vw] text-lg lg:text-xl  leading-10 text-stone-900 max-md:mt-10 max-md:max-w-full">
                Every single day, we endeavour to make more customers across continents benefit from our work as a step to enhance reliability & safety in the electrical network.
                I hope you choose to work with us. For some reason, if you choose otherwise, I will look forward to the next opportunity to work together. Thank you!
              </p>
              <h2 className="text-xl lg:text-2xl Y-axis-text font-semibold lg:mt-10 max-md:text-4xl">{"Prashanth BG"}</h2>
              <p className=" text-xl lg:text-xl Y-axis-text max-md:max-w-full">{"Chairman and Managing Director"}</p>
              <p className="text-xl lg:text-xl Y-axis-text ">{"JEF Group"}</p>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[54%] max-md:ml-0 max-md:w-full">
          </div>
        </div>
      </section>
    </main>







  {/*  Blog's Section  */}



  <section className="py-16 overflow-x-hidden bg-neutral-100 ">
      <main className="lg:px-[100px] flex overflow-hidden flex-col justify-center items-center px-20 pt-20 w-full bg-neutral-100 max-md:px-5  max-md:max-w-full">
        <div className="flex flex-col items-start mb-0 w-full  max-md:max-w-full">
          <header className="flex flex-wrap gap-5 justify-between self-stretch w-full text-red-700 uppercase max-md:max-w-full">
            <h1 className=" text-4xl font-bold leading-none X-axis-anm tracking-[3.36px]">BLOGS</h1>
            <div className="flex gap-7 tracking-[1px]">
            <div className="text-xs X-axis-anm my-auto">40 ARTICLES IN TOTAL</div>
              <button
                className={`bg-red-700 X-axis-anm hover:bg-black rounded-full p-3 ${currentIndex === 0 ? "visibility-hidden" : "visible"}`}
                onClick={prevSlide}
                style={{ visibility: currentIndex === 0 ? "hidden" : "visible" }} // Hide button if at the first slide
              >
                <img src="./HomePageImg/LeftArrow.png" alt="LeftArrow" className="w-8" />
              </button>
              <button
                className={`bg-red-700 X-axis-anm hover:bg-black rounded-full p-3 ${currentIndex >= totalItems - itemsPerPage - 1 ? "visibility-hidden" : "visible"}`}
                onClick={nextSlide}
                style={{ visibility: currentIndex >= totalItems - itemsPerPage - 1 ? "hidden" : "visible" }} // Hide button 1 slide before the last
              >
                <img src="./HomePageImg/RightArrow.png" alt="RightArrow" className="w-8" />
              </button>

            </div>
          </header>
          <div className="flex justify-between w-full">
              <nav className="flex gap-8 X-axis-anm mt-5 text-xs uppercase whitespace-nowrap max-md:mt-10">
                <a href="#newest" className="text-red-700 basis-auto">Newest</a>
                <a href="#oldest" className="text-neutral-900">Oldest</a>
              </nav>
            </div>


            {/* Slider Section */}

        </div>
      </main>
      <section className="relative h-auto mt-5 bg-neutral-100">
      <div className="flex-shrink-0 top-0 flex h-auto items-center overflow-hidden">
        <motion.div
          className="flex gap-4 flex-row" // Arrange cards in horizontal direction
          animate={{ 
            x: `-${(currentIndex * (100 / itemsPerPage)) / (totalItems / itemsPerPage)}%`, // Slide based on currentIndex
            marginLeft // Smoothly transition between 4% and 1%
          }}
          transition={{ 
            ease: [0.42, 0, 0.58, 1], // EaseInOut cubic-bezier for smooth transition
            duration: 0.8 // Slightly longer duration for a smooth feel
          }}
          style={{ width: `${(totalItems / itemsPerPage) * 100}%` }} // Ensure motion div expands to hold all items
        >
          {blogData.map((blog) => (
            <BlogCard
              key={blog.id}
              imageSrc={blog.imageSrc}
              title={blog.title}
              path={blog.path}
            />
          ))}
        </motion.div>
      </div>


      {/* Slider Buttons */}
    </section>

    </section>

    
{/* 
 < BlogCarousel />
< CarousalImg/>
 */}








   {/*  Contact Us Section    */}

   < ContactUs />


  



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

    // What we do Mobile view --------------------------------------------//

    useEffect(() => {
      if (showSection) {
        gsap.fromTo(
          gsap.utils.toArray('.Y-axis-WWD-anm'),
          { opacity: 0, y: 100 },
          {
            y: 0,
            opacity: 1,
            duration: 1.1,
            stagger: 0.3,
            scrollTrigger: {
              trigger: '.WWD-slider',
              start: 'top 70%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, [showSection]);




        useEffect(() => {
          if (showSection) {
            gsap.utils.toArray('.Y-axis-text').forEach((element) => {
              gsap.fromTo(
                  element,
                  { opacity: 0 , y: 50 },
                  {   y: 0,
                      opacity: 1,
                      duration: 0.8,
                      stagger: 0.2,
                      scrollTrigger: {
                          trigger: element,
                          start: 'top 70%',
                          toggleActions: 'play none none none',
                            },
                        }
                    );
                });
          }
        }, [showSection]);


  
    
  

  const [fadeOut, setFadeOut] = useState(false);
  
  
  return (
   <section className="flex lg:h-screen overflow-hidden flex-col bg-zinc-800">
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

      {showSection && (
       <section className="flex h-auto lg:h-screen overflow-hidden flex-col bg-zinc-800 ">
       <div className="flex relative flex-col px-20 pt-12 w-full min-h-[1126px] max-md:px-5 max-md:py-24 max-md:max-w-full">
         <img
           loading="lazy"
           src={buttonData[hoveredButtonIndex]?.image || './HomePageImg/WhatWeDoSection/Earthing Studies 1.png'}
           alt=""
           className="transition-all duration-5900 object-cover absolute inset-0 size-full"
         />

          <div className="flex flex-col md:flex-row 2xl:w-[90%] mx-auto relative mb-0 w-full max-md:mb-2.5 max-md:max-w-full justify-between">

          {/* Left Section */}
          <section className="flex flex-wrap w-[100%] lg:w-[40%] justify-between">
            <div className="flex tracking-[3px] flex-col self-start text-2xl lg:text-3xl font-bold">
              <h1 className="text-white uppercase mt-[2%]">what we do</h1>
            </div>
            <div className="flex flex-row my-auto max-md:ml-0 max-md:w-full">
              <div className="grow max-md:max-w-full WWD-slider">
                <div className="mt-[40%] lg:my-0 lg:gap-y-8 grid grid-cols-3  items-center self-center lg:flex flex-wrap lg:gap-5 lg:h-full max-md:flex-col">
                  {buttonData.map((button, index) => (
                    <Link key={index} to={button.path} className={`inline-flex Y-axis-WWD-anm`}>
                      <button
                        className={`border-[.5px] p-4 border-white animate-[pulse_2s_infinite] hover:animate-none rounded-full w-28 h-28 xl:w-44 xl:h-44 bg-cover bg-center cursor-pointer transition-all duration-300 ease-in-out ${button.marginTop} ${button.marginLeft} ${hoveredButtonIndex === index ? 'bg-red-500 border-none' : 'bg-transparent'}`}
                        onMouseEnter={() => setHoveredButtonIndex(index)}
                        onMouseLeave={() => setHoveredButtonIndex(null)}
                      >
                        <span className="text-white text-[55%] lg:text-sm uppercase leading-none tracking-[0px]">{button.text}</span>
                      </button>
                    </Link>
                  ))}
                </div>
                {/* <div className="lg:hidden ">
                  <img src="./HomePageImg/WhatWeDoSection/PhoneServices.png" alt="PhoneServices" />
                </div> */}


              </div>
            </div>
          </section>

          {/* Right Section */}
          <section className="Y-axis-text lg:w-[40%] flex flex-col items-end self-end justify-end"> {/* Ensure the section takes 50% and is aligned to the right */}
            <div className="flex flex-col lg:w-[80%] text-xl font-medium leading-10 max-md:max-w-full">
              <div className="shrink-0 mt-6 border border-red-700 thin-border max-md:max-w-full" />
              <h2 className="mt-8 text-white uppercase tracking-wider max-md:max-w-full">{buttonData[hoveredButtonIndex]?.title || 'Grounding studies projects completed'}</h2>
            </div>
            <div className="lg:mt-12 w-full max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col lg:items-end self-end  w-full max-md:mt-10 max-md:max-w-full">
                    <div className="max-w-full w-[80%]">
                      <div className="flex gap-5 max-md:flex-col">
                        <div className="flex flex-col w-9/12 max-md:ml-0 max-md:w-full">
                          <div className="flex flex-col grow uppercase tracking-[3px] ">
                            <h3 className="text-base font-bold items-start self-start text-green-600">Total Projects</h3>
                            <div className="flex flex-col items-start self-start lg:mt-5 text-base text-white whitespace-nowrap">
                              <p>{buttonData[hoveredButtonIndex]?.totalProjects || 165}</p>
                              <h4 className="self-stretch mt-5 text-base font-bold text-center text-green-600">gcc</h4>
                              <p>{buttonData[hoveredButtonIndex]?.gcc || 42}</p>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                          <div className="flex flex-col uppercase whitespace-nowrap tracking-[3px] ">
                            <h3 className="text-base font-bold text-start text-green-600">INDIA</h3>
                            <p className="self-start lg:mt-5 text-base text-white">{buttonData[hoveredButtonIndex]?.indiaProjects || 123}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex-col justify-end items-end lg:ml-[20%]">
                      <h3 className="mt-10 text-base font-bold text-start text-green-500 uppercase tracking-[3px] max-md:max-w-full">CAPACITY | UNIT | SQM AREA</h3>
                      <p className="self-stretch mt-6 w-[80%] text-sm h-[23vh] leading-7 text-white ">
                        {buttonData[hoveredButtonIndex]?.description || "Earthing is an essential part of any electrical installation, essential for the safety from electrical shock, and fire and for operation of most of the protective systems of the electrical installation."}
                      </p>
                      <button className="gap-2.5 text-base  mt-24 md:mt-20 self-stretch px-5 py-2 lg:mt-0  text-red-700 uppercase bg-white hover:bg-red-700 hover:text-white lg:py-4 rounded-[50px] lg:px-14">
                        Read more
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          </div>

       </div>
     </section>
      )}
    </section>
  );
};













// Why Choose JEF Section 



function FeatureSection() {
  return (
    <>
       {/* For Large ScreenSizes */}

        <section className="hidden mx-auto lg:block overflow-hidden shrink-0 container self-center my-20 w-full h-screen  max-md:mt-10 max-md:max-w-full ">
          <div className=" text-base mt-10 text-center font-semibold tracking-widest text-red-700 uppercase max-md:ml-2.5">
                  Why choose JEF ?
                </div>
          <div className={`flex gap-5 max-md:flex-col`}>
            <div className={`box image1 flex  flex-col 2xl:w-[28%] w-[36%] max-md:ml-0 max-md:w-full`}>
              <img loading="lazy" src={"./HomePageImg/WhyChooseJEFImg/Smart Digitization 1.png"} className=  "object-contain grow w-full aspect-[0.8] max-md:max-w-full" alt="" />
            </div>
            
            <div className={`flex flex-col ml-5 w-[64%] max-md:ml-0 max-md:w-full`}>
              <div className="flex flex-col grow items-start mt-7 text-white max-md:max-w-full">
                <h2 className="title1 mt-10  relative 2xl:-inset-x-32 text-6xl font-bold uppercase lg:w-[50%] tracking-[3px] max-md:mt-10  max-md:text-4xl">
                      Smart digitalisation 
                </h2>
                <h2 className='absolute title2 mt-10  ml-[35%]  2xl:-inset-x-32 text-6xl font-bold uppercase lg:w-[30%] tracking-[3px] max-md:mt-10 z-10  max-md:text-4xl'>
                Our L&d centre
                </h2>
                <div className="flex flex-col self-end  max-w-full w-[855px] max-md:mt-10">
                  <p className="description1 -ml-[5%] text-lg mt-10 font-light leading-10 max-md:max-w-full">
                  Our patented Smart Digitization process captures knowledge, streamlines workflows, and ensures accuracy at scale. Trusted by over 450+ customers globally, it delivers secure, standardized reports with customizable formats— over 5,000 reports and a million data points captured to date. Fast, secure, and reliable insights with every report.
                  </p>
                  <p className='description2 -mt-[20%] text-lg font-light leading-10 max-md:max-w-full'>
                  At JEF, we are committed to continuous improvement and excellence. The L&D Center is designed to enhance the skills and expertise of our employees, ensuring they stay ahead of industry trends and deliver superior service to our clients.
                  </p>
                  
                </div>
                <Link to={'/SmartDigitalization'}>
                <button className="buttonRM0 flex text-wrap gap-2.5 justify-center items-center ml-[5%] self-start  px-2 mt-20 text-sm uppercase bg-red-700 border border-solid border-zinc-900 border-opacity-10 rounded-[50px] ">
                  <span className="w-36 px-2 py-3 my-auto">Read More</span>
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/db980ec347a907dbb470da6524b4de0865962ecb1dce316128b11f72afbae1f5?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244" className=" object-contain my-auto self-stretch  w-7" alt="" />
                </button>
                </Link>
                <Link to={'/L&D-Centre'}>
                <button className="buttonRM1 flex text-sm gap-2.5 justify-center items-center ml-[28%] self-start  px-2 -mt-20 uppercase bg-red-700 border border-solid border-zinc-900 border-opacity-10 rounded-[50px]">
                  <span className="w-36 my-auto px-2 py-3">Read More</span>
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/db980ec347a907dbb470da6524b4de0865962ecb1dce316128b11f72afbae1f5?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244" className=" object-contain my-auto self-stretch  w-7" alt="" />
                </button>
                </Link>
              </div>
            </div>
          </div>
          <div className={`ml-auto mt-28 image2 flex 2xl:w-[28%] flex-col w-[32%] max-md:w-full`}>
              <img loading="lazy" src={"./HomePageImg/WhyChooseJEFImg/Our L&D Centre 1.png"} className=  "object-contain bottom-m w-full aspect-[0.8] max-md:max-w-full" alt="" />
            </div>
        </section>

        {/* For Mobile View */}

        <section className="lg:hidden mx-auto h-auto ">

          <h1 className="uppercase tracking-widest text-center mt-[1rem] text-red-600 text-xl">Why choose JEF ?</h1>
          <div className="flex sm:gap-80 gap-12 mt-5">
            <img src="./HomePageImg/WhyChooseJEFImg/Smart Digitization 1.png" alt="SmartDigitilizationImg" className="SmImg1"/>
            <img src="./HomePageImg/WhyChooseJEFImg/Our L&D Centre 1.png" alt="OurL&DImg" className="SmImg2"/>
          </div>
          <div className="textSM1 relative">
            <h1 className=" text-white -mt-10 font-medium text-center text-3xl uppercase">Smart <br />digitalisation</h1>
            <h3 className=" text-white text-lg  text-center font-extralight">Our patented tool that provides end to end digitalisation for conducting system studies gives us a unique leverage to deliver quality & consistency at scale.</h3>
          </div>
          <div className="textSM2 relative">
            <h1 className=" text-white mt-32 font-medium text-center text-3xl uppercase">Our L&d <br />centre</h1>
            <h3 className=" text-white text-lg text-center font-extralight">Enhancing Value & Quality for Our Clients Through Our Continuous Learning & Development Program.</h3>
          </div>
        </section>
    </>
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
        className="overflow-hidden Y-axis-text px-5 py-3 w-full max-w-[380px] bg-white rounded-3xl border border-solid border-neutral-200"
        required
      />
    </div>
  );
}




const LandingImages = () => {
  const carouselRef = useRef(null);
  const coverRef = useRef(null);
  const [index, setIndex] = useState(0);
  const totalSlides = 3; // Total number of slides
  const startPos = useRef(0);
  const isDragging = useRef(false);
  const currentTranslate = useRef(0);
  const prevTranslate = useRef(0);



  

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

  // Handle touch/mouse start
  const handleTouchStart = (e) => {
    isDragging.current = true;
    startPos.current = getPositionX(e);
    carouselRef.current.style.transition = "none"; // Disable transitions while dragging
  };

  // Handle touch/mouse move
  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    const currentPosition = getPositionX(e);
    currentTranslate.current = prevTranslate.current + currentPosition - startPos.current;

    carouselRef.current.style.transform = `translateX(${currentTranslate.current}px)`;
  };

  // Handle touch/mouse end
  const handleTouchEnd = () => {
    isDragging.current = false;
    const movedBy = currentTranslate.current - prevTranslate.current;

    // If moved by more than 50px, move to next/previous slide
    if (movedBy < -50) handleNext();
    if (movedBy > 50) handlePrev();

    // Reset translate values
    carouselRef.current.style.transition = "transform 0s ease-out";
    prevTranslate.current = currentTranslate.current;
    carouselRef.current.style.transform = `translateX(-${index * 33.33}%)`;
  };

  // Utility to get the current X position (mouse or touch)
  const getPositionX = (e) => {
    return e.type.includes("mouse") ? e.pageX : e.touches[0].clientX;
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div
        ref={carouselRef}
        className="bg-no-repeat flex w-[300%] h-full"
        onMouseDown={handleTouchStart}
        onMouseMove={handleTouchMove}
        onMouseUp={handleTouchEnd}
        onMouseLeave={handleTouchEnd}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="relative w-full h-full ">
          <video autoPlay loop muted className="absolute size-full object-cover" >
              <source src="./HomePageImg/Banner 1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          <div className="inset-y-2/3 lg:inset-x-40 p-4 flex relative flex-col self-center w-full max-md:mt-10 max-md:max-w-full ">
            <h1 className="xl:text-4xl  lg:text-4xl md:text-4xl text-3xl font-bold h-20 2xl:h-36 my-auto tracking-wider text-white max-md:max-w-full">
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
              <button className="gap-2.5 self-stretch px-2.5 py-1 lg:py-4 my-auto bg-white border border-solid border-zinc-900 border-opacity-10 text-sm h-[2.5rem] lg:text-lg rounded-[50px] w-[10rem] ">
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
        <div className="inset-y-[26rem] md:inset-y-2/3 lg:inset-x-40 p-4 flex relative flex-col self-center w-full  max-md:mt-10 max-md:max-w-full ">
            <h1 className="xl:text-5xl lg:text-5xl md:text-4xl text-3xl font-bold h-32 2xl:h-36 my-auto tracking-wider text-white max-md:max-w-full max-md:text-4xl">
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
              <button className="gap-2.5 self-stretch px-2.5 py-1 hover:bg-red-600 lg:py-4 my-auto bg-white border border-solid border-zinc-900 border-opacity-10 text-sm h-[2.5rem] lg:text-lg 2xl:min-h-[64px] rounded-[50px] w-[10rem] 2xl:w-[239px]">
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
        <div className="inset-y-2/3 lg:inset-x-40 p-4 flex relative flex-col self-center w-full max-w-[70%] max-md:mt-10 max-md:max-w-full ">
            <h1 className="xl:text-5xl lg:text-5xl md:text-4xl text-3xl font-bold h-20 2xl:h-36 my-auto tracking-wider text-white max-md:max-w-full max-md:text-4xl">
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
              <button className="gap-2.5 self-stretch px-2.5 py-1 lg:py-4 my-auto bg-white border border-solid border-zinc-900 border-opacity-10 text-sm h-[2.5rem] lg:text-lg 2xl:min-h-[64px] rounded-[50px] w-[10rem] 2xl:w-[239px]">
                Learn More
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Cover Animation */}
      <div ref={coverRef} className="absolute  w-full h-full bg-zinc-800"></div>

      {/* Left Arrow */}
      {index > 0 && (
        <div
          className="absolute top-1/2 left-5 transform -translate-y-1/2 cursor-pointer border border-white rounded-full h-12 w-12 flex items-center justify-center"
          onClick={handlePrev}
        >
          <img src="./HomePageImg/LeftArrow.png" alt="Left Arrow" />
        </div>
      )}

      {/* Right Arrow */}
      {index < totalSlides - 1 && (
        <div
          className="absolute top-1/2 right-5 transform -translate-y-1/2 cursor-pointer border border-white rounded-full h-12 w-12 flex items-center justify-center"
          onClick={handleNext}
        >
          <img src="./HomePageImg/RightArrow.png" alt="Right Arrow" />
        </div>
      )}
    </div>
  );
};




function BlogCard({ imageSrc, title ,path }) {


      


  return (
    <article className="flex X-axis-card-anm flex-col lg:mx-6 w-[98vw] lg:w-[22vw]">
      <div className="flex card-slider flex-col grow max-md:mt-10">
        <div className="flex flex-col justify-center w-full min-h-[400px] overflow-hidden relative">
          <img
            loading="lazy"
            src={imageSrc}
            alt={title}
            className="object-cover w-full h-full transition-transform duration-500 ease-in-out transform hover:scale-125"
          />
        </div>
        <div className="flex flex-col items-start mt-4 w-full max-w-[400px] max-md:pr-5">
          <h2 className="lg:text-base leading-6 lg:h-16 text-stone-900">{title}</h2>
          <div className="flex gap-2 mt-6 lg:text-xs tracking-widest leading-tight text-center text-red-700 uppercase">
            <Link to={path}>
              <div className="text-xs grow">Read more</div>
            </Link>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c99385a3888a56e12aa67bbca0d3363e44c74249fcb42246da50d1f716869d4?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244"
              alt=""
              className="object-contain shrink-0 aspect-[2.07] w-[21px]"
            />
          </div>
        </div>
      </div>
    </article>
  );
}




export default Home;