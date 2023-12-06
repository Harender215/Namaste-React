import React from "react";
import { LOGO_URL } from '../utils/constants'
import { Link } from "react-router-dom";

const Header = () => {
    return (
      <div className="flex justify-between items-center bg-pink-100 shadow-sm mb-1">
        <div className="logo-container">
          <img
            className="w-28"
            src={LOGO_URL}
            alt="food_app_logo"
          />
        </div>
        <div className="nav-items">
          <ul className="flex p-4 m-4 items-center">
            <li className="px-3"><Link to="/">Home</Link></li>
            <li className="px-3"><Link to="/about">About Us</Link></li>
            <li className="px-3"><Link to="/contact">Contact Us</Link></li>
            <li className="px-3"><Link>Cart</Link></li>
          </ul>
        </div>
      </div>
    );
  };

export default Header