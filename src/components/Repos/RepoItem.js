import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { repoActions } from "../../store/repo-slice";
import Card from "../UI/Card";

import { ReactComponent as EyeIcon } from "../../Assets/icons/eye.svg";
import { ReactComponent as StarIcon } from "../../Assets/icons/star.svg";
import { ReactComponent as ForkIcon } from "../../Assets/icons/fork.svg";

const RepoItem = ({ repo }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRepo = () => {
    dispatch(repoActions.selectRepo(repo));
    navigate(`/repo/${repo.full_name}`);
  };
  return (
    <div>
      <Card>
        <div className="w-40 flex-auto lg:flex-none md:flex-none sm:flex-none ">
          <div className="relative">
            <img
              src={repo.owner.avatar_url}
              alt="avatar"
              className="h-48 rounded-md object-cover "
            />
            <div className="absolute flex top-0 left-0 bg-indigo-500 items-center gap-1 text-white py-0.25 px-1.5 rounded-tl-md rounded-br-md">
              <p className="text-sm">{repo.stargazers_count}</p>
              <StarIcon className="w-3 h-3" fill="#fce61c" />
            </div>
            <div className="absolute bottom-0 right-0 flex ">
              <div className="flex items-center gap-1  py-0.25 px-1.5 rounded-tl-md  bg-yellow-600 text-white">
                <EyeIcon className="w-3 h-3" fill="#fff" />
                <p className="text-sm">{repo.watchers} </p>
              </div>
              <div className="flex items-center gap-1  py-0.25 px-1.5  rounded-br-md bg-sky-600 text-white">
                <ForkIcon className="w-3 h-3" fill="#fff" />
                <p className="text-sm">{repo.forks} </p>
              </div>
            </div>
          </div>
        </div>
      </Card>
      <div className="w-40">
        <h1
          onClick={handleRepo}
          className="text-sm font-redHat py-1 hover:underline hover:decoration-2 overflow-clip hover:cursor-pointer"
        >
          {repo.full_name}
        </h1>
        {repo.description && repo.description.length >= 40 ? (
          <p className="text-sm text-gray-600">
            {repo.description.slice(0, 40)}....&nbsp;
            <span className="text-blue-800">more</span>
          </p>
        ) : (
          <p className="text-sm text-gray-600">{repo.description}</p>
        )}
      </div>
    </div>
  );
};

export default RepoItem;
