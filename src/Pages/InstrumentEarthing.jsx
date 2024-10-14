import React, { useState, useEffect, useRef } from 'react';
import MainImg from '../Components/MainImg/MainImg';
import MainFooter from '../Components/Footer/MainFooter';
import gsap from 'gsap';

const ServicePage = () => {
  const services = [
    { image: '', text: '' },
    { image: '', text: '' },
    { image: '', text: '' },
    { image: './HomePageImg/WhatWeDoSection/Earthing Studies 2.png', text: 'Earthing studies' },
    { image: './HomePageImg/WhatWeDoSection/Lightning Protection 2.png', text: 'Lightning protection system studies' },
    { image: './HomePageImg/WhatWeDoSection/Power System Studies 2.png', text: 'Power system studies' },
    { image: '', text: '' },
    { image: '', text: '' },
    { image: '', text: '' },
    { image: '', text: '' },
    { image: '', text: '' },
    { image: '', text: '' },
    { image: '', text: '' },
    { image: './HomePageImg/WhatWeDoSection/Power Quality and Root cause Analysis 2.png', text: 'Power quality & root cause analysis' },
    { image: './HomePageImg/WhatWeDoSection/Instrumentation Earthing 2.png', text: 'Instrumentation earthing' },
    { image: '', text: '' },
    { image: '', text: '' },
    { image: '', text: '' },
    { image: '', text: '' },
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
          gsap.to(ref, { scale: 1.5, opacity: 1, duration: 0.2, ease: 'power2.inOut' });
        } else {
          gsap.to(ref, {
            scale: hoveredIndex !== null ? 0.9 : 1,
            opacity: hoveredIndex !== null ? 0.5 : 1,
            border: hoveredIndex !== null && services[index]?.text === '' ? '1px solid white' : '',
            backgroundColor: hoveredIndex !== null && services[index]?.text === '' ? 'transparent' : '',
            duration: 0.2,
            ease: 'power2.inOut'
          });
        }
      }
    });
  }, [hoveredIndex, services]);

  const components = [
    {
      imageSrc: './SerivePage/01.png',
      title: 'Riser Integrity Testing',
      description: 'Evaluating the condition of risers to detect faulty connections/joints with above & below ground.'
    },
    {
      imageSrc: './SerivePage/02.png',
      title: 'Grid Integrity Testing',
      description: 'Checking the continuity and integrity of the grounding grid using advanced impedance measurement techniques.'
    },
    {
      imageSrc: './SerivePage/03.png',
      title: 'Soil Resistivity Testing',
      description: 'Conducting tests to measure soil resistivity and design effective grounding systems.'
    }
  ];

  const navItems = [
    { label: 'HOME', isActive: true },
    { label: 'SERVICES', isActive: true },
    { label: 'EARTHING STUDIES', isActive: false },
  ];

  const benefitItems = [
    "ABOUT Earthing studies",
    'What is an Earthing/Grounding System Studies',
    'Earthing/Grounding System Studies',
    'Our Certifications and Expertise',
    'Detailed Study Reports and Analysis',
    'Benefits of Professional Earthing/Grounding System Studies',
  ];

  const buttons = [
    { text: 'DISCOVER TOURISM', className: 'bg-red-700' },
    { text: 'DISCOVER NATURE', className: 'bg-red-700' }
  ];

  return (
    <>
      <MainImg />

      <section className="flex overflow-hidden h-screen flex-col bg-white">
        <div className="flex relative flex-col w-full h-screen max-md:pb-24 max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6786160be35ce4ae023bd2f04360f5bea335ce494790c4d2fe3eb4f272f11752?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244"
            alt=""
            className="object-cover absolute inset-0 size-full"
          />
          <div className="flex relative flex-col mb-0 mx-40 max-w-full inset-y-2/3 max-md:mt-10 max-md:mb-2.5">
            <h1 className="text-7xl font-bold tracking-wider text-white max-md:max-w-full max-md:text-4xl">
              EARTHING STUDIES
            </h1>
            <div className="flex gap-6 items-center self-start mt-12 text-2xl uppercase text-neutral-900 tracking-[3px] max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8e2bc32c89ba054b97e752f6d6f5997edf21d784f5801ab1d1a29fcf6c681619?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244"
                alt=""
                className="object-contain shrink-0 self-stretch my-auto w-16 aspect-square"
              />
              <button className="gap-2.5 self-stretch px-2.5 py-4 my-auto bg-white border border-solid border-zinc-900 border-opacity-10 min-h-[64px] min-w-[240px] rounded-[50px] w-[261px]">
                Get in touch
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="flex overflow-hidden flex-col bg-stone-900">
        <div className="flex overflow-hidden flex-col w-full bg-white max-md:max-w-full" />
        <nav className="flex flex-col justify-center py-6 px-24 w-full bg-zinc-800 min-h-[64px] max-md:px-5 max-md:max-w-full">
          <div className="flex w-full max-md:max-w-full">
            <div className="flex items-center h-full min-w-[240px]">
              {navItems.map((item, index) => (
                <div key={index} className="flex items-center self-stretch my-auto">
                  <div className={`self-stretch my-auto text-base tracking-wide leading-none uppercase whitespace-nowrap ${item.isActive ? 'text-red-700' : 'text-neutral-300'}`}>
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
        <div className="flex justify-center items-end self-center px-80 mt-24 max-w-full min-h-[80px] w-[770px] max-md:px-5 max-md:mt-10">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a5b9fceb0e226e5b66fa7580d7059e32df43c8cd5c99cc7efcf4ad1973c1596e?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244" alt="Earthing Studies Logo" className="object-contain w-20 aspect-square" />
        </div>
        <header className="flex flex-col items-center self-center mt-14 w-full text-2xl leading-9 text-center text-white max-w-[1391px] max-md:mt-10 max-md:max-w-full">
          <h1 className="flex flex-col max-w-full text-4xl font-medium uppercase leading-[60px] tracking-[6.06px] w-[1071px]">
            <div className="w-full max-md:max-w-full">
              Comprehensive Earthing/Grounding integrity testing services
            </div>
          </h1>
          <p className="self-stretch mt-12 font-light max-md:mt-10 max-md:max-w-full">
            As a pioneer in Earthing integrity testing services, we at JEF have over 12 years of experience covering 300,000 riser connections spread across 18 countries, ranging from 66kV to 765kV process plants and other critical installations.
            <br />
            With several patents in this field, our level of expertise is unmatched even we keep innovating further.
          </p>
          <p className="mt-12 max-md:mt-10 font-light max-md:max-w-full">
            With several patents in this field, our level of expertise is unmatched even we keep
            <br />
            innovating further.
          </p>
        </header>
        <div className="flex flex-col self-center mt-14 max-w-full text-base leading-6 text-center text-red-700 w-[770px] max-md:mt-10">
          <p className="px-56 w-full max-md:px-5 max-md:max-w-full">
            Get in touch for Real-Life Case Studies and Testimonials
          </p>
          <div className="flex mt-2.5 w-full min-h-[24px] max-md:max-w-full" />
        </div>
        <button className="flex gap-3.5 justify-center items-center self-center p-4 max-w-full text-sm tracking-wider leading-none text-center text-white uppercase border border-white border-solid rounded-[60px] w-[267px]">
          <span className="self-stretch my-auto">CONTACT US</span>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ad33562234bc92238f0281eafa23a9b3c49a837f5ae8d3662c67bc1d8b919e14?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
        </button>
      </section>

      <section >
        <div className="overflow-hidden py-32 pl-20 w-full bg-stone-900 max-md:pt-24 max-md:pl-5 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[68%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col w-full max-md:mt-10 max-md:max-w-full">
                <div className="mr-6 max-md:mr-2.5 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col">
                    <div className="flex flex-col w-[44%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow tracking-normal uppercase max-md:max-w-full">
                        <ul className="flex flex-col mx-auto justify-center space-y-5 max-w-full text-sm leading-6 text-gray-400 w-[70%] max-md:pl-5 max-md:ml-2.5">
                          {benefitItems.map((item, index) => (
                            <li key={index} className="flex items-start w-full rounded-xl">
                              <div className="pr-20 min-w-[180px]">{item}</div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="flex flex-col w-[56%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col items-start text-3xl text-red-700  max-md:max-w-full">
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6ea8583cc00a44231bfb61be46e3517321fdd08d7a42dfe22fc28df7bfdc2e24?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244" alt="Earthing/Grounding System Studies Icon" className="object-contain max-w-full aspect-[1.77] w-[124px]" />
                        <h2 className="mt-6 ml-5 w-[80%] tracking-[4.53px] font-light leading-[60px] uppercase max-md:max-w-full">
                          What is an earthing/ grounding system studies
                        </h2>
                         <div className="mt-3.5 max-md:max-w-full">
                          <div className="flex gap-5 max-md:flex-col">
                            <div className="flex flex-col w-full max-md:ml-0 max-md:w-full">
                              <p className="mt-7 ml-5 text-2xl leading-9 tracking-widest text-white max-md:mt-10 max-md:max-w-full">
                                An Earthing/Grounding System Study involves evaluating the effectiveness and integrity of
                                both above and below ground connections in electrical installations. These studies help in 
                                pinpointing defective joints that can seriously affect the safety and performance of electrical
                                systems.
                              </p>
                            </div>
                          </div>
                        </div> 
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" ml-5 w-[32%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center my-[6%] h-[30rem] max-md:mt-10 max-md:max-w-full">
                <img loading="lazy" src="./SerivePage/magna-discovery.jpg.png" alt="Earthing/Grounding System Illustration" className="object-contain w-full h-full aspect-[0.96] max-md:max-w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <CarouselSection components={components} />
      </section>

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
              <h2 className="self-center text-5xl font-semibold leading-none text-red-700 tracking-[4.53px] max-md:max-w-full max-md:text-4xl">
                Our Services
              </h2>
              <div className="flex flex-wrap justify-center mt-20 max-md:mt-10 w-full h-[50vh]">
                <div className='flex items-center gap-x-10 circleChild'>
                  {services.slice(0, 9).map((service, index) => (
                    <ServiceItem
                      key={index}
                      text={service.text}
                      image={service.image}
                      ref={(el) => (serviceRefs.current[index] = el)}
                      onMouseEnter={() => handleMouseEnter(index, service.image)}
                      onMouseLeave={handleMouseLeave}
                    />
                  ))}
                </div>
                <div className='flex gap-x-10'>
                  {services.slice(9).map((service, index) => (
                    <ServiceItem
                      key={index + 9}
                      text={service.text}
                      image={service.image}
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
              <div className="flex relative flex-col max-w-full w-full md:w-[679px]">
                <h2 className="self-center text-base tracking-widest leading-snug">
                  TESTIMONIALS
                </h2>
                <h3 className="mt-8 text-2xl sm:text-3xl md:text-4xl font-normal uppercase tracking-widest max-md:max-w-full">
                  WHAT OUR CUSTOMERS SAY
                </h3>
                <p className="mt-10 text-sm sm:text-lg font-thin leading-6 max-md:max-w-full">
                  A new benchmark for sustainability in an area of outstanding natural beauty, Magna will
                  be limited to 5% of the land for development. The region will protect, preserve and
                  regenerate the landscapes in which it sits – and ensure the wildlife is returned to its past
                  glory – for tourists, residents and guests to enjoy forever.
                </p>
                <div className="flex flex-wrap justify-center mt-10 max-w-full tracking-wider text-white uppercase w-full sm:w-[90%] md:w-[510px] mx-auto">
                  {buttons.map((button, index) => (
                    <div key={index} className="flex flex-col flex-1 grow shrink-0 justify-center p-2.5 text-sm leading-none basis-0 min-h-[80px] w-fit">
                      <div className="flex items-center py-1 w-full max-w-[235px] min-h-[60px]">
                        <button className={`flex overflow-hidden justify-center items-center self-stretch px-5 sm:px-9 py-5 my-auto ${button.className} border border-solid border-zinc-800 border-opacity-10 min-h-[55px] rounded-[60px] w-full sm:w-[235px]`}>
                          <span className="self-stretch pb-px my-auto">
                            {button.text}
                          </span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MainFooter />
    </>
  );
};

const ServiceItem = React.forwardRef(({ text, onMouseEnter, onMouseLeave }, ref) => {
  return (
    <div
      ref={ref}
      className={`flex w-[150px] h-[150px] rounded-full items-center justify-center p-4 transition-all duration-300 
        ${text === "" ? "bg-stone-800" : "border border-solid hover:bg-red-600"}`}
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
      <span className="text-center">{text}</span>
    </div>
  );
});

function CarouselSection({ components }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = 3;
  const totalCards = components.length;

  const handleCarouselClickRight = () => {
    setCurrentIndex((prevIndex) => {
      return (prevIndex + visibleCards) % totalCards;
    });
  };

  const handleCarouselClickLeft = () => {
    setCurrentIndex((prevIndex) => {
      return (prevIndex - visibleCards + totalCards) % totalCards;
    });
  };

  return (
    <section className="flex lg:px-[100px] overflow-hidden flex-col items-start px-14 pt-16 pb-32 bg-black max-md:px-5 max-md:pb-24">
      <div className="flex flex-wrap gap-5 justify-between w-full max-md:max-w-full">
        <h2 className="self-start text-4xl font-bold leading-none text-red-700 uppercase max-md:max-w-full">
          KEY COMPONENTS OF THE STUDY
        </h2>
        <div className="flex self-end flex-col min-h-[60px]">
          <div className="flex gap-5 items-start w-full max-w-[140px]">
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

      <div className="flex justify-between items-center mt-36 w-full text-2xl max-md:mt-10 overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
            width: `${(totalCards / visibleCards) * 100}%`,
          }}
        >
          {components.map((component, index) => (
            <React.Fragment key={component.title}>
              <div
                className="flex flex-col items-start  max-md:max-w-full"
                style={{
                  flex: `0 0 ${31}%`,
                }}
              >
                <div className="">
                  <img src={component.imageSrc} alt={component.title} className="w-full h-auto" />
                </div>
                <h3 className="mt-8 xl:w-[75%] font-normal leading-none text-red-700">
                  {component.title}
                </h3>
                <p className="w-[45%] xl:w-[77%] lg:w-full mt-8 right-0 font-thin leading-8 text-gray-400 max-md:w-full">
                  {component.description}
                </p>
              </div>
              {index < components.length - 1 && (
                <img
                  src="./SerivePage/Line 14.png"
                  alt="LineImg"
                  className="mr-16"
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicePage;