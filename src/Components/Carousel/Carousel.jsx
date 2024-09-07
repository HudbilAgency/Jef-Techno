import React, { useRef, useState } from "react";
import { gsap } from "gsap";

const Carousel = () => {
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

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div ref={carouselRef} className="flex w-[300%] h-full ">
        <div className="w-full h-full  bg-[url('./public/Img1.png')]">
          <div className="mt-[450px] ml-36 flex relative flex-col self-center   w-full max-w-[1310px] max-md:mt-10 max-md:max-w-full ">
            <h1 className="text-7xl font-bold h-28 my-auto tracking-wider text-white max-md:max-w-full max-md:text-4xl">
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
        <div className="w-full h-full  bg-[url('./public/Img2.png')]">

        <div className="mt-[450px] ml-36 flex relative flex-col self-center   w-full max-w-[1310px] max-md:mt-10 max-md:max-w-full ">
            <h1 className="text-7xl font-bold h-28 my-auto tracking-wider text-white max-md:max-w-full max-md:text-4xl">
            THINK ELECTRICAL, THINK JEF
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
        <div className="w-full h-full  bg-[url('./public/Img3.png')]">
        
        <div className="mt-[450px] ml-36 flex relative flex-col self-center   w-full max-w-[1310px] max-md:mt-10 max-md:max-w-full ">
            <h1 className="text-7xl font-bold h-28 my-auto tracking-wider text-white max-md:max-w-full max-md:text-4xl">
            END-to-END SOLUTIONS FOR ELECTRICAL PROTECTION
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
        className="absolute top-1/2 left-5 transform -translate-y-1/2 cursor-pointer border border-black rounded-full h-16 w-16 flex items-center justify-center"
        onClick={handlePrev}
      >
        ←
      </div>
      <div
        className="absolute top-1/2 right-5 transform -translate-y-1/2 cursor-pointer border border-black rounded-full h-16 w-16 flex items-center justify-center"
        onClick={handleNext}
      >
        →
      </div>
    </div>
  );
};

export default Carousel;
