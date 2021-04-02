import React from "react";
import { PostDate } from "./PostDate";
import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "../../../../client";
const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
    return builder.image(source);
}

export const AuthorCard = ({ name, image, createdAt, bio }) => {
    return (
        <div className="container flex flex-row items-center justify-center">
            <img
                src={urlFor(image).width(100).url()}
                className="block rounded-full my-5 mr-5 border-2 rounded border-indigo-600"
                alt="Author: Kyle"
            />
            <div className="flex flex-col justify-center align-items ml-5">
                <h4 className="text-xl">Author: {name}</h4>
                {bio.children[0].text}
                <PostDate date={createdAt} />
            </div>
            <div>
            </div>
        </div>
    );
};