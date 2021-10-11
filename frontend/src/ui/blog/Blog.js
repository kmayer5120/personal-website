import React from "react";
import AllPosts from "../shared/components/sanity/AllPosts";

export const Blog = () => {
  return (
    <>
      <div className="min-h-full px-10 bg-gradient-to-b from-gray-800 to-gray-700 bg-auto text-white">
        <AllPosts />
      </div>
    </>
  );
};
