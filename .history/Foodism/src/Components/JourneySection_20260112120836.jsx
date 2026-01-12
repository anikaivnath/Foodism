import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faClock,
  faCartShopping,
  faGift,
 
} from "@fortawesome/free-solid-svg-icons";

const Journey = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <p className="text-red-500 font-semibold uppercase mb-2">
            Our Story & Services
          </p>

          <h1 className="text-4xl font-bold text-black leading-tight mb-4">
            Our Culinary Journey <br /> And Services
          </h1>

          <p className="text-gray-600 mb-6">
            Rooted in passion, we curate unforgettable dining experiences and
            offer exceptional services, blending culinary artistry with warm
            hospitality.
          </p>

          <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-medium transition">
            Explore
          </button>
        </div>

        {/* RIGHT CARDS */}
        <div className="grid grid-cols-2 gap-6">
          
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-lg shadow-green-200 text-center">
            <FontAwesomeIcon
              icon={faUtensils}
              className="text-green-500 text-3xl mb-4"
            />
            <h3 className="font-semibold text-green-600 mb-2">CATERING</h3>
            <p className="text-sm text-gray-500">
              Delight your guests with our flavors and presentation
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-lg shadow-green-200 text-center">
            <FontAwesomeIcon
              icon={faClock}
              className="text-green-500 text-3xl mb-4"
            />
            <h3 className="font-semibold text-green-600 mb-2">FAST DELIVERY</h3>
            <p className="text-sm text-gray-500">
              We deliver your order promptly to your door
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-2xl shadow-lg shadow-green-200 text-center">
            <FontAwesomeIcon
              icon={faCartShopping}
              className="text-green-500 text-3xl mb-4"
            />
            <h3 className="font-semibold text-green-600 mb-2">ONLINE ORDERING</h3>
            <p className="text-sm text-gray-500">
              Explore menu & order with ease using online ordering
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 rounded-2xl shadow-lg  shadow-green-200 text-center">
            <FontAwesomeIcon
              icon={faGift}
              className="text-green-500 text-3xl mb-4"
            />
            <h3 className="font-semibold text-green-600 mb-2">GIFT CARDS</h3>
            <p className="text-sm text-gray-500">
              Give the gift of exceptional dining with gift cards
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Journey;
