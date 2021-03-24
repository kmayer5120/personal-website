import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../../../../client";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";

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
          slug,
          mainImage{
            asset->{
              _id,
              url
             }
           },
         body,
        "name": author->name,
        "biography": author->bio,
        "authorImage": author->image,
       }`,
                { slug },
            )
            .then((data) => setPostData(data[0]))
            .catch(console.error);
    }, [slug]);

    if (!postData) return <div>Loading...</div>;

    return (
        <div className="bg-gray-800 h-screen text-white md:px-20 sm:px-5">
            <div className="flex flex-col align-items justify-center gap-10">
                <h2 className="block text-3xl mt-5">{postData.title}</h2>
                <hr/>
                <div className="container flex align-baseline justify-center">
                    <img
                        src={urlFor(postData.authorImage).width(100).url()}
                        className="block rounded-full my-5"
                        alt="Author: Kyle"
                    />
                    <h4 className="text-2xl my-10 ml-10">{postData.name}</h4>
                    {/*<h5 className="text-l ">Fullstack Developer</h5>*/}
                </div>
            </div>
            <div
                className="grid grid-cols-1 grid-rows-3 align-items justify-items-center bg-gray-300 rounded-l text-gray-700">
                <img
                    src={urlFor(postData.mainImage).width(500).url()}
                    className="rounded-l mt-10 py-5"
                    alt="blog post" />
                <div className="max-w-prose">
                    <BlockContent
                        blocks={postData.body}
                        projectId={sanityClient.projectId}
                        dataset={sanityClient.dataset}
                    />
                </div>
            </div>
        </div>
    );
}
