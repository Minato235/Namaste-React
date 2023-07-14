import RestroCard from "./RestroCard";
import { useState } from "react";
import { resList } from "../util/data";

const Body = () => {
  const [listOfRestro, setListOfRestro] = useState(resList);
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
