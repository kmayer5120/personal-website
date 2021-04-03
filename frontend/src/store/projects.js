import { createSlice } from "@reduxjs/toolkit";
import sanityClient from "../client";


export const slice = createSlice({
    name: "projects",
    initialState: [],
    reducers: {
        getAllProjects: (projects, action) => {
            return action.payload;
        },
    },
});

export const fetchAllProjects = () => dispatch => {
    //fetch data from Sanity IO using GROQ query
    sanityClient.fetch(
        `*[_type == "project"] | order(publishedAt desc){
        projectCategories[]->,
            title,
            publishedAt,
            slug,
            mainImage{
              asset->{
              _id,
              url
            },
          }
        }`)
        .then(data => dispatch(getAllProjects(data)))
        .catch(error => console.error(error));
};

export const { getAllProjects, } = slice.actions;

export default slice.reducer;