import React from "react";

const NavBar = ({ children }) => {
  return (
    <>
      <nav className="  lg:mx-40 h-[10vh] pt-4 md:mx-10 mx-2 flex justify-between">
        {children}
      </nav>
    </>
  );
};

export default NavBar;
