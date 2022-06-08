import React from "react";
import { useSelector } from "react-redux";
import Pagination from "../Layouts/Pagination";
import RepoItem from "./RepoItem";
import { useSearch } from "../../hooks/useSearch";

const RepoLists = ({ query, page }) => {
  const { repos, totalRepos } = useSelector((state) => state.repo);
  const search = useSearch();

  const handlePage = (newPageNumber) => {
    console.log(newPageNumber);
    search(query, newPageNumber);
  };

  return (
    <>
      <p className="text-md text-gray-600 pb-3">About {totalRepos} results.</p>

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
