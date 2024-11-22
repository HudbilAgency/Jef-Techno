import React, { useState, useEffect, useRef, useContext } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { TranslationContext } from '../../Context/TranslationContext'
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
  { label: 'About', hasDropdown: true },
  { label: 'Our Business', hasDropdown: true },
  { label: 'Industries', hasDropdown: true },
  { label: 'Blogs', hasDropdown: false, path: '/blog' },
];

const Navbar = () => {
  const { isArabic, toggleTranslation } = useContext(TranslationContext);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const toggleDropdown = () => setIsDropdownVisible((prev) => !prev);

  const location = useLocation();
  const [activeSection, setActiveSection] = useState(''); // State to track active section
  const [isSlideOpen, setIsSlideOpen] = useState(false); // State to handle slide-out menu
  const [resetTimeout, setResetTimeout] = useState(null); // Timeout for reset

  const handleMenuHover = (label) => {
    // Clear any existing timeout to prevent premature reset
    if (resetTimeout) {
      clearTimeout(resetTimeout);
      setResetTimeout(null);
    }

    // Set active section based on hovered item
    if (label === 'Home' || label === 'Careers') {
      setActiveSection(''); // Reset activeSection for these labels
    } else {
      setActiveSection(label); // Set active section on hover
    }
  };

  const handleMouseLeave = () => {
    // Set a timeout to reset activeSection after leaving the button and section
    const timeout = setTimeout(() => {
      setActiveSection('');
    }, 200); // 200ms delay

    setResetTimeout(timeout);
  };

  useEffect(() => {
    if (activeSection || isSlideOpen) {
      document.body.style.overflow = 'hidden'; // Disable scroll
    } else {
      document.body.style.overflow = ''; // Enable scroll
    }

    return () => {
      document.body.style.overflow = ''; // Reset scroll when component unmounts
      if (resetTimeout) clearTimeout(resetTimeout); // Cleanup timeout
    };
  }, [activeSection, isSlideOpen, resetTimeout]);

  const toggleSlideMenu = () => {
    setIsSlideOpen(!isSlideOpen);
  };

  const [scrollNav, setScrollNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrollNav(true);
      } else {
        setScrollNav(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const [hoverLine, setHoverLine] = useState(''); // State for hover line

  const handleMouseLineEnter = (label) => {
    setHoverLine(label); // Set line based on hovered menu item
  };

  const handleMouseLineLeave = () => {
    setHoverLine(''); // Remove line when hover ends
  };

  const buttonVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    exit: { opacity: 0, y: -50, transition: { duration: 0.6, ease: "easeIn" } },
  };

  const menuVariants = {
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.15,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <div
      className={`flex fixed w-full z-[60] overflow-hidden flex-col transition-colors duration-900 ${scrollNav || activeSection
        ? 'bg-stone-800'
        : location.pathname === '/' || location.pathname === '/about-us' || location.pathname === '/leadership-team'
          ? 'lg:bg-transparent'
          : 'bg-stone-800'
        }`}
    >
      <div className="flex flex-col pt-6 w-full h-full max-md:max-w-full">
        <header className="flex relative lg:gap-20 justify-between items-center self-center w-[90%] 2xl:max-w-[92%] max-md:max-w-full">
          <Link to={'/'} className='z-20'>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f72711985a65d5e9cccf583145ef02cf25367e53a9dbd9152d31ad79b46cc8c?placeholderIfAbsent=true&apiKey=60c6eb6ce37644fdb727618799199006"
              alt="JEF Company logo"
              className="object-contain w-[7rem] lg:w-[7rem] 2xl:w-[8rem]"
            />
          </Link>

          <div className="flex justify-between w-screen">
            <nav className="flex gap-5 xl:gap-8 items-center my-auto max-md:max-w-full">
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  className="lg:flex hidden gap-2 justify-center items-center self-stretch my-auto group" // Added 'group' here
                >
                  {item.path ? (
                    <NavLink
                      to={item.path}
                      className="nav-item uppercase md:text-xs xl:text-sm font-medium tracking-[2px] text-white"
                      activeClassName="active"
                    >
                      {item.label}
                    </NavLink>
                  ) : (
                    <button
                      onMouseEnter={() => handleMenuHover(item.label)}
                      onMouseLeave={handleMouseLeave}
                      className="nav-item uppercase md:text-xs xl:text-sm font-medium text-white tracking-[2px]"
                    >
                      {item.label}
                    </button>
                  )}
                  {item.hasDropdown && (
                    <div className="flex flex-col justify-center items-center self-stretch px-2.5 py-3.5 my-auto w-8 min-h-[20px]">
                      <img
                        onMouseEnter={() => handleMenuHover(item.label)}
                        onMouseLeave={handleMouseLeave}
                        loading="lazy"
                        src="../HomePageImg/NavbarImg/Dropdown.png"
                        alt="Dropdown"
                        className="object-contain w-5 hidden lg:block transition-transform duration-300 transform group-hover:rotate-180"
                      />
                    </div>
                  )}
                </div>
              ))}

            </nav>


            <div className="flex gap-8 items-center self-stretch my-auto max-md:max-w-full">
              <button onClick={toggleDropdown} className="lg:flex z-20 hidden group gap-2.5 items-center self-stretch my-auto translation">
                <div
                  translate='no'
                  className="self-stretch uppercase my-auto text-xs xl:text-sm font-light tracking-[2px] text-white"
                >
                  {isArabic ? "Arabic (عربي)" : "English"}
                </div>
                <div className="flex flex-col justify-center items-center self-stretch px-2.5 py-3.5 my-auto w-8 min-h-[20px]">
                  <img
                    loading="lazy"
                    src="../HomePageImg/NavbarImg/Dropdown.png"
                    alt="Dropdown"
                    className={`object-contain w-5 hidden lg:block ${isDropdownVisible ? "transition-transform duration-300 transform rotate-180 group-hover:rotate-180" : "transition-transform duration-300 transform rotate-360"
                      }`}
                  />
                </div>
              </button>
              <AnimatePresence>
                {isDropdownVisible && (
                  <motion.div
                    animate="visible"
                    id="navigation-menu"
                    initial="hidden"
                    exit="exit"
                    variants={menuVariants}
                    className="fixed inset-0 bg-black bg-opacity-55 flex z-10 justify-center items-start"
                    onClick={() => setIsDropdownVisible(false)}
                  >
                    <div
                      className=" text-white shadow-md mt-40 flex flex-col items-end text-right w-[90%] 2xl:max-w-[92%]"
                    >
                      <motion.div
                        variants={buttonVariants}
                        translate='no'
                        className="cursor-pointer flex items-center gap-2 mb-8 w-fit"
                        onClick={() => {
                          toggleTranslation("en");
                          setIsDropdownVisible(false);
                        }}
                      >
                        <div>English</div> <img className={`w-4 h-4 ${isArabic ? "hidden" : "block"}`} src="/red-check-mark-icon.png" />
                      </motion.div>
                      <motion.div
                        variants={buttonVariants}
                        translate='no'
                        className="cursor-pointer w-fit flex items-center gap-2"
                        onClick={() => {
                          toggleTranslation("ar");
                          setIsDropdownVisible(false);
                        }}
                      >
                        <div>Arabic (عربي)</div> <img className={`w-4 h-4 ${isArabic ? "block" : "hidden"}`} src="/red-check-mark-icon.png" />
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <Link to='/get-in-touch' className='z-20'>
                <button className="gap-3 uppercase self-stretch py-3 px-4 md:py-2 lg:py-3 md:px-4 lg:px-7 my-auto text-xs md:text-sm text-red-700 bg-white hover:text-white hover:bg-red-700 rounded-[30px] tracking-[2px] whitespace-nowrap">
                  Contact Us
                </button>
              </Link>
              <button className="md:hidden mr-2 justify-items-center w-[2.3rem]" onClick={toggleSlideMenu}>
                <img src="../HomePageImg/NavbarImg/MenuLogo.png" alt="Mobile View Menu Button" />
              </button>
            </div>
          </div>
        </header>

        <div className="relative shrink-0 mt-7 h-0 border-b border-solid border-neutral-600 max-md:max-w-full" />
      </div>

      {/* Conditionally Render Sections */}
      {activeSection === 'About' && (
        <div
          onMouseEnter={() => handleMenuHover('About')}
          onMouseLeave={handleMouseLeave}
        >
          <AboutSection />
        </div>
      )}
      {activeSection === 'Our Business' && (
        <div
          onMouseEnter={() => handleMenuHover('Our Business')}
          onMouseLeave={handleMouseLeave}
        >
          <ServicesComponent />
        </div>
      )}
      {activeSection === 'Industries' && (
        <div
          onMouseEnter={() => handleMenuHover('Industries')}
          onMouseLeave={handleMouseLeave}
        >
          <IndustriesComponent />
        </div>
      )}

      {/* Mobile Navbar Content */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-stone-900 z-50 transform ${isSlideOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-500 ease-in-out`}
      >
        <button
          className="absolute top-5 right-0 p-2 text-white"
          onClick={toggleSlideMenu}
        >
          <img src="../HomePageImg/NavbarImg/CLoseMenuLogo.png" alt="closeButton" className='w-[10vw] sm:w-[5vw] md:w-[3vw]' />
        </button>
        <div className="h-full">
          <FAQComponent />
        </div>
      </div>

    </div>


  );
};

const navigationItems = [
  { number: "01", title: "About JEF", path: "/about-us" },
  { number: "02", title: "JEF leadership team", path: "/leadership-team" },  // Add a path for the leadership team
  { number: "03", title: "Our mission" },
  { number: "04", title: "Our vision" }
];

const contentMap = {
  // "01": "About",
  "02": "",
  "03": "Deliver Value added, technically superior and cost-optimum solutions to enhance the safety & reliability of Electrical systems by combining knowledge, experience and technology.",
  "04": "Make more customers across the world benefit from our expertise and achieve 40% annual growth rate."
};

function AboutSection() {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <section className="flex overflow-hidden flex-col h-[80vh] pl-[11%] items-start px-16 pt-5 pb-96 bg-stone-900 max-md:px-5 max-md:pb-24">
      <div className="ml-10 max-w-full w-[994px]">
        <div className="flex gap-5 max-md:flex-col">
          <nav className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-wrap grow gap-6 max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col grow shrink-0 items-start my-auto basis-0 w-fit max-md:max-w-full">
                {navigationItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-7 items-center mt-11 uppercase tracking-[3.36px] max-md:mt-10"
                  >
                    <div className="self-stretch my-auto text-base text-red-700">
                      {item.number}
                    </div>
                    <Link
                      to={item.path || "#"} // Use the path for clickable items, otherwise keep "#" for others
                      onMouseEnter={() => setHoveredItem(item.number)}
                      className="self-stretch my-auto text-lg hover:text-gray-400 font-medium text-white"
                    >
                      {item.title}
                    </Link>
                    {item.number === "01" && (
                      <div className="flex flex-col justify-center items-center py-1.5 pr-2.5 pl-2.5 min-h-[29px]">
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div
                className="shrink-0 w-0 border-l border-solid border-neutral-700 mt-[9%] h-[250px]"
                role="separator"
                aria-orientation="vertical"
              ></div>
            </div>
          </nav>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div
              className={`transition-all duration-500 ease-in-out flex gap-10 mt-[10%] text-xl font-medium text-white uppercase tracking-[3.36px] max-md:mt-10 ${hoveredItem ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
                }`}
            >
              <Link to="/about-us">
                <h2 className="text-xs leading-5 hover:text-gray-400">
                  {hoveredItem ? contentMap[hoveredItem] : "About"}
                </h2>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}













const ServiceItem = ({ icon, text, path, isVisible }) => (
  <div
    className={`flex gap-4 items-center mt-8 first:mt-10 transition-all duration-500 ease-in-out ${isVisible ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-4 invisible'
      }`}
  >
    <img
      loading="lazy"
      src={icon}
      alt=""
      className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
    />
    <Link to={path}>
      <div className="text-xs self-stretch hover:text-gray-400 my-auto">{text}</div>
    </Link>
  </div>
);

function ServicesComponent() {
  const [isHovered, setIsHovered] = useState(false);

  const services = [
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b5f02d9fdb5718b196d139d6ebd861434cc16ed9ab32832947574565d35f1e8a?placeholderIfAbsent=true&apiKey=ec02862acd164f0aad3ceef0d2a999c3',
      text: 'Earthing studies',
      path: '/EarthingStudies',
    },
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/867f2d5ce1ba02732c6bd156934c4e5560b9272459baee10a94cd80ed6bccf8f?placeholderIfAbsent=true&apiKey=ec02862acd164f0aad3ceef0d2a999c3',
      text: 'Lightning protection studies',
      path: '/LightningProtectionStudies',
    },
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/704550b3ea93f0d94056e8407f045bb96f426d89156169b780aa07bd555d1512?placeholderIfAbsent=true&apiKey=ec02862acd164f0aad3ceef0d2a999c3',
      text: 'Power system studies',
      path: '/PowerSystemStudies',
    },
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e7602f18306c0a2953e65246bde5f6d381c9d6dbb4b63b81ac2662d70c68741a?placeholderIfAbsent=true&apiKey=ec02862acd164f0aad3ceef0d2a999c3',
      text: 'Power quality studies',
      path: '/PowerQualityStudies',
    },
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/74ddbaff8275791cc7070e0e91bd52e5b6c933a25300b7964c1630c4c6275fc8?placeholderIfAbsent=true&apiKey=ec02862acd164f0aad3ceef0d2a999c3',
      text: 'Instrumentation earthing studies',
      path: '/InstrumentEarthing',
    },
  ];

  return (
    <section className="flex overflow-hidden flex-col h-[80vh] pl-[11%] items-start px-16 pt-5 pb-96 bg-stone-900 max-md:px-5 max-md:pb-24">
      <div className="ml-10 max-w-full w-[1016px]">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-2/5 max-md:ml-0 max-md:w-full">
            <header
              className="flex gap-7 items-center mt-14 max-md:mt-10"
            >
              <div className="self-stretch my-auto text-base font-medium text-red-700 uppercase tracking-[3.36px]">
                01
              </div>
              <div
                onMouseEnter={() => setIsHovered(true)}
                className="flex gap-10 self-stretch my-auto min-w-[240px] w-[287px]">
                <h2 className="text-lg hover:text-gray-400 font-medium text-white uppercase tracking-[3.36px]">
                  Services
                </h2>
                <div className="flex flex-col justify-center items-center py-1.5 pr-2.5 pl-2.5 min-h-[29px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2bb3117bb1e657fdbc997cd15e47263db3ce1251843c4a3543e9042a61e0fd2a?placeholderIfAbsent=true&apiKey=ec02862acd164f0aad3ceef0d2a999c3"
                    alt=""
                    className="object-contain w-2"
                  />
                </div>
              </div>
            </header>
          </div>
          <div className="flex flex-col ml-5 w-3/5 max-md:ml-0 max-md:w-full">
            <div className="flex flex-wrap grow gap-10 text-base font-medium text-white uppercase tracking-[3.36px] max-md:mt-10 max-md:max-w-full">
              <div
                className="shrink-0 w-0 border-l border-solid border-neutral-700 mt-[9%] h-[250px]"
                role="separator"
                aria-orientation="vertical"
              ></div>
              <div className="flex flex-col grow shrink-0 items-start my-auto basis-0 w-fit max-md:max-w-full">
                {services.map((service, index) => (
                  <ServiceItem
                    key={index}
                    icon={service.icon}
                    text={service.text}
                    path={service.path}
                    isVisible={isHovered}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}









const IndustriesItem = ({ path, icon, text, isVisible }) => (
  <div
    className={`flex gap-4 items-center mt-8 first:mt-10 transition-all duration-500 ease-in-out ${isVisible ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-4 invisible'
      }`}
  >
    <img
      loading="lazy"
      src={icon}
      alt=""
      className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
    />
    <Link to={path}>
      <div className="text-xs self-stretch  hover:text-gray-400 my-auto">{text}</div>
    </Link>
  </div>
);

function IndustriesComponent() {
  const [isHovered, setIsHovered] = useState(false);

  const Industries = [
    { icon: '../AboutUs/OilandGas.png', text: 'Oil and Gas', path: '/industries/oilandgas' },
    { icon: '../AboutUs/PoweUtilities.png', text: 'Power Utilities', path: '/industries/powerutilities' },
    { icon: '../AboutUs/MFplant.png', text: 'Manufacturing Plant', path: '/industries/manufacturingplant' },
    { icon: '../AboutUs/ProcessPlant.png', text: 'Process Plant', path: '/industries/processplant' },
    { icon: '../AboutUs/CBimg.png', text: 'Commercial Buildings', path: '/CommercialBuilding' },
  ];

  return (
    <section className="flex overflow-hidden flex-col h-[80vh] pl-[11%] items-start px-16 pt-5 pb-96 bg-stone-900 max-md:px-5 max-md:pb-24">
      <div className="ml-10 max-w-full w-[1016px]">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-2/5 max-md:ml-0 max-md:w-full">
            <header
              className="flex gap-7 items-center mt-14 max-md:mt-10"
            >
              <div className="self-stretch my-auto text-base font-medium text-red-700 uppercase tracking-[3.36px]">
                01
              </div>
              <div
                onMouseEnter={() => setIsHovered(true)}
                className="flex gap-10 self-stretch my-auto min-w-[240px] ">
                <h2 className="text-lg font-medium hover:text-gray-400 text-white uppercase tracking-[3.36px]">
                  Our Industries
                </h2>
                <div className="flex flex-col justify-center items-center py-1.5 pr-2.5 pl-2.5 min-h-[29px]">
                  <img
                    loading="lazy"
                    src="../AboutUs/RightArrow.png"
                    alt=""
                    className="object-contain w-2"
                  />
                </div>
              </div>
            </header>
          </div>
          <div className="flex flex-col ml-5 w-3/5 max-md:ml-0 max-md:w-full">
            <div className="flex flex-wrap grow gap-10 text-base font-medium text-white uppercase tracking-[3.36px] max-md:mt-10 max-md:max-w-full">
              <div
                className="shrink-0 w-0 border-l border-solid border-neutral-700 mt-[9%] h-[250px]"
                role="separator"
                aria-orientation="vertical"
              ></div>
              <div className="flex flex-col grow shrink-0 items-start my-auto basis-0 w-fit max-md:max-w-full">
                {Industries.map((industry, index) => (
                  <IndustriesItem
                    key={index}
                    icon={industry.icon}
                    text={industry.text}
                    path={industry.path}
                    isVisible={isHovered}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}






const FAQComponent = () => {

  const { isArabic, toggleTranslation } = useContext(TranslationContext);

  const [faqData, setFaqData] = useState([
    {
      question: "Home",
      path: "/", // Direct link path for Home
      isOpen: false,
    },
    {
      question: "About",
      content: [
        { label: 'About Us', path: '/about-us' },
        { label: 'JEF Leadership Team', path: '/LeadershipTeam' },
      ],
      isOpen: false,
    },
    {
      question: "Our Business",
      content: [
        { label: 'Power System Studies', path: '/PowerSystemStudies' },
        { label: 'Power Quality Studies', path: '/PowerQualityStudies' },
        { label: 'Earthing Studies', path: '/EarthingStudies' },
        { label: 'LPS System Studies', path: '/LightningProtectionStudies' },
        { label: 'Instrumentation Studies', path: '/InstrumentEarthing' }
      ],
      isOpen: false,
    },
    {
      question: "Industries",
      content: [
        { label: 'Oil and Gas', path: '/industries/oilandgas' },
        { label: 'Power Utilites', path: '/industries/powerutilities' },
        { label: 'Manufacturing Plant', path: '/industries/manufacturingplant' },
        { label: 'Process Plant', path: '/industries/processplant' },
        { label: 'Commercial Buildings', path: '/industries/commercialbuilding' }
      ],
      isOpen: false,
    },
    {
      question: "Blogs",
      path: "/blog", // Direct link path for Blogs
      isOpen: false,
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

  const FAQItem = ({ question, content, path, isOpen, onToggle }) => {
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
          <Link to={path}>
            <h2 className="self-stretch py-px leading-relaxed my-auto font-semibold text-xl tracking-wider uppercase text-red-600">
              {question}
            </h2>
          </Link>
          {!path && ( // Only show the dropdown button if no direct path exists
            <button
              className="flex flex-col justify-center p-3 w-10 min-h-[40px]"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close answer" : "Open answer"}
            >
              <img
                loading="lazy"
                src={
                  isOpen
                    ? "../AboutUs/DropUpArr.png"
                    : "../AboutUs/DropdownArr.png"
                }
                alt=""
                className="object-contain flex-1 w-full aspect-square"
              />
            </button>
          )}
        </div>
        {!path && (
          <div
            ref={contentRef}
            className="overflow-hidden transition-all w-[100vw] duration-300 ease-in-out"
            style={{ maxHeight: `${height}px` }}
          >
            <div className="px-5 py-5">
              {Array.isArray(content) ? (
                <ul>
                  {content.map((item, idx) => (
                    <li key={idx} className="mb-2">
                      <Link to={item.path}>
                        <div className="text-stone-300 hover:underline">
                          {item.label}
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className='text-gray-500'>{content}</p>
              )}
            </div>
          </div>
        )}
      </div>
    );
  };


  return (
    <section className="flex mt-[15%] overflow-hidden relative flex-col">
      <div className="flex absolute inset-0 z-0 flex-col py-0.5 w-full max-md:max-w-full"></div>
      <div className="flex z-0 flex-col self-center w-[95%] xl:w-[70%] lg:w-[80%]">
        <div className="flex max-md:flex-col justify-between items-start w-full max-md:max-w-full">
          <div className="flex flex-col pt-5 min-w-[240px] w-full lg:w-[48%] max-md:max-w-full">
            {faqData.slice(0, 5).map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                content={item.content} // Pass dynamic content
                path={item.path} // Pass direct link path
                isOpen={item.isOpen}
                onToggle={() => toggleFAQ(index)}
              />
            ))}
            <div className='mt-[10%] mx-auto'>
              <button
                onClick={() => {
                  console.log("Switched to English");
                  toggleTranslation("en");
                }}
                translate='no'
                className={` ${isArabic ? "block" : "hidden"} self-stretch border p-4 uppercase my-auto text-base font-light border-red-500 tracking-[2px] text-white`}
              >
                English
              </button>

              <button
                onClick={() => {
                  console.log("Switched to arabic");
                  toggleTranslation("ar");
                }}
                translate='no'
                className={` ${isArabic ? "hidden" : "block"} self-stretch border p-4 uppercase my-auto text-base font-light border-red-500 tracking-[2px] text-white`}
              >
                Arabic (عربي)
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};




export default Navbar;
