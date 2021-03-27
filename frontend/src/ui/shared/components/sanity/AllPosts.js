import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../../../../client";
import { FilterBar } from "../FilterPosts/FilterBar";

export default function AllPosts() {
  const [allPostsData, setAllPosts] = useState(null);

  useEffect(() => {
    sanityClient
        .fetch(
            `*[_type == "post"]{
        title,
        slug,
        mainImage{
          asset->{
          _id,
          url
        }
      }
    }`
        )
        .then((data) => setAllPosts(data))
        .catch(console.error);
  }, []);

  return (
      <div className="min-h-screen flex flex-col items-center">
        <h2 className="text-3xl py-5">Blog Posts</h2>
          <FilterBar/>
        <div className="md:grid md:grid-cols-3 xs:grid xs:grid-cols-2 grid-auto-rows gap-3">
          {allPostsData &&
          allPostsData.map((post, index) => (
              <Link to={"/" + post.slug.current} key={post.slug.current}>
              <span key={index}>
                <img src={post.mainImage.asset.url} className={"min-w-sm h-64 w-64 object-cover pt-10 rounded-l"} alt="blog post" />
                <span>
                  <h2 className="py-3">{post.title}</h2>
                </span>
              </span>
              </Link>
          ))}
        </div>
      </div>
  );
}