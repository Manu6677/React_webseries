import { CDN_URL } from "../utils/constants";
const RestaurantCard = ({ resData }) => {
  const { name, cloudinaryImageId, cuisines, avgRating, costForTwo } =
    resData.data.data;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img className="res-logo" alt="noImg" src={CDN_URL + cloudinaryImageId} />
      <h4>{name}</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>₹{costForTwo / 100} FOR TWO</h4>
      <h4>{avgRating}</h4>
    </div>
  );
};

export default RestaurantCard;
