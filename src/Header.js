import React from "react";
import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./Firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>

      <div className="header_search">
        <input className="header_searchInput" type="text"></input>
        <SearchIcon className="header_searchIcon"></SearchIcon>
      </div>
      <div className="header_nav">
        <Link to={!user ? "/login" : "/"}>
          <div onClick={handleAuthentication} className="header_option">
            <span className="header_option_one">
              <b>Hello </b> {user ? user.email : "Sign In"}
            </span>
            <span className="header_option_two">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <div className="header_option">
          <Link to="/order">
            <div className="header_option">
              <span className="header_option_one">Returns</span>
              <span className="header_option_two"> & Orders</span>
            </div>
          </Link>
        </div>
        <div className="header_option">
          <span className="header_option_one">Your</span>
          <span className="header_option_two">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header_basket">
            <ShoppingCartIcon></ShoppingCartIcon>
            <span className="basket_count header_option_two">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
