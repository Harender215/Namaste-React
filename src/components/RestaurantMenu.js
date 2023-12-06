import React, { useEffect, useState } from 'react'

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null)

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async () => {
        const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4384489&lng=77.0407101&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json()
        const res = json.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setResInfo(res)
    }
    console.log(resInfo)
    console.log(resInfo[0].info.name)
    const {
        name,
        cuisines,
        costForTwo
    } = resInfo[0].info
  return (
    <div>
      <h1>{name}</h1>
      <h2>{cuisines.join(", ")}</h2>
      <h3>{costForTwo}</h3>
      <ul>
        <li>Biryani</li>
        <li>Burgur</li>
        <li>Diet coke</li>
      </ul>
    </div>
  )
}

export default RestaurantMenu
