import React from "react";
import RepoItem from "./RepoItem";

const RepoLists = ({ repos }) => {
  return (
    <>
      <div className="flex flex-wrap gap-5 basis-auto justify-center lg:justify-start md:justify-start">
        {repos.length > 0 ? (
          repos.map((repo) => <RepoItem repo={repo} />)
        ) : (
          <h2 className="font-redHat">No results Found</h2>
        )}
      </div>
    </>
  );
};

export default RepoLists;
