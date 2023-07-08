import React from "react";
import ReactDom from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsu-C8khhxq3rfL3cUrV1bjL9fc3lBcCtrU0n8xnbYmkI2r_ccOVPhbConC9jrW90nZZs"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const styleCard = {
  backgroundColor: "#0f0f0",
};
resOj = {
  type: "restaurant",
  data: {
    type: "F",
    id: "262564",
    name: "Faasos - Wraps & Rolls",
    uuid: "bf3a95f6-1e3d-4657-851d-9db2b6196130",
    city: "3",
    area: "Shirdi Nagar",
    totalRatingsString: "1000+ ratings",
    cloudinaryImageId: "af33b81798b11deba338e94b7585d348",
    cuisines: [
      "Kebabs",
      "Fast Food",
      "Snacks",
      "North Indian",
      "American",
      "Healthy Food",
      "Desserts",
      "Beverages",
    ],
    tags: [],
    costForTwo: 20000,
    costForTwoString: "₹200 FOR TWO",
    deliveryTime: 37,
    minDeliveryTime: 37,
    maxDeliveryTime: 37,
    slaString: "37 MINS",
    lastMileTravel: 9.399999618530273,
    slugs: {
      restaurant: "faasos-vanasthalipuram-vanasthalipuram",
      city: "hyderabad",
    },
    cityState: "3",
    address:
      "Plot number 2 survey number 268 word no 4 block no 7 bagh hayathnagar mandal on first floor above heritage fresh ranga reddy dist Telangana 500070",
    locality: "Vanasthalipuram",
    parentId: 21809,
    unserviceable: false,
    veg: false,
    select: false,
    favorite: false,
    tradeCampaignHeaders: [],
    chain: [],
    feeDetails: {
      fees: [
        {
          name: "distance",
          fee: 11400,
          message: "",
        },
        {
          name: "time",
          fee: 0,
          message: "",
        },
        {
          name: "special",
          fee: 0,
          message: "",
        },
      ],
      totalFees: 11400,
      message: "",
      title: "Delivery Charge",
      amount: "11400",
      icon: "",
    },
    availability: {
      opened: true,
      nextOpenMessage: "",
      nextCloseMessage: "",
    },
    longDistanceEnabled: 0,
    rainMode: "NONE",
    thirdPartyAddress: false,
    thirdPartyVendor: "",
    adTrackingID: "",
    badges: {
      imageBased: [],
      textBased: [],
      textExtendedBadges: [],
    },
    lastMileTravelString: "9.3 kms",
    hasSurge: false,
    aggregatedDiscountInfoV3: {
      header: "₹125 OFF",
      subHeader: "ABOVE ₹299",
      discountTag: "FLAT DEAL",
      headerTypeV2: 0,
    },
    sla: {
      restaurantId: "262564",
      deliveryTime: 37,
      minDeliveryTime: 37,
      maxDeliveryTime: 37,
      lastMileTravel: 9.399999618530273,
      lastMileDistance: 0,
      serviceability: "SERVICEABLE",
      rainMode: "NONE",
      longDistance: "NOT_LONG_DISTANCE",
      preferentialService: false,
      iconType: "EMPTY",
    },
    promoted: false,
    avgRating: "3.7",
    totalRatings: 1000,
    new: false,
  },
  subtype: "basic",
};
const RestroCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ctpmepvsvqtaanolzv9d"
      ></img>
      <h3>{resData.data.name}</h3>
      <h4>{resData.data.cuisines.join(" , ")}</h4>
      <h4>{resData.data.avgRating} Stars</h4>
      <h4>{resData.data.costForTwo / 100} cost for two</h4>
      <h4>{resData.data.deliveryTime} min delivery Time </h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="Search">Search</div>
      <div className="res-container">
        <RestroCard resData={resOj}></RestroCard>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body></Body>
    </div>
  );
};
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
