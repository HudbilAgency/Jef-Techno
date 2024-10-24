import React from 'react'
import { useState, useEffect, useRef } from "react";
import gsap from 'gsap';



const Test = () => {

  const services = [
    { image: './IndustriesPage/OilandGas.png', text: 'Oil & gas' },
    { image: './IndustriesPage/Power.png', text: 'Power utilities' },
    { image: './IndustriesPage/MFplant.png', text: 'manufacturing plant' },
    { image: './IndustriesPage/Pplant.png', text: 'Process plant' },
    { image: './IndustriesPage/CB.png', text: 'commercial buildings' },

  ];


  const services1 = [
    { image: '', text: '' },
    { image: './IndustriesPage/OilandGas.png', text: 'Oil & gas' },
    { image: './IndustriesPage/Power.png', text: 'Power utilities' },
    { image: './IndustriesPage/MFplant.png', text: 'manufacturing plant' },
    { image: './IndustriesPage/Pplant.png', text: 'Process plant' },
    { image: './IndustriesPage/CB.png', text: 'commercial buildings' },
    { image: '', text: '' },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const serviceRefs = useRef([]);
  const service1Refs = useRef([]);
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
          gsap.to(ref, { scale: 1.2, opacity: 1, duration: 0.2, ease: 'power2.inOut' });
        } else {
          gsap.to(ref, {
            scale: hoveredIndex !== null ? 0.9 : 1,
            opacity: hoveredIndex !== null ? 0.2 : 1,
            border: hoveredIndex !== null && services[index]?.text === '' ? '1px solid white' : '',
            backgroundColor: hoveredIndex !== null && services[index]?.text === '' ? 'bg-stone-900' : 'bg-white',
            duration: 0.2,
            ease: 'power2.inOut'
          });
        }
      }
    });
  }, [hoveredIndex, services]);


  useEffect(() => {
    service1Refs.current = service1Refs.current.slice(0, services1.length);
  }, [services1]);

  useEffect(() => {
    service1Refs.current.forEach((ref, index) => {
      if (ref) {
        if (index === hoveredIndex && services1[index]?.text !== '') {
          gsap.to(ref, { scale: 1.3, opacity: 1, duration: 0.2, ease: 'power2.inOut' });
        } else {
          gsap.to(ref, {
            scale: hoveredIndex !== null ? 0.9 : 1,
            opacity: hoveredIndex !== null ? 0.2 : 1,
            border: hoveredIndex !== null && services1[index]?.text === '' ? '1px solid white' : '',
            backgroundColor: hoveredIndex !== null && services1[index]?.text === '' ? 'bg-stone-900' : 'bg-white',
            duration: 0.2,
            ease: 'power2.inOut'
          });
        }
      }
    });
  }, [hoveredIndex, services1]);




  return (
    <>
        
  <section className='lg:hidden'>
    <div className={` h-full bg-white`}>
      <div 
        className=" w-full h-full py-20 mainSection bg-white overflow-hidden relative">
        <section className="flex overflow-hidden flex-col text-base leading-6 text-center text-white uppercase w-full relative z-10">
          <h2 className="self-center text-3xl md:text-5xl font-semibold leading-none text-red-700 tracking-[4.53px] max-md:max-w-full max-md:text-4xl">
            Segments
          </h2>
          <div className="flex flex-wrap justify-center mt-20 max-md:mt-10 w-full h-[45vh]">
            <div className='flex items-center gap-x-2 md:gap-x-5 lg:gap-x-10 circleChild'>
                 {services.slice(0, 3).map((service, index) => (
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
            <div className='flex gap-x-2 md:gap-x-5 lg:gap-x-10'>
              {services.slice(3).map((services, index) => (
                <ServiceItem
                key={index}
                text={services.text}
                image={services.image}
                ref={(el) => (serviceRefs.current[index + 3] = el)}
                onMouseEnter={() => handleMouseEnter(index + 3)}
                onMouseLeave={handleMouseLeave}
              />
              ))}
            </div>
          </div>
        </section>
        </div>
    </div>
  </section>

  <section className='hidden lg:block'>
    <div className={` h-full bg-white`}>
      <div 
        className=" w-full h-full py-20 mainSection bg-white overflow-hidden relative">
        <section className="flex overflow-hidden flex-col text-base leading-6 text-center text-white uppercase w-full relative z-10">
          <h2 className="self-center text-3xl md:text-5xl font-semibold leading-none text-red-700 tracking-[4.53px] max-md:max-w-full max-md:text-4xl">
            Segments
          </h2>
          <div className="flex flex-wrap justify-center mt-20 max-md:mt-10 w-full h-[30vh]">
            <div className='flex items-center gap-x-2 md:gap-x-5 circleChild'>
              {services1.slice(0, 9).map((services1, index) => (
                <Service1Item
                  key={index}
                  text={services1.text}
                  image={services1.image}
                  ref={(el) => (service1Refs.current[index] = el)}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                />
              ))}
            </div>
          </div>
        </section>
        </div>
    </div>
  </section>

    </>
  )
}


const Service1Item = React.forwardRef(({ image, text, onMouseEnter, onMouseLeave }, ref) => {
  return (
    <div
  ref={ref}
  className={`flex flex-col md:h-[11rem] md:w-[11rem] lg:w-[13rem] lg:h-[13rem] rounded-full items-center justify-center p-[0.5%] lg:p-[1.5%] transition-all duration-300 
    ${text === "" ? "bg-stone-900" : "border bg-stone-900 border-solid hover:bg-red-600"}`}
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
> <img src={image} alt={image} />
  <span className="text-center mt-2 text-xs ">{text}</span>
</div>

  );
});


const ServiceItem = React.forwardRef(({ image, text, onMouseEnter, onMouseLeave }, ref) => {
  return (
    <div
  ref={ref}
  className={`flex flex-col w-[8.5rem] h-[8.5rem] rounded-full items-center justify-center p-[0.5%] lg:p-[1.5%] transition-all duration-300 
    ${text === "" ? "bg-stone-900" : "border bg-stone-900 border-solid hover:bg-red-600"}`}
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
> <img src={image} alt={image} className='h-10'/>
  <span className="text-center mt-1 text-[8px] ">{text}</span>
</div>

  );
});

export default Test