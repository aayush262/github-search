import React, { useRef } from "react";

import Button from "../components/UI/Button";
import Input from "../components/UI/Input";

const LandingPage = () => {
  const searchInputRef = useRef();

  const handleSearch = (e) => {
    console.log(searchInputRef.current.value);
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="w-1/2 ">
        <h1 className="text-blue-800  font-bold text-6xl font-redHat">
          Your Github Search.
        </h1>

        <p className="text-xl text-gray-600 leading-[1.5] p-2 ">
          Find any repositories across github. Type keyword below and start
          searching now.
        </p>
        <div className="flex flex-wrap gap-5">
          <div className="flex-auto">
            <Input
              ref={searchInputRef}
              type="text"
              id="search"
              placeholder="Search repositories..."
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
            />
          </div>
          <div className="flex-[1/4] flex items-center ">
            <Button onClick={handleSearch} name="Search" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
