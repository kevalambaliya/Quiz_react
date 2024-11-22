import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../Navbar.css";
import { dataContext } from "../context/Context";
const Navbar = () => {
  const { userData, updateUserData } = useContext(dataContext);
  return (
    <div id="navbar">
      <Link to="/" className="link">
        Quiz
      </Link>
      <Link to="/product" className="link">
        Result
      </Link>
      {/* <Link to="/login" className="link">
        {userData ? "logout" : "login"}
      </Link> */}
      {/* <Link to="/signup" className="link">
        {userData ? userData.username : "signup"}
      </Link> */}
    </div>
  );
};

export default Navbar;
