import { resList } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { resList } from "../utils/mockData";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchField, setSearchField] = useState("");

  const handleFilter = () => {
    const filterData = listOfRestaurants.filter(
      (it) => it.data.data.avgRating >= 4.0
    );
    setListOfRestaurants(filterData);
  };

  // >> Load UI --> API call(took time)-- > Render the UI Now => Bad Approach
  // >> Load UI --> render (shimmer) --> API call --> Render API data => Good Approach

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const dataAPI = await fetch(
      "https://www.zomato.com/webroutes/getPage?page_url=/ncr/restaurants?place_name=Ywca%2C+1%2C+Ashoka+Rd%2C+Hanuman+Road+Area%2C+Connaught+Place%2C+New+Delhi%2C+Delhi&dishv2_id=68987&location=&isMobile=0"
    );
    const json = await dataAPI.json();

    console.log(json.page_data.sections.SECTION_SEARCH_RESULT);
    setListOfRestaurants(json.page_data.sections.SECTION_SEARCH_RESULT);
    setFilteredRestaurants(json.page_data.sections.SECTION_SEARCH_RESULT);

    // const dataAPI = await fetch(
    //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&collection=83647&isNewCollectionFlow=true&tags=layout_CCS_Chinese&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    // );
    // const json = await dataAPI.json();

    // const filterData = json.data.cards.filter((item, index, arr) => {
    //   return index > 2;
    // });

    // console.log("filtered Data", filterData);
    // console.log("info", filterData[0]?.card?.card?.info);

    // filterData.forEach((number, index) => {
    //   setListOfRestaurants(
    //     ...listOfRestaurants,
    //     filterData[index]?.card?.card?.info
    //   );
    //   console.log(listOfRestaurants);
    //   // console.log(filterData[index]?.card?.card?.info);
    // });
  };

  const handleSearch = async () => {
    const filterdRestaurantOnSearch = await listOfRestaurants.filter((it) =>
      it.info.name.toLowerCase().includes(searchField.toLowerCase())
    );
    setFilteredRestaurants(filterdRestaurantOnSearch);
  };

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="upper-container">
        <div className="filter">
          <input
            type="text"
            className="search-box"
            value={searchField}
            onChange={(e) => setSearchField(e.target.value)}
          />
          <button onClick={() => handleSearch()}>Search</button>
        </div>
        <div className="search-btn">
          <button className="btn" onClick={() => handleFilter()}>
            Filter Restaurant
          </button>
        </div>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((item) => (
          <RestaurantCard key={item?.info?.resId} resData={item} />
        ))}
      </div>
    </div>
  );
};

export default Body;
