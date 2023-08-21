import { resList } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((item) => (
          <RestaurantCard key={item.data.data.id} resData={item} />
        ))}
      </div>
    </div>
  );
};

export default Body;
