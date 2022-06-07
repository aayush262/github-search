import React from "react";
import Card from "../UI/Card";

import { ReactComponent as EyeIcon } from "../../Assets/icons/eye.svg";
import { ReactComponent as StarIcon } from "../../Assets/icons/star.svg";
import { ReactComponent as ForkIcon } from "../../Assets/icons/fork.svg";

const RepoItem = () => {
  return (
    <div>
      <Card>
        <div className="w-40 flex-auto lg:flex-none md:flex-none sm:flex-none ">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
              alt="somepic"
              className="h-48 rounded-md object-cover "
            />
            <div className="absolute flex top-0 left-0 bg-indigo-500 items-center gap-1 text-white py-0.25 px-1.5 rounded-tl-md rounded-br-md">
              <p className="text-sm">14000</p>
              <StarIcon className="w-3 h-3" fill="#fce61c" />
            </div>
            <div className="absolute bottom-0 right-0 flex ">
              <div className="flex items-center gap-1  py-0.25 px-1.5 rounded-tl-md rounded-br-md bg-yellow-600 text-white">
                <EyeIcon className="w-3 h-3" fill="#fff" />
                <p className="text-sm">243890 </p>
              </div>
            </div>
          </div>
        </div>
      </Card>
      <h1> Hello </h1>
      <p> Hi Sir</p>
    </div>
  );
};

export default RepoItem;
