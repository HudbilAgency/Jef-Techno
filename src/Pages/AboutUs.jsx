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
          title: "BUSINESS",
          description: "NEOM is a global hub open for business. We're building a future-oriented and sustainable economy, pioneering new benchmarks for talent and enterprise.",
          learnMore: true
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2137e57fab69bcc7f6fe80e5f7e438b0cdfa992da4b7bf36e2da2159fb80627e?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244",
          title: "LIVABILITY",
          description: "NEOM is reimagining urbanism to be people-first and nature-friendly. THE LINE and the connectivity of our regions will be a model for the future- setting new global standards for livability."
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/046a00e721b213a29322e89fd6ebaa8d2b511514f4b267d8a196e97e597db69f?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244",
          title: "CONSERVATION",
          description: "Protection, preservation and regeneration sit at the core of NEOM's model. We're an accelerator of planetary regeneration and nature has to come first."
        }
      ];
      

  return (
   <>
   < Navbar />
    <section className='overflow-hidden'>
            <main className="flex relative flex-col h-screen w-full  max-md:px-5 max-md:py-24 max-md:max-w-full">
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/bdb66e4942d3414eb64bf72be6385899c1d9b672047233f207ff5143dcc1d7d9?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244"
                alt=""
                className="object-cover absolute inset-0 size-full"
            />
            <section className="flex relative inset-y-2/3 lg:inset-x-40 flex-col mt-8 w-full max-w-[1310px] max-md:mb-2.5 max-md:max-w-full">
                <h1 className="xl:text-7xl md:text-5xl lg:text-6xl text-4xl font-bold tracking-wider text-white max-md:max-w-full max-md:text-4xl">
                THINK ELECTRICAL, THINK JEF
                </h1>
                <div className="flex gap-6 items-center self-start mt-12 text-2xl uppercase text-neutral-900 tracking-[3px] max-md:mt-10">
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4a6ca320d2c2f4c61334df8c01339996c153854afdc04d81a5343bfaa44d492c?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244"
                    alt=""
                    className="object-contain shrink-0 self-stretch my-auto w-16 aspect-square"
                />
                <button className="gap-2.5 self-stretch px-10 py-4 my-auto bg-white border border-solid border-zinc-900 border-opacity-10 min-h-[64px] rounded-[50px]">
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
        <header className="flex flex-col self-center max-w-full text-center text-white w-[795px]">
          <h1 className="flex justify-center items-center px-48 w-full text-5xl font-semibold leading-none uppercase tracking-[3.36px] max-md:px-5 max-md:max-w-full max-md:text-4xl">
            <span className="self-stretch pb-px my-auto min-w-[240px] max-md:text-4xl">
              OUR VISION
            </span>
          </h1>
          <p className="pb-px mt-8 w-full text-2xl font-light leading-9 max-md:max-w-full">
            NEOM is the land of the future where the greatest minds and best <br />
            talents are empowered to embody pioneering ideas and exceed <br />
            boundaries in a world inspired by imagination.
          </p>
        </header>
        <div className="flex flex-col items-center px-16 mt-20 max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col justify-center items-center w-full max-w-[1240px] max-md:max-w-full">
            <div className="flex flex-wrap flex-1 justify-center pr-40 pl-40 size-full max-md:px-5">
              {visionData.map((card, index) => (
                <article key={index} className="flex flex-col grow shrink justify-center pr-px max-w-[311px] min-w-[240px] w-[249px]">
                  <div className="flex flex-col px-5 py-14 w-full border border-white border-opacity-10 max-w-[310px] min-h-[460px] max-md:pl-5">
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


    {/* Our Purpose */}

      <section className='overflow-hidden'>
            <div className="flex relative flex-col justify-center bg-black items-center px-16 py-28 w-full max-md:px-5 max-md:py-24 max-md:max-w-full">
            <div className="flex flex-col gap-24 justify-center items-start mb-0 max-w-full w-[60%] md:w-[55%] lg:w-[50%] xl:w-[40%] min-w-[40%]  max-md:mb-2.5">
              <div className="pb-px text-5xl self-center font-bold leading-none text-center text-white uppercase min-w-[240px] tracking-[3.36px] max-md:text-4xl">
                Our Purpose
              </div>
              <div className='md:flex w-full justify-center'>
                    <div className="flex overflow-hidden px-9 py-12 flex-col grow shrink items-center border border-solid border-white border-opacity-20 min-w-[240px] w-[50%] max-md:px-5 max-md:pb-24">
                      <div className="flex flex-col justify-center w-20 min-h-[80px]">
                        <img
                          loading="lazy"
                          src="./AboutUs/OurPurposeImg1.png"
                          alt="Vision icon"
                          className="object-contain flex-1 w-full aspect-square"
                        />
                      </div>
                      <div className="mt-8 text-2xl font-medium tracking-widest leading-none text-center text-white uppercase">
                        VISION
                      </div>
                      <div className="self-stretch mt-28 text-base leading-6 text-center text-white max-md:mt-10">
                        The land of the future, where the <br /> greatest minds and best talents are <br /> empowered to embody pioneering <br /> ideas and exceed boundaries in a<br /> world inspired by imagination.
                      </div>
                    </div>
                    <div className="flex overflow-hidden flex-col grow shrink items-center px-9 py-12 border border-white border-opacity-20 min-w-[240px] w-[50%] max-md:px-5">
                      <div className="flex flex-col justify-center w-20 min-h-[80px]">
                        <img
                          loading="lazy"
                          src="./AboutUs/OurPurposeImg2.png"
                          alt="Values icon"
                          className="object-contain flex-1 w-full aspect-square"
                        />
                      </div>
                      <div className="mt-8 text-2xl font-medium tracking-widest leading-10 text-center text-white uppercase">
                        Values & Code of Conduct
                      </div>
                      <div className="self-stretch mt-14 text-base leading-6 text-center text-white max-md:mt-10">
                        We want to create a legacy that <br /> makes the world a better place, and <br /> our key values will help us achieve that. NEOM will be built on care, curiosity, diversity, passion, respect and becoming a catalyst for change{" "}
                      </div>
                      <div className="flex gap-2.5 items-start mt-16 max-md:mt-10">
                        <div className="flex flex-col text-xs tracking-widest leading-none text-center text-white uppercase">
                          <div>Learn More</div>
                        </div>
                        <div className="flex flex-col justify-center w-4 min-h-[16px]">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/426de649617d81523f0566c668c64884e2a271eac7dbffac28c13b7b1a6c4808?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244"
                            alt="Learn more icon"
                            className="object-contain flex-1 w-4 aspect-square"
                          />
                        </div>
                      </div>
                    </div>
              </div>
            </div>
          </div>
      </section>


    

    <section>
              
        < UniqueEnvironment />

    </section>


    {/* Our Journey Section */}


    <section className="flex overflow-hidden flex-col py-36 bg-stone-900 max-md:py-24">
      <header className="flex flex-col justify-center items-center px-60 py-6 w-full text-5xl leading-tight text-center text-white uppercase tracking-[4.53px] max-md:px-5 max-md:max-w-full max-md:text-4xl">
        <h1 className="flex flex-col max-w-full w-[960px] max-md:text-4xl">
          <span className="flex justify-center items-center pr-72 pl-72 w-full max-md:px-5 max-md:max-w-full max-md:text-4xl">
            <span className="self-stretch my-auto min-w-[240px] max-md:text-4xl">Our journey</span>
          </span>
        </h1>
      </header>
      <div className="flex relative gap-10 justify-center mt-6 w-full text-base text-white whitespace-nowrap max-md:px-5 max-md:max-w-full">
        <div className="flex absolute inset-x-0 z-0 self-center justify-center h-px border-b border-white bottom-[3px] min-h-[1px] w-full max-md:max-w-full" />
        {timelineData.map((item, index) => (
          <div
            key={index}
            className={`flex z-0 flex-col pt-3 ${
              item.isHighlighted
                ? 'text-2xl leading-none text-red-700'
                : item.isSmall
                ? 'text-sm leading-relaxed'
                : 'leading-loose'
            }`}
          >
            <div className={`flex flex-col ${item.isHighlighted ? 'w-[59px]' : 'w-[33px]'}`}>
              <div className="pb-px w-full">{item.year}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex relative flex-col justify-center px-20 pt-11 pb-10 mt-6 w-full max-md:px-5 max-md:max-w-full">
        <figure className="flex overflow-hidden z-0 flex-col items-center self-center max-w-full w-[1296px]">
          <div className="flex overflow-hidden flex-col w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb8c6eb0114d3c75b969834b4b20bc38915dcf13c83f86ee62bf0e2a976814f2?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244"
              alt="Timeline visual representation"
              className="object-contain w-full aspect-[3.04] max-md:max-w-full"
            />
          </div>
        </figure>
      </div>
      <div className="flex justify-center pt-1.5 mt-6 w-full text-center px-[491px] max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col items-center px-16 max-w-[619px] min-w-[240px] w-[460px] max-md:px-5">
          <time className="flex flex-col pb-2.5 text-xl tracking-widest leading-none text-red-700 uppercase whitespace-nowrap w-[61px]">
            <span className="flex flex-col w-full">
              <span className="w-full">June</span>
            </span>
          </time>
          <p className="flex flex-col w-full text-base font-light leading-loose text-white">
            <span className="w-full">NEOM reveals Magna, its new coastal region</span>
          </p>
        </div>
      </div>
    </section>








    <section className="flex overflow-hidden md:pl-[10%]  flex-col justify-center items-start px-20 py-32 bg-neutral-100 max-md:px-5 max-md:py-24">
      <div className="flex flex-col max-w-full">
        <div className="flex flex-col w-full max-md:max-w-full">
          <h2 className="pb-px w-full text-5xl text-red-700 leading-[71px] tracking-[4.53px] max-md:max-w-full max-md:text-4xl max-md:leading-[69px]">
            What does <br />
            <span className="font-bold text-red-700">JEF</span> mean?
          </h2>
          <p className="mt-8 w-full text-xl font-thin leading-8 text-zinc-900 max-md:max-w-full">
            The name NEOM is derived from two words. Envisioned <br />
            by His Royal Highness Mohammed bin Salman, Crown <br />
            Prince and Chairman of the NEOM Company Board of <br />
            Directors, the first three letters come from the Ancient <br />
            Greek prefix neo – meaning 'new'. The 'M' is the first <br />
            from 'Mustaqbal', an Arabic word meaning 'future'. The <br />
            M is also the first letter of the Crown Prince, <br />
            Mohammed bin Salman.
          </p>
        </div>
        <div className="flex flex-wrap items-start self-center py-2.5 mt-10 w-full max-md:pr-5 max-md:max-w-full">
          <div className="flex grow shrink items-start h-10">
            <button className="flex overflow-hidden justify-start items-start self-stretch py-2 px-7 my-auto bg-red-700 min-h-[55px] rounded-[60px] max-md:px-5">
              <span className="self-stretch my-auto text-base tracking-widest leading-none text-white uppercase">
                LEARN MORE
              </span>
              <div className="flex flex-col items-start self-stretch pl-2.5 my-auto min-h-[16px] w-[27px]">
                <div className="flex flex-col justify-center w-4 min-h-[16px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/267c57813526f8d5addde0296fd4cb603e84f278bb1ea0cae1b5b4bfbda63349?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244"
                    className="object-contain flex-1 w-full aspect-square"
                    alt=""
                  />
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>


    <section>
      <div className="flex relative flex-col px-80 py-16 bg-zinc-800 max-md:px-5"
      style={{ backgroundImage: "url('https://cdn.builder.io/api/v1/image/assets/TEMP/3486dd285e7017129820ae9151645cac7970507614e144bdcb7c7e402d2b2d9c?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244')", 
        backgroundSize: "cover", 
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat" }}>
        {/* <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3486dd285e7017129820ae9151645cac7970507614e144bdcb7c7e402d2b2d9c?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244"
          alt="bg-img"
          className="object-cover absolute inset-0 z-0 w-full aspect-[3.05] max-md:max-w-full"
        /> */}
        <div className="flex z-0 flex-col self-center max-w-full w-[770px]">
          <div className="flex flex-col w-full max-md:max-w-full">
            <div className="flex overflow-hidden justify-center items-end self-center max-w-full rounded-[120px]">
              <div className="flex overflow-hidden flex-col flex-1 shrink w-full basis-0">
                <div className="flex flex-1 justify-center items-center size-full">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b5888bed9ef9ad16303c58184db5c33fa656c4c45836c5280ac7f43ce29beaf?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244"
                    alt="Profile"
                    className="object-cover self-stretch my-auto aspect-square w-[120px]"
                  />
                </div>
              </div>
            </div>
            <section className="flex z-10 flex-col mt-10  text-center max-md:mb-2.5 max-md:max-w-full">
              <blockquote className="w-full text-xl font-light leading-8 text-white max-md:max-w-full">
                "If we are to solve the challenges of tomorrow, we must face up to them today,
                <br />
                no matter how difficult they may seem. At NEOM, we are addressing some of the
                <br />
                most pressing challenges facing humanity by bringing together a community of
                <br />
                the brightest minds committed to reimagining what a sustainable future will look
                <br />
                like in 20 to 30 years, and building it today. We are redefining the future now.
                <br />
                NEOM is open for business."
              </blockquote>
              <footer className="flex flex-col mt-6 w-full">
                <p className="w-full text-base font-medium leading-loose text-red-700 max-md:px-5 max-md:max-w-full">
                  NEOM Chief Executive Officer
                </p>
                <p className="mt-2.5 w-full text-xl font-semibold leading-9 text-white max-md:px-5 max-md:max-w-full">
                  Nadhmi Al-Nasr
                </p>
              </footer>
            </section>
          </div>
        </div>
      </div>
    </section>



    <section>
  <div 
    className="flex overflow-hidden relative gap-10 justify-center items-start pt-16 pb-16 bg-zinc-900"
    style={{ backgroundImage: "url('https://cdn.builder.io/api/v1/image/assets/TEMP/66f6bb7d22178abfdbaa1bd2b07992f6d1ff63598849bb870a6de98573eb4dc0?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244')", 
             backgroundSize: "cover", 
             backgroundPosition: "center",
             backgroundRepeat: "no-repeat" }}>
    
    <div className="flex z-0 flex-col lg:pl-[10%] my-auto max-w-screen min-w-[240px] w-full max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col w-full max-md:max-w-full">
        <div className="flex flex-col w-full max-md:max-w-full">
          <h1 className="pb-px w-full text-5xl leading-loose text-white tracking-[4.53px] max-md:max-w-full max-md:text-4xl">
            JEF LEADERSHIP
          </h1>
          <p className="mt-8 w-full text-base font-thin leading-6 text-white max-md:max-w-full min-w-[90%]">
            To bring NEOM to life requires the world's most forward-thinking
            <br />
            innovators leading the way. Meet the ambitious professionals doing
            <br />
            exactly that, and learn more about their distinguished experience.
          </p>
        </div>
        <div className="flex flex-wrap items-start py-2.5 pr-80 pl-2.5 mt-10 w-full max-md:pr-5 max-md:max-w-full">
          <div className="flex grow shrink items-center h-10 w-[188px]">
            <button className="flex overflow-hidden justify-center items-center self-stretch py-5 px-10 my-auto bg-white border border-solid border-zinc-900 border-opacity-10 min-h-[55px] min-w-fit rounded-[60px]">
              <span className="text-sm leading-none uppercase text-zinc-900">
                SEE ALL LEADERS
              </span>
              <div className="flex flex-col items-start self-stretch pl-2.5 my-auto min-h-[16px] w-[27px]">
                <div className="flex flex-col justify-center w-4 min-h-[16px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8f7562df75258c749f986bf6bb883b58568ee2e6a92f2ab4317d5c47e05e99bd?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244"
                    alt="Arrow icon"
                    className="object-contain flex-1 w-full aspect-square"
                  />
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
 

    {/* Social responsibility annual report  */}

    <main className="flex overflow-hidden h-screen relative gap-10 justify-start md:pl-[5%] lg:pl-[10%] items-start bg-zinc-900 min-h-[900px] max-md:py-24"
      style={{ backgroundImage: "url('https://cdn.builder.io/api/v1/image/assets/TEMP/4dabc8b3811d06b0e7b963700886b5da1464cdce36be495b5efe65a38661a598?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244')", 
               backgroundSize: "cover", 
               backgroundPosition: "center",
               backgroundRepeat: "no-repeat" }}>
  
  <section className="flex z-0 flex-col my-auto max-md:px-5 max-md:max-w-full">
    <div className="flex flex-col w-full max-md:max-w-full">
      <header className="flex flex-col w-full text-white max-md:max-w-full">
        <h1 className="pb-px w-full text-5xl leading-[71px] tracking-[4.53px] max-md:max-w-full max-md:text-4xl max-md:leading-[66px]">
          NEOM SOCIAL <br /> RESPONSIBILITY <br /> ANNUAL REPORT
        </h1>
        <p className="mt-8 w-full text-base font-thin leading-6 max-md:max-w-full">
          To build the cities of the future, we need to build the communities of the <br /> future. At NEOM Social Impact, we are developing transformative <br /> educational and training programs that empower students, <br /> entrepreneurs and individuals to be part of NEOM's sustainable society.
        </p>
      </header>
      <div className="flex flex-wrap items-start py-2.5 pr-60 pl-2.5 mt-10 w-full max-md:pr-5 max-md:max-w-full">
        <div className="flex grow shrink items-center h-10 ">
          <a 
            href="#download-report" 
            className="flex overflow-hidden justify-center items-center self-stretch py-5 pr-3.5 pl-7 my-auto bg-white border border-solid border-zinc-900 border-opacity-10 min-h-[55px] min-w-[240px] rounded-[60px] w-[306px] max-md:pl-5"
            role="button"
          >
            <span className="self-start my-auto text-base tracking-widest leading-none uppercase text-zinc-900">
              Download the Report
            </span>
            <span className="flex flex-col items-start self-stretch pl-3 my-auto min-h-[16px] w-[27px]">
              <img 
                loading="lazy" 
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/409491851bdc7a2c7ae3e8c9791655132f58f36f3a281fbf935628fcdb599b4a?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244" 
                alt="" 
                className="object-contain flex-1 w-full aspect-square" 
              />
            </span>
          </a>
        </div>
      </div>
    </div>
  </section>
</main>




    {/* Office Location Section  */}

    <section>
      < LocationsSection />  
    </section>   




        {/* <section>
          < Accordion />
        </section> */}

        <section>
           < FAQComponent />
        </section>


    {/* ContactUs Section */}

    <section className="flex overflow-hidden flex-col text-base font-light  text-stone-300">
      <div className="flex relative flex-col justify-center items-start px-20 py-24 w-full min-h-[628px] max-md:px-5 max-md:pb-24 max-md:max-w-full">
        <img loading="lazy" src="./HomePageImg/ContactUsMainImg.png" alt="" className="object-cover absolute inset-0 size-full" />
        <div className="flex lg:mx-[120px] relative flex-col items-start mb-0 max-w-full w-[521px] max-md:mb-2.5">
          <h1 className="text-5xl font-semibold text-red-700 uppercase tracking-[2px] max-md:text-4xl">
            Contact us
          </h1>
          <p className="self-stretch mt-4 text-lg font-normal leading-none text-white max-md:max-w-full">
          Get in touch with us for any business enquiry.
          </p>
          <form className="w-full mt-12 max-md:mt-10">
            {inputFields.map((field, index) => (
              <FormInput key={index} label={field.label} type={field.type} />
            ))}
            <button
              type="submit"
              className="overflow-hidden px-16 py-4 mt-2 max-w-full text-xl font-semibold text-white whitespace-nowrap bg-red-700 rounded-3xl w-[380px] max-md:px-5"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>        




  < MainFooter />
   </>
  )
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
  { name: "Manufacturing", imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/eea8090705ba8d0207f4e72aa7252f196defdc3f1737976d0ce4c12cf1fe471a?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244", altText: "Manufacturing sector icon" },
  { name: "Water", imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/29984e787b793a787fb0f1e1e18dcc903fb84c76fad8efed9d4317dff4c2ec30?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244", altText: "Water sector icon" },
  { name: "Technology and Digital", imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/db88c1495d8b65354c194c3cdd14b98f9c044fa4a1bb709c929252dfab391adb?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244", altText: "Technology and Digital sector icon" },
  { name: "Entertainment and Culture", imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/7e398c1204c016e4375e42f29d78777040df087825e916bdbb1d8fe2ffa67a70?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244", altText: "Entertainment and Culture sector icon" },
  { name: "Education, Research, And Innovation", imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/d12499752de7003d010eaf1e8f03b1ba1dedcc8415c109cd60c8de0936d5636d?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244", altText: "Education, Research, and Innovation sector icon" },
  { name: "Design and Construction", imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/eb697f2f0bf29f78e57065a60c4d606573430472469ba6a65a84b3858c9c9e93?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244", altText: "Design and Construction sector icon" },
  { name: "Food", imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/5f5c4c7402ef2796bdcba85bc97f83dae00b18db50f9036c047083989cb372ad?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244", altText: "Food sector icon" },
  { name: "Energy", imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/444134d463f92458d2e970ee7ca77be06090f8dfd4e97d21bc48bcfb4f52ce77?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244", altText: "Energy sector icon" },
  { name: "Sport", imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/c33b69887debb40680df3004e5edcb0e826cc5e0f2e786fb940e3874ed87ede9?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244", altText: "Sport sector icon" },
  { name: "Tourism", imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/8be4392318990b91f786dc4a0f9b9b82d7568813e309464fe21940f3a2b0ba45?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244", altText: "Tourism sector icon" },
  { name: "Mobility", imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/7c96afee46212c1703e3e09d63cf66c6b024a68f56ce30806205de9ccce3922e?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244", altText: "Mobility sector icon" },
  { name: "Health, Well-being and Biotech", imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/a182c7f50e8b68b96f02b7ffaa7911e73347a55c9308ec6d2d16dd1b248141d5?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244", altText: "Health, Well-being and Biotech sector icon" },
  { name: "Financial Services", imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/67359a20add1364af4e914cdd70a06c9b614ca83448d134b48ac5870b1289917?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244", altText: "Financial Services sector icon" },
  { name: "Media", imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/ea5bb3d8d1e71aee25004f049e5b1e39216a888f611316f600c38f4e1f2c1f58?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244", altText: "Media sector icon" }
];

function SectorIcon({ name, imageSrc, altText }) {
  return (
    <div className="flex justify-center items-center self-stretch px-9 py-11 my-auto rounded-[83px] max-md:px-5">
      <div className="flex flex-col items-center self-stretch my-auto w-full">
        <div className="flex overflow-hidden flex-col flex-1 items-center w-full">
          <div className="flex flex-1 justify-center size-full">
            <img loading="lazy" src={imageSrc} alt={altText} className="object-cover flex-1 shrink w-full aspect-[1.98] basis-0" />
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
          <h1 className="flex justify-center items-center px-36 w-full text-5xl font-bold leading-none uppercase tracking-[4.53px] max-md:px-5 max-md:max-w-full max-md:text-4xl">
            <span className="self-stretch pb-px my-auto min-w-[240px] max-md:max-w-full max-md:text-4xl">
              An Economic Engine
            </span>
          </h1>
          <p className="pb-px mt-5 w-full text-2xl font-light leading-9 max-md:max-w-full">
            These distinct regions and sectors will be fueled by USD 500 billion from the Public Investment Fund
            <br />
            of the Kingdom of Saudi Arabia and local and international investors. NEOM will become a
            <br />
            community powered by talent and diversity across 14 sectors.
          </p>
        </header>
        <div className="items-center mt-20 max-w-full  max-md:mt-10">
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 justify-center">
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