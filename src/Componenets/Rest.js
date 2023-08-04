import { useEffect } from "react";
const RestMenu = () => {
  useEffect(() => {
    fetchMenu();
  }, []);
};
const fetchMenu = async () => {
  const data = await fetch(
    "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.3569462&lng=78.6682395&restaurantId=597955&catalog_qa=undefined&submitAction=ENTER"
  );
  const json = await data.json();
  console.log(data);
};

const Rest = () => {
  return (
    <div>
      <h1>Restro Info</h1>
    </div>
  );
};
export default Rest;
