import React from "react";
import RestaurantCard from "./RestaurantCard";
import React, { useEffect, useState } from "react";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(null);

  useEffect(()=>{
    fetchData()
  },[])

  const fetchData = async () => {
    const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4384489&lng=77.0407101&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json()
    console.log(json.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setListOfRestaurant(json.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={()=>{}}>Top rated RestaurantCard</button>
      </div>
      <div className="res-container">
        {
          listOfRestaurant?.map((item)=>(
            <RestaurantCard item={item.info} />
          ))
        }
        
      </div>
    </div>
  );
};

export default Body;
