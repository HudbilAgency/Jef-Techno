import React, { useState, useEffect, useRef } from "react";
import Navbar from "../Components/Navbar/Navbar";
import MainFooter from "../Components/Footer/MainFooter";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Helmet } from 'react-helmet';


gsap.registerPlugin(ScrollTrigger);

function RenewableEnergyResource() {

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

  const serviceData = [
    {
      number: '/01.png',
      title: 'Comprehensive Lightning Protection & Grounding Solutions',
      description: `We provide end- to-end services from system design to installation, ensuring your renewable energy facility is fully protected against electrical hazards. Lightning strikes and power surges can cause significant damage to solar farms or wind turbines, leading to costly downtimes. JEF's protection systems are tailored to withstand the harsh environmental conditions of the Middle East, ensuring optimal performance.`
    },
    {
      number: '/02.png',
      title: 'Design and Detailed Engineering',
      description: `Our team of experts provides meticulous design and engineering services that comply with international standards such as IEC 62305 and local regulations. Whether it's solar PV, battery energy storage systems (BESS), or wind farms, our detailed engineering ensures efficient integration with the grid, reducing the risk of power quality issues.`
    },
    {
      number: '/03.png',
      title: 'Adequacy Study & Root Cause Analysis (RCA)',
      description: 'Our Adequacy Study identifies gaps in your current systems, ensuring compliance and operational efficiency. The Root Cause Analysis addresses potential weaknesses and offers long-term solutions to avoid future disruptions.'
    }
  ];

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
      <Navbar />
      <main className="w-full overflow-hidden">
        <section className="flex h-screen overflow-hidden flex-col text-4xl font-bold lg:text-5xl  tracking-wider text-white ">
          <div className="flex flex-col h-screen relative max-md:text-4xl">
            <div className="">
              <video autoPlay loop muted playsInline className="absolute size-full object-cover" >
                <source src="../IndustriesPage/REI.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <h1 className="inset-y-2/3 xl:mt-[10%] lg:inset-x-20 absolute inset-0 p-4 flex z-10">
                RENEWABLE ENERGY INDUSTRY
              </h1>
            </div>
          </div>
        </section>

        {/* Navigated Section */}

        <section>
          < Navigation />
        </section>


        {/*  */}

        <section className="px-[5%] pt-[4%]">
          <main className="flex flex-col text-center">
            <header className="flex flex-col w-full text-2xl lg:text-3xl font-semibold uppercase text-stone-900 tracking-[2.06px] max-md:max-w-full">
              <img
                loading="lazy"
                src="/IndustriesPage/WindmilLogo.png"
                alt="Renewable Energy Industry Logo"
                className="object-cover self-center max-w-full aspect-square w-20"
              />
              <h1 className="mt-16 w-full font-medium max-md:mt-10 max-md:max-w-full">
                Renewable Energy Industry
              </h1>
            </header>
            <section className="mt-12 text-base xl:text-lg p-2 md:text-xl md:w-[80%] lg:w-[60%] self-center lg:leading-10 text-zinc-900 max-md:mt-10 max-md:max-w-full">
              <p>
                The Middle East, particularly the{" "}
                <span className="font-semibold">UAE, Saudi Arabia, and Qatar</span>,
                has committed to ambitious renewable energy goals. The regions
                reliance on solar PV and wind energy has significantly increased,
                making{" "}
                <span className="font-semibold">
                  renewable energy infrastructure
                </span>{" "}
                critical to national sustainability strategies. JEF is positioned as a
                key partner in this growth, offering state-of- the-art{" "}
                <span className="font-semibold">
                  lightning protection, grounding solutions, and detailed engineering
                  services
                </span>{" "}
                designed to ensure the operational continuity and safety of renewable
                energy projects.
              </p>
            </section>
          </main>
        </section>



        <section>
          < IntegratingDiverseSpecializations />
        </section>




        {/* Service Provided Section */}

        <section className="flex overflow-hidden flex-col justify-center items-center px-20 py-20 font-bold bg-stone-900 max-md:px-5">
          <div className="flex flex-col w-full max-w-[1518px] max-md:max-w-full">
            <h2 className="Y-axis-card-anm self-start text-3xl lg:text-4xl leading-none text-red-700 uppercase max-md:max-w-full ">
              service provided
            </h2>
            <div className="card-slider grid grid-cols-1 xl:grid-cols-3 gap-10 xl:gap-12 items-start mt-20 max-md:mt-10">
              {serviceData.map((service, index) => (
                <React.Fragment key={service.number}>
                  <div className="flex flex-col xl:flex-row gap-6 xl:gap-12 h-full">
                    <article className="Y-axis-card-anm flex flex-col pt-1.5 pb-1.5 xl:pt-0 min-h-full rounded-none w-fit">
                      <h3 className="self-start ">
                        <img
                          src={service.number} className="h-[2rem] lg:h-[3rem]" />
                      </h3>
                      <h4 className="mt-5 lg:mt-10 text-xl lg:text-2xl  text-red-700 max-md:max-w-full">
                        {service.title}
                      </h4>
                      <p className="mt-5 lg:mt-10 text-base lg:text-lg font-extralight text-white max-md:mt-10 max-md:mr-2 max-md:max-w-full">
                        {service.description}
                      </p>
                    </article>
                    {service.number !== '/03.png' && (
                      <div className="xl:w-[1px] border border-gray-600 w-full h-[1px] xl:min-h-full" />
                    )}
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>






        <section>
          < Segments />
        </section>




        <section className="flex overflow-hidden flex-col text-base font-light  text-stone-300">
          <div className="flex relative flex-col justify-center items-start px-20 py-24 w-full min-h-[628px] max-md:px-5 max-md:pb-24 max-md:max-w-full">
            <img loading="lazy" src="/HomePageImg/ContactUsMainImg.png" alt="" className="object-cover absolute inset-0 size-full" />
            <div className="flex lg:mx-[1%] relative flex-col items-start mb-0 max-w-full w-[521px] max-md:mb-2.5">

              <h1 className="text-2xl Y-axis-text lg:text-3xl font-semibold text-red-700 uppercase tracking-[2px] max-md:text-4xl">
                Contact us
              </h1>

              <p className="self-stretch Y-axis-text mt-4 text-sm lg:text-base font-normal leading-none text-white max-md:max-w-full">
                Get in touch with us for any business enquiry.
              </p>
              <form className="w-full mt-12 max-md:mt-10">
                {inputFields.map((field, index) => (
                  <FormInput key={index} label={field.label} type={field.type} />
                ))}
                <button
                  type="submit"
                  className="overflow-hidden Y-axis-text px-16 py-3 mt-2 max-w-full text-xl font-semibold text-white whitespace-nowrap bg-red-700 rounded-3xl w-[380px] max-md:px-5"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>

      </main>

      < MainFooter />

    </>
  );
}


const statistics = [
  { label: "340 SUCCESSFUL RENEWABLE ENERGY PROJECTS" },
  { label: "Ongoing Projects: 1.6 GW Wind 5.0 GW Solar PV" },
  { label: "Total Projects Capacity: 5.6 GW Wind | 8.1 GW Solar PV" }
];

function StatisticItem({ label, value }) {
  return (
    <div className="mt-4 tracking-widest uppercase max-md:max-w-full">
      {label && (
        <>
          • <span className="text-sm lg:text-lg font-bold">{label}</span>
        </>
      )}
    </div>

  );
}

function IntegratingDiverseSpecializations() {
  return (
    <section className="flex overflow-hidden flex-col items-start py-28">
      <div className="w-screen max-md:max-w-full">
        <div className="flex max-md:flex-col">
          <div className="flex flex-col w-[40%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="/IndustriesPage/DiverseSpecializationsImg.png"
              alt="Illustration representing diverse specializations in electrical engineering"
              className="object-cover grow w-full"
            />
          </div>
          <div className="flex p-4 self-center items-center mx-auto flex-col w-[40%] max-md:w-full">
            <div className="flex flex-col items-center self-center mx-auto my-auto text-2xl leading-[50px] text-stone-900 max-md:mt-10 max-md:max-w-full">
              <h2 className="self-start lg:text-3xl w-[90%] font-bold leading-relaxed tracking-widest text-red-700 uppercase max-md:max-w-full">
                Integrating Diverse Specializations for Value Delivery
              </h2>
              <p className="self-start text-lg lg:text-xl leading-normal font-light w-[95%]  my-14  max-md:mt-10 max-md:max-w-full">
                The diverse specializations within our team ensure a multidimensional approach to problem
                solving, thereby positioning us as a competent and reliable service vendor partner in the
                electrical engineering space.
              </p>
              <h1 className="text-lg lg:text-lg text-start self-start font-semibold">
                {statistics.map((stat, index) => (
                  <StatisticItem key={index} label={stat.label} />
                ))}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
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
  { text: 'Renewable Energy Industry', isActive: true },
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




const Segments = () => {

  const services = [
    { image: '/IndustriesPage/OilandGas.png', text: 'Oil & gas' },
    { image: '/IndustriesPage/Power.png', text: 'Power utilities' },
    { image: '/IndustriesPage/MFplant.png', text: 'manufacturing plant' },
    { image: '/IndustriesPage/Pplant.png', text: 'Process plant' },
    { image: '/IndustriesPage/CB.png', text: 'commercial buildings' },

  ];


  const services1 = [
    { image: '', text: '' },
    { image: '/IndustriesPage/OilandGas.png', text: 'Oil & gas' },
    { image: '/IndustriesPage/Power.png', text: 'Power utilities' },
    { image: '/IndustriesPage/MFplant.png', text: 'manufacturing plant' },
    { image: '/IndustriesPage/Pplant.png', text: 'Process plant' },
    { image: '/IndustriesPage/CB.png', text: 'commercial buildings' },
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

      <section className='xl:hidden'>
        <div className={` h-full bg-white`}>
          <div
            className=" w-full h-full py-20 mainSection bg-white overflow-hidden relative">
            <section className="flex overflow-hidden flex-col text-base leading-6 text-center text-white uppercase w-full relative z-10">
              <h2 className="self-center text-3xl font-semibold leading-none text-red-700 tracking-[4.53px] max-md:max-w-full max-md:text-4xl">
                Segments
              </h2>
              <div className="circle-sliderMob flex flex-wrap justify-center gap-x-2 md:gap-x-5 lg:gap-x-10 mt-20 max-md:mt-10 w-full h-full">
                <div className='Y-axis-Segments-anmMob flex items-center gap-x-2 md:gap-x-5 lg:gap-x-10 circleChild'>
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
                <div className='Y-axis-Segments-anmMob flex gap-x-2 md:gap-x-5 lg:gap-x-10'>
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

      <section className='hidden xl:block'>
        <div className={` h-full bg-white`}>
          <div
            className=" w-full h-full py-20 mainSection bg-white relative">
            <section className="flex flex-col text-base leading-6 text-center text-white uppercase w-full relative z-10">
              <h2 className="self-center text-3xl font-semibold leading-none text-red-700 tracking-[4.53px] max-md:max-w-full max-md:text-4xl">
                Segments
              </h2>
              <div className="flex flex-wrap justify-center mt-16 max-md:mt-10 w-full h-full">
                <div className='circle-slider flex items-center gap-x-2 md:gap-x-5 circleChild'>
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
      className={`flex Y-axis-Segments-anm flex-col md:h-[11rem] md:w-[11rem] lg:w-[13rem] lg:h-[13rem] rounded-full items-center justify-center p-[0.5%] lg:p-[1.5%] transition-all duration-300 
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
    > <img src={image} alt={image} className='h-10' />
      <span className="text-center mt-1 text-[8px] ">{text}</span>
    </div>

  );
});






export default RenewableEnergyResource;