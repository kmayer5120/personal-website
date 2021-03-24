import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../../../../client";

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
      <div className="h-screen">
        <h2 className="text-3xl py-5">Blog Posts</h2>
        <h3 className="text-xl text-indigo-200">Welcome to my blog posts page!</h3>
        <div className="md:grid grid-cols-3 grid-auto-rows gap-5">
          {allPostsData &&
          allPostsData.map((post, index) => (
              <Link to={"/" + post.slug.current} key={post.slug.current}>
              <span key={index}>
                <img src={post.mainImage.asset.url} className={"min-w-sm pt-10 rounded-l"} alt="blog post" />
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