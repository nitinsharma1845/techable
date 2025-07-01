import React, { forwardRef, useId } from "react";

const Input = ({ label, type = "text", ref, className = "", ...props }) => {
  const id = useId();

  return (
    <div className="mb-4 w-full">
      {label && (
        <label
          htmlFor={id}
          className=" gradient-text block mb-1 text-sm font-medium"
        >
          {label}
        </label>
      )}
      <input
        type={type}
        ref={ref}
        id={id}
        {...props}
        className={`w-full px-2 py-3 outline-none gradient-text placeholder:text-gray-400 placeholder:font-extralight caret-white placeholder:px-2 gradient-border ${className}`}
      />
    </div>
  );
};

export default forwardRef(Input);
