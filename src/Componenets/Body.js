import RestroCard from "./RestroCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

// import { resList } from "../util/data";

const Body = () => {
  const [listOfRestro, setListOfRestro] = useState([]);
  const [listOfRestro1, setListOfRestro1] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3569462&lng=78.6682395&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    // console.log(json);
    // console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);


    setListOfRestro(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setListOfRestro1(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

  };
  if (listOfRestro.length === 0) {
    return (
      <h1>
        <Shimmer />
      </h1>
    );
  }
  return (
    <div className="body">
      <br></br>
      <div className="search">
        <input
          type="text"
          className="search-box"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
      </div>
      <button
        onClick={() => {
          console.log(searchText);
          const filterSearch = listOfRestro.filter((res) =>
            res.data.name.toLowerCase().includes(searchText.toLowerCase())
          );
          setListOfRestro1(filterSearch);
        }}
      >
        search
      </button>

      <div>
        <br></br>
        <button
          className="filter-btn"
          onClick={() => {
            const filterOut = listOfRestro.filter(
              (res) => res.data.avgRating > 4.0
            );
            setListOfRestro1(filterOut);
          }}
        >
          Top Rated Restros
        </button>
      </div>
      <div className="res-container">
        {listOfRestro1.map((restaurant) => (
          <RestroCard key={restaurant?.info?.id} resData={restaurant?.info} />
        ))}
        
      </div>
    </div>
  );
};
export default Body;
