import React, { useState, useEffect, useRef } from "react";
import MainFooter from '../Components/Footer/MainFooter';
import gsap from 'gsap';
import Navbar from "../Components/Navbar/Navbar";
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';


const PowerSystemStudies = () => {


  useEffect(() => {
    gsap.utils.toArray('.Y-axis-text-Title-Service3').forEach((element) => {
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

  // Testimonials


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
    { label: 'POWER SYSTEM STUDIES', isActive: false },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const benefitItems = [
    "ABOUT Earthing studies",
    'What is an Earthing/Grounding System Studies',
    'Earthing/Grounding System Studies',
    'Our Certifications and Expertise',
    'Detailed Study Reports and Analysis',
    'Benefits of Professional Earthing/Grounding System Studies',
  ];

  const components = [

    {
      imageSrc: './SerivePage/01.png',
      title: 'Risk Assessment',
      description: 'Using Risk Assessment Software to compare calculated risk against tolerable risk levels as per IEC 62305-2.',
    },
    {
      imageSrc: './SerivePage/02.png',
      title: 'Surge Protection Devices (SPD):',
      description: 'Selecting Class I, II, and III SPDs at various levels of the electrical distribution system to protect against conducted surges.',
    },
    {
      imageSrc: './SerivePage/03.png',
      title: 'Additional Mitigation Techniques',
      description: 'Using equi-potential bonding, warning notices, and other best engineering practices to further reduce risk.',
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
          <video autoPlay loop muted playsInline className="absolute size-full object-cover" >
            <source src="./SerivePage/Power System Studies Banner Video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="Y-axis-text-Title-Service3 flex inset-y-3/4 lg:-mt-[2%] 2xl:mt-0 lg:inset-x-20 p-4 relative flex-col self-center w-full max-md:mt-10 max-md:max-w-full mb-0 mx-40 max-w-full max-md:mb-2.5">
            <h1 className=" uppercase lg:text-5xl md:text-4xl text-3xl font-bold my-auto tracking-wider text-white max-md:max-w-full max-md:text-4xl">
              Power System Studies
            </h1>
            <div className="flex gap-6 items-center self-start mt-8 text-lg uppercase text-neutral-900  max-md:mt-10">
              <Link to={'/get-in-touch'}>
                <button className="px-5 lg:px-10 self-stretch  py-2 lg:py-3 my-auto bg-white border border-solid border-zinc-900 border-opacity-10 text-lg hover:bg-red-700 hover:text-white uppercase 2xl:min-h-[64px] rounded-[50px]">
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
        <div className="ContactUsAnimation flex justify-center items-end self-center px-80 mt-24 max-w-full min-h-[80px] w-[770px] max-md:px-5 max-md:mt-10">
          <img loading="lazy" src="./SerivePage/PSLogo.png" alt="Earthing Studies Logo" className="object-contain w-16 aspect-square" />
        </div>
        <header className="ContactUsAnimation flex p-4 flex-col items-center self-center mt-10 w-full text-sm text-center text-white max-w-[1391px] max-md:mt-10 max-md:max-w-full">
          <h1 className="flex flex-col max-w-full text-2xl font-medium uppercase leading-relaxed tracking-wider w-[1071px]">
            <div className="ContactUsAnimation w-full max-md:max-w-full">
              Power System Studies
            </div>
          </h1>
          <p className="self-stretch w-[80%] lg:w-[60%] text-center mx-auto  mt-12 font-light max-md:mt-10 max-md:max-w-full">
            We offer a very wide and comprehensive range of Power System Studies for Renewable Energy applications <br /> including Solar PV, WIND, BESS, Hybrid & Green hydrogen plants & Micro grids.
            With experience in Grid codes of several countries, we bring comprehensive knowledge & Expertise.</p>
          <p>We have multiple licences and expertise in using all major softwares like:
          </p>
          {/* <p className="my-5">With experience in Grid codes of several countries, we bring comprehensive knowledge & Expertise.</p> */}
          {/* <p>We have multiple licences & using all major Softwares like</p> */}
          <div className="my-5">
            <p>PSSE, PSCAD, DIG SILENT, ETAP, EMTP RV, CDEGS.</p>
          </div>
          <p className="w-[80%] lg:w-[60%] text-center mx-auto">We have the ability to study any possible steady state, dynamic, EMT & Hormonic issues, in a new or existing plant.</p>
          <p className="w-[80%] lg:w-[60%] text-center mx-auto">Over the last 30 years, JEF has been synonymous with going the proverbial “EXTRA MILE” to ensure meeting the objectives of the project including technical aspects & timely completion.</p>
        </header>
        <div className="flex flex-col self-center mt-14 max-w-full text-sm md:text-base leading-6 text-center text-red-700 w-[770px] max-md:mt-10">
          <p className="ContactUsAnimation px-56 w-full max-md:px-5 max-md:max-w-full">
            Get in touch for any queries and real-life case-studies
          </p>
          <div className="flex mt-2.5 w-full min-h-[24px] max-md:max-w-full" />
        </div>
        <Link to='/get-in-touch' className="ContactUsAnimation flex gap-3.5 justify-center items-center self-center py-4 px-10 max-w-full text-sm tracking-wider leading-none text-center text-white uppercase border border-white border-solid rounded-[60px]">
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
    <section className="hidden xl:px-[100px] lg:px-[60px] flex-col items-start px-5 pt-16 pb-32 bg-black">
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
      <div className="card-slider flex justify-center items-center mt-10 w-full overflow-hidden">
        {/* Carousel wrapper */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / visibleCards}%)`, // Move based on currentIndex and visibleCards
            width: `${totalCards * (100 / visibleCards)}%`, // Total width based on total cards and visible cards
          }}
        >
          {components.map((component) => (
            <div
              key={component.title}
              className="Y-axis-card-anm flex overflow-hidden flex-col self-center sm:self-start items-center sm:items-start w-full "
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
    "ABOUT power system studies",
    "List of Studies for Renewable Energy",
    "For Industries",
    "Advanced System Studies",
    "Planning and Operations Studies",
    "Industrial Power System Studies",
    "Power System Protection Studies",
    "Electromagnetic Transient Studies",
    "Power Quality Compliance Studies & Measurements",
  ];


  const cardContents = [
    {
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6ea8583cc00a44231bfb61be46e3517321fdd08d7a42dfe22fc28df7bfdc2e24?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244",
      title: "Why choose Us?",
      description:
        "With our patented & unique custom designed & developed automation tool, we offer unparalleled customer service & have consistently ‘delighted’ our customers with the quality, completeness and timeliness of our work product.",
    },
    {
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6ea8583cc00a44231bfb61be46e3517321fdd08d7a42dfe22fc28df7bfdc2e24?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244",
      title: "List of Studies for Renewable Energy",
      description:
        "Grid Integration Studies (for Solar, Wind, BESS, Hybrid, green hydrogen)|Steady State Analysis|Reactive Power Capability Analysis|Transient Studies|Grid Code Compliance Studies|Dynamic grid impact studies|Dynamic model acceptance test|Power Quality Analysis|Insulation Co-ordination Studies|Protection & Relay Co-ordination Studies|AC/DC Arc flash studies|Model Validation test"
    },
    {
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6ea8583cc00a44231bfb61be46e3517321fdd08d7a42dfe22fc28df7bfdc2e24?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244",
      title: "For Industries",
      description:
        "|Load Flow Studies|Short Circuit Studies|Protection & Relay Co-ordination Studies|AC/DC Arc Flash Studies|Harmonic Analysis|Motor Starting Study|Transient Stability|Insulation Co-ordination Studies"
    },
    {
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6ea8583cc00a44231bfb61be46e3517321fdd08d7a42dfe22fc28df7bfdc2e24?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244",
      title: "Advanced System Studies",
      description:
        "|Transmission Network Planning|Power System risk review|Sizing-citing of FACTS devices|HVDC interconnection studies"
    },
    {
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6ea8583cc00a44231bfb61be46e3517321fdd08d7a42dfe22fc28df7bfdc2e24?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244",
      title: "Planning and operations studies",
      description:
        "|Grid impact Studies for new power generation facilities|Grid code compliance studies|Studies for BESS and Hybrid Power Plant|Transmission Network expansion for master plan studies|HVDC and HVAC interconnection studies|Hosting capacity studies for RES integration"
    },
    {
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6ea8583cc00a44231bfb61be46e3517321fdd08d7a42dfe22fc28df7bfdc2e24?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244",
      title: "industrial power system",
      description:
        "|Equipment sizing verification|Static and Dynamic security assessment|Islanding and load shedding studies"
    },
    {
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6ea8583cc00a44231bfb61be46e3517321fdd08d7a42dfe22fc28df7bfdc2e24?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244",
      title: "power system protection studies",
      description:
        "|Protection coordination study|Arc flash risk assessment|Sizing-citing of FACTS devices|Event Analysis"
    },
    {
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6ea8583cc00a44231bfb61be46e3517321fdd08d7a42dfe22fc28df7bfdc2e24?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244",
      title: "Electromagnetic transient studies",
      description:
        "|Insulation Coordination|Lightning"
    },
    {
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6ea8583cc00a44231bfb61be46e3517321fdd08d7a42dfe22fc28df7bfdc2e24?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244",
      title: "power quality compliance studies & measurements",
      description:
        "|Power factor correction sizing|Harmonic analysis and measurements|Capacitor bank studies|Flicker and Voltage unbalance studies|Grid code compliance testing"
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

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
          <div className="relative flex flex-col w-[56%] max-sm:h-[65vh] max-lg:h-[65vh] overflow-hidden max-md:ml-0 max-lg:w-full">
            <div
              className="absolute transition-transform duration-500 ease-in-out w-full"
              style={{ transform: `translateY(-${(activeIndex * 100) / 9}%)` }}
            >
              {cardContents.map((content, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start text-2xl  md:text-3xl text-red-700 mt-12 lg:mt-0 h-screen lg:w-full"
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
                src="./SerivePage/Power System.png"
                alt="Earthing/Grounding System Illustration"
                className="object-cover w-full h-full aspect-[0.96] max-md:max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};











export default PowerSystemStudies