import React, { useRef } from "react";
import Container from "../Components/Layouts/Container";
import NavBar from "../Components/Layouts/NavBar";

import Button from "../Components/UI/Button";
import Input from "../Components/UI/Input";

const LandingPage = () => {
  const searchInputRef = useRef();

  const handleSearch = (e) => {
    console.log(searchInputRef.current.value);
  };

  return (
    <Container>
      <NavBar />
      <div className="h-[90vh] w-full flex justify-center items-center">
        <div className="lg:w-1/2 lg:m-0 md:w-2/3 md:m-0 sm:w-full sm:mx-5 m-5  ">
          <h1 className="text-blue-800  font-bold text-6xl font-redHat">
            Your Github Search.
          </h1>

          <p className="text-xl text-gray-600 leading-[1.5] p-2 ">
            Find any repositories across github. Type a keyword below and start
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
              <Button onClick={handleSearch}>Search</Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default LandingPage;
