import React from "react";
import { Category } from "./Category";
import { CategoryPreview } from "./CategoryPreview";

export const Categories = ({ categories, isPreview = false }) => {
  if (isPreview) {
    return (
      <div>
        {categories.map((category, index) => (
          <CategoryPreview key={index} title={category.title} />
        ))}
      </div>
    );
  }
  return (
    <div className="mx-2 my-10 px-2 py-1">
      <h3 className="text-xl border-b-2 border-indigo-400 my-3">Categories</h3>
      {categories.map((category, index) => (
        <Category
          key={index}
          title={category.title}
          description={category.description}
        />
      ))}
    </div>
  );
};
