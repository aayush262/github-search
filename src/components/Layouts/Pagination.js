import React from "react";

const Pagination = ({ currentPage, onHandlePage, size }) => {
  const activeClass = "bg-blue-600 text-white hover:bg-blue-700";
  const disabledClass =
    "text-gray-500 hover:cursor-not-allowed hover:text-gray-500";

  const finalPage = Math.ceil(size / 25);

  return (
    <div className="flex justify-center">
      <ul className="flex gap-6 py-4 font-redHat">
        <li
          onClick={() => {
            if (currentPage <= 1) return;
            onHandlePage(+currentPage - 1);
          }}
          className={`flex items-center hover:cursor-pointer hover:text-blue-600 ${
            +currentPage === 1 ? disabledClass : ""
          }`}
        >
          prev
        </li>
        <li
          className={`px-4 py-2 rounded-md hover:cursor-pointer ${activeClass} `}
        >
          {currentPage}
        </li>
        <li
          onClick={() => {
            if (currentPage >= finalPage) return;
            onHandlePage(+currentPage + 1);
          }}
          className={`flex items-center hover:cursor-pointer  hover:text-blue-600 ${
            +currentPage === finalPage ? disabledClass : ""
          }`}
        >
          next
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
