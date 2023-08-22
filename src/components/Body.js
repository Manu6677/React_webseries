import { resList } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import { resList } from "../utils/mockData";

const Body = () => {
  //   const handleFilter = () => {
  //     const filterData = listOfRestaurants.filter((it) => it.avgRating >= 4.4);
  //     console.log("filterData");
  //     return filterData;
  //   };

  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  console.log(resList[0].data.data.name);

  return (
    <div className="body">
      <div className="search-btn">
        <button
          className="btn"
          onClick={() => {
            const filterData = listOfRestaurants.filter(
              (it) => it.data.data.avgRating >= 4.0
            );
            console.log(filterData);
            setListOfRestaurants(filterData);
          }}
        >
          Filter Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((item) => (
          <RestaurantCard key={item.data.data.id} resData={item.data.data} />
        ))}
      </div>
    </div>
  );
};

export default Body;
