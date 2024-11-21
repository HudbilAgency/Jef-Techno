import React, { useState, useEffect, useRef } from "react";
import Navbar from "../Components/Navbar/Navbar";
import MainFooter from "../Components/Footer/MainFooter";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import ContactUs from "../Components/ContactUs/ContactUs";
import { Helmet } from 'react-helmet';


gsap.registerPlugin(ScrollTrigger);

function ManufacturingPlant() {

  useEffect(() => {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    if (isIOS) {
      document.querySelectorAll("video").forEach(video => {
        video.play();
      });
    }
  }, []);



  // Our Services Animation

  useEffect(() => {
    gsap.fromTo(
      gsap.utils.toArray('.Y-axis-Service-anm'),
      { opacity: 0, y: 100 },
      {
        y: 0,
        opacity: 1,
        duration: 1.1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: '.circle-slider',
          start: 'top 60%',
          end: 'bottom 20%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);




  // Key Components 

  useEffect(() => {
    gsap.fromTo(
      gsap.utils.toArray('.Y-axis-card-anm'),
      { opacity: 0, y: 100 },
      {
        y: 0,
        opacity: 1,
        duration: 1.1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: '.card-slider',
          start: 'top 80%',
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
  }, []);

  // Segments

  useEffect(() => {
    gsap.fromTo(
      gsap.utils.toArray('.Y-axis-Segments-anm'),
      { opacity: 0, y: 400 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.07,
        scrollTrigger: {
          trigger: '.circle-slider',
          start: 'top 70%',
          end: 'bottom 20%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      gsap.utils.toArray('.Y-axis-Segments-anmMob'),
      { opacity: 0, y: 400 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.08,
        scrollTrigger: {
          trigger: '.circle-sliderMob',
          start: 'top 70%',
          end: 'bottom 20%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);


  const services = [
    { image: '', text: '', data: [] },
    { image: '', text: '', data: [] },
    { image: '', text: '', data: [] },
    { image: '../HomePageImg/WhatWeDoSection/Earthing Studies 2.png', text: 'Earthing studies', data: [{ label: 'Total Projects', value: 165 }, { label: 'gcc', value: 42 }, { label: 'INDIA', value: '123' }], path: '/earthing-studies' },
    { image: '../HomePageImg/WhatWeDoSection/Lightning Protection 2.png', text: 'Lightning protection system studies', data: [{ label: 'Total Projects', value: 233 }, { label: 'gcc', value: 38 }, { label: 'INDIA', value: '195' }], path: '/lightning-protection-studies' },
    { image: '../HomePageImg/WhatWeDoSection/Power System Studies 2.png', text: 'Power system studies', data: [{ label: 'Total Projects', value: 74 }, { label: 'gcc', value: 16 }, { label: 'INDIA', value: '58' }], path: '/power-system-studies' },
    { image: '', text: '', data: [] },
    { image: '', text: '', data: [] },
    { image: '', text: '', data: [] },
    { image: '', text: '', data: [] },
    { image: '', text: '', data: [] },
    { image: '', text: '', data: [] },
    { image: '', text: '', data: [] },
    { image: '../HomePageImg/WhatWeDoSection/Power Quality and Root cause Analysis 2.png', text: 'Power quality & root cause analysis', data: [{ label: 'Total Projects', value: 66 }, { label: 'gcc', value: 30 }, { label: 'INDIA', value: '36' }], path: '/power-quality-studies' },
    { image: '../HomePageImg/WhatWeDoSection/Instrumentation Earthing 2.png', text: 'Instrumentation earthing', data: [{ label: 'Total Projects', value: 32 }, { label: 'gcc', value: "08" }, { label: 'INDIA', value: '24' }], path: '/instrumentation-earthing-studies' },
    { image: '', text: '', data: [] },
    { image: '', text: '', data: [] },
    { image: '', text: '', data: [] },
    { image: '', text: '', data: [] },
  ];


  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState('');
  const serviceRefs = useRef([]);
  const imgRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    if (img) {
      gsap.fromTo(img,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 2.5,
          ease: 'power2.inOut'
        }
      );
    }
  }, [imgRef]);

  const handleMouseEnter = (index, image) => {
    setHoveredIndex(index);
    setBackgroundImage(image);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setBackgroundImage('');
  };

  useEffect(() => {
    serviceRefs.current = serviceRefs.current.slice(0, services.length);
  }, [services]);

  useEffect(() => {
    serviceRefs.current.forEach((ref, index) => {
      if (ref) {
        if (index === hoveredIndex && services[index]?.text !== '') {
          gsap.to(ref, { scale: 1.3, opacity: 1, duration: 0.2, ease: 'power2.inOut' });
        } else {
          gsap.to(ref, {
            scale: hoveredIndex !== null ? 0.9 : 1,
            opacity: hoveredIndex !== null ? 0.5 : 1,
            // border: hoveredIndex !== null && services[index]?.text === '' ? '1px solid white' : '',
            backgroundColor: hoveredIndex !== null && services[index]?.text === '' ? 'transparent' : '',
            duration: 0.2,
            ease: 'power2.inOut'
          });
        }
      }
    });
  }, [hoveredIndex, services]);


  // ContactUs Section

  const inputFields = [
    { label: 'Name', type: 'text' },
    { label: 'Email', type: 'email' },
    { label: 'Mobile Number', type: 'tel' },
  ];

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

  return (
    <>
    <Helmet>
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
      < Navbar />
      <section className="flex h-screen overflow-hidden flex-col text-4xl font-bold lg:text-5xl  tracking-wider text-white ">
        <div className="flex flex-col h-screen relative max-md:text-4xl">
          <div className="">
            <video autoPlay loop muted playsInline className="absolute size-full object-cover" >
              <source src="../IndustriesPage/Manufacturing Plant.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <h1 className="inset-y-2/3 xl:mt-[10%] lg:inset-x-20 absolute inset-0 p-4 flex z-10">
              MANUFACTURING PLANT
            </h1>
          </div>
        </div>
      </section>



      {/* Navigated Section */}

      <section>
        < Navigation />
      </section>


      {/*  */}

      <section className="px-[5%] py-[4%] bg-gray-100">
        <main className="flex flex-col text-center">
          <header className="flex flex-col w-full text-2xl font-semibold uppercase text-stone-900 tracking-[2.06px] max-md:max-w-full">
            <img
              loading="lazy"
              src="../AboutUs/MFplant.png"
              alt="Renewable Energy Industry Logo"
              className="object-cover self-center max-w-full aspect-square w-20"
            />
            <h1 className="mt-16 self-center lg:w-[40%] font-semibold max-md:mt-10 max-md:max-w-full">
              OUR WIDE RANGE OF SERVICES  IMPROVE UPTIME,
              SAFETY & COST SAVINGS.
            </h1>
          </header>
        </main>
      </section>




      {/* Our Services Section */}

      <section>
        <div className={` h-full bg-slate-900`}>
          <div
            className=" w-full h-full py-20 mainSection bg-stone-900 overflow-hidden relative">
            {backgroundImage && (
              <div className="absolute inset-0 w-full h-full ">
                <img
                  ref={imgRef}
                  src={backgroundImage}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            )}
            <section className="flex overflow-hidden flex-col text-base leading-6 text-center text-white uppercase w-full relative z-10">
              <h2 className="self-center text-3xl font-semibold leading-none text-red-700 tracking-[4.53px] max-md:max-w-full max-md:text-4xl">
                Our Services
              </h2>
              <div className="flex circle-slider flex-wrap justify-center mt-20 max-md:mt-10 w-full h-[39vh] lg:h-[55vh]">
                <div className='flex Y-axis-Service-anm items-center gap-x-2 md:gap-x-5 lg:gap-x-10 circleChild'>
                  {services.slice(0, 9).map((service, index) => (
                    <ServiceItem
                      key={index}
                      data={service.data}
                      path={service.path}
                      text={service.text}
                      ref={(el) => (serviceRefs.current[index] = el)}
                      onMouseEnter={(event) => handleMouseEnter(index, service.image, event)}
                      onMouseLeave={handleMouseLeave}
                    />


                  ))}
                </div>
                <div className='flex Y-axis-Service-anm gap-x-2 md:gap-x-5 lg:gap-x-10'>
                  {services.slice(9).map((service, index) => (
                    <ServiceItem
                      key={index}
                      data={service.data}
                      path={service.path}
                      text={service.text}
                      ref={(el) => (serviceRefs.current[index + 9] = el)}
                      onMouseEnter={() => handleMouseEnter(index + 9, service.image)}
                      onMouseLeave={handleMouseLeave}
                    />


                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>





      < ContactUs />

      < MainFooter />

    </>
  );
}









const NavigationItem = ({ text, isActive }) => (
  <div className="flex items-center self-stretch my-auto">
    <div
      className={`self-stretch my-auto text-xs tracking-wide leading-none uppercase ${isActive ? 'text-white' : 'text-red-700'
        }`}
    >
      {text}
    </div>
    {!isActive && (
      <div className="flex flex-col self-stretch px-2.5 my-auto w-[27px]">
        <div className="flex items-center w-[7px]">
          <div className="flex flex-col justify-center self-stretch my-auto min-h-[7px] w-[7px]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3113f381f331fdc6efbe3c0ae79c9bb98472ae04eaff8d3d44a215b51f8c5927?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244"
              alt=""
              className="object-contain flex-1 w-full aspect-square"
            />
          </div>
        </div>
      </div>
    )}
  </div>
);

const navigationItems = [
  { text: 'HOME', isActive: false },
  { text: 'Industries', isActive: false },
  { text: 'Manufacturing Plant', isActive: true },
];

const Navigation = () => (
  <nav className="flex flex-col justify-center items-start px-16 py-6 bg-stone-900 max-md:px-5">
    <div className="flex gap-y-2 flex-wrap items-center max-md:max-w-full">
      {navigationItems.map((item, index) => (
        <NavigationItem key={index} {...item} />
      ))}
    </div>
  </nav>
);



const ServiceItem = React.forwardRef(({ path, text, data, onMouseEnter, onMouseLeave }, ref) => {
  // Local state to track hover state within ServiceItem
  const [isHovered, setIsHovered] = React.useState(false);

  // Determine the position class based on the text of the item
  const positionClass =
    text === 'Power quality & root cause analysis' || text === 'Instrumentation earthing'
      ? 'bottom-1/2'
      : 'top-1/2';

  return (
    <Link to={path}>
      <div
        ref={ref}
        className={` flex w-[7.2rem] h-[7.2rem] lg:h-[9rem] lg:w-[9rem] 2xl:w-[11.5rem] 2xl:h-[11.5rem] rounded-full items-center justify-center p-[0.5%] lg:p-[1.5%] transition-all duration-300 
        ${text === "" ? "bg-transparent" : "border border-solid hover:bg-red-600"}`}
        onMouseEnter={(e) => {
          setIsHovered(true);
          onMouseEnter(e); // Calls the main onMouseEnter function to handle background image changes
        }}
        onMouseLeave={() => {
          setIsHovered(false);
          onMouseLeave(); // Calls the main onMouseLeave function to reset background image
        }}
      >
        <span className="text-center text-[10px] lg:text-[10px] 2xl:text-[12px] ">{text}</span>

        {/* Hover Box - Visible only when hovered */}
        {isHovered && text && data.length > 0 && (
          <div className={`absolute left-1/2 transform -translate-x-1/2 ${positionClass} bg-white text-black p-4 rounded shadow-lg transition-opacity z-20 w-max mt-2`}>
            {data.map((item, index) => (
              <div key={index} className="text-center mb-1">
                <h3 className="text-xs font-semibold">{item.label}</h3>
                <p className="text-">{item.value}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
});












export default ManufacturingPlant;