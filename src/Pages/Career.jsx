import React, { useState , useEffect } from 'react';
import MainFooter from '../Components/Footer/MainFooter'
import Navbar from '../Components/Navbar/Navbar';
import { Link } from "react-router-dom";
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const Career = () => {
 

  useEffect(() => {
    gsap.utils.toArray('.Y-axis-text-Title-Careers').forEach((element) => {
        gsap.fromTo(
            element,
            { opacity: 0 , y: 50 },
            {   y: 0,
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


  const [searchParams, setSearchParams] = useState({
    jobTitle: '',
    location: '',
    category: ''
  });

  const [jobs, setJobs] = useState([
    {
      id: 1,
      timeAgo: "30 min ago",
      logo: "./CareerPage/Logo-1.png",
      title: "Business Development Manager (BDM)",
      company: "JEF Group",
      category: "Hotels & Tourism",
      type: "Full time",
      salary: "2,70,000 SAR per year",
      location: "Saudi Arabia (KSA)",
      path: '/Business_Development_Manager_JobDetails'
    },
    {
      id: 2,
      timeAgo: "12 min ago",
      logo: "./CareerPage/Logo-2.png",
      title: "Technical Support Engineer",
      company: "JEF Group",
      category: "Media",
      type: "Full time",
      salary: "12,854 AED",
      location: "UAE",
      path: '/Technical_Support_Engineer_JobDetails'
    },
    // {
    //   id: 3,
    //   timeAgo: "15 min ago",
    //   logo: "./CareerPage/Logo-3.png",
    //   title: "Internal Integration Planner",
    //   company: "Mraz, Quigley and Feest Inc.",
    //   category: "Construction",
    //   type: "Full time",
    //   salary: "$48000-$50000",
    //   location: "Texas, USA"
    // },
    // {
    //   id: 4,
    //   timeAgo: "24 min ago",
    //   logo: "./CareerPage/Logo-4.png",
    //   title: "District Intranet Director",
    //   company: "VonRueden - Weber Co",
    //   category: "Commerce",
    //   type: "Full time",
    //   salary: "$42000-$48000",
    //   location: "Florida, USA"
    // },
    // {
    //   id: 5,
    //   timeAgo: "26 min ago",
    //   logo: "./CareerPage/Logo-5.png",
    //   title: "Corporate Tactics Facilitator",
    //   company: "Cormier, Turner and Flatley Inc",
    //   category: "Commerce",
    //   type: "Full time",
    //   salary: "$38000-$40000",
    //   location: "Boston, USA"
    // }
  ]);

  const statistics = [
    { icon: "./CareerPage/briefcase.png", count: "25,850", label: "Jobs" },
    { icon: "./CareerPage/groupLogo.png", count: "10,250", label: "Candidates" },
    { icon: "./CareerPage/building 1.png", count: "18,400", label: "Companies" }
  ];


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchParams(prevParams => ({
      ...prevParams,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Search params:', searchParams);
  };

  return (
    <>
    < Navbar />
    <main className="flex overflow-hidden flex-col bg-neutral-100  max-md:pb-24">
        <section className="lg:flex hidden h-screen flex-col w-full max-md:pt-24 max-md:max-w-full">
        <img loading="lazy" src="./CareerPage/CareerMainImg.png" alt="Background" className="object-cover inset-0 size-full" />
        {/* <div className="Y-axis-text-Title-Careers flex -inset-y-1/2 relative flex-col items-center self-center max-w-full">
          <div className="flex flex-col items-center w-full  max-md:max-w-full">
            <div className="flex flex-col items-center w-full text-center">
              <div className="flex flex-col items-center w-full">
                <h1 className="text-5xl font-semibold tracking-wide leading-none text-white max-md:max-w-full max-md:text-4xl">
                  Find Your Dream Job Today!
                </h1>
                <p className="mt-3 self-center text-lg font-normal text-white text-opacity-80 max-md:max-w-full">
                  Connecting Talent with Opportunity: Your Gateway to Career Success
                </p>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="flex overflow-hidden flex-wrap justify-center mt-10 rounded-2xl max-md:max-w-full">
              <div className="flex overflow-hidden gap-5 self-start p-5 text-base font-medium bg-white min-h-[80px] min-w-[240px] text-black text-opacity-50 max-md:max-w-full">
                <div className="flex flex-wrap gap-5 h-full  max-md:max-w-full">
                  <div className="gap-2.5 self-stretch p-2 h-full border-r border-stone-300 border-opacity-60">
                    <label htmlFor="jobTitle" className="sr-only">Job Title or Company</label>
                    <input
                      id="jobTitle"
                      name="jobTitle"
                      type="text"
                      placeholder="Job Title or Company"
                      className="w-full h-full bg-transparent outline-none"
                      value={searchParams.jobTitle}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="flex gap-3 items-center h-full border-r border-stone-300 border-opacity-60">
                    <label htmlFor="location" className="sr-only">Select Location</label>
                    <select
                      id="location"
                      name="location"
                      className="w-full h-full bg-transparent outline-none"
                      value={searchParams.location}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Location</option>
                      <option value="new-york">New York</option>
                      <option value="los-angeles">Los Angeles</option>
                      <option value="chicago">Chicago</option>
                    </select>
                    <img loading="lazy" src="http://b.io/ext_35-" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
                  </div>
                  <div className="flex gap-3 items-center h-full">
                    <label htmlFor="category" className="sr-only my-auto">Select Category</label>
                    <select
                      id="category"
                      name="category"
                      className="w-full h-full bg-transparent outline-none my-auto"
                      value={searchParams.category}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Category</option>
                      <option value="technology">Technology</option>
                      <option value="finance">Finance</option>
                      <option value="healthcare">Healthcare</option>
                    </select>
                    <img loading="lazy" src="http://b.io/ext_35-" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
                  </div>
                </div>
              </div>
              <button type="submit" className="flex overflow-hidden gap-2.5 justify-center items-center px-7 py-3.5 h-full text-lg font-semibold text-white bg-red-700 max-md:px-5">
                <img loading="lazy" src="http://b.io/ext_36-" alt="" className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square" />
                <span className="self-stretch my-auto">Search Job</span>
              </button>
            </form>
          </div>
          <div className="flex flex-wrap gap-10 justify-between items-center mt-20 max-w-full w-[600px] max-md:mt-10">
            {statistics.map((stat, index) => (
              <div key={index} className="flex gap-3 items-center self-stretch my-auto w-40">
                <div className="flex overflow-hidden gap-2.5 justify-center items-center self-stretch p-1 my-auto bg-red-700 w-[3vw] rounded-full aspect-square">
                  <img loading="lazy" src={stat.icon} alt="" className="object-cover self-stretch my-auto aspect-square" />
                </div>
                <div className="flex flex-col self-stretch my-auto whitespace-nowrap">
                  <div className="text-xl font-bold text-white">{stat.count}</div>
                  <div className="text-base text-white text-opacity-80">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}
        {/* <div className="flex flex-wrap gap-10 justify-between px-20 py-10 w-full bg-stone-900 max-md:px-5">
          {companyLogos.map((logo, index) => (
            <img key={index} loading="lazy" src={logo} alt={`Company logo ${index + 1}`} className="object-contain shrink-0 h-auto" />
          ))}
        </div> */}
      </section>
      <section className="flex p-4 lg:p-10 xl:p-10 flex-col self-center py-16 mt-24 w-full max-w-[1440px] max-md:mt-10 max-md:max-w-full">
        <div className="flex p-4 flex-wrap gap-10 justify-between items-end self-center max-w-full w-[1296px]">
          <div className="flex flex-col min-w-[240px] text-stone-900 max-md:max-w-full">
            <h2 className="self-start text-4xl font-bold text-center max-md:max-w-full max-md:text-4xl">
            Current Openings
            </h2>
          </div>
          <a href="#" className="text-xl font-semibold text-red-700">View all</a>
        </div>
        <div className="flex card-slider flex-col items-center mt-16 w-full max-md:mt-10 max-md:max-w-full">
          {jobs.map((job) => (
            <div key={job.id} className="Y-axis-card-anm flex flex-col p-10 mt-6 max-w-full bg-white rounded-3xl shadow-[0px_3px_8px_rgba(48,150,137,0.08)] w-[1296px] max-md:px-5">
              <div className="flex flex-col w-full max-md:max-w-full">
                <div className="flex flex-wrap gap-10 justify-between items-start w-full text-base text-red-700 max-md:max-w-full">
                  <div className="px-2 py-1.5 rounded-lg bg-red-700 bg-opacity-10 min-h-[28px]">
                    {job.timeAgo}
                  </div>
                  <img loading="lazy" src="./CareerPage/BookmarkLogo.png" alt="" className="object-contain shrink-0 w-6 aspect-square" />
                </div>
                <div className="flex flex-wrap gap-5 items-start self-start mt-6 text-stone-900 max-md:max-w-full">
                  <img loading="lazy" src={job.logo} alt={`${job.company} logo`} className="object-contain shrink-0 w-10 aspect-square" />
                  <div className="flex flex-col min-w-[240px] max-md:max-w-full">
                    <h3 className="text-3xl font-semibold max-md:max-w-full">{job.title}</h3>
                    <p className="mt-2 text-base">{job.company}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-10 justify-between items-end mt-7 w-full text-base font-semibold max-md:max-w-full">
                <div className="flex flex-wrap gap-6 items-end text-gray-500 min-w-[240px] max-md:max-w-full">
                  {/* <div className="flex gap-3 items-center">
                    <img loading="lazy" src="./CareerPage/Redbriefcase.png" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
                    <div className="self-stretch my-auto">{job.category}</div>
                  </div> */}
                  <div className="flex gap-3 items-center">
                    <img loading="lazy" src="./CareerPage/clock.png" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
                    <div className="self-stretch my-auto">{job.type}</div>
                  </div>
                  <div className="flex gap-3 items-center whitespace-nowrap">
                    <img loading="lazy" src="./CareerPage/Wallet.png" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
                    <div className="self-stretch my-auto">{job.salary}</div>
                  </div>
                  <div className="flex gap-3 items-center">
                    <img loading="lazy" src="./CareerPage/map-pin.png" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
                    <div className="self-stretch my-auto">{job.location}</div>
                  </div>
                </div>
               <Link to={job.path}>
               <button className="overflow-hidden gap-2.5 self-stretch px-5 py-2 text-white capitalize bg-red-700 rounded-lg min-h-[40px]">
                  Job details
                </button>
               </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
    < MainFooter />
    </>
  );
};

export default Career;