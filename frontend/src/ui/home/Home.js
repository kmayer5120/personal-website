import React from "react";
import { Technologies } from "../shared/components/Technologies";
import { AboutMe } from "../shared/components/AboutMe";

export const Home = () => {
    return (
        <>
            <body className="box-border bg-white h-screen">
                <section>
                    <div className="flex flex-col">
                        <div className="container mx-auto md:flex">
                            <AboutMe className="min-w-lg flex-1" />
                            <Technologies className="flex-1" />
                        </div>
                    </div>
                </section>
            </body>
        </>
    );
};
