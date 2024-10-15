import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

// Sample resources array with 6 cards
const blogData = [
  {
    id: 1,
    imageSrc: "./HomePageImg/BlogsSection/Img1.png",
    title: "Enhance Reliability, Efficiency and Compliance of Your Electrical Grid through Power System Studies",
    path: '/BlogInside'
  },
  {
    id: 2,
    imageSrc: "./HomePageImg/BlogsSection/Img2.png",
    title: "What are the Challenges for Electrical System Design and Engineering in Greenfield Projects",
    path: ''
  },
  {
    id: 3,
    imageSrc: "./HomePageImg/BlogsSection/Img3.png",
    title: "Measurement, simulation, validation - The 3 key steps of Power System Studies",
    path: ''
  },
  {
    id: 4,
    imageSrc: "./HomePageImg/BlogsSection/Img1.png",
    title: "Enhance Reliability, Efficiency and Compliance of Your Electrical Grid through Power System Studies",
    path: ''
  },
  {
    id: 5,
    imageSrc: "./HomePageImg/BlogsSection/Img2.png",
    title: "What are the Challenges for Electrical System Design and Engineering in Greenfield Projects",
    path: ''
  },
  {
    id: 6,
    imageSrc: "./HomePageImg/BlogsSection/Img3.png",
    title: "Measurement, simulation, validation - The 3 key steps of Power System Studies",
    path: ''
  },
];

const CarousalImg = () => {
  return <HorizontalScrollResources />;
};

const HorizontalScrollResources = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]); // Adjusted to scroll through 3 cards

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-100">
      <div className="sticky flex-shrink-0 mx-[10px] lg:mx-[160px] top-0 flex h-screen items-center overflow-hidden">
        <motion.div
          style={{ x }}
          className="flex gap-4"
        >
          {blogData.map((blog) => (
            <BlogCard key={blog.id} imageSrc={blog.imageSrc} title={blog.title} path={blog.path} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

function BlogCard({ imageSrc, title ,path }) {
  return (
    <article className="flex -mt-20 lg:-mt-0 flex-col lg:mx-6 w-[90vw] lg:w-[22vw] "> {/* Use vw for fixed width */}
      <div className="flex flex-col grow max-md:mt-10">
        <div className="flex flex-col justify-center w-full min-h-[400px]">
          <img loading="lazy" src={imageSrc} alt={title} className="object-contain w-full h-auto aspect-square" />
        </div>
        <div className="flex flex-col items-start mt-4 w-full max-w-[400px] max-md:pr-5">
          <h2 className="text-lg leading-6 lg:h-16 text-stone-900">{title}</h2>
          <div className="flex gap-2 mt-6 text-xs tracking-widest leading-tight text-center text-red-700 uppercase">
            <Link to={path} ><div className="grow">Read more</div></Link>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c99385a3888a56e12aa67bbca0d3363e44c74249fcb42246da50d1f716869d4?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244" alt="" className="object-contain shrink-0 aspect-[2.07] w-[31px]" />
          </div>
        </div>
      </div>
    </article>
  );
}

export default CarousalImg;