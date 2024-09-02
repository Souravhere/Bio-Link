import React from "react";

const HeroSection = () => {
  return (
    <div className="hero-container flex justify-center items-center h-screen">
      <BubbleText />
    </div>
  );
};

const BubbleText = () => {
  return (
    <h2 className="text-center sm:text-5xl sm:font-bold py-2 font-semibold text-4xl text-black">
      {"Your Vision with Bytte".split("").map((char, idx) => (
        <span className="bubble-text" key={idx}>
          {char}
        </span>
      ))}
    </h2>
  );
};

export default HeroSection;
