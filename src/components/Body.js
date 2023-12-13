import React from "react";
import RestaurantCard from "./RestaurantCard";
import React, { useEffect, useState } from "react";
import Shrimmer from "./Shrimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);

  useEffect(()=>{
    fetchData()
  },[])

  const fetchData = async () => {
    const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4384489&lng=77.0407101&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json()
    // console.log(json.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setListOfRestaurant(json.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  if(listOfRestaurant.length===0){
    return <Shrimmer/>
  }
  return (
    <div className="body">
      <div className="filter">
        <button className="px-3 py-1  bg-green-200 rounded-sm m-2" onClick={()=>{}}>Top rated Restaurant</button>
      </div>
      <div className="flex flex-wrap">
        {
          listOfRestaurant?.map((item)=>(
            <Link to={"/restaurant/"+item.info.id} key={item.info.id}><RestaurantCard  item={item.info} /> </Link>
          ))
        }
        
      </div>
    </div>
  );
};

export default Body;
