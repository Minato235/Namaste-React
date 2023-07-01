import React from "react";
import ReactDom from "react-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsu-C8khhxq3rfL3cUrV1bjL9fc3lBcCtrU0n8xnbYmkI2r_ccOVPhbConC9jrW90nZZs"></img>
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
const AppLayout=()=>{
  return (<div className="app">
    <Header/>
  </div>)
}
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
