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
resList = [
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "525599",
      name: "Makers of Milkshakes",
      uuid: "ed19d89f-580f-4ca9-9b9a-9dabbcca7bdd",
      city: "3",
      area: "Uppal",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "kzzf1x2xk5etjzwxttrk",
      cuisines: ["Beverages", "Desserts", "Ice Cream"],
      tags: [],
      costForTwo: 35000,
      costForTwoString: "₹350 FOR TWO",
      deliveryTime: 49,
      minDeliveryTime: 49,
      maxDeliveryTime: 49,
      slaString: "49 MINS",
      lastMileTravel: 15,
      slugs: {
        restaurant: "makers-of-milkshakes-uppal-uppal-2",
        city: "hyderabad",
      },
      cityState: "3",
      address:
        "H.no 2-11/2,My home Mareddy complex, Mallikarjuna nagar, peerzadiguda municipal Corporation, medipally mandal, medchal district - 500092",
      locality: "Mallikarjuna Nagar",
      parentId: 5632,
      unserviceable: true,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "distance",
            fee: 16400,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 16400,
        message: "",
        title: "Delivery Charge",
        amount: "16400",
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
      lastMileTravelString: "15 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "15% OFF",
        subHeader: "ABOVE ₹700",
        discountTag: "FLAT DEAL",
        headerTypeV2: 0,
      },
      sla: {
        restaurantId: "525599",
        deliveryTime: 49,
        minDeliveryTime: 49,
        maxDeliveryTime: 49,
        lastMileTravel: 15,
        lastMileDistance: 0,
        serviceability: "NON_SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.1",
      totalRatings: 100,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "691699",
      name: "Vaah Kitchen",
      uuid: "443c523a-bbbf-4356-baef-eb964cb62eab",
      city: "3",
      area: "Kothapet & Dilsukhnagar",
      totalRatingsString: "Too Few Ratings",
      cloudinaryImageId: "2bd275014179275d14981a289723f4f2",
      cuisines: ["South Indian", "Chinese"],
      tags: [],
      costForTwo: 19900,
      costForTwoString: "₹199 FOR TWO",
      deliveryTime: 68,
      minDeliveryTime: 68,
      maxDeliveryTime: 68,
      slaString: "68 MINS",
      lastMileTravel: 17.100000381469727,
      slugs: {
        restaurant:
          "vaah-kitchen-kothapet-&-dilsukhnagar-kothapet-&-dilsukhnagar",
        city: "hyderabad",
      },
      cityState: "3",
      address: "Kamala Nagar, Dilsukhnagar, Hyderabad, Telangana 500060, India",
      locality: "Kamala Nagar",
      parentId: 414471,
      unserviceable: true,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "distance",
            fee: 19400,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 19400,
        message: "",
        title: "Delivery Charge",
        amount: "19400",
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
      lastMileTravelString: "17.1 kms",
      hasSurge: false,
      sla: {
        restaurantId: "691699",
        deliveryTime: 68,
        minDeliveryTime: 68,
        maxDeliveryTime: 68,
        lastMileTravel: 17.100000381469727,
        lastMileDistance: 0,
        serviceability: "NON_SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "--",
      totalRatings: 0,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "567519",
      name: "The Night Craves",
      uuid: "02b9d845-5f30-44b5-9cf7-1678ab233448",
      city: "3",
      area: "Buduppal",
      totalRatingsString: "Too Few Ratings",
      cloudinaryImageId: "ubmsgcdpqge28qajwcpn",
      cuisines: ["Pizzas", "Burgers", "Fast Food"],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 74,
      minDeliveryTime: 74,
      maxDeliveryTime: 74,
      slaString: "74 MINS",
      lastMileTravel: 15.5,
      slugs: {
        restaurant:
          "hi-hello-tarnaka,-nacharam-&-malkajigiri-tarnaka,-nacharam-&-malkajigiri",
        city: "hyderabad",
      },
      cityState: "3",
      address:
        "H.NO.3-125/201, VIVEKANANDHA NAGAR, BODUPPAL, Medipally, MedchalMalkajgiri, Telangana - 500098",
      locality: "Tarnaka, Nacharam & Malkajigiri",
      parentId: 393221,
      unserviceable: true,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "distance",
            fee: 17400,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 17400,
        message: "",
        title: "Delivery Charge",
        amount: "17400",
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
      lastMileTravelString: "15.5 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "25% OFF",
        subHeader: "UPTO ₹65",
        discountTag: "",
        headerTypeV2: 0,
      },
      sla: {
        restaurantId: "567519",
        deliveryTime: 74,
        minDeliveryTime: 74,
        maxDeliveryTime: 74,
        lastMileTravel: 15.5,
        lastMileDistance: 0,
        serviceability: "NON_SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "--",
      totalRatings: 0,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "691675",
      name: "Dorababu Pulao",
      uuid: "cdb9ac2b-d7e9-467b-85a8-7822a186b902",
      city: "3",
      area: "Kothapet & Dilsukhnagar",
      totalRatingsString: "Too Few Ratings",
      cloudinaryImageId: "d2b51a51612ac62696817d853e8b69e4",
      cuisines: ["Indian", "Arabian", "Snacks"],
      tags: [],
      costForTwo: 39900,
      costForTwoString: "₹399 FOR TWO",
      deliveryTime: 66,
      minDeliveryTime: 66,
      maxDeliveryTime: 66,
      slaString: "66 MINS",
      lastMileTravel: 17.100000381469727,
      slugs: {
        restaurant:
          "dorababu-pulao-kothapet-&-dilsukhnagar-kothapet-&-dilsukhnagar",
        city: "hyderabad",
      },
      cityState: "3",
      address: "Kamala Nagar, Dilsukhnagar, Hyderabad, Telangana 500060, India",
      locality: "Kamala Nagar",
      parentId: 414465,
      unserviceable: true,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "distance",
            fee: 19400,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 19400,
        message: "",
        title: "Delivery Charge",
        amount: "19400",
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
      lastMileTravelString: "17.1 kms",
      hasSurge: false,
      sla: {
        restaurantId: "691675",
        deliveryTime: 66,
        minDeliveryTime: 66,
        maxDeliveryTime: 66,
        lastMileTravel: 17.100000381469727,
        lastMileDistance: 0,
        serviceability: "NON_SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "--",
      totalRatings: 0,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "606183",
      name: "Hyderabadi Snack N Shake",
      uuid: "0ffa5bc5-0b41-4d87-b729-afab3e20a16d",
      city: "3",
      area: "Kothapet & Dilsukhnagar",
      totalRatingsString: "Too Few Ratings",
      cloudinaryImageId: "swxopewoesoefav2l1op",
      cuisines: ["Beverages", "Chinese", "Indian"],
      tags: [],
      costForTwo: 13800,
      costForTwoString: "₹138 FOR TWO",
      deliveryTime: 68,
      minDeliveryTime: 68,
      maxDeliveryTime: 68,
      slaString: "68 MINS",
      lastMileTravel: 13.399999618530273,
      slugs: {
        restaurant:
          "hyderabadi-snack-n-shake-kothapet-&-dilsukhnagar-kothapet-&-dilsukhnagar",
        city: "hyderabad",
      },
      cityState: "3",
      address:
        "MedPlus line 3rd cross road Cosmopolitan colony Street no 4, KBR Nagar, Erukula Nancharamma Nagar, Mansoorabad, Telangana 500068, India",
      locality: "Erukula Nancharamma Nagar",
      parentId: 360973,
      unserviceable: true,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "distance",
            fee: 15400,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 15400,
        message: "",
        title: "Delivery Charge",
        amount: "15400",
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
      lastMileTravelString: "13.3 kms",
      hasSurge: false,
      sla: {
        restaurantId: "606183",
        deliveryTime: 68,
        minDeliveryTime: 68,
        maxDeliveryTime: 68,
        lastMileTravel: 13.399999618530273,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE_WITH_BANNER",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "--",
      totalRatings: 0,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "691709",
      name: "Emmy Biryani",
      uuid: "90a4e213-a17b-41c8-b467-e388e01e09b8",
      city: "3",
      area: "Kothapet & Dilsukhnagar",
      totalRatingsString: "Too Few Ratings",
      cloudinaryImageId: "9915852358710bc643724b38517c6177",
      cuisines: ["North Indian", "Biryani", "Chinese"],
      tags: [],
      costForTwo: 29900,
      costForTwoString: "₹299 FOR TWO",
      deliveryTime: 79,
      minDeliveryTime: 79,
      maxDeliveryTime: 79,
      slaString: "79 MINS",
      lastMileTravel: 17.100000381469727,
      slugs: {
        restaurant:
          "emmy-biryani-kothapet-&-dilsukhnagar-kothapet-&-dilsukhnagar",
        city: "hyderabad",
      },
      cityState: "3",
      address: "Kamala Nagar, Dilsukhnagar, Hyderabad, Telangana 500060, India",
      locality: "Kamala Nagar",
      parentId: 414476,
      unserviceable: true,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "distance",
            fee: 19400,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 19400,
        message: "",
        title: "Delivery Charge",
        amount: "19400",
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
      lastMileTravelString: "17.1 kms",
      hasSurge: false,
      sla: {
        restaurantId: "691709",
        deliveryTime: 79,
        minDeliveryTime: 79,
        maxDeliveryTime: 79,
        lastMileTravel: 17.100000381469727,
        lastMileDistance: 0,
        serviceability: "NON_SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "--",
      totalRatings: 0,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "550785",
      name: "Thick Shakes Maker",
      uuid: "cbc8deb2-2493-4eed-95c2-2f7c62b228a5",
      city: "3",
      area: "Kothapet & Dilsukhnagar",
      totalRatingsString: "20+ ratings",
      cloudinaryImageId: "fp7xmf1amt7zccdvsroj",
      cuisines: ["Beverages"],
      tags: [],
      costForTwo: 36000,
      costForTwoString: "₹360 FOR TWO",
      deliveryTime: 61,
      minDeliveryTime: 61,
      maxDeliveryTime: 61,
      slaString: "61 MINS",
      lastMileTravel: 14.800000190734863,
      slugs: {
        restaurant:
          "thick-shakes-maker-kothapet-&-dilsukhnagar-kothapet-&-dilsukhnagar",
        city: "hyderabad",
      },
      cityState: "3",
      address:
        "H.no:7-2-152,2nd floor pragathi nagar colony , bairamalguda karmanghat,lb nagar circle no 4,hyderabad telangana 500079",
      locality: "Pragathi Nagar Colony",
      parentId: 331019,
      unserviceable: true,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 16400,
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
        totalFees: 16400,
        message: "",
        title: "Delivery Charge",
        amount: "16400",
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
      lastMileTravelString: "14.8 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
        discountTag: "",
        headerTypeV2: 0,
      },
      sla: {
        restaurantId: "550785",
        deliveryTime: 61,
        minDeliveryTime: 61,
        maxDeliveryTime: 61,
        lastMileTravel: 14.800000190734863,
        lastMileDistance: 0,
        serviceability: "NON_SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.2",
      totalRatings: 20,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "397190",
      name: "The Thickshakes Company",
      uuid: "19297739-a7df-4dbb-95db-da902f17baba",
      city: "3",
      area: "Kothapet & Dilsukhnagar",
      totalRatingsString: "50+ ratings",
      cloudinaryImageId: "vsb8m0wafjxpndz6daad",
      cuisines: ["Beverages"],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 82,
      minDeliveryTime: 82,
      maxDeliveryTime: 82,
      slaString: "82 MINS",
      lastMileTravel: 14.800000190734863,
      slugs: {
        restaurant:
          "the-thickshakes-company-kothapet-&-dilsukhnagar-kothapet-&-dilsukhnagar",
        city: "hyderabad",
      },
      cityState: "3",
      address:
        "H.NO:7-2-152, 2ND FLOOR, PRAGATHINAGAR COLONY, BAIRAMALGUDA/KARMANGHAT, SAROORNAGAR, HYDERABAD",
      locality: "Saroornagar",
      parentId: 258061,
      unserviceable: true,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "distance",
            fee: 16400,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 16400,
        message: "",
        title: "Delivery Charge",
        amount: "16400",
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
      lastMileTravelString: "14.8 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
        discountTag: "",
        headerTypeV2: 0,
      },
      sla: {
        restaurantId: "397190",
        deliveryTime: 82,
        minDeliveryTime: 82,
        maxDeliveryTime: 82,
        lastMileTravel: 14.800000190734863,
        lastMileDistance: 0,
        serviceability: "NON_SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.6",
      totalRatings: 50,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "618684",
      name: "The Chinese King",
      uuid: "1b68feb7-2bb3-4f7e-b2f8-8faef5c6404c",
      city: "3",
      area: "Kothapet & Dilsukhnagar",
      totalRatingsString: "20+ ratings",
      cloudinaryImageId: "giczftubagktnf0qvjy3",
      cuisines: ["Chinese", "Biryani", "Snacks"],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 66,
      minDeliveryTime: 66,
      maxDeliveryTime: 66,
      slaString: "66 MINS",
      lastMileTravel: 14.300000190734863,
      slugs: {
        restaurant:
          "the-chinese-king-kothapet-&-dilsukhnagar-kothapet-&-dilsukhnagar",
        city: "hyderabad",
      },
      cityState: "3",
      address:
        "3-3-194,Suvidha Arcade,Lb nagar Main road, Hyderabad, Telangana 500074, India",
      locality: "Suvidha Arcade",
      parentId: 206867,
      unserviceable: true,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "distance",
            fee: 16400,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 16400,
        message: "",
        title: "Delivery Charge",
        amount: "16400",
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
      lastMileTravelString: "14.3 kms",
      hasSurge: false,
      sla: {
        restaurantId: "618684",
        deliveryTime: 66,
        minDeliveryTime: 66,
        maxDeliveryTime: 66,
        lastMileTravel: 14.300000190734863,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE_WITH_BANNER",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.1",
      totalRatings: 20,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "181570",
      name: "Cream Stone Ice Cream",
      uuid: "448d46ae-71ba-4f8a-8e90-d1e3e18e1ca0",
      city: "3",
      area: "Habsiguda",
      totalRatingsString: "10000+ ratings",
      cloudinaryImageId: "0465abc3ad7327522519d6a195d10dfc",
      cuisines: ["Ice Cream", "Desserts", "Beverages", "Ice Cream Cakes"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 82,
      minDeliveryTime: 82,
      maxDeliveryTime: 82,
      slaString: "82 MINS",
      lastMileTravel: 19.100000381469727,
      slugs: {
        restaurant: "cream-stone-tarnaka-nacharam-malkajigiri",
        city: "hyderabad",
      },
      cityState: "3",
      address:
        "4 PART IN SY NO,218/5, 222/5, 266/10, SAI ENCLAVE, SCIENTIST COLONY, HABSIGUDA, MAIN ROAD, HYDERABAD-7, Uppal Circle No.2 , Hyderabad, Telangana-500007",
      locality: "Tarnaka, Nacharam & Malkajigiri",
      parentId: 289,
      unserviceable: true,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "distance",
            fee: 21400,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 21400,
        message: "",
        title: "Delivery Charge",
        amount: "21400",
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
      lastMileTravelString: "19.1 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
        discountTag: "",
        headerTypeV2: 0,
      },
      sla: {
        restaurantId: "181570",
        deliveryTime: 82,
        minDeliveryTime: 82,
        maxDeliveryTime: 82,
        lastMileTravel: 19.100000381469727,
        lastMileDistance: 0,
        serviceability: "NON_SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.4",
      totalRatings: 10000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "618694",
      name: "Biryani Potlam",
      uuid: "90a06fa1-2d5e-4bc6-9420-bd75d7579315",
      city: "3",
      area: "Kothapet & Dilsukhnagar",
      totalRatingsString: "20+ ratings",
      cloudinaryImageId: "hilsb1vw3hlosp7zdbga",
      cuisines: ["Biryani", "Chinese"],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 69,
      minDeliveryTime: 69,
      maxDeliveryTime: 69,
      slaString: "69 MINS",
      lastMileTravel: 14.300000190734863,
      slugs: {
        restaurant:
          "biryani-potlam-kothapet-&-dilsukhnagar-kothapet-&-dilsukhnagar",
        city: "hyderabad",
      },
      cityState: "3",
      address:
        "3-3-194, Opp Oyo Virat Residency,Lb nagar main road, Hyderabad, Telangana 500070, India",
      locality: "Lb nagar",
      parentId: 368679,
      unserviceable: true,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "distance",
            fee: 16400,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 16400,
        message: "",
        title: "Delivery Charge",
        amount: "16400",
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
      lastMileTravelString: "14.3 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
        discountTag: "",
        headerTypeV2: 0,
      },
      sla: {
        restaurantId: "618694",
        deliveryTime: 69,
        minDeliveryTime: 69,
        maxDeliveryTime: 69,
        lastMileTravel: 14.300000190734863,
        lastMileDistance: 0,
        serviceability: "NON_SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "2.7",
      totalRatings: 20,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "630253",
      name: "Fph Bakery",
      uuid: "a93ff50b-e3f9-47df-917b-091a7b0cd4c9",
      city: "3",
      area: "Sarada nagar community Hall ",
      totalRatingsString: "Too Few Ratings",
      cloudinaryImageId: "nrsaqnhkqeqsfx7swvmt",
      cuisines: ["Bakery", "Beverages", "Desserts"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 82,
      minDeliveryTime: 82,
      maxDeliveryTime: 82,
      slaString: "82 MINS",
      lastMileTravel: 18.600000381469727,
      slugs: {
        restaurant: "fph-bakery-uppal-uppal",
        city: "hyderabad",
      },
      cityState: "3",
      address:
        "H NO:-3-8-116/A, NEHRU NAGAR, AMBERPET CIRCLE NO:-16, HYDERABAD, TELANGANA-500013",
      locality: "Nehru nagar",
      parentId: 376359,
      unserviceable: true,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "distance",
            fee: 20400,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 20400,
        message: "",
        title: "Delivery Charge",
        amount: "20400",
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
      lastMileTravelString: "18.6 kms",
      hasSurge: false,
      sla: {
        restaurantId: "630253",
        deliveryTime: 82,
        minDeliveryTime: 82,
        maxDeliveryTime: 82,
        lastMileTravel: 18.600000381469727,
        lastMileDistance: 0,
        serviceability: "NON_SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "--",
      totalRatings: 0,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "625763",
      name: "Crisp N Spice",
      uuid: "68c3b272-6d63-4983-94e1-54e8d4c7c6e8",
      city: "3",
      area: "Vanasthalipuram",
      totalRatingsString: "Too Few Ratings",
      cloudinaryImageId: "vtlxjjvqexkvmbbyaf9b",
      cuisines: ["Chaat", "Snacks", "Pastas", "Beverages"],
      tags: [],
      costForTwo: 28000,
      costForTwoString: "₹280 FOR TWO",
      deliveryTime: 59,
      minDeliveryTime: 59,
      maxDeliveryTime: 59,
      slaString: "59 MINS",
      lastMileTravel: 13.300000190734863,
      slugs: {
        restaurant: "crisp-n-spice-vanasthalipuram-vanasthalipuram",
        city: "hyderabad",
      },
      cityState: "3",
      address:
        "Plot No.9, H.No.8-6-183/9/P, Ground  Floor, Padmavathi Nagar, Hasthinapuram,  L B NAGAR Circle No 4, Hyderabad,  Telangana - 500079",
      locality: "L B Nagar",
      parentId: 302624,
      unserviceable: true,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 15400,
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
        totalFees: 15400,
        message: "",
        title: "Delivery Charge",
        amount: "15400",
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
      lastMileTravelString: "13.3 kms",
      hasSurge: false,
      sla: {
        restaurantId: "625763",
        deliveryTime: 59,
        minDeliveryTime: 59,
        maxDeliveryTime: 59,
        lastMileTravel: 13.300000190734863,
        lastMileDistance: 0,
        serviceability: "NON_SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "--",
      totalRatings: 0,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "48959",
      name: "Balaji Santosh Family Dhaba",
      uuid: "4c6c834d-abf9-4ac9-a675-848c38b0e1d0",
      city: "3",
      area: "Peerzadiguda",
      totalRatingsString: "10000+ ratings",
      cloudinaryImageId: "lsjvmosnf4ezle4jgjpj",
      cuisines: ["North Indian", "Chinese", "Biryani"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 56,
      minDeliveryTime: 56,
      maxDeliveryTime: 56,
      slaString: "56 MINS",
      lastMileTravel: 14.199999809265137,
      slugs: {
        restaurant: "balaji-santosh-family-dhaba-uppal-uppal",
        city: "hyderabad",
      },
      cityState: "3",
      address:
        "Plot No. 683/A, 1st Floor, Budha Nagar, Near Uppal Depot, Opp. SBI Bank, Peerzadiguda, Hyderabad",
      locality: "Ghatkesar Rd.",
      parentId: 40741,
      unserviceable: true,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "distance",
            fee: 16400,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 16400,
        message: "",
        title: "Delivery Charge",
        amount: "16400",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "Closes soon",
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
      lastMileTravelString: "14.1 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
        discountTag: "",
        headerTypeV2: 0,
      },
      sla: {
        restaurantId: "48959",
        deliveryTime: 56,
        minDeliveryTime: 56,
        maxDeliveryTime: 56,
        lastMileTravel: 14.199999809265137,
        lastMileDistance: 0,
        serviceability: "NON_SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.6",
      totalRatings: 10000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "530212",
      name: "Thick Shakes Of Factory",
      uuid: "ecf10d53-9ead-4f4e-b878-432bba2f97ff",
      city: "3",
      area: "Alekhya Towers",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "xjm5lxds4cexjgnr511l",
      cuisines: ["Beverages"],
      tags: [],
      costForTwo: 40000,
      costForTwoString: "₹400 FOR TWO",
      deliveryTime: 79,
      minDeliveryTime: 79,
      maxDeliveryTime: 79,
      slaString: "79 MINS",
      lastMileTravel: 14.699999809265137,
      slugs: {
        restaurant:
          "thick-shakes-of-factory-kothapet-&-dilsukhnagar-kothapet-&-dilsukhnagar",
        city: "hyderabad",
      },
      cityState: "3",
      address:
        "7-2-152, ALEKHYA TOWERS, BAIRAMALGUDA, SAROORNAGAR,CIRCLE NO.3(LB NAGAR INCLUDING OLD LB NAGAR GADDIANNARAM MUNICIPALITY), HYDERABAD ,TELNGANA.",
      locality: "Kothapet & Dilsukhnagar",
      parentId: 319277,
      unserviceable: true,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "distance",
            fee: 16400,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 16400,
        message: "",
        title: "Delivery Charge",
        amount: "16400",
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
      lastMileTravelString: "14.6 kms",
      hasSurge: false,
      sla: {
        restaurantId: "530212",
        deliveryTime: 79,
        minDeliveryTime: 79,
        maxDeliveryTime: 79,
        lastMileTravel: 14.699999809265137,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE_WITH_BANNER",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.1",
      totalRatings: 100,
      new: false,
    },
    subtype: "basic",
  },
];
const RestroCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, deliveryTime } = resData?.data;
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_140,h_140,c_fill/" +
          resData.data.cloudinaryImageId
        }
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{deliveryTime} min delivery Time </h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="Search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestroCard resData={restaurant} />
        ))}
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
