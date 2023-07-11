import { urlsId } from "../util/urls";
const RestroCard = (props) => {
  const styleCard = {
    backgroundColor: "#0f0f0",
  };
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, deliveryTime, id } =
    resData?.data;
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        src={urlsId + resData.data.cloudinaryImageId}
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{deliveryTime} min delivery Time </h4>
    </div>
  );
};
export default RestroCard;
