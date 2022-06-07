import React from "react";
import { Link } from "react-router-dom";
import logo from "./../../Assets/images/logo.png";

const Brand = () => {
  return (
    <div className="flex gap-2 items-center">
      <div className="">
        <Link to="/">
          <img className=" w-10 h-10" src={logo} alt="logo" />
        </Link>
      </div>
      <div className="">
        <h3 className=" text-xl  font-redHat  hidden lg:block md:block">
          Github Search
        </h3>
      </div>
    </div>
  );
};

export default Brand;
