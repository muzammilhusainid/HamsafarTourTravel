import React, { useState, useEffect } from "react";
import { FaQuoteLeft, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import priyaImg from "../../assets/images/priya.jpeg";
import rohitImg from "../../assets/images/rohit.jpeg";
import anjaliImg from "../../assets/images/anjali.jpeg";

const Testimonials = () => {
    const reviews = [
        {
            name: "Priya Sharma",
            city: "Delhi",
            feedback:
                "Our trip to Manali was amazing! The arrangements were perfect and the views were breathtaking.",
            image: priyaImg,
        },
        {
            name: "Rohit Verma",
            city: "Jaipur",
            feedback:
                "Excellent experience in Shimla. Highly recommend Hills of India for budget friendly and comfortable trips.",
            image: rohitImg,
        },
        {
            name: "Priya Sharma",
            city: "Delhi",
            feedback:
                "Our trip to Manali was amazing! The arrangements were perfect and the views were breathtaking.",
            image: priyaImg,
        },
        {
            name: "Rohit Verma",
            city: "Jaipur",
            feedback:
                "Excellent experience in Shimla. Highly recommend Hills of India for budget friendly and comfortable trips.",
            image: rohitImg,
        },
        {
            name: "Priya Sharma",
            city: "Delhi",
            feedback:
                "Our trip to Manali was amazing! The arrangements were perfect and the views were breathtaking.",
            image: priyaImg,
        },
        {
            name: "Rohit Verma",
            city: "Jaipur",
            feedback:
                "Excellent experience in Shimla. Highly recommend Hills of India for budget friendly and comfortable trips.",
            image: rohitImg,
        },
    ];

    const [startIndex, setStartIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(3);

    // Detect screen size
    useEffect(() => {
        const updateCardsToShow = () => {
            if (window.innerWidth < 768) {
                setCardsToShow(1); // mobile
            } else {
                setCardsToShow(3); // desktop/tablet
            }
        };
        updateCardsToShow();
        window.addEventListener("resize", updateCardsToShow);
        return () => window.removeEventListener("resize", updateCardsToShow);
    }, []);

    const handlePrev = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1);
        }
    };

    const handleNext = () => {
        if (startIndex < reviews.length - cardsToShow) {
            setStartIndex(startIndex + 1);
        }
    };

    const visibleReviews = reviews.slice(startIndex, startIndex + cardsToShow);

    return (
        <section className="py-8 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                {/* Heading */}
                <div className="flex justify-between items-center mb-10">
                    <div>
                        <h2 className="text-green-500 font-bold tracking-wide">
                            TRAVELERS LOVE US
                        </h2>
                        <p className="text-2xl md:text-3xl text-gray-800 font-bold">
                            What Our Travelers Say
                        </p>
                    </div>
                    <a
                        href="#reviews"
                        className="text-green-600 font-semibold hover:underline"
                    >
                        View All Reviews →
                    </a>
                </div>

                {/* Testimonials + Arrows */}
                <div className="flex items-center gap-6">
                    {/* Left Arrow */}
                    <button
                        onClick={handlePrev}
                        disabled={startIndex === 0}
                        className={`p-3 rounded-full shadow transition ${startIndex === 0
                                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                : "bg-green-600 text-white hover:bg-green-700"
                            }`}
                    >
                        <FaArrowLeft />
                    </button>

                    {/* Cards */}
                    <div
                        className={`grid gap-8 flex-1 ${cardsToShow === 1 ? "grid-cols-1" : "grid-cols-3"
                            }`}
                    >
                        {visibleReviews.map((review, index) => (
                            <div
                                key={index}
                                className="bg-green-50 rounded-lg shadow-md p-6 hover:shadow-xl transition"
                            >
                                {/* Feedback */}
                                <div className="mb-6">
                                    <FaQuoteLeft
                                        size={28}
                                        className="text-green-500 mb-3 opacity-80"
                                    />
                                    <p className="text-gray-700 text-sm leading-relaxed italic">
                                        {review.feedback}
                                    </p>
                                </div>

                                {/* Traveler Info */}
                                <div className="flex items-center">
                                    <img
                                        src={review.image}
                                        alt={review.name}
                                        className="w-12 h-12 rounded-full object-cover mr-4"
                                    />
                                    <div>
                                        <h3 className="text-lg font-semibold">{review.name}</h3>
                                        <p className="text-gray-500 text-sm">{review.city}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Arrow */}
                    <button
                        onClick={handleNext}
                        disabled={startIndex >= reviews.length - cardsToShow}
                        className={`p-3 rounded-full shadow transition ${startIndex >= reviews.length - cardsToShow
                                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                : "bg-green-600 text-white hover:bg-green-700"
                            }`}
                    >
                        <FaArrowRight />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
