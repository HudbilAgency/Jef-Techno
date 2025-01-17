import React, { useRef, useState, useEffect } from "react";
import MainFooter from '../Components/Footer/MainFooter';
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from '../Components/Navbar/Navbar';
import { useGSAP } from '@gsap/react'
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ContactUs from "../Components/ContactUs/ContactUs";
import { Helmet } from 'react-helmet';




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
    title: 'Smart Digitization',
    description: 'Our patented tool that provides end to end Digitization for conducting system studies gives us a unique leverage to deliver quality & consistency at scale.',
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
    imageSrc: "./HomePageImg/BlogsSection/Img1.jpg",
    title: "Ensuring Safety in the Oil and Gas Industry in the UAE",
    path: 'BlogInside1'
  },
  {
    imageSrc: "./HomePageImg/BlogsSection/Img2.jpg",
    title: "Maximizing Economic Efficiency through Power Factor and Harmonic Studies in the UAE",
    path: 'BlogInside2'
  },
  {
    imageSrc: "./HomePageImg/BlogsSection/Img3.jpg",
    title: "Enhancing Renewable Energy Reliability: Comprehensive Power System Studies in the UAE",
    path: '/blog/enhance-reliability-efficiency-compliance-electrical-grid-power-system-studies'
  },
  {
    imageSrc: "./HomePageImg/BlogsSection/Img4.jpg",
    title: "Understanding the Importance of Power System Studies in the UAE",
    path: 'BlogInside4'
  },
  {
    imageSrc: "./HomePageImg/BlogsSection/Img1.jpg",
    title: "Ensuring Safety in the Oil and Gas Industry in the UAE",
    path: 'BlogInside1'
  },
  {
    imageSrc: "./HomePageImg/BlogsSection/Img2.jpg",
    title: "Maximizing Economic Efficiency through Power Factor and Harmonic Studies in the UAE",
    path: 'BlogInside2'
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
    text: 'EXCELLENCE THROUGH Digitization',
    dotColors: ['bg-gray-400', 'bg-gray-400', 'bg-white']
  }
];

//button data for hover effect in What We do Section

const buttonData = [
  {
    image: './HomePageImg/WhatWeDoSection/Earthing Studies 2.png',
    text: 'Earthing studies',
    title: "Grounding studies projects completed",
    path: '/earthing-studies',
    totalProjects: 165,
    indiaProjects: 123,
    gcc: 42,
    description: "Earthing is an crucial part of any electrical installation, ensuring protection from electrocution and fire, while also enabling the proper operation of protective systems.",
    className: "mt-[calc(50vh-10rem)] md:mt-[calc(50vh-10rem)] 2xl:mt-[calc(50vh-12rem)]",
  },
  {
    image: './HomePageImg/WhatWeDoSection/Lightning Protection 2.png',
    text: 'Lightning protection system studies',
    title: "Lightning Protection Studies Projects Completed",
    path: '/lightning-protection-studies',
    totalProjects: 233,
    indiaProjects: 195,
    gcc: 38,
    description: "The purpose of Lightning Protection System audit is to conduct lightning risk assessment and determine the level of protection required to the structure/facility as per the latest relevant standards. LPS Adequacy audit helps to manage and mitigate the risk due to lightning and protect the life and assets.",
    className: "mt-[calc(40vh-15rem)] md:mt-[calc(50vh-15rem)] 2xl:mt-[calc(40vh-14rem)] md:-ml-[0.5rem] 2xl:ml-0",
  },
  {
    image: './HomePageImg/WhatWeDoSection/Power System Studies 2.png',
    text: 'power system studies',
    title: "Power System Studies Projects Completed",
    path: '/power-system-studies',
    totalProjects: 74,
    indiaProjects: 58,
    gcc: 16,
    description: "A Power System Study involves analyzing various aspects of an electrical power system to identify potential issues and optimize performance. These studies include load flow analysis, short circuit studies, relay coordination, arc flash analysis, and more, all aimed at enhancing system reliability and safety.",
    className: "mt-[calc(65vh-17rem)] md:mt-[calc(30vh-35rem)] 2xl:mt-[calc(30vh-45rem)] md:ml-[20rem] 2xl:ml-[25rem]",
  },
  {
    image: './HomePageImg/WhatWeDoSection/Power Quality and Root cause Analysis 2.png',
    text: 'power quality & root cause analysis',
    title: "Power Quality & Root Cause Studies Projects Completed",
    path: '/power-quality-studies',
    totalProjects: 66,
    indiaProjects: 36,
    gcc: 30,
    description: "A Power Quality Study involves a comprehensive analysis of your electrical system to identify disturbances and deviations in voltage, current, and frequency. These studies are essential for ensuring that your power supply is stable and free from issues that can lead to equipment malfunction or inefficiencies.",
    className: "mt-[calc(10vh-2rem)] md:mt-[calc(20vh-13rem)] 2xl:mt-[calc(20vh-16rem)] md:ml-[8rem] 2xl:ml-[10rem]",
  },
  {
    image: './HomePageImg/WhatWeDoSection/Instrumentation Earthing 2.png',
    text: 'instrumentation earthing',
    title: "Instrumentation Earthing Studies Projects Completed",
    path: '/instrumentation-earthing-studies',
    totalProjects: 32,
    indiaProjects: 24,
    gcc: "08",
    description: "An Instrumentation Earthing Study involves evaluating the earthing system of instrumentation and control systems to ensure proper grounding. This study helps prevent electrical noise, surges, and other issues that can affect the accuracy and reliability of instrumentation.",
    className: "mt-[calc(10vh-10rem)] md:mt-[calc(10vh-14rem)] 2xl:mt-[calc(10vh-18rem)] ml-[0.5rem] md:-ml-[0.5rem] 2xl:ml-0",
  },
  {
    image: './HomePageImg/WhatWeDoSection/Emi Emc 2.jpg',
    text: 'EMI EMC',
    title: "EMI EMC Projects Completed",
    path: '/emi-emc',
    totalProjects: 96,
    indiaProjects: 71,
    gcc: "25",
    description: "In an era of rapidly advancing technology, maintaining electromagnetic compatibility is critical for the reliable operation of electrical systems and devices.",
    className: "mt-[calc(10vh-2rem)] md:mt-[calc(10vh-12rem)] 2xl:mt-[calc(10vh-15rem)] ml-4 md:-ml-8 2xl:-ml-10",
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
        { opacity: 0, y: 50 },
        {
          y: 0,
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

    gsap.utils.toArray('.Y-axis-text-founder').forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 50 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: element,
            start: 'top 90%',
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
        { opacity: 0, x: 120 },
        {
          x: 0,
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
  const itemsPerPage = window.innerWidth >= 1280 ? itemsPerPageDesktop
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






  {/*Gsap Annimation*/ }


  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add({
      // For larger screens (1025px and above)
      largeScreen: "(min-width: 1025px)",
      // For medium screens (768px to 1024px)
      mediumScreen: "(min-width: 768px) and (max-width: 1024px)",
      // For small screens (below 768px)
      smallScreen: "(max-width: 767px)"
    }, (context) => {
      let { largeScreen, mediumScreen, smallScreen } = context.conditions;

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
        tl.to(".title1", { x: "3vw", opacity: 0, scrub: true }, "display")
          .to(".description1", { y: "1rem", opacity: 0 }, "display")
          .fromTo(".title2", { x: "2vw", opacity: 0 }, { x: 0, opacity: 1 })
          .fromTo(".description2", { y: "0.5rem", opacity: 0 }, { y: 0, opacity: 1 })
          .to(".image1", { x: "60rem", y: "-40rem" }, "display")
          .to(".image2", { x: "-63rem", y: "-40rem" }, "display")
          .to(".buttonRM0", { x: "300rem" }, "display")
          .fromTo(".buttonRM1", { x: "20rem", opacity: 0 }, { x: "0rem", opacity: 1 });
      }

      // Animations for medium screens (768px to 1024px)
      if (mediumScreen) {
        tl.to(".title1", { x: "2vw", opacity: 0.5, scrub: true }, "display")
          .to(".description1", { y: "1rem", opacity: 0.5 }, "display")
          .fromTo(".title2", { x: "1vw", opacity: 0 }, { x: 0, opacity: 0.8 })
          .fromTo(".description2", { y: "0.3rem", opacity: 0 }, { y: 0, opacity: 0.8 })
          .to(".image1", { x: "30rem", y: "-20rem" }, "display")
          .to(".image2", { x: "10rem", y: "-18rem" }, "display")
          .to(".buttonRM0", { x: "150rem" }, "display")
          .fromTo(".buttonRM1", { x: "10rem", opacity: 0 }, { x: "0rem", opacity: 1 });
      }

      // Animations for small screens (below 768px)
      if (smallScreen) {
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

  const [isScreenTall, setIsScreenTall] = useState(window.innerHeight > 800 && window.innerWidth > 1023);

  useEffect(() => {
    const handleResize = () => {
      setIsScreenTall(window.innerHeight > 800 && window.innerWidth > 1023);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sectionRef = useRef();
  const textRef1 = useRef();
  const textRef2 = useRef();
  const divRef1 = useRef();
  const divRef2 = useRef();
  const imgRef1 = useRef();
  const imgRef2 = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {

      const initialXForImgRef2 = window.innerWidth > 1550
        ? 1100
        : window.innerWidth > 1200
          ? 800
          : 600;

      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 25%',
          end: 'bottom bottom',
          toggleActions: 'play none none reverse',
          pin: true,
        },
      })
        .to(
          textRef1.current,
          {
            x: 200,
            opacity: 0,
            duration: 0.5,
          },
          0
        )
        .fromTo(
          textRef2.current,
          { x: 200, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.5 },
          0
        )
        .to(
          divRef1.current,
          {
            y: 200,
            opacity: 0,
            duration: 0.5,
          },
          0
        )
        .fromTo(
          divRef2.current,
          { y: 0, opacity: 0 },
          { y: -300, opacity: 1, duration: 0.5 },
          0
        )
        .fromTo(
          imgRef1.current,
          { x: 0, y: 0 },
          { x: 800, y: -550, duration: 1, ease: 'power2.inout' },
          0
        )
        .fromTo(
          imgRef2.current,
          { x: initialXForImgRef2, y: 0, },
          { x: 0, y: -450, duration: 1, ease: 'power2.inout' },
          0
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);


  useEffect(() => {
    if (showVideo) {
      window.onYouTubeIframeAPIReady = () => {
        const player = new YT.Player('yt-player-container', {
          videoId: '9xiS0T3smxM',
          playerVars: {
            autoplay: 1,
            controls: 1,
          },
          events: {
            onStateChange: (event) => {
              if (event.data === YT.PlayerState.ENDED) {
                closeVideo(); // Automatically close the section when the video ends
              }
            },
          },
        });
      };

      // Load YouTube API if not already loaded
      if (!window.YT) {
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      } else {
        window.onYouTubeIframeAPIReady();
      }
    }
  }, [showVideo]);

  return (
    <>
      <Helmet>
        <title>JEF UAE: Premium Lightning Protection & Grounding System Products</title>
        <meta name="description" content="Discover JEF UAE's range of high-quality lightning protection and grounding system products. Trusted solutions for enhanced safety in electrical grounding and surge protection systems across UAE."></meta>
        <meta property="og:url" content="https://www.jefuae.com/"></meta>
        <meta name="keywords" content="JEF UAE, lightning protection, grounding system, grounding products, surge protection, UAE, electrical safety, grounding solutions, lightning rods, grounding accessories"></meta>
        <meta name="og:description" content="JEF UAE provides reliable lightning protection and grounding system products, ensuring top safety standards in electrical grounding and surge protection. Serving UAE industries with trusted solutions."></meta>
        <meta name="og:site_name" content="Lightning Protection Systems | Grounding System Products"></meta>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-V6J93962T6"></script>
        <script>
          {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-V6J93962T6');
                `}
        </script>
      </Helmet>
      {!showVideo && <Navbar />}

      <div className="relative w-full h-screen overflow-hidden">
        <div ref={carouselRef} className="bg-no-repeat flex w-[300%] h-full ">
          <div className="relative w-full h-full ">
            <video autoPlay loop muted playsInline className="absolute size-full object-cover" >
              <source src="./HomePageImg/Banner 1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="inset-y-2/3 xl:mt-[2%] lg:inset-x-20 p-4 flex relative flex-col self-center w-full max-md:mt-10 max-md:max-w-full ">
              <h1 className="2xl:text-6xl lg:text-4xl  md:text-3xl text-3xl font-bold h-32 md:h-20 2xl:h-36 my-auto tracking-wider text-white max-md:max-w-full max-md:text-4xl">
                THINK ELECTRICAL, <br />
                THINK JEF
              </h1>
              <div className="flex gap-2 lg:gap-6 items-center self-start text-2xl uppercase text-neutral-900 tracking-[3px]">
                <div className="flex flex-col items-center">
                  {/* Button to trigger the video */}
                  {/* <button onClick={handlePlayVideo} className=" mb-0">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/8855ae14d9effa10b9317a704535212615d40fdec755767f2e9941cd3e8401cc?placeholderIfAbsent=true&apiKey=60c6eb6ce37644fdb727618799199006"
                      alt="Electrical icon"
                      className="bg-repeat object-contain w-9 2xl:w-14"
                    />
                  </button> */}

                  {/* Conditionally render the iframe video at 90% screen width */}
                  {showVideo && (
                    <div className="hidden fixed inset-0 lg:flex items-center justify-center bg-black bg-opacity-75 z-[9999]">
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
                        <div className="w-full h-full object-contain rounded-md" id="yt-player-container"></div>
                      </div>
                    </div>
                  )}

                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full h-full">
            <video autoPlay loop muted playsInline className="absolute size-full object-cover" >
              <source src="./HomePageImg/Banner 2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="inset-y-[26rem] xl:mt-[2%] lg:inset-x-20 md:inset-y-2/3 0 p-4 flex relative flex-col self-center w-full  max-md:mt-10 max-md:max-w-full ">
              <h1 className="2xl:text-6xl lg:text-4xl text-3xl font-bold h-32 md:h-20 2xl:h-36 my-auto tracking-wider text-white max-md:max-w-full max-md:text-4xl">
                END-to-END SOLUTIONS
                <br />FOR ELECTRICAL PROTECTION
              </h1>
              <div className="flex gap-2 lg:gap-6 items-center self-start text-2xl uppercase text-neutral-900 tracking-[3px] max-md:mt-10">
                {/* <button onClick={handlePlayVideo} >
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8855ae14d9effa10b9317a704535212615d40fdec755767f2e9941cd3e8401cc?placeholderIfAbsent=true&apiKey=60c6eb6ce37644fdb727618799199006"
                    alt="Electrical icon"
                    className="bg-repeat object-contain w-9 2xl:w-14"
                  />
                </button> */}
              </div>
            </div>

          </div>
          <div className="relative w-full h-full">
            <video autoPlay loop muted playsInline className="absolute size-full object-cover" >
              <source src="./HomePageImg/Banner 3.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="inset-y-2/3 xl:mt-[2%] lg:inset-x-20 p-4 flex relative flex-col self-center w-full max-w-[70%] max-md:mt-10 max-md:max-w-full ">
              <h1 className="2xl:text-6xl lg:text-4xl  md:text-3xl text-3xl font-bold h-32 md:h-20 2xl:h-36 my-auto tracking-wider text-white max-md:max-w-full max-md:text-4xl">
                EXCELLENCE THROUGH DIGITIZATION
              </h1>
              <div className="flex gap-2 lg:gap-6 items-center self-start text-2xl uppercase text-neutral-900 tracking-[3px]">
                {/* <button >
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8855ae14d9effa10b9317a704535212615d40fdec755767f2e9941cd3e8401cc?placeholderIfAbsent=true&apiKey=60c6eb6ce37644fdb727618799199006"
                    alt="Electrical icon"
                    className="bg-repeat object-contain w-9 2xl:w-14"
                  />
                </button> */}
              </div>
            </div>

          </div>
        </div>
        <div ref={coverRef} className="absolute w-full h-full bg-zinc-800"></div>
        {!showVideo && index > 0 && (
          <div
            className="absolute top-1/2 hover:bg-red-500 lg:left-24 left-5 transform -translate-y-1/2 cursor-pointer border border-white rounded-full h-12 w-12 flex items-center justify-center"
            onClick={handlePrev}
          >
            <img src="./HomePageImg/LeftArrow.png" alt="Left Arrow" className="size-6" />
          </div>
        )}
        {!showVideo && index < totalSlides - 1 && (
          <div
            className="absolute hover:bg-red-500 top-1/2 lg:right-20 right-5 transform -translate-y-1/2 cursor-pointer border border-white rounded-full h-12 w-12 flex items-center justify-center"
            onClick={handleNext}
          >
            <img src="./HomePageImg/RightArrow.png" alt="Right Arrow" className="size-6" />
          </div>
        )}

      </div>







      {/*  What we do Section */}

      <section>
        < WhatWeDoSection />

      </section>












      {/*  Why choose JEF Section  */}

      {/*  For large devices  */}

      <section className={`lg:flex items-center justify-center px-16 bg-stone-900 overflow-hidden hidden ${isScreenTall ? 'h-screen' : 'h-full'}`}>
        <div className={`flex items-center ${isScreenTall ? 'mt-0 mb-0 h-full' : 'py-60'}`}>
          <img
            className="h-32 my-auto hidden lg:block"
            src="./HomePageImg/WhyChooseJEFImg/ScrollImg.png"
            alt="ScrollPng"
          />
          <main ref={sectionRef} className="lg:px-[40px] xl:px-[100px]">
            <section>
              <div className="flex items-start h-full gap-28 text-white relative max-h-[500px]">
                <div className="w-1/3 2xl:w-1/4">
                  <div ref={imgRef1} className="h-[450px]">
                    <img
                      className="w-full h-full object-cover"
                      src="/HomePageImg/WhyChooseJEFImg/Smart Digitization 1.png"
                      alt=""
                    />
                  </div>
                  <div ref={imgRef2} className="h-[450px]">
                    <img
                      className="w-full h-full object-cover"
                      src="/HomePageImg/WhyChooseJEFImg/Our L&D Centre 1.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="w-1/2 2xl:w-2/5 flex flex-col">
                  <div className="text-base font-semibold tracking-widest text-red-700 uppercase mb-16">
                    Why choose JEF ?
                  </div>
                  <div className="">
                    <div
                      ref={textRef1}
                      className="text-5xl font-bold uppercase leading-none tracking-[3px] absolute top-16 right-[10%] 2xl:right-[40%]"
                    >
                      Smart Digitization
                    </div>
                    <div
                      ref={textRef2}
                      className="text-5xl font-bold uppercase leading-none tracking-[3px] absolute top-16 right-[15%] xl:right-[25%] 2xl:right-[53%] opacity-0"
                    >
                      Our L&d centre
                    </div>
                  </div>
                  <div className="relative">
                    <div ref={divRef1}>
                      <div className="my-16">
                        Our patented Smart Digitization process captures knowledge, streamlines workflows, and ensures
                        accuracy at scale. Trusted by over 450+ customers globally, it delivers secure, standardized
                        reports with customizable formats— over 5,000 reports and a million data points captured to date.
                        Fast, secure, and reliable insights with every report.
                      </div>
                      <div className="w-fit opacity-0">
                        <button className="flex cursor-default text-wrap gap-2 justify-center items-center self-start px-2 text-xs uppercase bg-red-700 border border-solid border-zinc-900 border-opacity-10 rounded-[50px]">
                          <span className="py-3 pl-4 my-auto">Read More</span>
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/db980ec347a907dbb470da6524b4de0865962ecb1dce316128b11f72afbae1f5?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244"
                            className="object-contain my-auto self-stretch w-7"
                            alt=""
                          />
                        </button>
                      </div>
                    </div>
                    <div ref={divRef2}>
                      <div className="my-16">
                        At JEF, we are committed to continuous improvement and excellence. The L&D Center is designed to enhance the skills and expertise of our employees, ensuring they stay ahead of industry trends and deliver superior service to our clients.
                      </div>
                      <div className="w-fit opacity-0">
                        <button className="flex cursor-default text-wrap gap-2 justify-center items-center self-start px-2 text-xs uppercase bg-red-700 border border-solid border-zinc-900 border-opacity-10 rounded-[50px]">
                          <span className="py-3 pl-4 my-auto">Read More</span>
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/db980ec347a907dbb470da6524b4de0865962ecb1dce316128b11f72afbae1f5?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244"
                            className="object-contain my-auto self-stretch w-7"
                            alt=""
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </section>

      {/*  For small & medium devices  */}


      <section className="flex bg-fixed h-screen overflow-hidden  px-16 py-6 bg-stone-900 lg:hidden">
        <img className="h-32 my-auto hidden lg:block" src="./HomePageImg/WhyChooseJEFImg/ScrollImg.png" alt="ScrollPng" />
        <main className="mx-auto overflow-hidden">
          <FeatureSection />
        </main>
      </section>


      {/* bg-[url('/home-main.png')] */}

      <main className="flex overflow-hidden flex-col">
        <section
          style={{
            backgroundImage: "url('/HomePageImg/BGP.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
          className="overflow-hidden relative w-full h-auto"
        >
          <div className="flex lg:items-end xl:items-start gap-0 md:gap-6 2xl:mt-0 lg:gap-16 justify-between 2xl:justify-center 2xl:gap-40 px-4 lg:px-0 max-lg:flex-col 2xl:ml-[100x] md:mr-[100px] md:ml-[85px]">

            <div className=" flex flex-col w-full lg:w-1/2 xl:w-3/5 2xl:w-1/2 py-16">
              <div className="flex  z-10 lg:mt-12 2xl:mt-0 flex-col items-start  mr-0 font-light text-red-700 max-md:mt-10 max-md:max-w-full">
                <h1 className="text-3xl Y-axis-text font-bold uppercase tracking-[3px] max-md:max-w-full ">
                  Founder message
                </h1>
                <div className="self-stretch Y-axis-text sm:my-12 space-y-5 lg:text-base 2xl:text-xl  2xl:leading-8 text-stone-900 max-md:my-12 max-md:max-w-full">
                  <p>
                    Every single day, we endeavour to make more customers across continents benefit from our work as a step to enhance reliability & safety in the electrical network.
                  </p>
                  <p>Over the last 30 years of our existence, we have served more than 4000 customers in 28 countries. Consistently meeting & exceeding their expectations at every given opportunity, we at Team JEF have created a formidable track record for ourselves.
                  </p>
                  <p>No wonder customers <span className="font-medium">THINK "JEF"</span> when they <span className="font-medium">THINK ELECTRICAL</span> engineering.
                  </p>
                </div>
                <div className="Y-axis-text-founder">
                  <h2 className="text-xl lg:text-2xl font-semibold max-md:text-4xl">{"Prashanth BG"}</h2>
                  <p className=" text-xl lg:text-xl max-md:max-w-full">{"Chairman and Managing Director"}</p>
                  <p className="text-xl lg:text-xl ">{"JEF Group"}</p>
                </div>
              </div>
            </div>

            <div className="hidden lg:flex flex-col w-full lg:w-1/2 xl:w-1/3 2xl:w-1/4 mt-auto 2xl:max-h-[600px]">
              <img className="h-[70vh] lg:h-full" src="/HomePageImg/founder.png" />
            </div>

            <div className="flex lg:hidden flex-col w-full lg:w-1/2 xl:w-1/3 2xl:w-1/4 lg:mt-auto 2xl:max-h-[600px]">
              <img className=" object-contain lg:h-full" src="/HomePageImg/founder.png" />
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
                <div className="text-xs X-axis-anm my-auto opacity-0 cursor-default">40 ARTICLES IN TOTAL</div>
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
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    if (isIOS) {
      document.querySelectorAll("video").forEach(video => {
        video.play();
      });
    }
  }, []);

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
          { opacity: 0, y: 50 },
          {
            y: 0,
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

  const [isScreenTall, setIsScreenTall] = useState(window.innerHeight > 800 && window.innerWidth > 1023);

  useEffect(() => {
    const handleResize = () => {
      setIsScreenTall(window.innerHeight > 800 && window.innerWidth > 1023);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className={`flex overflow-hidden flex-col bg-zinc-800 ${isScreenTall ? 'lg:max-h-screen' : 'lg:max-h-[112vh]'}`}>
      {!showSection && (
        <div className={`flex relative flex-col px-20 pt-16 w-full min-h-[1126px] max-md:px-5 max-md:py-24 max-md:max-w-full transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>

          <h1 className="Y-axis-text z-50 text-white font-normal text-center absolute inset-0 my-[50vh] flex  justify-center text-xl sm:text-4xl uppercase ">Delivering Excellence Across 28 countries</h1>
          <video
            ref={videoRef}
            onEnded={handleVideoEnd}
            className="object-cover absolute inset-0 size-full"
            autoPlay
            muted
            playsInline
          >
            <source src="./HomePageImg/Earth zoom.mp4" type="video/mp4" />
          </video>
        </div>
      )}

      {showSection && (
        <section className={`flex overflow-hidden flex-col bg-zinc-800 ${isScreenTall ? '2xl:h-screen' : 'h-full'}`}>
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
                <div className="flex tracking-[3px] flex-col self-start text-xl 2xl:text-3xl font-bold">
                  <h1 className="text-white uppercase mt-[2%]">what we do</h1>
                </div>
                <div className="flex flex-row my-auto max-md:ml-0 max-md:w-full">
                  <div className="grow max-md:max-w-full WWD-slider">
                    <div className="md:mt-[40%] lg:my-0 lg:gap-y-8 grid grid-cols-3  items-center self-center lg:flex flex-wrap lg:gap-5 lg:h-full max-md:flex-col">
                      {buttonData.map((button, index) => (
                        <div key={index} className={`inline-flex Y-axis-WWD-anm ${button.className}`}
                        >
                          <button
                            className={`border-[.5px] p-4 border-white animate-[pulse_2s_infinite] hover:animate-none rounded-full w-28 h-28 md:w-36 md:h-36 2xl:w-44 2xl:h-44 bg-cover bg-center cursor-pointer transition-all duration-300 ease-in-out ${hoveredButtonIndex === index ? 'bg-red-500 border-none' : 'bg-transparent'}`}
                            onMouseEnter={() => setHoveredButtonIndex(index)}
                          >
                            <span className="text-white text-[55%] 2xl:text-sm uppercase leading-none tracking-[0px]">{button.text}</span>
                          </button>
                        </div>

                      ))}
                    </div>
                    {/* <div className="lg:hidden ">
                  <img src="./HomePageImg/WhatWeDoSection/PhoneServices.png" alt="PhoneServices" />
                </div> */}


                  </div>
                </div>
              </section>

              {/* Right Section */}
              <section className="Y-axis-text lg:w-[40%] flex flex-col lg:items-end lg:self-end justify-end"> {/* Ensure the section takes 50% and is aligned to the right */}
                <div className="flex flex-col lg:w-[80%] text-xl font-medium leading-10 max-md:max-w-full">
                  <div className="shrink-0 mt-6 border border-red-700 thin-border max-md:max-w-full" />
                  <h2 className="mt-8 text-white 2xl:text-lg text-sm uppercase tracking-wider max-md:max-w-full">{buttonData[hoveredButtonIndex]?.title || 'Grounding studies projects completed'}</h2>
                </div>
                <div className="lg:mt-12 w-full max-md:mt-10 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col">
                    <div className="flex flex-col max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col lg:items-end self-end  w-full max-md:mt-10 max-md:max-w-full">
                        <div className="max-w-full w-[80%]">
                          <div className="flex gap-5 max-md:flex-col">
                            <div className="flex flex-col w-9/12 max-md:ml-0 max-md:w-full">
                              <div className="flex flex-col grow uppercase tracking-[3px] ">
                                <h3 className="font-bold text-xs 2xl:text-base items-start self-start text-green-600">Total Projects</h3>
                                <div className="flex flex-col items-start self-start lg:mt-5  text-xs 2xl:text-base text-white whitespace-nowrap">
                                  <p>{buttonData[hoveredButtonIndex]?.totalProjects || 165}</p>
                                  <h4 className="self-stretch mt-5 text-xs 2xl:text-base font-bold text-center text-green-600">gcc</h4>
                                  <p>{buttonData[hoveredButtonIndex]?.gcc || 42}</p>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                              <div className="flex flex-col uppercase whitespace-nowrap tracking-[3px] ">
                                <h3 className="text-xs 2xl:text-base font-bold text-start text-green-600">INDIA</h3>
                                <p className="self-start lg:mt-5 text-xs 2xl:text-base text-white">{buttonData[hoveredButtonIndex]?.indiaProjects || 123}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex-col justify-end items-end lg:ml-[20%]">
                          <h3 className="mt-10  text-xs 2xl:text-base font-bold text-start text-green-500 uppercase tracking-[3px] max-md:max-w-full">CAPACITY | UNIT | SQM AREA</h3>
                          <p className="self-stretch text-xs 2xl:text-base mt-6 2xl:w-[90%] 2xl:leading-7 text-white ">
                            {buttonData[hoveredButtonIndex]?.description || "Earthing is a crucial part of any electrical installation, ensuring protection from electrocution and fire, while also enabling the proper operation of protective systems."}
                          </p>
                          <Link to={buttonData[hoveredButtonIndex]?.path}>
                            <button className="gap-2.5 text-xs 2xl:text-base self-stretch px-5 py-2 mt-12  text-red-700 uppercase bg-white hover:bg-red-700 hover:text-white 2xl:py-3 rounded-[50px] 2xl:px-12">
                              Read more
                            </button>
                          </Link>
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



  const sectionRef0 = useRef();
  const divRef3 = useRef();
  const divRef4 = useRef();
  const imgRef3 = useRef();
  const imgRef4 = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef0.current,
          start: "center center", // Animations start when the section's center aligns with the viewport's center
          end: "bottom bottom",  // Ends when the bottom of the section aligns with the bottom of the viewport
          toggleActions: "play none none reverse",
          pin: false,
        },
      })
        .fromTo(
          imgRef3.current,
          { x: 0, opacity: 1 },
          { x: "-60vw", opacity: 0, duration: 1, ease: "power2.out" },
          0
        )
        .fromTo(
          imgRef4.current,
          { x: 0, opacity: 0 },
          { x: "-75vw", opacity: 1, duration: 1, ease: "power2.out" },
          0
        )
        .fromTo(
          divRef3.current,
          { y: 0, opacity: 1 },
          { y: "20vh", opacity: 0, duration: 0.8, ease: "power2.out" },
          "0" // Overlap timing with the previous animation
        )
        .fromTo(
          divRef4.current,
          { y: 0, opacity: 0 },
          { y: '-40vh', opacity: 1, duration: 0.8, ease: "power2.out" },
          "0"
        );
    }, sectionRef0);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef0} className="lg:hidden mx-auto h-screen ">

      <h1 className="uppercase tracking-wider sm:tracking-widest text-center mt-[1rem] text-red-600 text-xl">Why choose JEF ?</h1>
      <div className="my-5 flex gap-8 h-[60%]">
        <img ref={imgRef3} src="./HomePageImg/WhyChooseJEFImg/Smart Digitization 1.png" alt="SmartDigitilizationImg" className="h-full " />
        <img ref={imgRef4} src="./HomePageImg/WhyChooseJEFImg/Our L&D Centre 1.jpeg" alt="OurL&DImg" className=" h-full" />
      </div>
      <div ref={divRef3} className="relative">
        <h1 className=" text-white -mt-[5rem] font-bold text-center text-3xl uppercase">Smart <br />Digitization</h1>
        <h3 className=" text-white text-base  text-center font-extralight">Our patented tool that provides end to end digitalisation for conducting system studies gives us a unique leverage to deliver quality & consistency at scale.</h3>
      </div>
      <div ref={divRef4} className="relative">
        <h1 className=" text-white mt-[5rem] font-bold  text-center text-3xl uppercase">Our L&d <br />centre</h1>
        <h3 className=" text-white text-base text-center font-extralight">Enhancing Value & Quality for Our Clients Through Our Continuous Learning & Development Program.</h3>
      </div>
    </section>
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







function BlogCard({ imageSrc, title, path }) {





  return (
    <article className="flex X-axis-card-anm flex-col lg:mx-6 w-[100vw] 2xl:w-[22vw]">
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