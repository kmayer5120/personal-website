import React from "react";
import { Technologies } from "../shared/components/Technologies";
import { AboutMe } from "../shared/components/AboutMe";

export const Home = () => {
    return (
        <>
            <body className="box-border bg-gray-800 pb-10 h-screen mb-auto overflow-y-scroll">
                <section className="flex align-items justify-center">
                    <div className="flex flex-col">
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
