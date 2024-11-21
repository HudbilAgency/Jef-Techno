import React, { useState, useEffect, useRef } from "react";
import Navbar from '../Components/Navbar/Navbar';
import MainFooter from "../Components/Footer/MainFooter";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';




gsap.registerPlugin(ScrollTrigger);


function SmartDigitalization() {


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

  const inputFields = [
    { label: 'Name', type: 'text' },
    { label: 'Email', type: 'email' },
    { label: 'Mobile Number', type: 'tel' },
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
      <main className="flex overflow-hidden flex-col pb-36 bg-neutral-100 max-md:pb-24">
        <header className="flex overflow-hidden flex-col w-full bg-white max-md:max-w-full">
          <img loading="lazy" src="./HomePageImg/Smart Digitization 1.png" alt="" className="object-cover w-full h-screen" />
        </header>
        <section className="flex  overflow-hidden -mt-28 z-10 flex-col items-start self-center px-12 py-16 ml-4 max-w-full bg-white w-4/5 lg:w-3/5 max-md:px-5">
          <h1 className="text-3xl font-bold leading-none text-red-700 uppercase">
            smart Digitization
          </h1>
          <p className="self-stretch mt-7 text-base font-thin leading-6 text-zinc-800 max-md:max-w-full">
            Our patented Smart Digitization process captures knowledge, streamlines workflows, and ensures accuracy at scale. Trusted by over 450+ customers globally, it delivers secure, standardized reports with customizable formats— over 5,000 reports and a million data points captured to date. Fast, secure, and reliable insights with every report.
          </p>
          <nav className="flex  gap-4 items-center mt-16 max-md:mt-10">
            <Link to={'/'}><Button text="back" icon="https://cdn.builder.io/api/v1/image/assets/TEMP/616169b3ed5242979df0a07098acf715c7d90b4bfc5e4acc44cf58fd9c278f6c?apiKey=d3bbb7c7de3c4da4bc28ced0d6a3e488&" /></Link>
            <Button text="Share Article" icon="https://cdn.builder.io/api/v1/image/assets/TEMP/67ffe9d5cbb1fb26aabfd831ddcbff80ebfc35ad8aacf3e369c8c56711636305?apiKey=d3bbb7c7de3c4da4bc28ced0d6a3e488&" />
          </nav>
        </section>
      </main>



      <section className="flex overflow-hidden flex-col text-base font-light  text-stone-300">
        <div className="flex relative flex-col justify-center items-start px-20 py-24 w-full min-h-[628px] max-md:px-5 max-md:pb-24 max-md:max-w-full">
          <img loading="lazy" src="./HomePageImg/ContactUsMainImg.png" alt="" className="object-cover absolute inset-0 size-full" />
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
      < MainFooter />
    </>
  );
}


function Button({ text, icon }) {
  return (
    <button className="flex gap-2.5 justify-center items-center self-stretch p-2.5 my-auto border border-black border-solid rounded-[60px] min-w-[102px]">
      <span className="self-stretch my-auto text-xs tracking-widest leading-tight text-black uppercase">
        {text}
      </span>
      {icon && (
        <img loading="lazy" src={icon} alt="" className="object-contain flex-1 w-full aspect-square max-w-[19px]" />
      )}
    </button>
  );
}


export default SmartDigitalization;