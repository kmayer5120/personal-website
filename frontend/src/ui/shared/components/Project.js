import React from "react";
import sanityClient from "../../../client";
import { Categories } from "./sanity/Categories";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import { Accordion } from "./Accordion";
import "./css/components.css";
import { FaGithub, FaLink } from "react-icons/fa";

export const Project = ({ project }) => {
  const builder = imageUrlBuilder(sanityClient);

  function urlFor(source) {
    return builder.image(source);
  }

  if (!project) return <div className="text-white">Loading...</div>;
  return (
    <div className="bg-gray-800 min-w-80 pb-10 text-white md:px-20 sm:px-5">
      <div className="grid grid-cols-1 grid-auto-rows align-items justify-items-center bg-gray-300 rounded-l text-gray-700">
        <h2 className="block text-4xl text-indigo-600 mt-5">{project.title}</h2>
        <img
          src={urlFor(project.mainImage).width(700).url()}
          className="rounded-l mb-5 py-2 md:max-h-96 md:max-h-96 object-cover"
          alt="project screenshot"
        />
        <div className="flex gap-5">
          {project.linkToGitHub && (
            <a
              href={`${project.linkToGitHub}`}
              className="text-indigo-600 hover:text-indigo-500 transition duration-300 ease-in-out text-5xl"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          )}
          {project.linkToDeployment && (
            <a
              href={`${project.linkToDeployment}`}
              className="text-indigo-600 hover:text-indigo-500 transition duration-300 ease-in-out text-5xl"
              target="_blank"
              rel="noreferrer"
            >
              <FaLink />
            </a>
          )}
        </div>
        <div className="flex justify-center align-items">
          <div className="md:flex md:flex-col xs:flex-col items-center text-center align-items gap-1">
            <Categories
              isPreview={true}
              categories={project.projectCategories}
            />
          </div>
        </div>
        <Accordion className="pb-3">
          <div className="max-w-prose prose p-5 mb-4 rounded-md shadow-lg">
            <BlockContent
              blocks={project.body}
              projectId={sanityClient.projectId}
              dataset={sanityClient.dataset}
            />
          </div>
        </Accordion>
      </div>
    </div>
  );
};
