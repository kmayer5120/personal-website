import { combineReducers, configureStore } from "@reduxjs/toolkit";
import posts from "./posts";
import projects from "./projects";

const reducer = combineReducers({
  posts,
  projects,
});

export const store = configureStore({ reducer });
