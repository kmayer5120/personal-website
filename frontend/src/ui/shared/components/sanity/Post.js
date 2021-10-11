import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import sanityClient from "../../../../client";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import { Categories } from "./Categories";
import { AuthorCard } from "./AuthorCard";

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

export default function Post() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == $slug]{
          title,
          publishedAt,
          slug,
          mainImage{
            asset->{
              _id,
              url
             }
           },
         body,
         "name": author->name,
         "bio": author->bio[0],
         "authorImage": author->image,
         "categories": categories[]->,
       }`,
        { slug }
      )
      .then((data) => setPost(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!post) return <div className="text-white">Loading...</div>;

  return (
    <div className="bg-gray-800 min-h-screen pb-10 text-white md:px-20 sm:px-5">
      <div className="flex justify-center align-items">
        <div className="md:flex md:flex-row xs:flex-col items-center align-items gap-1">
          <AuthorCard
            name={post.name}
            createdAt={post.publishedAt}
            image={post.authorImage}
            bio={post.bio}
          />
          <Categories categories={post.categories} />
        </div>
      </div>
      <div className=" grid grid-cols-1 grid-auto-rows align-items justify-items-center bg-gray-300 rounded-l text-gray-700">
        <h2 className="block text-2xl text-indigo-600 mt-5">{post.title}</h2>
        <img
          src={urlFor(post.mainImage).width(500).url()}
          className="rounded-l mt-5 py-2 md:max-h-96 md:max-h-96 object-cover"
          alt="blog post"
        />
        <div className="max-w-prose prose p-5 mb-4 rounded-md shadow-lg">
          <BlockContent
            blocks={post.body}
            projectId={sanityClient.projectId}
            dataset={sanityClient.dataset}
          />
        </div>
        <Link to="/blog" className="btn btn-secondary my-5">
          Back to Blog Posts
        </Link>
      </div>
    </div>
  );
}
