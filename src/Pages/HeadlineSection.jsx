import * as React from "react";

const HeadlineSection = () => (
  <section className="flex relative flex-col self-center mt-16 w-full max-w-[1310px] max-md:mt-10 max-md:max-w-full">
     <div className="flex flex-col justify-end px-1 py-2 w-14 rounded-full border border-white border-solid">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe40bec5e151c01e14e3a7737b45c991c3835bece61c8f61b2315752fa4f8a69?placeholderIfAbsent=true&apiKey=60c6eb6ce37644fdb727618799199006" className="object-contain w-full aspect-[1.2]" />
    </div>
    <h1 className="text-7xl font-bold tracking-wider text-white max-md:max-w-full max-md:text-4xl">THINK ELECTRICAL, THINK JEF</h1>
    <div className="flex gap-6 items-center self-start mt-12 text-2xl uppercase text-neutral-900 tracking-[3px] max-md:mt-10">
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/8855ae14d9effa10b9317a704535212615d40fdec755767f2e9941cd3e8401cc?placeholderIfAbsent=true&apiKey=60c6eb6ce37644fdb727618799199006" alt="" className="object-contain shrink-0 self-stretch my-auto w-16 aspect-square" />
      <button className="gap-2.5 self-stretch px-2.5 py-4 my-auto bg-white border border-solid border-zinc-900 border-opacity-10 min-h-[64px] rounded-[50px] w-[239px]">Learn More</button>
    </div>
    <div className="flex gap-2.5 self-center mt-44 ml-20 w-20 max-md:mt-10">
      <div className="flex shrink-0 w-5 h-5 rounded-full bg-stone-300" />
      <div className="flex shrink-0 w-5 h-5 rounded-full bg-stone-300" />
      <div className="flex shrink-0 w-5 h-5 rounded-full bg-stone-300" />
    </div>
  </section>
);

export default HeadlineSection;