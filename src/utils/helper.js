export const filterData = (searchText, restaurants) => {
  const resFilterData = restaurants.filter((restaurant) =>
    restaurant?.card?.info?.name
      .toLowerCase()
      .includes(searchText.toLowerCase())
  );
  console.log(resFilterData);
  return resFilterData;
};

// API for all cards 
// "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&collection=80476&tags=layout_BAU_Contextual%2Cparatha%2Cads_pc_paratha&sortBy=&filters=&type=rcv2&offset=0&page_type=null";

// API for menu detail for parantha
//https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=108109
