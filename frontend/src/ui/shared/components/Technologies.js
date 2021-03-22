import React from "react";
import {
    FaReact,
    SiJavascript,
    IoLogoHtml5,
    IoLogoCss3,
    SiTypescript,
    IoLogoDocker,
} from "react-icons/all";
import "../../../index.css";
import { Header } from "./Header";

export const Technologies = () => {
    return (
        <>
            <div className="container bg-indigo-900  border rounded-xl shadow-md mt-10 md:mx-5 md:max-w-md">
                <Header label="Technologies" />
                <div className="grid my-5 px-20 grid-flow-cols grid-flow-rows grid-cols-3 grid-rows-3 gap-7">
                    <FaReact className="technology-icons" />
                    <SiJavascript className="technology-icons" />
                    <SiTypescript className="technology-icons" />
                    <IoLogoHtml5 className="technology-icons" />
                    <IoLogoCss3 className="technology-icons" />
                    <IoLogoDocker className="technology-icons" />
                </div>
            </div>
        </>
    );
};
