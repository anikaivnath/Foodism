import React from "react";

const Footer = () => {
  return (
    <div className="bg-emerald-100 py-10">
      <div className="max-w-6xl mx-auto flex justify-between">

        {/* Logo Section */}
        <div className="w-[250px]">
          <h1 className="font-bold text-3xl">
            <span className="text-white p-[4px] bg-green-500 rounded-lg">
              F
            </span>
            oodi
          </h1>

          <p className="mt-3 text-gray-600">
            Savor the artistry where every dish is a culinary masterpiece
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h2 className="font-semibold text-lg mb-3">Useful Links</h2>
          <ul className="space-y-2 text-gray-700">
            <li className="cursor-pointer hover:text-green-600">About Us</li>
            <li className="cursor-pointer hover:text-green-600">Events</li>
            <li className="cursor-pointer hover:text-green-600">Blog</li>
            <li className="cursor-pointer hover:text-green-600">FAQ</li>
          </ul>
        </div>

       <div>
        
       </div>
        <div>
          <h2 className="font-semibold text-lg mb-3">Contact</h2>
          <ul className="space-y-2 text-gray-700">
            <li>Email: info@foodi.com</li>
            <li>Phone: +880 123 456 789</li>
            <li>Location: Dhaka, Bangladesh</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Footer;
