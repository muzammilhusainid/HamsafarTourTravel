import React from "react";

const Hero = () => {
  return (
    <section 
      className="relative bg-cover bg-center h-[80vh]" 
       style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0  bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Hamsafar Tour & Travel
        </h1>
        <p className="text-lg md:text-2xl mb-6 max-w-2xl">
          Explore the beauty of Uttarakhand with customized packages and unforgettable journeys.
        </p>
        <a
          href="#packages"
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-lg shadow-lg transition duration-300"
        >
          Explore Packages
        </a>
      </div>
    </section>
  );
};

export default Hero;
