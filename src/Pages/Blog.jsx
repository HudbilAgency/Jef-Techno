import React, {useEffect} from 'react';
import Navbar from '../Components/Navbar/Navbar';
import MainFooter from '../Components/Footer/MainFooter';
import { Link} from 'react-router-dom';
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const BlogPost = ({ date, title, content, imageUrl , path  }) => (
  <article className="Y-axis-card-anm flex flex-col w-full  max-md:mt-10">
    <img loading="lazy" src={imageUrl} alt="" className="object-contain w-full aspect-[1.5]" />
    <time className="self-start mt-3.5 text-xs font-thin leading-snug uppercase text-zinc-600">{date}</time>
    <h2 className="mt-2.5 text-lg leading-6 uppercase text-stone-900">{title}</h2>
    <p className="mt-3.5 text-sm font-thin leading-6 text-stone-900">{content}</p>
    <a href="#" className="flex gap-2.5 items-center self-start mt-6">
      <Link to={path} ><span className="self-stretch pb-px my-auto text-xs tracking-widest leading-tight text-red-700 uppercase">Learn More</span></Link>
      <span className="flex flex-col items-start self-stretch pl-0.5 my-auto min-h-[15px] w-[17px]">
        <span className="flex flex-col justify-center min-h-[15px] w-[15px]">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6864a9076b57404370db3fa6548d76f9442f8db4ea6397d9235cbe4290b012c0?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244" alt="" className="object-contain flex-1 w-full aspect-square" />
        </span>
      </span>
    </a>
  </article>
);

const Blog = () => {
  const blogPosts = [
    {
      date: "August 15, 2024",
      title: "Enhance Reliability, Efficiency and Compliance of Your Electrical Grid through Power System Studies",
      content: "JEF, the sustainable development taking shape in northwest Saudi Arabia, yesterday (Wednesday, August 14) hosted its inaugural JEF Social Responsibility Awards ceremony. The celebratory event hosted by JEF Social Responsibility (JEF SR) honored the outstanding contributions being made by JEF's employees, sectors, departments, partners and communities in the region.",
      imageUrl: "./BlogImg/BlogImg1.png",
      path: '/BlogInside'
    },
    {
      date: "August 15, 2024",
      title: "What are the Challenges for Electrical System Design and Engineering in Greenfield Projects",
      content: "JEF, the sustainable development taking shape in northwest Saudi Arabia, yesterday (Wednesday, August 14) hosted its inaugural JEF Social Responsibility Awards ceremony. The celebratory event hosted by JEF Social Responsibility (JEF SR) honored the outstanding contributions being made by JEF's employees, sectors, departments, partners and communities in the region.",
      imageUrl: "./BlogImg/BlogImg2.png"
    },
    {
      date: "August 15, 2024",
      title: "Measurement, simulation, validation - The 3 key steps of Power System Studies",
      content: "JEF, the sustainable development taking shape in northwest Saudi Arabia, yesterday (Wednesday, August 14) hosted its inaugural JEF Social Responsibility Awards ceremony. The celebratory event hosted by JEF Social Responsibility (JEF SR) honored the outstanding contributions being made by JEF's employees, sectors, departments, partners and communities in the region.",
      imageUrl: "./BlogImg/BlogImg3.png"
    },
    {
      date: "August 15, 2024",
      title: "Ensuring Safety in the Oil and Gas Industry",
      content: "JEF, the sustainable development taking shape in northwest Saudi Arabia, yesterday (Wednesday, August 14) hosted its inaugural JEF Social Responsibility Awards ceremony. The celebratory event hosted by JEF Social Responsibility (JEF SR) honored the outstanding contributions being made by JEF's employees, sectors, departments, partners and communities in the region.",
      imageUrl: "./BlogImg/BlogImg4.png"
    },
    {
        date: "August 15, 2024",
        title: "Enhance Reliability, Efficiency and Compliance of Your Electrical Grid through Power System Studies",
        content: "JEF, the sustainable development taking shape in northwest Saudi Arabia, yesterday (Wednesday, August 14) hosted its inaugural JEF Social Responsibility Awards ceremony. The celebratory event hosted by JEF Social Responsibility (JEF SR) honored the outstanding contributions being made by JEF's employees, sectors, departments, partners and communities in the region.",
        imageUrl: "./BlogImg/BlogImg1.png"
      },
      {
        date: "August 15, 2024",
        title: "What are the Challenges for Electrical System Design and Engineering in Greenfield Projects",
        content: "JEF, the sustainable development taking shape in northwest Saudi Arabia, yesterday (Wednesday, August 14) hosted its inaugural JEF Social Responsibility Awards ceremony. The celebratory event hosted by JEF Social Responsibility (JEF SR) honored the outstanding contributions being made by JEF's employees, sectors, departments, partners and communities in the region.",
        imageUrl: "./BlogImg/BlogImg2.png"
      },
      {
        date: "August 15, 2024",
        title: "Measurement, simulation, validation - The 3 key steps of Power System Studies",
        content: "JEF, the sustainable development taking shape in northwest Saudi Arabia, yesterday (Wednesday, August 14) hosted its inaugural JEF Social Responsibility Awards ceremony. The celebratory event hosted by JEF Social Responsibility (JEF SR) honored the outstanding contributions being made by JEF's employees, sectors, departments, partners and communities in the region.",
        imageUrl: "./BlogImg/BlogImg3.png"
      },
      {
        date: "August 15, 2024",
        title: "Ensuring Safety in the Oil and Gas Industry",
        content: "JEF, the sustainable development taking shape in northwest Saudi Arabia, yesterday (Wednesday, August 14) hosted its inaugural JEF Social Responsibility Awards ceremony. The celebratory event hosted by JEF Social Responsibility (JEF SR) honored the outstanding contributions being made by JEF's employees, sectors, departments, partners and communities in the region.",
        imageUrl: "./BlogImg/BlogImg4.png"
      },
      {
        date: "August 15, 2024",
        title: "Enhance Reliability, Efficiency and Compliance of Your Electrical Grid through Power System Studies",
        content: "JEF, the sustainable development taking shape in northwest Saudi Arabia, yesterday (Wednesday, August 14) hosted its inaugural JEF Social Responsibility Awards ceremony. The celebratory event hosted by JEF Social Responsibility (JEF SR) honored the outstanding contributions being made by JEF's employees, sectors, departments, partners and communities in the region.",
        imageUrl: "./BlogImg/BlogImg1.png"
      },
      {
        date: "August 15, 2024",
        title: "What are the Challenges for Electrical System Design and Engineering in Greenfield Projects",
        content: "JEF, the sustainable development taking shape in northwest Saudi Arabia, yesterday (Wednesday, August 14) hosted its inaugural JEF Social Responsibility Awards ceremony. The celebratory event hosted by JEF Social Responsibility (JEF SR) honored the outstanding contributions being made by JEF's employees, sectors, departments, partners and communities in the region.",
        imageUrl: "./BlogImg/BlogImg2.png"
      }
      
  ];


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
    gsap.fromTo(
      gsap.utils.toArray('.Y-axis-card-anm1'),
      { opacity: 0, y: 100 },
      {
        y: 0,
        opacity: 1,
        duration: 1.1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: '.card-slider1',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      gsap.utils.toArray('.Y-axis-card-anm2'),
      { opacity: 0, y: 100 },
      {
        y: 0,
        opacity: 1,
        duration: 1.1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: '.card-slider2',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  return (

    <>
    < Navbar/>
    <section className="flex overflow-hidden flex-col items-center bg-neutral-100">
      <header className="flex h-screen overflow-hidden flex-col self-stretch w-full bg-zinc-900 max-md:max-w-full">
        <div className="flex relative flex-col w-full h-screen max-md:pb-24 max-md:max-w-full">
          <img loading="lazy" src="./BlogImg/BlogsBanner.png" alt="MainImg" className="object-cover h-screen absolute inset-0 size-full" />
          <div className="flex relative flex-col mb-0 max-w-full mt-[3%] inset-y-3/4 lg:inset-x-20 p-4   max-md:mt-10 max-md:mb-2.5 max-md:ml-2.5">
            <h1 className="self-start text-6xl font-bold tracking-wider text-white">BLOGS</h1>
            {/* <div className="flex gap-2 md:gap-4 lg:gap-6 items-center mt-12 text-2xl uppercase text-neutral-900 tracking-[3px] max-md:mt-10">
              <button className="uppercase px-5 lg:px-10 self-stretch  py-2 lg:py-3 my-auto bg-white border border-solid border-zinc-900 border-opacity-10 text-lg hover:bg-red-700 hover:text-white 2xl:min-h-[64px] rounded-[50px]">
                Get in touch
              </button>
            </div> */}
          </div>
        </div>
      </header>
      <main className="my-28 p-4 w-full max-w-[1312px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {blogPosts.slice(0, 3).map((post, index) => (
            <div key={index} className=" card-slider flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <BlogPost {...post} />
            </div>
          ))}
        </div>
        <div className="mt-24 w-full max-w-[1312px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            {blogPosts.slice(3, 6).map((post, index) => (
              <div key={index} className="card-slider1  flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <BlogPost {...post} />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-24 w-full max-w-[1312px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            {blogPosts.slice(6, 9).map((post, index) => (
              <div key={index} className="card-slider2 flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <BlogPost {...post} />
              </div>
            ))}
          </div>
        </div>
        <nav className="flex gap-4 items-center justify-center mt-20 max-md:mt-10" aria-label="Pagination">
          <button className="gap-2.5 self-stretch px-2.5 py-2 my-auto text-base text-red-700 uppercase whitespace-nowrap border border-red-700 border-solid min-h-[40px] rounded-[60px] w-[129px]">
            Previous
          </button>
          <button className="flex gap-2.5 justify-center items-center self-stretch px-2.5 py-2 my-auto bg-red-700 min-h-[40px] rounded-[60px] w-[129px]">
            <span className="self-stretch my-auto text-base text-white uppercase">Next</span>
            <span className="flex flex-col items-start self-stretch pl-0.5 my-auto min-h-[15px] w-[17px]">
              <span className="flex flex-col justify-center min-h-[15px] w-[15px]">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d0fa7322a21ad8e4a8bfa73c00764fd7ce9d35fd010ac2cc7ec9320870c6df2e?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244" alt="" className="object-contain flex-1 w-full aspect-square" />
              </span>
            </span>
          </button>
        </nav>
      </main>
    </section>
    < MainFooter />
    </>
  );
};

export default Blog;