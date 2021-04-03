import { createSlice } from "@reduxjs/toolkit";
import sanityClient from "../client";


export const slice = createSlice({
    name: "posts",
    initialState: [],
    reducers: {
        getAllPosts: (posts, action) => {
            return action.payload;
        },
    },
});

export const fetchAllPosts = () => dispatch => {
    //fetch data from Sanity IO using GROQ query
    sanityClient.fetch(
        `*[_type == "post"] | order(publishedAt desc){
        categories[]->,
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
        .then(data => dispatch(getAllPosts(data)))
        .catch(error => console.error(error));
};

export const { getAllPosts } = slice.actions;

export default slice.reducer;