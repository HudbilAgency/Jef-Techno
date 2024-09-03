/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import PropTypes from "prop-types";

function MainImg(props) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = (isOpen) => {
    setMenuOpen(isOpen);
  };

  const {
    imgurl,
    imgalt,
    title,
    navbgcolor,
    contentNav,
    bgColor,
    textColor,
    textColorLi,
    textColorLiHover,
    logohudbil,
    logohudbilleaf,
  } = props;

  return (
    <div className="h-[50vh] sm:h-[70vh] md:h-[90vh] lg:h-screen relative">
      <img
        src={imgurl}
        alt={imgalt}
        className="absolute -mt-5 w-full h-full object-fill md:object-cover z-[-1]"
      />

      <Navbar
        navbgcolor={navbgcolor}
        contentNav={contentNav}
        bgColor={bgColor}
        textColor={textColor}
        textColorLi={textColorLi}
        textColorLiHover={textColorLiHover}
        logohudbil={logohudbil}
        logohudbilleaf={logohudbilleaf}
        onMenuOpen={handleMenuOpen}
      />

      <div className={`flex flex-col justify-end absolute bottom-0 mb-20`}>
        <div className="text-center">
          {title}
        </div>
        <div className="flex lg:mx-[200px] mt-2">
          <img 
            loading="lazy" 
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8855ae14d9effa10b9317a704535212615d40fdec755767f2e9941cd3e8401cc?placeholderIfAbsent=true&apiKey=60c6eb6ce37644fdb727618799199006" 
            alt="" 
            className="object-contain shrink-0 self-stretch my-auto w-16 aspect-square" 
          />
          <button className="gap-2.5 tracking-widest self-stretch px-6 py-4 my-auto bg-white border border-solid border-zinc-900 border-opacity-10 text-2xl translate-x-10  rounded-[50px]  ">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

MainImg.propTypes = {
  imgurl: PropTypes.string.isRequired, // Changed from videourl to imgurl
  imgalt: PropTypes.string.isRequired, // Changed from videotype to imgalt
  title: PropTypes.node,
  navbgcolor: PropTypes.string,
  contentNav: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  textColorLi: PropTypes.string,
  textColorLiHover: PropTypes.string,
  logohudbil: PropTypes.string,
  logohudbilleaf: PropTypes.string,
};

MainImg.defaultProps = {
  imgurl: "/OtherPages/Careerimg/main.png", // Default image URL
  imgalt: "Image Not Found", // Default alt text
  // Navbar props
  navbgcolor: "bg-black",
  contentNav: "We are a global creative agency that combines design expertise with technology and AI intelligence.",
  bgColor: "bg-white",
  textColor: "text-white",
  textColorLi: "text-white",
  textColorLiHover: "text-gray-500",
  logohudbil: "logo/logo.svg",
};

export default MainImg;