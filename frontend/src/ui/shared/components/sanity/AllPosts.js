import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllPosts } from "../../../../store/posts";
import { Date } from "./Date";
import { Categories } from "./Categories";

export default function AllPosts() {
  //useState for search query in filter bar
  const [searchQuery, setSearchQuery] = useState("");

  //get posts from Redux store state
  const statePosts = useSelector((state) => (state.posts ? state.posts : []));
  const filteredPosts = statePosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.categories.forEach((category) =>
        category.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  // handle change event for search form
  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const dispatch = useDispatch();

  const initialEffects = () => {
    dispatch(fetchAllPosts());
  };

  useEffect(initialEffects, [dispatch]);

  return (
    <div className="min-h-screen flex flex-col items-center">
      <h2 className="text-3xl py-5">Blog Posts</h2>
      <div>
        <input
          type="search"
          id="filter-text"
          onChange={handleChange}
          placeholder="Start typing to filter posts"
          className="form-input text-gray-700 ring-2 ring-indigo-500"
        />
      </div>
      <div className="md:grid md:grid-cols-3 xs:grid xs:grid-cols-2 grid-auto-rows gap-10">
        {filteredPosts &&
          filteredPosts.map((post, index) => (
            <Link to={"/" + post.slug.current} key={post.slug.current}>
              <span key={index}>
                <img
                  src={post.mainImage.asset.url}
                  className={
                    "min-w-full object-cover w-64 h-64 pt-10 rounded-l"
                  }
                  alt="blog post"
                />
                <span>
                  <h2 className="py-3">{post.title}</h2>
                </span>
                <Date date={post.publishedAt} />
                <Categories isPreview={true} categories={post.categories} />
              </span>
            </Link>
          ))}
      </div>
    </div>
  );
}
