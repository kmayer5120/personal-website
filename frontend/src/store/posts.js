import { createSlice } from "@reduxjs/toolkit";
import sanityClient from "@sanity/client";


export const slice = createSlice({
    name: "posts",
    initialState: [],
    reducers: {
        getAllPosts: (posts, action) => {
            return action.payload;
        },
    },
});

export const fetchAllPosts = () => async dispatch => {
    try {
        const { data } = await sanityClient.fetch(
            `*[_type == "post"]{
        title,
        slug,
        mainImage{
          asset->{
          _id,
          url
        }
      }
    }`);
        dispatch(getAllPosts(data));
    } catch(error) {
        console.error(error)
    }
};

export const { getAllPosts } = slice.actions;

export default slice.reducer;