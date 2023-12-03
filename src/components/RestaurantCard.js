import React from "react";
import { CDN_URL } from '../utils/constants'

const RestaurantCard = () => {
    return (
      <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
        <img
          className="res-logo"
          src={CDN_URL}
          alt="res-card-img"
        />
        <span>Meghna Foods</span> <br />
        <span>KFC, North Indian, Asian</span> <br />
        <span>4.4 star</span> <br/>
        <span>38 minutes</span>
      </div>
    );
};

export default RestaurantCard