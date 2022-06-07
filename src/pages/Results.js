import React, { useRef } from "react";
import { useSearchParams, useNavigate, Link } from "react-router-dom";

import Button from "../Components/UI/Button";
import NavBar from "../Components/Layouts/NavBar";
import Brand from "../Components/Brand";
import Input from "../Components/UI/Input";
import Container from "../Components/Layouts/Container";

//icon imports
import { ReactComponent as SearchIcon } from "./../Assets/icons/search.svg";
import { ReactComponent as HomeIcon } from "./../Assets/icons/home.svg";
import { ReactComponent as ArrowRightIcon } from "./../Assets/icons/arrowRight.svg";
import RepoLists from "../Components/Repos/RepoLists";

const Results = () => {
  const [searchParams] = useSearchParams();

  return (
    <Container>
      <NavBar>
        <div className="flex gap-3">
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
      <main className="lg:mx-40 md:mx-10 mx-2 mt-4">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link
              to="/"
              className="text-gray-700 hover:text-gray-900 inline-flex items-center"
            >
              <HomeIcon fill="#000" />
              Home
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <ArrowRightIcon fill="#000" />
              <p className="text-gray-700">
                Results for: {searchParams.get("search_query")}
              </p>
            </div>
          </li>
        </ol>

        <section className="mt-4">
          <RepoLists />
        </section>
      </main>
    </Container>
  );
};

export default Results;
