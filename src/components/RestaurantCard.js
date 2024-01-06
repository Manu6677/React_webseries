import { IMG_CDN_URL } from "../utils/constants";

// Restaurant card component: Image, name, cuisine
const RestaurantCard = ({
  cloudinaryImageId,
  name,
  avgRating,
  cuisines,
  costForTwo,
  sla,
}) => {
  return (
    <div className="m-2 p-2 w-[300px] h-[370px] rounded-lg bg-slate-200 hover:bg-slate-300">
      <img
        className="rounded-lg"
        style={{ width: 300, height: 210, margin: 0 }}
        src={IMG_CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-semibold py-2">{name}</h3>
      <h3>{cuisines.join(", ")}</h3>
      <span className="flex justify-between py-1">
        <h3 className="font-medium">{costForTwo}</h3>
        <h3>{sla.deliveryTime}min</h3>
      </span>
      <h3 className="font-medium">{avgRating}🌟</h3>
    </div>
  );
};

export const withTopReviews = (RestaurantCard) => {
 return (props) => {
   return (
     <div>
       <label className="absolute bg-black text-white px-2 rounded-lg m-2">10k Reviews</label>
       <RestaurantCard {...props} />
     </div>
   );
 };
};

export default RestaurantCard;
