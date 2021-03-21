import React from "react";
import {FaReact, IoLogoJavascript, IoLogoHtml5, IoLogoCss3, SiTypescript, IoLogoNodejs} from "react-icons/all";
import "../../index.css"

export const Technologies = () => {
    return (
        <>
        <div className="mx-5">
            <h1 className="text-3xl">Technologies</h1>
            <div className="mx-2 px-3 grid grid-cols-3 grid-rows-3 grid-4">
                <FaReact className="technology-icons"/>
                <IoLogoNodejs className="technology-icons"/>
                <SiTypescript className="technology-icons"/>
                <IoLogoHtml5 className="technology-icons"/>
                <IoLogoCss3 className="technology-icons"/>
            </div>
        </div>
        </>
    )
}