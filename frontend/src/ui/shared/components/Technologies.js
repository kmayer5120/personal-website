import React from "react";
import {
    FaReact,
    SiJavascript,
    IoLogoHtml5,
    IoLogoCss3,
    SiTypescript,
    IoLogoDocker,
    SiMysql,
    FaNode,
    FaBootstrap,
} from "react-icons/all";
import "../../../index.css";
import { Header } from "./Header";
import ddcLogo from "../../img/ddc.png";

export const Technologies = () => {
    return (
        <>
            <div className="container bg-indigo-900 border-2 border-white border-opacity-50 rounded-xl shadow-md mt-10 md:mx-5 md:max-w-md">
                <Header label="Technologies" />
                <div className="grid my-5 px-20 grid-flow-cols grid-flow-rows grid-cols-3 grid-rows-3 gap-7">
                    <FaReact className="technology-icons" />
                    <SiJavascript className="technology-icons" />
                    <SiTypescript className="technology-icons" />
                    <IoLogoHtml5 className="technology-icons" />
                    <IoLogoCss3 className="technology-icons" />
                    <FaBootstrap className="technology-icons" />
                    <SiMysql className="technology-icons" />
                    <FaNode className="technology-icons" />
                    <IoLogoDocker className="technology-icons" />
                </div>
                <div className="mx-20">
                    <p className="text-indigo-100 max-w-prose my-5">
                        I learned these technologies (and many more!) when I
                        took the Fullstack Deep Dive Coding Bootcamp. I am proud
                        to be an alumni of this bootcamp.
                    </p>
                    <div className="bg-white p-5 my-5">
                        <a href="https://deepdivecoding.com/">
                            <img
                                src={ddcLogo}
                                alt="Deep Dive Coding Logo"
                                className="hover:opacity-75 transition ease-in-out duration-300"
                            />
                        </a>
                    </div>
                    <p className="text-indigo-100 max-w-prose my-5">
                        This fullstack bootcamp consisted of 400 hours of in
                        class time. We wrote code daily and participated in a
                        capstone team project build with MySQL, Express, React,
                        and Node.
                    </p>
                </div>
            </div>
        </>
    );
};
