import { CDN_URL } from "../utils/constants";
const RestaurantCard = ({ resData }) => {
  console.log("resdata", resData);
  const { name, cuisine, image, rating, costText } = resData.info;
  // console.log("image", image);
  const imgstr = image?.url?.toString();
  // console.log(imgstr);
  const imgbreak = imgstr?.split("dish_photos/")[1];
  // console.log(imgbreak);
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img className="res-logo" alt="noImg" src={CDN_URL + imgbreak} />
      <h4>{name}</h4>
      <h4>{cuisine?.map((it) => it.name).join(", ")}</h4>
      <h4>{costText?.text}</h4>
      <h4>{rating?.aggregate_rating}</h4>
    </div>
  );
};

export default RestaurantCard;
