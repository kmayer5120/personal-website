import React from "react";
import { Technologies } from "../shared/components/Technologies";
import { AboutMe } from "../shared/components/AboutMe";

export const Home = () => {
    return (
        <>
            <body className="box-border bg-gray-800">
                <section>
                    <img
                        src="https://images.unsplash.com/photo-1584949091598-c31daaaa4aa9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                        alt="background with code"
                        className="md:visible invisible bg-center bg-cover min-h-full w-full absolute"
                    />
                    <div className="flex flex-col relative">
                        <div className="container mx-auto md:flex align-items justify-content-center">
                            <AboutMe className="flex-grow" />
                            <Technologies className="flex-grow" />
                        </div>
                    </div>
                </section>
            </body>
        </>
    );
};
