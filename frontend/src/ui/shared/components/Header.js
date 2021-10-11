import React from "react";

export const Header = ({ label }) => {
  return (
    <>
      <h1 className="m-4 md:text-3xl sm:text-2xl text-xl font-bold text-white">
        {label}
      </h1>
      <hr />
    </>
  );
};
