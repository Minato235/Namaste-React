import RestroCard from "./RestroCard";
import {resList} from "../util/data"
const Body = () => {
    return (
      <div className="body">
        <div className="Search">Search</div>
        <div className="res-container">
          {/* <RestroCard resData={resList[0]}></RestroCard>
          <RestroCard resData={resList[1]}></RestroCard> */}
          {resList.map((restaurant) => (
            <RestroCard key={restaurant.data.id} resData={restaurant} />
          ))}
        </div>
      </div>
    );
  };
  export default Body;