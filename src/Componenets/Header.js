import { logoUrl } from "../util/urls";
import { Link } from "react-router-dom";
 const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logoUrl}></img>
      </div>
      <div className="nav-items">
        <ul className="three">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;