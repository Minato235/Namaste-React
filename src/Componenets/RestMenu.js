import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { menuUrl, urlsId } from "../util/urls";

const RestMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const {resid} =useParams();
  

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const urlId=resid;
      const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.3569462&lng=78.6682395&restaurantId="+urlId);
      const json = await data.json();
      console.log(json);
      setResInfo(json.data);
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };
  console.log(resInfo)
  if(resInfo === null) return <Shimmer/>

  const restaurantInfo = resInfo?.cards[0]?.card?.card?.info;
  console.log(restaurantInfo)
  const itemCards = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;

 

  return  (
    <div className="menu">
      <h1>{restaurantInfo.name}</h1>
      <h3>{restaurantInfo.cuisines.join(", ")}</h3>
      <h4>{itemCards[0].card.info.name}</h4>
      <h4>{restaurantInfo.avgRating}</h4>
      <h2>Menu</h2>
      <ul>
        <h1>{resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.title}-{(itemCards.length)}</h1>
        {itemCards.map(item=><li key={item.card.info.id}>{item.card.info.name}-{item.card.info.price/100}Rs</li>)}
        
      </ul>
    </div>
  );
};

export default RestMenu;