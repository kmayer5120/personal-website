import React from "react";
import { Header } from "./Header";
import "../../../index.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profilePicture from "../../img/kyle-mayer-profile-picture.jpg";

export const AboutMe = () => {
    return (
        <>
            <div className="container bg-indigo-900 border rounded-xl shadow-md mt-10 md:mx-5 md:max-w-md">
                <Header label="Bio" />
                <div className="md:grid grid-cols-1 align-items justify-items-center">
                    <img
                        src={profilePicture}
                        alt="Kyle"
                        className="my-5 rounded-lg max-w-xs mx-auto"
                    />
                    <div className="px-20 flex-row">
                        <p className="max-w-prose text-indigo-100 my-5">
                            Passionate and creative problem solver working to
                            expand my skill set as much as possible every single
                            day. My previous career as a professional chef
                            taught me how to be organized, methodical, and a
                            team player in order to deliver quality products in
                            a timely manner.
                        </p>
                        <div className="grid grid-cols-2 gap-5 mb-5 items-center">
                            <a
                                href="https://www.linkedin.com/in/kyle-mayer-fullstack/"
                                className="text-white hover:text-indigo-300 transition duration-300 ease-in-out text-8xl flex-none"
                            >
                                <FaGithub />
                            </a>
                            <a
                                href="https://github.com/kmayer5120"
                                className="text-white hover:text-indigo-300 transition duration-300 ease-in-out text-8xl flex-none"
                            >
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
