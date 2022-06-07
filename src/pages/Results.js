import React, { useRef } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

import Button from "../Components/UI/Button";
import NavBar from "../Components/Layouts/NavBar";
import { ReactComponent as SearchIcon } from "./../Assets/icons/search.svg";
import Brand from "../Components/Brand";
import Input from "../Components/UI/Input";
import Container from "../Components/Layouts/Container";

const Results = () => {
  const [searchParams] = useSearchParams();
  const searchInputValue = useRef();

  return (
    <Container>
      <NavBar>
        <div className="flex gap-3 flex-wrap">
          <div className="flex items-center">
            <Brand />
          </div>

          <div className="flex items-center">
            <div className="h-full flex items-center">
              <Input
                className="rounded-r-none"
                defaultValue={searchParams.get("search_query")}
              ></Input>
            </div>
            <Button className="rounded-tl-none rounded-bl-none my-2]">
              <div className="w-[1.4rem] h-[1.4rem]">
                <SearchIcon fill="#fff" />
              </div>
            </Button>
          </div>
        </div>
      </NavBar>
    </Container>
  );
};

export default Results;
