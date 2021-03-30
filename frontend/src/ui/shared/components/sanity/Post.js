import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import sanityClient from "../../../../client";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import { PostDate } from "./PostDate";

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
    return builder.image(source);
}

export default function Post() {
    const [postData, setPostData] = useState(null);
    const { slug } = useParams();

    useEffect(() => {
        sanityClient
            .fetch(
                `*[slug.current == $slug]{
          title,
          _createdAt,
          slug,
          mainImage{
            asset->{
              _id,
              url
             }
           },
         body,
         category,
        "name": author->name,
        "bio": author->bio,
        "authorImage": author->image,
       }`,
                { slug },
            )
            .then((data) => setPostData(data[0]))
            .catch(console.error);
    }, [slug]);

    if (!postData) return <div className="text-white">Loading...</div>;

    console.log(postData);


    return (
        <div className="bg-gray-800 min-h-screen pb-10 text-white md:px-20 sm:px-5">
            <div className="flex flex-col items-center justify-center gap-1">
                <div className="container flex flex-row items-center justify-center">
                    <img
                        src={urlFor(postData.authorImage).width(50).url()}
                        className="block rounded-full my-5 mr-5 border-2 rounded border-indigo-600"
                        alt="Author: Kyle"
                    />
                    <div className="flex flex-col justify-items-center">
                        <h4 className="text-xl my-2 ml-10">Author: {postData.name}</h4>
                        <PostDate date={postData._createdAt} />
                    </div>
                </div>
            </div>
            <div
                className=" grid grid-cols-1 grid-auto-rows align-items justify-items-center bg-gray-300 rounded-l text-gray-700">
                <h2 className="block text-2xl text-indigo-600 mt-5">{postData.title}</h2>
                <img
                    src={urlFor(postData.mainImage).width(500).url()}
                    className="rounded-l mt-5 py-2 md:max-h-96 md:max-h-96 object-cover"
                    alt="blog post" />
                <div className="max-w-prose prose p-5 mb-4 rounded-md shadow-lg">
                    <BlockContent
                        blocks={postData.body}
                        projectId={sanityClient.projectId}
                        dataset={sanityClient.dataset}
                    />
                </div>
                <Link to="/blog" className="btn btn-secondary my-5">Back to Blog Posts</Link>
            </div>
        </div>
    );
}
