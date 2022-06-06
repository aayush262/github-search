import React from "react";

const Input = React.forwardRef(({ label, ...props }, ref) => {
  return (
    <>
      <label htmlFor={props.id} className="form-label  text-gray-700">
        {label && label}
      </label>
      <input
        ref={ref}
        className="
              form-control
              w-full
              ml-1
              mt-2
              px-3
              py-2
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              focus:text-gray-700 focus:bg-white focus:border-blue-800 focus:outline-none
              "
        {...props}
      />
    </>
  );
});

export default Input;
