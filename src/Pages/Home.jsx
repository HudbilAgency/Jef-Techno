import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import MainImg from '../Components/MainImg/MainImg';

function Home() {
  return (
    <>
    <MainImg
    imgurl="./HomePageImg/Img1.png"
    title={<h1 className="lg:text-6xl font-semibold md:text-3xl text-2xl md:mb-4 lg:mb-12 md:mx-[20px] lg:mx-[200px] text-white">THINK ELECTRICAL, THINK JEF</h1>}
    contentNav="Transform your online presence with our professional web development services, tailored to elevate your brand's digital footprint."
  />
    {/* <section className="flex relative flex-col self-center w-full max-w-[1310px] max-md:max-w-full">
      <img src="./HomePageImg/Img1.png" alt="mainImg" className='object-cover' />
      <h1 className="text-7xl font-bold tracking-wider text-white max-md:max-w-full max-md:text-4xl">
        THINK ELECTRICAL, THINK JEF
      </h1>
      <div className="flex gap-6 items-center self-start mt-12 text-2xl uppercase text-neutral-900 tracking-[3px] max-md:mt-10">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8855ae14d9effa10b9317a704535212615d40fdec755767f2e9941cd3e8401cc?placeholderIfAbsent=true&apiKey=60c6eb6ce37644fdb727618799199006" alt="" className="object-contain shrink-0 self-stretch my-auto w-16 aspect-square" />
        <button className="gap-2.5 self-stretch px-2.5 py-4 my-auto bg-white border border-solid border-zinc-900 border-opacity-10 min-h-[64px] rounded-[50px] w-[239px]">
          Learn More
        </button>
      </div>
      <div className="flex gap-2.5 self-center mt-44 ml-20 w-20 max-md:mt-10">
        <div className="flex shrink-0 w-5 h-5 rounded-full bg-stone-300" />
        <div className="flex shrink-0 w-5 h-5 rounded-full bg-stone-300" />
        <div className="flex shrink-0 w-5 h-5 rounded-full bg-stone-300" />
      </div>
    </section> */}
    </>
  );
}

export default Home;