import React, { useState, useRef } from 'react';

const images = [
    "https://www.jorgefolgado.com/Imagens/img1.jpg",
    'https://via.placeholder.com/800x300/00FF00/FFFFFF?text=Slide+2',
  'https://via.placeholder.com/800x300/0000FF/FFFFFF?text=Slide+3',
];

export default function Test() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startPos = useRef(0); // Ref to store the starting position of touch/drag
  const currentTranslate = useRef(0); // Ref to store current translation value
  const prevTranslate = useRef(0); // Ref to store the previous translation value
  const animationID = useRef(null); // Ref for requestAnimationFrame
  const sliderRef = useRef(null); // Ref for slider element

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Handle touch start / mouse down
  const handleTouchStart = (e) => {
    setIsDragging(true);
    startPos.current = getPositionX(e); // Record starting X position of touch/drag
    sliderRef.current.style.transition = 'none'; // Disable transitions when dragging
    animationID.current = requestAnimationFrame(animation); // Start animation loop
  };

  // Handle touch move / mouse move
  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const currentPosition = getPositionX(e);
    currentTranslate.current = prevTranslate.current + currentPosition - startPos.current; // Calculate translation during drag
  };

  // Handle touch end / mouse up
  const handleTouchEnd = () => {
    setIsDragging(false);
    cancelAnimationFrame(animationID.current); // Stop the animation
    const movedBy = currentTranslate.current - prevTranslate.current;

    // Threshold for detecting a slide (50px)
    if (movedBy < -50) nextSlide();
    if (movedBy > 50) prevSlide();

    sliderRef.current.style.transition = 'transform 0.5s ease-out'; // Add smooth transition back
    currentTranslate.current = 0; // Reset translate value
    prevTranslate.current = 0;
  };

  // Get X position from touch or mouse event
  const getPositionX = (e) => {
    return e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
  };

  // Animation function to update slider transform in real-time during dragging
  const animation = () => {
    sliderRef.current.style.transform = `translateX(${currentTranslate.current}px)`;
    if (isDragging) requestAnimationFrame(animation);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-10">
      {/* Carousel Images */}
      <div
        className="overflow-hidden relative h-64"
        onMouseDown={handleTouchStart}
        onMouseMove={handleTouchMove}
        onMouseUp={handleTouchEnd}
        onMouseLeave={handleTouchEnd} // Handle the case where the user stops dragging outside the carousel
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          ref={sliderRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="min-w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          ))}
        </div>
      </div>

      {/* Left Arrow */}
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
        onClick={prevSlide}
      >
        &#8592;
      </button>

      {/* Right Arrow */}
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
        onClick={nextSlide}
      >
        &#8594;
      </button>

      {/* Dots/Indicators */}
      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full mx-1 cursor-pointer ${
              currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}
