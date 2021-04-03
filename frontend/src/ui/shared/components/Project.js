import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import sanityClient from "../../../client";
import { Categories } from "./sanity/Categories";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";

export const Project = () => {
    const [project, setProject] = useState(null);
    const { slug } = useParams();

    const builder = imageUrlBuilder(sanityClient);

    function urlFor(source) {
        return builder.image(source);
    }

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
         "projectCategories": projectCategories[]->,
       }`,
                { slug },
            )
            .then((data) => setProject(data[0]))
            .catch(console.error);
    }, [slug]);

    if (!project) return <div className="text-white">Loading...</div>;
    return (
        <div className="bg-gray-800 min-h-screen pb-10 text-white md:px-20 sm:px-5">
            <div className="flex justify-center align-items">
                <div className="md:flex md:flex-row xs:flex-col items-center align-items gap-1">
                    <Categories categories={project.projectCategories} />
                </div>
            </div>
            <div
                className=" grid grid-cols-1 grid-auto-rows align-items justify-items-center bg-gray-300 rounded-l text-gray-700">
                <h2 className="block text-2xl text-indigo-600 mt-5">{project.title}</h2>
                <img
                    src={urlFor(project.mainImage).width(500).url()}
                    className="rounded-l mt-5 py-2 md:max-h-96 md:max-h-96 object-cover"
                    alt="project screenshot" />
                <div className="max-w-prose prose p-5 mb-4 rounded-md shadow-lg">
                    <BlockContent
                        blocks={project.body}
                        projectId={sanityClient.projectId}
                        dataset={sanityClient.dataset}
                    />
                </div>
                <Link to="/portfolio" className="btn btn-secondary my-5">Back to Portfolio</Link>
            </div>
        </div>
    )
}