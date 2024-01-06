import { Link } from "react-router-dom";
import RestaurantCard, { withTopReviews } from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import Shimmer from "./Shimmer";
import { filterData } from "../utils/helper";
import { toprated } from "../utils/toprated";
import UserContext from "../utils/UserContext";


const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(null);
  const [filteredRestaurants, setFilteredRestaurants] = useState(null);
  const [searchField, setSearchField] = useState("");

  const TopRatedRestaurants = withTopReviews(RestaurantCard);

  const { setUserName, loggedIn } = useContext(UserContext);

  const handleFilter = (topRestaurants) => {
    const filterData = toprated(topRestaurants);
  };

  // >> Load UI --> API call(took time)-- > Render the UI Now => Bad Approach
  // >> Load UI --> render (shimmer) --> API call --> Render API data => Good Approach

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await response.json();
      console.log(json);
      console.log(
        json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );

      setFilteredRestaurants(
        json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setListOfRestaurants(
        json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.log(error);
    }
  }

  const searchData = (searchText, restaurants) => {
    console.log(searchText, restaurants);
    if (searchText !== "") {
      const filteredData = filterData(searchText, restaurants);
      console.log(filteredData, "filterdata");
      setFilteredRestaurants(filteredData);
      // setErrorMessage("");
      // if (filteredData?.length === 0) {
      //   setErrorMessage(
      //     `Sorry, we couldn't find any results for "${searchText}"`
      //   );
      // }
    } else {
      // setErrorMessage("");
      setFilteredRestaurants(restaurants);
    }
  };

  console.log(listOfRestaurants);

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>
        Looks like you'r offline, please check your internet connection !!!
      </h1>
    );

  console.log(filteredRestaurants);

  return (
    <>
      <div className="container">
        <div className="flex items-center px-2 justify-center">
          <div className="filter">
            <input
              type="text"
              className="p-3 m-3 h-4 border border-solid border-black rounded-md md:w-72"
              value={searchField}
              onChange={(e) => {
                setSearchField(e.target.value);
                //searchData(e.target.value, listOfRestaurants);
              }}
            />

            <button
              className="bg-green-500 text-white rounded-md px-2 py-1"
              onClick={() => searchData(searchField, listOfRestaurants)}
            >
              Search
            </button>
          </div>
          <div className="bg-yellow-400 rounded-md px-2 ml-2 py-1 text-white">
            <button
              className="btn"
              onClick={() => handleFilter(listOfRestaurants)}
            >
              Top Rated Restaurant
            </button>
          </div>

          <div className="px-2">
            <label>Name: </label>
            <input
              type="text"
              value={loggedIn}
              onChange={(e) => setUserName(e.target.value)}
              className="border border-black rounded-lg px-2"
            />
          </div>
        </div>

        {/* if restaurants data is not fetched then display Shimmer UI after the fetched data display restaurants cards */}

        {listOfRestaurants == null ? (
          <Shimmer />
        ) : (
          <div className="flex flex-wrap justify-center">
            {/* We are mapping restaurants array and passing JSON array data to RestaurantCard component as props with unique key as restaurant.data.id */}

            {filteredRestaurants.map((it) => {
              return (
                <Link to={"/restaurant/" + it?.info?.id} key={it.info.id}>
                  {it?.info?.totalRatingsString === "10K+" ? (
                    <TopRatedRestaurants {...it?.info} />
                  ) : (
                    <RestaurantCard {...it?.info} />
                  )}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Body;
