import { urlsId } from "../util/urls";
const RestroCard = (props) => {
  // console.log(props)
  const styleCard = {
    backgroundColor: "#0f0f0",
  };
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
    id
  } = resData;
  return (
    <div className="res-card" style={styleCard}>
      <img className="res-logo" src={urlsId + cloudinaryImageId}></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{deliveryTime} min delivery Time </h4>
      <h4>{avgRating} stars</h4>
    </div>
  );
};
export default RestroCard;
