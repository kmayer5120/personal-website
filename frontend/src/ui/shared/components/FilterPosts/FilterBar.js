import React from "react";

export const FilterBar = () => {
    return (
        <div>
            <input type="search" placeholder="Start typing to filter posts"
                   className="form-input text-gray-700 ring-2 ring-indigo-500" />
        </div>
    );
};