import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { dateFns } from "./../../utils/date-fns";

import { ReactComponent as EyeIcon } from "../../Assets/icons/eye.svg";
import { ReactComponent as StarIcon } from "../../Assets/icons/star.svg";
import { ReactComponent as ForkIcon } from "../../Assets/icons/fork.svg";
import { ReactComponent as BugIcon } from "../../Assets/icons/bug.svg";

const RepoInfo = () => {
  const { selectedRepo } = useSelector((state) => state.repo);

  const isLoading = Object.keys(selectedRepo).length === 0 ? true : false;

  return (
    <>
      {isLoading || (
        <div>
          <h1 className="text-xl font-redHat px-4 py-2">About</h1>

          <div className="flex px-4 pb-2">
            <img
              className="h-16 w-12 rounded-sm object-cover"
              src={selectedRepo.owner.avatar_url}
              alt="avatar_mini"
            />

            <div className="flex items-center ">
              <div className="px-3">
                <Link
                  to={selectedRepo.html_url.replace("https:", "")}
                  target="_blank"
                >
                  <h2 className="text-lg font-redHat hover:text-blue-700">
                    {selectedRepo.name}
                  </h2>
                </Link>
                <Link
                  reloadDocument
                  target="_blank"
                  to={{
                    pathname: `${selectedRepo.owner.html_url.replace(
                      "https:",
                      ""
                    )}`,
                  }}
                >
                  <p className="text-md text-gray-600 hover:text-blue-700 inline">
                    {selectedRepo.owner.login}
                    <span>&nbsp;. &nbsp;</span>
                  </p>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex px-4 flex-col text-gray-600">
            <p className=" leading-[1.5] py-2 text-md ">
              {selectedRepo.description}
            </p>

            <div className="flex gap-1 pb-[0.3rem]">
              <div className="flex items-center">
                <StarIcon className="w-[0.87rem] h-[0.87rem]" />
              </div>
              <p className="text-md">{selectedRepo.stargazers_count} stars</p>
            </div>
            <div className="flex gap-1 pb-[0.3rem]">
              <div className="flex items-center">
                <EyeIcon className="w-[0.87rem] h-[0.87rem]" />
              </div>
              <p className="text-md">{selectedRepo.watchers} watching</p>
            </div>
            <div className="flex gap-1 pb-[0.3rem]">
              <div className="flex items-center">
                <ForkIcon className="w-[0.87rem] h-[0.87rem]" />
              </div>
              <p className="text-md">{selectedRepo.forks_count} forks</p>
            </div>
            <div className="flex gap-1 pb-[0.3rem]">
              <div className="flex items-center">
                <BugIcon className="w-[0.87rem] h-[0.87rem]" />
              </div>
              <p className="text-md">
                {selectedRepo.open_issues_count} open issues
              </p>
            </div>
            <div className="flex gap-1 pb-[0.3rem]">
              <p className="text-md">
                Last updated on: &nbsp;
                {dateFns.formatDate(selectedRepo.updated_at)}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RepoInfo;
