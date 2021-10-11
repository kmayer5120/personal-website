import React from "react";

export const CategoryPreview = ({ title }) => {
  return (
    <>
      <div className="container flex flex-row py-2">
        <span className="bg-indigo-500 bg-opacity-80 rounded cursor-pointer px-1.5">
          {title}
        </span>
      </div>
    </>
  );
};
