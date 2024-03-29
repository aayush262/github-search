import React from "react";

const Button = ({ children, className, ...props }) => {
  return (
    <>
      <button
        {...props}
        type="button"
        className={`inline-block px-6 py-2.5 bg-blue-800 text-white font-bold text-lg leading-tight  rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ${className}`}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
