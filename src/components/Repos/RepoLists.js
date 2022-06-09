import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRepos } from "../../store/repo-actions";
import Pagination from "../Layouts/Pagination";
import RepoItem from "./RepoItem";
import { useSearch } from "../../hooks/useSearch";
import Dropdown from "../UI/Dropdown";

const RepoLists = ({ query, page }) => {
  const { repos, totalRepos, sortBy } = useSelector((state) => state.repo);
  const search = useSearch();
  const dispatch = useDispatch();

  const handlePage = (newPageNumber) => {
    search(query, newPageNumber);
  };

  const sortList = [
    {
      name: "Default",
      value: "default",
    },
    { name: "Stars", value: "stars" },
    {
      name: "Forks",
      value: "forks",
    },
    {
      name: "Updated",
      value: "updated",
    },
  ];

  const handleSort = (sortValue) => {
    dispatch(fetchRepos(query, page, sortValue));
  };

  return (
    <>
      <div className="flex gap-4 pb-3">
        <p className="text-md  text-gray-600 ">About {totalRepos} results.</p>
        <div className="flex items-center">
          <Dropdown
            onHandleSort={handleSort}
            sortList={sortList}
            sortValue={sortBy}
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-5 basis-auto justify-center lg:justify-start md:justify-start sm:justify-start">
        {repos.length > 0 ? (
          repos.map((repo) => <RepoItem key={repo.id} repo={repo} />)
        ) : (
          <h2 className="font-redHat">No results Found</h2>
        )}
      </div>

      <Pagination
        currentPage={page}
        onHandlePage={handlePage}
        size={+totalRepos}
      />
    </>
  );
};

export default RepoLists;
