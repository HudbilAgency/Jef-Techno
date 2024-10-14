import React ,{useState , useRef, useEffect} from 'react'
import { Link } from "react-router-dom";
function MainFooter() {


    const itemsAbout = [
        'What is JEF',
        'JEF leadership team',
        'JEF Smart Digitalization',
        'JEF L & D Centre',
      ];
    const itemsService = [
        'Power System Studies',
        'Power Quality Studies',
        'Earthing Studies',
        'LPS System Studies',
        'Instrumentation Studies',
      ];
    const itemsLocation = [
        'Mena',
        'Europe',
        'Asian'
      ]; 
    const itemsBusiness = [
        'Sectors',
        'Partners'
      ];  
    const itemsCareers = [
        'Working at JEF'
      ];   

  return (
    <main className="flex overflow-hidden flex-col items-center lg:pt-24 bg-stone-800">
      <div className="hidden lg:flex flex-col md:flex-row w-[85vw] max-w-[95vw] tracking-wider justify-between ">
        <Section title="About" items={itemsAbout} />
        <Section title="Services" items={itemsService} />
        <Section title="Locations" items={itemsLocation} />
        <Section title="Our Business" items={itemsBusiness} />
        <Section title="Careers" items={itemsCareers} />
      </div>
      <div className='lg:hidden'>
      < FAQComponent />
        
      </div>
      <Footer />
    </main>
  );
}


function Footer() {

   // JEF Techno Socials

   const handleYoutubeButtonClick = () => {
    window.location.href = 'https://www.youtube.com/@JEFgroup'; 
   };
   const handleFacebookButtonClick = () => {
    window.location.href = 'https://www.facebook.com/JEFTECHNO/'; 
   };
   const handleLinkedinButtonClick = () => {
    window.location.href = 'https://www.linkedin.com/company/jeftechnosolutions/'; 
   };
   const handleTwitterButtonClick = () => {
    window.location.href = 'https://x.com/JeftechnoIndia'; 
   };


  return (
    <footer className="flex flex-col items-center pt-10 bg-stone-800">
      <hr className="hidden lg:block shrink-0 mt-2 max-w-[95vw] w-[85vw] border border-solid border-neutral-400 max-md:mt-8" />
      <div className="flex flex-row gap-10 justify-between items-start mt-5 lg:w-[85vw] max-w-[95vw]">
        <div className="hidden lg:block text-2xl tracking-widest text-white uppercase max-md:max-w-full">
          FOLLOW jef ON SOCIAL MEDIA
        </div>
        <div className="flex flex-row h-full space-x-12 lg:space-x-6">
          <button onClick={handleYoutubeButtonClick} className="object-contain"><img src="./FooterLogo/Link - Youtube.png" alt="YoutubeImg" /></button>
          <button onClick={handleFacebookButtonClick} className="object-contain "><img src="./FooterLogo/Link - Facebook.png" alt="FacebookImg" /></button>
          <button onClick={handleLinkedinButtonClick} className="object-contain  "><img src="./FooterLogo/Link - Linkedin.png" alt="LinkedInImg" /></button>
          <button onClick={handleTwitterButtonClick} className="object-contain "><img src="./FooterLogo/Link - Twitter.png" alt="TwitterImg" /></button>
        </div>
      </div>
      <div className="flex overflow-hidden flex-col justify-center items-center  py-7 mt-6 w-screen text-white bg-stone-900  max-md:max-w-full">
        <div className="flex flex-wrap justify-between gap-6 w-full lg:w-[85vw] max-w-[95vw] max-md:max-w-full">
          <div className="flex shrink gap-4 mx-auto lg:mx-0 lg:self-start text-sm lg:text-base xl:text-xl font-light basis-auto grow-0 tracking-widest">
            <Link  to="/PrivacyPolicy" >Privacy Policy</Link>
            <Link to="/TermsAndConditions" >· Terms of Use</Link>
            <Link to="/CookiePolicy" >· Cookie Policy</Link>
          </div>
          <div className="text-xs xl:text-xl lg:text-base mx-auto lg:mx-0 flex gap-4 tracking-wide max-md:max-w-full">
              Copyright 2023. All Rights Reserved © jeftechno | Designed by 
              <img src="./FooterLogo/HudbilLogo.png" alt="hudbilLogo" className='h-5 lg:h-8' />
          </div>   
        </div>
      </div>
    </footer>
  );
}



function Section({ title, items }) {
  return (
    <section className="flex flex-col min-h-[234px] w-[219px]">
      <header className="w-full text-2xl xl:text-3xl font-bold tracking-widest text-red-700 uppercase whitespace-nowrap">
        {title}
      </header>
      <ul className="flex overflow-hidden flex-col mt-4 w-full text-base leading-none text-white">
        {items.map((item, index) => (
          <li key={index} className="flex flex-col justify-center items-start py-2.5 w-full">
            <div className="flex items-center">
              <div className="self-stretch my-auto">{item}</div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}






// -----------------------------------------------------------------------------------------------------


const FAQComponent = () => {
  const [faqData, setFaqData] = useState([
    { 
      question: "ABOUT", 
      content: [
        { label: 'What is JEF', path: '' },
        { label: 'JEF leadership team', path: '' },
        { label: 'JEF Smart Digitalization', path: '' },
        { label: 'JEF L & D Centre', path: '' }
      ], 
      isOpen: false 
    },
    { 
      question: "Services", 
      content: [
        { label: 'Power System Studies', path: '' },
        { label: 'Power Quality Studies', path: '' },
        { label: 'Earthing Studies', path: '' },
        { label: 'LPS System Studies', path: '' },
        { label: 'Instrumentation Studies', path: '' }
      ], 
      isOpen: false 
    },
    { 
      question: "Locations", 
      content: [
        { label: 'Mena', path: '' },
        { label: 'Europe', path: '' },
        { label: 'Asian', path: '' },
      ], 
      isOpen: false 
    },
    { 
      question: "Our Business", 
      content: [
        { label: 'Sectors', path: '' },
        { label: 'Partners', path: '' },
      ], 
      isOpen: false 
    },
    { 
      question: "Careers", 
      content: [
        { label: 'Working at JEF', path: '' },
      ], 
      isOpen: false 
    },
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
      <div className="flex flex-col justify-center p-px self-center border-b w-[85%] border-solid bg-transparent bg-opacity-70 max-md:max-w-full">
        <div onClick={onToggle} className="flex gap-10 justify-between items-start py-5 md:py-10 w-full max-md:max-w-full">
          <h2 className="self-stretch py-px leading-relaxed my-auto font-semibold md:text-3xl text-2xl tracking-wider uppercase text-red-600">
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
          className="overflow-hidden transition-all w-[100vw] duration-300 ease-in-out"
          style={{ maxHeight: `${height}px` }}
        >
          <div className="px-5 py-5">
            {/* Render content based on whether it's an array or a string */}
            {Array.isArray(content) ? (
              <ul>
                {content.map((item, idx) => (
                  <li key={idx} className="mb-2">
                    <a href={item.path} className="text-stone-300 hover:underline">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className='text-gray-500'>{content}</p>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="flex overflow-hidden relative flex-col">
      <div className="flex absolute inset-0 z-0 flex-col py-0.5 w-full max-md:max-w-full"></div>
      <div className="flex z-0 flex-col self-center w-[95%] xl:w-[70%] lg:w-[80%]">
        <h1 className="pb-px w-full text-4xl leading-loose uppercase whitespace-nowrap text-zinc-800 tracking-[3.36px] max-md:max-w-full">
          FAQ
        </h1>
        <div className="flex max-md:flex-col justify-between items-start w-full max-md:max-w-full">
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
        </div>
      </div>
    </section>
  );
};



export default MainFooter;