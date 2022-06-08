import React, { useRef } from "react";
import { useSearch } from "./../hooks/useSearch";
import Brand from "../Components/Brand";

import Container from "../Components/Layouts/Container";
import NavBar from "../Components/Layouts/NavBar";
import Button from "../Components/UI/Button";
import Input from "../Components/UI/Input";
import { notify } from "../utils/notify";

const LandingPage = () => {
  const searchInputRef = useRef();
  const search = useSearch();

  const handleSearch = () => {
    if (searchInputRef.current.value.trim() === "") {
      notify.error("Text is required");
      return;
    }
    search(searchInputRef.current.value);
  };

  return (
    <Container>
      <NavBar>
        <Brand />
        <div className="py-2 flex items-center">
          <Button>Explore</Button>
        </div>
      </NavBar>
      <div className="h-[90vh] w-full flex justify-center items-center">
        <div className="lg:w-1/2 lg:m-0 md:w-2/3 md:m-0 sm:w-full sm:mx-5 m-5  ">
          <h1 className="text-blue-800  font-bold text-6xl font-redHat animate-fadeIn">
            Your Github Search.
          </h1>

          <p className="text-xl text-gray-600 leading-[1.5] p-2 ">
            Find any repositories across github. Type a keyword below and start
            searching now.
          </p>
          <div className="flex flex-wrap gap-3">
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
