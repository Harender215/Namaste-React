import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const {resId} = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      MENU_API + resId
    );
    const json = await data.json();
    setResInfo(json.data);
  };

  const data =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.itemCards;
  console.log(data);

  // console.log(
  //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards
  // );
  // console.log()
  return (
    <div>
      <ul>
        {data?.map((item) => (
          <li key={item?.card?.info?.name}>{item?.card?.info?.name}-{item?.card?.info?.price || item?.card?.info?.defaultPrice}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
