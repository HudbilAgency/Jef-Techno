import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

// Sample blog data
const blogData = [
  {
    id: 1,
    imageSrc: "./HomePageImg/BlogsSection/Img1.png",
    title: "Enhance Reliability, Efficiency and Compliance of Your Electrical Grid through Power System Studies",
  },
  {
    id: 2,
    imageSrc: "./HomePageImg/BlogsSection/Img2.png",
    title: "What are the Challenges for Electrical System Design and Engineering in Greenfield Projects",
  },
  {
    id: 3,
    imageSrc: "./HomePageImg/BlogsSection/Img3.png",
    title: "Measurement, simulation, validation - The 3 key steps of Power System Studies",
  },
];

const Carousel22 = () => {
  return (
    <div className="bg-neutral-100">
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-40%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-100">
     <div className="flex flex-col items-start mb-0 w-full max-w-[1480px] max-md:mb-2.5 max-md:max-w-full">
            <header className="flex flex-wrap gap-5 justify-between self-stretch w-full text-red-700 uppercase max-md:max-w-full">
              <h1 className="text-5xl font-bold leading-none tracking-[3.36px]">BLOGS</h1>
              <div className="flex gap-7 text-base tracking-[3px]">
                <div className="grow my-auto">99 ARTICLES IN TOTAL</div>
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/951171544b272ca27d823631886443b3e62258383a3a68c83393b1447e2eb810?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244" alt="" className="object-contain shrink-0 w-14 aspect-square" />
              </div>
            </header>
            <nav className="flex gap-8 mt-16 ml-3.5 text-xl uppercase whitespace-nowrap tracking-[3.36px] max-md:mt-10 max-md:ml-2.5">
              <a href="#newest" className="text-red-700 basis-auto">Newest</a>
              <a href="#oldest" className="text-neutral-900">Oldest</a>
            </nav>
            <section ref={targetRef} className="relative mt-10 w-full max-w-[1400px] max-md:max-w-full">
              <div className="sticky flex gap-5 top-0 max-md:flex-col items-center overflow-hidden">
              <motion.div style={{ x }} className="flex gap-4">
                {blogData.map((blog, index) => (
                  <BlogCard key={index} imageSrc={blog.imageSrc} title={blog.title} />
                ))}
             </motion.div>
              </div>
            </section>
          </div>
    </section>
  );
};

const BlogCard = ({ imageSrc, title }) => {
  return (
    <div className="h-[300px] bg-neutral-200">
   <article className="flex flex-col w-full max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow max-md:mt-10">
        <div className="flex flex-col justify-center w-full min-h-[400px]">
          <img loading="lazy" src={imageSrc} alt={title} className="object-contain w-[380px] aspect-square" />
        </div>
        <div className="flex flex-col items-start mt-4 w-full max-w-[400px] max-md:pr-5">
          <h2 className="text-lg leading-6 lg:h-16 text-stone-900">{title}</h2>
          <div className="flex gap-2 mt-6 text-xs tracking-widest leading-tight text-center text-red-700 uppercase">
            <div className="grow">Read more</div>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c99385a3888a56e12aa67bbca0d3363e44c74249fcb42246da50d1f716869d4?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244" alt="" className="object-contain shrink-0 aspect-[2.07] w-[31px]" />
          </div>
        </div>
      </div>
    </article>
    </div>
  );
};

export default Carousel22;