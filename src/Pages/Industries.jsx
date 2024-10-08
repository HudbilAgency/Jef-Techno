import React from "react";
import Navbar from "../Components/Navbar/Navbar";

function Industries() {
  return (
   <>
    < Navbar />
    <section className="flex h-screen overflow-hidden flex-col text-7xl font-bold tracking-wider text-white bg-pink-900 max-md:text-4xl">
        <div className="flex flex-col relative max-md:px-5 max-md:pt-24 max-md:pb-28 max-md:max-w-full max-md:text-4xl">
            <div className="relative">
            <img
                loading="lazy"
                src="./IndustriesPage/IndustriesMainImg.png"
                alt="Renewable Energy Industry background"
                className="object-cover w-full h-full"
            />
            <h1 className="absolute inset-0 flex items-center justify-center z-10">
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

    <section className="p-[5%]">
        <main className="flex flex-col text-center">
        <header className="flex flex-col w-full text-4xl font-semibold uppercase text-stone-900 tracking-[6.06px] max-md:max-w-full">
            <img
            loading="lazy"
            src="./IndustriesPage/WindmilLogo.png"
            alt="Renewable Energy Industry Logo"
            className="object-contain self-center max-w-full aspect-square w-[150px]"
            />
            <h1 className="mt-16 w-full font-medium max-md:mt-10 max-md:max-w-full">
            Renewable Energy Industry
            </h1>
        </header>
        <section className="mt-12 text-2xl w-[60%] self-center leading-10 text-zinc-900 max-md:mt-10 max-md:max-w-full">
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


   </>
  );
}




const NavigationItem = ({ text, isActive }) => (
  <div className="flex items-center self-stretch my-auto">
    <div
      className={`self-stretch my-auto text-base tracking-wide leading-none uppercase ${
        isActive ? 'text-white' : 'text-red-700'
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
  { text: 'Our Business', isActive: false },
  { text: 'Industries', isActive: false },
  { text: 'Design and Construction', isActive: true },
];

const Navigation = () => (
  <nav className="flex flex-col justify-center items-start px-16 py-6 bg-stone-900 max-md:px-5">
    <div className="flex flex-wrap items-center max-md:max-w-full">
      {navigationItems.map((item, index) => (
        <NavigationItem key={index} {...item} />
      ))}
    </div>
  </nav>
);



export default Industries;