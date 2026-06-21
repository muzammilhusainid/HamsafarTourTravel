import { FaTags, FaShieldAlt, FaHeadset, FaSuitcaseRolling } from "react-icons/fa";

const Features = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Wrapper Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 bg-green-50 py-8 px-6 rounded-lg shadow">

          {/* Left Heading + Tagline */}
          <div className="flex flex-col justify-center items-center md:col-span-1 md:text-left mb-6 md:mb-0">
            <h2 className="text-green-500 font-semibold text-[12px] md:text-sm mb-2">WHY TRAVEL WITH US?</h2>
            <p className="text-lg md:text-[22px] lg:text-2xl font-bold leading-snug">
              Your Comfort, <br className="hidden md:block" /> Our Priority
            </p>

          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:col-span-4 text-center">

            {/* Best Price Guarantee */}
            <div className="flex flex-col items-center">
              <FaTags className="text-yellow-500 text-3xl mb-3" />
              <h3 className="md:text-lg font-semibold">Best Price Guarantee</h3>
              <p className="text-gray-600 text-sm">Get the best deals for your trip</p>
            </div>

            {/* Trusted & Safe */}
            <div className="flex flex-col items-center">
              <FaShieldAlt className="text-green-600 text-3xl mb-3" />
              <h3 className="md:text-lg font-semibold">Trusted & Safe</h3>
              <p className="text-gray-600 text-sm">Your safety is our top priority</p>
            </div>

            {/* 24/7 Support */}
            <div className="flex flex-col items-center">
              <FaHeadset className="text-blue-500 text-3xl mb-3" />
              <h3 className="md:text-lg font-semibold">24/7 Support</h3>
              <p className="text-gray-600 text-sm">We are always here for you</p>
            </div>

            {/* Customizable Trips */}
            <div className="flex flex-col items-center">
              <FaSuitcaseRolling className="text-red-500 text-3xl mb-3" />
              <h3 className="md:text-lg font-semibold">Customizable Trips</h3>
              <p className="text-gray-600 text-sm">Trips designed just for you</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
