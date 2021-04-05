import React from "react";

export const Category = ({ title, description }) => {
    return (
        <div className="container flex flex-col items-start justify-center py-2 px-5">
            <span className="bg-indigo-500 bg-opacity-80 rounded px-1.5">{title}</span>
            <div className="text-sm prose text-gray-200 px-10 py-1">
                {description}
            </div>
        </div>
    );
};


