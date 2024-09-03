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
    videourl,
    videotype,
    imgalt,
    title,
    button1Img,
    button2Img,
    button1Action,
    button2Action,
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
      <video
        src={videourl}
        type={videotype}
        alt={imgalt}
        className="absolute -mt-5 w-full h-full object-fill md:object-cover z-[-1]"
        autoPlay
        loop
        muted
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

      <div className={`flex flex-col justify-end items-center absolute bottom-0 mb-10`}>
        <div className="flex space-x-4">
          <button onClick={button1Action}>
            <img src={button1Img} alt="Button 1" className="h-12 w-12" />
          </button>
          <button onClick={button2Action}>
            <img src={button2Img} alt="Button 2" className="h-12 w-12" />
          </button>
        </div>
        <div className="text-center">
          {title}
        </div>
      </div>
    </div>
  );
}

MainImg.propTypes = {
  videourl: PropTypes.string.isRequired,
  videotype: PropTypes.string.isRequired,
  imgalt: PropTypes.string.isRequired,
  title: PropTypes.node,
  button1Img: PropTypes.string.isRequired,
  button2Img: PropTypes.string.isRequired,
  button1Action: PropTypes.func,
  button2Action: PropTypes.func,
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
  videourl: "/OtherPages/Careerimg/main.mp4",
  videotype: "video/mp4",
  imgalt: "Video Not Found",
  button1Img: "/path/to/button1.png",
  button2Img: "/path/to/button2.png",
  button1Action: () => {},
  button2Action: () => {},
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