import React from "react";
import { CDN_URL } from '../utils/constants'

const RestaurantCard = (props) => {
    const {
      name,
      cuisines,
      costForTwo,
      cloudinaryImageId,
      avgRating
    } = props.item

    return (
      <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
        <img
          className="res-logo"
          src={CDN_URL + cloudinaryImageId}
          alt="res-card-img"
        />
        <span>{name}</span> <br />
        <span>{cuisines}</span> <br />
        <span>{avgRating}</span> <br/>
        <span>{costForTwo}</span>
      </div>
    );
};

export default RestaurantCard