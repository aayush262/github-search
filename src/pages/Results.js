import React, { useRef, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { useSearch } from "../hooks/useSearch";
import { notify } from "../utils/notify";
import { fetchRepos } from "../store/repo-actions";
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
import Loader from "../Components/UI/Loader";

const Results = () => {
  const [searchParams] = useSearchParams();
  const searchInputRef = useRef();
  const search = useSearch();
  const dispatch = useDispatch();
  const { repos, sortBy, showLoading } = useSelector((state) => state.repo);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [repos]);

  useEffect(() => {
    if (searchParams.get("search_query").trim() === "") return;
    const page = searchParams.get("page") ? searchParams.get("page") : 1;
    dispatch(fetchRepos(searchParams.get("search_query"), page, sortBy));
  }, [searchParams, dispatch, sortBy]);

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
      {!showLoading ? (
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
            <RepoLists
              query={searchParams.get("search_query")}
              page={searchParams.get("page") ? searchParams.get("page") : 1}
            />
          </section>
        </main>
      ) : (
        <div className="h-[90vh] flex justify-center items-center">
          <Loader />
        </div>
      )}
    </Container>
  );
};

export default Results;
