import React, { useState, useEffect, useRef } from "react";
import MainFooter from '../Components/Footer/MainFooter';
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../Components/Navbar/Navbar";
import { Link } from 'react-router-dom';
import path from "path";
import { Helmet } from 'react-helmet';


gsap.registerPlugin(ScrollTrigger);

const EarthingStudies = () => {


  useEffect(() => {
    gsap.utils.toArray('.Y-axis-text-Title-Service1').forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 50 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: element,
            stagger: 0.6,
            start: 'top 100%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, []);

  useEffect(() => {
    gsap.fromTo(
      gsap.utils.toArray('.Y-axis-Testimonials'),
      { opacity: 0, y: 100 },
      {
        y: 0,
        opacity: 1,
        duration: 1.1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: '.Testimonials',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);


  // For Key Components

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




  useEffect(() => {

    gsap.utils.toArray('.ContactUsAnimation').forEach((element) => {
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

  const services = [
    { image: '', text: '', path: '' },
    { image: '', text: '', path: '' },
    { image: './HomePageImg/WhatWeDoSection/Earthing Studies 2.png', text: 'Earthing studies', path: '/earthing-studies' },
    { image: './HomePageImg/WhatWeDoSection/Lightning Protection 2.png', text: 'Lightning protection system studies', path: '/lightning-protection-studies' },
    { image: './HomePageImg/WhatWeDoSection/Power System Studies 2.png', text: 'Power system studies', path: '/power-system-studies' },
    { image: './HomePageImg/WhatWeDoSection/Power Quality and Root cause Analysis 2.png', text: 'Power quality', path: '/power-quality-studies' },
    { image: '', text: '', path: '' },
    { image: '', text: '', path: '' },
    { image: '', text: '', path: '' },
    { image: '', text: '', path: '' },
    { image: '', text: '', path: '' },
    { image: '', text: '', path: '' },
    { image: './HomePageImg/WhatWeDoSection/Instrumentation Earthing 2.png', text: 'Instrumentation earthing', path: '/instrumentation-earthing-studies' },
    { image: './HomePageImg/WhatWeDoSection/Emi Emc 2.jpg', text: 'EMI EMC', path: '/emi-emc' },
    { image: './HomePageImg/WhatWeDoSection/Root Cause Analysis 2.jpg', text: 'Root cause analysis', path: '/root-cause-analysis' },
    { image: '', text: '', path: '' },
    { image: '', text: '', path: '' },
    { image: '', text: '', path: '' },
    { image: '', text: '', path: '' },
  ];

  const services2 = [
    { image: '', text: '', path: '' },
    { image: '', text: '', path: '' },
    { image: './HomePageImg/WhatWeDoSection/Earthing Studies 2.png', text: 'Earthing studies', path: '/earthing-studies' },
    { image: './HomePageImg/WhatWeDoSection/Lightning Protection 2.png', text: 'Lightning protection system studies', path: '/lightning-protection-studies' },
    { image: './HomePageImg/WhatWeDoSection/Power System Studies 2.png', text: 'Power system studies', path: '/power-system-studies' },
    { image: '', text: '', path: '' },
    { image: '', text: '', path: '' },
    { image: '', text: '', path: '' },
    { image: '', text: '', path: '' },
    { image: '', text: '', path: '' },
    { image: '', text: '', path: '' },
    { image: '', text: '', path: '' },
    { image: './HomePageImg/WhatWeDoSection/Power Quality and Root cause Analysis 2.png', text: 'Power quality', path: '/power-quality-studies' },
    { image: './HomePageImg/WhatWeDoSection/Instrumentation Earthing 2.png', text: 'Instrumentation earthing', path: '/instrumentation-earthing-studies' },
    { image: '', text: '', path: '' },
    { image: '', text: '', path: '' },
    { image: '', text: '', path: '' },
    { image: '', text: '', path: '' },
    { image: '', text: '', path: '' },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState('');
  const serviceRefs = useRef([]);
  const service2Refs = useRef([]);
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

  useEffect(() => {
    service2Refs.current = service2Refs.current.slice(0, services2.length);
  }, [services2]);

  useEffect(() => {
    service2Refs.current.forEach((ref, index) => {
      if (ref) {
        if (index === hoveredIndex && services2[index]?.text !== '') {
          gsap.to(ref, { scale: 1.3, opacity: 1, duration: 0.2, ease: 'power2.inOut' });
        } else {
          gsap.to(ref, {
            scale: hoveredIndex !== null ? 0.9 : 1,
            opacity: hoveredIndex !== null ? 0.5 : 1,
            // border: hoveredIndex !== null && services2[index]?.text === '' ? '1px solid white' : '',
            backgroundColor: hoveredIndex !== null && services2[index]?.text === '' ? 'transparent' : '',
            duration: 0.2,
            ease: 'power2.inOut'
          });
        }
      }
    });
  }, [hoveredIndex, services2]);


  const navItems = [
    { label: 'HOME', isActive: true },
    { label: 'SERVICES', isActive: true },
    { label: 'EARTHING STUDIES', isActive: false },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const benefitItems = [
    "ABOUT Earthing studies",
    'What is an Earthing/Grounding System Study',
    'Earthing/Grounding System Studies',
    'Our Certifications and Expertise',
    'Detailed Study Reports and Analysis',
    'Benefits of Professional Earthing/Grounding System Studies',
  ];

  const components = [

    {
      imageSrc: './SerivePage/01.png',
      title: 'Riser Integrity Testing',
      description: 'Evaluating the condition of risers to detect faulty connections/joints both above & below ground.',
    },
    {
      imageSrc: './SerivePage/02.png',
      title: 'Grid Integrity Testing',
      description: 'Checking the continuity and integrity of the grounding grid using advanced impedance measurement techniques.',
    },
    {
      imageSrc: './SerivePage/03.png',
      title: 'Soil Resistivity Testing',
      description: 'Conducting tests to measure soil resistivity and design effective grounding systems.',
    },
    {
      imageSrc: './SerivePage/04.png',
      title: 'Touch and Step Potential Measurement',
      description: 'Assessing the potential differences that can occur on the surface of the ground to ensure personnel safety.',
    },
    {
      imageSrc: './SerivePage/05.png',
      title: 'Simulation',
      description: 'Earthing grid in CDEGS software.',
    },
    {
      imageSrc: './SerivePage/06.png',
      title: 'Earth Electrode Resistance Testing',
      description: 'Measuring the resistance of earth electrodes using both Fall of Potential and Stake less methods.',
    },
  ]

  const buttons = [
    { text: 'CONTACT US', className: 'bg-red-700' }
  ];


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

      {/* Landing Img Section */}

      <section className="flex overflow-hidden h-screen flex-col bg-white">
        <div className="flex relative flex-col w-full h-screen max-md:pb-24 max-md:max-w-full">
          {/* <img
          loading="lazy"
          src="./SerivePage/Earthing Studies 1.png"
          alt=""
          className="object-cover absolute inset-0 size-full"
        /> */}
          <video autoPlay loop muted playsInline className="absolute size-full object-cover" >
            <source src="./SerivePage/Earthing Studies Banner video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="flex Y-axis-text-Title-Service1 inset-y-3/4 lg:-mt-[2%] 2xl:mt-0 lg:inset-x-20 p-4 relative flex-col self-center w-full max-md:mt-10 max-md:max-w-full mb-0 mx-40 max-w-full max-md:mb-2.5">
            <h1 className=" lg:text-5xl md:text-4xl text-3xl font-bold my-auto tracking-wider text-white max-md:max-w-full max-md:text-4xl">
              EARTHING STUDIES
            </h1>
            <div className="flex gap-6 items-center self-start mt-8 text-lg uppercase text-neutral-900  max-md:mt-10">
              <Link to={'/get-in-touch'}>
                <button className="uppercase px-5 lg:px-10 self-stretch  py-2 lg:py-3 my-auto bg-white border border-solid border-zinc-900 border-opacity-10 text-lg hover:bg-red-700 hover:text-white 2xl:min-h-[64px] rounded-[50px]">
                  Get in touch
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>



      {/* Contact Us section */}



      <section className="flex h-auto -mb-11 md:mb-0 overflow-hidden flex-col bg-stone-900">
        <div className="flex overflow-hidden flex-col w-full bg-white max-md:max-w-full" />
        <nav className="flex flex-col justify-center py-6 px-24 w-full bg-zinc-800 min-h-[64px] max-md:px-5 max-md:max-w-full">
          <div className="flex w-full max-md:max-w-full">
            <div className="flex items-center h-full min-w-[240px]">
              {navItems.map((item, index) => (
                <div key={index} className="flex items-center self-stretch my-auto">
                  <div className={`self-stretch my-auto text-xs tracking-wide leading-none uppercase whitespace-nowrap ${item.isActive ? 'text-red-700' : 'text-neutral-300'}`}>
                    {item.label}
                  </div>
                  {item.isActive && (
                    <div className="flex flex-col self-stretch px-2.5 my-auto w-[27px]">
                      <div className="flex items-center w-[7px]">
                        <div className="flex flex-col justify-center self-stretch my-auto min-h-[7px] w-[7px]">
                          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/98403646f26f29fd8d19e6e57b2e9f8b5de2f748795475a0d9039378b1786404?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244" alt="" className="object-contain flex-1 w-full aspect-square" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </nav>
        <div className="flex ContactUsAnimation justify-center items-end self-center px-80 mt-24 max-w-full min-h-[80px] w-[770px] max-md:px-5 max-md:mt-10">
          <img loading="lazy" src="./SerivePage/EarthingStudiesLogo.png" className="object-contain w-16 aspect-square" />
        </div>
        <header className="flex p-4 ContactUsAnimation flex-col items-center self-center mt-10 w-full text-base text-center text-white max-w-[1391px] max-md:mt-10 max-md:max-w-full">
          <h1 className="flex flex-col max-w-full text-2xl  font-medium uppercase leading-relaxed tracking-wider w-[1071px]">
            <div className="w-full max-md:max-w-full">
              Comprehensive Earthing/Grounding <br /> integrity testing services
            </div>
          </h1>
          <p className="self-stretch mt-12 w-[80%] lg:w-[60%] text-center mx-auto font-light max-md:mt-10 max-md:max-w-full">
            As a pioneer in Earthing integrity testing services, we at JEF have over two decades of experience covering 300,000 riser connections spread across 18 countries, 400 substations ranging from 66kV to 765kV process plants and other critical installations. With several patents in this field, our level of expertise is unmatched even as we keep innovating further.
          </p>
          {/* <p className="mt-12 max-md:mt-10 font-light max-md:max-w-full">
          With several patents in this field, our level of expertise is unmatched even we keep
          innovating further.
        </p> */}
        </header>
        <div className="flex ContactUsAnimation flex-col self-center mt-14 max-w-full text-sm md:text-base leading-6 text-center text-red-700 w-[770px] max-md:mt-10">
          <p className="px-56 w-full max-md:px-5 max-md:max-w-full">
            Get in touch for any queries and real-life case-studies
          </p>
          <div className="flex mt-2.5 w-full min-h-[24px] max-md:max-w-full" />
        </div>
        <Link to='/get-in-touch' className="flex ContactUsAnimation gap-3.5 justify-center items-center self-center py-4 px-10 max-w-full text-sm tracking-wider leading-none text-center text-white uppercase border border-white border-solid rounded-[60px]">
          <span className="self-stretch my-auto">CONTACT US</span>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ad33562234bc92238f0281eafa23a9b3c49a837f5ae8d3662c67bc1d8b919e14?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
        </Link>
      </section>





      <section>
        < VerticalCarousel />
      </section>





      <section>
        < CarouselSection components={components} />
      </section>


      <section className="hidden sm:block">
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
              <div className="circle-slider flex flex-wrap justify-center mt-20 max-md:mt-10 w-full h-full">
                <div className='flex Y-axis-Service-anm gap-x-2 md:gap-x-5 lg:gap-x-10 circleChild'>
                  {services.slice(0, 8).map((service, index) => (
                    <ServiceItem
                      key={index}
                      text={service.text}
                      path={service.path}
                      image={service.image}
                      ref={(el) => (serviceRefs.current[index] = el)}
                      onMouseEnter={() => handleMouseEnter(index, service.image)}
                      onMouseLeave={handleMouseLeave}
                    />
                  ))}
                </div>
                <div className='flex Y-axis-Service-anm gap-x-2 md:gap-x-5 lg:gap-x-10 mb-10'>
                  {services.slice(8).map((service, index) => (
                    <ServiceItem
                      key={index + 8}
                      text={service.text}
                      path={service.path}
                      image={service.image}
                      ref={(el) => (serviceRefs.current[index + 8] = el)}
                      onMouseEnter={() => handleMouseEnter(index + 8, service.image)}
                      onMouseLeave={handleMouseLeave}
                    />
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      <section className="block sm:hidden">
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
              <div className="flex circle-slider flex-wrap justify-center mt-20 max-md:mt-10 w-full h-full">
                <div className='flex Y-axis-Service-anm items-center gap-x-2 md:gap-x-5 lg:gap-x-10 circleChild'>
                  {services2.slice(0, 7).map((service2, index) => (
                    <ServiceItem2
                      key={index}
                      text={service2.text}
                      path={service2.path}
                      image={service2.image}
                      ref={(el) => (service2Refs.current[index] = el)}
                      onMouseEnter={() => handleMouseEnter(index, service2.image)}
                      onMouseLeave={handleMouseLeave}
                    />
                  ))}
                </div>
                <div className='flex Y-axis-Service-anm gap-x-2 md:gap-x-5 lg:gap-x-10 mb-6'>
                  {services2.slice(12, 14).map((service2, index) => (
                    <ServiceItem2
                      key={index}
                      text={service2.text}
                      path={service2.path}
                      image={service2.image}
                      ref={(el) => (service2Refs.current[index] = el)}
                      onMouseEnter={() => handleMouseEnter(index, service2.image)}
                      onMouseLeave={handleMouseLeave}
                    />
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      <section>
        < TestimonialsSection />
      </section>

      < MainFooter />
    </>
  )
}





const testimonials = [
  "We are thankful to the JEF Techno's team for clearing many of our doubts related to lightning protection. LPS audit was conducted for our plant that happened successfully.",
  "JEF supported us in providing very innovative and practical solutions to earthing and lightning protection systems. Every input from the team was with proper technical justification and in line with national & international standards.",
  "We have been associated with JEF Techno for the last 5 years. Product Quality and After Sales Service provided by them is up to the mark.",
  "We have taken JEF’s technical expertise for Lightning Protection System for our Bangalore Warehouse. While working with them, we got to know that lightning protection is just not some product, it’s a complete solution."
];

function TestimonialsSection() {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Adjust the duration as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex overflow-hidden flex-col text-center text-white w-full">
      <div className="flex overflow-hidden flex-col justify-center w-full h-[532px] max-md:max-w-full">
        <div className="flex overflow-hidden flex-col w-full bg-white max-md:max-w-full">
          <div className="flex relative flex-col justify-center items-center px-5 sm:px-10 md:px-20 py-20 w-full min-h-[532px]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f8e06a7d505c4129965e4c18c8e0cb8829849853aeb8e18090ea753ccccfdc6f?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244"
              alt="Background for testimonials section"
              className="object-cover absolute inset-0 size-full"
            />
            <div className="Testimonials gap-5 flex Y-axis-Testimonials relative flex-col max-w-full w-full md:w-[679px]">
              <h2 className="self-center text-base tracking-widest leading-snug">
                TESTIMONIALS
              </h2>
              <h3 className="mt-8 text-2xl sm:text-3xl md:text-4xl font-normal uppercase tracking-widest max-md:max-w-full">
                WHAT OUR CUSTOMERS SAY
              </h3>
              <div className="testimonial-slider mt-[5%]">
                <p
                  className="testimonial-slide"
                  style={{
                    transform: `translateX(-${currentTestimonialIndex * 100}%)`,
                  }}
                >
                  {testimonials.map((text, index) => (
                    <span key={index} className="testimonial-text text-gray-400">
                      {text}
                    </span>
                  ))}
                </p>
              </div>
              <div className="flex flex-wrap justify-center mt-10 max-w-full tracking-wider text-white uppercase w-full   mx-auto">
                <Link to={'/get-in-touch'}>
                  <button className={`flex overflow-hidden text-sm justify-center bg-red-700 items-center self-center px-16 md:px-14 py-3 my-auto border border-solid border-zinc-800 border-opacity-10 min-h-[55px] rounded-[60px] `}>
                    CONTACT US
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}




const ServiceItem = React.forwardRef(({ path, text, onMouseEnter, onMouseLeave }, ref) => {
  const content = (
    <div
      ref={ref}
      className={`flex w-[7.2rem] h-[7.2rem] lg:h-[9rem] lg:w-[9rem] 2xl:w-[11.5rem] 2xl:h-[11.5rem] rounded-full items-center justify-center p-[0.5%] lg:p-[1.5%] transition-all duration-300 
        ${text === "" ? "bg-transparent" : "border border-solid hover:bg-red-600"}`}
      onMouseEnter={() => {
        if (text !== "") {
          onMouseEnter();
        }
      }}
      onMouseLeave={() => {
        if (text !== "") {
          onMouseLeave();
        }
      }}
    >
      <span className="text-center text-[10px] lg:text-[10px] 2xl:text-[12px] ">{text}</span>
    </div>
  );

  return path ? <Link to={path}>{content}</Link> : content;
});

const ServiceItem2 = React.forwardRef(({ path, text, onMouseEnter, onMouseLeave }, ref) => {
  const content = (
    <div
      ref={ref}
      className={`flex w-[7.2rem] h-[7.2rem] lg:h-[9rem] lg:w-[9rem] 2xl:w-[11.5rem] 2xl:h-[11.5rem] rounded-full items-center justify-center p-[0.5%] lg:p-[1.5%] transition-all duration-300 
        ${text === "" ? "bg-transparent" : "border border-solid hover:bg-red-600"}`}
      onMouseEnter={() => {
        if (text !== "") {
          onMouseEnter();
        }
      }}
      onMouseLeave={() => {
        if (text !== "") {
          onMouseLeave();
        }
      }}
    >
      <span className="text-center text-[10px] lg:text-[10px] 2xl:text-[12px] ">{text}</span>
    </div>
  );

  return path ? <Link to={path}>{content}</Link> : content;
});


function CarouselSection({ components }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1); // Default to 1 for mobile
  const totalCards = components.length;

  // Function to handle the right click (move forward)
  const handleCarouselClickRight = () => {
    setCurrentIndex((prevIndex) => {
      return (prevIndex + 1) % totalCards; // Move forward one card
    });
  };

  // Function to handle the left click (move backward)
  const handleCarouselClickLeft = () => {
    setCurrentIndex((prevIndex) => {
      return (prevIndex - 1 + totalCards) % totalCards; // Move backward one card
    });
  };

  // Update the number of visible cards based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setVisibleCards(1); // Mobile
      } else if (window.innerWidth <= 1024) {
        setVisibleCards(2); // Medium
      } else {
        setVisibleCards(3); // Large
      }
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize); // Listen for resize events

    return () => window.removeEventListener('resize', handleResize); // Cleanup listener
  }, []);

  return (
    <section className="flex xl:px-[100px] lg:px-[60px] flex-col items-start px-5 pt-16 pb-32 bg-black">
      <div className="flex flex-wrap gap-5 justify-between w-full">
        <h2 className="md:text-3xl text-2xl font-bold leading-none text-red-700 uppercase">
          KEY COMPONENTS OF THE STUDY
        </h2>
        <div className="flex self-end flex-col min-h-[60px]">
          <div className="flex gap-5 items-start w-full max-w-[140px]">
            {/* Left Arrow Button */}
            <div className="flex justify-center items-center min-h-[60px] w-[60px]">
              <button onClick={handleCarouselClickLeft}>
                <div className="flex overflow-hidden flex-1 shrink justify-center items-center self-stretch p-5 my-auto w-full border border-white border-solid basis-0 min-h-[60px] rounded-[60px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/150914823e04aa0b72d10dfe3eaaf22d38b599636111c8b7ad6e80476980a940?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244"
                    alt="Left Arrow"
                    className="object-contain flex-1 w-6 aspect-square"
                  />
                </div>
              </button>
            </div>
            {/* Right Arrow Button */}
            <div className="flex justify-center items-center min-h-[60px] w-[60px]">
              <button onClick={handleCarouselClickRight}>
                <div className="flex overflow-hidden flex-1 shrink justify-center items-center self-stretch px-5 my-auto bg-white border border-solid basis-0 border-zinc-900 border-opacity-10 h-[60px] min-h-[60px] rounded-[60px] w-[60px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/5bcda9453f93d58b48e207cfd8d3b19c69b7c4768fd9e522cbaaea6950c4e4b3?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244"
                    alt="Right Arrow"
                    className="object-contain flex-1 w-6 aspect-square"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="flex justify-center card-slider items-center mt-10 w-full overflow-hidden">
        {/* Carousel wrapper */}
        <div
          className="flex transition-transform  duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / visibleCards}%)`, // Move based on currentIndex and visibleCards
            width: `${totalCards * (100 / visibleCards)}%`, // Total width based on total cards and visible cards
          }}
        >
          {components.map((component) => (
            <div
              key={component.title}
              className="flex overflow-hidden Y-axis-card-anm flex-col self-center sm:self-start items-center sm:items-start w-full "
              style={{
                flex: `0 0 ${100 / visibleCards}%`, // Adjust width of each card based on visibleCards
              }}
            >
              <img src={component.imageSrc} alt={component.title} className="h-[3rem]" />
              <h3 className="text-red-700 font-normal w-[80vw] sm:w-[90%] text-2xl sm:text-start my-5 text-center">{component.title}</h3>
              <p className=" text-gray-400 text-center w-[80vw] sm:w-[70%] font-thin lg:w-[80%] sm:text-start text-lg max-w-screen-xl">{component.description}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}














const VerticalCarousel = () => {
  const benefitItems = [
    "ABOUT Earthing studies",
    "Earthing/Grounding System Studies",
    "Our Certifications and Expertise",
    "Detailed Study Reports and Analysis",
    "Benefits of Professional Earthing/Grounding System Studies",
  ];

  const cardContents = [

    {
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6ea8583cc00a44231bfb61be46e3517321fdd08d7a42dfe22fc28df7bfdc2e24?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244",
      title: "What is an earthing / grounding system study ?",
      description:
        "An Earthing/Grounding System Study involves evaluating the effectiveness and integrity of both above and below ground connections in electrical installations. These studies help in pinpointing defective joints that can seriously affect the safety and performance of electrical systems.",
    },
    {
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6ea8583cc00a44231bfb61be46e3517321fdd08d7a42dfe22fc28df7bfdc2e24?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244",
      title: "Earthing/Grounding System Studies",
      description:
        "|Having data of 300,000 earth riser connections in various geographies, the defect rate is alarming. (Get in touch with us to see the statistics)| Rectifying defective connections will help ensure the safety of personnel and equipment by preventing electric shock and equipment damage.|Enhancing the reliability and performance of electrical systems.|Complying with international standards such as IEEE, IEC and local regulations.|Preventing operational disruptions and improving system efficiency.",
    },
    {
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6ea8583cc00a44231bfb61be46e3517321fdd08d7a42dfe22fc28df7bfdc2e24?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244",
      title: "Our certifications and expertize",
      description:
        `JEFs team is certified and trained in the latest standards and practices, including: |3 patents in the area of Grounding System Testing. |IEEE Standards: Compliance with IEEE 80, IEEE 81, IEEE 142 and IEEE 1100.`,
    },
    {
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6ea8583cc00a44231bfb61be46e3517321fdd08d7a42dfe22fc28df7bfdc2e24?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244",
      title: "Detailed Study Reports and Analysis",
      description:
        `Our detailed reports include : |Comprehensive documentation of test results, findings and observations with details of specific risers & joints that need rectification.|Summary of compliance with relevant standards and recommendations for improvements.|Actionable insights for enhancing system safety and performance including design and maintenance related aspects, if any.`,
    },
    {
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6ea8583cc00a44231bfb61be46e3517321fdd08d7a42dfe22fc28df7bfdc2e24?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244",
      title: "Benefits of Professional Earthing/Grounding System Studies",
      description:
        "|Enhanced Electrical Safety: Reducing the risk of electric shock and equipment damage.|Operational Efficiency: Ensuring reliable and efficient operation of electrical systems.|Standards Compliance: Meeting international and local regulations for earthing/grounding systems.|Cost Savings: Preventing costly equipment failures and operational disruptions.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const [isScreenTall, setIsScreenTall] = useState(window.innerHeight < 600 && window.innerWidth > 1023);

  useEffect(() => {
    const handleResize = () => {
      setIsScreenTall(window.innerHeight < 600 && window.innerWidth > 1023);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section>
      <div className="overflow-hidden py-20 w-full bg-stone-900 max-md:pt-24 px-5 md:px-12 lg:px-0 max-md:mt-10 max-md:w-full">
        <div className="flex flex-col lg:flex-row w-full xl:w-[95%] gap-5 max-md:flex-col">
          {/* Left Side: Benefit Items */}
          <div className="flex flex-col lg:w-[44%] max-md:ml-0 max-md:w-full">
            <ul className="flex flex-col lg:mx-auto justify-center space-y-5 max-w-full text-sm leading-6 text-gray-400 w-full lg:w-[70%]">
              {benefitItems.map((item, index) => (
                <li
                  key={index}
                  className={`flex transition-all duration-300 ease-in-out items-start w-full rounded-xl cursor-pointer ${activeIndex === index
                    ? "text-white lg:text-lg 2xl:text-2xl font-semibold h-32 2xl:h-56"
                    : "h-auto text-xs 2xl:text-base"
                    }`}
                  onClick={() => handleClick(index)}
                >
                  {activeIndex === index && (
                    <div className="bg-red-500 w-1 h-full mr-4"></div>
                  )}
                  <div
                    className={`xl:w-[80%] uppercase min-w-[20%] ${activeIndex === index ? "text-white" : "text-gray-400"
                      }`}
                  >
                    {item}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side: Vertical Carousel Content */}
          <div className={`relative flex flex-col w-[56%] max-sm:h-[90vh] max-lg:h-[50vh] overflow-hidden max-md:ml-0 max-lg:w-full ${isScreenTall ? '2xl:min-h-[105vh]' : ''}`}>
            <div
              className="absolute transition-transform duration-500 ease-in-out w-full"
              style={{ transform: `translateY(-${(activeIndex * 100) / 5}%)` }}
            >
              {cardContents.map((content, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-start text-2xl  md:text-3xl text-red-700 mt-12 lg:mt-0 h-screen lg:w-full ${isScreenTall ? '2xl:min-h-[105vh]' : ''}`}
                >
                  <img
                    loading="lazy"
                    src={content.imgSrc}
                    alt={content.title}
                    className="object-contain max-w-full  w-[6rem] 2xl:w-[124px] transition-opacity duration-500 ease-in-out"
                  />
                  <ul className="hidden mx-auto justify-center space-y-5 my-4 max-w-full text-sm leading-6 text-gray-400 w-[90%] ">
                    {benefitItems.slice(0, 1).map((item, index) => (
                      <li
                        key={index}
                        className={`flex transition-all duration-300 ease-in-out items-start w-full rounded-xl cursor-pointer ${activeIndex === index
                          ? "text-white text-lg lg:text-2xl h-14 lg:h-24"
                          : "h-auto text-base"
                          }`}
                        onClick={() => handleClick(index)}
                      >
                        {activeIndex === index && (
                          <div className="bg-red-500 w-1 h-full mr-4"></div>
                        )}
                        <div
                          className={`w-[80%] uppercase min-w-[20%] ${activeIndex === index ? "text-white" : "text-gray-400"
                            }`}
                        >
                          {item}
                        </div>
                      </li>
                    ))}
                  </ul>


                  <h2 className="2xl:mt-6 mt-4 lg:w-[80%] lg:text-2xl 2xl:text-3xl font-semibold sm:ml-5 lg:ml-0 tracking-[4.53px] uppercase w-full">
                    {content.title}
                  </h2>
                  <div className="mt-10 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col">
                      <div className="flex h-auto flex-col w-full max-md:w-full">
                        {/* Splitting description by period and inserting line breaks with bullet */}
                        {content.description.split("|").map((sentence, idx) => (
                          <div key={idx} className="flex items-start">
                            <span className="leading-none lg:-mt-[1.8%] 2xl:-mt-[0.5%] tracking-widest text-white max-md:max-w-full self-start">
                              {idx > 0 && "•"} {/* Add bullet point for new lines */}
                            </span>
                            <p className="sm:ml-4 text-base lg:text-xs 2xl:text-base font-light 2xl:leading-7 tracking-widest text-white max-md:max-w-full">
                              {["Enhanced Safety:", "Operational Reliability:", "Standards Compliance:", "Cost Savings:"].includes(sentence.trim()) ? (
                                <span className="text-red-500 !important">{sentence.trim()}</span> // Add the color red forcibly
                              ) : (
                                sentence.trim() // Render the rest of the text as normal
                              )}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>

          {/* Additional Image Section */}
          <div className="ml-5 w-[45%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center my-[6%] max-md:mt-10 max-md:max-w-full">
              <img
                loading="lazy"
                src="./SerivePage/Earthing.png"
                alt="Earthing/Grounding System Illustration"
                className="object-cover w-full h-full aspect-[0.96] max-md:max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};











export default EarthingStudies