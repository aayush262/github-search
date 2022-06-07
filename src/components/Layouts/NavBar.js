import React from "react";
import Button from "../UI/Button";

import logo from "./../../Assets/images/logo.png";

const NavBar = () => {
  return (
    <>
      <nav className=" lg:mx-40 h-[10vh] pt-4 md:mx-10 mx-2 flex justify-between">
        <div className="flex gap-2">
          <div className="flex items-center">
            <img className=" w-10 h-10" src={logo} alt="logo" />
          </div>
          <h3 className="flex items-center text-xl  font-redHat">
            Github Search
          </h3>
        </div>
        <div className="py-2 flex items-center">
          <Button>Explore</Button>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
