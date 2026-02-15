import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faPhone, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [showSearch, setShowSearch] = useState(false); // Track if search box is open
  const [searchText, setSearchText] = useState("");

  return (
    <div className="sticky top-0 z-50 shadow-sm p-4 bg-white">
      <div className="flex justify-around items-center">

        {/* Logo */}
        <div>
          <h1 className="text-4xl font-bold mt-2">
            <span className="bg-green-400 w-max text-white rounded-xl px-2">F</span>oodism
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="w-80 flex justify-around text-xl mt-5 cursor-pointer">
          <Link to="/" className="text-green-600">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/services">Services</Link>
          <p>Offers</p>
        </div>

        {/* Icons + Search */}
        <div className="flex flex-row justify-around w-40 mt-5 cursor-pointer items-center gap-3">
          
          {/* Search Icon */}
          <i className="text-xl" onClick={() => setShowSearch(!showSearch)}>
            <FontAwesomeIcon icon={faSearch} />
          </i>

          {/* Search Input (toggle on click) */}
          {showSearch && (
            <input
              type="text"
              placeholder="Search..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="border px-2 py-1 rounded outline-none"
            />
          )}

          {/* Cart Icon */}
          <Link to="/cart">
            <i className="text-xl">
              <FontAwesomeIcon icon={faCartShopping} />
            </i>
          </Link>

          {/* Phone Icon */}
          <i className="text-xl text-white bg-green-400 px-4 rounded-xl">
            <FontAwesomeIcon icon={faPhone} />
          </i>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
