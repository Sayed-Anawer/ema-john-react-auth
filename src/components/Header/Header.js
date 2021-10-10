import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div className="header">
      <img className="logo" src={logo} alt="" />
      <nav>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/review">Order Review</NavLink>
        <NavLink to="/inventory">Manage Inventory</NavLink>
        {user?.uid ? (
          <>
            <span
              style={{
                color: "goldenrod",
                marginRight: "15px",
                fontWeight: "bold",
              }}
            >
              {user.displayName}
            </span>
            <button
              onClick={logOut}
              style={{
                padding: "8px 14px 7px 9px",
                backgroundColor: "red",
                borderRadius: "3px",
                fontWeight: "bold",
                color: "white",
                cursor: "pointer",
                border: "none",
              }}
            >
              {" "}
              Log out
            </button>
          </>
        ) : (
          <NavLink
            to="/login"
            style={{
              padding: "0px 15px 5px 15px",
              backgroundColor: "rgb(238, 173, 8)",
              borderRadius: "3px",
              color: "black",
              fontWeight: "bold",
              border: "none",
            }}
          >
            Log in
          </NavLink>
        )}
      </nav>
    </div>
  );
};

export default Header;
