import { combineReducers, configureStore } from "@reduxjs/toolkit";
import posts from "./posts";

const reducer = combineReducers({
    posts,
})

export const store = configureStore({reducer});