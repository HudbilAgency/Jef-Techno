import React ,{useState , useRef, useEffect} from 'react'
import Navbar from '../Components/Navbar/Navbar'
import MainFooter from '../Components/Footer/MainFooter';

const AboutUs = () => {


  const timelineData = [
    { year: '2024', isHighlighted: true },
    { year: '2023' },
    { year: '2022' },
    { year: '2021' },
    { year: '2020', isSmall: true },
    { year: '2019' },
    { year: '2018' },
    { year: '2017' },
    { year: '2016' },
    { year: '2015' }
  ];



  // ContactUs Data


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
            className="overflow-hidden px-5 py-3.5 w-full max-w-[380px] bg-white rounded-3xl border border-solid border-neutral-200"
            required
          />
        </div>
      );
    }

    const visionData = [
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e16ee975eb679a5915e4c081858a20a90389fd8b30454bd57483da22afade137?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244",
          title: "Mission",
          description: "Deliver Value added, technically superior and cost-optimum solutions to enhance the safety & reliability of Electrical systems by combining knowledge, experience and technology.",
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2137e57fab69bcc7f6fe80e5f7e438b0cdfa992da4b7bf36e2da2159fb80627e?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244",
          title: "vision",
          description: "Make more customers across the world benefit from our expertise and achieve 40% annual growth rate."
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/046a00e721b213a29322e89fd6ebaa8d2b511514f4b267d8a196e97e597db69f?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244",
          title: "assurane",
          description: "We strive to consistently deliver projects on time, exceeding the expectations of stakeholders in terms of quality and completeness while following the mandated systems and procedures."
        }
      ];
      

  return (
   <>
   < Navbar />
    <section className='overflow-hidden'>
            <main className="flex relative flex-col h-screen w-full  max-md:px-5 max-md:py-24 max-md:max-w-full">
            <img
                loading="lazy"
                src="./AboutUs/AboutUsMainBG.png"
                alt="AboutUsMainbg"
                className="object-cover absolute inset-0 size-full"
            />
            <section className="flex relative inset-y-2/3 lg:inset-x-40 flex-col mt-8 w-full max-w-[1310px] max-md:mb-2.5 max-md:max-w-full">
                <h1 className="xl:text-7xl md:text-5xl lg:text-6xl text-4xl font-bold tracking-wider text-white max-md:max-w-full max-md:text-4xl">
                THINK ELECTRICAL, THINK JEF
                </h1>
                <div className="flex gap-2 lg:gap-6 items-center self-start mt-12 text-2xl uppercase text-neutral-900 tracking-[3px] max-md:mt-10">
              <button>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8855ae14d9effa10b9317a704535212615d40fdec755767f2e9941cd3e8401cc?placeholderIfAbsent=true&apiKey=60c6eb6ce37644fdb727618799199006"
                  alt="Electrical icon"
                  className="bg-repeat object-contain w-9 lg:w-16"
                />
              </button>
              <button className="gap-2.5 self-stretch px-2.5 py-1 lg:py-4 my-auto bg-white border border-solid border-zinc-900 border-opacity-10 text-sm h-[2.5rem] lg:text-2xl 2xl:min-h-[64px] rounded-[50px] w-[10rem] 2xl:w-[239px]">
                Learn More
              </button>
            </div>
            </section>
            </main>

    </section>

    <section>
        < Navigation />
    </section>



    <section className="flex overflow-hidden flex-col justify-center items-center px-20 py-24 bg-zinc-800 max-md:px-5">
      <div className="flex flex-col w-full max-w-[1380px] max-md:max-w-full">
        <header className="flex flex-col self-center max-w-full text-center text-white ">
          <h1 className="flex justify-center items-center px-48 w-full text-5xl font-normal leading-none uppercase tracking-[3.36px] max-md:px-5 max-md:max-w-full max-md:text-4xl">
            <span className="text-red-600 self-stretch pb-px my-auto min-w-[240px] max-md:text-4xl">
              Who we are ?
            </span>
          </h1>
          <p className="pb-px mt-8 w-full text-2xl font-light leading-9 max-md:max-w-full">
          JEF is a widely accredited technology-enabled company, focused on solving the
          toughest <br /> problems in the electrical engineering space with a comprehensive and
          innovative set of <br /> products and solutions.
          </p>
          <p className="pb-px mt-8 w-full text-2xl font-light leading-9 max-md:max-w-full">
          It was founded in 1994 with a clear vision to provide expertise about the most <br />
          comprehensive solutions to the toughest challenges relating to the safety of <br />
          electrical equipment.
          </p>
        </header>
        <div className="flex flex-col items-center px-16 mt-20 max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col justify-center items-center w-full max-w-[1240px] max-md:max-w-full">
            <div className="flex flex-wrap flex-1 justify-center mx-auto size-full max-md:px-5">
              {visionData.map((card, index) => (
                <article key={index} className="flex flex-col grow shrink justify-center h-full pr-px max-w-[311px] min-w-[240px] w-[249px]">
                  <div className="flex flex-col px-5 py-14 w-full border border-white border-opacity-10 lg:h-[60vh] max-w-[310px] h-auto max-md:pl-5">
                    <div className="flex flex-col items-center pb-8 w-full min-h-[110px]">
                      <div className="flex justify-center items-end w-full min-h-[80px]">
                        <div className="flex overflow-hidden flex-col flex-1 shrink w-full basis-0 min-w-[240px]">
                          <div className="flex flex-1 justify-center items-center px-24 size-full max-md:px-5">
                            <img loading="lazy" src={card.icon} alt="" className="object-contain self-stretch my-auto w-16 aspect-square" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <h2 className="flex flex-col pb-16 text-sm tracking-widest leading-loose text-center text-white uppercase whitespace-nowrap min-h-[88px]">
                      <div className="w-full max-md:px-5">{card.title}</div>
                    </h2>
                    <p className="flex z-10 flex-col pb-16 text-base font-thin leading-6 text-center text-white">
                      <span className="pr-2 pl-2 w-full">{card.description}</span>
                    </p>
                    {card.learnMore && (
                      <div className="flex flex-col items-center pt-2 pr-20 pl-20 min-h-[24px] max-md:px-5">
                        <div className="flex items-start">
                          <button className="flex flex-col text-xs tracking-widest leading-none text-center text-white uppercase">
                            Learn More
                          </button>
                          <div className="flex flex-col justify-center w-4 min-h-[16px]">
                            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/34d3e1a33d8d6508faa39ce79b0f0e3193a35e40e7b6bc356c327097af5053f7?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244" alt="" className="object-contain flex-1 w-4 aspect-square" />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>




    <section>
        < EconomicEngine />
    </section>


    {/* Our Approach */}

    <section className="flex overflow-hidden flex-col justify-center items-center px-20 py-24 text-center bg-zinc-800 max-md:px-5">
      <div className="flex flex-col max-w-full w-[1115px]">
        <h2 className="flex flex-wrap gap-24 justify-center items-start self-center max-w-full text-3xl md:text-4xl lg:text-5xl font-bold leading-none text-red-700 uppercase tracking-[3.36px] w-[714px] ">
          <span className="pb-px min-w-[240px] max-md:max-w-full ">
            Our Approach
          </span>
        </h2>
        <p className="mt-16 text-lg md:text-xl lg:text-2xl font-light leading-9 text-white max-md:mt-10 max-md:max-w-full">
          We provide Innovative Solutions that are{" "}
          <span className="font-extrabold">
            Technically Superior, Cost-effective and
          </span>{" "}
          <br />
          <span className="font-extrabold">Practically Implementable</span>.
        </p>
      </div>
    </section>




  {/* Brand History */}

    <section className="flex overflow-hidden flex-col justify-center items-center px-4 sm:px-8 md:px-16 py-12 sm:py-16 md:py-24 bg-neutral-100">
      <div className="w-full max-w-[80rem]">
        <div className="flex flex-col md:flex-row gap-5">
          <div className="flex flex-col w-full md:w-1/2">
            <div className="flex flex-col self-stretch my-auto max-md:mt-10">
              <div className="flex flex-col justify-center p-2.5 w-full text-3xl sm:text-4xl md:text-5xl font-semibold leading-none text-red-700 tracking-[0.28rem]">
                <div className="flex flex-col w-full h-[4.5rem]">
                  <div className="flex relative flex-col w-full">
                    <h2 className="pb-px w-full">Brand History</h2>
                    <div className="flex absolute inset-x-0 z-0 max-w-full bottom-[-7.6875rem] min-h-[5.8125rem] w-full md:w-[33.25rem]" />
                  </div>
                </div>
              </div>
              <p className="mt-6 sm:mt-8 md:mt-11 text-lg md:text-xl font-thin leading-7 sm:leading-8 text-black">
                From three decades, JEF Techno as a brand has been synonymous with quality, reliability and trustworthiness in our areas of operation. Since our inception in 1994, JEF Techno has continuously developed new products, services and expanded to new geographies to become the front-runner in Electrical Engineering space. Through this wider network, JEF brand has now been established as a global player in our area of operation with many prestigious references in various countries.
              </p>
            </div>
          </div>
          <div className="flex flex-col mt-6 md:mt-0 md:ml-5 w-full md:w-1/2">
            <img
              loading="lazy"
              src="./AboutUs/BrandHistory.png"
              alt="JEF Techno brand history illustration"
              className="object-contain w-full aspect-[1.09]"
            />
          </div>
        </div>
      </div>
    </section>




    {/* Jef leaderShip */}

    <section>
  <div 
    className="flex overflow-hidden relative gap-10 justify-center items-start py-32 bg-zinc-900"
    style={{ backgroundImage: "url('https://cdn.builder.io/api/v1/image/assets/TEMP/66f6bb7d22178abfdbaa1bd2b07992f6d1ff63598849bb870a6de98573eb4dc0?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244')", 
             backgroundSize: "cover", 
             backgroundPosition: "center",
             backgroundRepeat: "no-repeat" }}>
    
    <div className="flex z-0 flex-col my-auto max-w-screen min-w-[240px] w-full max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col w-full max-md:max-w-full">
        <div className="flex items-center my-auto text-center flex-col w-full max-md:max-w-full">
          <h1 className="pb-px w-full font-semibold text-3xl md:text-4xl lg:text-5xl leading-loose text-red-600 tracking-[4.53px] max-md:max-w-full ">
            JEF LEADERSHIP
          </h1>
          <p className="mt-5 w-full text-lg font-thin leading-6 text-white max-md:max-w-full min-w-[90%]">
          Over the last couple of decades, with our help, our clients have been able to <br /> assure
          the long-term safety of their manpower and business.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
 
 

 <section>
  < Overview />
 </section>



      <section>
        < LearningDevelopment />
      </section>


      <section>
        < SocialResponsibilities />
      </section>
    

  



  < MainFooter />
   </>
  )
}






function SocialResponsibilities() {
  return (
    <main className="flex overflow-hidden flex-col text-center bg-white">
      <section className="flex relative flex-col justify-center items-center px-[5%] py-[20vh] w-full min-h-[100vh] max-md:px-[3%] max-md:py-[10vh] max-md:max-w-full">
        <img
          loading="lazy"
          src="./AboutUs/SocialResponsibility.png"
          alt=""
          className="object-cover absolute inset-0 w-full h-full"
        />
        <div className="flex relative flex-col mb-0 w-full max-w-[82rem] max-md:mb-2.5 max-md:max-w-full">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-none text-red-700 uppercase tracking-[0.28rem] max-md:max-w-full">
            SOCIAL RESPONSIBITIES
          </h1>
          <p className="mt-[3rem] text-base lg:text-2xl leading-9 text-white max-md:mt-[2.5rem] max-md:max-w-full">
            At JEF, we believe in creating a positive impact beyond business. We are dedicated to supporting the communities we serve by promoting sustainable engineering practices, ensuring the safety of our environment, and contributing to local development initiatives. Our social responsibility efforts focus on environmental conservation, educational programs for underprivileged communities, and ensuring that our projects align with global sustainability goals. By integrating social responsibility into every aspect of our operations, we strive to make a meaningful difference for future generations.
          </p>
        </div>
      </section>
    </main>
  );
}





const Overview = () => {
  return (
    <div className="flex flex-col justify-center items-center p-20 bg-stone-900 max-md:px-5">
      <div className="flex flex-col w-full max-w-[70%] max-md:max-w-full">
        <div className="flex justify-center items-center self-center px-72 max-w-full text-3xl md:text-4xl lg:text-5xl font-semibold leading-none text-center text-white uppercase whitespace-nowrap tracking-[4.53px] w-[960px] max-md:px-5 ">
          <div className="self-stretch my-auto min-w-[240px] ">
            Overview
          </div>
        </div>
        <div className="mt-20 max-md:mt-10 max-md:max-w-full">
          <div className="flex max-md:flex-col">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex overflow-hidden flex-col grow items-start px-10 pt-12 pb-40 text-2xl font-light leading-9 text-white border border-white border-opacity-20 max-md:px-5 max-md:pb-24">
                <div className="ml-4 font-medium leading-10 text-center text-red-700 uppercase tracking-[4.53px] max-md:ml-2.5">
                  From India to 24 Countries
                </div>
                <div className="mt-16 max-md:mt-10">
                  Strong International Presence.
                </div>
                <div className="mt-5">
                  Prestigious Projects in many countries.
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex overflow-hidden flex-col grow px-11 pt-12 pb-64 text-2xl border border-white border-opacity-20 max-md:px-5 max-md:pb-24">
                <div className="self-center font-medium leading-10 text-center text-red-700 uppercase tracking-[4.53px] w-[330px]">
                  3000+ Global Customer
                </div>
                <div className="mt-16 font-light leading-9 text-white max-md:mt-10">
                  90% customer retention rate
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex overflow-hidden flex-col grow items-start px-11 pt-12 pb-40 text-2xl font-light leading-9 text-white border border-solid border-white border-opacity-20 max-md:px-5 max-md:pb-24">
                <div className="self-center font-medium leading-10 text-center text-red-700 uppercase tracking-[4.53px] w-[330px]">
                  30 Years of Experience
                </div>
                <div className="mt-16 w-[323px] max-md:mt-10">
                  Experience across geographies.
                </div>
                <div className="mt-4">Serving many industries segments</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



function LearningDevelopment() {
  return (
    <main className="flex flex-col items-center pt-14 pb-28 text-center bg-stone-900 max-md:pb-24">
      <header className="flex flex-col justify-center items-center self-stretch px-60 py-6 w-full text-3xl md:text-4xl lg:text-5xl leading-tight text-red-700 uppercase tracking-[0.28rem] max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col max-w-full w-[60rem]">
          <div className="flex justify-center items-center w-full max-md:px-5 max-md:max-w-full">
            <h1 className="self-stretch my-auto min-w-[15rem]">
              LEARNING AND DEVELOPMENT
            </h1>
          </div>
        </div>
      </header>
      <p className="mt-6 text-base font-light leading-loose text-white max-md:max-w-full">
        This initiative will help us exceed our customers' delivery expectations in terms of Quality and Speed.
      </p>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/fafc4b28802577b2d55cdc14d00c68eee644a55232f04407c4b0f48fd7624e46?placeholderIfAbsent=true&apiKey=60c6eb6ce37644fdb727618799199006"
        alt="Learning and Development Initiative"
        loading="lazy"
        className="object-contain mt-36 w-full aspect-[2.82] max-w-[75rem] max-md:mt-10 max-md:max-w-full"
      />
    </main>
  );
}









const FAQComponent = () => {
  const [faqData, setFaqData] = useState([
    { question: "What is NEOM?", content: "NEOM is a region in the northwestern Saudi Arabia, focused on innovation and sustainability.", isOpen: false },
    { question: "When will NEOM be built?", content: "NEOM is expected to be completed in multiple phases, with various sectors becoming operational in the coming years.", isOpen: false },
    { question: "Are people living and working in NEOM already?", content: "Yes, there are already individuals and companies operating in NEOM as part of the initial development.", isOpen: false },
    { question: "How do I start a business at NEOM and can I invest in NEOM?", content: "You can start a business by following the guidelines provided on the NEOM official website, which outlines investment opportunities.", isOpen: false },
    { question: "How is NEOM funded and how much is being invested?", content: "NEOM is funded through a combination of government investment and private sector participation.", isOpen: false },
    { question: "Which business sectors are active in NEOM?", content: "NEOM aims to develop sectors like energy, biotechnology, food, and advanced manufacturing.", isOpen: false },
    { question: "Is NEOM a city?", content: "NEOM is envisioned as a city of the future, integrating smart technologies and sustainable living.", isOpen: false },
    { question: "What does NEOM's logo represent?", content: "The logo symbolizes innovation and forward-thinking, reflecting NEOM's mission to revolutionize living standards.", isOpen: false },
    { question: "What will life be like in NEOM?", content: "Life in NEOM is expected to be characterized by smart living, sustainability, and advanced technologies.", isOpen: false },
    { question: "Who will live at NEOM?", content: "NEOM is designed to attract talent from around the world, fostering a diverse and innovative community.", isOpen: false }
  ]);

  const toggleFAQ = (index) => {
    setFaqData(
      faqData.map((item, i) => ({
        ...item,
        isOpen: i === index ? !item.isOpen : false // Close other items
      }))
    );
  };

  const FAQItem = ({ question, content, isOpen, onToggle }) => {
    const contentRef = useRef(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
      if (isOpen && contentRef.current) {
        setHeight(contentRef.current.scrollHeight);
      } else {
        const timeout = setTimeout(() => {
          setHeight(0);
        }, 1000); // Match this duration with the transition duration

        return () => clearTimeout(timeout);
      }
    }, [isOpen]);

    return (
      <div className="flex flex-col justify-center p-px w-full border border-white border-solid bg-white bg-opacity-70 max-md:max-w-full">
        <div onClick={onToggle} className="flex gap-10 justify-between items-center px-5 py-5 md:py-10 w-full min-h-[120px] max-md:px-5 max-md:max-w-full">
          <h2 className="self-stretch py-px leading-relaxed my-auto text-xs md:text-sm tracking-wider uppercase text-zinc-800">
            {question}
          </h2>
          <div className="flex flex-col items-start self-stretch my-auto min-h-[40px]">
            <button
              className="flex flex-col justify-center p-3 w-10 min-h-[40px]"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close answer" : "Open answer"}
            >
              <img
                loading="lazy"
                src={
                  isOpen
                    ? "./AboutUs/DropUpArr.png"
                    : "./AboutUs/DropdownArr.png"
                }
                alt=""
                className="object-contain flex-1 w-full aspect-square"
              />
            </button>
          </div>
        </div>
        <div
          ref={contentRef}
          className="overflow-hidden transition-all duration-300 ease-in-out"
          style={{ maxHeight: `${height}px` }}
        >
          <div className="px-5 py-5">
            <p className='text-gray-500'>{content}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      className="flex overflow-hidden relative flex-col pt-16 pb-16"
      style={{
        backgroundImage:
          "url('https://cdn.builder.io/api/v1/image/assets/TEMP/0083738d5dac6646321043747e1dbdb769f5a8be25b9393fbeaa4a345f7f866b?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex absolute inset-0 z-0 flex-col py-0.5 w-full max-md:max-w-full"></div>
      <div className="flex z-0 flex-col self-center w-[95%] xl:w-[70%] lg:w-[80%]">
        <h1 className="pb-px w-full text-4xl leading-loose uppercase whitespace-nowrap text-zinc-800 tracking-[3.36px] max-md:max-w-full">
          FAQ
        </h1>
        <div className="flex max-md:flex-col justify-between items-start w-full min-h-[710px] max-md:max-w-full">
          <div className="flex flex-col pt-5 min-w-[240px] w-full lg:w-[48%] max-md:max-w-full">
            {faqData.slice(0, 5).map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                content={item.content} // Pass dynamic content
                isOpen={item.isOpen}
                onToggle={() => toggleFAQ(index)}
              />
            ))}
          </div>
          <div className="flex flex-col pt-5 min-w-[240px] w-full lg:w-[48%] max-md:max-w-full">
            {faqData.slice(5).map((item, index) => (
              <FAQItem
                key={index + 5}
                question={item.question}
                content={item.content} // Pass dynamic content
                isOpen={item.isOpen}
                onToggle={() => toggleFAQ(index + 5)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};









// const AccordionItem = ({ title, content, isOpen, onClick }) => (
//   <div className="border-b border-gray-200">
//     <button
//       className="flex justify-between w-full py-4 px-5 text-left text-lg font-medium text-gray-900 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:bg-gray-200"
//       onClick={onClick}
//     >
//       <span>{title}</span>
//       <span>{isOpen ? "-" : "+"}</span>
//     </button>
//     <div
//       className={`overflow-hidden transition-all duration-1000 ease-in-out ${
//         isOpen ? "max-h-screen" : "max-h-0"
//       }`}
//     >
//       <div className="px-5 py-4 bg-white text-gray-700">
//         <p>{content}</p>
//       </div>
//     </div>
//   </div>
// );

//  function Accordion() {
//   const [openIndex, setOpenIndex] = useState(null);
//   const defaultContent =
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

//   const toggleAccordion = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div className="max-w-lg mx-auto border border-gray-200 rounded-lg shadow-lg">
//       <AccordionItem
//         title="Accordion 1"
//         content={defaultContent}
//         isOpen={openIndex === 1}
//         onClick={() => toggleAccordion(1)}
//       />
//       <AccordionItem
//         title="Accordion 2"
//         content={defaultContent}
//         isOpen={openIndex === 2}
//         onClick={() => toggleAccordion(2)}
//       />
//       <AccordionItem
//         title="Accordion 3"
//         content={defaultContent}
//         isOpen={openIndex === 3}
//         onClick={() => toggleAccordion(3)}
//       />
//     </div>
//   );
// }




    







const LocationCard = ({ imageSrc, title, buttonText }) => (
  <div className="flex flex-col flex-1 shrink justify-center pb-16 basis-0 min-w-[240px] max-md:max-w-full">
    <div className="flex flex-col items-center pr-16 pl-16 w-full h-[164px] max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col justify-center items-center px-20 max-w-full w-full max-md:px-5">
        <div className="flex flex-col self-center items-center w-full">
          <img loading="lazy" src={imageSrc} alt={`${title} icon`} className="object-contain w-[5%] aspect-square min-w-24 min-h-24" />
        </div>
        <div className="flex flex-col pb-5 text-xs tracking-wider leading-tight text-center uppercase text-zinc-900">
          <div>{title}</div>
        </div>
        <div className="flex flex-col items-center text-base tracking-wider leading-none text-center text-red-700 uppercase whitespace-nowrap">
          <button className="flex items-center pb-1 h-5 border-b border-red-700">
            <span className="self-stretch pb-px my-auto">{buttonText}</span>
          </button>
        </div>
      </div>
    </div>
  </div>
);

function LocationsSection() {
  const locations = [
    { imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/dc34b2826bfc56f82deec5b3f5509064c92324559c00a5e7a5eef8263b9ec102?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244", title: "JEF HQ", buttonText: "Location" },
    { imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/8076b9f7c863ad8f2fc0b2cbdc139654cfa7792279a73e5e9900fcf5841cea75?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244", title: "JEF Riyadh Office", buttonText: "Location" }
  ];

  return (
    <section className="flex overflow-hidden flex-col justify-center items-center px-20 py-32 bg-neutral-100 max-md:px-5">
      <div className="flex flex-col justify-center px-16 w-full max-w-[1440px] max-md:px-5 max-md:max-w-full">
        <header className="flex flex-col self-center max-w-full text-center uppercase h-[129px] w-[406px]">
          <div className="flex flex-col w-full">
            <h2 className="w-[40%] md:w-[30%] self-center text-base tracking-widest leading-6 text-red-700 max-md:px-5">
              OUR LOCATIONS
            </h2>
            <h1 className="flex justify-center items-center mt-9 w-full text-5xl leading-none text-zinc-900 tracking-[4.53px] max-md:text-4xl">
              <span className="flex flex-col self-stretch my-auto min-w-[240px] w-[357px] max-md:text-4xl">
                <span className="pb-px w-full max-md:text-4xl">JEF OFFICES</span>
              </span>
            </h1>
          </div>
        </header>
        <div className="flex flex-col justify-center pt-16 w-full min-h-[284px] max-md:max-w-full">
          <div className="flex max-sm:flex-col items-center justify-center px-56 w-full min-h-[224px] max-md:px-5 max-md:max-w-full">
            {locations.map((location, index) => (
              <LocationCard key={index} {...location} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}



    
 



const UniqueEnvironment = () => {
  return (
    <div className="flex overflow-hidden flex-col items-center px-20 pt-24 pb-12 bg-neutral-100 max-md:px-5">
      <div className="flex flex-col items-center w-full max-w-[1440px] max-md:max-w-full">
        <div className="flex flex-col justify-center items-center self-stretch px-44 text-5xl font-semibold leading-none text-center uppercase text-zinc-900 tracking-[4.53px] max-md:px-5 max-md:max-w-full max-md:text-4xl">
          <div className="flex flex-col max-w-full h-[72px] w-[697px] max-md:text-4xl">
            <div className="flex justify-center items-center w-full max-md:max-w-full max-md:text-4xl">
              <div className="self-stretch pb-px my-auto min-w-[240px] max-md:max-w-full max-md:text-4xl">
                A UNIQUE ENVIRONMENT
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 max-w-full w-[1080px] max-md:mt-10">
          <div className="flex gap-5 max-md:flex-col">
            <EnvironmentFeature
              imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/9b37054f511f0e5356a95b0ba2c60bcec3bc0352085a21d7760988d94d2e56da?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244"
              text="New standard in regulations"
            />
            <EnvironmentFeature
              imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/fa820d915591cba85564e1a7c906f3d7e0e16d3cd002d8e0772e819a1c6538b1?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244"
              text="Global connectivity and strategic location"
            />
            <EnvironmentFeature
              imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/6484ee8c0ae57052b19c9926b1a4f6f9e29af4cec94227d646e46ac6b1edb5a3?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244"
              text="Global talent attraction"
            />
          </div>
        </div>
        <div className=" max-w-full w-full max-md:mt-10">
          <div className="flex justify-center max-md:flex-col">
            <EnvironmentFeature
              imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/7af91ae7dfa67d2dcba7f6c3bfed8937b6f05829af82b5ed8cd0eafa627b2dd9?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244"
              text="Unique solar and wind advantages for 100% clean energy generation" 
            />
            <EnvironmentFeature
              imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/6f91efee8f6037235b16cc846a87d2b2e94ef6b6f9e16d7889514e4d92c480de?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244"
              text="Sustainability, wellness and human improvement as living principles" />
          </div>
        </div>
      </div>
    </div>

  );
};

const EnvironmentFeature = ({ imageSrc, text }) => {
  return (
    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow justify-center pb-16 min-h-[219px]">
        <div className="flex flex-col items-center px-6 w-full h-[159px] max-md:px-5">
          <div className="flex flex-col justify-center items-center px-14 w-full max-w-[310px] max-md:px-5">
            <div className="flex flex-col pb-8 w-20">
              <img loading="lazy" src={imageSrc} className="object-contain w-full aspect-square" alt="" />
            </div>
            <div className="flex flex-col pb-5 text-base font-thin leading-6 text-center text-zinc-900">
              <div className="pt-1">{text}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};





const sectors = [
  { name: "Oil & Gas", imageSrc: "./AboutUs/OilandGas.png", altText: "Manufacturing sector icon" },
  { name: "Power Utilities", imageSrc: "./AboutUs/PoweUtilities.png", altText: "Water sector icon" },
  { name: "Manufacturing Plant", imageSrc: "./AboutUs/MFplant.png", altText: "Technology and Digital sector icon" },
  { name: "Process Plant", imageSrc: "./AboutUs/ProcessPlant.png", altText: "Entertainment and Culture sector icon" },
  { name: "Commercial Buildings", imageSrc: "./AboutUs/CBimg.png", altText: "Education, Research, and Innovation sector icon" },
];

function SectorIcon({ name, imageSrc, altText }) {
  return (
    <div className="flex justify-center items-center self-stretch px-9 py-11 my-auto rounded-[83px] max-md:px-5">
      <div className="flex flex-col items-center self-stretch my-auto w-full">
        <div className="flex overflow-hidden flex-col flex-1 items-center w-full">
          <div className="flex flex-1 justify-center size-full">
            <img loading="lazy" src={imageSrc} alt={altText} className="object-cover shrink " />
          </div>
        </div>
        <div className="mt-5 text-xs tracking-wider leading-tight text-center uppercase text-zinc-900">
          {name}
        </div>
      </div>
    </div>
  );
}

function EconomicEngine() {
  return (
    <section className="flex overflow-hidden flex-col justify-center items-center px-20 py-24 w-full bg-neutral-100 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col items-center w-full max-w-[1275px] max-md:max-w-full">
        <header className="flex flex-col max-w-full text-center text-zinc-900 w-full">
          <h1 className="flex justify-center items-center px-36 w-full text-3xl md:text-4xl lg:text-5xl font-bold leading-none uppercase tracking-[4.53px] max-md:px-5 max-md:max-w-full ">
            <span className="self-stretch pb-px my-auto min-w-[240px] max-md:max-w-full">
              An Economic Engine
            </span>
          </h1>
          <p className="pb-px mt-16 w-full text-lg lg:text-2xl font-light leading-9 max-md:max-w-full">
          We provide the below-mentioned solutions for Transmission & Distribution Utilities, Oil & Gas <br /> Infrastructure, and such other customers. Earthing/Grounding Studies, Lightning Protection Studies <br /> Power System Studies, Power Quality Studies, Instrumentation Earthing
          </p>
        </header>
        <div className="items-center mt-20 max-w-full  max-md:mt-10">
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-center">
            {sectors.map((sector) => (
              <SectorIcon key={sector.name} {...sector} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}





const NavItem = ({ text, isActive }) => (
  <div
    className={`self-stretch my-auto text-base tracking-wide leading-none uppercase whitespace-nowrap ${
      isActive ? 'text-red-700' : 'text-neutral-300'
    }`}
  >
    {text}
  </div>
);

const NavSeparator = () => (
  <div className="flex flex-col self-stretch px-2.5 my-auto w-[27px]">
    <div className="flex items-center w-[7px]">
      <div className="flex flex-col justify-center self-stretch my-auto min-h-[7px] w-[7px]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ecd639edcb67e10ac6f387cbff68bf06de70ace3f0ab81ee573f986b41e67b7?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244"
          className="object-contain flex-1 w-full aspect-square"
          alt=""
        />
      </div>
    </div>
  </div>
);

const Navigation = () => {
  return (
    <nav className="flex flex-col justify-center px-24 py-6 bg-stone-900 max-md:px-5">
      <div className="flex w-full max-md:max-w-full">
        <div className="flex items-center h-full">
          <div className="flex items-center self-stretch my-auto">
            <NavItem text="HOME" isActive={true} />
            <NavSeparator />
          </div>
          <NavItem text="About" isActive={false} />
        </div>
      </div>
    </nav>
  );
};


export default AboutUs