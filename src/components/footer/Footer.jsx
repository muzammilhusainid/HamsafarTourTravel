import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import logo from "../../assets/images/logo.jpg"; // apna logo path yahan import karo

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">
      <div className="max-w-screen-xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* College Info / Logo */}
        <div>
          <div className="flex items-center mb-4">
            <img src={logo} alt="RKD Logo" className="h-10 w-10 mr-3 rounded-full shadow-lg" />
            <h2 className="text-xl font-semibold text-white ">Hamsafar</h2>
          </div>
           <p className="text-sm italic mt-2">Discover. Explore. Relax.</p>
           <p className="mt-4 text-lg text-justify">
            Your trusted travel partner for exploring the most beautiful hill
            stations in India.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white border-b border-gray-700 pb-2">
            Important
          </h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-green-500 transition">Disclaimer</a></li>
            <li><a href="#" className="hover:text-green-500 transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-green-500 transition">Cancellation Policy</a></li>
            <li><a href="#" className="hover:text-green-500 transition">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Important Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white border-b border-gray-700 pb-2">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-green-500 transition">Home</a></li>
            <li><a href="#" className="hover:text-green-500 transition">About Us</a></li>
            <li><a href="#" target="blank" className="hover:text-green-500 transition">Best Packages</a></li>
            <li><a href="#" target="blank" className="hover:text-green-500 transition">Beautiful Destinations</a></li>
          </ul>
        </div>

        {/* Contact + Social */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white border-b border-gray-700 pb-2">
            Contact
          </h3>
          <p className="flex items-center gap-2"><IoMdCall /> +91-8896638315</p>
          <p className="flex items-center gap-2"><FaWhatsapp /> +91-8115067010</p>
          <p className="flex items-center gap-2"><MdOutlineMail /> muzammil@gmail.com</p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-green-500 hover:text-white transition"><FaFacebookF /></a>
            <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-green-500 hover:text-white transition"><FaTwitter /></a>
            <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-green-500 hover:text-white transition"><FaInstagram /></a>
            <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-green-500 hover:text-white transition"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="text-center py-4 border-t border-gray-600">
        © {new Date().getFullYear()} Hamsafar. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;