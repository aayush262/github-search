import React from "react";
import { Link } from "react-router-dom";
import logo from "./../../Assets/images/logo.png";

const Brand = () => {
  return (
    <Link to="/">
      <div className="flex gap-2">
        <div className="flex items-center">
          <img className=" w-10 h-10" src={logo} alt="logo" />
        </div>
        <h3 className="flex items-center text-xl  font-redHat">
          Github Search
        </h3>
      </div>
    </Link>
  );
};

export default Brand;
