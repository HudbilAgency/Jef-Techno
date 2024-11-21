import * as React from "react";
import MainFooter from "../Components/Footer/MainFooter";
import Navbar from "../Components/Navbar/Navbar";
import { Helmet } from 'react-helmet';

const relatedJobs = [
  {
    timeAgo: "24 min ago",
    logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/4e999a3b6634718a071fb891656f5c7e45c242a70987b3597bee0a5bddb6e3b2?placeholderIfAbsent=true&apiKey=ec02862acd164f0aad3ceef0d2a999c3",
    title: "Internal Creative Coordinator",
    company: "Green Group",
    salary: "$44000-$46000"
  },
  {
    timeAgo: "24 min ago",
    logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/2b298165aac7426b4934bf10e8fb90608244994f89c7b9ab3f6a8b9ff6e503bc?placeholderIfAbsent=true&apiKey=ec02862acd164f0aad3ceef0d2a999c3",
    title: "District Intranet Director",
    company: "VonRueden - Weber Co",
    salary: "$42000-$48000"
  },
  {
    timeAgo: "26 min ago",
    logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/6f489efaf8ab0ba79f7a1a5e621b0fb7ef565c10c8dde524c9a5b0d50f39eb35?placeholderIfAbsent=true&apiKey=ec02862acd164f0aad3ceef0d2a999c3",
    title: "Corporate Tactics Facilitator",
    company: "Cormier, Turner and Flatley Inc",
    salary: "$38000-$40000"
  }
];

const responsibilities = [
  "Et nunc ut tempus duis nisl sed massa. Ornare varius faucibus nisi vitae vitae cras ornare. Cras facilisis dignissim augu",
  "Cras facilisis dignissim augue lorem amet adipiscing cursus fames mauris. Tortor amet porta proin in",
  "Ornare varius faucibus nisi vitae vitae cras ornare. Cras facilisis dignissim augue lorem amet adipiscing cursus fames",
  "Tortor amet porta proin in. Orci imperdiet nisi dignissim pellentesque morbi vitae. Quisque tincidunt metus lectus porta",
  "Tortor amet porta proin in. Orci imperdiet nisi dignissim pellentesque morbi vitae. Quisque tincidunt metus lectus porta",
  "Tortor amet porta proin in. Orci imperdiet nisi dignissim pellentesque morbi vitae. Quisque tincidunt metus lectus porta"
];

const skills = [
  "Et nunc ut tempus duis nisl sed massa. Ornare varius faucibus nisi vitae vitae cras ornare.",
  "Ornare varius faucibus nisi vitae vitae cras ornare",
  "Tortor amet porta proin in. Orci imperdiet nisi dignissim pellentesque morbi vitae",
  "Tortor amet porta proin in. Orci imperdiet nisi dignissim pellentesque morbi vitae",
  "Tortor amet porta proin in. Orci imperdiet nisi dignissim pellentesque morbi vitae"
];

const tags = ["Full time", "Commerce", "New - York", "Corporate", "Location"];

function JobDetails() {
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
    <main className="flex overflow-hidden flex-col items-center bg-neutral-100  max-md:pb-24">
      <header className="flex relative flex-col self-stretch px-16 pt-64 pb-28 w-full text-5xl font-bold text-center text-white min-h-[26.375rem] max-md:px-5 max-md:pt-24 max-md:pb-28 max-md:max-w-full max-md:text-4xl">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets%2Fec02862acd164f0aad3ceef0d2a999c3%2F07ebc32ccf414d41871940302d71085f" alt="" className="object-cover absolute inset-0 size-full" />
        <h1 className=" relative my-auto">Job Details</h1>
      </header>

      <section className="flex flex-col p-4 pt-8 mt-24 w-full rounded-3xl max-w-[81rem] shadow-[0px_3px_8px_rgba(48,150,137,0.08)] max-md:mt-10 max-md:max-w-full">
        <JobCard 
          timeAgo="10 min ago"
          logo="https://cdn.builder.io/api/v1/image/assets/TEMP/cb3850276f989e576d2ef70d0a515b749c6edf502fd0b0137549709157573c9c?placeholderIfAbsent=true&apiKey=ec02862acd164f0aad3ceef0d2a999c3"
          title="Corporate Solutions Executive"
          company="Leffler and Sons"
          salary="$40000-$42000"
          showApplyButton
        />
      </section>

      <div className="mt-16 w-full p-4 max-w-[81rem] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <article className="flex flex-col w-[76%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow max-md:mt-6 max-md:max-w-full">
              <section className="flex flex-col w-full max-w-[60.375rem] max-md:max-w-full">
                <div className="flex flex-col w-full text-stone-900">
                  <h2 className="text-2xl font-semibold">Job Description</h2>
                  <p className="mt-10 text-base leading-6 max-md:max-w-full">
                    Nunc sed a nisl purus. Nibh dis faucibus proin lacus tristique. Sit congue non vitae odio sit erat in. Felis eu ultrices a sed massa. Commodo fringilla sed tempor risus laoreet ultricies ipsum. Habitasse morbi faucibus in iaculis lectus. Nisi enim feugiat enim volutpat. Sem quis viverra viverra odio mauris nunc.
                    <br />
                    Et nunc ut tempus duis nisl sed massa. Ornare varius faucibus nisi vitae vitae cras ornare. Cras facilisis dignissim augue lorem amet adipiscing cursus fames mauris. Tortor amet porta proin in. Orci imperdiet nisi dignissim pellentesque morbi vitae. Quisque tincidunt metus lectus porta eget blandit euismod sem nunc. Tortor gravida amet amet sapien mauris massa.Tortor varius nam maecenas duis blandit elit sit sit. Ante mauris morbi diam habitant donec.
                  </p>
                </div>

                <section className="flex flex-col mt-16 w-full text-stone-900 max-md:mt-10">
                  <h2 className="text-2xl font-semibold">Key Responsibilities</h2>
                  <ul className="flex flex-col mt-10 w-full text-base max-md:max-w-full">
                    {responsibilities.map((responsibility, index) => (
                      <KeyPoint key={index} text={responsibility} />
                    ))}
                  </ul>
                </section>

                <section className="flex flex-col mt-16 w-full text-stone-900 max-md:mt-10">
                  <h2 className="text-2xl font-semibold">Professional Skills</h2>
                  <ul className="flex flex-col mt-10 w-full text-base max-md:max-w-full">
                    {skills.map((skill, index) => (
                      <KeyPoint key={index} text={skill} />
                    ))}
                  </ul>
                </section>

                <section className="flex flex-col self-start mt-16 max-md:mt-10 max-md:max-w-full">
                  <h2 className="text-2xl font-semibold text-stone-900">Tags:</h2>
                  <div className="flex flex-wrap gap-6 items-start mt-10 text-base text-red-700 max-md:max-w-full">
                    {tags.map((tag, index) => (
                      <Tag key={index} text={tag} />
                    ))}
                  </div>
                </section>

                <SocialShare />

                <section className="flex flex-col py-16 mt-16 max-w-full w-[60.375rem] max-md:mt-10">
                  <div className="flex flex-col max-w-full text-black w-[43.938rem]">
                    <h2 className="text-5xl font-semibold max-md:text-4xl">Related Jobs</h2>
                    <p className="mt-10 text-base whitespace-nowrap text-ellipsis max-md:max-w-full">
                      At eu lobortis pretium tincidunt amet lacus ut aenean aliquet
                    </p>
                  </div>
                  <div className="flex flex-col mt-10 w-full">
                    {relatedJobs.map((job, index) => (
                      <JobCard key={index} {...job} className={index > 0 ? "mt-6" : ""} />
                    ))}
                  </div>
                </section>
              </section>
            </div>
          </article>

          <aside className="flex flex-col ml-5 w-[24%] max-md:ml-0 max-md:w-full">
            <JobOverview />
          </aside>
        </div>
      </div>
    </main>
   < MainFooter />
   </>
  );
}



const overviewItems = [
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/60433d2c11128851b45e1e5d63b975d51f6902a1dfa349d01e4dbbf6b888db26?placeholderIfAbsent=true&apiKey=ec02862acd164f0aad3ceef0d2a999c3", title: "Job Title", value: "Corporate Solutions\nExecutive" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c0c893bf332dc34edb84763976d78e7514f60e452663cbbf15b2c426fae95741?placeholderIfAbsent=true&apiKey=ec02862acd164f0aad3ceef0d2a999c3", title: "Job Type", value: "Full Time" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1253f42025d325206476cbdc92730be5095b7c0c7f18790cc9f3297f429068c7?placeholderIfAbsent=true&apiKey=ec02862acd164f0aad3ceef0d2a999c3", title: "Category", value: "Commerce" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ba06d9e64df4ce55a7b5feb493a35b7ecf67a20c7114af4d78ab8b2f5eef5e81?placeholderIfAbsent=true&apiKey=ec02862acd164f0aad3ceef0d2a999c3", title: "Experience", value: "5 Years" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b34319e64365ed59150b8a5f369fa365f312b4f0e37055074c3b763eadff0eb4?placeholderIfAbsent=true&apiKey=ec02862acd164f0aad3ceef0d2a999c3", title: "Degree", value: "Master" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b5ab3c806bf9005c2a76cbf116b8e55d84829ecfd35ac9085d60650da5f046ca?placeholderIfAbsent=true&apiKey=ec02862acd164f0aad3ceef0d2a999c3", title: "Offered Salary", value: "$40000-$42000" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a8f2f46c17058a1378361aa021790531b4c2564b5041dd5a0fcca5964bf6aa68?placeholderIfAbsent=true&apiKey=ec02862acd164f0aad3ceef0d2a999c3", title: "Gender", value: "All" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9da26cb8d131bfb1544ecb718e8c714f37adb154d94689a11ce4eae48cb23da2?placeholderIfAbsent=true&apiKey=ec02862acd164f0aad3ceef0d2a999c3", title: "Location", value: "New-York, USA" }
];

function JobOverview() {
  return (
    <div className="flex overflow-hidden flex-col px-5 pt-7 pb-5 mx-auto w-full rounded-3xl bg-red-700 bg-opacity-10 max-md:mt-6">
      <h2 className="text-lg font-bold text-stone-900">Job Overview</h2>
      <div className="flex flex-col mt-8 w-full text-base">
        {overviewItems.map((item, index) => (
          <div key={index} className="flex gap-5 items-start mt-7 w-full first:mt-0">
            <img loading="lazy" src={item.icon} alt="" className="object-contain shrink-0 w-6 aspect-square" />
            <div className="flex flex-col flex-1 shrink basis-0">
              <div className={`font-${index === 0 || index === 7 ? 'semibold' : 'medium'} text-stone-900`}>
                {item.title}
              </div>
              <div className="mt-3 text-gray-500 whitespace-pre-line">{item.value}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex overflow-hidden relative flex-col gap-2.5 items-center py-28 mt-8 max-w-full rounded-xl aspect-square min-h-[16.625rem] w-[16.625rem] max-md:pb-24">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d04ef99a2ec6e940529086910e0a85438b887e643468766de272bf9a931d0a0b?placeholderIfAbsent=true&apiKey=ec02862acd164f0aad3ceef0d2a999c3" alt="" className="object-cover absolute inset-0 size-full" />
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c194d27147eb0f2a55833eef373bf3846f5919f1357a97814df52c9bbd427dc5?placeholderIfAbsent=true&apiKey=ec02862acd164f0aad3ceef0d2a999c3" alt="" className="object-contain self-stretch my-auto w-10 aspect-square" />
      </div>
    </div>
  );
}


function JobCard({ timeAgo, logo, title, company, salary, showApplyButton, className = "" }) {
  return (
    <div className={`flex flex-col p-10 w-full bg-white rounded-3xl shadow-[0px_3px_8px_rgba(48,150,137,0.08)] max-md:px-5 max-md:max-w-full ${className}`}>
      <div className="flex flex-col w-full max-md:max-w-full">
        <div className="flex flex-wrap gap-10 justify-between items-start w-full text-base text-red-700 max-md:max-w-full">
          <div className="flex flex-col justify-center px-2 py-1 rounded-xl bg-red-700 bg-opacity-10">
            <div className="gap-3 self-stretch">{timeAgo}</div>
          </div>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8999528e2275efb9c3fe6bfd0a4964095b42c89e683e18f4e02694084b403383?placeholderIfAbsent=true&apiKey=ec02862acd164f0aad3ceef0d2a999c3" alt="" className="object-contain shrink-0 w-6 aspect-square" />
        </div>
        <div className="flex gap-5 items-start self-start mt-6 text-stone-900 max-md:max-w-full">
          <img loading="lazy" src={logo} alt={`${company} logo`} className="object-contain shrink-0 w-10 aspect-square" />
          <div className="flex flex-col min-w-[15rem]">
            <h3 className="text-3xl font-semibold">{title}</h3>
            <div className="mt-2 text-base">{company}</div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-10 justify-between items-end mt-7 w-full text-base font-semibold max-md:max-w-full">
        <div className="flex flex-wrap gap-6 items-end text-gray-500 min-w-[15rem] max-md:max-w-full">
          <div className="flex gap-3 items-center whitespace-nowrap">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e207a22527574acc90e1c6680d657db91077b4373463c3ecf54e504f2e395ff?placeholderIfAbsent=true&apiKey=ec02862acd164f0aad3ceef0d2a999c3" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
            <div className="self-stretch my-auto">Commerce</div>
          </div>
          <div className="flex gap-3 items-center">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c0c893bf332dc34edb84763976d78e7514f60e452663cbbf15b2c426fae95741?placeholderIfAbsent=true&apiKey=ec02862acd164f0aad3ceef0d2a999c3" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
            <div className="self-stretch my-auto">Full time</div>
          </div>
          <div className="flex gap-3 items-center whitespace-nowrap">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0342984d3c426dd18a1457069231b9c227b6073d1e56055718cdbdceacc2da4f?placeholderIfAbsent=true&apiKey=ec02862acd164f0aad3ceef0d2a999c3" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
            <div className="self-stretch my-auto">{salary}</div>
          </div>
          <div className="flex gap-3 items-center">

            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/aad532364fe57b522dac121a9ba4aad021d2c2f53556e2277d6daa3ba45b1580?placeholderIfAbsent=true&apiKey=ec02862acd164f0aad3ceef0d2a999c3" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
            <div className="self-stretch my-auto">New-York, USA</div>
          </div>
        </div>
        <button 
          className={`overflow-hidden gap-2.5 self-stretch p-5 text-white ${showApplyButton ? 'bg-red-700' : 'capitalize bg-red-700'} rounded-lg min-h-[3.125rem] min-w-[15rem] w-[18.813rem]`}
        >
          {showApplyButton ? 'Apply Job' : 'Job details'}
        </button>
      </div>
    </div>
  );
}




function KeyPoint({ text }) {
  return (
    <li className="flex flex-wrap gap-3 items-center mt-6 first:mt-0 w-full">
      <img 
        loading="lazy" 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a8f5d794754a04b36c31acc5a4782d3621fbc6404c6300c6cd49f8d699706112?placeholderIfAbsent=true&apiKey=ec02862acd164f0aad3ceef0d2a999c3" 
        alt="" 
        className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" 
      />
      <p className="flex-1 shrink self-stretch my-auto basis-0 max-md:max-w-full">
        {text}
      </p>
    </li>
  );
}


function Tag({ text }) {
  return (
    <div className="px-3 py-4 whitespace-nowrap rounded-xl bg-red-700 bg-opacity-10 min-h-[2.5rem]">
      {text}
    </div>
  );
}



const socialIcons = [
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ef899babf62ee50b2481c75814fc7622254dcbb14d27b5babfb23fd2213982b8?placeholderIfAbsent=true&apiKey=ec02862acd164f0aad3ceef0d2a999c3", alt: "Share on Facebook" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/4085cee75470e301c4e34c84056defbace808a0290c2e8cd65d6033c81e86ecc?placeholderIfAbsent=true&apiKey=ec02862acd164f0aad3ceef0d2a999c3", alt: "Share on Twitter" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/25f28d9cc9fd748de9221606fbc4f41c20c81fd85806b1516481acccf4a3f6ec?placeholderIfAbsent=true&apiKey=ec02862acd164f0aad3ceef0d2a999c3", alt: "Share on LinkedIn" }
];

function SocialShare() {
  return (
    <div className="flex gap-6 items-center self-start mt-16 max-md:mt-10">
      <h2 className="self-stretch my-auto text-xl font-semibold text-stone-900">
        Share Job:
      </h2>
      <div className="flex gap-6 items-start self-stretch my-auto">
        {socialIcons.map((icon, index) => (
          <button 
            key={index}
            className="focus:outline-none focus:ring-2 focus:ring-red-700 rounded-full"
            aria-label={icon.alt}
          >
            <img 
              loading="lazy" 
              src={icon.src} 
              alt="" 
              className="object-contain shrink-0 w-6 aspect-square" 
            />
          </button>
        ))}
      </div>
    </div>
  );
}




export default JobDetails;