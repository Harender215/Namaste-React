import React from "react";

const RestaurantCard = () => {
    return (
      <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
        <img
          className="res-logo"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f01666ac73626461d7455d9c24005cd4"
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