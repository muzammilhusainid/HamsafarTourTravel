import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { PiHandbagBold } from "react-icons/pi";
import heroBg1 from "../../assets/images/hero-bg3.png";
import logo from "../../assets/images/ValleyvelsLogo.png";

const HeaderHero = () => {
  return (
    <section
      id="hero"
      className="relative bg-cover bg-center h-[100vh]"
      style={{ backgroundImage: `url(${heroBg1})` }}
    >
      {/* Gradient Overlay (Top Only) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent "></div>

      {/* Navbar Overlay */}
      <header className="absolute top-0 left-0 w-full z-20">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Hamsafar Logo" className="h-14 w-auto" />
            <h1 className="text-2xl font-bold text-white">Valleyvels</h1>
          </div>
          {/* Menu */}
          <ul className="hidden md:flex space-x-6 font-medium text-lg text-white">
            <li><a href="#hero" className="py-2 relative text-green-400 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-green-500">Home</a></li>
            <li><a href="#destinations" className="py-2 relative hover:text-green-400 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-green-500 after:transition-all after:duration-400 hover:after:w-full">Destinations</a></li>
            <li><a href="#packages" className="py-2 relative hover:text-green-400 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-green-500 after:transition-all after:duration-400 hover:after:w-full">Packages</a></li>
            <li><a href="#things" className="py-2 relative hover:text-green-400 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-green-500 after:transition-all after:duration-400 hover:after:w-full">Things To Do</a></li>
            <li><a href="#about" className="py-2 relative hover:text-green-400 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-green-500 after:transition-all after:duration-400 hover:after:w-full">About Us</a></li>
            <li><a href="#contact" className="py-2 relative hover:text-green-400 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-green-500 after:transition-all after:duration-400 hover:after:w-full">Contact</a></li>
          </ul>


          {/* CTA + Social */}
          <div className="flex items-center space-x-4">
            <a
              href="#packages"
              className="hidden md:block bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-lg shadow-md"
            >
              Book Now
            </a>
          </div>
          {/* Mobile Hamburger */}
          <button className="md:hidden text-white text-2xl">☰</button>
        </div>
      </header>

      {/* Hero Content (Left Aligned) */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full text-left text-white px-8 md:px-20">
        <h2 className="font-kaushan text-xl md:text-2xl mb-4 drop-shadow-lg max-w-xl">
          Explore the <span className="text-green-400">Serenity of</span>
        </h2>
        <h2 className="text-2xl md:text-4xl font-bold mb-4 drop-shadow-lg max-w-xl">
          India’s Most Beautiful
        </h2>
        <h2 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg max-w-xl">
          Hill Stations
        </h2>
        <p className="md:text-lg">
          Breathtaking views, pleasant weather and
        </p>
        <p className="md:text-lg mb-6 max-w-lg">
          unforgettable experiences await you.
        </p>
        <div className="flex flex-col md:flex-row md:space-x-2 space-y-4 md:space-y-0">
          <a
            href="#destinations"
            className="text-base flex items-center gap-2 bg-yellow-400 border border-yellow-400 hover:bg-transparent hover:text-white text-black font-semibold px-4 md:px-6 py-2 md:py-3 rounded-lg shadow-lg transition duration-300"
          >
            Explore Destinations <FaLocationDot />
          </a>
          <a
            href="#packages"
            className="flex items-center gap-2 bg-green-600 border-2 border-green-600 hover:bg-transparent text-white font-semibold px-4 md:px-6 py-2 md:py-3 rounded-lg shadow-lg transition duration-300"
          >
            View Packages <PiHandbagBold />
          </a>
        </div>

      </div>


    </section>
  );
};

export default HeaderHero;
