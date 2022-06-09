import React from "react";

const Dropdown = ({ sortList, onHandleSort, sortValue }) => {
  return (
    <div className="flex items-center gap-1 text-sm">
      <p className="text-gray-600">Sort By</p>
      <select
        onChange={(e) => {
          onHandleSort(e.target.value);
        }}
        className="block p-1 bg-gray-200 font-sans rounded-md"
        value={sortValue}
      >
        {sortList.map((sortListItem) => (
          <option key={sortListItem.value} value={sortListItem.value}>
            {sortListItem.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
