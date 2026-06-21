import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import manaliImg from "../../assets/images/manali.jpg";
import shimlaImg from "../../assets/images/shimla.jpg";
import darjeelingImg from "../../assets/images/darjeeling.jpg";
import nainitalImg from "../../assets/images/nainital.png";
import munnarImg from "../../assets/images/munnar.jpg";

const PopularDestinations = () => {
    const destinations = [
        { name: "Manali", location: "Himachal Pradesh", image: manaliImg },
        { name: "Shimla", location: "Himachal Pradesh", image: shimlaImg },
        { name: "Darjeeling", location: "West Bengal", image: darjeelingImg },
        { name: "Nainital", location: "Uttarakhand", image: nainitalImg },
    ];

    return (
        <section className="py-8 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="flex justify-between items-center mb-10 ">
                    <h2 className="text-sm md:text-base font-bold text-green-500">
                        POPULAR DESTINATIONS
                        <span className="block text-lg md:text-3xl font-bold text-gray-800">
                            Best Hill Stations to Visit
                        </span>
                    </h2>
                    <a
                        href="#destinations"
                        className="text-green-600 font-semibold hover:underline"
                    >
                        View All Destinations →
                    </a>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {destinations.map((dest, index) => (
                        <div
                            key={index}
                            className="relative bg-white rounded-lg shadow-md  overflow-hidden hover:shadow-xl transition group"
                        >
                            {/* Image */}
                            <img
                                src={dest.image}
                                alt={dest.name}
                                className="w-full h-48 object-cover"
                            />

                            {/* Overlay Title + Location */}
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex justify-between items-center">
                                <div>
                                    <h3 className="text-white text-lg font-semibold">{dest.name}</h3>
                                    <p className="text-gray-200 text-sm flex items-center">
                                        <FaLocationDot className="text-white-500 mr-1" />
                                        {dest.location}
                                    </p>
                                </div>
                                <div className="size-8 bg-green-500 p-1 rounded-full flex items-center justify-center opacity-80 group-hover:opacity-100 transition">
                                    <FaArrowRight className="text-white text-xl transition" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PopularDestinations;
