import React from "react";
import AllPosts from "../shared/components/sanity/AllPosts";

export const Blog = () => {
    return (
        <>
            <div className="box-border px-10 bg-gray-800 text-white">
                <AllPosts />
            </div>
        </>
    );
};