import { useState } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu.js";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer.js";
import CategoryRestaurant from "./CategoryRestaurant.js";

const RestaurantMenu = () => {
  const { id } = useParams();
  // console.log(id);
  const [showIndex, setShowIndex] = useState(0);

  const resInfo = useRestaurantMenu(id);
  console.log(resInfo, "resInfo");

  if (!resInfo) return <Shimmer />;

  const { name, avgRating, city, cuisines, costForTwoMessage } =
    resInfo?.data?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  const categories =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categories);
  return (
    <div className="text-center">
      <h2 className="font-medium py-3">{name}</h2>
      <span className="flex justify-center gap-4">
        <h3>
          <span className="font-semibold">City: </span>
          {city},
        </h3>
        <h3>
          <span className="font-semibold">Price: </span>
          {costForTwoMessage},
        </h3>
        <h3>
          <span className="font-semibold">Rating: </span>
          {avgRating}🌟
        </h3>
      </span>

      {categories.map((data, index) => (
        <CategoryRestaurant
          resdata={data?.card?.card}
          key={data?.card?.card.title}
          showItems={index === showIndex ? true : false}
          setShowIndex={()=>setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
