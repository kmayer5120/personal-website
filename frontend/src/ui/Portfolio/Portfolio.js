import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllProjects } from "../../store/projects";
import { Project } from "../shared/components/Project";

export function Portfolio() {
  //useState for search query in filter bar
  const [searchQuery, setSearchQuery] = useState("");

  //get projects from Redux store state
  const projects = useSelector((state) =>
    state.projects ? state.projects : []
  );
  const filteredProjects = projects.filter(
    (projects) =>
      projects.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      projects.projectCategories.forEach((category) =>
        category.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  // handle change event for search form
  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const dispatch = useDispatch();

  const initialEffects = () => {
    dispatch(fetchAllProjects());
  };

  useEffect(initialEffects, [dispatch]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-top">
      <h2 className="text-3xl py-5 text-white">Portfolio</h2>
      <div>
        <input
          type="search"
          id="filter-text"
          onChange={handleChange}
          placeholder="Start typing to filter projects"
          className="form-input text-gray-700 ring-2 ring-indigo-500 mb-10"
        />
      </div>
      <div className="md:grid grid-cols-1 grid-auto-rows gap-5">
        {filteredProjects &&
          filteredProjects.map((project, index) => (
            <Project key={index} project={project} />
          ))}
      </div>
    </div>
  );
}
