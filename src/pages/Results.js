import React, { useRef, useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import axios from "axios";

import { useSearch } from "../hooks/useSearch";
import Button from "../Components/UI/Button";
import NavBar from "../Components/Layouts/NavBar";
import Brand from "../Components/Brand";
import Input from "../Components/UI/Input";
import Container from "../Components/Layouts/Container";
import RepoLists from "../Components/Repos/RepoLists";

//icon imports
import { ReactComponent as SearchIcon } from "./../Assets/icons/search.svg";
import { ReactComponent as HomeIcon } from "./../Assets/icons/home.svg";
import { ReactComponent as ArrowRightIcon } from "./../Assets/icons/arrowRight.svg";
import { notify } from "../utils/notify";

const Results = () => {
  const [searchParams] = useSearchParams();
  const searchInputRef = useRef();
  const search = useSearch();

  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fefchRepos = async () => {
      const searchQuery = searchParams
        .get("search_query")
        .split(" ")
        .join("%20");
      console.log(searchQuery);
      const { data } = await axios.get(
        `https://api.github.com/search/repositories?q=${searchQuery}&per_page=25&page=1`
      );
      setRepos(data.items);
    };

    fefchRepos();
  }, [searchParams]);

  const handleSearch = () => {
    if (searchInputRef.current.value.trim === "") {
      notify.error("Text is required");
      return;
    }
    search(searchInputRef.current.value);
  };

  console.log(repos);
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
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    handleSearch();
                  }
                }}
                ref={searchInputRef}
                className="rounded-r-none"
                defaultValue={searchParams.get("search_query")}
              ></Input>
            </div>
            <Button
              onClick={handleSearch}
              className="rounded-tl-none rounded-bl-none my-2]"
            >
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
              <ArrowRightIcon height={22} width={22} fill="#000" />
              <p>Results for: &nbsp;</p>
              <span>{searchParams.get("search_query")}</span>
            </div>
          </li>
        </ol>

        <section className="mt-4">
          <RepoLists repos={repos} />
        </section>
      </main>
    </Container>
  );
};

export default Results;
