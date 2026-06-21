import React from "react";
import { FaBed, FaUtensils, FaBinoculars, FaBus } from "react-icons/fa";
import manaliImg from "../../assets/images/manali.jpg";
import shimlaImg from "../../assets/images/shimla.jpg";
import northeastImg from "../../assets/images/munnar.jpg";

const TopPackages = () => {
  const packages = [
    {
      title: "Manali Getaway",
      duration: "4 Days / 3 Nights",
      price: "₹12,999 per person",
      image: manaliImg,
    },
    {
      title: "Shimla Holiday",
      duration: "5 Days / 4 Nights",
      price: "₹14,999 per person",
      image: shimlaImg,
    },
    {
      title: "North East Escape",
      duration: "6 Days / 5 Nights",
      price: "₹18,999 per person",
      image: northeastImg,
    },
  ];

  return (
    <section className="py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="block text-green-500 font-bold">
            TOP PACKAGES
            <span className="block text-2xl md:text-3xl font-bold text-gray-800">
              Handpicked Holiday Packages
            </span>
          </h2>
          <a
            href="#packages"
            className="text-green-600 font-semibold hover:underline"
          >
            View All Packages →
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
            >
              {/* Image */}
              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-48 object-cover"
              />

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{pkg.title}</h3>
                <p className="text-gray-600 mb-4">{pkg.duration}</p>

                {/* Facilities */}
                <div className="flex justify-between text-gray-600 mb-4">
                  <div className="flex items-center gap-2">
                    <FaBed /> <span className="text-sm">Stay</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaUtensils /> <span className="text-sm">Meals</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaBinoculars /> <span className="text-sm">Sightseeing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaBus /> <span className="text-sm">Transfers</span>
                  </div>
                </div>

                {/* Price + Button */}
                <div className="flex justify-between items-center">
                  <span className="text-green-600 font-bold">{pkg.price}</span>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopPackages;
