import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faPhone, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="sticky top-0 z-50 shadow-sm p-4 bg-white">
      <div className="flex justify-around">
        <div>
          <h1 className="text-4xl font-bold mt-2">
            <span className="bg-green-400 w-max text-white rounded-xl px-2">F</span>oodism
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="w-80 flex justify-around text-xl mt-5 cursor-pointer">
          <Link to="/" className="text-green-600">Home</Link>  
          <Link to="/menu" className="">Menu</Link> {/* Clicking Menu goes to Menu Page */}
          <Link to="/Services" className=""> Services</Link>         
          <p>Offers</p>
        </div>

        <div className="flex flex-row justify-around w-40 mt-5 cursor-pointer">
          <i className="text-xl"><FontAwesomeIcon icon={faSearch} /></i>
          <i className="text-xl"><FontAwesomeIcon icon={faCartShopping} /></i>
          <i className="text-xl text-white bg-green-400 px-4 rounded-xl"><FontAwesomeIcon icon={faPhone} /></i>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
