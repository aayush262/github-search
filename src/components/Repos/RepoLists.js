import React from "react";
import RepoItem from "./RepoItem";
const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const RepoLists = () => {
  return (
    <>
      <div className="flex flex-wrap gap-5 basis-auto justify-center lg:justify-start md:justify-start">
        {a.map(() => (
          <RepoItem />
        ))}
      </div>
    </>
  );
};

export default RepoLists;
