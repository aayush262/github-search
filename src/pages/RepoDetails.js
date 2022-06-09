import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchRepoItem, fetchContent } from "../store/repo-actions";
import Container from "../Components/Layouts/Container";
import NavBar from "../Components/Layouts/NavBar";
import Brand from "../Components/Brand";
import Button from "../Components/UI/Button";
import RepoInfo from "../Components/Repos/RepoInfo";
import MarkDown from "../Components/Repos/MarkDown";

import { ReactComponent as HomeIcon } from "./../Assets/icons/home.svg";
import { ReactComponent as ArrowRightIcon } from "./../Assets/icons/arrowRight.svg";
import { ReactComponent as BranchIcon } from "./../Assets/icons/branch.svg";

const RepoDetails = () => {
  const { owner, name } = useParams();
  const { selectedRepo } = useSelector((state) => state.repo);
  const dispatch = useDispatch();

  useEffect(() => {
    if (Object.keys(selectedRepo).length === 0) {
      dispatch(fetchRepoItem(owner, name));
    }
  }, [selectedRepo, dispatch, owner, name]);

  useEffect(() => {
    dispatch(fetchContent(owner, name));
  }, [dispatch, owner, name]);

  return (
    <Container>
      <NavBar>
        <Brand />
        <div className="py-2 flex items-center">
          <Button>Explore</Button>
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
              <p>{name}</p>
            </div>
          </li>
        </ol>

        <section className="mt-4 flex gap-5 lg:flex-nowrap  flex-wrap ">
          <div className="w-full lg:w-2/3 h-full ">
            <div className="flex gap-2">
              <p className="rounded bg-slate-400 inline-block px-4 py-2 font-redHat">
                <div className="flex gap-1">
                  <div className="flex items-center">
                    <BranchIcon className="h-4 w-4" />
                  </div>
                  {selectedRepo.default_branch}
                </div>
              </p>
              <h2 className="text-4xl font-redHat">ReadMe.md</h2>
            </div>
            <MarkDown />
          </div>
          <div className="w-1/3 h-full">
            <RepoInfo />
          </div>
        </section>
      </main>
    </Container>
  );
};

export default RepoDetails;
