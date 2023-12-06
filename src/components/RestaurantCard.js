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
      <div className="m-4 p-2 w-[250px] bg-gray-100 hover:bg-gray-200">
        <img
          className="rounded-lg"
          src={CDN_URL + cloudinaryImageId}
          alt="res-card-img"
        />
        <span className="font-semibold text-lg">{name}</span> <br />
        <span>{cuisines.join(", ")}</span> <br /> 
        <span>{avgRating}</span> <br/>
        <span>{costForTwo}</span>
      </div>
    );
};

export default RestaurantCard