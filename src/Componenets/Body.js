import RestroCard from "./RestroCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

// import { resList } from "../util/data";

const Body = () => {
  const [listOfRestro, setListOfRestro] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3569462&lng=78.6682395&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    // console.log(json);

    setListOfRestro(json?.data?.cards[0]?.data?.data?.cards);
  };
  if(listOfRestro.length===0){
    return <h1><Shimmer/></h1>
  }
  return (
    <div className="body">
      <div className="Search">Search</div>
      <div>
        <button
          className="filter-btn"
          onClick={() => {
            const filterOut = listOfRestro.filter(
              (res) => res.data.avgRating > 4.0
            );
            setListOfRestro(filterOut);
          }}
        >
          Top Rated Restros
        </button>
      </div>
      <div className="res-container">
        {listOfRestro.map((restaurant) => (
          <RestroCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
